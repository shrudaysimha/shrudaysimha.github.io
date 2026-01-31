import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import type { SectionType } from '../types';

interface Hero3DProps {
  activeSection: SectionType;
}

const Hero3D: React.FC<Hero3DProps> = ({ activeSection }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const particlesMaterialRef = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => {
    // CAPTURE REF VALUE for safe cleanup
    const container = mountRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Append to container
    container.appendChild(renderer.domElement);

    // --- Custom Sketch Shader ---
    const vertexShader = `
      varying vec3 vBarycentric;
      varying vec3 vPosition;
      varying vec2 vUv;
      uniform float uTime;

      // Simplex 3D Noise 
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - 1.0 + 3.0*C.xxx;
        i = mod289(i);
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      attribute vec3 barycentric;

      void main() {
        vBarycentric = barycentric;
        vUv = uv;
        
        float noiseVal = snoise(position * 1.5 + uTime * 0.15);
        vec3 newPos = position + normal * noiseVal * 0.08; 

        vPosition = newPos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vBarycentric;
      varying vec3 vPosition;
      uniform float uTime;

      float rand(vec2 co){
          return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec3 d = fwidth(vBarycentric);
        float thickness = 1.2 + 0.5 * sin(uTime + vPosition.y); 
        vec3 a3 = smoothstep(vec3(0.0), d * thickness, vBarycentric);
        float edge = min(min(a3.x, a3.y), a3.z);
        
        float line = 1.0 - edge;
        float grain = rand(vPosition.xy * 10.0);
        line = smoothstep(0.3, 0.9, line); 
        line *= (0.7 + 0.3 * grain); 

        if(line < 0.05) discard;

        vec3 color = vec3(0.3, 0.3, 0.3); 
        gl_FragColor = vec4(color, line);
      }
    `;

    // Geometry
    const geometry = new THREE.IcosahedronGeometry(2.2, 1);
    const nonIndexedGeometry = geometry.toNonIndexed();
    const count = nonIndexedGeometry.attributes.position.count;
    const barycentric = [];
    for (let i = 0; i < count; i += 3) {
      barycentric.push(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    nonIndexedGeometry.setAttribute('barycentric', new THREE.Float32BufferAttribute(barycentric, 3));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 } },
      side: THREE.DoubleSide,
      transparent: true,
    });

    const mesh = new THREE.Mesh(nonIndexedGeometry, material);
    mesh.position.set(1.8, 0, 0); 
    meshRef.current = mesh;
    scene.add(mesh);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount; i++) {
        const r = 4 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i * 3 + 2] = r * Math.cos(phi);
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.04, 
        color: new THREE.Color(0x2563eb),
        transparent: true, 
        opacity: 0.6,
        sizeAttenuation: true
    });
    particlesMaterialRef.current = particlesMaterial;

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particlesMesh;
    scene.add(particlesMesh);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;
      
      if (meshRef.current) {
        meshRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2;
        meshRef.current.rotation.y = elapsedTime * 0.15;
        meshRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
      }
      
      if (particlesRef.current) {
          particlesRef.current.rotation.y = -elapsedTime * 0.05;
          particlesRef.current.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Strict cleanup using the captured container variable
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      geometry.dispose();
      nonIndexedGeometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // --- Reactive Animations ---
  useEffect(() => {
    if (!cameraRef.current || !meshRef.current || !particlesRef.current || !particlesMaterialRef.current) return;

    const timeline = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1.5 } });

    switch (activeSection) {
        case 'home':
            timeline.to(cameraRef.current.position, { x: 0, z: 6 });
            timeline.to(meshRef.current.material, { opacity: 1 }, 0);
            timeline.to(particlesMaterialRef.current.color, { r: 0.145, g: 0.388, b: 0.921 }, 0);
            timeline.to(particlesRef.current.scale, { x: 1, y: 1, z: 1 }, 0);
            break;

        case 'work':
            timeline.to(cameraRef.current.position, { x: 3.5, z: 3.5 });
            timeline.to(meshRef.current.material, { opacity: 1 }, 0);
            timeline.to(particlesMaterialRef.current.color, { r: 0.145, g: 0.388, b: 0.921 }, 0);
            timeline.to(particlesRef.current.scale, { x: 1.2, y: 1.2, z: 1.2 }, 0);
            break;

        case 'about':
            timeline.to(cameraRef.current.position, { x: -4, z: 4.5 });
            timeline.to(meshRef.current.material, { opacity: 0.1 }, 0);
            timeline.to(particlesRef.current.scale, { x: 2.5, y: 2.5, z: 2.5, duration: 2.5, ease: "slow(0.7, 0.7, false)" }, 0);
            timeline.to(particlesMaterialRef.current.color, { r: 1.0, g: 0.717, b: 0.0 }, 0);
            break;

        case 'contact':
            timeline.to(cameraRef.current.position, { x: 0, y: 0, z: 14 });
            timeline.to(meshRef.current.material, { opacity: 0 }, 0);
            timeline.to(particlesMaterialRef.current.color, { r: 0.13, g: 0.82, b: 0.93 }, 0);
            timeline.to(particlesRef.current.scale, { x: 1, y: 1, z: 1 }, 0);
            break;
    }

  }, [activeSection]);

  return (
    <div 
      ref={mountRef} 
      // Changed z-10 to z-0 to sit behind content
      className="absolute top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none"
    />
  );
};

export default Hero3D;
import type { ReactNode, ButtonHTMLAttributes } from 'react';


export type ButtonVariant = 'primary' | 'secondary';
export type SectionType = 'home' | 'work' | 'about' | 'contact';
export type ViewMode = 'home' | 'projects' | 'about' | 'contact';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
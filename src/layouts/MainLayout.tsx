import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--text-1)]">
      <Header />
      <main id="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;


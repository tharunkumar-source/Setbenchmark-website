import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for link pointing to external signup
      const signupLink = target.closest('a[href*="app.setbenchmark.com/signup"]') as HTMLAnchorElement | null;
      if (signupLink) {
        e.preventDefault();
        navigate('/free-trial/');
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [navigate]);

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


// app/layout.tsx
"use client";
import { EdgeStoreProvider } from '@/lib/edgestore';
import Footer from './Components/Footer';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className='bg-slate-100 w-screen'>
         <EdgeStoreProvider>
           {children}
         </EdgeStoreProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;

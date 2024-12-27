import Footer from './Footer';
import Header from './Header'


import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-white bg-background">
      <Header />
      <main className="flex-grow container max-w-7xl mx-auto px-8 py-8">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

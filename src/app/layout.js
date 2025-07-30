import { Open_Sans } from 'next/font/google'
import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Neuroticure - AI-Powered Mental Health Solutions',
  description: 'Personalized mental wellness solutions powered by artificial intelligence.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans" style={{ backgroundColor: '#FAF6E9', fontFamily: 'var(--font-open-sans)' }}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

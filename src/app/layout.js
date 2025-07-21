import { Open_Sans } from 'next/font/google'
import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll';

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
      <body className="font-sans" style={{ backgroundColor: '#D5CEBC', fontFamily: 'var(--font-open-sans)' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

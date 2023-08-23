import Navbar from '@/Components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/Components/footer/Footer'
import { ThemeProvider } from '@/Context/ThemeContext'
import Authprovider from '@/Components/Authprovider/Authprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Authprovider>
        <div className="container">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </Authprovider>
        </ThemeProvider>
       
        
        </body>
    </html>
  )
}

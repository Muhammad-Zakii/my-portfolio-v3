import type React from "react"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "@/components/theme-provider"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"

export const metadata = {
  title: "Muhammad Zaki's Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        
          {children}
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/themeProvider'
import { router } from './routes'
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors closeButton position="top-right" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

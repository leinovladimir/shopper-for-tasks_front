import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProviders } from './app/providers'

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./shared/api/mock/browser')
    return worker.start({ onUnhandledRequest: 'bypass' })
  }
}

prepare().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppProviders />
    </StrictMode>
  )
})

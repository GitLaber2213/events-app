import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppLayout } from './layout/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppLayout />
    </Provider>
  </StrictMode>,
)

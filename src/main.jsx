import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return <div>
    <h1>pega title</h1>
  </div>
}






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './App.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

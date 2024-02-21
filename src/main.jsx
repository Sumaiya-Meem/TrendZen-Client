
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-[1200px] mx-auto">
   <AuthProvider>
        <div className='max-w-screen-lg mx-auto'>
          <RouterProvider router={router} />
        </div>
    </AuthProvider>
  </div>

)

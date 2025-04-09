import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModeProvider } from './Components/Mode'
import App from './App/App'
import './index.css'

<title>Subhendu | Portfolio</title>
<meta name="description" content="Subhendu Das's portfolio website" />

<!-- 👇 Social media preview (Open Graph tags) -->
<meta property="og:title" content="Subhendu | Portfolio" />
<meta property="og:description" content="Subhendu Das's portfolio website" />
<meta property="og:image" content="%PUBLIC_URL%/preview-image.png" />
<meta property="og:url" content="https://portfolio-website-rho-five-72.vercel.app/" />
<meta name="twitter:card" content="summary_large_image" />

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ModeProvider><App /></ModeProvider>)

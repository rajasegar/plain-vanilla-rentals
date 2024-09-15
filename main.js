import { registerApp } from './components/app'
import { registerRouteComponent } from './components/route/route'
import { registerNavbar } from './components/navbar'

const app = () => {
  registerRouteComponent();
  registerApp();
  registerNavbar();
  
}

// Register app



document.addEventListener('DOMContentLoaded', app)


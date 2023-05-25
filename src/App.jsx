import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from'./component/header';
import HeroApp from'./component/hero';
import AppAbout from './component/about';
import AppServices from './component/services';
import AppWorks from'./component/works';
import Appteams from'./component/teams';
import AppTestimonials from './component/testimonials';
import AppPricing from './component/pricing';
import AppBlog from './component/blog';
import AppContact from './component/contact';
import AppFooter from './component/footer'



function App() {
  
  return (
    <>
      <header id='header'>
        <AppHeader/>
      </header>    
      <main>
        <HeroApp/>
        <AppAbout/>
        <AppServices/>
        <AppWorks/>
        <Appteams/>
        <AppTestimonials/>
        <AppPricing/>
        <AppBlog/>
        <AppContact/>
      </main>
      <footer id='footer'>
      <AppFooter/>
      </footer>
    </>
  )
}

export default App

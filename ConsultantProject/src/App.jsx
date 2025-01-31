import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Packages from './components/Packages/Packages'
import Registration from './components/Registration/Registration'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle = 'Our Program' title='What we Offer'/>
        <Title subTitle = 'Click On The Sections Below for more info' title=''/>
        <Programs />
        <Packages />
        {/* <Title subTitle = 'Gallery' title='Blogs'/> */}
        {/* <Campus /> */}
        <Title subTitle = 'Our Students' title='Testimonials'/>
        <Testimonials />
        <Registration />
        <Title subTitle = 'Contact Us' title='Get in touch'/>
        <Contact />
        {/* <Footer /> */}
        </div>
    </div>
  )
}

export default App

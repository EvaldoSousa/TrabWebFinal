import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Find from '../components/find/Find'
import Flor from '../components/flor/Flor'
import Footer from '../components/footer/Footer'

function Principal() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Flor />
      <Footer />
    </div>
  );
}

export default Principal;
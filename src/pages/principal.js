import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Find from '../components/find/Find'
import Driver from '../components/driver/Driver'
import Footer from '../components/footer/Footer'

function Principal() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Footer />
    </div>
  );
}

export default Principal;
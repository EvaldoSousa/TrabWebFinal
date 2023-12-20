import React from 'react'
import NavbarNaoLog from '../components/navbar/NavbarNaoLog'
import Hero from '../components/hero/Hero'
import Find from '../components/find/Find'
import Flor from '../components/flor/Flor'
import Footer from '../components/footer/Footer'

function PrincipalNaoLog() {
  return (
    <div>
      <NavbarNaoLog />
      <Hero />
      <Find />
      <Flor />
      <Footer />
    </div>
  );
}

export default PrincipalNaoLog;
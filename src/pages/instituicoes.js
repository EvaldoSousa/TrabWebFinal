import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Card2 from '../components/card/card2'
import Footer from '../components/footer/Footer'
import Search from '../components/hero/search'

function Instituicoes() {
  return (
    <div>
        <Navbar />
        <Search/>
        <Card2/>
        <Footer />
    </div>
  );
}

export default Instituicoes;
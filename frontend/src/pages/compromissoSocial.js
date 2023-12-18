import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Instituicao from '../components/instituicao/Instituicao';
import MinhaFoto from '../images/logo.png';

function CompromissoSocial() {
  return (
    <div>
        <Navbar />
        <Instituicao
        titulo='Compromisso Social Global'
        quemSomos="Gostaria de enfatizar que a competitividade nas transações comerciais afeta positivamente a correta previsão de todos os recursos funcionais envolvidos Assim mesmo, a mobilidade dos capitais internacionais faz parte de um processo de gerenciamento das condições inegavelmente apropriadas."
        oQueFazemos="Gostaria de enfatizar que a competitividade nas transações comerciais afeta positivamente a correta previsão de todos os recursos funcionais envolvidos Assim mesmo, a mobilidade dos capitais internacionais faz parte de um processo de gerenciamento das condições inegavelmente apropriadas."
        porqueFazemos="Gostaria de enfatizar que a competitividade nas transações comerciais afeta positivamente a correta previsão de todos os recursos funcionais envolvidos Assim mesmo, a mobilidade dos capitais internacionais faz parte de um processo de gerenciamento das condições inegavelmente apropriadas. Assim mesmo, a mobilidade dos capitais internacionais faz parte de um processo de gerenciamento das condições inegavelmente apropriadas."
        ondeFazemos="Gostaria de enfatizar que a competitividade nas transações comerciais afeta positivamente a correta previsão de todos os recursos funcionais envolvidos Assim mesmo, a mobilidade dos capitais internacionais faz parte de um processo de gerenciamento das condições inegavelmente apropriadas."
        contato="Gostaria de enfatizar que a competitividade nas transações comerciais afeta positivamente a correta previsão de todos os recursos funcionais envolvidos"
        fotoSrc={MinhaFoto}
        fotoAlt="Descrição da foto"
      />
        <Footer />
    </div>
  );
}

export default CompromissoSocial;
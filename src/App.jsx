import BentoGrid from './Components/BentoGrid'
import Header from './Components/Header'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Bento from './Components/Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import LanguageSwitch from './Components/LanguageSwitch'
import Button from './Components/Button'
import Download from './Components/Download'
import IBimg1 from './Assets/IBimg1.webp'
import IBimg2 from './Assets/IBimg2.webp'
import IFimg1 from './Assets/IFimg1.webp'
import ReactLogo from './Assets/React.webp'

function App() {
  // Objet with lang:
  const lang = {
    english: {
      cb: 'Created by:',
      h1_article1: 'BentoBox UI',
      p_article1: 'The open-source "bento box" styled UI. Design and build beautiful and usable websites with our 1.3.3 version for React JS.',
      h4_bento0: 'Next updates:',
      p_bento0: 'Lazy Load for images. Fix the transition problems with themes and switchers. Create button animations.',
      h4_bento1: 'First of all...',
      p_bento1: 'Choose your preferencies:',
      theme: 'Theme switcher',
      language: 'Language switcher',
      h4_bento2: 'Version news:',
      p_bento2: 'Updates that you can find in this latest version:',
      h4_map: 'Location component',
      p_map: 'Show everyone the place you want in the world!',

      h1_article2: 'All the components we have:',
      p_article2: 'Discover the variety of components available in our user interface: a complete guide to all the options at your disposal.',
      h4_bento3: 'In addition',
      p_bento3: 'to the components that you saw previously, you have access to the following:',
      button1: 'Button:',
      bt1: 'Example',
      download1: 'Download:',
      image1: 'Logo with background hover effect',
      image2: 'Faded image',
      image3: 'Regular image with hover effect',
      progressbar1: 'Progress bar',
      progressbar1PBt: 'Example progress bar:',

      h1_article3: 'Bento styles to use:',
      p_article3: 'Take a look of all the options for bentos:',
      h4_bentoBL1: 'Bento Style: BL1',
      h4_bentoBL2: 'Bento Style: BL2',
      h4_bentoBL3: 'Bento Style: BL3',
      h4_bentoBL4: 'Bento Style: BL4',
      h4_bentoBL5: 'Bento Style: BL5',
      h4_bentoBR1: 'Bento Style: BR1',
      h4_bentoBR2: 'Bento Style: BR2',
      h4_bentoBR3: 'Bento Style: BR3',
      h4_bentoBR4: 'Bento Style: BR4',
      h4_bentoBR5: 'Bento Style: BR5',
      h4_bentoBC1: 'Bento Style: BC1',
      h4_bentoBC2: 'Bento Style: BC2',
      h4_bentoBC3: 'Bento Style: BC3',
      h4_bentoBE1: 'Bento Style: BE1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    spanish: {
      cb: 'Creado por:',
      h1_article1: 'BentoBox UI',
      p_article1: 'La interfaz de usuario con estilo "bento box" de código abierto. Diseñe y cree sitios web atractivos y utilizables con nuestra versión 1.3.3 para React JS. ',
      h4_bento0: 'Próximas actualizaciones:',
      p_bento0: 'Lazy Load para imágenes. Resolver problemas de transición con los switchers y los temas. Crear animaciones para botones.',
      h4_bento1: 'Antes que nada...',
      p_bento1: 'Elije tus preferencias:',
      theme: 'Selector de tema',
      language: 'Selector de idioma',
      h4_bento2: 'Novedades de la versión:',
      p_bento2: 'Actualizaciones que podras encontrar en esta última versión:',
      h4_map: 'Componente de ubicación',
      p_map: '¡Muéstrale a todos el lugar que tu quieras en el mundo!',

      h1_article2: 'Todos los componentes que tenemos:',
      p_article2: 'Descubre la variedad de componentes disponibles en nuestra interfaz de usuario: una guía completa para conocer todas las opciones a tu disposición.',
      h4_bento3: 'Además',
      p_bento3: 'de los componentes que viste anteriormente, tienes acceso a los siguientes:',
      button1: 'Botón:',
      bt1: 'Ejemplo',
      download1: 'Descargar:',
      image1: 'Logo con efecto de fondo',
      image2: 'Imagen desvanecida',
      image3: 'Imagen regular con efecto',
      progressbar1: 'Barra de progreso',
      progressbar1PBt: 'Barra de progreso de ejemplo:',

      h1_article3: 'Bento styles to use:',
      p_article3: 'Take a look of all the options for bentos:',
      h4_bentoBL1: 'Estilo de Bento: BL1',
      h4_bentoBL2: 'Estilo de Bento: BL2',
      h4_bentoBL3: 'Estilo de Bento: BL3',
      h4_bentoBL4: 'Estilo de Bento: BL4',
      h4_bentoBL5: 'Estilo de Bento: BL5',
      h4_bentoBR1: 'Estilo de Bento: BR1',
      h4_bentoBR2: 'Estilo de Bento: BR2',
      h4_bentoBR3: 'Estilo de Bento: BR3',
      h4_bentoBR4: 'Estilo de Bento: BR4',
      h4_bentoBR5: 'Estilo de Bento: BR5',
      h4_bentoBC1: 'Estilo de Bento: BC1',
      h4_bentoBC2: 'Estilo de Bento: BC2',
      h4_bentoBC3: 'Estilo de Bento: BC3',
      h4_bentoBE1: 'Estilo de Bento: BE1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  }

  // Language switcher:
  const [language, setLanguage] = useState('english')
  const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? 'spanish' : 'english')}

  // Map Theme switcher:
  const [theme, setTheme] = useState('light')
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? 'dark' : 'light')}

  //Header list:
  const links = [
    { href: 'Preferences'},
    { href: 'News'},
    { href: 'Components'},
    { href: 'Content'},
  ];


  return (
    <>
      <Header cb={lang[language].cb} links={links}/>

      <BentoGrid id='Preferences' TAh1={lang[language].h1_article1} TAp={lang[language].p_article1}>
        <Bento Bv='1' Bh='8' Bs='BC2' Bbgc='transparent' Th4={lang[language].h4_bento1} Tp={lang[language].p_bento1} />
        <Bento Bv='1' Bh='4' Bs='BC2' Th4={lang[language].language} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === 'spanish'} />} />
        <Bento Bv='1' Bh='4' Bs='BC2' Th4={lang[language].theme} Com={() => <ThemeSwitch onChange={handleThemeSwitch} />} />
      </BentoGrid>

      <BentoGrid id='News'>
        <Bento Bv='1' Bh='8' Bs='BL2' Bbgc='transparent' Th4={lang[language].h4_bento0} Tp={lang[language].p_bento0} />
        <Bento Bv='1' Bh='8' Bs='BL2' Bbgc='transparent' Th4={lang[language].h4_bento2} Tp={lang[language].p_bento2} />
        <Map Bv='3' Bh='8' Bs='BL1' Th4={lang[language].h4_map} Tp={lang[language].p_map} theme={theme} />
      </BentoGrid>

      <BentoGrid id='Components' TAh1={lang[language].h1_article2} TAp={lang[language].p_article2}>
        <Bento Bv='1' Bh='8' Bs='BC2' Bbgc='transparent' Th4={lang[language].h4_bento3} Tp={lang[language].p_bento3}/>
        <Bento Bv='2' Bh='2' Bs='BC2' Th4={lang[language].button1} Com={Button} Bt={lang[language].bt1}/>
        <Bento Bv='2' Bh='2' Bs='BC2' Th4={lang[language].download1} Com={Download} />
        <Bento Bv='2' Bh='4' Bs='BC1' Tc='light' Th4={lang[language].image1} IBimg={IBimg2} IFimg={IFimg1}/>
        <Bento Bv='2' Bh='4' Bs='BC1' Tc='light' Th4={lang[language].image2} IBimg={IBimg2} IDimg={IFimg1}/>
        <Bento Bv='2' Bh='4' Bs='BC1' Tc='light' Th4={lang[language].image3} IFimg={IFimg1}/>
        <Bento Bv='1' Bh='2' Bs='BE1' Th4={lang[language].progressbar1} Tp={lang[language].progressbar1PBt} PBn='124' PBd='200' Limg={ReactLogo} />
        <Bento Bv='1' Bh='2' Bs='BE1' PBn='50' PBd='200' Limg={ReactLogo} />
        <Bento Bv='1' Bh='2' Bs='BE1' Tp={lang[language].progressbar1PBt} PBn='124' PBd='200' Limg={ReactLogo} />
        <Bento Bv='1' Bh='2' Bs='BE1' Th4={lang[language].progressbar1} PBn='50' PBd='200' Limg={ReactLogo} />
      </BentoGrid>
      
      <BentoGrid id='Content' TAh1={lang[language].h1_article3} TAp={lang[language].p_article3}>
        <Bento Bv='2' Bh='2' Bs='BL1' Th4={lang[language].h4_bentoBL1} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='4' Bs='BC1' Th4={lang[language].h4_bentoBC1} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='2' Bs='BR1' Th4={lang[language].h4_bentoBR1} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />

        <Bento Bv='2' Bh='2' Bs='BL2' Th4={lang[language].h4_bentoBL2} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='4' Bs='BC2' Th4={lang[language].h4_bentoBC2} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='2' Bs='BR2' Th4={lang[language].h4_bentoBR2} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />

        <Bento Bv='2' Bh='2' Bs='BL3' Th4={lang[language].h4_bentoBL3} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='4' Bs='BC3' Th4={lang[language].h4_bentoBC3} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='2' Bs='BR3' Th4={lang[language].h4_bentoBR3} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />

        <Bento Bv='2' Bh='2' Bs='BL4' Th4={lang[language].h4_bentoBL4} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='4' Bs='BE1' Th4={lang[language].h4_bentoBE1} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='2' Bs='BR4' Th4={lang[language].h4_bentoBR4} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />

        <Bento Bv='2' Bh='4' Bs='BL5' Th4={lang[language].h4_bentoBL5} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
        <Bento Bv='2' Bh='4' Bs='BR5' Th4={lang[language].h4_bentoBR5} Tp={lang[language].lorem} Com={Download} Limg={ReactLogo} />
      </BentoGrid>

      <Footer cb={lang[language].cb}/>
    </>
  )
}

export default App;
import BentoGrid from './Components/BentoGrid'
import Header from './Components/Header'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Bento from './Components/Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import LanguageSwitch from './Components/LanguageSwitch'
import ProgressBar from './Components/ProgressBar'
import Button from './Components/Button'
import Download from './Components/Download'

function App() {
  // Objet with lang:
  const lang = {
    english: {
      cb: 'Created by:',
      h1_article1: 'BentoBox UI',
      p_article1: 'The open-source "bento box" styled UI. Design and build beautiful and usable websites with our 1.1.1 version for React JS.',
      h4_bento0: 'Next tasks:',
      p_bento0: 'Review all CSS files, Work with branches, Lazy Load, Transition switchers, Widht problem BentoGrid, Bento Styles content, Button animations.',
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
      button1: 'Button example',
      bt1: 'Example',
      download1: 'Download:',
    },
    spanish: {
      cb: 'Creado por:',
      h1_article1: 'BentoBox UI',
      p_article1: 'La interfaz de usuario con estilo "bento box" de código abierto. Diseñe y cree sitios web atractivos y utilizables con nuestra versión 1.1.1 para React JS. ',
      h4_bento0: 'Próximas tareas:',
      p_bento0: 'Review all CSS files, Work with branches, Lazy Load, Transition switchers, Widht problem BentoGrid, Bento Styles content, Button animations.',
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
      button1: 'Ejemplo de botón',
      bt1: 'Ejemplo',
      download1: 'Descargar:',
    }
  }

  // Language switcher:
  const [language, setLanguage] = useState('english')
  const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? 'spanish' : 'english')}

  // Map Theme switcher:
  const [theme, setTheme] = useState('light')
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? 'dark' : 'light')}
  
  return (
    <>
      <Header cb={lang[language].cb}/>

      <BentoGrid Sh={lang[language].h1_article1} Sp={lang[language].p_article1}>
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent' Th={lang[language].h4_bento0} Tp={lang[language].p_bento0} />
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent' Th={lang[language].h4_bento1} Tp={lang[language].p_bento1} />
        <Bento Bv='1' Bh='4' Bs='B4' Th={lang[language].language} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === 'spanish'} />} />
        <Bento Bv='1' Bh='4' Bs='B4' Th={lang[language].theme} Com={() => <ThemeSwitch onChange={handleThemeSwitch} />} />
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent'/>
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent' Th={lang[language].h4_bento2} Tp={lang[language].p_bento2} />
        <Map Bv='3' Bh='8' Bs='B0' Th={lang[language].h4_map} Tp={lang[language].p_map} theme={theme} />
      </BentoGrid>

      <BentoGrid Sh={lang[language].h1_article2} Sp={lang[language].p_article2}>
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent' Th={lang[language].h4_bento3} Tp={lang[language].p_bento3}/>
        <Bento Bv='2' Bh='2' Bs='B4' Th={lang[language].button1} Com={Button} Bt={lang[language].bt1} />
        <Bento Bv='2' Bh='2' Bs='B4' Th={lang[language].download1} Com={Download} />
        <Bento Bv='2' Bh='4' Bs='B4' Th={lang[language].image1} IBimg='' IFimg=''/>
        <Bento Bv='2' Bh='4' Bs='B4' Th={lang[language].image2} />
        <Bento Bv='2' Bh='4' Bs='B4' Th={lang[language].image3} />
        <Bento Bv='1' Bh='8' Bs='B4' Bbg='transparent'/>
        <Map Bv='3' Bh='8' Bs='B0' Th={lang[language].h4_map} Tp={lang[language].p_map} theme={theme} />
      </BentoGrid>

      <Footer cb={lang[language].cb}/>
    </>
  )
}

export default App;

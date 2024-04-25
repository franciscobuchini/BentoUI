import Bento from './Bento'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) Logo Bento UI. 4) problema con la pantalla estirada en la version mobile. 5) Averiguar trucos y lineas de codigo para mobilefirst. 6) Agregar APIs 7) Averiguar trucos de SEO' Tta='center' Tjc='center' />
      <Bento Bsv='2' Bsh='4' Bst='B1' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) Logo Bento UI.' Com={Button} />
      <Bento Bsv='2' Bsh='8' Bst='B1' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) Logo Bento UI.' Com={ThemeSwitch} />
    </main>
    )
  }
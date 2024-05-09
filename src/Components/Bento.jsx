// BENTO.JSX
import React from 'react'

export default function Bento({ Bv, Bh, Bs, Bbg, Lurl, Th4, Tp, Tc, IBimg, IDimg, IFimg, Limg, Com, PBn, PBd, Bt }) {

  // If background is transparent this means: no interaction if hover the Bento.
  let classNameBento = `Bento ${Bbg === 'transparent' ? 'Transparent' : ''} ${Bs} V${Bv} H${Bh}`

  // Open link in new tab only if Lurl exists and component is a button
  let link = Com === "Button" && Lurl ? () => window.open(Lurl, "_blank") : undefined;

  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <section
      className={classNameBento}
      onClick={link}
      style={{
        ...(Bbg && { backgroundColor: `var(--${Bbg})` }),
        cursor: link ? 'pointer' : 'auto',
      }}>

      {IBimg && <img className='Image ImageBack' src={IBimg}/>}
      {IDimg && <img className='Image ImageDispel' src={IDimg}/>}
      {IFimg && <img className='Image ImageFront' src={IFimg}/>}

      {(Th4 || Tp || Limg) && (
        <div className='Text' style={{
          height: Com ? 'auto' : '100%',
          width: Com ? 'auto' : '100%',          
        }}>
        {Limg && (
          <div className='Limg'>
            <img src={Limg}/>
          </div>
        )}
          <h4 style={{color: `var(--${Tc})`}}>{Th4}</h4>
          <p dangerouslySetInnerHTML={{ __html: Tp }} style={{color: `var(--${Tc})`}} />
        </div>
      )}

      {PBd && ( // Only render the progress bar if PBd exists
        <div className='PB'>
          <div className='PB100'> </div>
          <div className='PBX' style={{ width: `${percentage}%`}}></div>
        </div>
      )}
      
      {Com && ( // Add the custom component
        <div className='Component'>
          {React.createElement(Com, { Lurl, Bt, Tc })}
        </div>
      )}
    </section>
  )
}

/* 
Bsize: Bento - Size [look at Dimensions.css]
Bstyle: Bento - Style [B1, B2, B3, B4, B5, B6, B7, B8]
Bbg: Bento - Background Color

Th4: Text - <H2>
Tp: Text - <P>

IBimg: Image Back - Image
IBalt: Image Back - Alt
IDimg: Image Dispel - Image
IDalt: Image Dispel - Alt
IFimg: Image Front - Image
IFalt: Image Front - Alt

Lurl: Bento or Component - Link

PBn: ProgressBar - Numerator
PBd: ProgressBar - Denominator
PBt: ProgressBar - <h5>

Bt: Button - Text

Com: Component [{Button}, {ThemeSwitch}, {ProgressBar}]
*/
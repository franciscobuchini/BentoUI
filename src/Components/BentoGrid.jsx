import Separator from './Separator'

export default function BentoGrid( props ) {
  return (
    <article>
      <Separator/>
      <div className='Article'>
        <div className='TextArticle'>
            <h1>{props.Sh}</h1>
            <p>{props.Sp}</p>
          </div>
        <div className='BentoGrid'>
          {props.children}
        </div>
      </div>
    </article>
  )
}
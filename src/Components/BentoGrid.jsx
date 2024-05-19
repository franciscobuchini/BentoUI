export default function BentoGrid( props ) {
  return (
    <article className="Article" id={props.id}>
      <div className="TextArticle">
        <h1>{props.TAh1}</h1>
        <p>{props.TAp}</p>
      </div>
      <div className="BentoGrid">
        {props.children}
      </div>
    </article>
  )
}
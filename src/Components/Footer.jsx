export default function Footer ({cb}) {
  return (
    <footer>
      <div>
      <p className="CreatedBy">{cb}</p>
        <a className="Me" href="https://franciscobuchini.vercel.app/" target="_blank">Francisco Buchini</a>
      </div>
    </footer>
  )
}
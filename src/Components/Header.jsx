export default function Header ({cb, links}) {

  const handleLinkClick = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <svg  viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='20' y='20' width='560' height='560' rx='80'/>
        <path d='M100 100H187.5C235.825 100 275 139.175 275 187.5C275 235.825 235.825 275 187.5 275H100V100Z' fill='#1E1E1E'/>
        <path d='M500 100L500 187.5C500 235.825 460.825 275 412.5 275C364.175 275 325 235.825 325 187.5L325 100L500 100Z' fill='#1E1E1E'/>
        <path d='M500 325L500 500C472.386 500 450 477.614 450 450L450 375C450 347.386 472.386 325 500 325Z' fill='#1E1E1E'/>
        <path d='M100 325H312.5C360.825 325 400 364.175 400 412.5C400 460.825 360.825 500 312.5 500H100V325Z' fill='#1E1E1E'/>
      </svg>
      <nav className='Nav'>
      <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link.href}`} onClick={() => handleLinkClick(link.href)}>{link.href}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className='CreatedBy'>{cb}</p>
        <a className="Me" href="https://franciscobuchini.vercel.app/" target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}
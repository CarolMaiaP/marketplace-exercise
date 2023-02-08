import logo from "../assets/logo.png"

export function Header(){
  return(
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h3>gigaland</h3>
      </div>

      <div className="search">
        <input type="text" placeholder="search item here..." />
      </div>

      <div className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Activity</a></li>
        <li><a href="#">Elements</a></li>
      </div>
    </header>
  )
}
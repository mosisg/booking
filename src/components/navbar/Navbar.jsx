import "./navbar.css"

const Navbar = () => {
  return (
<div className="navbar">
  <div className="navContainer">
    <span className="logo">Moussa Gaye</span>
    <div className="navItems">
      <button className="navButton">S'inscrire</button>
      <button className="navButton">Se connecter</button>
    </div>
  </div>
</div>

  )
}

export default Navbar
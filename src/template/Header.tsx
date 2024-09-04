import Logo from '@/components/Logo'
function Header() {

  return (
    <nav className={`fixed-navbar position-fixed start-0 end-0 bg-white navShadow top-0`} style={{ zIndex: 20 }}>
      <div className={`c_container navbar navbar-expand-lg bg-white`}>
        <div className="container-fluid flex-row flex-lg-row px-0 justify-content-start justify-content-lg-between">
          <div className="navbar-brand">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
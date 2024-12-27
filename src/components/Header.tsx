

function Header() {
  return (
    <header>
      <nav className="container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PTOL</h1>

        <ul className="flex space-x-4 font-bold">
          <li><a href="/" className="hover:underline">Blog</a></li>
          <li> <a href="#" className="hover:underline ml-2 btn-primary" >Join the waitlist </a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

const NavBar = () => {
  return (
    <nav className="navbar flex p-2  bg-black border w-full border-amber-50 ">
      <div className="container-fluid flex mx-auto">
        <a className="navbar-brand flex pr-36 font-extrabold capitalize text-white" href="#">
          MoviesPlace
        </a>
     <div className="flex pl-36 justify-end">
     <ul className="text-white flex px-4">
              <li className="pl-5 hover:text-2xl">
                  <a className="pl-5" href="#">Home</a>
              </li>
              <li className="pl-5 hover:text-2xl">
                  <a href="#">Movies</a>
              </li>
              <li className="pl-5 hover:text-2xl">
                  <a href="#">About</a>
              </li>
              <li className="pl-5 hover:text-2xl">
                  <a href="#">Contact</a>
              </li>
        </ul>
     </div>
     <div className="flex pl-36 ">
     <ul className="text-white flex px-4 ">
              
              <li className="pl-5 hover:text-2xl">
                  <a href="#">Profile</a>
              </li>
              <li className="pl-5 hover:text-2xl">
                  <a href="#">Logout</a>
              </li>
              <li className="pl-5 hover:text-2xl">
                  <a href="#">Settings</a>
              </li>
        </ul>
     </div>
      </div>

    </nav>
  );
}
export default NavBar;
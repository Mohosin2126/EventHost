
const NavBar = () => {
    return (
      <div style={{ backgroundImage: 'url("https://i.ibb.co/yYmBDkG/navigation.png")' }} className="navbar p-6 h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-lg font-semibold"><a>Home</a></li>
              <li>
                <a>Events</a>
              </li>
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <img  src="https://i.ibb.co/2N8sMz2/Event-Host.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a className="text-lg font-semibold text-white">Home</a></li>
              <li>
                <a className="text-lg font-semibold text-white">Events</a>
              </li>
              <li><a className="text-lg font-semibold text-white">About Us</a></li>
              <li><a className="text-lg text-white font-semibold">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex-none">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <img src="https://i.ibb.co/4fMmtbv/Group-7.png" alt="" />
        </div>
      </div>
      
    </div>
   
  </div>
</div>
  </div>
    
    );
};

export default NavBar;
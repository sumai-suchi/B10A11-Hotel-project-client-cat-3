import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import gif2 from '../../src/assets/Animation - 1740229565683.gif'


const Navbar = () => {
    const {user, LogOut}=useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Rooms'}>Rooms</Link></li>
                    <li>
                      <Link to={'/MyBooking'}>MyBooking</Link>
                    </li>
                    </ul>
                </div>
               <div className="flex justify-center items-center">
               <img src={gif2} className="size-5 md:size-10" alt=""  />
               <a className="btn btn-ghost text-xs   md:text-xl font-bold italic text-blue-900">MonaLisa</a>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Rooms'}>Rooms</Link></li>
                    <li>
                      <Link to={'/MyBooking'}>MyBooking</Link>
                    </li>
                   
                </ul>
            </div>
            <div className="navbar-end">
            {
              user &&  user?.email ?(<button onClick={LogOut} className="btn bg-black text-white">Log out</button>):
               (
                <div>
                     <Link to={'/Login'} className="btn">Login</Link>
                        <Link to={'/Register'}  className="btn">Register</Link>
                </div>
               )
            }
            </div>
        </div>
    );
};

export default Navbar;
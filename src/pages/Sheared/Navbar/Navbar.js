import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Navbar.css'
import Heart from "../../../assets/dark-blue-logo.png"
import Fire from "../../../assets/fire.PNG"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }



    const menuItems = <React.Fragment>
        <li className='bg-none font-medium' style={{ background: "none" }}><Link to="/">Find Jobs</Link></li>
        <li className='bg-none font-medium'><Link to="">Referrals</Link></li>
        <li className='font-medium'><Link to="">Ai Resume Review</Link></li>
        <li className='font-medium'><Link to="">Resume Builder</Link></li>
        <li className='font-medium'><Link className='mr-0' to="">Premium <span className='ml-0'><img className='ml-0' width="20px" src={Fire} alt="" /></span></Link></li>
        {
            user?.uid ?
                <>
                    <li className=''><button onClick={handleLogOut}>Sign out</button></li>
                </>
                :
                <>
                    <li className='lg:ml-24 font-medium'><Link to="/login">Sign In</Link></li>
                    <li className='font-medium'><Link to="/login">Sign Up</Link></li>
                </>
        }
    </React.Fragment>


    return (



        <div className='w-full px-5 py-2' style={{ background: "#F7FAFC" }}>
            <div className="lg:pl-20 lg:pr-20 navbar flex justify-between">
                <div className="navbar-start">
                    <Link className='flex' to="/">
                        <img width="40px" src={Heart} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal bg-none p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown dropdown-left rounded">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={1} className="relative menu menu-compact dropdown-content mt-12 ml-12 p-2 shadow bg-base-100 rounded-box w-52 bg-none" style={{ left: "-203px" }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">Blog</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><button onClick={handleLogOut}>Sign out</button></li>
                                </>
                                :
                                <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
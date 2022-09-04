import React from 'react'
import { Link } from 'react-router-dom'


interface Iprops{

}
const Navbar:React.FC<Iprops>=()=>{

    return(
        <React.Fragment>
            <nav className='navbar navbar-expand bg-dark mb-2'>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1 className='navbar-brand text-white display-2 fw-bold'>UserList</h1>
                         </div>
                    <ul className="navbar-nav">
                        <Link to={"/"} className='text-decoration-none'>
                            <li className='nav-item m-2 fw-bold '   >
                            <p className="nav-link text-white"> Home</p></li>
                        </Link>
                        <Link to={"/about"} className='text-decoration-none'>
                            <li  className='nav-item   m-2 fw-bold'>
                                <p className="nav-link text-white"> About</p></li>
                        </Link>
                        <Link to={"/Userlist"} className='text-decoration-none'>
                            <li className='nav-item   m-2 fw-bold' >
                            <p className="nav-link text-white"> User List</p></li>
                        </Link>
                        
                    </ul>
                </div>
            </nav>
            
        </React.Fragment>
    )


}
export default Navbar
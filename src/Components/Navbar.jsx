import React from 'react'
import {NavLink} from 'react-router-dom'
import '../CSS/Navbar.css'
import {HomeOutlined,ViewInAr,DateRangeOutlined,InsertDriveFileOutlined,InsertPhotoOutlined,ArticleOutlined,CheckBoxOutlined} from '@mui/icons-material';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} aria-current="page" to="/"><HomeOutlined/>Home</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/interface"><ViewInAr/>Interface</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/components"><DateRangeOutlined/>Components</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/pages"><InsertDriveFileOutlined/>Pages</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/forms"><CheckBoxOutlined/>Forms</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/gallery"><InsertPhotoOutlined/>Gallery</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink  className={({isActive}) => (isActive ? 'navLink-active nav-link' : 'nav-link')} to="/documentation"><ArticleOutlined/>Documentation</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
        </>
    )
}

export default Navbar

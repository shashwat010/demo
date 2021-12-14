import React from 'react'
import "../CSS/Header.css"

const Header = () => {
    return (
        <>
        <div className="bg-light">
        <div className='container pt-4 d-flex'>
            <h5>tabler</h5>  
            <div className='header-right'>
            <button className='btn btn-outline-primary btn-sm mx-4'>Source Code</button>
            <div className='me-4'>Jane Pearson</div>
            </div>
        </div>
        </div>           
        </>
    )
}

export default Header

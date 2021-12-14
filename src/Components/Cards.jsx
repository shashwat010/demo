import React from 'react'
import {KeyboardArrowUp,KeyboardArrowDown}from '@mui/icons-material';
import '../CSS/Card.css'

const Cards = (props) => {
    const{gain,number,type}=props
    let textColor='text-success'
    if(gain[0]==='-')
        textColor='text-danger';
    return (
        <>
            <div className= "card">
        <div className='card-right'>
            <span className={textColor}> {gain}{gain[0]==='-'?<KeyboardArrowDown/>:<KeyboardArrowUp/>}</span>
            </div>
                    <div className= "card-body">
                        <h5 className= "card-title text-center mt-3">{number}</h5>
                        <p className= "card-text text-center">{type}</p>
                    </div>
            </div>
        </>
    )
}

export default Cards

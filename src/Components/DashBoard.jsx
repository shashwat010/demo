import React,{Suspense,lazy} from 'react'
const Cards=lazy(()=> import ('./Cards'))

const DashBoard = () => {
    const arr=[
        {gain:"+6%",number:43,type:"New Tickets"},
        {gain:"-3%",number:17,type:"Closed Today"},
        {gain:"+9%",number:7,type:"New Replies"},
        {gain:"+3%",number:"27.3k",type:"Followers"},
        {gain:"-2%",number:"$95",type:"Daily Earnings"},
        {gain:"-1%",number:621,type:"Products"},
    ]
    return (
        <>
        <Suspense fallback={<h4 className='text-center'>Loading...</h4>}>
        <div className="bg-light">
        <div className='container py-4'>
            <h5>DashBoard</h5>
            <div className='row'>
                {arr.map((element,idx)=>{
                    return(
                        <div className='col-md-2 py-4' key={idx}>
                            <Cards gain={element.gain} number={element.number} type={element.type}/>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        </Suspense>
        </>
    )
}

export default DashBoard

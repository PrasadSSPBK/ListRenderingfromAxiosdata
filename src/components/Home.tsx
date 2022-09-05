import React from 'react'

interface Iprops{

}

const Home:React.FC<Iprops>=()=>{
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1 className='h3 h-100 text-center text-success fw-bold display-3 d-flex flex-column justify-content-center align-items-center'>Welcome  </h1>
                </div>
            </div>
        </div>
    )

} 
export default Home
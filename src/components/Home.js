import React from 'react';
import img from '../img/img.jpg'


const App=(props)=>{

    return(
        <div>
            <h1 className='display-2'>WellCome DCT</h1>
            <img src={img} style={{width:'100%', height:'100%', backgroundSize:'cover',backgroundPosition:'fixed'}} />
        </div>
    )
}

export default App
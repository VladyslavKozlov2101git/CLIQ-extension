import React, { useState, useEffect } from 'react';
import './AdvertisingCard.css';
import { Hero, getBlob, } from '../../utils/api';
import IconClose from './close.png'



function AdvertisingCard() {
  const [isLeft, setIsLeft] = useState(true);
  const [open, setOpen] = useState('open');
  const [advertisingData, setAdvertisingData] = useState();
  const [headers, setHeaders] = useState('');
  const [positionY, setPositionY] = useState("top");
  const [positionX, setPositionX] = useState("left");
  const [size, setSize] = useState("small");

 

  useEffect(() => {
    getBlob('10786350-c654-416a-91e4-4ab0490e032b', setHeaders).then((data) => {
     
      data && setAdvertisingData(data);
    });
  }, [isLeft]);



  return (
    <div className={`content__window ${positionY} ${positionX} ${size} ${open}`}>    

      <div className='header_31415926'>
        <div className='positions'>
          <div className='position'>
            <p>Window position:</p>
            <button className={`top ${positionY === "top" && "active"}`} onClick={()=>setPositionY("top")}>Top</button>
            <button className={`bottom ${positionY === "bottom" && "active"}`} onClick={()=>setPositionY("bottom")}>Botton</button>
            <button className={`left ${positionX === "left" && "active"}`} onClick={()=>setPositionX("left")}>Left</button>
            <button className={`right ${positionX === "right" && "active"}`} onClick={()=>setPositionX("right")}>Right</button>
          </div>
         
        </div>
        <button className='close'  onClick={() => setOpen('close')}>
          Close
        </button>
      </div>



     { !advertisingData && <div>Loading...</div>}


      

      {advertisingData && headers?.includes('image') &&  <div id="cliq-ad">
        <img src={advertisingData} alt="Sorry, smth went wrong!" />
      </div>} 

      {advertisingData &&  headers?.includes('video') &&  <div id="cliq-ad">
        <video src={advertisingData}  controls />
      </div>} 

      <div className='size__panel'>
        <p>Window size: </p>

        <div>
          <button className={`small ${size === "small" && "active"}`} onClick={()=>setSize("small")}>S</button>
          <button className={`medium ${size === "medium" && "active"}`} onClick={()=>setSize("medium")}>M</button>
          <button className={`large ${size === "large" && "active"}`} onClick={()=>setSize("large")}>L</button>
        </div>
        
      </div>
     
     
    </div>
  );
}

export default AdvertisingCard;

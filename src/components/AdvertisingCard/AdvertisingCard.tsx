import React, { useState, useEffect } from 'react';
import './AdvertisingCard.css';
import { Hero, getBlob, main } from '../../utils/api';

function AdvertisingCard() {
  const [isLeft, setIsLeft] = useState(true);
  const [open, setOpen] = useState(true);
  const [dataPerson, setDataPerson] = useState();

  useEffect(() => {
    getBlob('10786350-c654-416a-91e4-4ab0490e032b').then((data) => {
      console.log(data);
      main(data);
      setDataPerson(data);
    });
  }, [isLeft]);

  if (!dataPerson) {
    return (
      <div className={isLeft ? 'information__block' : 'information__block right'}>Loading...</div>
    );
  }

  return (
    <div
      className={
        isLeft && open
          ? 'information__block'
          : !isLeft && open
          ? 'information__block right'
          : 'information__block closed'
      }>
      <h3 className="information__title">Choose comfortable position</h3>

      <div className="information__row">
        <button className="information__btn" onClick={() => setIsLeft(true)}>
          Left
        </button>
        <button className="information__btn" onClick={() => setIsLeft(false)}>
          Right
        </button>
      </div>
      <div id="cliq-ad"></div>
      <button className="close__btn" onClick={() => setOpen(false)}>
        Close popup
      </button>
    </div>
  );
}

export default AdvertisingCard;

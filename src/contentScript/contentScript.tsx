import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AdvertisingCard from '../components/AdvertisingCard/AdvertisingCard';

const root = document.createElement('section');
document.body.appendChild(root);

const App: React.FC<{}> = () => {
  return <AdvertisingCard />;
};

ReactDOM.render(<App />, root);

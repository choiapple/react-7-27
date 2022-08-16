import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import Home from './components/Home';

function App() {
  const [cartCnt, setCartCnt] = useState(0)
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;

import React from 'react';
import Vendor from './vendor';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Vendor />
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;

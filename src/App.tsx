import React from 'react';
import './App.css';
import ListRendering from './components/ListRendering';

function App() {
  return (
    <React.Fragment>
       <div className="container mt-3">
           <div className="grid">
               <div className="row">
                   <div className="col">
                    <ListRendering/>
                    </div>
                    </div>   
           </div>
       </div>
    </React.Fragment>
  );
}

export default App;

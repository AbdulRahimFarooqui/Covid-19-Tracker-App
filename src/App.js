import React from 'react';
import NavBar from './Components/NavBar.js';
import InfoPanel from './Components/InfoPanel.js';
import FootNav from './Components/FootNav.js';
// import Barchart from './Components/barCharts';

export default function App() {
  const screenconfig = React.useState(0);

  return (
    <div className="App">
         <NavBar/>
        <InfoPanel currentScreen={screenconfig[0]}/>
        <FootNav screenCONFIG={screenconfig}/>
        {/* <Barchart/>         */}
      {/* </contextProvider> */}

      {/* Make the 'MoreIcon' light green using color property. */}
    </div>
  );
  }
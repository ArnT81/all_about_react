import React from 'react';
// you may use only the foldername as reference to make imports less verbouse if it contains an index.js
// '../' takes you one step up in the folder three
// all React Components needs to start with a capital letter 
import Components from './components/FunctionComponent';
import Styling from './Styling';
import Props from './Props';
import UseEffect from './UseEffect';
import CustomHooks from './CustomHooks';
import HOC from './HOC';
import Context from './Context/Provider.js';
import Redux from './Redux';
import DefaultProps from './DefaultProps';
import UseRef from './useRef';
import Routing from './Routing';


function App() {
  return (
    <div>
      <Routing />
      <DefaultProps />
      <Components />
      <Styling />
      <Props />
      <UseEffect />
      <UseRef />
      <CustomHooks />
      <HOC />
      <Context />
      <Redux />
    </div>
  );
}

export default App;

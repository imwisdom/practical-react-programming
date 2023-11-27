import React, { createContext } from 'react';
import Context from './practice/context';

const UserContext = createContext('unknown');
function App() {
  
  return (
    <Context />
  );
}

export default App;


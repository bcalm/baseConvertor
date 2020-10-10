import React from 'react';
import BaseConvertor from './BaseConvertor';

const App = (props) => (
  <div>
    <BaseConvertor requiredBases={[2, 8, 10]} />
  </div>
);

export default App;

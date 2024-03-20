import React from 'react';
import InteractiveChart from './components/InteractiveChart';

const App = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 15 },
    { x: 4, y: 25 },
    { x: 5, y: 18 },
  ];

  return (
    <div>
      <h1>Interactive Data Visualization Chart</h1>
      <InteractiveChart data={data} width={500} height={300} />
    </div>
  );
};

export default App;
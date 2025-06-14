import React, { useState } from 'react';
import './index.css';
import { landmarks } from './data';
import Tile from './Tile';

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h1>Bahrain Cultural Mosaic</h1>

      <div className="grid">
        {landmarks.map((landmark) => (
          <Tile key={landmark.id} landmark={landmark} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <div className="popup">
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;

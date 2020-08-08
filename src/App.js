import React from 'react';

import SortableList from "./js/components/SortableList";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <SortableList data={[1,2,3,4,5]}/>
    </div>
  );
}

export default App;

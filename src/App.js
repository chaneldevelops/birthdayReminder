import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data) //pass in the data array file
  return <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3> {/* checks how big the list is which is 5 currently */}
      <List people={people}/> {/* Add people prop to pass in state */}
      <button onClick={() => setPeople([])}>
        Clear All
      </button>
    </section>
    
  </main>;
}

export default App;

import React from 'react';
import Places from './places';
import { render } from '@testing-library/react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  render();
    return (
      <>
        <Router>
          <div className="App">
            <Route path="/places" component={Places}/>
            <Places />
          </div>
        </Router>
      </>
    );
}

export default App;

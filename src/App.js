import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import Contact from './components/Contact';
import Error from './components/Error';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Team  from './pages/Team';
import Contact  from './pages/Contact';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/products" element={<Products />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route component={Error}/>
            </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
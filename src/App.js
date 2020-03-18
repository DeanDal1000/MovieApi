import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import Nav from './components/Nav'
import About from './components/About'
import MovieDatbase from './components/MovieDatabase'


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    error:null
  });
  const apiurl = "http://www.omdbapi.com/?apikey=b640735";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <Router>
    <div>
      <center><h2 className="m-3 d-flex">React JS Movie Api</h2></center>
      <br />
      <center><h3 className="m-3 d-flex">Project</h3></center>
      <br />
       <Nav />
       <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} />
       <Route path="/movie" component={MovieDatbase} />
       </Switch>
      <main>
      <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}        
      </main>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>

    <h2>Home Page</h2>
  </div>
)

export default App
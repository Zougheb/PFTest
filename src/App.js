import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import DocList from './components/DocList';

export default class App extends Component {
  
  constructor() {
    super();
    // Initial the state
    this.state = {
    docs: [],
      loading:true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
performSearch =(query)=> {
  // fetching data from API by axios
  axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?q=${query}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=24&user_key=704aa62962d33eba51be8df0c3b5e866`)
  // update the app state
    .then(response => {
      this.setState({
      docs: response.data.data,
        loading:false
      });
    })
    // handeling errors
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

  render() { 
    console.log(this.state.docs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Doctor Search</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
              : <DocList data={this.state.docs} />
          }
        </div>
      </div>
    );
  }
}

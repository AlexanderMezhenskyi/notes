import React, {Component} from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import List from "../List/List";

class App extends Component {

  state = {
      data: [],
      term: ''
  };

  componentDidMount() {
      this.updateData();
  }

  async getData() {
      const resp = await fetch('listData.json');
      return resp.json();
  };

  updateData = () => {
      this.getData()
          .then(this.onDataLoaded);
  };

  onDataLoaded = (data) => {
      this.setState({data});
  };

  searchChange = (e) => {
      this.setState({term: e.target.value});
  };

  search = () => {
      const data = this.state.data;

      if (this.state.term === '') {
          return data;
      }

      return data.filter(item => item.title.toLowerCase()
          .indexOf(this.state.term.toLowerCase()) > -1);
  };

  render() {
      return (
          <div className="container">
              <h1>Notes</h1>
              <SearchBar onSearch={this.searchChange}
                         term={this.state.term}/>
              <List data={this.search()}/>
          </div>
      );
  }
}

export default App;

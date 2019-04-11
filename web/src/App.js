import React, { Component } from 'react';
import Table from './table';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () =>
    axios.get('/persons').then(response => {
      this.setState({
        data: response.data,
      });
      console.log(111111111111111)
    });

  deleteBtn = id => {
    axios.delete(`/persons/${id}`).then(response => {
      this.setState({
        data: response.data,
      });
    });
  };

  addBtn = (name, surname, company) => {
    axios
      .post('/persons', {
        name,
        surname,
        company,
      })
      .then(response => {
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  editBtn = (id, name, surname, company) => {
    axios
      .put(`/persons/${id}`, {
        name,
        surname,
        company,
      })
      .then(response => {
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Table
          data={this.state.data}
          deleteHandler={this.deleteBtn}
          addHandler={this.addBtn}
          editHandler={this.editBtn}
          loadHandler={this.loadData}
        />
      </div>
    );
  }
}

export default App;

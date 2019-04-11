import React, { Component } from 'react';
import Table from './table';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
		this.state = { data: [] };
		this.connecToServer = this.connecToServer.bind(this)
	}

	connecToServer() {
    fetch('/');
  }

  componentDidMount() {
		this.connecToServer();
    this.loadData();
  }

  loadData = () =>
    axios.get('/API/persons').then(response => {
      this.setState({
        data: response.data,
      });
      console.log(111111111111111)
    });

  deleteBtn = id => {
    axios.delete(`/API/persons/${id}`).then(response => {
      this.setState({
        data: response.data,
      });
    });
  };

  addBtn = (name, surname, company) => {
    axios
      .post('/API/persons', {
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
      .put(`/API/persons/${id}`, {
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

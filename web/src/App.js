import React, { Component } from 'react';
import Table from './table';
// import axios from 'axios';
const request = require('request');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  promiseGet = () => new Promise(function (resolve, reject) {
    request.get('http://localhost:3012/persons', { json: true }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });

  loadData = async () => {
    try {
      this.setState({ data: await this.promiseGet() });
    } catch (error) {
      console.log(error);
    }
  };


  // promise = () => new Promise(function (resolve, reject) {
  //   request('http://localhost:3012/persons', { json: true }, (error, response, body) => {
  //     if (error) {
  //       reject([]);
  //     } else {
  //       resolve(body);
  //     }
  // 	});
  // });

  //   loadData = () => this.promise().then(data => this.setState({ data }));

  // axios.get('http://localhost:3012/persons').then(response => {
  //     this.setState({
  //       data: response.data,
  //     });
  //   });


  promiseDelete = (id) => new Promise(function (resolve, reject) {
    request.delete(`http://localhost:3012/persons/${id}`, { json: true }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    })
  });

  deleteBtn = async (id) => {
    try {
      this.setState({ data: await this.promiseDelete(id) });
    } catch (error) {
      console.error(error);
    }
  };

  promiseAdd = (name, surname, company) => new Promise((resolve, reject) => {
    request.post({
      url: 'http://localhost:3012/persons',
      body: {
        name,
        surname,
        company
      },
      json: true
    }, (error, response, body) => {
      if (error) {
        reject([]);
      } else {
        resolve(body);
      }
    });
  });

  addBtn = async (name, surname, company) => {
    try {
      this.setState({ data: await this.promiseAdd(name, surname, company) });
    } catch (error) {
      console.error(error);
    }
  };

  promiseEdit = (id, name, surname, company) => new Promise((resolve, reject) => {
    request.put({
      url: `http://localhost:3012/persons/${id}`,
      body: {
        id,
        name,
        surname,
        company
      },
      json: true
    }, (error, response, body) => {
      if (error) {
        reject([]);
      } else {
        resolve(body);
      }
    });
  });

  editBtn = async (id, name, surname, company) => {
    try {
      this.setState({ data: await this.promiseEdit(id, name, surname, company) });
    } catch (err) {
      console.log(err);
    }
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

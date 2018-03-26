import React, { Component } from 'react';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UserDetailsView.css';


class UsersListView  extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            users: "[]",
            isUsersFetching: true,
          };
      }

      /**
       * Format the address column data
       * @param {*} cell 
       * @param {*} row 
       */
    addressFormatter(cell, row) {
        return (<div>
            <p>
            <span>{cell.street}</span><br/>
            <span>{cell.suite}</span><br/>
            <span>{cell.city}, {cell.zipcode}</span>
        </p>
        </div>);
      
      }

      /**
       * Format the link that opens the details page for the user.
       * @param {*} cell 
       * @param {*} row 
       */
      linkFormatter(cell, row) {
          return (<Link to={`user/${row.id}`} >{cell}</Link>)
      }
      
    
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
          .then(response => this.setState({ users: response.data,
        isUsersFetching: false }))
          .catch(err => console.log(err))
      }

    render() {
        let {users, isUsersFetching} = this.state;

        return (
            isUsersFetching ? '' :
      <div className="list-detail-container">
        <h1> 
            Users List
        </h1>
        <div className="users-tables">
                <BootstrapTable 
                    data={users}
                    condensed={true} >
                    
                    <TableHeaderColumn dataField="id" hidden={true} isKey dataSort={true}></TableHeaderColumn>
                    <TableHeaderColumn dataField="name"dataFormat={this.linkFormatter} dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="username" dataSort={true}>Username</TableHeaderColumn>
                    <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField="address" dataFormat={this.addressFormatter} dataSort={true}>Address</TableHeaderColumn>
                </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default UsersListView;

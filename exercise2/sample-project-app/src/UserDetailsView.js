import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import axios from 'axios';
import './UserDetailsView.css';

class UserDetailsView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "[]",
            isUsersFetching: true,
          };

      }

      componentDidMount() {
        let {match} = this.props;
        if (match) { 
            axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                // find the user by id
                let user = _.find(response.data, function (user) {
                    return match.params.id === user.id.toString();
                });
                this.setState({ 
                    user: user,
                    isUsersFetching: false })
            })
            .catch(err => console.log(err))
        }
      }

    render() {
        let {user, isUsersFetching} = this.state;

        return (
            isUsersFetching ?  '' :
                !user ?  <div className="dataUnavailable">User data is unavailable </div> :
                <div className="user-details-container">
                    <h1> 
                        Users Details 
                    </h1>
                    <Grid className="user-details-form">
                        <Row className="name">
                            <Col md={3} className='lbl-column'>Name</Col>
                            <Col md={9}>{user.name}</Col>
                        </Row>

                        <Row className="userName" >
                            <Col md={3} className='lbl-column'>Username </Col>
                            <Col md={9}>{user.username}</Col>
                        </Row>

                        <Row className="email" >
                            <Col md={3} className='lbl-column'>Email</Col>
                            <Col md={9}>{user.email}</Col>
                        </Row>

                        <Row className="address" >
                            <Col md={3}className='lbl-column' >Address</Col>
                            <Col md={9}>
                                <div> {user.address.street}</div>
                                <div> {user.address.suite}</div>
                                <div> {user.address.city}</div>
                                <div> {user.address.zipcode}</div>   
                                <Grid> 
                                    <Row className="geo">
                                        <Col md={3} mdOffset={9}>Latitude: {user.address.geo.lat}</Col>
                                        <Col md={3}>Longitude{user.address.geo.lng}</Col>
                                    </Row>
                                </Grid>
                            </Col>
                        </Row>

                        <Row className="phone" >
                            <Col md={3} className='lbl-column'>Phone Number</Col>
                            <Col md={9}>{user.phone}</Col>
                        </Row>

                        <Row className="website" >
                            <Col md={3} className='lbl-column'>Website</Col>
                            <Col md={9}>{user.website}</Col>
                        </Row>

                    ` <Row className="company" >
                                <Col md={3} className='lbl-column'>Company Information</Col>
                                <Col md={9}>
                                    <Grid className='company-info-containr'> 
                                        <Row>
                                            <Col md={2}>Name:</Col>
                                            <Col md={10}>{user.company.name}</Col>
                                        </Row>
                                        <Row>
                                            <Col md={2}>Catch Phrase:</Col>
                                            <Col md={10}>{user.company.catchPhrase}</Col>
                                        </Row>
                                        <Row>
                                            <Col md={2}>Brand Slogan:</Col>
                                            <Col md={10}>{user.company.bs}</Col>   
                                        </Row>

                                    </Grid>
                                </Col>
                        </Row>
                    </Grid>
                </div>
    );
  }
}

export default UserDetailsView;

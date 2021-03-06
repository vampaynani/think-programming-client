import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import './styles/dashboard.css';

class Dashboard extends Component {
  render() {
    let questionTypes = [ 'jsQuestions', 'htmlQuestions', 'cssQuestions', 'dsaQuestions' ];
    let rooms = questionTypes.map((questionType, i) => {
      return (
        <div className={`room-link-container-${i}`} key={i}>
          <Link key={i} to={`/gameroom${i}/${questionType}`} params={{questionType}}>
            {questionType}
          </Link>
        </div>
      );
    });
    return (
      <div className="dashboard">
        <h2>Challenge Rooms</h2>
        <div className="gamerooms">
          {rooms}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: currentUser.name,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

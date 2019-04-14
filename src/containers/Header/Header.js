import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import moment from 'moment';

export class Header extends Component {

    render() {
      let time = moment().format('HH:mm:ss');
      return (
        <div className="Header">
          <section className="Header-Time">
            <h4>{time}</h4>
          </section>
          <section className="Header-Search">
            <Route exact path="/" render={() => {
              return <NavLink to="/Search"><i className="fas fa-search"></i></NavLink>
            }} />
            <Route exact path="/Search" render={() => {
              return <NavLink to="/"><i className="fas fa-times-circle"></i></NavLink>
            }} />
          </section>
        </div>
      )
    }
}

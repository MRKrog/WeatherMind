import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
export class WeatherDetails extends Component {

  render(){
    return (
      <div className="WeatherDetails">
        <div className="WeatherDetails-Content">
          <NavLink className="Details-Close" to="/">
            <i className="fas fa-window-close"></i>
          </NavLink>
          <div className="Details-Content">
            <div className="Details-Row">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  current: state.current
})


export default connect(mapStateToProps)(WeatherDetails)

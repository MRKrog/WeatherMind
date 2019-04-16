import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HourDetail } from '../../components/HourDetail/HourDetail';

export class HourlyDisplay extends Component {
  render() {
    const { hourly } = this.props
    return (
      <div className="HourlyDisplay">
        {
          hourly.map((hour, index) => {
            return <HourDetail key={hour.time} {...hour} index={index}/>
          })
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  hourly: state.hourly
})

HourlyDisplay.propTypes = {
  hourly: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(HourlyDisplay)

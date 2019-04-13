import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HourDetail } from '../../components/HourDetail/HourDetail';

export class HourlyDisplay extends Component {

  render() {
    const { hourly } = this.props
    return (
      <div className="HourlyDisplay">
        {  
          hourly.map(hour => {
            return <HourDetail key={hour.time} {...hour} />
          })
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  hourly: state.hourly
})

export default connect(mapStateToProps)(HourlyDisplay)

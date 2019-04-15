import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WeekDetail } from '../../components/WeekDetail/WeekDetail';
import PropTypes from 'prop-types';

export class WeeklyDisplay extends Component {

  render() {
    const { weekly } = this.props;
    return (
      <div className="WeeklyDisplay">
        { weekly.map(week => <WeekDetail key={week.time} {...week} /> ) }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
    weekly: state.weekly
})

WeeklyDisplay.propTypes = {
  weekly: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(WeeklyDisplay)

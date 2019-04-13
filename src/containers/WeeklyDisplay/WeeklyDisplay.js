import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WeeklyDetail } from '../../components/WeeklyDetail/WeeklyDetail'

export class WeeklyDisplay extends Component {

    render() {
      const { weekly } = this.props;

      return (
        <div className="WeeklyDisplay">
          {
            weekly.map(week => {
              return <WeeklyDetail {...week} />
            })
          }
        </div>
      )
    }
}

export const mapStateToProps = (state) => ({
    weekly: state.weekly
})

export default connect(mapStateToProps)(WeeklyDisplay)

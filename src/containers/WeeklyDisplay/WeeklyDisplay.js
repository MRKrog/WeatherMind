import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WeekDetail } from '../../components/WeekDetail/WeekDetail'

export class WeeklyDisplay extends Component {

    render() {
      const { weekly } = this.props;

      return (
        <div className="WeeklyDisplay">
          {
            weekly.map(week => {
              return <WeekDetail key={week.time} {...week} />
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

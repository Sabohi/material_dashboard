import React from 'react';

//Grid
import LeadGridList from './LeadGridList';

class LeadDashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.state =  props;
  }// constructor close here

  render() {
    return (
      <LeadGridList {...this.props} />
    );
  }
}

export default LeadDashboard;
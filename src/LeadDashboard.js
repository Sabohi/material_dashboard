import React from 'react';

//Data
import leadDashData from './Data/leadDashData';

//Grid
import LeadGridList from './LeadGridList';

class LeadDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state =  leadDashData;
  }// constructor close here

  render() {
    return (
      <LeadGridList {...this.state} />
    );
  }
}

export default LeadDashboard;
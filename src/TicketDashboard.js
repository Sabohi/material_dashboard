import React from 'react';

//Grid
import TicketGridList from './TicketGridList';

class TicketDashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.state =  props;
  }// constructor close here

  render() {
    return (
      <TicketGridList {...this.props} />
    );
  }
}

export default TicketDashboard;
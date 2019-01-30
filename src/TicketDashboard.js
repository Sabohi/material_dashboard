import React from 'react';

//Data
import ticketDashData from './Data/ticketDashData';

//Grid
import TicketGridList from './TicketGridList';

class TicketDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state =  ticketDashData;
  }// constructor close here

  render() {
    return (
      <TicketGridList {...this.state} />
    );
  }
}

export default TicketDashboard;
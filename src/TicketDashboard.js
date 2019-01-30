import React from 'react';
import Grid from '@material-ui/core/Grid';

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
      <Grid container style={{marginTop:"7px"}}> 
        <TicketGridList {...this.state} />
      </Grid>
    );
  }
}

export default TicketDashboard;
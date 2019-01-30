import React from 'react';
import Grid from '@material-ui/core/Grid';

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
      <Grid container style={{marginTop:"7px"}}> 
        <LeadGridList {...this.state} />
      </Grid>
    );
  }
}

export default LeadDashboard;
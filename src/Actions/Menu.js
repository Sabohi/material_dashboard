import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SimpleTable from '../Components/SimpleTable';

import ReactToPrint from "react-to-print";

//Import all possible actions
// import FullScreenDialog from '../Actions/FullScreenDialog';

const ITEM_HEIGHT = 50;

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

//function to show dialog box
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function CustomizedMenu(props) {

  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //Function to be called on clicking action icon
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Function to be called to close dialog
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Function to be called on  closing a dialog box
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  //Function to be called on clicking menuitem
  const funToCall = (index) => {
    //Close menu 
    handleClose();
    switch(index){
      case 'print':
      alert(this);
      break;
      case 'showDetails':
        setOpenDialog(true);
      break;
      default:
    }
  };

  let dialogBox = '';
  //Full Screen Dialog
  if(props.actionData){
    dialogBox = (<Dialog fullScreen open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleCloseDialog} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {props.actionData.detailsData.dialogHeader}
        </Typography>
      </Toolbar>
    </AppBar>
    <div style={{marginTop: "60px"}}>
      <SimpleTable {...props.actionData.detailsData.tableData}/>
    </div>
    </Dialog>);
  }

  return (
    <div>
      <IconButton 
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
      <MoreVertIcon />
      </IconButton>
      <Menu 
        id="long-menu"
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
            marginTop: "52px"
          },
        }}
      >
        {props.options.map((option,index) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => funToCall(props.actionNames[index])}>
            {option}
          </MenuItem>
        ))}
        {/* <MenuItem>
          <ReactToPrint
            trigger={() => <p>Print</p>}
            content={() => this.componentRef}
          />
        </MenuItem> */}
      </Menu>
      
      {dialogBox}
    </div>
  );
}
//ref={el => (this.componentRef = el)}
export default CustomizedMenu;
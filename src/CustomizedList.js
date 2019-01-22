import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class CustomizedList extends React.Component{
  
    render(){
        const { classes, listItemsData} = this.props;
       
        let listItems = listItemsData.map(FormElement => (
            <ListItem>
                <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
                    +
                </Icon>
                <ListItemText primary={FormElement.step} secondary={FormElement.date} />
            </ListItem>
        ));
        return (
            <List 
                className={classes.root}
                component="nav"
                // subheader={<ListSubheader component="div">{listHeading}</ListSubheader>}
            >
            {listItems}
            </List>
        );
    }
}

CustomizedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedList);
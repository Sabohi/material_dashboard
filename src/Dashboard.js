import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
import TicketDashboard from './TicketDashboard';
import LeadDashboard from './LeadDashboard';
// import PageProgress from 'react-page-progress';
// import ScrollUpButton from "react-scroll-up-button";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


//Data
import ticketDashData from './Data/ticketDashData';
import leadDashData from './Data/leadDashData';

import { withStyles } from '@material-ui/styles';

//For caling apis
import {ticketLeadData, taskData, mailData, usersData, priorityData, statusData, typeData, stateData, dispositionData} from './Functions/CallToApi';

const  styles = theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,  //Check why it is giving error 
    // backgroundColor: "green", 
  },
  heading:{
    paddingBottom: "30px",
    paddingTop: "10px",
    paddingLeft: "10px",
    color: "teal"
  },
  toggleContainer: {
    margin: "10px",
    position: "fixed",
    right: 0,
    zIndex: 1029
  },
  grow: {
    flexGrow: 1,
  },
  tabs: {
    color: 'white',
    marginBottom: '-15px',
  },
  tabRoot: {
    fontWeight:'800 !important',
  },
  tabContent: {
    padding: '10px 10px 10px 10px',
  },
  tabsIndicator: {
    backgroundColor: '#f5f5f5 !important',
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
});

const ticketDashboardData = {
  "ticketStatsData":{
      componentData:{
          primaryHeaderValues: '...',
          primaryHeaderValuesData:{
              dialogHeader: 'Ticket Details',
              tableData:{
                data:[
                    ['T20190120148774','Vikas Kapoor','Sales','General Enquiry','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','retaging','2019-01-20 16:00:56'],
                    ['T20190120148773','Nidhi Ranjan','Sales','Call Drop','Critical','Others','Others','RADHAMANI','NEW','call drop','2019-01-20 16:16:21'],
                    ['T20190120148772','jommya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                    ['T20190120148771','Nidhi Verma','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:02'],
                    ['T20190120148770','Jahnvi Kapoor','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:27'],
                    ['T20190120148769','Shina Savitri','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:08:08'],
                    ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:54:28'],
                    ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:44:55'],
                    ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:30:11'],
                    ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:14:09'],
                    ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:14:02'],
                    ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:04:09'],
                    ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:55'],
                    ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:02'],
                    ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:13:11'],
                    ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 12:45:55'],
                ]
            },// table data
          },
          primaryProgressBarValue: '...',
          primaryProgressBarValueRate: '...',
          secondaryHeaderValues: '...',
          secondaryHeaderValuesData:{
            tableData:{
              data:[
                  ['T20190120148774','Vikas Kapoor','Sales','General Enquiry','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','retaging','2019-01-20 16:00:56'],
                  ['T20190120148773','Nidhi Ranjan','Sales','Call Drop','Critical','Others','Others','RADHAMANI','NEW','call drop','2019-01-20 16:16:21'],
                  ['T20190120148772','jommya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                  ['T20190120148771','Nidhi Verma','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:02'],
                  ['T20190120148770','Jahnvi Kapoor','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:27'],
                  ['T20190120148769','Shina Savitri','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:08:08'],
                  ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:54:28'],
                  ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:44:55'],
                  ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:30:11'],
                  ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:14:09'],
                  ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:14:02'],
                  ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:04:09'],
                  ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:55'],
                  ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:02'],
                  ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:13:11'],
                  ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 12:45:55'],
              ]
            },// table data
          },
          secondaryProgressBarValue: '...',
          secondaryProgressBarValueRate: '...',
          actionData: {
              menuData:{
                  actionData: 
                  {
                      detailsData: {
                        tableData:{
                          tableHeading: "",
                            data:[
                              ['T20190120148774','Vikas Kapoor','Sales','General Enquiry','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','retaging','2019-01-20 16:00:56'],
                              ['T20190120148773','Nidhi Ranjan','Sales','Call Drop','Critical','Others','Others','RADHAMANI','NEW','call drop','2019-01-20 16:16:21'],
                              ['T20190120148772','jommya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                              ['T20190120148771','Nidhi Verma','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:02'],
                              ['T20190120148770','Jahnvi Kapoor','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:12:27'],
                              ['T20190120148769','Shina Savitri','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:08:08'],
                              ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:54:28'],
                              ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:44:55'],
                              ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:30:11'],
                              ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 15:14:09'],
                              ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:14:02'],
                              ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 14:04:09'],
                              ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:55'],
                              ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:54:02'],
                              ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 13:13:11'],
                              ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 12:45:55'],
                          ]
                        }// table data
                      }
                  }
              }
          }
      }
  },
  "taskStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryHeaderValuesData: {
        tableData:{
          data:[
            ['L20190120148774','Ticketing CRM','Vikas Kapoor','Sales','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','customer wants to know about product','2019-01-20 16:00:56'],
            ['L20190120148773','Dialer','Nidhi Ranjan','Sales','Critical','Others','Others','RADHAMANI','NEW','More features required by client','2019-01-20 16:16:21'],
            ['L20190120148772','LMS','Nommya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:14:12'],
            ['L20190120148771','LMS','Nidhi Verma','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 16:14:12'],
            ['L20190120148770','Ticketing CRM','Jahnvi Kapoor','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 16:22:23'],
            ['L20190120148769','IVR','Shina Savitri','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 16:22:56'],
            ['L20190120148768','Ticketing CRM','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:11:09'],
            ['L20190120148767','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:54:23'],
            ['L20190120148766','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 15:40:44'],
            ['L20190120148765','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 15:34:33'],
            ['L20190120148764','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 15:10:05'],
            ['L20190120148768','LMS','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:02:08'],
            ['L20190120148767','IVR','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Purchased','2019-01-20 14:09:48'],
            ['L20190120148766','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 14:01:20'],
            ['L20190120148765','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Product purchased','2019-01-20 13:14:28'],
            ['L20190120148764','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 13:04:56'],
          ]
        },// table data
      },
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      secondaryProgressBarValueData: {
        tableData:{
          data:[
            ['L20190120148774','Ticketing CRM','Vikas Kapoor','Sales','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','customer wants to know about product','2019-01-20 16:00:56'],
            ['L20190120148773','Dialer','Nidhi Ranjan','Sales','Critical','Others','Others','RADHAMANI','NEW','More features required by client','2019-01-20 16:16:21'],
            ['L20190120148772','LMS','Nommya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:14:12'],
            ['L20190120148771','LMS','Nidhi Verma','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 16:14:12'],
            ['L20190120148770','Ticketing CRM','Jahnvi Kapoor','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 16:22:23'],
            ['L20190120148769','IVR','Shina Savitri','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 16:22:56'],
            ['L20190120148768','Ticketing CRM','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:11:09'],
            ['L20190120148767','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:54:23'],
            ['L20190120148766','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 15:40:44'],
            ['L20190120148765','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 15:34:33'],
            ['L20190120148764','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 15:10:05'],
            ['L20190120148768','LMS','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:02:08'],
            ['L20190120148767','IVR','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Purchased','2019-01-20 14:09:48'],
            ['L20190120148766','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 14:01:20'],
            ['L20190120148765','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Product purchased','2019-01-20 13:14:28'],
            ['L20190120148764','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 13:04:56'],
          ]
        },// table data
      },
      actionData: {
        dialogData: {
          tableData:{
            data:[
                ['L20190120148774','Ticketing CRM','Vikas Kapoor','Sales','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','customer wants to know about product','2019-01-20 16:00:56'],
                ['L20190120148773','Dialer','Nidhi Ranjan','Sales','Critical','Others','Others','RADHAMANI','NEW','More features required by client','2019-01-20 16:16:21'],
                ['L20190120148772','LMS','Nommya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:14:12'],
                ['L20190120148771','LMS','Nidhi Verma','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 16:14:12'],
                ['L20190120148770','Ticketing CRM','Jahnvi Kapoor','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 16:22:23'],
                ['L20190120148769','IVR','Shina Savitri','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 16:22:56'],
                ['L20190120148768','Ticketing CRM','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:11:09'],
                ['L20190120148767','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:54:23'],
                ['L20190120148766','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 15:40:44'],
                ['L20190120148765','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 15:34:33'],
                ['L20190120148764','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 15:10:05'],
                ['L20190120148768','LMS','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:02:08'],
                ['L20190120148767','IVR','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Purchased','2019-01-20 14:09:48'],
                ['L20190120148766','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 14:01:20'],
                ['L20190120148765','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Product purchased','2019-01-20 13:14:28'],
                ['L20190120148764','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 13:04:56'],
            ]
          },// table data
        }
      }
    }
  },
  "mailStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryHeaderValuesData: {
        tableData:{
          data:[
            ['In','support@c-zentrix.com','deepak11@gmail.com','T20190120148774','Call landing problem','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:52','Pankaj Bisht'],
            ['In','support@c-zentrix.com','seema112@gmail.com','T20190120148773','CRM working slow','Vikas Kapoor','New','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:00:05','Pankaj Bisht'],
            ['Out','deepak11@gmail.com','support@c-zentrix.com','T20190120148774','Call landing problem','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:00:09','Pankaj Bisht'],
            ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:07','Pankaj Bisht'],
            ['In','support@c-zentrix.com','rs124@gmail.com','T20190120148771','Ticket attachment not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:20:07','Pankaj Bisht'],
            ['Out','mafil@mafil.com','support@c-zentrix.com','T20190120148773','CRM working slow','Vikas Kapoor','Old','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:08:06','Pankaj Bisht'],
            ['Out','drishti@gmail.com','support@c-zentrix.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:08:05','Pankaj Bisht'],
            ['In','support@c-zentrix.com','dhanush1@gmail.com','T20190120148770','IVR not working','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:00:50','Pankaj Bisht'],
            ['In','support@c-zentrix.com','subuhi@gmail.com','T20190120148769','Voice Issue','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:50:50','Pankaj Bisht'],
            ['Out','vihan23@gmail.com','support@c-zentrix.com','T20190120148770','IVR not working','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:20:40','Pankaj Bisht'],
            ['Out','famin24@gmail.com','support@c-zentrix.com','T20190120148769','Voice Issue','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:30:36','Pankaj Bisht'],
            ['Out','sanjana@gmail.com','support@c-zentrix.com','T20190120148768','Duplicate tickets creating','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:40:08','Pankaj Bisht'],
            ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148767','UI not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:12:566','Pankaj Bisht']
          ]
        },// table data
      },
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryHeaderValuesData: {
        tableData:{
          data:[
            ['In','support@c-zentrix.com','deepak11@gmail.com','T20190120148774','Call landing problem','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:52','Pankaj Bisht'],
            ['In','support@c-zentrix.com','seema112@gmail.com','T20190120148773','CRM working slow','Vikas Kapoor','New','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:00:05','Pankaj Bisht'],
            ['Out','deepak11@gmail.com','support@c-zentrix.com','T20190120148774','Call landing problem','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:00:09','Pankaj Bisht'],
            ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:07','Pankaj Bisht'],
            ['In','support@c-zentrix.com','rs124@gmail.com','T20190120148771','Ticket attachment not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:20:07','Pankaj Bisht'],
            ['Out','mafil@mafil.com','support@c-zentrix.com','T20190120148773','CRM working slow','Vikas Kapoor','Old','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:08:06','Pankaj Bisht'],
            ['Out','drishti@gmail.com','support@c-zentrix.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:08:05','Pankaj Bisht'],
            ['In','support@c-zentrix.com','dhanush1@gmail.com','T20190120148770','IVR not working','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:00:50','Pankaj Bisht'],
            ['In','support@c-zentrix.com','subuhi@gmail.com','T20190120148769','Voice Issue','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:50:50','Pankaj Bisht'],
            ['Out','vihan23@gmail.com','support@c-zentrix.com','T20190120148770','IVR not working','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:20:40','Pankaj Bisht'],
            ['Out','famin24@gmail.com','support@c-zentrix.com','T20190120148769','Voice Issue','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:30:36','Pankaj Bisht'],
            ['Out','sanjana@gmail.com','support@c-zentrix.com','T20190120148768','Duplicate tickets creating','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:40:08','Pankaj Bisht'],
            ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148767','UI not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:12:566','Pankaj Bisht']
            ] 
        },// table data
      },
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      actionData: {
        dialogData: {
            tableData:{
              data:[
                ['In','support@c-zentrix.com','deepak11@gmail.com','T20190120148774','Call landing problem','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:52','Pankaj Bisht'],
                ['In','support@c-zentrix.com','seema112@gmail.com','T20190120148773','CRM working slow','Vikas Kapoor','New','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:00:05','Pankaj Bisht'],
                ['Out','deepak11@gmail.com','support@c-zentrix.com','T20190120148774','Call landing problem','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:00:09','Pankaj Bisht'],
                ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:07','Pankaj Bisht'],
                ['In','support@c-zentrix.com','rs124@gmail.com','T20190120148771','Ticket attachment not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:20:07','Pankaj Bisht'],
                ['Out','mafil@mafil.com','support@c-zentrix.com','T20190120148773','CRM working slow','Vikas Kapoor','Old','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:08:06','Pankaj Bisht'],
                ['Out','drishti@gmail.com','support@c-zentrix.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:08:05','Pankaj Bisht'],
                ['In','support@c-zentrix.com','dhanush1@gmail.com','T20190120148770','IVR not working','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:00:50','Pankaj Bisht'],
                ['In','support@c-zentrix.com','subuhi@gmail.com','T20190120148769','Voice Issue','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:50:50','Pankaj Bisht'],
                ['Out','vihan23@gmail.com','support@c-zentrix.com','T20190120148770','IVR not working','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:20:40','Pankaj Bisht'],
                ['Out','famin24@gmail.com','support@c-zentrix.com','T20190120148769','Voice Issue','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:30:36','Pankaj Bisht'],
                ['Out','sanjana@gmail.com','support@c-zentrix.com','T20190120148768','Duplicate tickets creating','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:40:08','Pankaj Bisht'],
                ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148767','UI not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:12:566','Pankaj Bisht']
              ]
            },// table data
          }
        }
      }
   },
  "userStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryHeaderValuesData: {
        tableData:{
          data:[
              ['ACTIVE','2001','Operational-Chennai','Malavika','Anand','9830092001','2001@magusdialog.in','Agent'],
              ['ACTIVE','2002','Operational-Chennai','Vangeparapu','udhakar','98392002','202@agusdialogin','Agent'],
              ['ACTIVE','2003','Operational-Chennai','Wasim','Akhram','9830092003','2003@magusdialog.in','Agent'],
              ['ACTIVE','2004','Operational-Chennai','Shaik','Shahul','9830092004','2004@magusdialog.in','Agent'],
              ['ACTIVE','2005','Operational-Chennai','Manoj','John','9830092005','2005@magusdialog.in','Agent'],
              ['ACTIVE','2006','Operational-Chennai','Yusuf','Shariff S','9830092006','2006@magusdialog.in','Agent'],
              ['ACTIVE','2007','Operational-Chennai','Thamodhar','V','9830092007','2007@magusdialog.in','Agent'],
              ['ACTIVE','2008','Operational-Chennai','Lohithraj','Prasad','9830092008','2008@magusdialog.in','Agent'],
              ['ACTIVE','2009','Operational-Chennai','Sathish','kumar','9830092009','2009@magusdialog.in','Agent'],
              ['ACTIVE','2010','Operational-Chennai','Amit','Deb','9830092010','2010@magusdialog.in','Agent'],
              ['ACTIVE','2011','Operational-Chennai','K','Syed','Asif Ahmed','9830092011','2011@magusdialog.in','Agent'],
              ['ACTIVE','2012','Operational-Chennai','Aravind','M','9830092012','2012@magusdialog.in','Agent'],
              ['ACTIVE','2013','Operational-Chennai','Magaluru','Sai','rahul','9830092013','2013@magusdialog.in','Agent'],
          ] 
        },// table data
      },
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryHeaderValuesData: {
        tableData:{
          data:[
                ['ACTIVE','2001','Operational-Chennai','Malavika','Anand','9830092001','2001@magusdialog.in','Agent'],
                ['ACTIVE','2002','Operational-Chennai','Vangeparapu','udhakar','98392002','202@agusdialogin','Agent'],
                ['ACTIVE','2003','Operational-Chennai','Wasim','Akhram','9830092003','2003@magusdialog.in','Agent'],
                ['ACTIVE','2004','Operational-Chennai','Shaik','Shahul','9830092004','2004@magusdialog.in','Agent'],
                ['ACTIVE','2005','Operational-Chennai','Manoj','John','9830092005','2005@magusdialog.in','Agent'],
                ['ACTIVE','2006','Operational-Chennai','Yusuf','Shariff S','9830092006','2006@magusdialog.in','Agent'],
                ['ACTIVE','2007','Operational-Chennai','Thamodhar','V','9830092007','2007@magusdialog.in','Agent'],
                ['ACTIVE','2008','Operational-Chennai','Lohithraj','Prasad','9830092008','2008@magusdialog.in','Agent'],
                ['ACTIVE','2009','Operational-Chennai','Sathish','kumar','9830092009','2009@magusdialog.in','Agent'],
                ['ACTIVE','2010','Operational-Chennai','Amit','Deb','9830092010','2010@magusdialog.in','Agent'],
                ['ACTIVE','2011','Operational-Chennai','K','Syed','Asif Ahmed','9830092011','2011@magusdialog.in','Agent'],
                ['ACTIVE','2012','Operational-Chennai','Aravind','M','9830092012','2012@magusdialog.in','Agent'],
                ['ACTIVE','2013','Operational-Chennai','Magaluru','Sai','rahul','9830092013','2013@magusdialog.in','Agent'],
            ]
        },// table data
      },
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      actionData: {
        dialogData: {
          tableData:{
            data:[
                ['ACTIVE','2001','Operational-Chennai','Malavika','Anand','9830092001','2001@magusdialog.in','Agent'],
                ['ACTIVE','2002','Operational-Chennai','Vangeparapu','udhakar','98392002','202@agusdialogin','Agent'],
                ['ACTIVE','2003','Operational-Chennai','Wasim','Akhram','9830092003','2003@magusdialog.in','Agent'],
                ['ACTIVE','2004','Operational-Chennai','Shaik','Shahul','9830092004','2004@magusdialog.in','Agent'],
                ['ACTIVE','2005','Operational-Chennai','Manoj','John','9830092005','2005@magusdialog.in','Agent'],
                ['ACTIVE','2006','Operational-Chennai','Yusuf','Shariff S','9830092006','2006@magusdialog.in','Agent'],
                ['ACTIVE','2007','Operational-Chennai','Thamodhar','V','9830092007','2007@magusdialog.in','Agent'],
                ['ACTIVE','2008','Operational-Chennai','Lohithraj','Prasad','9830092008','2008@magusdialog.in','Agent'],
                ['ACTIVE','2009','Operational-Chennai','Sathish','kumar','9830092009','2009@magusdialog.in','Agent'],
                ['ACTIVE','2010','Operational-Chennai','Amit','Deb','9830092010','2010@magusdialog.in','Agent'],
                ['ACTIVE','2011','Operational-Chennai','K','Syed','Asif Ahmed','9830092011','2011@magusdialog.in','Agent'],
                ['ACTIVE','2012','Operational-Chennai','Aravind','M','9830092012','2012@magusdialog.in','Agent'],
                ['ACTIVE','2013','Operational-Chennai','Magaluru','Sai','rahul','9830092013','2013@magusdialog.in','Agent'],
            ]
          },// table data
        }
      }
    }
  },
  "ticketsData":{
    id: "tickets",
    componentData:{
      data: 
      [
        {name: '12AM', Tickets: 4000, Closed: 2000},
        {name: '1AM', Tickets: 5000, Closed: 1500},
        {name: '2AM', Tickets: 4500, Closed: 3200},
        {name: '3AM', Tickets: 3590, Closed: 1100},
        {name: '4AM', Tickets: 8700, Closed: 2000},
        {name: '5AM', Tickets: 6700, Closed: 2800},
        {name: '6AM', Tickets: 4900, Closed: 4200},
        {name: '7AM', Tickets: 5000, Closed: 4900},
        {name: '8AM', Tickets: 4500, Closed: 3200},
        {name: '9AM', Tickets: 3800, Closed: 2400},
        {name: '10AM', Tickets: 6700, Closed: 5400},
        {name: '11AM', Tickets: 4000, Closed: 3000},
        {name: '12PM', Tickets: 5000, Closed: 4500},
        {name: '1PM', Tickets: 4500, Closed: 3800},
        {name: '2PM', Tickets: 3800, Closed: 3200},
        {name: '3PM', Tickets: 8700, Closed: 7800},
        {name: '4PM', Tickets: 8000, Closed: 6700},
        {name: '5PM', Tickets: 6000, Closed: 5200},
        {name: '6PM', Tickets: 7600, Closed: 6600},
        {name: '7PM', Tickets: 4500, Closed: 3600},
        {name: '8PM', Tickets: 6700, Closed: 6200},
        {name: '9PM', Tickets: 4000, Closed: 3700},
        {name: '10PM', Tickets: 5000, Closed: 3900},
        {name: '11PM', Tickets: 4500, Closed: 4400},
      ]
    }
  },
  "ticketForecastData":{
    componentData:{
      data: [
        {name: '1 PM', tickets: 4000},
        {name: '2 PM', tickets: 3000},
        {name: '3 PM', tickets: 9800},
        {name: '4 PM', tickets: 2780},
        {name: '5 PM', tickets: 1890},
        {name: '6 PM', tickets: 2390},
        {name: '7 PM', tickets: 3490}
      ]
    }
  },
  "priorityWiseTicketsData":{
    componentData:{
      data: 
      [
        {
            name: 'Critical',
            value: 677
        }, 
        {
            name: 'Semi-Critical',
            value: 988
        },
        {
            name: 'Non-Critical',
            value: 988
        }
      ] 
    }
  },
  "statusWiseTicketsData":{
    componentData:{
      data: [
        {name: 'New', value: 590},
        {name: 'Inprogress', value: 868},
        {name: 'Closed', value: 1397},
        {name: 'Reopen', value: 1480},
        {name: 'Resolved', value: 1520}
      ] 
    }
  },
  "tickeTypeWiseTicketsData":{
    componentData:{
      data: 
      [
        {
            name: 'Complaint',
            value: 564
        }, 
        {
            name: 'Query',
            value: 768
        },
        {
            name: 'Suggestion',
            value: 456
        }
      ] 
    }
  },
  "loginData":{
    componentData:{
      columnData:[
        {
            width: 150,
            flexGrow: 1.0,
            label: 'Name',
            dataKey: 'param1',
        },
        {
            width: 100,
            label: 'Dept',
            dataKey: 'param2',
            numeric: false,
        },
        {
            width: 130,
            label: 'Login Time',
            dataKey: 'param3',
            numeric: false,
        },
        {
            width: 120,
            label: 'Telephony Agent Id',
            dataKey: 'param4',
            numeric: true,
        }
      ],
      data:[
          ['Vikas Kapoor','L1','Jan 13,2019 08:10:11','2001'],
          ['Nidhi Ranjan','L4','Jan 13,2019 08:00:05','2007'],
          ['Noumya Kumari','L3','Jan 13,2019 08:10:09','2003'],
          ['Jaipreet','L5','Jan 14,2019 08:17:11','2008'],
          ['Sabohi Zaidi','L2','Jan 14,2019 11:30:11','2004']
      ]  
    }
  },
  "issuesData":{
    componentData:{
      data:[
        ['T20190120148774','Vikas Kapoor','L1'],
        ['T20190120148765','Nidhi Ranjan','L4'],
        ['T20190120148754','Noumya Kumari','L3'],
        ['T20190120148745','Jaipreet Kaur','L5'],
        ['T20190120148745','Sabohi Zaidi','L2'],
        ['T20190120148745','Sapna Kumari','L1'],
        ['T20190120148745','Naveen Sharma','L5'],
        ['T20190120148745','Kamlesh Tiwari','L3']
      ]  
    }
  },
  "issueClosersData":{
    componentData:{
      data:[
        ['Vikas Kapoor','L1',7],
        ['Nidhi Ranjan','L4',6],
        ['Noumya Kumari','L3',5],
        ['Jaipreet Kaur','L5',4],
        ['Sabohi Zaidi','L2',3],
        ['Sapna Kumari','L1',3],
        ['Naveen Sharma','L5',2],
        ['Kamlesh Tiwari','L3',1]
      ]
    }
  },
  "recentActivitiesTicketData":{
    componentData:{
      listItemsData:[
        {
          step: "Activity 1",
          date: "Jan 11, 2019"
        },
        {
          step: "Activity 2",
          date: "Jan 10, 2019"
        },
        {
          step: "Activity 3",
          date: "Jan 9, 2019"
        }
      ]
    }
  },
  "recentNotificationsData":{
    componentData:{
      listItemsData:[
        {
          step: "Notification 1",
          date: "Jan 11, 2019"
        },
        {
          step: "Notification 2",
          date: "Jan 11, 2019"
        },
        {
          step: "Notification 3",
          date: "Jan 10, 2019"
        }
      ]
    }
  },
  "toDoData":{
    componentData:{
      listItemsData:[
        {
          step: "Task 1",
          // date: "Jan 11, 2019"
        },
        {
          step: "Task 2",
          // date: "Jan 11, 2019"
        },
        {
          step: "Task 3",
          // date: "Jan 10, 2019"
        }
      ]
    }
  }
};

const leadDashboardData = {
  "leadStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryProgressBarValue: '...',
      actionData: {
        dialogData: {
            tableData:{
                data:[
                  ['L20190120148774','Ticketing CRM','Vikas Kapoor','Sales','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','customer wants to know about product','2019-01-20 16:00:56'],
                  ['L20190120148773','Dialer','Nidhi Ranjan','Sales','Critical','Others','Others','RADHAMANI','NEW','More features required by client','2019-01-20 16:16:21'],
                  ['L20190120148772','LMS','Nommya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:14:12'],
                  ['L20190120148771','LMS','Nidhi Verma','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 16:14:12'],
                  ['L20190120148770','Ticketing CRM','Jahnvi Kapoor','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 16:22:23'],
                  ['L20190120148769','IVR','Shina Savitri','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 16:22:56'],
                  ['L20190120148768','Ticketing CRM','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:11:09'],
                  ['L20190120148767','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:54:23'],
                  ['L20190120148766','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 15:40:44'],
                  ['L20190120148765','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 15:34:33'],
                  ['L20190120148764','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 15:10:05'],
                  ['L20190120148768','LMS','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:02:08'],
                  ['L20190120148767','IVR','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Purchased','2019-01-20 14:09:48'],
                  ['L20190120148766','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 14:01:20'],
                  ['L20190120148765','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Product purchased','2019-01-20 13:14:28'],
                  ['L20190120148764','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 13:04:56'],
                ]
            },// table data
          }
        }
      }
  },
  "taskStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      actionData: {
        dialogData: {
          tableData:{
            data:[
              ['L20190120148774','Ticketing CRM','Vikas Kapoor','Sales','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','customer wants to know about product','2019-01-20 16:00:56'],
              ['L20190120148773','Dialer','Nidhi Ranjan','Sales','Critical','Others','Others','RADHAMANI','NEW','More features required by client','2019-01-20 16:16:21'],
              ['L20190120148772','LMS','Nommya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:14:12'],
              ['L20190120148771','LMS','Nidhi Verma','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 16:14:12'],
              ['L20190120148770','Ticketing CRM','Jahnvi Kapoor','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 16:22:23'],
              ['L20190120148769','IVR','Shina Savitri','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 16:22:56'],
              ['L20190120148768','Ticketing CRM','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 16:11:09'],
              ['L20190120148767','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:54:23'],
              ['L20190120148766','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required by client','2019-01-20 15:40:44'],
              ['L20190120148765','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 15:34:33'],
              ['L20190120148764','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','More features required','2019-01-20 15:10:05'],
              ['L20190120148768','LMS','Nitin Harish','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 15:02:08'],
              ['L20190120148767','IVR','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Purchased','2019-01-20 14:09:48'],
              ['L20190120148766','Dialer','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','customer wants to know about product','2019-01-20 14:01:20'],
              ['L20190120148765','Ticketing CRM','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Product purchased','2019-01-20 13:14:28'],
              ['L20190120148764','LMS','Noumya Kumari','Support','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','Customer wants to buy product','2019-01-20 13:04:56'],
            ]
          },// table data
        }
      }
    }
  }, 
  "mailStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      actionData: {
        dialogData: {
          tableData:{
            data:[
              ['In','support@c-zentrix.com','deepak11@gmail.com','T20190120148774','Call landing problem','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:52','Pankaj Bisht'],
              ['In','support@c-zentrix.com','seema112@gmail.com','T20190120148773','CRM working slow','Vikas Kapoor','New','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:00:05','Pankaj Bisht'],
              ['Out','deepak11@gmail.com','support@c-zentrix.com','T20190120148774','Call landing problem','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:00:09','Pankaj Bisht'],
              ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:00:07','Pankaj Bisht'],
              ['In','support@c-zentrix.com','rs124@gmail.com','T20190120148771','Ticket attachment not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 16:20:07','Pankaj Bisht'],
              ['Out','mafil@mafil.com','support@c-zentrix.com','T20190120148773','CRM working slow','Vikas Kapoor','Old','Semi-Critical','2019-01-20 16:00:56','2019-01-20 16:08:06','Pankaj Bisht'],
              ['Out','drishti@gmail.com','support@c-zentrix.com','T20190120148772','Duplicate mails downloading','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 16:08:05','Pankaj Bisht'],
              ['In','support@c-zentrix.com','dhanush1@gmail.com','T20190120148770','IVR not working','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:00:50','Pankaj Bisht'],
              ['In','support@c-zentrix.com','subuhi@gmail.com','T20190120148769','Voice Issue','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:50:50','Pankaj Bisht'],
              ['Out','vihan23@gmail.com','support@c-zentrix.com','T20190120148770','IVR not working','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:20:40','Pankaj Bisht'],
              ['Out','famin24@gmail.com','support@c-zentrix.com','T20190120148769','Voice Issue','Vikas Kapoor','Old','Critical','2019-01-20 16:00:56','2019-01-20 15:30:36','Pankaj Bisht'],
              ['Out','sanjana@gmail.com','support@c-zentrix.com','T20190120148768','Duplicate tickets creating','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:40:08','Pankaj Bisht'],
              ['In','support@c-zentrix.com','roshan@gmail.com','T20190120148767','UI not opening','Vikas Kapoor','New','Critical','2019-01-20 16:00:56','2019-01-20 15:12:566','Pankaj Bisht']
            ]
          },// table data
        }
      }
    }
  },
  "userStatsData":{
    componentData:{
      primaryHeaderValues: '...',
      primaryProgressBarValue: '...',
      primaryProgressBarValueRate: '...',
      secondaryHeaderValues: '...',
      secondaryProgressBarValue: '...',
      secondaryProgressBarValueRate: '...',
      actionData: {
        dialogData: {
          tableData:{
            data:[
              ['ACTIVE','2001','Operational-Chennai','Malavika','Anand','9830092001','2001@magusdialog.in','Agent'],
              ['ACTIVE','2002','Operational-Chennai','Vangeparapu','udhakar','98392002','202@agusdialogin','Agent'],
              ['ACTIVE','2003','Operational-Chennai','Wasim','Akhram','9830092003','2003@magusdialog.in','Agent'],
              ['ACTIVE','2004','Operational-Chennai','Shaik','Shahul','9830092004','2004@magusdialog.in','Agent'],
              ['ACTIVE','2005','Operational-Chennai','Manoj','John','9830092005','2005@magusdialog.in','Agent'],
              ['ACTIVE','2006','Operational-Chennai','Yusuf','Shariff S','9830092006','2006@magusdialog.in','Agent'],
              ['ACTIVE','2007','Operational-Chennai','Thamodhar','V','9830092007','2007@magusdialog.in','Agent'],
              ['ACTIVE','2008','Operational-Chennai','Lohithraj','Prasad','9830092008','2008@magusdialog.in','Agent'],
              ['ACTIVE','2009','Operational-Chennai','Sathish','kumar','9830092009','2009@magusdialog.in','Agent'],
              ['ACTIVE','2010','Operational-Chennai','Amit','Deb','9830092010','2010@magusdialog.in','Agent'],
              ['ACTIVE','2011','Operational-Chennai','K','Syed','Asif Ahmed','9830092011','2011@magusdialog.in','Agent'],
              ['ACTIVE','2012','Operational-Chennai','Aravind','M','9830092012','2012@magusdialog.in','Agent'],
              ['ACTIVE','2013','Operational-Chennai','Magaluru','Sai','rahul','9830092013','2013@magusdialog.in','Agent'],
            ]
          },// table data
        }
      }
    }
  },
  "leadsData":{
    componentData:{
      data: 
      [
        {name: '12AM', Leads: 4000,Converted: 2000},
        {name: '1AM', Leads: 8000, Converted: 7600},
        {name: '2AM', Leads: 8500, Converted: 8000},
        {name: '3AM', Leads: 6500, Converted: 6100},
        {name: '4AM', Leads: 7700, Converted: 7100},
        {name: '5AM', Leads: 6600, Converted: 2600},
        {name: '6AM', Leads: 4800, Converted: 3400},
        {name: '7AM', Leads: 5000, Converted: 4500},
        {name: '8AM', Leads: 4800, Converted: 4200},
        {name: '9AM', Leads: 4800, Converted: 4100},
        {name: '10AM', Leads: 270, Converted: 210},
        {name: '11AM', Leads: 900, Converted: 880},
        {name: '12PM', Leads: 890, Converted: 670},
        {name: '1PM', Leads: 6500, Converted: 5900},
        {name: '2PM', Leads: 7800, Converted: 7101},
        {name: '3PM', Leads: 6300, Converted: 6100},
        {name: '4PM', Leads: 9200, Converted: 7400},
        {name: '5PM', Leads: 7800, Converted: 4707},
        {name: '6PM', Leads: 4400, Converted: 2100},
        {name: '7PM', Leads: 9900, Converted: 7900},
        {name: '8PM', Leads: 4500, Converted: 3100},
        {name: '9PM', Leads: 7300, Converted: 5009},
        {name: '10PM', Leads: 500, Converted: 288},
        {name: '11PM', Leads: 480, Converted: 440},
      ]
    }
  },
  "leadForecastData":{
    componentData:{
      data: [
        {name: '1 PM', leads: 2400},
        {name: '2 PM', leads: 1398},
        {name: '3 PM', leads: 2000},
        {name: '4 PM', leads: 3908},
        {name: '5 PM', leads: 4800},
        {name: '6 PM', leads: 3800},
        {name: '7 PM', leads: 4300}
      ]
    }
  },
  "stateWiseLeadsData":{
    componentData:{
      data: 
      [
        {
          name: 'Hot',
          value: 699
        }, 
        {
          name: 'Cold',
          value: 567
        }
      ] 
    }
  },
  "statusWiseLeadsData":{
    componentData:{
      data: [
        {name: 'New', value: 590},
        {name: 'Inprogress', value: 868},
        {name: 'Closed', value: 1397},
        {name: 'Reopen', value: 1480},
        {name: 'Resolved', value: 1520}
      ] 
    }
  },
  "dispositionWiseLeadsData":{
    componentData:{
      data: 
      [
        {
          name: 'disp1',
          value: 564
        }, 
        {
          name: 'disp2',
          value: 768
        },
        {
          name: 'disp3',
          value: 136
        },
        {
          name: 'disp4',
          value: 226
        },
        {
          name: 'disp5',
          value: 466
        }
      ]  
    }
  },
  "topLeadsData":{
    componentData:{
      data:[
        ['L20190120148745','Vikas Kapoor','Magus','800000'],
        ['L20190120148745','Sabohi Zaidi','Limeraod','730000'],
        ['L20190120148745','Kamlesh Tiwari','OYO','710000'],
        ['L20190120148745','Sapna Kumari','TVS','650000'],
        ['L20190120148745','Naveen Sharma','Sundarm','530000'],
        ['L20190120148774','Vikas Kapoor','Mafil','440000'],
        ['L20190120148765','Nidhi Ranjan','GST','360000'],
        ['L20190120148754','Noumya Kumari','Infozen','250000']
      ]
    }
  },
  "topProductData":{
    componentData:{
      data:[
        ['CRM','Vikas Kapoor','2000000'],
        ['Dialer','Narmada Khurana','1800000'],
        ['IVR','Sabohi Zaidi','1300000']
      ]
    }
  },
  "recentActivitiesTicketData":{
    componentData:{
      listItemsData:[
        {
            step: "Activity 1",
            date: "Jan 11, 2019"
        },
        {
            step: "Activity 2",
            date: "Jan 10, 2019"
        },
        {
            step: "Activity 3",
            date: "Jan 9, 2019"
        }
      ]
    }
  },
  "recentNotificationsData":{
    componentData:{
      listItemsData:[
        {
          step: "Notification 1",
          date: "Jan 11, 2019"
        },
        {
          step: "Notification 2",
          date: "Jan 11, 2019"
        },
        {
          step: "Notification 3",
          date: "Jan 10, 2019"
        }
      ]
    }
  },
  "toDoData":{
    componentData:{
      listItemsData:[
        {
          step: "Task 1",
          // date: "Jan 11, 2019"
        },
        {
          step: "Task 2",
          // date: "Jan 11, 2019"
        },
        {
          step: "Task 3",
          // date: "Jan 10, 2019"
        }
      ]
    }
  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MODE: {title: "TICKET",value: 0},
       ticketDashboardData: ticketDashboardData,
      leadDashboardData: leadDashboardData,
      isLoaded: false,
    };
  }

  fetchDashboardData = (timePeriod) => {
    console.log("=======[Dashboard.js] fetchDashboardData  =====");
    console.log("=======timePeriod====="+timePeriod);
   
    ticketLeadData('ticket',timePeriod,this);
    ticketLeadData('lead',timePeriod,this);
    taskData('ticket',timePeriod,this);
    taskData('lead',timePeriod,this);
    mailData('ticket',timePeriod,this);
    mailData('lead',timePeriod,this);
    usersData('ticket',this);
    usersData('lead',this);
    priorityData('ticket',this);
    statusData('ticket',this);
    // typeData('ticket',this);
    // stateData('lead',this);
    statusData('lead',this);
    // dispositionData('lead',this);
  }

  componentWillMount() 
  { 
      console.log("Dashboard -> componentWillMount()"); 
      this.fetchDashboardData('today');
  } 
  //Notification SSE : Connection Intialize 
  componentDidMount()
  {
    console.log("=======[Dashboard.js] componentDidMount  =====");
    // setInterval(()=>this.fetchDashboardData('today'),1000);
  }
  handleChange = (event, newValue) => {
    const Mode = ["TICKET","LEAD"];
    this.setState({
      MODE: {title: Mode[newValue], value: newValue}
    });
  }
  handleMenuClick = (value) =>{
    alert('From Dashboard.js ==> '+value);
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {/* <ScrollUpButton
          EasingType="easeInOutCubic"
          AnimationDuration={70}
        />
        <PageProgress color={'red'} height={52} /> */}
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={this.state.value}
            exclusive
            onChange={this.handleChange}
            aria-label="text alignment"
            style={{border:"1px solid teal",color: "teal"}}
          >
            <ToggleButton value={0} aria-label="left aligned">
              Ticket Dashboard
            </ToggleButton>
            <ToggleButton value={1} aria-label="centered">
              Lead Dashboard
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* <AppBar style={{position:"sticky",top: "48px", backgroundColor:"#485d67"}} >
            <Toolbar>
              <Typography variant="body2" color="inherit" className={classes.grow} >
                ADMIN DASHBOARD
              </Typography>
              <Typography variant="h6">
              <Tabs  classes={{indicator: classes.tabsIndicator}} value={this.state.value} className={classes.tabs} onChange={this.handleChange}>
              <Tab className={classes.tabRoot} disableRipple label="Ticket Dashboard" />
              <Tab className={classes.tabRoot} disableRipple label="Lead Dashboard" />
              </Tabs>
              </Typography>
            </Toolbar>   
        </AppBar> */}
          <div className={classes.tabContent}>
              <Typography style={{paddingBottom: "30px", paddingTop: "10px",paddingLeft: "10px",color: "teal"}} variant="h6" color="inherit" className={classes.grow} >
                {`${this.state.MODE.title} DASHBOARD`}
              </Typography>
            {this.state.MODE.value === 0 && <TicketDashboard menuclick={(value) => this.handleMenuClick(value)} {...ticketDashData} {...this.state.ticketDashboardData}/>}
            {this.state.MODE.value === 1 && <LeadDashboard {...leadDashData} {...this.state.leadDashboardData}/>}
          </div>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) 
  { 
    console.log("Dashboard -> shouldComponentUpdate()"); 
    return true; 
  } 

  componentWillUpdate() 
  { 
    console.log("Dashboard -> componentWillUpdate()"); 
  } 

  componentDidUpdate() 
  { 
    console.log("Dashboard -> componentDidUpdate()"); 
  } 
}

// export default Dashboard;
export default withStyles(styles)(Dashboard);

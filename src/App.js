import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomizedCard from './CustomizedCard';
import CustomizedPieChart from './CustomizedPieChart';
import ReactVirtualizedTable from './SimpleTable';
import SimpleLineChart from './SimpleLineChart';
import CustomizedList from './CustomizedList';
import CustomShapeBarChart from './CustomShapeBarChart';
// import FullScreenDialog from './FullScreenDialog';
// import SimpleDialogDemo from './FullScreenDialog';

//import FontAwesome from './MyIcons.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Keep all data in external files
      CardData:[
        {
          prePrimaryHeader: 'Tickets',
          primaryHeader: 'Total Tickets Created',
          primaryHeaderValus: 3099,
          progressBarHeader: 'Closed',
          progressBarValue: 78,
          linearColorPrimary: 'primaryClass1',
          linearBarColorPrimary: 'secondaryClass1',
          preSecondaryHeader: 'Tasks',
          secondaryHeader: 'Total Tasks Created',
          secondaryHeaderValus: 6999,
          dialogData: {
            dialogHeader: 'Ticket Details',
            tableData:{
              tableHeading: "",
              columnData:[
                {
                  width: 150,
                  flexGrow: 1.0,
                  label: 'Docket No',
                  dataKey: 'docket_no',
                },
                {
                  width: 100,
                  label: 'Assign To',
                  dataKey: 'assign_to',
                  numeric: false,
                },
                {
                  width: 130,
                  label: 'Departments',
                  dataKey: 'assign_to_dept',
                  numeric: false,
                },
                {
                  width: 120,
                  label: 'Ticket Type',
                  dataKey: 'ticket_type',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Priority',
                  dataKey: 'priority',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Disposition',
                  dataKey: 'disposition',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Sub Disposition',
                  dataKey: 'sub_disposition',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Person Name',
                  dataKey: 'person_name',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Ticket Status',
                  dataKey: 'ticket_status',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Problem Reported',
                  dataKey: 'problem_reported',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'Created On',
                  dataKey: 'created_on',
                  numeric: true,
                },
              ],
              data:[
                ['T20190120148774','Vikas Kapoor','Sales','General Enquiry','Critical','Loan','Others','ARTI SURYAWANSHI','OPEN-EMAIL','retaging','2019-01-20 16:00:56'],
                ['T20190120148773','Nidhi Ranjan','Sales','Call Drop','Critical','Others','Others','RADHAMANI','NEW','call drop','2019-01-20 16:16:21'],
                ['T20190120148772','jommya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148771','Nidhi Verma','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148770','Jahnvi Kapoor','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148769','Shina Savitri','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148768','Nitin Harish','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148767','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148766','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148765','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
                ['T20190120148764','Noumya Kumari','Support','General Enquiry','Semi-Critical','Blank Call','Blank Call','pankag saharai','CLOSED','call drop','2019-01-20 16:14:12'],
              ],
              MenuData:{
                options: [
                  'Today',
                  'Yesterday',
                  'Callisto',
                  'Last 7 days',
                  'Last 30 days',
                  'This Month',
                  'Last Month',
                ]
              } 
            },// table data
          }
        },
        {
          prePrimaryHeader: 'Leads',
          primaryHeader: 'Total Leads Created',
          primaryHeaderValus: 2005,
          progressBarHeader: 'Converted',
          progressBarValue: 54,
          linearColorPrimary: 'primaryClass2',
          linearBarColorPrimary: 'secondaryClass2',
          preSecondaryHeader: 'Tasks',
          secondaryHeader: 'Total Tasks Created',
          secondaryHeaderValus: 4009,
          dialogData: {
            dialogHeader: 'Lead Details',
            tableData:{
              tableHeading: "",
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
                // Lead No	Assigned User	Assigned Dept	
                // Lead Source	Product Type	Disposition	Sub Disposition	
                // Person Name	Lead Status	Agent Remarks	Created On
                ['L20190120148750','Noumya Kumari','Support','Call','Dialer','Blank Call','Blank Call','pankag saharai','CLOSED','closed','2019-01-20 16:14:12'],
                ['L20190120148749','Jaipreet','Helpdesk','Call','Ticketing','Others','Others','Vikky Kaushal','INPROGRESS','customer need info','2019-01-20 16:10:14'],
                ['L20190120148748','Sabohi Zaidi','Sales','Email','IVR','Cold','Cold','Chintu Barma','CLOSED','cust want the product','2019-01-20 16:10:09'],
                ['L20190120148747','Vikas Kapoor','Sales','Call','LMS','Loan','Sakshi','OPEN-EMAIL','retaging','2019-01-20 15:58:08'],
                ['L20190120148746','Kamlesh Tiwari','Sales','Email','Ticketing','Others','Others','Ridhima','CLOSED','closed','2019-01-20 15:40:21'],
              ],
              MenuData:{
                options: [
                  'Today',
                  'Yesterday',
                  'Callisto',
                  'Last 7 days',
                  'Last 30 days',
                  'This Month',
                  'Last Month',
                ]
              } 
            },// table data
          }
        },
        {
          prePrimaryHeader: 'Mails',
          primaryHeader: 'Total Mails Received',
          primaryHeaderValus: 5010,
          progressBarHeader: 'Mails Replied',
          progressBarValue: 69,
          linearColorPrimary: 'primaryClass3',
          linearBarColorPrimary: 'secondaryClass3',
          preSecondaryHeader: 'Fresh Mails',
          secondaryHeader: 'Total Fresh Mails Received',
          secondaryHeaderValus: 1099,
          dialogData: {
            dialogHeader: 'Mail Details',
            tableData:{
              tableHeading: "",
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
              ],
              MenuData:{
                options: [
                  'Today',
                  'Yesterday',
                  'Callisto',
                  'Last 7 days',
                  'Last 30 days',
                  'This Month',
                  'Last Month',
                ]
              } 
            },// table data
          }
        },
        {
          prePrimaryHeader: 'Users',
          primaryHeader: 'All Users',
          primaryHeaderValus: 276,
          progressBarHeader: 'Active Users',
          progressBarValue: 90,
          linearColorPrimary: 'primaryClass4',
          linearBarColorPrimary: 'secondaryClass4',
          preSecondaryHeader: 'Active Users',
          secondaryHeader: 'All Active Users',
          secondaryHeaderValus: 250,
          dialogData: {
            dialogHeader: 'User Details',
            tableData:{
              tableHeading: "",
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
              ],
              MenuData:{
                options: [
                  'Today',
                  'Yesterday',
                  'Callisto',
                  'Last 7 days',
                  'Last 30 days',
                  'This Month',
                  'Last Month',
                ]
              } 
            },// table data
          }
        }
      ],
      lineChartData:[
        {
          dataKey: "Tickets",
          strokeColor: "#123316",
          fillColor: "#367C3D",
          data: 
          [
            {name: '12AM', Tickets: 4000},
            {name: '1AM', Tickets: 5000},
            {name: '2AM', Tickets: 4500},
            {name: '3AM', Tickets: 3590},
            {name: '4AM', Tickets: 8700},
            {name: '5AM', Tickets: 6700},
            {name: '6AM', Tickets: 4900},
            {name: '7AM', Tickets: 5000},
            {name: '8AM', Tickets: 4500},
            {name: '9AM', Tickets: 3800},
            {name: '10AM', Tickets: 6700},
            {name: '11AM', Tickets: 4000},
            {name: '12PM', Tickets: 5000},
            {name: '1PM', Tickets: 4500},
            {name: '2PM', Tickets: 3800},
            {name: '3PM', Tickets: 8700},
            {name: '4PM', Tickets: 8000},
            {name: '5PM', Tickets: 6000},
            {name: '6PM', Tickets: 7600},
            {name: '7PM', Tickets: 4500},
            {name: '8PM', Tickets: 6700},
            {name: '9PM', Tickets: 4000},
            {name: '10PM', Tickets: 5000},
            {name: '11PM', Tickets: 4500},
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }  
        },
        {
          dataKey: "Leads",
          strokeColor: "#574B01",
          fillColor: "#C1AB1F",
          data: 
          [
            {name: '12AM', Leads: 4000},
            {name: '1AM', Leads: 8000},
            {name: '2AM', Leads: 8500},
            {name: '3AM', Leads: 6500},
            {name: '4AM', Leads: 7700},
            {name: '5AM', Leads: 6600},
            {name: '6AM', Leads: 4800},
            {name: '7AM', Leads: 5000},
            {name: '8AM', Leads: 4800},
            {name: '9AM', Leads: 4800},
            {name: '10AM', Leads: 2700},
            {name: '11AM', Leads: 9000},
            {name: '12PM', Leads: 8900},
            {name: '1PM', Leads: 6500},
            {name: '2PM', Leads: 7800},
            {name: '3PM', Leads: 6300},
            {name: '4PM', Leads: 9200},
            {name: '5PM', Leads: 7800},
            {name: '6PM', Leads: 4400},
            {name: '7PM', Leads: 9900},
            {name: '8PM', Leads: 4500},
            {name: '9PM', Leads: 7300},
            {name: '10PM', Leads: 5000},
            {name: '11PM', Leads: 4800},
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }
        }
      ],
      pieChartData:
      [
        {
          chartHeading: "Status wise Tickets",
          color: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300'],
          data: 
          [
            {
                name: 'NEW',
                value: 4700
            }, 
            {
                name: 'INPROGRESS',
                value: 7300
            },
            {
                name: 'CLOSED',
                value: 6300
            },
            {
                name: 'REOPEN',
                value: 900
            },
            {
                name: 'RESOLVED',
                value: 450
            },
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }  
        },
        {
          chartHeading: "Priority Wise Tickets",
          color: ['#5B05A3','#0B8AB6','#B60B4E'],
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
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }  
        }
      ],
      tableData:{
        loginData:{
          tableHeading: "Logged In Users",
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
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }  
        },
        productData:{
          tableHeading: "Top Products",
          columnData:[
            {
              width: 150,
              flexGrow: 1.0,
              label: 'Product Name',
              dataKey: 'param1',
            },
            {
              width: 100,
              label: 'Description',
              dataKey: 'param2',
              numeric: false,
            },
            {
              width: 130,
              label: 'Sales Amount',
              dataKey: 'param3',
              numeric: true,
            }
          ],
          data:[
            ['Product 1','Product 1 Description','2000'],
            ['Product 2','Product 2 Description','800'],
            ['Product 3','Product 3 Description','300']
          ],
          MenuData:{
            options: [
              'Today',
              'Yesterday',
              'Callisto',
              'Last 7 days',
              'Last 30 days',
              'This Month',
              'Last Month',
            ]
          }  
        }
      },// table data  
      listData:[
      {
        listHeading: "Recent Activities",
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
      },
      {
        listHeading: "Recent Notofications",
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
      ],  //list data end
      CustomShapeBarChartData:{
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
        data: [
          {name: '1 PM', tickets: 4000, leads: 2400},
          {name: '2 PM', tickets: 3000, leads: 1398},
          {name: '3 PM', tickets: 9800, leads: 2000},
          {name: '4 PM', tickets: 2780, leads: 3908},
          {name: '5 PM', tickets: 1890, leads: 4800},
          {name: '6 PM', tickets: 2390, leads: 3800},
          {name: '7 PM', tickets: 3490, leads: 4300},
        ]
      } // CustomShapeBarChart data end 
    };// state end

  }// constructor close here

  componentDidMount() {
    // this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  componentWillUnmount() {
    // if (this.state.intervalIsSet) {
    //   clearInterval(this.state.intervalIsSet);
    //   this.setState({ intervalIsSet: null });
    // }
  }

  getDataFromDb = () => {
    // alert("000000");
    fetch("/api/search?query=India")
      .then(data => data.json())
      .then(res => alert(res.parse.title));
      // .then(res => this.setState({ data: res.data }));
  };
  
  render() {
    let dashboadCards = this.state.CardData.map(formElement => (
      <Grid key={formElement.prePrimaryHeader} item xs={6} sm={3} md={3} lg={3}>
      <CustomizedCard
      {...formElement}
      />
      </Grid>
    ));

    let dashboardLineCharts = this.state.lineChartData.map(formElement => (
      <Grid key={formElement.dataKey} item xs={12} sm={12} md={12} lg={12}>
        <SimpleLineChart
        {...formElement}
        />              
      </Grid>
    ));

    let dashboadPieCharts = this.state.pieChartData.map(formElement => (
      <Grid key={formElement.chartHeading} item xs={12} sm={12} md={6} lg={6}>
        <CustomizedPieChart
        {...formElement}
        />
      </Grid>
    ));

    // let dashboardList = this.state.listData.map(formElement => ( 
    //   <Grid item xs={12} sm={12} md={6} lg={6}>
    //     <CustomizedList
    //     {...formElement}
    //     />
    //   </Grid>
    // ));
  

    return (
      <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <Grid container spacing={24} justify="space-between">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            {dashboadCards}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <ReactVirtualizedTable {...this.state.tableData.loginData}/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container spacing={24}>
                {dashboardLineCharts}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <ReactVirtualizedTable {...this.state.tableData.productData}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
           {dashboadPieCharts}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CustomizedList
                {...this.state.listData[0]}
              />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomShapeBarChart
                {...this.state.CustomShapeBarChartData}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomizedList
                  {...this.state.listData[1]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
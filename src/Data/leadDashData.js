const leadDashData = {
    "leadStats":{
            id: "leadStats",
            componentData:{
                componentType: "data",
                header: 'Leads',
                primaryHeader: 'Total Leads Created',
                primaryHeaderValus: 2005,
                primaryProgressBarHeader: 'Converted',
                primaryProgressBarValue: 1010,
                primaryProgressBarValueRate: 54,
                primaryLinearColorPrimary: 'color1',
                primaryLinearBarColorPrimary: 'color2',
                secondaryHeader: 'Total Leads Escalated',
                secondaryHeaderValues: 6999,
                secondaryProgressBarHeader: 'Escalation Rate',
                secondaryProgressBarValue: 6023,
                secondaryProgressBarValueRate: 85,
                secondaryLinearColorPrimary: 'color9',
                secondaryLinearBarColorPrimary: 'color10',
                dialogData: {
                dialogHeader: 'Lead Details',
                tableData:{
                    tableHeading: "",
                    columnData:[
                        {
                            width: 150,
                            flexGrow: 1.0,
                            label: 'Lead No',
                            dataKey: 'lead_no',
                        },
                        {
                            width: 100,
                            label: 'Product Type',
                            dataKey: 'product_type',
                            numeric: false,
                        },
                        {
                            width: 130,
                            label: 'Assign To',
                            dataKey: 'assign_to',
                            numeric: false,
                        },
                        {
                            width: 120,
                            label: 'Departments',
                            dataKey: 'assign_to_dept_id',
                            numeric: true,
                        },
                        {
                            width: 100,
                            label: 'Priority',
                            dataKey: 'priority',
                            numeric: false,
                        },
                        {
                            width: 130,
                            label: 'Disposition',
                            dataKey: 'disposition',
                            numeric: false,
                        },
                        {
                            width: 120,
                            label: 'Sub Disposition',
                            dataKey: 'sub_disposition',
                            numeric: true,
                        },
                        {
                            width: 100,
                            label: 'Person Name',
                            dataKey: 'person_name',
                            numeric: false,
                        },
                        {
                            width: 130,
                            label: 'Ticket Status',
                            dataKey: 'ticket_status',
                            numeric: false,
                        },
                        {
                            width: 120,
                            label: 'Agent Remarks',
                            dataKey: 'agent_remarks',
                            numeric: true,
                        },
                        {
                            width: 120,
                            label: 'Created On',
                            dataKey: 'created_on',
                            numeric: true,
                        }
                    ],
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
                    ],
                    MenuData:{
                        options: [
                            'Today',
                            'Yesterday',
                            'Last 7 days',
                            'Last 30 days',
                            'This Month',
                            'Last Month',
                        ]
                    } 
                },// table data
                }
            }
    },
    "taskStats":{
        id: "taskStats",
        componentData:{
            componentType: "data",
            header: 'Tasks',
            primaryHeader: 'Total Tasks Cretead',
            primaryHeaderValus: 2005,
            primaryProgressBarHeader: 'Closed',
            primaryProgressBarValue: 999,
            primaryProgressBarValueRate: 54,
            primaryLinearColorPrimary: 'color3',
            primaryLinearBarColorPrimary: 'color4',
            secondaryHeader: 'Total Tasks Overdue',
            secondaryHeaderValues: 4009,
            secondaryProgressBarHeader: 'Overdue Rate',
            secondaryProgressBarValue: 4009,
            secondaryProgressBarValueRate: 48,
            secondaryLinearColorPrimary: 'color11',
            secondaryLinearBarColorPrimary: 'color12',
            dialogData: {
            dialogHeader: 'Escalation Details',
            tableData:{
                tableHeading: "",
                columnData:[
                    {
                        width: 150,
                        flexGrow: 1.0,
                        label: 'Lead No',
                        dataKey: 'lead_no',
                    },
                    {
                        width: 100,
                        label: 'Product Type',
                        dataKey: 'product_type',
                        numeric: false,
                    },
                    {
                        width: 130,
                        label: 'Assign To',
                        dataKey: 'assign_to',
                        numeric: false,
                    },
                    {
                        width: 120,
                        label: 'Department',
                        dataKey: 'assign_to_dept_id',
                        numeric: true,
                    },
                    {
                        width: 100,
                        label: 'Priority',
                        dataKey: 'priority',
                        numeric: false,
                    },
                    {
                        width: 130,
                        label: 'Disposition',
                        dataKey: 'disposition',
                        numeric: false,
                    },
                    {
                        width: 120,
                        label: 'Sub Disposition',
                        dataKey: 'sub_disposition',
                        numeric: true,
                    },
                    {
                        width: 100,
                        label: 'Person Name',
                        dataKey: 'person_name',
                        numeric: false,
                    },
                    {
                        width: 130,
                        label: 'Ticket Status',
                        dataKey: 'ticket_status',
                        numeric: false,
                    },
                    {
                        width: 120,
                        label: 'Agent Remarks',
                        dataKey: 'agent_remarks',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Created On',
                        dataKey: 'created_on',
                        numeric: true,
                    }
                ],
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
                ],
                MenuData:{
                    options: [
                        'Today',
                        'Yesterday',
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                } 
            },// table data
            }
        }
    }, 
    "mailStats":{
        id: "mailStats",
            componentData:{
                componentType: "data",
                header: 'Lead Mails',
                primaryHeader: 'Total Lead Mails Received',
                primaryHeaderValus: 5010,
                primaryProgressBarHeader: 'Lead Mails Replied',
                primaryProgressBarValue: 3098,
                primaryProgressBarValueRate: 69,
                primaryLinearColorPrimary: 'color5',
                primaryLinearBarColorPrimary: 'color6',
                preSecondaryHeader: 'Fresh Lead Mails',
                secondaryHeader: 'Total Fresh Lead Mails Received',
                secondaryHeaderValues: 1099,
                secondaryProgressBarHeader: 'Fresh Lead Mails Replied',
                secondaryProgressBarValue: 987,
                secondaryProgressBarValueRate: 66,
                secondaryLinearColorPrimary: 'color13',
                secondaryLinearBarColorPrimary: 'color14',
                dialogData: {
                    dialogHeader: 'Lead Mail Details',
                    tableData:{
                        tableHeading: "",
                        columnData:[
                            {
                                width: 70,
                                flexGrow: 0.1,
                                label: 'Flow',
                                dataKey: 'flow',
                            },
                            {
                                width: 170,
                                label: 'To',
                                dataKey: 'to',
                                numeric: false,
                            },
                            {
                                width: 170,
                                label: 'From',
                                dataKey: 'from',
                                numeric: false,
                            },
                            {
                                width: 150,
                                label: 'Docket No',
                                dataKey: 'docket_no',
                                numeric: true,
                            },
                            {
                                width: 110,
                                label: 'Subject',
                                dataKey: 'subject',
                                numeric: false,
                            },
                            {
                                width: 130,
                                label: 'Assigned To',
                                dataKey: 'assigned_to',
                                numeric: false,
                            },
                            {
                                width: 60,
                                label: 'Docket Type',
                                dataKey: 'docket_type',
                                numeric: true,
                            },
                            {
                                width: 120,
                                label: 'Ticket Status',
                                dataKey: 'ticket_status',
                                numeric: true,
                            },
                            {
                                width: 100,
                                label: 'Mail date Time',
                                dataKey: 'mail_date_time',
                                numeric: false,
                            },
                            {
                                width: 100,
                                label: 'Download date Time',
                                dataKey: 'download_date_time',
                                numeric: false,
                            },
                            {
                                width: 130,
                                label: 'Reply By',
                                dataKey: 'reply by',
                                numeric: false,
                            }
                        ],
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
                        ],
                        MenuData:{
                            options: [
                                'Today',
                                'Yesterday',
                                'Last 7 days',
                                'Last 30 days',
                                'This Month',
                                'Last Month',
                            ]
                        } 
                    },// table data
                }
            }
    },
    "userStats":{
        id: "userStats",
        componentData:{
            componentType: "data",
            header: 'Lead Users',
            primaryHeader: 'All Lead Users',
            primaryHeaderValus: 276,
            primaryProgressBarHeader: 'Active Lead Users',
            primaryProgressBarValue: 267,
            primaryProgressBarValueRate: 90,
            primaryLinearColorPrimary: 'color7',
            primaryLinearBarColorPrimary: 'color8',
            secondaryHeader: 'All Loggedin Lead Users',
            secondaryHeaderValues: 250,
            secondaryProgressBarHeader: 'Blocked Lead Users',
            secondaryProgressBarValue: 27,
            secondaryProgressBarValueRate: 10,
            secondaryLinearColorPrimary: 'color15',
            secondaryLinearBarColorPrimary: 'color16',
            dialogData: {
            dialogHeader: 'Lead User Details',
            tableData:{
                tableHeading: "",
                columnData:[
                    {
                        width: 100,
                        flexGrow: 0.2,
                        label: 'Status',
                        dataKey: 'status',
                    },
                    {
                        width: 100,
                        label: 'User Name',
                        dataKey: 'user_name',
                        numeric: false,
                    },
                    {
                        width: 200,
                        label: 'Department',
                        dataKey: 'department_name',
                        numeric: false,
                    },
                    {
                        width: 170,
                        label: 'First Name',
                        dataKey: 'first_name',
                        numeric: false,
                    },
                    {
                        width: 170,
                        label: 'Last Name',
                        dataKey: 'last_name',
                        numeric: true,
                    },
                    {
                        width: 200,
                        label: 'Mobile Number',
                        dataKey: 'mobile_no',
                        numeric: false,
                    },
                    {
                        width: 200,
                        label: 'Email',
                        dataKey: 'email',
                        numeric: false,
                    },
                    {
                        width: 170,
                        label: 'Role Name',
                        dataKey: 'role_name',
                        numeric: true,
                    }
                ],
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
                ],
                MenuData:{
                    options: [
                        'Today',
                        'Yesterday',
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                } 
            },// table data
            }
        }
    },
    "leads":{
        id: "leads",
        componentData:{
            componentType: "areaLineChart",
            header: "Leads Created v/s Converted",
            areaStrokeColor: "#574B01",
            areaFillColor: "#C1AB1F",
            lineStrokeColor: "#b50346",
            lineFillColor: "#f973a5",
            key1: "Leads",
            key2: "Converted",
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
            ],
            MenuData:{
                options: [
                    'Today',
                    'Yesterday',
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }
        }
    },
    "leadForecastData":{
        id: "leadForecastData",
        componentData:{
            componentType: "customBarChart",
            dataKey: "leads",
            header: "Future Trends",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
            data: [
                {name: '1 PM', leads: 2400},
                {name: '2 PM', leads: 1398},
                {name: '3 PM', leads: 2000},
                {name: '4 PM', leads: 3908},
                {name: '5 PM', leads: 4800},
                {name: '6 PM', leads: 3800},
                {name: '7 PM', leads: 4300}
            ],
            MenuData:{
                options: [
                'Today',
                'Yesterday',
                'Last 7 days',
                'Last 30 days',
                'This Month',
                'Last Month',
                ]
            }
        }
    },
    "stateWiseLeads":{
        id: "stateWiseLeads",
        componentData:{
            componentType: "pieChart",
            header: "State Wise Leads",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
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
            ],
            MenuData:{
                options: [
                    'Today',
                    'Yesterday',
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }  
        }
    },
    "statusWiseLeads":{
        id: "statusWiseTickets",
        componentData:{
            componentType: "verticalBarChart",
            header: "Status Wise Leads",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300'],
            data: [
                {name: 'New', value: 590},
                {name: 'Inprogress', value: 868},
                {name: 'Closed', value: 1397},
                {name: 'Reopen', value: 1480},
                {name: 'Resolved', value: 1520}
            ],
            MenuData:{
                options: [
                    'Today',
                    'Yesterday',
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }  
        }
    },
    "dispositionWiseLeads":{
            id: "dispositionWiseLeads",
            componentData:{
                componentType: "pieChart",
                header: "Dispositon Wise Leads",
                colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
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
                ],
                MenuData:{
                    options: [
                        'Today',
                        'Yesterday',
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                }  
            
            }
    },
    // "loginData":{
    //         id: "loginData",
    //         componentData:{
    //             componentType: "table",
    //             header: "Logged In Users",
    //             columnData:[
    //                 {
    //                     width: 150,
    //                     flexGrow: 1.0,
    //                     label: 'Name',
    //                     dataKey: 'param1',
    //                 },
    //                 {
    //                     width: 100,
    //                     label: 'Dept',
    //                     dataKey: 'param2',
    //                     numeric: false,
    //                 },
    //                 {
    //                     width: 130,
    //                     label: 'Login Time',
    //                     dataKey: 'param3',
    //                     numeric: false,
    //                 },
    //                 {
    //                     width: 120,
    //                     label: 'Telephony Agent Id',
    //                     dataKey: 'param4',
    //                     numeric: true,
    //             }
    //             ],
    //             data:[
    //                 ['Vikas Kapoor','L1','Jan 13,2019 08:10:11','2001'],
    //                 ['Nidhi Ranjan','L4','Jan 13,2019 08:00:05','2007'],
    //                 ['Noumya Kumari','L3','Jan 13,2019 08:10:09','2003'],
    //                 ['Jaipreet','L5','Jan 14,2019 08:17:11','2008'],
    //                 ['Sabohi Zaidi','L2','Jan 14,2019 11:30:11','2004']
    //             ],
    //             MenuData:{
    //                 options: [
    //                     'Today',
    //                     'Yesterday',
    //                     'Last 7 days',
    //                     'Last 30 days',
    //                     'This Month',
    //                     'Last Month',
    //                 ]
    //             }  
    //         }
    // },
    "topLeads":{
        id: "topLeads",
        componentData:{
            componentType: "table",
            header: "Top Leads",
            columnData:[
                {
                    width: 155,
                    flexGrow: 1.0,
                    label: 'Lead no.',
                    dataKey: 'lead_no',
                },
                {
                    width: 100,
                    label: 'Agent Name',
                    dataKey: 'agent_name',
                    numeric: false,
                },
                {
                    width: 100,
                    label: 'Client',
                    dataKey: 'client',
                    numeric: false,
                },
                {
                    width: 90,
                    label: 'Sales Amount',
                    dataKey: 'sales_amount',
                    numeric: false,
                }
            ],
            data:[
                ['L20190120148745','Vikas Kapoor','Magus','800000'],
                ['L20190120148745','Sabohi Zaidi','Limeraod','730000'],
                ['L20190120148745','Kamlesh Tiwari','OYO','710000'],
                ['L20190120148745','Sapna Kumari','TVS','650000'],
                ['L20190120148745','Naveen Sharma','Sundarm','530000'],
                ['L20190120148774','Vikas Kapoor','Mafil','440000'],
                ['L20190120148765','Nidhi Ranjan','GST','360000'],
                ['L20190120148754','Noumya Kumari','Infozen','250000']
            ],
            MenuData:{
                options: [
                    'Today',
                    'Yesterday',
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }  
        }
    },
    "topProductData":{
            id: "topProductData",
            componentData:{
                componentType: "table",
                header: "Top Products",
                columnData:[
                    {
                        width: 150,
                        flexGrow: 1.0,
                        label: 'Product Name',
                        dataKey: 'product_name',
                    },
                    {
                        width: 100,
                        label: 'Agent Name',
                        dataKey: 'agent_name',
                        numeric: false,
                    },
                    {
                        width: 130,
                        label: 'Sales Amount',
                        dataKey: 'sales_amount',
                        numeric: true,
                    }
                ],
                data:[
                    ['CRM','Vikas Kapoor','2000000'],
                    ['Dialer','Narmada Khurana','1800000'],
                    ['IVR','Sabohi Zaidi','1300000']
                ],
                MenuData:{
                    options: [
                        'Today',
                        'Yesterday',
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                }  
            }
    },
    "recentActivitiesTicket":{
        id: "recentActivitiesTicket",
        componentData:{
            componentType: "list",
            header: "Recent Activities",
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
    "recentNotifications":{
            id: "recentNotifications",
            componentData:{
                componentType: "list",
                header: "Recent Notofications",
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
    "toDo":{
            id: "toDo",
            componentData:{
                componentType: "list",
                header: "To-do List",
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

export default leadDashData;
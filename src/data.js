const dashboardData = {
    "ticketStats":{
        id: "ticketStats",
        componentData:{
            componentType: "data",
            header: 'Tickets',
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
    "leadStats":{
            id: "leadStats",
            componentData:{
                componentType: "data",
                header: 'Leads',
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
    "mailStats":{
        id: "mailStats",
            componentData:{
                componentType: "data",
                header: 'Mails',
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
                header: 'Users',
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
                            label: 'Department Name',
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
    "tickets":{
        id: "tickets",
        componentData:{
            componentType: "lineChart",
            header: "Tickets",
            headerBackground: 'secondaryClass3',
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
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }  
        }
    },
    "leads":{
        id: "leads",
        componentData:{
            componentType: "lineChart",
            header: "Leads",
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
                    'Last 7 days',
                    'Last 30 days',
                    'This Month',
                    'Last Month',
                ]
            }
        }
    },
    "statusWiseTickets":{
            id: "statusWiseTickets",
            componentData:{
                componentType: "pieChart",
                header: "Status Wise Tickets",
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
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                }  
            }
    },
    "priorityWiseTickets":{
            id: "priorityWiseTickets",
            componentData:{
                componentType: "pieChart",
                header: "Priority Wise Tickets",
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
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                }  
            }
    },
    "tickeTypeWiseTickets":{
            id: "tickeTypeWiseTickets",
            componentData:{
                componentType: "pieChart",
                header: "Ticket Type Wise Tickets",
                color: ['#006600','#7C8AEE','#cc0066'],
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
    "loginData":{
            id: "loginData",
            componentData:{
                componentType: "table",
                header: "Logged In Users",
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
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ]
                }  
            }
    },
    "productData":{
            id: "productData",
            componentData:{
                componentType: "table",
                header: "Top Products",
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
    "ticketForecastData":{
            id: "ticketForecastData",
            componentData:{
                componentType: "BarChart",
                header: "Future Trends",
                colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
                data: [
                    {name: '1 PM', tickets: 4000, leads: 2400},
                    {name: '2 PM', tickets: 3000, leads: 1398},
                    {name: '3 PM', tickets: 9800, leads: 2000},
                    {name: '4 PM', tickets: 2780, leads: 3908},
                    {name: '5 PM', tickets: 1890, leads: 4800},
                    {name: '6 PM', tickets: 2390, leads: 3800},
                    {name: '7 PM', tickets: 3490, leads: 4300},
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
    }
};

export default dashboardData;

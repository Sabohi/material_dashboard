const ticketDashData = {
    "ticketStats":{
        id: "ticketStats",
        componentData:{
            componentType: "data",
            header: 'Total Tickets',
            primaryHeader: 'Tickets Created',
            primaryHeaderValuesData:{
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
                            label: 'Department',
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
                        actionData: {
                            menuData:{
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
                    },// table data
            },
            primaryProgressBarHeader: 'Closed',
            primaryLinearColorPrimary: 'color1',
            primaryLinearBarColorPrimary: 'color2',
            secondaryHeader: 'Tickets Escalated',
            secondaryHeaderValuesData:{
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
                            label: 'Department',
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
                        actionData: {
                            menuData:{
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
                },// table data
            },
            secondaryProgressBarHeader: 'Escalation Rate',
            secondaryLinearColorPrimary: 'color9',
            secondaryLinearBarColorPrimary: 'color10',
            actionHeader: 'More',
            actionData: {
                menuData:{
                    options: [
                        'Print',
                        'Details'
                    ],
                    actionNames: [
                        'print',
                        'showDetails'
                    ],
                    actionData: 
                    {
                        detailsData: {
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
                                        label: 'Department',
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
                                    actionData: "" 
                            }// table data
                        }
                    }
                }
            }
        }
    },
    "taskStats":{
        id: "taskStats",
        componentData:{
            componentType: "data",
            header: 'Total Tasks',
            primaryHeader: 'Tasks Created',
            primaryHeaderValuesData: {
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
                    actionData: "" 
                },// table data
            },
            primaryProgressBarHeader: 'Closed',
            primaryLinearColorPrimary: 'color3',
            primaryLinearBarColorPrimary: 'color4',
            secondaryHeader: 'Tasks Overdue',
            secondaryProgressBarHeader: 'Overdue Rate',
            secondaryProgressBarValueData: {
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
                    actionData: "" 
                },// table data
            },
            secondaryLinearColorPrimary: 'color11',
            secondaryLinearBarColorPrimary: 'color12',
            actionHeader: 'More',
            actionData: {
                menuData:{
                    options: [
                        'Print',
                        'Details'
                    ]
                },
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
                        actionData: "" 
                    },// table data
                }
            }
        }
    },
    "mailStats":{
        id: "mailStats",
            componentData:{
                componentType: "data",
                header: 'Total Ticket Mails',
                primaryHeader: 'Mails Received',
                primaryHeaderValues: '...',
                primaryHeaderValuesData: {
                    dialogHeader: 'Ticket Mail Details',
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
                        actionData: ""
                    },// table data
                },
                primaryProgressBarHeader: 'Mails Replied',
                primaryProgressBarValue: '...',
                primaryProgressBarValueRate: '...',
                primaryLinearColorPrimary: 'color5',
                primaryLinearBarColorPrimary: 'color6',
                secondaryHeader: 'Fresh Mails Received',
                secondaryHeaderValues: '...',
                secondaryHeaderValuesData: {
                    dialogHeader: 'Ticket Mail Details',
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
                        actionData: "" 
                    },// table data
                },
                secondaryProgressBarHeader: 'Fresh Mails Replied',
                secondaryProgressBarValue: '...',
                secondaryProgressBarValueRate: '...',
                secondaryLinearColorPrimary: 'color13',
                secondaryLinearBarColorPrimary: 'color14',
                actionHeader: 'More',
                actionData: {
                    menuData:{
                        options: [
                            'Print',
                            'Details'
                        ]
                    },
                    dialogData: {
                        dialogHeader: 'Ticket Mail Details',
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
                            actionData: "" 
                        },// table data
                    }
                }
            }
    },
    "userStats":{
            id: "userStats",
            componentData:{
                componentType: "data",
                header: 'All Ticket Users',
                primaryHeader: 'Users',
                primaryHeaderValues: '...',
                primaryHeaderValuesData: {
                    dialogHeader: 'Ticket User Details',
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
                        actionData: "" 
                    },// table data
                },
                primaryProgressBarHeader: 'Active Users',
                primaryProgressBarValue: '...',
                primaryProgressBarValueRate: '...',
                primaryLinearColorPrimary: 'color7',
                primaryLinearBarColorPrimary: 'color8',
                secondaryHeader: 'Loggedin Users',
                secondaryHeaderValues: '...',
                secondaryHeaderValuesData: {
                    dialogHeader: 'Ticket User Details',
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
                        actionData: "" 
                    },// table data
                },
                secondaryProgressBarHeader: 'Locked Ticket Users',
                secondaryProgressBarValue: '...',
                secondaryProgressBarValueRate: '...',
                secondaryLinearColorPrimary: 'color15',
                secondaryLinearBarColorPrimary: 'color16',
                actionHeader: 'More',
                actionData: {
                    menuData:{
                        options: [
                            'Print',
                            'Details'
                        ]
                    },
                    dialogData: {
                        dialogHeader: 'Ticket User Details',
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
                            actionData: ""
                        },// table data
                    }
                }
            }
    },
    "tickets":{
        id: "tickets",
        componentData:{
            componentType: "areaLineChart",
            header: "Ticket Created v/s Closed",
            areaStrokeColor: "#123316",
            areaFillColor: "#367C3D",
            lineStrokeColor: "#b50346",
            lineFillColor: "#f973a5",
            key1: "Tickets",
            key2: "Closed",
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
            ],
            actionHeader: '',
            actionData: {
                menuData:{
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
    },
    "ticketForecast":{
        id: "ticketForecastData",
        componentData:{
            componentType: "customBarChart",
            dataKey: "tickets",
            header: "Future Trends",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
            actionHeader: 'More',
            actionData: {
                menuData:{
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
    },
    "priorityWiseTickets":{
        id: "priorityWiseTickets",
        componentData:{
            componentType: "pieChart",
            header: "Priority Wise Tickets",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
            actionHeader: 'More',
            actionData: {
                menuData:{
                    options: [
                        'Today',
                        'Yesterday',
                        'Last 7 days',
                        'Last 30 days',
                        'This Month',
                        'Last Month',
                    ],
                    actionNames: [
                        'today',
                        'yesterday',
                        'last7days',
                        'last30days',
                        'thismonth',
                        'lastmonth',
                    ]
                } 
            }  
        }
    },
    "statusWiseTickets":{
        id: "statusWiseTickets",
        componentData:{
            componentType: "verticalBarChart",
            dataKey: "statusWiseTickets",
            header: "Status Wise Tickets",
            colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300'],
            actionHeader: 'More',
            actionData: {
                menuData:{
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
    },
    "tickeTypeWiseTickets":{
            id: "tickeTypeWiseTickets",
            componentData:{
                componentType: "pieChart",
                // dataKey: "statusWiseTickets",
                header: "Ticket Type Wise Tickets",
                colors: ['#0712B3','#006600','#7C8AEE','#cc0066','#993300',"#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
                actionHeader: 'More',
                actionData: {
                    menuData:{
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
    },
    "login":{
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
                actionHeader: 'More',
                actionData: {
                    menuData:{
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
    },
    "issues":{
        id: "issuesData",
        componentData:{
            componentType: "table",
            header: "SLA Breached Issues",
            columnData:[
                {
                    width: 150,
                    flexGrow: 1.0,
                    label: 'Docket No',
                    dataKey: 'docket_no',
                },
                {
                    width: 120,
                    label: 'Assign To',
                    dataKey: 'assign_to',
                    numeric: false,
                },
                {
                    width: 100,
                    label: 'Department',
                    dataKey: 'assign_to_dept_name',
                    numeric: false,
                }
            ],
            actionHeader: 'More',
            actionData: {
                menuData:{
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
    },
    "issueClosers":{
        id: "issueClosersData",
        componentData:{
            componentType: "table",
            header: "Top Issue Closers",
            columnData:[
                {
                    width: 150,
                    flexGrow: 1.0,
                    label: 'Agent Name',
                    dataKey: 'agent_name',
                },
                {
                    width: 100,
                    label: 'Department',
                    dataKey: 'department',
                    numeric: false,
                },
                {
                    width: 80,
                    label: 'Issues Closed',
                    dataKey: 'issues_closed',
                    numeric: true,
                }
            ],
            actionHeader: 'More',
            actionData: {
                menuData:{
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
    },
    "recentActivitiesTicket":{
        id: "recentActivitiesTicket",
        componentData:{
            componentType: "list",
            header: "Recent Activities",
            actionHeader: '',
        }
    },
    "recentNotifications":{
            id: "recentNotifications",
            componentData:{
                componentType: "list",
                header: "Recent Notofications",
                actionHeader: '',
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
            actionHeader: '',
        }
    }
};

export default ticketDashData;

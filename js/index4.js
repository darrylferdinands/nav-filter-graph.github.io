// Create the chart
var chart = Highcharts.chart({
    chart: { height: 500,
        type: 'column',
        renderTo: 'container7',
        style : {
            fontFamily : 'Alegreya',

        }
    },
    title: {
        text: 'Field Survey',
    },
    subtitle: {
        text: 'Total Survey = 2308'
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'District'
        }  
    },
    yAxis: {
        title: {
            text: 'Survey'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            borderRadius: 5,
            color: "#4d88ff",
            dataLabels: {
                enabled: true,
                format: '{point.y:1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{red}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
    },

    "series": [
        {
            "name": "District",
            
            "data": [
                {
                    "name": "AL",
                    "y": 90,
                    "drilldown": "AL"
                },
                {
                    "name": "BD",
                    "y": 200,
                    "drilldown": "Firefox"
                },
                {
                    "name": "BB",
                    "y": 130,
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "BU",
                    "y": 289,
                    "drilldown": "Safari"
                },
                {
                    "name": "FA",
                    "y": 103,
                    "drilldown": "Edge"
                },
                {
                    "name": "GO",
                    "y": 194,
                    "drilldown": "Opera"
                },
                {
                    "name": "GR",
                    "y": 100,
                    "drilldown": null
                },
                    {
                    "name": "HD",
                    "y": 99,
                    "drilldown": "AL"
                },
                {
                    "name": "JH",
                    "y": 28,
                    "drilldown": "Firefox"
                },
                {
                    "name": "MO",
                    "y": 124,
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "PB",
                    "y": 180,
                    "drilldown": "Safari"
                },
                {
                    "name": "RB",
                    "y": 188,
                    "drilldown": "Edge"
                },
                {
                    "name": "RM",
                    "y": 133,
                    "drilldown": "Opera"
                },
                {
                    "name": "SJ",
                    "y": 150,
                    "drilldown": null
                },
                 {
                    "name": "SH",
                    "y": 114,
                    "drilldown": "Opera"
                },
                {
                    "name": "UN",
                    "y": 186,
                    "drilldown": null
                },
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "Chrome",
                "id": "Chrome",
                "data": [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                "name": "Firefox",
                "id": "Firefox",
                "data": [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                "name": "Internet Explorer",
                "id": "Internet Explorer",
                "data": [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});


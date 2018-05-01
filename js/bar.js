$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : [],
		datasets : [
			{
				label : "",
				data : [],
				backgroundColor : [	],
				borderColor : [],	
				borderWidth : 1
			},
			{
				label : "",
				data : [],
				backgroundColor : [	],
				borderColor : [
					
				],
				borderWidth : 1
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Crop Risk Map",
			fontSize : 18,
			fontColor : '#00004d',
			fontFamily : 'Alegreya'
		},
		legend : {
			display : false,
			position : "bottom"
		},
		elements : {
			center : {
				text: 'Test',
				color: 'black',
				fontStyle: 'Helvetica',
			}
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});






$(document).ready(function () {

	var ctx = $("#bar-chartcanvas2");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Cumulative Sowing Trend",
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

	scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 5,
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Risk Level',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 1,
                 	display: true,
                        scaleLabel: {
                              		display: true,
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});







$(document).ready(function () {

	var ctx = $("#bar-chartcanvas3");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Rainfall Status",
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 5
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Risk Level',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 1,
                 	display: true,
                        scaleLabel: {
                              		display: true,
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});




$(document).ready(function () {

	var ctx = $("#bar-chartcanvas4");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : ["Dry Spell"],
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily: 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 4
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Risk Level',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 1,
                 	display: true,
                        scaleLabel: {
                              		display: true,
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});









$(document).ready(function () {

	var ctx = $("#bar-chartcanvas5");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,4,0,0,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 0, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 2, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 0, 0, 1, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : ["Wet Spell"],
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily: 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 4
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Risk Level',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 1,
                 	display: true,
                        scaleLabel: {
                              		display: true,
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});
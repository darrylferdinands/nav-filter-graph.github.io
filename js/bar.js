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
			fontSize : 16,
			fontColor : 'grey'
		},
		legend : {
			display : false,
			position : "bottom"
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
					"red",
					"red",
					"red",
					"red",
					"red",
					"red",

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
					"darkblue",
					"darkblue",
					"darkblue",
					"darkblue",
					"darkblue",
					"darkblue",

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
					"green",
					"green",
					"green",
					"green",
					"green"
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
			fontSize : 16,
			fontColor : "grey"
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
					min : 0
				},
				title : {
					text: 'Risk Level'
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
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   
  var scores = new Array();
  var dates = new Array();
  var wickets = new Array();

  // Populate series
    for (var i = 0; i < data.length; i++){

    	var bar_color = '#53c653';
    	if(data[i].match_result == "lost")
    	{
    		bar_color = '#ff4d4d';
    	}
        scores.push({ y: parseInt(data[i].batting_score), color: bar_color, dataOpposition : data[i].opposition, dataMatchResult:data[i].match_result+ " by "+data[i].result_margin });
    
        wickets.push(parseInt(data[i].wickets));


    }

   var options = {
		    chart: {
	            type: 'column',
	        },
		    title: {
		        text: 'Sachin Tendulkar'
		    },
		    legend: {
             enabled: true
        	},
		    xAxis: {
		            categories: dates,
		            type: 'category',
		            labels: {
		                rotation: -45,
		                style: {
		                    fontSize: '10px'
		                },
		                formatter: function() {
		                	    //console.log(this);
					            return data[this.value].date;
					        }
		            },
		            min: 0,
		            max: 30
		        },
		    yAxis: {
		            title: {
		                text: 'Runs Scored'
		            },
		            opposite:false
		        },
			 series: [{
		        type: 'column',
	            name: 'Runs',
	            data: scores
	        }],

	        scrollbar: {
                enabled: true,
                barBackgroundColor: '#f2f2f2',
                barBorderRadius: 7,
                barBorderWidth: 0,
                buttonBackgroundColor: '#f2f2f2',
                buttonBorderWidth: 0,
                buttonArrowColor: '#cccccc',
                buttonBorderRadius: 7,
                rifleColor: '#cccccc',
                trackBackgroundColor: 'white',
                trackBorderWidth: 1,
                trackBorderColor: 'silver',
                trackBorderRadius: 7
        },
        navigator: {
            enabled: true,
            series: {
	            type: 'column',
	            data: wickets
            },
            xAxis: {
	            categories: '',
	            labels: {
		            enabled: false
	            }
	            
            }
        },
        tooltip: {
            formatter: function () {
	                 console.log(this);
	            	return '<b>Opposition: </b>'+ this.points[0].point.dataOpposition +'<br><b>Sachin Scored: </b>' + this.y+'<br><b>Result: </b>'+this.points[0].point.dataMatchResult;
			
            }
        }

		};

        // create the chart
        $('#container').highcharts('StockChart',options);


});

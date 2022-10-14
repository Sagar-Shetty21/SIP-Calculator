function chart() {

    // set the data
    var data = [
        {x: "Amount invested", value: document.getElementById('invested-val').innerHTML },
        {x: "Returns gained", value: document.getElementById('returns-val').innerHTML }
    ];
  
    // create the chart and add the data
    var chart = anychart.pie(data);
   
    // clear the container
    document.getElementById('pie-chart').innerHTML = '';


    // display the chart in the container
    chart.container('pie-chart');





    chart.draw();
  
  }
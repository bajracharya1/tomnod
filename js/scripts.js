$(document).ready(function(){

  $(window).load(function(){ getInfo(); });

});

/*function to get JSON data */
function getInfo(){
  
  var url = "https://s3.amazonaws.com/intern-coding-challenge/counts.json";

  console.log(url);
  $.ajax({
  url: url,
  dataType: "json",
  context: document.body,

  })
    .done(function(data){ /* once done, JSON data will be saved into var data */

   /* console.log('Got Info');
     console.log(data); */  /*this outputs the JSON data to console */
      /*Getting different object from JSON data using variables */
    
    var tag = data.tags;
    var cluster= data.clusters;
   
/* if it need to run a loop in case data is pretty huge */   

/* $.each(tag, function() {
   $("#dataHere").append("<th>" + this.name +"</th>" + "<td>" +this.count+"</td>");
    }); 
      
   $.each(cluster, function() {
   $("#dataHere").append("<th>" + this.name +"</th>" + "<td>" +this.count+"</td>");
    });*/
       
      
    $("#swim").append("<th>"+tag[0].name +"</th>"+ "<td>"+ tag[0].count +"</td>" + "<td>"+ cluster[0].count +"</td>"); /*appends/write data into html file */
   $("#tennis").append("<th>"+tag[1].name +"</th>"+ "<td>"+ tag[1].count +"</td>" + "<td>"+ cluster[1].count +"</td>");
   $("#soccer").append("<th>"+tag[2].name +"</th>"+ "<td>"+ tag[2].count +"</td>" + "<td>"+ cluster[2].count +"</td>");
   

/*creating a new chart using above data, I used Canvas.js */
      
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Tomnod campaign in Honduras"   
      },
      animationEnabled: true,
      axisX:{
        title: ""
      },
      axisY:{
        title: "Counts"
      },
      data: [
      {        
   
        name: "Tags",
        showInLegend: "true",
        dataPoints: [
        {  y: tag[0].count, label: "Swimming Pool"},
        {  y: tag[1].count, label: "Tennis Court" },
        {  y: tag[2].count, label: "Soccer Field" },
               
        ]
      }, {        
                
        name: "Clusters",
        showInLegend: "true",
        dataPoints: [
        {  y: cluster[0].count, label: "Swimming Pool"},
        {  y: cluster[1].count, label: "Tennis Court" },
        {  y: cluster[2].count, label: "Soccer Field" },              
        ]
      }

      ]
    });

    chart.render();

  });

}

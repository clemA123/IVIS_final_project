/* Slider and button */
$("#interactionSlide").slider();
//$("#nbLinkSlide").slider();
$("#nbLinkSlide").slider({ min: 1, max: 34, value: [1, 18], focus: true });

$("#interactionSlide").on("change", function(slideEvt) {
  $("#interactionValue").text(slideEvt.value.newValue);
  drawStart();
});
$("#nbLinkSlide").on("change", function(slideEvt) {
	var val = slideEvt.value.newValue;
  $("#nbLinkValueMin").text(val[0]);
  $("#nbLinkValueMax").text(val[1]);
  drawStart();
});
// On/Off for arrow
$("#arrowInteractions").change(function() {
  if(this.checked) {

    visualization.edges({"opacity": 1}).draw();
    $("#interactionSlide").slider("enable");
    $("#nbLinkSlide").slider("enable");
  }
  else {
    visualization.edges({"opacity": 0}).draw();

    $("#interactionSlide").slider("disable");
    $("#nbLinkSlide").slider("disable");

  }
});

//On/off color on influencing
$('#nodeColor').change(function(){
  if(this.checked){
    visualization
    .color({
      "range": ["#404043","#CA669A","#FDFAC8"],
      "value": "influenced"
    })
    .legend(true).draw();
  }
  else{
    drawStart();
  }
})

//On/off size on influencing
$('#nodeSize').change(function(){
  drawStart();

})
/*End of slider and button */
var focused;
var overview = 1; // 1 = overview, 0 = Target
var mode=1; // 1 = Invest & influencing, 0 = Target & influenced
var order=1;
var current_connections = connections;

var visualization = d3plus.viz()
.container("#viz")
.type("network");

function drawStart(){
  order = 1; //Return to 1 in case we return and go back to visu.
  setCurrentConnection();
$("#orderButton").text("Order " + 1);
$("#orderRectangle").css("background-color", '#b2ebf2');
$("#orderText").html("1st Order");
  var maxInfluencing = Math.max.apply(Math,data.map(function(o){return o.influencing;}));
  var minInfluencing = Math.min.apply(Math,data.map(function(o){return o.influencing;}));
  var maxSize = 9;
  var minSize = 1.5;


  /* Gather information from the view */
  displayArrow = $('#arrowInteractions').is(":checked");
  displayNodeColor = $('#nodeColor').is(":checked");
  displayNodeSize = $('#nodeSize').is(":checked");
  interactionValue = $('#interactionSlide').attr("value")
  nbLinkValue = $('#nbLinkSlide').attr("value").split(",")
  /* Draw the animation according the infos */

  var edges_to_display = connections.filter(function(d){return d.value == interactionValue }); //interaction value

  edges_to_display = edges_to_display.filter(function(d){
    var id = (d.source.name || d.source);
    return numberOfLink[id].source  >= nbLinkValue[0] && numberOfLink[id].source  <= nbLinkValue[1] }); //number link value
    visualization
    .data(data)
    .nodes(positions)

    .edges(edges_to_display) //filter the connection

    .edges  ({"arrows": true,

    "color":function(d){var val = reduction(d.value); if(val <=-2.5){return "#9C4A56"}if(val <=-1.5){return "#D6707D"} if(val <=-0.5){return "#E8AD84"} if(val <=0.5 ){return "#F2EBA5"} if(val<=1.5){return "#C7D795"}if(val<=2.5){return "#99CA8E"}
    if(val<=3){return "#70B388"}}, //sets color for arrows
    "large" : 500,
    "size":{"min":1},
    "arrows":5
  })

  .size(6)
  .color(function(d){return ("#" + formatColor(String(d.name).split(".")[0]));})
  .legend(false)
  .id("name")
  .mouse({
    "over": function(d){updateOverviewSide(d); return true},
    "click": function(d){makeCircle(d.name);if(overview==1){toggleView()} }
  })
  .tooltip({"size":false,"html":"aaa"}) //It might not be the best solution

  if (!displayArrow){
    visualization.edges({"opacity": 0});
    $("#interactionSlide").slider("disable");
    $("#nbLinkSlide").slider("disable");
  }
  if (displayNodeColor){
    visualization
    .color({
      "range": ["#404043","#CA669A","#FDFAC8"],
      "value": "influenced"
    })
    .legend(true);
  }

  if (displayNodeSize){
    visualization.size(function(d){return (((d.influencing - minInfluencing) * (maxSize - minSize)) / (maxInfluencing - minInfluencing)) + minSize;}); //Rescale to maxsize, minsize range


    // visualization.size("influencing");
  }

  visualization.draw()
}

drawStart();

function setEventOnEdges(){
  d3.selectAll('.d3plus_edge_line line').each(function(d, i) { d3.select(this).attr("pointer-events","all").on('mouseover',function(){
	var edgesValue = formatEdgesText(d.value);

	var preprocessedHtml = "<svg width='1ex' height='3em' style='vertical-align: middle;'> <rect width='1ex' height='3em' style='fill:"+ edgesValue.color +";' /> </svg>  <i>" + edgesValue.text +"</i>";
    $("#valueLink").html(preprocessedHtml);}).on('mouseleave',function(){$("#valueLink").html("<br />")}) });
}
function printEdgesValueSide(value){
  $("#valueLink").html("Value of the link : " +value);
}


function reduction(value){
	//linear reduction from [X,Y] into [-3,3].
	/*
	if (order == 2 ){
		if (mode){ //Influencing
		var OldMin = connections2orderInfluencingMin;
		var OldMax = connections2orderInfluencingMax;
		}
		else{ //influenced
		var OldMin = connections2orderInfluencedMin;
		var OldMax = connections2orderInfluencedMax;
		}
	return (((value - OldMin) * (6)) / (OldMax - OldMin)) -3;
	}
	else {	return value;}*/

	// Try to map [-X,0] -> [-3,0] and [0,Y] -> [0,3]
	if (connections2orderInfluencingMin > 0){console.log("Error in reduction")};
	if (connections2orderInfluencedMin > 0) {console.log("Error in reduction")};
	var positive = (value > 0)
	if (order == 2 ){
		if (mode){ //Influencing
		var OldMin = positive? 0 : connections2orderInfluencingMin;
		var OldMax = positive? connections2orderInfluencingMax :0;
		}
		else{ //influenced
		var OldMin = positive? 0 : connections2orderInfluencedMin;
		var OldMax = positive? connections2orderInfluencedMax : 0;
		}
	var output = positive ? (((value - OldMin) * (3)) / (OldMax - OldMin)) : (((value - OldMin) * (3)) / (OldMax - OldMin)) -3 ;
	return output;
	}
	else if (order == 3){

		if (mode){ //Influencing
		var OldMin = positive? 0 : connections3orderInfluencingMin;
		var OldMax = positive? connections3orderInfluencingMax :0;
		}
		else{ //influenced
		var OldMin = positive? 0 : connections3orderInfluencedMin;
		var OldMax = positive? connections3orderInfluencedMax : 0;
		}
	var output = positive ? (((value - OldMin) * (3)) / (OldMax - OldMin)) : (((value - OldMin) * (3)) / (OldMax - OldMin)) -3 ;
	return output;

	}
	else {	return value;}


}

function changeOrder(orderValue){
order = orderValue;
setCurrentConnection();
makeCircle(focused);
$("#orderButton").text("Order " + orderValue);
var ordDisplay = orderColor(parseInt(orderValue));
$("#orderRectangle").css("background-color", ordDisplay.color);

$("#orderText").html(ordDisplay.text);


}

function makeCircle(idCenter){ //Center a node and display the others in a circle shape.

  var entire_focused_node; //NEED TO BE CHANGED
  focused = idCenter;
  var radius = (order==1)? 70 : 80;
  implied_nodes = [] //nodes to draw.

  /*Printing only the connection for the selected node and add the related nodes into the implied_nodes array */
  new_connections = current_connections.filter(function (d) {
    if (mode){
      if (d.source.name==idCenter || d.source==idCenter){
        implied_nodes.push(d.target.name||d.target)
        return true;
      }
      return false;

    }
    else{
      if (d.target.name==idCenter || d.target==idCenter){
        implied_nodes.push(d.source.name || d.source)
        return true;
      }
      return false;
    }
  }); // /!\ When a connection is parsed into the visualization, the data structure is modified.
  /* TEMPORARY CODE - NEED TO BE OPTIMIZED IF KEEPED */
  new_data = data.filter(function(d){ return (implied_nodes.indexOf(d.name) != -1) || (d.name == idCenter)});

  /* Determination of the new positions */
  new_positions=[]
  N = new_data.length;
  var radius = (order==1)? 70 : 80;
  i = 0; //number of node in the circle
  for (let node of new_data){
    if (node.name == idCenter) {//Center the position
      entire_focused_node = node;
      new_positions.push({"name":idCenter,"x":0,"y":0});
    }
    else{
      theta = i*2*Math.PI/(N-1);
      new_positions.push({"name":node.name,"x":radius*Math.cos(theta),"y":radius*Math.sin(theta)});

      i+=1;
    }
  }
  other_data= data.filter(function(d){ return !((implied_nodes.indexOf(d.name) != -1) || (d.name == idCenter)) });
  i = 0;
  current_category = "";
  current_x = - 2*radius;
  current_y = - radius;
  var offsetX = 14;
  var offsetY = 14;
  new_column = false;
  for (let node of other_data){
    if ( node.name.split(".")[0] == current_category ){ //Add on same line
      current_x = current_x + offsetY;
      current_y = current_y;
    }
    else if (current_y > radius){
      current_x = -2*radius -35;
      current_y = -radius + offsetX ;
      new_column = true;
    }
    else if (new_column){
      current_x = -2*radius -35;
      current_y = current_y + offsetX

    }
    else { //Add in column
      current_x = -2*radius;
      current_y = current_y + offsetX
    }

    new_positions.push({"name":node.name,"x": current_x, "y": current_y});
    current_category = node.name.split(".")[0]
  }

  updateDetailSide(entire_focused_node); //Change the info on the side.


  visualization.data(data)
  .nodes(new_positions)
  .edges(new_connections)
  .edges({"opacity": 1,"size": {"min": 3},"arrows":true,"arrows":10})
  .mouse({
    "out" : function(d){updateDetailSide(entire_focused_node);$("#valueLink").html("<br />");return true},
    "over": function(d){updateDetailSide(d);updateEdgesDetailSide(d.name,focused)}
  })
  .color(function(d){return ("#" + formatColor(String(d.name).split(".")[0]));})
  .legend(false)
  .tooltip({"size":false,"html":false})
  .draw();
  /* As there is no possibility to know if the drawing is done, we are gonna use few timer to sent our hover event */
  setTimeout(function() { setEventOnEdges(); }, 500);
  setTimeout(function() { setEventOnEdges(); }, 1000);
  setTimeout(function() { setEventOnEdges(); }, 2000);
  setTimeout(function() { setEventOnEdges(); }, 5000);
  setTimeout(function() { setEventOnEdges(); }, 10000);



}
/*  END OF TEMPORARY CODE - NEED TO BE OPTIMIZED IF KEEPED */




function setCurrentConnection(){
	if (order == 2 ){
		if (mode){ //Influencing
			current_connections = connections2orderInfluencing;
		}
		else{ //influenced
			current_connections = connections2orderInfluenced;
		}
	}
	else if (order == 3 ){
		if (mode){ //Influencing
			current_connections = connections3orderInfluencing;
		}
		else{ //influenced
			current_connections = connections3orderInfluenced;
		}
	}
	else {

		current_connections = connections;

	}
}

function updateEdgesDetailSide(node1,node2){
  if(!mode){
    var connection = current_connections.find(x => ( (x.source === node1 || x.source.name === node1 ) & (x.target === node2 ||  x.target.name === node2  )));}
    else{
      var connection = current_connections.find(x => ( (x.source === node2 || x.source.name === node2 ) & (x.target === node1 ||  x.target.name === node1  )));
    }
    if (typeof connection == "undefined"){
      var value = 0;
    }
    else {
      var value = connection.value;
    }

	var edgesValue = formatEdgesText(value);

	var preprocessedHtml = "<svg width='1ex' height='3em' style='vertical-align: middle;'> <rect width='1ex' height='3em' style='fill:"+ edgesValue.color +";' /> </svg>  <i>" + edgesValue.text +"</i>";
    $("#valueLink").html(preprocessedHtml);

  }




  function updateOverviewSide(node){
    var id = node.name;
    var nodeTexts = formatDescription(id);
    $("#nodeShortDescriptionOverview").html(nodeTexts.shortDescription);
    $("#nodeDescriptionOverview").html(nodeTexts.longDescription);
    img_to_take = "GOAL_" + id.split(".")[0] + "_TARGET_" + id + ".svg";
    $("#sideOverviewSvg").attr("src","img/"+img_to_take);

	if(node.influenced >= 0){
    $("#netInfluencedValue").html("<font color = '#33ce1e'>" + "+" + node.influenced + "</font>" +  "<i>" + "    (#" + node.rankInfluenced+ ")</i>");
	}else{
	$("#netInfluencedValue").html("<font color = 'red'>" + node.influenced + "</font>" +  "<i>" + "    (#" + node.rankInfluenced+ ")</i>");
	}

	if(node.influencing >= 0){
    $("#netInfluencingValue").html("<font color = '#33ce1e'>" + "+" + node.influencing + "</font>" +  "<i>" + "    (#" + node.rankInfluencing+ ")</i>");
	}else{
	$("#netInfluencingValue").html("<font color = 'red'>" + node.influencing + "</font>" +  "<i>" + "    (#" + node.rankInfluencing+ ")</i>");
	}



  }


  function updateDetailSide(node){
    var id = node.name;
    var nodeTexts = formatDescription(id);
    $("#nodeShortDescriptionDetail").html(nodeTexts.shortDescription);
    $("#nodeDescriptionDetail").html(nodeTexts.longDescription);
    img_to_take = "GOAL_" + id.split(".")[0] + "_TARGET_" + id + ".svg";
    $("#sideDetailSvg").attr("src","img/"+img_to_take);

	if(node.influenced >= 0){
    $("#netInfluencedValueDetail").html("<font color = '#33ce1e'>" + "+" + node.influenced + "</font>" +  "<i>" + "    (#" + node.rankInfluenced+ ")</i>");
	}else{
	$("#netInfluencedValueDetail").html("<font color = 'red'>" + node.influenced + "</font>" +  "<i>" + "    (#" + node.rankInfluenced+ ")</i>");
	}

	if(node.influencing >= 0){
    $("#netInfluencingValueDetail").html("<font color = '#33ce1e'>" + "+" + node.influencing + "</font>" +  "<i>" + "    (#" + node.rankInfluencing+ ")</i>");
	}else{
	$("#netInfluencingValueDetail").html("<font color = 'red'>" + node.influencing + "</font>" +  "<i>" + "    (#" + node.rankInfluencing+ ")</i>");
	}

		//d3.format("+.2g")

	if(node.influenced2Order >= 0){
    $("#netInfluencedValueDetail2").html("<font color = '#33ce1e'>" + "+" + node.influenced2Order + "</font>" +  "<i>" + "    (#" + node.rankInfluenced2+ ")</i>");
	}else{
	$("#netInfluencedValueDetail2").html("<font color = 'red'>" + node.influenced2Order + "</font>" +  "<i>" + "    (#" + node.rankInfluenced2+ ")</i>");
	}

	if(node.influencing2Order >= 0){
    $("#netInfluencingValueDetail2").html("<font color = '#33ce1e'>" + "+" + node.influencing2Order + "</font>" +  "<i>" + "    (#" + node.rankInfluencing2+ ")</i>");
	}else{
	$("#netInfluencingValueDetail2").html("<font color = 'red'>" + node.influencing2Order + "</font>" +  "<i>" + "    (#" + node.rankInfluencing2+ ")</i>");
	}

	if(node.influenced3Order >= 0){
    $("#netInfluencedValueDetail3").html("<font color = '#33ce1e'>" + "+" + d3.round(node.influenced3Order,2) + "</font>" +  "<i>" + "    (#" + node.rankInfluenced3+ ")</i>");
	}else{
	$("#netInfluencedValueDetail3").html("<font color = 'red'>" + d3.round(node.influenced3Order,2) + "</font>" +  "<i>" + "    (#" + node.rankInfluenced3+ ")</i>");
	}

	if(node.influencing3Order >= 0){
    $("#netInfluencingValueDetail3").html("<font color = '#33ce1e'>" + "+" + d3.round(node.influencing3Order,2) + "</font>" +  "<i>" + "    (#" + node.rankInfluencing3+ ")</i>");
	}else{
	$("#netInfluencingValueDetail3").html("<font color = 'red'>" + d3.round(node.influencing3Order,2) + "</font>" +  "<i>" + "    (#" + node.rankInfluencing3+ ")</i>");
	}

    // $("#netInfluencedValueDetail").html(node.influenced + " ,   Rank n° " + node.rankInfluenced +" / 34");
   // $("#netInfluencingValueDetail").html(node.influencing + " , Rank n° " + node.rankInfluencing  +" / 34");

  }


  //Manage the navDetail part
  $(".nav .mode a").on("click", function(e){
    e.preventDefault()
    $(".nav .mode").parent().find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  //Change the detailed mode
  function changeMode(text){
    switch(text) {
      case "influenced": //Target
      mode = 0;
      makeCircle(focused);
      break;
      case "influencing": //Invest
      mode = 1 ;
      makeCircle(focused);
      break;
      return false;
    };
  }

  //Initialize overview view :
  $(function(){
    $("#navDetail").hide();
    $("#sideDetail").hide();

  })

  //Toggle view overview -> Zoom / Zoom-> overview
  function toggleView(){
    console.log("toggle");
    overview = (overview + 1)%2;
    $("#sideOverview").toggle();
    $("#navDetail").toggle();
    $("#sideDetail").toggle();

    if (overview == 1){ //We go back on the overview mode

      //redraw the first graph

      drawStart();

    }
  }

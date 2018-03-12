var matrix=[

[0, 1,  1,  0,  2,  1,  1,  2,  2,  1,  0,  0,  0,  0,  0,  1,  0,  0,  3,  1,  2,  1,  0,  0,  1,  0,  0,  0,  0,  0,  1,  1,  1,  2],

[2, 0,  1,  0,  1,  1,  1,  2,  1,  1,  0,  1,  0,  0,  0,  1,  0,  0,  2,  1,  2,  1,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,  1,  2],

[0, 2,  0,  0,  3,  0,  1,  0,  0,  0,  0,  0,  0,  0,  2,  1,  0,  0,  0,  0,  0,  0,  2,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0],

[0, 0,  0,  0,  1,  0,  0,  0,  0,  0,  2,  2,  -1, 0,  1,  0,  2,  2,  0,  0,  0,  0,  1,  1,  2,  0,  2,  3,  3,  2,  0,  0,  0,  0],

[0, 1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],

[2, 2,  1,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  2,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],

[1, 2,  0,  0,  1,  1,  0,  3,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  2,  1,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0],

[2, 2,  0,  1,  1,  1,  1,  0,  0,  1,  0,  0,  1,  1,  1,  3,  2,  1,  2,  1,  1,  1,  0,  1,  1,  1,  0,  1,  1,  0,  1,  1,  0,  0],

[3, 1,  3,  1,  2,  2,  2,  3,  0,  1,  0,  0,  0,  0,  0,  2,  0,  0,  3,  1,  -1, 0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],

[3, 1,  2,  2,  3,  2,  3,  1,  2,  0,  1,  0,  0,  0,  0,  2,  0,  0,  1,  1,  1,  1,  0,  1,  2,  0,  0,  0,  0,  0,  0,  2,  0,  0],

[0, 2,  0,  2,  0,  0,  0,  0,  0,  0,  0,  3,  -1, 0,  1,  0,  1,  0,  0,  0,  -1, 0,  1,  1,  2,  1,  3,  2,  1,  2,  0,  1,  0,  1],

[0, 1,  0,  1,  0,  0,  0,  0,  0,  0,  2,  0,  -1, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  2,  2,  0,  0,  0,  0],

[0, 0,  0,  1,  0,  0,  0,  0,  0,  0,  -1, -2, 0,  -1, 2,  1,  3,  2,  2,  0,  1,  1,  0,  0,  1,  3,  0,  0,  -1, -1, 1,  0,  -1, 1],

[0, 0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  -1, 0,  3,  0,  3,  2,  0,  0,  1,  2,  3,  3,  0,  3,  0,  0,  1,  0,  0,  0,  -1, 0],

[0, 1,  1,  2,  0,  0,  1,  1,  1,  1,  2,  1,  1,  2,  0,  2,  2,  2,  1,  0,  2,  2,  3,  2,  1,  2,  2,  1,  1,  2,  0,  1,  -1, 1],

[2, 2,  1,  0,  1,  1,  1,  2,  1,  2,  0,  0,  0,  0,  1,  0,  1,  1,  2,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  2],

[0, 1,  0,  1,  0,  0,  0,  1,  0,  0,  1,  0,  1,  2,  2,  1,  0,  2,  1,  0,  1,  1,  2,  1,  2,  3,  1,  0,  1,  2,  0,  0,  0,  1],

[0, 1,  0,  0,  0,  0,  1,  2,  0,  0,  1,  0,  1,  2,  2,  1,  2,  0,  1,  0,  2,  2,  2,  2,  1,  2,  1,  0,  1,  1,  0,  0,  0,  1],

[0, 2,  1,  0,  0,  1,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],

[2, 3,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  1,  0,  0,  0,  2,  0,  0,  0,  0,  0,  1,  0,  0,  0],

[1, 2,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  1,  1,  0,  0,  3,  0,  2,  0,  0,  1,  -1, 0,  0,  0,  0,  0,  0,  0,  0],

[1, 1,  0,  0,  1,  0,  1,  1,  0,  1,  0,  0,  1,  2,  2,  0,  2,  0,  1,  1,  1,  0,  2,  0,  0,  3,  0,  0,  0,  0,  0,  0,  0,  0],

[1, 1,  1,  2,  0,  0,  0,  1,  1,  0,  2,  1,  2,  2,  3,  1,  2,  1,  1,  0,  1,  2,  0,  2,  2,  3,  3,  1,  2,  3,  0,  1,  -1, 2],

[0, 1,  0,  1,  0,  0,  0,  1,  1,  0,  1,  1,  1,  2,  2,  1,  1,  0,  1,  0,  0,  0,  3,  0,  1,  2,  2,  0,  1,  3,  1,  1,  -1, 2],

[3, 3,  1,  3,  0,  2,  0,  1,  0,  1,  2,  3,  -2, -1, 0,  1,  -1, 1,  1,  2,  1,  1,  0,  0,  0,  3,  0,  0,  1,  1,  0,  1,  0,  0],

[-1,  0,  -2, 1,  0,  -1, 0,  0,  0,  0,  0,  -1, 2,  3,  3,  0,  2,  1,  0,  0,  -1, 1,  2,  1,  1,  0,  2,  0,  -1, 1,  0,  0,  0,  0],

[0, 0,  0,  2,  0,  0,  0,  0,  0,  0,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  2,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0],

[0, 0,  1,  3,  0,  0,  0,  0,  0,  0,  1,  2,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0],

[0, 1,  0,  2,  0,  0,  0,  0,  0,  0,  1,  3,  -1, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  1,  1,  0,  0,  3,  0,  0,  -1, 0],

[0, 0,  1,  2,  0,  0,  0,  0,  0,  0,  1,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  1,  3,  3,  0,  0,  0,  0,  0],

[1, 0,  1,  1,  0,  0,  0,  0,  2,  1,  0,  0,  0,  0,  0,  2,  0,  0,  0,  3,  1,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  3,  0,  1],

[3, 2,  2,  2,  1,  2,  1,  1,  2,  3,  2,  1,  0,  0,  0,  1,  1,  2,  1,  3,  0,  0,  2,  1,  2,  2,  2,  2,  2,  2,  3,  0,  0,  3],

[0, -1, 0,  -1, 0,  0,  0,  0,  0,  0,  0,  0,  -1, -1, -1, -1, 0,  0,  -1, 1,  0,  0,  -1, -2, -2, -1, 0,  -1, 0,  0,  1,  1,  0,  2],

[0, 2,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  2,  1,  0,  1,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0]];


// sums of rows
var rowSum = matrix.map(r => r.reduce((a, b) => a + b));

// sums of columns
var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

var targets=["1.3","1.5","2.2","2.4","3.4","3.8","4.1","4.4","5.4","5.5","6.5","6.6","7.2","7.3","8.4","8.5","9.4","9.5","10.1","10.7","11.1","11.2","12.1","12.5","13.1","13.2","14.1","14.4","15.2","15.5","16.4","16.6","17.11","17.13"];
//Calculation fo second order of all targets

var secondOrderInfluencing=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirdOrderInfluencing=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (i = 0; i < matrix.length; i++){

  for(j = 0; j < matrix.length; j++){
   secondOrderInfluencing[i]=secondOrderInfluencing[i]+1/2*rowSum[j]*matrix[i][j];

   for(k = 0; k < matrix.length; k++){
     thirdOrderInfluencing[j]=thirdOrderInfluencing[j]+1/3*rowSum[k]*matrix[j][k];
   }
 }
 secondOrderInfluencing[i]=secondOrderInfluencing[i]+rowSum[i];
 thirdOrderInfluencing[i]=thirdOrderInfluencing[i]+rowSum[i];
}



/*
console.log(rowSum);
console.log(colSum);
console.log(secondOrderInfluencing);
console.log(thirdOrderInfluencing);
*/

function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
    return a.map(function(r) { return r[c]; });
  });
}

var matrixt=transpose(matrix);


var secondOrderInfluenced=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirdOrderInfluenced=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// sums of rows
var rowSumt = matrixt.map(r => r.reduce((a, b) => a + b));

// sums of columns
var colSumt = matrixt.reduce((a, b) => a.map((x, i) => x + b[i]));

for (i = 0; i < matrix.length; i++){

  for(j = 0; j < matrix.length; j++){
   secondOrderInfluenced[i]=secondOrderInfluenced[i]+1/2*rowSumt[j]*matrixt[i][j];

   for(k = 0; k < matrix.length; k++){
     thirdOrderInfluenced[j]=thirdOrderInfluenced[j]+1/3*rowSumt[k]*matrixt[j][k];
   }
 }
 secondOrderInfluenced[i]=secondOrderInfluenced[i]+rowSumt[i];
 thirdOrderInfluenced[i]=thirdOrderInfluenced[i]+rowSumt[i];
}

/*
console.log(rowSumt);
console.log(colSumt);
console.log(secondOrderInfluenced);
console.log(thirdOrderInfluenced);
*/

/////////////////////Array Connections ///////////////////
var connections =[];

var count=0;
for (i = 0; i < matrix.length; i++){
  for (j = 0; j < matrix.length; j++){
	if(matrix[i][j] != 0){
    connections[count]= {
      "source": targets[i],
      "target": targets[j],
      "value": matrix[i][j]
    };

    count=count+1;
	}}

}



/////////////////////Array Data ///////////////////

var data =[];

var count1=0;
for (i = 0; i < matrix.length; i++){
    data[count1]= {
      "name": targets[i],
      "influencing":rowSum[i],
      "influenced":colSum[i],
      "influencing2Order":secondOrderInfluencing[i],
      "influenced2Order":secondOrderInfluenced[i],
      "influencing3Order": thirdOrderInfluencing[i],
      "influenced3Order":thirdOrderInfluenced[i]
    };
    count1=count1+1;
}
////////////// NUMBER OF LINK OBJECT /////////////
var numberOfLink = {};
for (var i in connections){
  connection = connections[i];
  source = connection.source;
  target = connection.target;
  //if not as a key create
  if (!(source in numberOfLink)){
    numberOfLink[source] = {"source":0,"target":0,"sum":0};
  }
  if (!(target in numberOfLink)) {
    numberOfLink[target] = {"source":0,"target":0,"sum":0};
  }

  //Add newValue
  numberOfLink[source].source +=1;
  numberOfLink[source].sum +=1;

  numberOfLink[target].target +=1;
  numberOfLink[target].sum +=1;
}

// ADD RANKS TO DATA ////////

	data.sort(function(a,b){return b.influencing - a.influencing})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluencing = rank;
		rank++;
	}

	data.sort(function(a,b){return b.influenced - a.influenced})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluenced = rank;
		rank++;
	}

		data.sort(function(a,b){return b.influencing2Order - a.influencing2Order})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluencing2 = rank;
		rank++;
	}

	data.sort(function(a,b){return b.influenced2Order - a.influenced2Order})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluenced2 = rank;
		rank++;
	}

	data.sort(function(a,b){return b.influencing3Order - a.influencing3Order})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluencing3 = rank;
		rank++;
	}

	data.sort(function(a,b){return b.influenced3Order - a.influenced3Order})
	var rank = 1;
	for (var i = 0; i < data.length; i++){
		data[i].rankInfluenced3 = rank;
		rank++;
	}



	data.sort(function(a,b){return parseFloat(a.name) - parseFloat(b.name)})


//////// position array //////////////

		positions=[]
		radius = 50; //inner radius
		difference_radius = 20;
		N = data.length/2;
		i = 0; //number of node in the circle
		currentCategory= "";
		for (let node of data){
			if (node.name.split(".")[0] == currentCategory) {//Center the position
				var theta = i*2*Math.PI/N;
				var x =  (radius + difference_radius)*Math.cos(theta)
				var y =  (radius + difference_radius)*Math.sin(theta)
				i+=1;
			}
			else{
				var theta = i*2*Math.PI/N;
				var x =  (radius)*Math.cos(theta)
				var y =  (radius)*Math.sin(theta)
				currentCategory = node.name.split(".")[0] ;

			}

			positions.push({"name":node.name,"x":x,"y":y});

		}


//////////////////////////////////////////////////////////////////////////////////////////

/* Here I create another matrix (called matrixNew) to modify, so we will keep the first matrix as original
and the second to madify and play with the values, so that we can always compare.
*/


var matrixNew=matrix.slice();

function updateCalcations(){


// sums of rows
var rowSumNew = matrixNew.map(r => r.reduce((a, b) => a + b));

// sums of columns
var colSumNew = matrixNew.reduce((a, b) => a.map((x, i) => x + b[i]));


//Calculation fo second order of all targets

var secondOrderInfluencingNew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirdOrderInfluencingNew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (i = 0; i < matrixNew.length; i++){

  for(j = 0; j < matrixNew.length; j++){
   secondOrderInfluencingNew[i]=secondOrderInfluencingNew[i]+1/2*rowSumNew[j]*matrixNew[i][j];

   for(k = 0; k < matrixNew.length; k++){
     thirdOrderInfluencingNew[j]=thirdOrderInfluencingNew[j]+1/3*rowSumNew[k]*matrixNew[j][k];
   }
 }
 secondOrderInfluencingNew[i]=secondOrderInfluencingNew[i]+rowSumNew[i];
 thirdOrderInfluencingNew[i]=thirdOrderInfluencingNew[i]+rowSumNew[i];
}





var matrixtNew=transpose(matrixNew);


var secondOrderInfluencedNew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirdOrderInfluencedNew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// sums of rows
var rowSumtNew = matrixtNew.map(r => r.reduce((a, b) => a + b));

// sums of columns
var colSumtNew = matrixtNew.reduce((a, b) => a.map((x, i) => x + b[i]));

for (i = 0; i < matrixNew.length; i++){

  for(j = 0; j < matrixNew.length; j++){
   secondOrderInfluencedNew[i]=secondOrderInfluencedNew[i]+1/2*rowSumtNew[j]*matrixtNew[i][j];

   for(k = 0; k < matrix.length; k++){
     thirdOrderInfluencedNew[j]=thirdOrderInfluencedNew[j]+1/3*rowSumtNew[k]*matrixtNew[j][k];
   }
 }
 secondOrderInfluencedNew[i]=secondOrderInfluencedNew[i]+rowSumtNew[i];
 thirdOrderInfluencedNew[i]=thirdOrderInfluencedNew[i]+rowSumtNew[i];
}



/////////////////////Array Connections ///////////////////
var connectionsNew =[];

var countNew=0;
for (i = 0; i < matrixNew.length; i++){
  for (j = 0; j < matrixNew.length; j++){
    connectionsNew[countNew]= {
      "source": targets[i],
      "target": targets[j],
      "value": matrixNew[i][j]
    };

    countNew=countNew+1;
  }

}



/////////////////////Array Data ///////////////////

var dataNew =[];

var count1New=0;
for (i = 0; i < matrixNew.length; i++){
    dataNew[count1New]= {
      "name": targets[i],
      "influencing1Order":rowSumNew[i],
      "influenced1Order":colSumNew[i],
      "influencing2Order":secondOrderInfluencingNew[i],
      "influenced2Order":secondOrderInfluencedNew[i],
      "influencing3Order": thirdOrderInfluencingNew[i],
      "influenced3Order":thirdOrderInfluencedNew[i]
    };
    count1New=count1New+1;
}

}




///////////////////////////////////////////////////////////////////////////////////



function resetMatrixNew(){
   matrixNew=matrix.slice();
}


///////////////////////// RAW DATA ///////////////////


connections2orderInfluenced =[{"source":"1.3","target":"1.3","value":16},{"source":"1.3","target":"1.5","value":13.5},{"source":"1.3","target":"2.2","value":3.5},{"source":"1.3","target":"2.4","value":3.5},{"source":"1.3","target":"3.4","value":3.5},{"source":"1.3","target":"3.8","value":4.5},{"source":"1.3","target":"4.1","value":13},{"source":"1.3","target":"4.4","value":13},{"source":"1.3","target":"5.4","value":12.5},{"source":"1.3","target":"5.5","value":18.5},{"source":"1.3","target":"6.5","value":6},{"source":"1.3","target":"6.6","value":4},{"source":"1.3","target":"7.2","value":2.5},{"source":"1.3","target":"7.3","value":1.5},{"source":"1.3","target":"8.4","value":13},{"source":"1.3","target":"8.5","value":16},{"source":"1.3","target":"9.4","value":6.5},{"source":"1.3","target":"9.5","value":8},{"source":"1.3","target":"10.1","value":10.5},{"source":"1.3","target":"10.7","value":10.5},{"source":"1.3","target":"11.1","value":10.5},{"source":"1.3","target":"11.2","value":5},{"source":"1.3","target":"12.1","value":9},{"source":"1.3","target":"12.5","value":8.5},{"source":"1.3","target":"13.1","value":11.5},{"source":"1.3","target":"13.2","value":1.5},{"source":"1.3","target":"14.1","value":1},{"source":"1.3","target":"14.4","value":1},{"source":"1.3","target":"15.2","value":3.5},{"source":"1.3","target":"15.5","value":2},{"source":"1.3","target":"16.4","value":14.5},{"source":"1.3","target":"16.6","value":21.5},{"source":"1.3","target":"17.11","value":-2},{"source":"1.3","target":"17.13","value":4},{"source":"1.5","target":"1.3","value":19.5},{"source":"1.5","target":"1.5","value":19.5},{"source":"1.5","target":"2.2","value":5.5},{"source":"1.5","target":"2.4","value":11.5},{"source":"1.5","target":"3.4","value":2.5},{"source":"1.5","target":"3.8","value":7.5},{"source":"1.5","target":"4.1","value":13.5},{"source":"1.5","target":"4.4","value":17.5},{"source":"1.5","target":"5.4","value":20},{"source":"1.5","target":"5.5","value":24.5},{"source":"1.5","target":"6.5","value":8},{"source":"1.5","target":"6.6","value":6},{"source":"1.5","target":"7.2","value":8.5},{"source":"1.5","target":"7.3","value":10},{"source":"1.5","target":"8.4","value":21.5},{"source":"1.5","target":"8.5","value":19.5},{"source":"1.5","target":"9.4","value":13.5},{"source":"1.5","target":"9.5","value":16},{"source":"1.5","target":"10.1","value":8.5},{"source":"1.5","target":"10.7","value":10.5},{"source":"1.5","target":"11.1","value":10},{"source":"1.5","target":"11.2","value":10},{"source":"1.5","target":"12.1","value":21},{"source":"1.5","target":"12.5","value":13.5},{"source":"1.5","target":"13.1","value":17.5},{"source":"1.5","target":"13.2","value":1},{"source":"1.5","target":"14.1","value":5.5},{"source":"1.5","target":"14.4","value":5},{"source":"1.5","target":"15.2","value":6},{"source":"1.5","target":"15.5","value":7},{"source":"1.5","target":"16.4","value":15},{"source":"1.5","target":"16.6","value":29.5},{"source":"1.5","target":"17.11","value":-2.5},{"source":"1.5","target":"17.13","value":2.5},{"source":"2.2","target":"1.3","value":9},{"source":"2.2","target":"1.5","value":8},{"source":"2.2","target":"2.2","value":1.5},{"source":"2.2","target":"2.4","value":4.5},{"source":"2.2","target":"3.4","value":2.5},{"source":"2.2","target":"3.8","value":4},{"source":"2.2","target":"4.1","value":6.5},{"source":"2.2","target":"4.4","value":8},{"source":"2.2","target":"5.4","value":7},{"source":"2.2","target":"5.5","value":10.5},{"source":"2.2","target":"6.5","value":5},{"source":"2.2","target":"6.6","value":2.5},{"source":"2.2","target":"7.2","value":0},{"source":"2.2","target":"7.3","value":0},{"source":"2.2","target":"8.4","value":7},{"source":"2.2","target":"8.5","value":10},{"source":"2.2","target":"9.4","value":2.5},{"source":"2.2","target":"9.5","value":2.5},{"source":"2.2","target":"10.1","value":4.5},{"source":"2.2","target":"10.7","value":5.5},{"source":"2.2","target":"11.1","value":5},{"source":"2.2","target":"11.2","value":1.5},{"source":"2.2","target":"12.1","value":6},{"source":"2.2","target":"12.5","value":7},{"source":"2.2","target":"13.1","value":4.5},{"source":"2.2","target":"13.2","value":2.5},{"source":"2.2","target":"14.1","value":2},{"source":"2.2","target":"14.4","value":3},{"source":"2.2","target":"15.2","value":2},{"source":"2.2","target":"15.5","value":2.5},{"source":"2.2","target":"16.4","value":9},{"source":"2.2","target":"16.6","value":14},{"source":"2.2","target":"17.11","value":-1.5},{"source":"2.2","target":"17.13","value":1.5},{"source":"2.4","target":"1.3","value":7.5},{"source":"2.4","target":"1.5","value":9.5},{"source":"2.4","target":"2.2","value":5},{"source":"2.4","target":"2.4","value":20.5},{"source":"2.4","target":"3.4","value":1},{"source":"2.4","target":"3.8","value":1.5},{"source":"2.4","target":"4.1","value":4.5},{"source":"2.4","target":"4.4","value":10.5},{"source":"2.4","target":"5.4","value":4},{"source":"2.4","target":"5.5","value":8},{"source":"2.4","target":"6.5","value":18.5},{"source":"2.4","target":"6.6","value":8.5},{"source":"2.4","target":"7.2","value":4},{"source":"2.4","target":"7.3","value":11.5},{"source":"2.4","target":"8.4","value":22.5},{"source":"2.4","target":"8.5","value":11},{"source":"2.4","target":"9.4","value":17},{"source":"2.4","target":"9.5","value":16},{"source":"2.4","target":"10.1","value":3.5},{"source":"2.4","target":"10.7","value":4},{"source":"2.4","target":"11.1","value":2.5},{"source":"2.4","target":"11.2","value":9.5},{"source":"2.4","target":"12.1","value":28},{"source":"2.4","target":"12.5","value":22},{"source":"2.4","target":"13.1","value":7.5},{"source":"2.4","target":"13.2","value":12},{"source":"2.4","target":"14.1","value":8.5},{"source":"2.4","target":"14.4","value":8},{"source":"2.4","target":"15.2","value":10},{"source":"2.4","target":"15.5","value":13.5},{"source":"2.4","target":"16.4","value":9.5},{"source":"2.4","target":"16.6","value":27.5},{"source":"2.4","target":"17.11","value":-5.5},{"source":"2.4","target":"17.13","value":1.5},{"source":"3.4","target":"1.3","value":11},{"source":"3.4","target":"1.5","value":11.5},{"source":"3.4","target":"2.2","value":2},{"source":"3.4","target":"2.4","value":0},{"source":"3.4","target":"3.4","value":2.5},{"source":"3.4","target":"3.8","value":5},{"source":"3.4","target":"4.1","value":7.5},{"source":"3.4","target":"4.4","value":10},{"source":"3.4","target":"5.4","value":15.5},{"source":"3.4","target":"5.5","value":17},{"source":"3.4","target":"6.5","value":2},{"source":"3.4","target":"6.6","value":1},{"source":"3.4","target":"7.2","value":2},{"source":"3.4","target":"7.3","value":2},{"source":"3.4","target":"8.4","value":10},{"source":"3.4","target":"8.5","value":13},{"source":"3.4","target":"9.4","value":3},{"source":"3.4","target":"9.5","value":4.5},{"source":"3.4","target":"10.1","value":8},{"source":"3.4","target":"10.7","value":6.5},{"source":"3.4","target":"11.1","value":6},{"source":"3.4","target":"11.2","value":5},{"source":"3.4","target":"12.1","value":8},{"source":"3.4","target":"12.5","value":3.5},{"source":"3.4","target":"13.1","value":14.5},{"source":"3.4","target":"13.2","value":-4.5},{"source":"3.4","target":"14.1","value":1},{"source":"3.4","target":"14.4","value":3},{"source":"3.4","target":"15.2","value":1.5},{"source":"3.4","target":"15.5","value":2.5},{"source":"3.4","target":"16.4","value":11},{"source":"3.4","target":"16.6","value":19.5},{"source":"3.4","target":"17.11","value":-0.5},{"source":"3.4","target":"17.13","value":3},{"source":"3.8","target":"1.3","value":9.5},{"source":"3.8","target":"1.5","value":8.5},{"source":"3.8","target":"2.2","value":1},{"source":"3.8","target":"2.4","value":2},{"source":"3.8","target":"3.4","value":2.5},{"source":"3.8","target":"3.8","value":4.5},{"source":"3.8","target":"4.1","value":7.5},{"source":"3.8","target":"4.4","value":8},{"source":"3.8","target":"5.4","value":9.5},{"source":"3.8","target":"5.5","value":12},{"source":"3.8","target":"6.5","value":3.5},{"source":"3.8","target":"6.6","value":2.5},{"source":"3.8","target":"7.2","value":1},{"source":"3.8","target":"7.3","value":-1.5},{"source":"3.8","target":"8.4","value":6},{"source":"3.8","target":"8.5","value":10},{"source":"3.8","target":"9.4","value":2.5},{"source":"3.8","target":"9.5","value":3},{"source":"3.8","target":"10.1","value":5},{"source":"3.8","target":"10.7","value":6.5},{"source":"3.8","target":"11.1","value":6},{"source":"3.8","target":"11.2","value":2.5},{"source":"3.8","target":"12.1","value":5},{"source":"3.8","target":"12.5","value":4},{"source":"3.8","target":"13.1","value":6},{"source":"3.8","target":"13.2","value":0.5},{"source":"3.8","target":"14.1","value":0},{"source":"3.8","target":"14.4","value":0},{"source":"3.8","target":"15.2","value":2},{"source":"3.8","target":"15.5","value":1},{"source":"3.8","target":"16.4","value":9},{"source":"3.8","target":"16.6","value":12},{"source":"3.8","target":"17.11","value":-1.5},{"source":"3.8","target":"17.13","value":2},{"source":"4.1","target":"1.3","value":7.5},{"source":"4.1","target":"1.5","value":7},{"source":"4.1","target":"2.2","value":2.5},{"source":"4.1","target":"2.4","value":1.5},{"source":"4.1","target":"3.4","value":2.5},{"source":"4.1","target":"3.8","value":3},{"source":"4.1","target":"4.1","value":6},{"source":"4.1","target":"4.4","value":7.5},{"source":"4.1","target":"5.4","value":8},{"source":"4.1","target":"5.5","value":8.5},{"source":"4.1","target":"6.5","value":2},{"source":"4.1","target":"6.6","value":0.5},{"source":"4.1","target":"7.2","value":3},{"source":"4.1","target":"7.3","value":3.5},{"source":"4.1","target":"8.4","value":7.5},{"source":"4.1","target":"8.5","value":10},{"source":"4.1","target":"9.4","value":4},{"source":"4.1","target":"9.5","value":4},{"source":"4.1","target":"10.1","value":5.5},{"source":"4.1","target":"10.7","value":3.5},{"source":"4.1","target":"11.1","value":5.5},{"source":"4.1","target":"11.2","value":4.5},{"source":"4.1","target":"12.1","value":7},{"source":"4.1","target":"12.5","value":4},{"source":"4.1","target":"13.1","value":8.5},{"source":"4.1","target":"13.2","value":1},{"source":"4.1","target":"14.1","value":0},{"source":"4.1","target":"14.4","value":1.5},{"source":"4.1","target":"15.2","value":0.5},{"source":"4.1","target":"15.5","value":0.5},{"source":"4.1","target":"16.4","value":8.5},{"source":"4.1","target":"16.6","value":13.5},{"source":"4.1","target":"17.11","value":-0.5},{"source":"4.1","target":"17.13","value":2},{"source":"4.4","target":"1.3","value":10.5},{"source":"4.4","target":"1.5","value":9.5},{"source":"4.4","target":"2.2","value":6.5},{"source":"4.4","target":"2.4","value":5.5},{"source":"4.4","target":"3.4","value":3},{"source":"4.4","target":"3.8","value":6.5},{"source":"4.4","target":"4.1","value":8.5},{"source":"4.4","target":"4.4","value":15},{"source":"4.4","target":"5.4","value":12},{"source":"4.4","target":"5.5","value":17.5},{"source":"4.4","target":"6.5","value":5.5},{"source":"4.4","target":"6.6","value":2},{"source":"4.4","target":"7.2","value":7.5},{"source":"4.4","target":"7.3","value":9},{"source":"4.4","target":"8.4","value":14.5},{"source":"4.4","target":"8.5","value":14},{"source":"4.4","target":"9.4","value":8.5},{"source":"4.4","target":"9.5","value":9.5},{"source":"4.4","target":"10.1","value":5.5},{"source":"4.4","target":"10.7","value":9},{"source":"4.4","target":"11.1","value":9},{"source":"4.4","target":"11.2","value":8},{"source":"4.4","target":"12.1","value":12},{"source":"4.4","target":"12.5","value":8},{"source":"4.4","target":"13.1","value":10.5},{"source":"4.4","target":"13.2","value":5},{"source":"4.4","target":"14.1","value":2},{"source":"4.4","target":"14.4","value":2},{"source":"4.4","target":"15.2","value":2},{"source":"4.4","target":"15.5","value":1.5},{"source":"4.4","target":"16.4","value":9.5},{"source":"4.4","target":"16.6","value":19},{"source":"4.4","target":"17.11","value":-4.5},{"source":"4.4","target":"17.13","value":4},{"source":"5.4","target":"1.3","value":6.5},{"source":"5.4","target":"1.5","value":7.5},{"source":"5.4","target":"2.2","value":3.5},{"source":"5.4","target":"2.4","value":1.5},{"source":"5.4","target":"3.4","value":2.5},{"source":"5.4","target":"3.8","value":4.5},{"source":"5.4","target":"4.1","value":6.5},{"source":"5.4","target":"4.4","value":10},{"source":"5.4","target":"5.4","value":6.5},{"source":"5.4","target":"5.5","value":8},{"source":"5.4","target":"6.5","value":3},{"source":"5.4","target":"6.6","value":0.5},{"source":"5.4","target":"7.2","value":4},{"source":"5.4","target":"7.3","value":5},{"source":"5.4","target":"8.4","value":7.5},{"source":"5.4","target":"8.5","value":10},{"source":"5.4","target":"9.4","value":4.5},{"source":"5.4","target":"9.5","value":5.5},{"source":"5.4","target":"10.1","value":2.5},{"source":"5.4","target":"10.7","value":6},{"source":"5.4","target":"11.1","value":2.5},{"source":"5.4","target":"11.2","value":5.5},{"source":"5.4","target":"12.1","value":6.5},{"source":"5.4","target":"12.5","value":6},{"source":"5.4","target":"13.1","value":8},{"source":"5.4","target":"13.2","value":1.5},{"source":"5.4","target":"14.1","value":2},{"source":"5.4","target":"14.4","value":2},{"source":"5.4","target":"15.2","value":0.5},{"source":"5.4","target":"15.5","value":1},{"source":"5.4","target":"16.4","value":6.5},{"source":"5.4","target":"16.6","value":12.5},{"source":"5.4","target":"17.11","value":-1.5},{"source":"5.4","target":"17.13","value":1.5},{"source":"5.5","target":"1.3","value":9},{"source":"5.5","target":"1.5","value":8},{"source":"5.5","target":"2.2","value":4.5},{"source":"5.5","target":"2.4","value":2},{"source":"5.5","target":"3.4","value":2},{"source":"5.5","target":"3.8","value":5.5},{"source":"5.5","target":"4.1","value":10},{"source":"5.5","target":"4.4","value":10},{"source":"5.5","target":"5.4","value":8.5},{"source":"5.5","target":"5.5","value":12},{"source":"5.5","target":"6.5","value":4},{"source":"5.5","target":"6.6","value":1.5},{"source":"5.5","target":"7.2","value":4.5},{"source":"5.5","target":"7.3","value":2.5},{"source":"5.5","target":"8.4","value":7},{"source":"5.5","target":"8.5","value":8.5},{"source":"5.5","target":"9.4","value":5},{"source":"5.5","target":"9.5","value":5.5},{"source":"5.5","target":"10.1","value":3},{"source":"5.5","target":"10.7","value":6.5},{"source":"5.5","target":"11.1","value":5},{"source":"5.5","target":"11.2","value":3.5},{"source":"5.5","target":"12.1","value":8.5},{"source":"5.5","target":"12.5","value":6.5},{"source":"5.5","target":"13.1","value":7},{"source":"5.5","target":"13.2","value":2},{"source":"5.5","target":"14.1","value":0},{"source":"5.5","target":"14.4","value":1},{"source":"5.5","target":"15.2","value":1.5},{"source":"5.5","target":"15.5","value":0.5},{"source":"5.5","target":"16.4","value":8},{"source":"5.5","target":"16.6","value":8.5},{"source":"5.5","target":"17.11","value":-1.5},{"source":"5.5","target":"17.13","value":2},{"source":"6.5","target":"1.3","value":2.5},{"source":"6.5","target":"1.5","value":4.5},{"source":"6.5","target":"2.2","value":4},{"source":"6.5","target":"2.4","value":15},{"source":"6.5","target":"3.4","value":0.5},{"source":"6.5","target":"3.8","value":1},{"source":"6.5","target":"4.1","value":3},{"source":"6.5","target":"4.4","value":7},{"source":"6.5","target":"5.4","value":2.5},{"source":"6.5","target":"5.5","value":6.5},{"source":"6.5","target":"6.5","value":17},{"source":"6.5","target":"6.6","value":5.5},{"source":"6.5","target":"7.2","value":3.5},{"source":"6.5","target":"7.3","value":12},{"source":"6.5","target":"8.4","value":15},{"source":"6.5","target":"8.5","value":6.5},{"source":"6.5","target":"9.4","value":10.5},{"source":"6.5","target":"9.5","value":8.5},{"source":"6.5","target":"10.1","value":1.5},{"source":"6.5","target":"10.7","value":2},{"source":"6.5","target":"11.1","value":1.5},{"source":"6.5","target":"11.2","value":5},{"source":"6.5","target":"12.1","value":16.5},{"source":"6.5","target":"12.5","value":13},{"source":"6.5","target":"13.1","value":9.5},{"source":"6.5","target":"13.2","value":9},{"source":"6.5","target":"14.1","value":9},{"source":"6.5","target":"14.4","value":10},{"source":"6.5","target":"15.2","value":10},{"source":"6.5","target":"15.5","value":10.5},{"source":"6.5","target":"16.4","value":6.5},{"source":"6.5","target":"16.6","value":15.5},{"source":"6.5","target":"17.11","value":-5},{"source":"6.5","target":"17.13","value":1.5},{"source":"6.6","target":"1.3","value":2.5},{"source":"6.6","target":"1.5","value":4.5},{"source":"6.6","target":"2.2","value":2},{"source":"6.6","target":"2.4","value":21},{"source":"6.6","target":"3.4","value":0.5},{"source":"6.6","target":"3.8","value":2.5},{"source":"6.6","target":"4.1","value":2.5},{"source":"6.6","target":"4.4","value":6},{"source":"6.6","target":"5.4","value":3},{"source":"6.6","target":"5.5","value":8.5},{"source":"6.6","target":"6.5","value":18.5},{"source":"6.6","target":"6.6","value":13.5},{"source":"6.6","target":"7.2","value":-2},{"source":"6.6","target":"7.3","value":6.5},{"source":"6.6","target":"8.4","value":15.5},{"source":"6.6","target":"8.5","value":4.5},{"source":"6.6","target":"9.4","value":11},{"source":"6.6","target":"9.5","value":8.5},{"source":"6.6","target":"10.1","value":2.5},{"source":"6.6","target":"10.7","value":4.5},{"source":"6.6","target":"11.1","value":3},{"source":"6.6","target":"11.2","value":0},{"source":"6.6","target":"12.1","value":19.5},{"source":"6.6","target":"12.5","value":13},{"source":"6.6","target":"13.1","value":11},{"source":"6.6","target":"13.2","value":6},{"source":"6.6","target":"14.1","value":9},{"source":"6.6","target":"14.4","value":8.5},{"source":"6.6","target":"15.2","value":12},{"source":"6.6","target":"15.5","value":15},{"source":"6.6","target":"16.4","value":6.5},{"source":"6.6","target":"16.6","value":19.5},{"source":"6.6","target":"17.11","value":-5.5},{"source":"6.6","target":"17.13","value":1},{"source":"7.2","target":"1.3","value":2},{"source":"7.2","target":"1.5","value":1},{"source":"7.2","target":"2.2","value":5},{"source":"7.2","target":"2.4","value":-1.5},{"source":"7.2","target":"3.4","value":0},{"source":"7.2","target":"3.8","value":-1},{"source":"7.2","target":"4.1","value":3},{"source":"7.2","target":"4.4","value":1.5},{"source":"7.2","target":"5.4","value":0},{"source":"7.2","target":"5.5","value":-2},{"source":"7.2","target":"6.5","value":-0.5},{"source":"7.2","target":"6.6","value":-4.5},{"source":"7.2","target":"7.2","value":9.5},{"source":"7.2","target":"7.3","value":12},{"source":"7.2","target":"8.4","value":6},{"source":"7.2","target":"8.5","value":5},{"source":"7.2","target":"9.4","value":5},{"source":"7.2","target":"9.5","value":7},{"source":"7.2","target":"10.1","value":0},{"source":"7.2","target":"10.7","value":-1.5},{"source":"7.2","target":"11.1","value":-1},{"source":"7.2","target":"11.2","value":6.5},{"source":"7.2","target":"12.1","value":4.5},{"source":"7.2","target":"12.5","value":5.5},{"source":"7.2","target":"13.1","value":0},{"source":"7.2","target":"13.2","value":4},{"source":"7.2","target":"14.1","value":-0.5},{"source":"7.2","target":"14.4","value":0},{"source":"7.2","target":"15.2","value":-3.5},{"source":"7.2","target":"15.5","value":-3.5},{"source":"7.2","target":"16.4","value":0},{"source":"7.2","target":"16.6","value":4},{"source":"7.2","target":"17.11","value":1.5},{"source":"7.2","target":"17.13","value":-1.5},{"source":"7.3","target":"1.3","value":3},{"source":"7.3","target":"1.5","value":3},{"source":"7.3","target":"2.2","value":7},{"source":"7.3","target":"2.4","value":6.5},{"source":"7.3","target":"3.4","value":0},{"source":"7.3","target":"3.8","value":-0.5},{"source":"7.3","target":"4.1","value":3.5},{"source":"7.3","target":"4.4","value":7},{"source":"7.3","target":"5.4","value":0.5},{"source":"7.3","target":"5.5","value":2},{"source":"7.3","target":"6.5","value":5},{"source":"7.3","target":"6.6","value":-0.5},{"source":"7.3","target":"7.2","value":13.5},{"source":"7.3","target":"7.3","value":22},{"source":"7.3","target":"8.4","value":15.5},{"source":"7.3","target":"8.5","value":7.5},{"source":"7.3","target":"9.4","value":12.5},{"source":"7.3","target":"9.5","value":14.5},{"source":"7.3","target":"10.1","value":1.5},{"source":"7.3","target":"10.7","value":0},{"source":"7.3","target":"11.1","value":1},{"source":"7.3","target":"11.2","value":11},{"source":"7.3","target":"12.1","value":15},{"source":"7.3","target":"12.5","value":10},{"source":"7.3","target":"13.1","value":7.5},{"source":"7.3","target":"13.2","value":8},{"source":"7.3","target":"14.1","value":4},{"source":"7.3","target":"14.4","value":4},{"source":"7.3","target":"15.2","value":1.5},{"source":"7.3","target":"15.5","value":1.5},{"source":"7.3","target":"16.4","value":1},{"source":"7.3","target":"16.6","value":10},{"source":"7.3","target":"17.11","value":-3},{"source":"7.3","target":"17.13","value":-0.5},{"source":"8.4","target":"1.3","value":3},{"source":"8.4","target":"1.5","value":3},{"source":"8.4","target":"2.2","value":6.5},{"source":"8.4","target":"2.4","value":9.5},{"source":"8.4","target":"3.4","value":0.5},{"source":"8.4","target":"3.8","value":1.5},{"source":"8.4","target":"4.1","value":5},{"source":"8.4","target":"4.4","value":12},{"source":"8.4","target":"5.4","value":6},{"source":"8.4","target":"5.5","value":7},{"source":"8.4","target":"6.5","value":7},{"source":"8.4","target":"6.6","value":0.5},{"source":"8.4","target":"7.2","value":10},{"source":"8.4","target":"7.3","value":19},{"source":"8.4","target":"8.4","value":25.5},{"source":"8.4","target":"8.5","value":7},{"source":"8.4","target":"9.4","value":17.5},{"source":"8.4","target":"9.5","value":18},{"source":"8.4","target":"10.1","value":2.5},{"source":"8.4","target":"10.7","value":1},{"source":"8.4","target":"11.1","value":3.5},{"source":"8.4","target":"11.2","value":14},{"source":"8.4","target":"12.1","value":22},{"source":"8.4","target":"12.5","value":15},{"source":"8.4","target":"13.1","value":6.5},{"source":"8.4","target":"13.2","value":13},{"source":"8.4","target":"14.1","value":7},{"source":"8.4","target":"14.4","value":6},{"source":"8.4","target":"15.2","value":2.5},{"source":"8.4","target":"15.5","value":8},{"source":"8.4","target":"16.4","value":3.5},{"source":"8.4","target":"16.6","value":17},{"source":"8.4","target":"17.11","value":-9.5},{"source":"8.4","target":"17.13","value":5.5},{"source":"8.5","target":"1.3","value":13.5},{"source":"8.5","target":"1.5","value":12.5},{"source":"8.5","target":"2.2","value":6.5},{"source":"8.5","target":"2.4","value":5},{"source":"8.5","target":"3.4","value":1.5},{"source":"8.5","target":"3.8","value":4},{"source":"8.5","target":"4.1","value":9},{"source":"8.5","target":"4.4","value":11.5},{"source":"8.5","target":"5.4","value":13.5},{"source":"8.5","target":"5.5","value":15.5},{"source":"8.5","target":"6.5","value":4.5},{"source":"8.5","target":"6.6","value":1},{"source":"8.5","target":"7.2","value":7.5},{"source":"8.5","target":"7.3","value":9},{"source":"8.5","target":"8.4","value":13.5},{"source":"8.5","target":"8.5","value":17},{"source":"8.5","target":"9.4","value":9},{"source":"8.5","target":"9.5","value":12},{"source":"8.5","target":"10.1","value":7},{"source":"8.5","target":"10.7","value":8.5},{"source":"8.5","target":"11.1","value":5.5},{"source":"8.5","target":"11.2","value":10.5},{"source":"8.5","target":"12.1","value":14},{"source":"8.5","target":"12.5","value":11},{"source":"8.5","target":"13.1","value":8},{"source":"8.5","target":"13.2","value":5},{"source":"8.5","target":"14.1","value":2},{"source":"8.5","target":"14.4","value":3.5},{"source":"8.5","target":"15.2","value":1.5},{"source":"8.5","target":"15.5","value":2},{"source":"8.5","target":"16.4","value":8},{"source":"8.5","target":"16.6","value":22.5},{"source":"8.5","target":"17.11","value":-1.5},{"source":"8.5","target":"17.13","value":2.5},{"source":"9.4","target":"1.3","value":5.5},{"source":"9.4","target":"1.5","value":5.5},{"source":"9.4","target":"2.2","value":6.5},{"source":"9.4","target":"2.4","value":3},{"source":"9.4","target":"3.4","value":0.5},{"source":"9.4","target":"3.8","value":0},{"source":"9.4","target":"4.1","value":7},{"source":"9.4","target":"4.4","value":10.5},{"source":"9.4","target":"5.4","value":4},{"source":"9.4","target":"5.5","value":6.5},{"source":"9.4","target":"6.5","value":3.5},{"source":"9.4","target":"6.6","value":-0.5},{"source":"9.4","target":"7.2","value":8},{"source":"9.4","target":"7.3","value":14.5},{"source":"9.4","target":"8.4","value":21},{"source":"9.4","target":"8.5","value":8},{"source":"9.4","target":"9.4","value":18},{"source":"9.4","target":"9.5","value":17.5},{"source":"9.4","target":"10.1","value":2},{"source":"9.4","target":"10.7","value":1},{"source":"9.4","target":"11.1","value":2.5},{"source":"9.4","target":"11.2","value":13},{"source":"9.4","target":"12.1","value":21.5},{"source":"9.4","target":"12.5","value":15.5},{"source":"9.4","target":"13.1","value":7},{"source":"9.4","target":"13.2","value":15},{"source":"9.4","target":"14.1","value":6},{"source":"9.4","target":"14.4","value":7.5},{"source":"9.4","target":"15.2","value":1},{"source":"9.4","target":"15.5","value":3.5},{"source":"9.4","target":"16.4","value":4.5},{"source":"9.4","target":"16.6","value":11.5},{"source":"9.4","target":"17.11","value":-6},{"source":"9.4","target":"17.13","value":7},{"source":"9.5","target":"1.3","value":3},{"source":"9.5","target":"1.5","value":3},{"source":"9.5","target":"2.2","value":4.5},{"source":"9.5","target":"2.4","value":3.5},{"source":"9.5","target":"3.4","value":0.5},{"source":"9.5","target":"3.8","value":1},{"source":"9.5","target":"4.1","value":5},{"source":"9.5","target":"4.4","value":9.5},{"source":"9.5","target":"5.4","value":4},{"source":"9.5","target":"5.5","value":6.5},{"source":"9.5","target":"6.5","value":6},{"source":"9.5","target":"6.6","value":1},{"source":"9.5","target":"7.2","value":7.5},{"source":"9.5","target":"7.3","value":9},{"source":"9.5","target":"8.4","value":12.5},{"source":"9.5","target":"8.5","value":5},{"source":"9.5","target":"9.4","value":10.5},{"source":"9.5","target":"9.5","value":11},{"source":"9.5","target":"10.1","value":1},{"source":"9.5","target":"10.7","value":2},{"source":"9.5","target":"11.1","value":2.5},{"source":"9.5","target":"11.2","value":10},{"source":"9.5","target":"12.1","value":15.5},{"source":"9.5","target":"12.5","value":12},{"source":"9.5","target":"13.1","value":2.5},{"source":"9.5","target":"13.2","value":12.5},{"source":"9.5","target":"14.1","value":3},{"source":"9.5","target":"14.4","value":6},{"source":"9.5","target":"15.2","value":2.5},{"source":"9.5","target":"15.5","value":3},{"source":"9.5","target":"16.4","value":5},{"source":"9.5","target":"16.6","value":7},{"source":"9.5","target":"17.11","value":-5.5},{"source":"9.5","target":"17.13","value":6.5},{"source":"10.1","target":"1.3","value":12},{"source":"10.1","target":"1.5","value":12},{"source":"10.1","target":"2.2","value":7.5},{"source":"10.1","target":"2.4","value":4},{"source":"10.1","target":"3.4","value":2.5},{"source":"10.1","target":"3.8","value":7.5},{"source":"10.1","target":"4.1","value":12.5},{"source":"10.1","target":"4.4","value":16.5},{"source":"10.1","target":"5.4","value":17},{"source":"10.1","target":"5.5","value":21.5},{"source":"10.1","target":"6.5","value":4.5},{"source":"10.1","target":"6.6","value":1},{"source":"10.1","target":"7.2","value":6},{"source":"10.1","target":"7.3","value":7.5},{"source":"10.1","target":"8.4","value":15},{"source":"10.1","target":"8.5","value":16},{"source":"10.1","target":"9.4","value":9},{"source":"10.1","target":"9.5","value":11.5},{"source":"10.1","target":"10.1","value":7.5},{"source":"10.1","target":"10.7","value":11.5},{"source":"10.1","target":"11.1","value":10},{"source":"10.1","target":"11.2","value":10},{"source":"10.1","target":"12.1","value":15},{"source":"10.1","target":"12.5","value":10},{"source":"10.1","target":"13.1","value":12},{"source":"10.1","target":"13.2","value":5},{"source":"10.1","target":"14.1","value":2},{"source":"10.1","target":"14.4","value":2},{"source":"10.1","target":"15.2","value":1.5},{"source":"10.1","target":"15.5","value":1.5},{"source":"10.1","target":"16.4","value":10},{"source":"10.1","target":"16.6","value":22},{"source":"10.1","target":"17.11","value":-5},{"source":"10.1","target":"17.13","value":5.5},{"source":"10.7","target":"1.3","value":14.5},{"source":"10.7","target":"1.5","value":14},{"source":"10.7","target":"2.2","value":2},{"source":"10.7","target":"2.4","value":2},{"source":"10.7","target":"3.4","value":2},{"source":"10.7","target":"3.8","value":4.5},{"source":"10.7","target":"4.1","value":8.5},{"source":"10.7","target":"4.4","value":11.5},{"source":"10.7","target":"5.4","value":7},{"source":"10.7","target":"5.5","value":13.5},{"source":"10.7","target":"6.5","value":3.5},{"source":"10.7","target":"6.6","value":2.5},{"source":"10.7","target":"7.2","value":6},{"source":"10.7","target":"7.3","value":2},{"source":"10.7","target":"8.4","value":10.5},{"source":"10.7","target":"8.5","value":13.5},{"source":"10.7","target":"9.4","value":6.5},{"source":"10.7","target":"9.5","value":8.5},{"source":"10.7","target":"10.1","value":5.5},{"source":"10.7","target":"10.7","value":9.5},{"source":"10.7","target":"11.1","value":4.5},{"source":"10.7","target":"11.2","value":4.5},{"source":"10.7","target":"12.1","value":9.5},{"source":"10.7","target":"12.5","value":7},{"source":"10.7","target":"13.1","value":8.5},{"source":"10.7","target":"13.2","value":-0.5},{"source":"10.7","target":"14.1","value":0},{"source":"10.7","target":"14.4","value":0},{"source":"10.7","target":"15.2","value":2},{"source":"10.7","target":"15.5","value":1},{"source":"10.7","target":"16.4","value":9.5},{"source":"10.7","target":"16.6","value":15},{"source":"10.7","target":"17.11","value":0.5},{"source":"10.7","target":"17.13","value":2},{"source":"11.1","target":"1.3","value":5.5},{"source":"11.1","target":"1.5","value":6.5},{"source":"11.1","target":"2.2","value":4.5},{"source":"11.1","target":"2.4","value":4},{"source":"11.1","target":"3.4","value":2.5},{"source":"11.1","target":"3.8","value":6},{"source":"11.1","target":"4.1","value":8},{"source":"11.1","target":"4.4","value":12.5},{"source":"11.1","target":"5.4","value":9.5},{"source":"11.1","target":"5.5","value":6.5},{"source":"11.1","target":"6.5","value":4},{"source":"11.1","target":"6.6","value":0.5},{"source":"11.1","target":"7.2","value":7},{"source":"11.1","target":"7.3","value":7},{"source":"11.1","target":"8.4","value":8.5},{"source":"11.1","target":"8.5","value":11.5},{"source":"11.1","target":"9.4","value":8.5},{"source":"11.1","target":"9.5","value":8.5},{"source":"11.1","target":"10.1","value":4},{"source":"11.1","target":"10.7","value":8},{"source":"11.1","target":"11.1","value":7.5},{"source":"11.1","target":"11.2","value":8},{"source":"11.1","target":"12.1","value":9.5},{"source":"11.1","target":"12.5","value":7},{"source":"11.1","target":"13.1","value":6},{"source":"11.1","target":"13.2","value":8.5},{"source":"11.1","target":"14.1","value":0},{"source":"11.1","target":"14.4","value":2.5},{"source":"11.1","target":"15.2","value":0.5},{"source":"11.1","target":"15.5","value":0.5},{"source":"11.1","target":"16.4","value":3},{"source":"11.1","target":"16.6","value":12.5},{"source":"11.1","target":"17.11","value":-4},{"source":"11.1","target":"17.13","value":5},{"source":"11.2","target":"1.3","value":7},{"source":"11.2","target":"1.5","value":7},{"source":"11.2","target":"2.2","value":7},{"source":"11.2","target":"2.4","value":5.5},{"source":"11.2","target":"3.4","value":2},{"source":"11.2","target":"3.8","value":4},{"source":"11.2","target":"4.1","value":6},{"source":"11.2","target":"4.4","value":12},{"source":"11.2","target":"5.4","value":7},{"source":"11.2","target":"5.5","value":7.5},{"source":"11.2","target":"6.5","value":3.5},{"source":"11.2","target":"6.6","value":1},{"source":"11.2","target":"7.2","value":9},{"source":"11.2","target":"7.3","value":11.5},{"source":"11.2","target":"8.4","value":15.5},{"source":"11.2","target":"8.5","value":10.5},{"source":"11.2","target":"9.4","value":14},{"source":"11.2","target":"9.5","value":14},{"source":"11.2","target":"10.1","value":3.5},{"source":"11.2","target":"10.7","value":6.5},{"source":"11.2","target":"11.1","value":3.5},{"source":"11.2","target":"11.2","value":13},{"source":"11.2","target":"12.1","value":14},{"source":"11.2","target":"12.5","value":11.5},{"source":"11.2","target":"13.1","value":6},{"source":"11.2","target":"13.2","value":10},{"source":"11.2","target":"14.1","value":2},{"source":"11.2","target":"14.4","value":4},{"source":"11.2","target":"15.2","value":1.5},{"source":"11.2","target":"15.5","value":1.5},{"source":"11.2","target":"16.4","value":3},{"source":"11.2","target":"16.6","value":12.5},{"source":"11.2","target":"17.11","value":-6.5},{"source":"11.2","target":"17.13","value":4},{"source":"12.1","target":"1.3","value":3.5},{"source":"12.1","target":"1.5","value":4},{"source":"12.1","target":"2.2","value":6},{"source":"12.1","target":"2.4","value":14},{"source":"12.1","target":"3.4","value":0.5},{"source":"12.1","target":"3.8","value":1.5},{"source":"12.1","target":"4.1","value":4},{"source":"12.1","target":"4.4","value":14},{"source":"12.1","target":"5.4","value":5.5},{"source":"12.1","target":"5.5","value":10.5},{"source":"12.1","target":"6.5","value":13},{"source":"12.1","target":"6.6","value":2.5},{"source":"12.1","target":"7.2","value":11},{"source":"12.1","target":"7.3","value":20},{"source":"12.1","target":"8.4","value":24},{"source":"12.1","target":"8.5","value":8},{"source":"12.1","target":"9.4","value":17},{"source":"12.1","target":"9.5","value":18},{"source":"12.1","target":"10.1","value":2},{"source":"12.1","target":"10.7","value":1},{"source":"12.1","target":"11.1","value":4},{"source":"12.1","target":"11.2","value":11.5},{"source":"12.1","target":"12.1","value":29},{"source":"12.1","target":"12.5","value":15.5},{"source":"12.1","target":"13.1","value":8},{"source":"12.1","target":"13.2","value":15.5},{"source":"12.1","target":"14.1","value":6},{"source":"12.1","target":"14.4","value":7},{"source":"12.1","target":"15.2","value":5.5},{"source":"12.1","target":"15.5","value":8},{"source":"12.1","target":"16.4","value":7.5},{"source":"12.1","target":"16.6","value":16.5},{"source":"12.1","target":"17.11","value":-8},{"source":"12.1","target":"17.13","value":3.5},{"source":"12.5","target":"1.3","value":1.5},{"source":"12.5","target":"1.5","value":2},{"source":"12.5","target":"2.2","value":5.5},{"source":"12.5","target":"2.4","value":9},{"source":"12.5","target":"3.4","value":1},{"source":"12.5","target":"3.8","value":0.5},{"source":"12.5","target":"4.1","value":4.5},{"source":"12.5","target":"4.4","value":8},{"source":"12.5","target":"5.4","value":3.5},{"source":"12.5","target":"5.5","value":4},{"source":"12.5","target":"6.5","value":8.5},{"source":"12.5","target":"6.6","value":2.5},{"source":"12.5","target":"7.2","value":6.5},{"source":"12.5","target":"7.3","value":12.5},{"source":"12.5","target":"8.4","value":18.5},{"source":"12.5","target":"8.5","value":5},{"source":"12.5","target":"9.4","value":14.5},{"source":"12.5","target":"9.5","value":12.5},{"source":"12.5","target":"10.1","value":1},{"source":"12.5","target":"10.7","value":1},{"source":"12.5","target":"11.1","value":2},{"source":"12.5","target":"11.2","value":10.5},{"source":"12.5","target":"12.1","value":18.5},{"source":"12.5","target":"12.5","value":16.5},{"source":"12.5","target":"13.1","value":5.5},{"source":"12.5","target":"13.2","value":14.5},{"source":"12.5","target":"14.1","value":5},{"source":"12.5","target":"14.4","value":7},{"source":"12.5","target":"15.2","value":5.5},{"source":"12.5","target":"15.5","value":3.5},{"source":"12.5","target":"16.4","value":4.5},{"source":"12.5","target":"16.6","value":13},{"source":"12.5","target":"17.11","value":-4.5},{"source":"12.5","target":"17.13","value":2.5},{"source":"13.1","target":"1.3","value":8},{"source":"13.1","target":"1.5","value":10},{"source":"13.1","target":"2.2","value":5.5},{"source":"13.1","target":"2.4","value":12.5},{"source":"13.1","target":"3.4","value":2.5},{"source":"13.1","target":"3.8","value":3.5},{"source":"13.1","target":"4.1","value":9.5},{"source":"13.1","target":"4.4","value":15},{"source":"13.1","target":"5.4","value":9.5},{"source":"13.1","target":"5.5","value":13},{"source":"13.1","target":"6.5","value":11.5},{"source":"13.1","target":"6.6","value":6},{"source":"13.1","target":"7.2","value":6},{"source":"13.1","target":"7.3","value":14.5},{"source":"13.1","target":"8.4","value":22.5},{"source":"13.1","target":"8.5","value":12},{"source":"13.1","target":"9.4","value":13},{"source":"13.1","target":"9.5","value":13.5},{"source":"13.1","target":"10.1","value":5},{"source":"13.1","target":"10.7","value":5},{"source":"13.1","target":"11.1","value":6},{"source":"13.1","target":"11.2","value":11.5},{"source":"13.1","target":"12.1","value":21.5},{"source":"13.1","target":"12.5","value":16.5},{"source":"13.1","target":"13.1","value":19.5},{"source":"13.1","target":"13.2","value":5.5},{"source":"13.1","target":"14.1","value":11},{"source":"13.1","target":"14.4","value":10},{"source":"13.1","target":"15.2","value":9},{"source":"13.1","target":"15.5","value":9.5},{"source":"13.1","target":"16.4","value":12},{"source":"13.1","target":"16.6","value":25.5},{"source":"13.1","target":"17.11","value":-4},{"source":"13.1","target":"17.13","value":5.5},{"source":"13.2","target":"1.3","value":4.5},{"source":"13.2","target":"1.5","value":5},{"source":"13.2","target":"2.2","value":5},{"source":"13.2","target":"2.4","value":12.5},{"source":"13.2","target":"3.4","value":0},{"source":"13.2","target":"3.8","value":2.5},{"source":"13.2","target":"4.1","value":6.5},{"source":"13.2","target":"4.4","value":13},{"source":"13.2","target":"5.4","value":6.5},{"source":"13.2","target":"5.5","value":10},{"source":"13.2","target":"6.5","value":8.5},{"source":"13.2","target":"6.6","value":3.5},{"source":"13.2","target":"7.2","value":9},{"source":"13.2","target":"7.3","value":19},{"source":"13.2","target":"8.4","value":24},{"source":"13.2","target":"8.5","value":11},{"source":"13.2","target":"9.4","value":18},{"source":"13.2","target":"9.5","value":20},{"source":"13.2","target":"10.1","value":4},{"source":"13.2","target":"10.7","value":3},{"source":"13.2","target":"11.1","value":7.5},{"source":"13.2","target":"11.2","value":12.5},{"source":"13.2","target":"12.1","value":25.5},{"source":"13.2","target":"12.5","value":17},{"source":"13.2","target":"13.1","value":0},{"source":"13.2","target":"13.2","value":19.5},{"source":"13.2","target":"14.1","value":6},{"source":"13.2","target":"14.4","value":6.5},{"source":"13.2","target":"15.2","value":2.5},{"source":"13.2","target":"15.5","value":7},{"source":"13.2","target":"16.4","value":4},{"source":"13.2","target":"16.6","value":15},{"source":"13.2","target":"17.11","value":-9.5},{"source":"13.2","target":"17.13","value":5.5},{"source":"14.1","target":"1.3","value":1.5},{"source":"14.1","target":"1.5","value":2.5},{"source":"14.1","target":"2.2","value":7},{"source":"14.1","target":"2.4","value":11},{"source":"14.1","target":"3.4","value":0},{"source":"14.1","target":"3.8","value":0},{"source":"14.1","target":"4.1","value":3.5},{"source":"14.1","target":"4.4","value":7.5},{"source":"14.1","target":"5.4","value":1},{"source":"14.1","target":"5.5","value":6.5},{"source":"14.1","target":"6.5","value":9.5},{"source":"14.1","target":"6.6","value":6},{"source":"14.1","target":"7.2","value":6.5},{"source":"14.1","target":"7.3","value":17.5},{"source":"14.1","target":"8.4","value":18},{"source":"14.1","target":"8.5","value":6},{"source":"14.1","target":"9.4","value":14},{"source":"14.1","target":"9.5","value":12.5},{"source":"14.1","target":"10.1","value":0},{"source":"14.1","target":"10.7","value":0.5},{"source":"14.1","target":"11.1","value":-0.5},{"source":"14.1","target":"11.2","value":9},{"source":"14.1","target":"12.1","value":18},{"source":"14.1","target":"12.5","value":15},{"source":"14.1","target":"13.1","value":11},{"source":"14.1","target":"13.2","value":9.5},{"source":"14.1","target":"14.1","value":11},{"source":"14.1","target":"14.4","value":10.5},{"source":"14.1","target":"15.2","value":6},{"source":"14.1","target":"15.5","value":7.5},{"source":"14.1","target":"16.4","value":4.5},{"source":"14.1","target":"16.6","value":16},{"source":"14.1","target":"17.11","value":-5},{"source":"14.1","target":"17.13","value":2.5},{"source":"14.4","target":"1.3","value":2},{"source":"14.4","target":"1.5","value":3.5},{"source":"14.4","target":"2.2","value":2},{"source":"14.4","target":"2.4","value":6},{"source":"14.4","target":"3.4","value":0},{"source":"14.4","target":"3.8","value":0},{"source":"14.4","target":"4.1","value":4},{"source":"14.4","target":"4.4","value":3.5},{"source":"14.4","target":"5.4","value":3},{"source":"14.4","target":"5.5","value":6.5},{"source":"14.4","target":"6.5","value":8},{"source":"14.4","target":"6.6","value":6.5},{"source":"14.4","target":"7.2","value":1},{"source":"14.4","target":"7.3","value":5},{"source":"14.4","target":"8.4","value":11.5},{"source":"14.4","target":"8.5","value":3},{"source":"14.4","target":"9.4","value":8},{"source":"14.4","target":"9.5","value":5.5},{"source":"14.4","target":"10.1","value":0.5},{"source":"14.4","target":"10.7","value":1},{"source":"14.4","target":"11.1","value":0},{"source":"14.4","target":"11.2","value":2.5},{"source":"14.4","target":"12.1","value":13},{"source":"14.4","target":"12.5","value":12},{"source":"14.4","target":"13.1","value":9.5},{"source":"14.4","target":"13.2","value":5.5},{"source":"14.4","target":"14.1","value":9},{"source":"14.4","target":"14.4","value":10.5},{"source":"14.4","target":"15.2","value":9},{"source":"14.4","target":"15.5","value":4.5},{"source":"14.4","target":"16.4","value":4.5},{"source":"14.4","target":"16.6","value":11},{"source":"14.4","target":"17.11","value":-1},{"source":"14.4","target":"17.13","value":2.5},{"source":"15.2","target":"1.3","value":3.5},{"source":"15.2","target":"1.5","value":5.5},{"source":"15.2","target":"2.2","value":3},{"source":"15.2","target":"2.4","value":11.5},{"source":"15.2","target":"3.4","value":0.5},{"source":"15.2","target":"3.8","value":1.5},{"source":"15.2","target":"4.1","value":5.5},{"source":"15.2","target":"4.4","value":6.5},{"source":"15.2","target":"5.4","value":4},{"source":"15.2","target":"5.5","value":8},{"source":"15.2","target":"6.5","value":14.5},{"source":"15.2","target":"6.6","value":7.5},{"source":"15.2","target":"7.2","value":0},{"source":"15.2","target":"7.3","value":9},{"source":"15.2","target":"8.4","value":16},{"source":"15.2","target":"8.5","value":7},{"source":"15.2","target":"9.4","value":10.5},{"source":"15.2","target":"9.5","value":8.5},{"source":"15.2","target":"10.1","value":2},{"source":"15.2","target":"10.7","value":3.5},{"source":"15.2","target":"11.1","value":3},{"source":"15.2","target":"11.2","value":4},{"source":"15.2","target":"12.1","value":15},{"source":"15.2","target":"12.5","value":14.5},{"source":"15.2","target":"13.1","value":12},{"source":"15.2","target":"13.2","value":8.5},{"source":"15.2","target":"14.1","value":13},{"source":"15.2","target":"14.4","value":13},{"source":"15.2","target":"15.2","value":12.5},{"source":"15.2","target":"15.5","value":7.5},{"source":"15.2","target":"16.4","value":4.5},{"source":"15.2","target":"16.6","value":15},{"source":"15.2","target":"17.11","value":-3.5},{"source":"15.2","target":"17.13","value":4},{"source":"15.5","target":"1.3","value":2},{"source":"15.5","target":"1.5","value":4},{"source":"15.5","target":"2.2","value":7},{"source":"15.5","target":"2.4","value":22},{"source":"15.5","target":"3.4","value":0.5},{"source":"15.5","target":"3.8","value":1.5},{"source":"15.5","target":"4.1","value":4.5},{"source":"15.5","target":"4.4","value":11},{"source":"15.5","target":"5.4","value":2},{"source":"15.5","target":"5.5","value":8},{"source":"15.5","target":"6.5","value":20.5},{"source":"15.5","target":"6.6","value":8},{"source":"15.5","target":"7.2","value":4.5},{"source":"15.5","target":"7.3","value":20.5},{"source":"15.5","target":"8.4","value":22.5},{"source":"15.5","target":"8.5","value":8},{"source":"15.5","target":"9.4","value":14.5},{"source":"15.5","target":"9.5","value":15},{"source":"15.5","target":"10.1","value":1.5},{"source":"15.5","target":"10.7","value":2.5},{"source":"15.5","target":"11.1","value":2},{"source":"15.5","target":"11.2","value":8.5},{"source":"15.5","target":"12.1","value":23.5},{"source":"15.5","target":"12.5","value":16.5},{"source":"15.5","target":"13.1","value":14},{"source":"15.5","target":"13.2","value":10},{"source":"15.5","target":"14.1","value":13},{"source":"15.5","target":"14.4","value":11},{"source":"15.5","target":"15.2","value":9.5},{"source":"15.5","target":"15.5","value":17},{"source":"15.5","target":"16.4","value":7.5},{"source":"15.5","target":"16.6","value":21.5},{"source":"15.5","target":"17.11","value":-8},{"source":"15.5","target":"17.13","value":3},{"source":"16.4","target":"1.3","value":4.5},{"source":"16.4","target":"1.5","value":5},{"source":"16.4","target":"2.2","value":1.5},{"source":"16.4","target":"2.4","value":0},{"source":"16.4","target":"3.4","value":1},{"source":"16.4","target":"3.8","value":2.5},{"source":"16.4","target":"4.1","value":7.5},{"source":"16.4","target":"4.4","value":6.5},{"source":"16.4","target":"5.4","value":5},{"source":"16.4","target":"5.5","value":7.5},{"source":"16.4","target":"6.5","value":2.5},{"source":"16.4","target":"6.6","value":0},{"source":"16.4","target":"7.2","value":0},{"source":"16.4","target":"7.3","value":0.5},{"source":"16.4","target":"8.4","value":4.5},{"source":"16.4","target":"8.5","value":6},{"source":"16.4","target":"9.4","value":2.5},{"source":"16.4","target":"9.5","value":3.5},{"source":"16.4","target":"10.1","value":2},{"source":"16.4","target":"10.7","value":3.5},{"source":"16.4","target":"11.1","value":3.5},{"source":"16.4","target":"11.2","value":2.5},{"source":"16.4","target":"12.1","value":5},{"source":"16.4","target":"12.5","value":3},{"source":"16.4","target":"13.1","value":5.5},{"source":"16.4","target":"13.2","value":1},{"source":"16.4","target":"14.1","value":1},{"source":"16.4","target":"14.4","value":0},{"source":"16.4","target":"15.2","value":-0.5},{"source":"16.4","target":"15.5","value":0.5},{"source":"16.4","target":"16.4","value":7.5},{"source":"16.4","target":"16.6","value":5.5},{"source":"16.4","target":"17.11","value":-0.5},{"source":"16.4","target":"17.13","value":3.5},{"source":"16.6","target":"1.3","value":6.5},{"source":"16.6","target":"1.5","value":7},{"source":"16.6","target":"2.2","value":4.5},{"source":"16.6","target":"2.4","value":3.5},{"source":"16.6","target":"3.4","value":2},{"source":"16.6","target":"3.8","value":3},{"source":"16.6","target":"4.1","value":4.5},{"source":"16.6","target":"4.4","value":8.5},{"source":"16.6","target":"5.4","value":8},{"source":"16.6","target":"5.5","value":8.5},{"source":"16.6","target":"6.5","value":3.5},{"source":"16.6","target":"6.6","value":2.5},{"source":"16.6","target":"7.2","value":2.5},{"source":"16.6","target":"7.3","value":4},{"source":"16.6","target":"8.4","value":7.5},{"source":"16.6","target":"8.5","value":10},{"source":"16.6","target":"9.4","value":5.5},{"source":"16.6","target":"9.5","value":7},{"source":"16.6","target":"10.1","value":3},{"source":"16.6","target":"10.7","value":7},{"source":"16.6","target":"11.1","value":2.5},{"source":"16.6","target":"11.2","value":5.5},{"source":"16.6","target":"12.1","value":6},{"source":"16.6","target":"12.5","value":6},{"source":"16.6","target":"13.1","value":6},{"source":"16.6","target":"13.2","value":3},{"source":"16.6","target":"14.1","value":3},{"source":"16.6","target":"14.4","value":2.5},{"source":"16.6","target":"15.2","value":1.5},{"source":"16.6","target":"15.5","value":2},{"source":"16.6","target":"16.4","value":2.5},{"source":"16.6","target":"16.6","value":15.5},{"source":"16.6","target":"17.11","value":-2.5},{"source":"16.6","target":"17.13","value":2},{"source":"17.11","target":"1.3","value":2},{"source":"17.11","target":"1.5","value":2},{"source":"17.11","target":"2.2","value":-0.5},{"source":"17.11","target":"2.4","value":-2.5},{"source":"17.11","target":"3.4","value":1},{"source":"17.11","target":"3.8","value":2.5},{"source":"17.11","target":"4.1","value":2},{"source":"17.11","target":"4.4","value":1},{"source":"17.11","target":"5.4","value":3},{"source":"17.11","target":"5.5","value":2.5},{"source":"17.11","target":"6.5","value":0},{"source":"17.11","target":"6.6","value":0},{"source":"17.11","target":"7.2","value":1},{"source":"17.11","target":"7.3","value":-4.5},{"source":"17.11","target":"8.4","value":-2.5},{"source":"17.11","target":"8.5","value":1.5},{"source":"17.11","target":"9.4","value":-3},{"source":"17.11","target":"9.5","value":-3.5},{"source":"17.11","target":"10.1","value":1},{"source":"17.11","target":"10.7","value":3},{"source":"17.11","target":"11.1","value":1.5},{"source":"17.11","target":"11.2","value":-2.5},{"source":"17.11","target":"12.1","value":-3},{"source":"17.11","target":"12.5","value":-2.5},{"source":"17.11","target":"13.1","value":4.5},{"source":"17.11","target":"13.2","value":-5.5},{"source":"17.11","target":"14.1","value":-2},{"source":"17.11","target":"14.4","value":-2},{"source":"17.11","target":"15.2","value":1},{"source":"17.11","target":"15.5","value":-2.5},{"source":"17.11","target":"16.4","value":1.5},{"source":"17.11","target":"16.6","value":2},{"source":"17.11","target":"17.11","value":3},{"source":"17.11","target":"17.13","value":0},{"source":"17.13","target":"1.3","value":5},{"source":"17.13","target":"1.5","value":6},{"source":"17.13","target":"2.2","value":6},{"source":"17.13","target":"2.4","value":5},{"source":"17.13","target":"3.4","value":2},{"source":"17.13","target":"3.8","value":5},{"source":"17.13","target":"4.1","value":9},{"source":"17.13","target":"4.4","value":12.5},{"source":"17.13","target":"5.4","value":6},{"source":"17.13","target":"5.5","value":10.5},{"source":"17.13","target":"6.5","value":6},{"source":"17.13","target":"6.6","value":1.5},{"source":"17.13","target":"7.2","value":3.5},{"source":"17.13","target":"7.3","value":8.5},{"source":"17.13","target":"8.4","value":12},{"source":"17.13","target":"8.5","value":10.5},{"source":"17.13","target":"9.4","value":8},{"source":"17.13","target":"9.5","value":9},{"source":"17.13","target":"10.1","value":2},{"source":"17.13","target":"10.7","value":6.5},{"source":"17.13","target":"11.1","value":4.5},{"source":"17.13","target":"11.2","value":6.5},{"source":"17.13","target":"12.1","value":10.5},{"source":"17.13","target":"12.5","value":8.5},{"source":"17.13","target":"13.1","value":8.5},{"source":"17.13","target":"13.2","value":6},{"source":"17.13","target":"14.1","value":5},{"source":"17.13","target":"14.4","value":3.5},{"source":"17.13","target":"15.2","value":0},{"source":"17.13","target":"15.5","value":2.5},{"source":"17.13","target":"16.4","value":7.5},{"source":"17.13","target":"16.6","value":13},{"source":"17.13","target":"17.11","value":-4},{"source":"17.13","target":"17.13","value":5.5}]
connections2orderInfluencing =[{"source":"1.3","target":"1.3","value":16},{"source":"1.3","target":"1.5","value":19.5},{"source":"1.3","target":"2.2","value":9},{"source":"1.3","target":"2.4","value":7.5},{"source":"1.3","target":"3.4","value":11},{"source":"1.3","target":"3.8","value":9.5},{"source":"1.3","target":"4.1","value":7.5},{"source":"1.3","target":"4.4","value":10.5},{"source":"1.3","target":"5.4","value":6.5},{"source":"1.3","target":"5.5","value":9},{"source":"1.3","target":"6.5","value":2.5},{"source":"1.3","target":"6.6","value":2.5},{"source":"1.3","target":"7.2","value":2},{"source":"1.3","target":"7.3","value":3},{"source":"1.3","target":"8.4","value":3},{"source":"1.3","target":"8.5","value":13.5},{"source":"1.3","target":"9.4","value":5.5},{"source":"1.3","target":"9.5","value":3},{"source":"1.3","target":"10.1","value":12},{"source":"1.3","target":"10.7","value":14.5},{"source":"1.3","target":"11.1","value":5.5},{"source":"1.3","target":"11.2","value":7},{"source":"1.3","target":"12.1","value":3.5},{"source":"1.3","target":"12.5","value":1.5},{"source":"1.3","target":"13.1","value":8},{"source":"1.3","target":"13.2","value":4.5},{"source":"1.3","target":"14.1","value":1.5},{"source":"1.3","target":"14.4","value":2},{"source":"1.3","target":"15.2","value":3.5},{"source":"1.3","target":"15.5","value":2},{"source":"1.3","target":"16.4","value":4.5},{"source":"1.3","target":"16.6","value":6.5},{"source":"1.3","target":"17.11","value":2},{"source":"1.3","target":"17.13","value":5},{"source":"1.5","target":"1.3","value":13.5},{"source":"1.5","target":"1.5","value":19.5},{"source":"1.5","target":"2.2","value":8},{"source":"1.5","target":"2.4","value":9.5},{"source":"1.5","target":"3.4","value":11.5},{"source":"1.5","target":"3.8","value":8.5},{"source":"1.5","target":"4.1","value":7},{"source":"1.5","target":"4.4","value":9.5},{"source":"1.5","target":"5.4","value":7.5},{"source":"1.5","target":"5.5","value":8},{"source":"1.5","target":"6.5","value":4.5},{"source":"1.5","target":"6.6","value":4.5},{"source":"1.5","target":"7.2","value":1},{"source":"1.5","target":"7.3","value":3},{"source":"1.5","target":"8.4","value":3},{"source":"1.5","target":"8.5","value":12.5},{"source":"1.5","target":"9.4","value":5.5},{"source":"1.5","target":"9.5","value":3},{"source":"1.5","target":"10.1","value":12},{"source":"1.5","target":"10.7","value":14},{"source":"1.5","target":"11.1","value":6.5},{"source":"1.5","target":"11.2","value":7},{"source":"1.5","target":"12.1","value":4},{"source":"1.5","target":"12.5","value":2},{"source":"1.5","target":"13.1","value":10},{"source":"1.5","target":"13.2","value":5},{"source":"1.5","target":"14.1","value":2.5},{"source":"1.5","target":"14.4","value":3.5},{"source":"1.5","target":"15.2","value":5.5},{"source":"1.5","target":"15.5","value":4},{"source":"1.5","target":"16.4","value":5},{"source":"1.5","target":"16.6","value":7},{"source":"1.5","target":"17.11","value":2},{"source":"1.5","target":"17.13","value":6},{"source":"2.2","target":"1.3","value":3.5},{"source":"2.2","target":"1.5","value":5.5},{"source":"2.2","target":"2.2","value":1.5},{"source":"2.2","target":"2.4","value":5},{"source":"2.2","target":"3.4","value":2},{"source":"2.2","target":"3.8","value":1},{"source":"2.2","target":"4.1","value":2.5},{"source":"2.2","target":"4.4","value":6.5},{"source":"2.2","target":"5.4","value":3.5},{"source":"2.2","target":"5.5","value":4.5},{"source":"2.2","target":"6.5","value":4},{"source":"2.2","target":"6.6","value":2},{"source":"2.2","target":"7.2","value":5},{"source":"2.2","target":"7.3","value":7},{"source":"2.2","target":"8.4","value":6.5},{"source":"2.2","target":"8.5","value":6.5},{"source":"2.2","target":"9.4","value":6.5},{"source":"2.2","target":"9.5","value":4.5},{"source":"2.2","target":"10.1","value":7.5},{"source":"2.2","target":"10.7","value":2},{"source":"2.2","target":"11.1","value":4.5},{"source":"2.2","target":"11.2","value":7},{"source":"2.2","target":"12.1","value":6},{"source":"2.2","target":"12.5","value":5.5},{"source":"2.2","target":"13.1","value":5.5},{"source":"2.2","target":"13.2","value":5},{"source":"2.2","target":"14.1","value":7},{"source":"2.2","target":"14.4","value":2},{"source":"2.2","target":"15.2","value":3},{"source":"2.2","target":"15.5","value":7},{"source":"2.2","target":"16.4","value":1.5},{"source":"2.2","target":"16.6","value":4.5},{"source":"2.2","target":"17.11","value":-0.5},{"source":"2.2","target":"17.13","value":6},{"source":"2.4","target":"1.3","value":3.5},{"source":"2.4","target":"1.5","value":11.5},{"source":"2.4","target":"2.2","value":4.5},{"source":"2.4","target":"2.4","value":20.5},{"source":"2.4","target":"3.4","value":0},{"source":"2.4","target":"3.8","value":2},{"source":"2.4","target":"4.1","value":1.5},{"source":"2.4","target":"4.4","value":5.5},{"source":"2.4","target":"5.4","value":1.5},{"source":"2.4","target":"5.5","value":2},{"source":"2.4","target":"6.5","value":15},{"source":"2.4","target":"6.6","value":21},{"source":"2.4","target":"7.2","value":-1.5},{"source":"2.4","target":"7.3","value":6.5},{"source":"2.4","target":"8.4","value":9.5},{"source":"2.4","target":"8.5","value":5},{"source":"2.4","target":"9.4","value":3},{"source":"2.4","target":"9.5","value":3.5},{"source":"2.4","target":"10.1","value":4},{"source":"2.4","target":"10.7","value":2},{"source":"2.4","target":"11.1","value":4},{"source":"2.4","target":"11.2","value":5.5},{"source":"2.4","target":"12.1","value":14},{"source":"2.4","target":"12.5","value":9},{"source":"2.4","target":"13.1","value":12.5},{"source":"2.4","target":"13.2","value":12.5},{"source":"2.4","target":"14.1","value":11},{"source":"2.4","target":"14.4","value":6},{"source":"2.4","target":"15.2","value":11.5},{"source":"2.4","target":"15.5","value":22},{"source":"2.4","target":"16.4","value":0},{"source":"2.4","target":"16.6","value":3.5},{"source":"2.4","target":"17.11","value":-2.5},{"source":"2.4","target":"17.13","value":5},{"source":"3.4","target":"1.3","value":3.5},{"source":"3.4","target":"1.5","value":2.5},{"source":"3.4","target":"2.2","value":2.5},{"source":"3.4","target":"2.4","value":1},{"source":"3.4","target":"3.4","value":2.5},{"source":"3.4","target":"3.8","value":2.5},{"source":"3.4","target":"4.1","value":2.5},{"source":"3.4","target":"4.4","value":3},{"source":"3.4","target":"5.4","value":2.5},{"source":"3.4","target":"5.5","value":2},{"source":"3.4","target":"6.5","value":0.5},{"source":"3.4","target":"6.6","value":0.5},{"source":"3.4","target":"7.2","value":0},{"source":"3.4","target":"7.3","value":0},{"source":"3.4","target":"8.4","value":0.5},{"source":"3.4","target":"8.5","value":1.5},{"source":"3.4","target":"9.4","value":0.5},{"source":"3.4","target":"9.5","value":0.5},{"source":"3.4","target":"10.1","value":2.5},{"source":"3.4","target":"10.7","value":2},{"source":"3.4","target":"11.1","value":2.5},{"source":"3.4","target":"11.2","value":2},{"source":"3.4","target":"12.1","value":0.5},{"source":"3.4","target":"12.5","value":1},{"source":"3.4","target":"13.1","value":2.5},{"source":"3.4","target":"13.2","value":0},{"source":"3.4","target":"14.1","value":0},{"source":"3.4","target":"14.4","value":0},{"source":"3.4","target":"15.2","value":0.5},{"source":"3.4","target":"15.5","value":0.5},{"source":"3.4","target":"16.4","value":1},{"source":"3.4","target":"16.6","value":2},{"source":"3.4","target":"17.11","value":1},{"source":"3.4","target":"17.13","value":2},{"source":"3.8","target":"1.3","value":4.5},{"source":"3.8","target":"1.5","value":7.5},{"source":"3.8","target":"2.2","value":4},{"source":"3.8","target":"2.4","value":1.5},{"source":"3.8","target":"3.4","value":5},{"source":"3.8","target":"3.8","value":4.5},{"source":"3.8","target":"4.1","value":3},{"source":"3.8","target":"4.4","value":6.5},{"source":"3.8","target":"5.4","value":4.5},{"source":"3.8","target":"5.5","value":5.5},{"source":"3.8","target":"6.5","value":1},{"source":"3.8","target":"6.6","value":2.5},{"source":"3.8","target":"7.2","value":-1},{"source":"3.8","target":"7.3","value":-0.5},{"source":"3.8","target":"8.4","value":1.5},{"source":"3.8","target":"8.5","value":4},{"source":"3.8","target":"9.4","value":0},{"source":"3.8","target":"9.5","value":1},{"source":"3.8","target":"10.1","value":7.5},{"source":"3.8","target":"10.7","value":4.5},{"source":"3.8","target":"11.1","value":6},{"source":"3.8","target":"11.2","value":4},{"source":"3.8","target":"12.1","value":1.5},{"source":"3.8","target":"12.5","value":0.5},{"source":"3.8","target":"13.1","value":3.5},{"source":"3.8","target":"13.2","value":2.5},{"source":"3.8","target":"14.1","value":0},{"source":"3.8","target":"14.4","value":0},{"source":"3.8","target":"15.2","value":1.5},{"source":"3.8","target":"15.5","value":1.5},{"source":"3.8","target":"16.4","value":2.5},{"source":"3.8","target":"16.6","value":3},{"source":"3.8","target":"17.11","value":2.5},{"source":"3.8","target":"17.13","value":5},{"source":"4.1","target":"1.3","value":13},{"source":"4.1","target":"1.5","value":13.5},{"source":"4.1","target":"2.2","value":6.5},{"source":"4.1","target":"2.4","value":4.5},{"source":"4.1","target":"3.4","value":7.5},{"source":"4.1","target":"3.8","value":7.5},{"source":"4.1","target":"4.1","value":6},{"source":"4.1","target":"4.4","value":8.5},{"source":"4.1","target":"5.4","value":6.5},{"source":"4.1","target":"5.5","value":10},{"source":"4.1","target":"6.5","value":3},{"source":"4.1","target":"6.6","value":2.5},{"source":"4.1","target":"7.2","value":3},{"source":"4.1","target":"7.3","value":3.5},{"source":"4.1","target":"8.4","value":5},{"source":"4.1","target":"8.5","value":9},{"source":"4.1","target":"9.4","value":7},{"source":"4.1","target":"9.5","value":5},{"source":"4.1","target":"10.1","value":12.5},{"source":"4.1","target":"10.7","value":8.5},{"source":"4.1","target":"11.1","value":8},{"source":"4.1","target":"11.2","value":6},{"source":"4.1","target":"12.1","value":4},{"source":"4.1","target":"12.5","value":4.5},{"source":"4.1","target":"13.1","value":9.5},{"source":"4.1","target":"13.2","value":6.5},{"source":"4.1","target":"14.1","value":3.5},{"source":"4.1","target":"14.4","value":4},{"source":"4.1","target":"15.2","value":5.5},{"source":"4.1","target":"15.5","value":4.5},{"source":"4.1","target":"16.4","value":7.5},{"source":"4.1","target":"16.6","value":4.5},{"source":"4.1","target":"17.11","value":2},{"source":"4.1","target":"17.13","value":9},{"source":"4.4","target":"1.3","value":13},{"source":"4.4","target":"1.5","value":17.5},{"source":"4.4","target":"2.2","value":8},{"source":"4.4","target":"2.4","value":10.5},{"source":"4.4","target":"3.4","value":10},{"source":"4.4","target":"3.8","value":8},{"source":"4.4","target":"4.1","value":7.5},{"source":"4.4","target":"4.4","value":15},{"source":"4.4","target":"5.4","value":10},{"source":"4.4","target":"5.5","value":10},{"source":"4.4","target":"6.5","value":7},{"source":"4.4","target":"6.6","value":6},{"source":"4.4","target":"7.2","value":1.5},{"source":"4.4","target":"7.3","value":7},{"source":"4.4","target":"8.4","value":12},{"source":"4.4","target":"8.5","value":11.5},{"source":"4.4","target":"9.4","value":10.5},{"source":"4.4","target":"9.5","value":9.5},{"source":"4.4","target":"10.1","value":16.5},{"source":"4.4","target":"10.7","value":11.5},{"source":"4.4","target":"11.1","value":12.5},{"source":"4.4","target":"11.2","value":12},{"source":"4.4","target":"12.1","value":14},{"source":"4.4","target":"12.5","value":8},{"source":"4.4","target":"13.1","value":15},{"source":"4.4","target":"13.2","value":13},{"source":"4.4","target":"14.1","value":7.5},{"source":"4.4","target":"14.4","value":3.5},{"source":"4.4","target":"15.2","value":6.5},{"source":"4.4","target":"15.5","value":11},{"source":"4.4","target":"16.4","value":6.5},{"source":"4.4","target":"16.6","value":8.5},{"source":"4.4","target":"17.11","value":1},{"source":"4.4","target":"17.13","value":12.5},{"source":"5.4","target":"1.3","value":12.5},{"source":"5.4","target":"1.5","value":20},{"source":"5.4","target":"2.2","value":7},{"source":"5.4","target":"2.4","value":4},{"source":"5.4","target":"3.4","value":15.5},{"source":"5.4","target":"3.8","value":9.5},{"source":"5.4","target":"4.1","value":8},{"source":"5.4","target":"4.4","value":12},{"source":"5.4","target":"5.4","value":6.5},{"source":"5.4","target":"5.5","value":8.5},{"source":"5.4","target":"6.5","value":2.5},{"source":"5.4","target":"6.6","value":3},{"source":"5.4","target":"7.2","value":0},{"source":"5.4","target":"7.3","value":0.5},{"source":"5.4","target":"8.4","value":6},{"source":"5.4","target":"8.5","value":13.5},{"source":"5.4","target":"9.4","value":4},{"source":"5.4","target":"9.5","value":4},{"source":"5.4","target":"10.1","value":17},{"source":"5.4","target":"10.7","value":7},{"source":"5.4","target":"11.1","value":9.5},{"source":"5.4","target":"11.2","value":7},{"source":"5.4","target":"12.1","value":5.5},{"source":"5.4","target":"12.5","value":3.5},{"source":"5.4","target":"13.1","value":9.5},{"source":"5.4","target":"13.2","value":6.5},{"source":"5.4","target":"14.1","value":1},{"source":"5.4","target":"14.4","value":3},{"source":"5.4","target":"15.2","value":4},{"source":"5.4","target":"15.5","value":2},{"source":"5.4","target":"16.4","value":5},{"source":"5.4","target":"16.6","value":8},{"source":"5.4","target":"17.11","value":3},{"source":"5.4","target":"17.13","value":6},{"source":"5.5","target":"1.3","value":18.5},{"source":"5.5","target":"1.5","value":24.5},{"source":"5.5","target":"2.2","value":10.5},{"source":"5.5","target":"2.4","value":8},{"source":"5.5","target":"3.4","value":17},{"source":"5.5","target":"3.8","value":12},{"source":"5.5","target":"4.1","value":8.5},{"source":"5.5","target":"4.4","value":17.5},{"source":"5.5","target":"5.4","value":8},{"source":"5.5","target":"5.5","value":12},{"source":"5.5","target":"6.5","value":6.5},{"source":"5.5","target":"6.6","value":8.5},{"source":"5.5","target":"7.2","value":-2},{"source":"5.5","target":"7.3","value":2},{"source":"5.5","target":"8.4","value":7},{"source":"5.5","target":"8.5","value":15.5},{"source":"5.5","target":"9.4","value":6.5},{"source":"5.5","target":"9.5","value":6.5},{"source":"5.5","target":"10.1","value":21.5},{"source":"5.5","target":"10.7","value":13.5},{"source":"5.5","target":"11.1","value":6.5},{"source":"5.5","target":"11.2","value":7.5},{"source":"5.5","target":"12.1","value":10.5},{"source":"5.5","target":"12.5","value":4},{"source":"5.5","target":"13.1","value":13},{"source":"5.5","target":"13.2","value":10},{"source":"5.5","target":"14.1","value":6.5},{"source":"5.5","target":"14.4","value":6.5},{"source":"5.5","target":"15.2","value":8},{"source":"5.5","target":"15.5","value":8},{"source":"5.5","target":"16.4","value":7.5},{"source":"5.5","target":"16.6","value":8.5},{"source":"5.5","target":"17.11","value":2.5},{"source":"5.5","target":"17.13","value":10.5},{"source":"6.5","target":"1.3","value":6},{"source":"6.5","target":"1.5","value":8},{"source":"6.5","target":"2.2","value":5},{"source":"6.5","target":"2.4","value":18.5},{"source":"6.5","target":"3.4","value":2},{"source":"6.5","target":"3.8","value":3.5},{"source":"6.5","target":"4.1","value":2},{"source":"6.5","target":"4.4","value":5.5},{"source":"6.5","target":"5.4","value":3},{"source":"6.5","target":"5.5","value":4},{"source":"6.5","target":"6.5","value":17},{"source":"6.5","target":"6.6","value":18.5},{"source":"6.5","target":"7.2","value":-0.5},{"source":"6.5","target":"7.3","value":5},{"source":"6.5","target":"8.4","value":7},{"source":"6.5","target":"8.5","value":4.5},{"source":"6.5","target":"9.4","value":3.5},{"source":"6.5","target":"9.5","value":6},{"source":"6.5","target":"10.1","value":4.5},{"source":"6.5","target":"10.7","value":3.5},{"source":"6.5","target":"11.1","value":4},{"source":"6.5","target":"11.2","value":3.5},{"source":"6.5","target":"12.1","value":13},{"source":"6.5","target":"12.5","value":8.5},{"source":"6.5","target":"13.1","value":11.5},{"source":"6.5","target":"13.2","value":8.5},{"source":"6.5","target":"14.1","value":9.5},{"source":"6.5","target":"14.4","value":8},{"source":"6.5","target":"15.2","value":14.5},{"source":"6.5","target":"15.5","value":20.5},{"source":"6.5","target":"16.4","value":2.5},{"source":"6.5","target":"16.6","value":3.5},{"source":"6.5","target":"17.11","value":0},{"source":"6.5","target":"17.13","value":6},{"source":"6.6","target":"1.3","value":4},{"source":"6.6","target":"1.5","value":6},{"source":"6.6","target":"2.2","value":2.5},{"source":"6.6","target":"2.4","value":8.5},{"source":"6.6","target":"3.4","value":1},{"source":"6.6","target":"3.8","value":2.5},{"source":"6.6","target":"4.1","value":0.5},{"source":"6.6","target":"4.4","value":2},{"source":"6.6","target":"5.4","value":0.5},{"source":"6.6","target":"5.5","value":1.5},{"source":"6.6","target":"6.5","value":5.5},{"source":"6.6","target":"6.6","value":13.5},{"source":"6.6","target":"7.2","value":-4.5},{"source":"6.6","target":"7.3","value":-0.5},{"source":"6.6","target":"8.4","value":0.5},{"source":"6.6","target":"8.5","value":1},{"source":"6.6","target":"9.4","value":-0.5},{"source":"6.6","target":"9.5","value":1},{"source":"6.6","target":"10.1","value":1},{"source":"6.6","target":"10.7","value":2.5},{"source":"6.6","target":"11.1","value":0.5},{"source":"6.6","target":"11.2","value":1},{"source":"6.6","target":"12.1","value":2.5},{"source":"6.6","target":"12.5","value":2.5},{"source":"6.6","target":"13.1","value":6},{"source":"6.6","target":"13.2","value":3.5},{"source":"6.6","target":"14.1","value":6},{"source":"6.6","target":"14.4","value":6.5},{"source":"6.6","target":"15.2","value":7.5},{"source":"6.6","target":"15.5","value":8},{"source":"6.6","target":"16.4","value":0},{"source":"6.6","target":"16.6","value":2.5},{"source":"6.6","target":"17.11","value":0},{"source":"6.6","target":"17.13","value":1.5},{"source":"7.2","target":"1.3","value":2.5},{"source":"7.2","target":"1.5","value":8.5},{"source":"7.2","target":"2.2","value":0},{"source":"7.2","target":"2.4","value":4},{"source":"7.2","target":"3.4","value":2},{"source":"7.2","target":"3.8","value":1},{"source":"7.2","target":"4.1","value":3},{"source":"7.2","target":"4.4","value":7.5},{"source":"7.2","target":"5.4","value":4},{"source":"7.2","target":"5.5","value":4.5},{"source":"7.2","target":"6.5","value":3.5},{"source":"7.2","target":"6.6","value":-2},{"source":"7.2","target":"7.2","value":9.5},{"source":"7.2","target":"7.3","value":13.5},{"source":"7.2","target":"8.4","value":10},{"source":"7.2","target":"8.5","value":7.5},{"source":"7.2","target":"9.4","value":8},{"source":"7.2","target":"9.5","value":7.5},{"source":"7.2","target":"10.1","value":6},{"source":"7.2","target":"10.7","value":6},{"source":"7.2","target":"11.1","value":7},{"source":"7.2","target":"11.2","value":9},{"source":"7.2","target":"12.1","value":11},{"source":"7.2","target":"12.5","value":6.5},{"source":"7.2","target":"13.1","value":6},{"source":"7.2","target":"13.2","value":9},{"source":"7.2","target":"14.1","value":6.5},{"source":"7.2","target":"14.4","value":1},{"source":"7.2","target":"15.2","value":0},{"source":"7.2","target":"15.5","value":4.5},{"source":"7.2","target":"16.4","value":0},{"source":"7.2","target":"16.6","value":2.5},{"source":"7.2","target":"17.11","value":1},{"source":"7.2","target":"17.13","value":3.5},{"source":"7.3","target":"1.3","value":1.5},{"source":"7.3","target":"1.5","value":10},{"source":"7.3","target":"2.2","value":0},{"source":"7.3","target":"2.4","value":11.5},{"source":"7.3","target":"3.4","value":2},{"source":"7.3","target":"3.8","value":-1.5},{"source":"7.3","target":"4.1","value":3.5},{"source":"7.3","target":"4.4","value":9},{"source":"7.3","target":"5.4","value":5},{"source":"7.3","target":"5.5","value":2.5},{"source":"7.3","target":"6.5","value":12},{"source":"7.3","target":"6.6","value":6.5},{"source":"7.3","target":"7.2","value":12},{"source":"7.3","target":"7.3","value":22},{"source":"7.3","target":"8.4","value":19},{"source":"7.3","target":"8.5","value":9},{"source":"7.3","target":"9.4","value":14.5},{"source":"7.3","target":"9.5","value":9},{"source":"7.3","target":"10.1","value":7.5},{"source":"7.3","target":"10.7","value":2},{"source":"7.3","target":"11.1","value":7},{"source":"7.3","target":"11.2","value":11.5},{"source":"7.3","target":"12.1","value":20},{"source":"7.3","target":"12.5","value":12.5},{"source":"7.3","target":"13.1","value":14.5},{"source":"7.3","target":"13.2","value":19},{"source":"7.3","target":"14.1","value":17.5},{"source":"7.3","target":"14.4","value":5},{"source":"7.3","target":"15.2","value":9},{"source":"7.3","target":"15.5","value":20.5},{"source":"7.3","target":"16.4","value":0.5},{"source":"7.3","target":"16.6","value":4},{"source":"7.3","target":"17.11","value":-4.5},{"source":"7.3","target":"17.13","value":8.5},{"source":"8.4","target":"1.3","value":13},{"source":"8.4","target":"1.5","value":21.5},{"source":"8.4","target":"2.2","value":7},{"source":"8.4","target":"2.4","value":22.5},{"source":"8.4","target":"3.4","value":10},{"source":"8.4","target":"3.8","value":6},{"source":"8.4","target":"4.1","value":7.5},{"source":"8.4","target":"4.4","value":14.5},{"source":"8.4","target":"5.4","value":7.5},{"source":"8.4","target":"5.5","value":7},{"source":"8.4","target":"6.5","value":15},{"source":"8.4","target":"6.6","value":15.5},{"source":"8.4","target":"7.2","value":6},{"source":"8.4","target":"7.3","value":15.5},{"source":"8.4","target":"8.4","value":25.5},{"source":"8.4","target":"8.5","value":13.5},{"source":"8.4","target":"9.4","value":21},{"source":"8.4","target":"9.5","value":12.5},{"source":"8.4","target":"10.1","value":15},{"source":"8.4","target":"10.7","value":10.5},{"source":"8.4","target":"11.1","value":8.5},{"source":"8.4","target":"11.2","value":15.5},{"source":"8.4","target":"12.1","value":24},{"source":"8.4","target":"12.5","value":18.5},{"source":"8.4","target":"13.1","value":22.5},{"source":"8.4","target":"13.2","value":24},{"source":"8.4","target":"14.1","value":18},{"source":"8.4","target":"14.4","value":11.5},{"source":"8.4","target":"15.2","value":16},{"source":"8.4","target":"15.5","value":22.5},{"source":"8.4","target":"16.4","value":4.5},{"source":"8.4","target":"16.6","value":7.5},{"source":"8.4","target":"17.11","value":-2.5},{"source":"8.4","target":"17.13","value":12},{"source":"8.5","target":"1.3","value":16},{"source":"8.5","target":"1.5","value":19.5},{"source":"8.5","target":"2.2","value":10},{"source":"8.5","target":"2.4","value":11},{"source":"8.5","target":"3.4","value":13},{"source":"8.5","target":"3.8","value":10},{"source":"8.5","target":"4.1","value":10},{"source":"8.5","target":"4.4","value":14},{"source":"8.5","target":"5.4","value":10},{"source":"8.5","target":"5.5","value":8.5},{"source":"8.5","target":"6.5","value":6.5},{"source":"8.5","target":"6.6","value":4.5},{"source":"8.5","target":"7.2","value":5},{"source":"8.5","target":"7.3","value":7.5},{"source":"8.5","target":"8.4","value":7},{"source":"8.5","target":"8.5","value":17},{"source":"8.5","target":"9.4","value":8},{"source":"8.5","target":"9.5","value":5},{"source":"8.5","target":"10.1","value":16},{"source":"8.5","target":"10.7","value":13.5},{"source":"8.5","target":"11.1","value":11.5},{"source":"8.5","target":"11.2","value":10.5},{"source":"8.5","target":"12.1","value":8},{"source":"8.5","target":"12.5","value":5},{"source":"8.5","target":"13.1","value":12},{"source":"8.5","target":"13.2","value":11},{"source":"8.5","target":"14.1","value":6},{"source":"8.5","target":"14.4","value":3},{"source":"8.5","target":"15.2","value":7},{"source":"8.5","target":"15.5","value":8},{"source":"8.5","target":"16.4","value":6},{"source":"8.5","target":"16.6","value":10},{"source":"8.5","target":"17.11","value":1.5},{"source":"8.5","target":"17.13","value":10.5},{"source":"9.4","target":"1.3","value":6.5},{"source":"9.4","target":"1.5","value":13.5},{"source":"9.4","target":"2.2","value":2.5},{"source":"9.4","target":"2.4","value":17},{"source":"9.4","target":"3.4","value":3},{"source":"9.4","target":"3.8","value":2.5},{"source":"9.4","target":"4.1","value":4},{"source":"9.4","target":"4.4","value":8.5},{"source":"9.4","target":"5.4","value":4.5},{"source":"9.4","target":"5.5","value":5},{"source":"9.4","target":"6.5","value":10.5},{"source":"9.4","target":"6.6","value":11},{"source":"9.4","target":"7.2","value":5},{"source":"9.4","target":"7.3","value":12.5},{"source":"9.4","target":"8.4","value":17.5},{"source":"9.4","target":"8.5","value":9},{"source":"9.4","target":"9.4","value":18},{"source":"9.4","target":"9.5","value":10.5},{"source":"9.4","target":"10.1","value":9},{"source":"9.4","target":"10.7","value":6.5},{"source":"9.4","target":"11.1","value":8.5},{"source":"9.4","target":"11.2","value":14},{"source":"9.4","target":"12.1","value":17},{"source":"9.4","target":"12.5","value":14.5},{"source":"9.4","target":"13.1","value":13},{"source":"9.4","target":"13.2","value":18},{"source":"9.4","target":"14.1","value":14},{"source":"9.4","target":"14.4","value":8},{"source":"9.4","target":"15.2","value":10.5},{"source":"9.4","target":"15.5","value":14.5},{"source":"9.4","target":"16.4","value":2.5},{"source":"9.4","target":"16.6","value":5.5},{"source":"9.4","target":"17.11","value":-3},{"source":"9.4","target":"17.13","value":8},{"source":"9.5","target":"1.3","value":8},{"source":"9.5","target":"1.5","value":16},{"source":"9.5","target":"2.2","value":2.5},{"source":"9.5","target":"2.4","value":16},{"source":"9.5","target":"3.4","value":4.5},{"source":"9.5","target":"3.8","value":3},{"source":"9.5","target":"4.1","value":4},{"source":"9.5","target":"4.4","value":9.5},{"source":"9.5","target":"5.4","value":5.5},{"source":"9.5","target":"5.5","value":5.5},{"source":"9.5","target":"6.5","value":8.5},{"source":"9.5","target":"6.6","value":8.5},{"source":"9.5","target":"7.2","value":7},{"source":"9.5","target":"7.3","value":14.5},{"source":"9.5","target":"8.4","value":18},{"source":"9.5","target":"8.5","value":12},{"source":"9.5","target":"9.4","value":17.5},{"source":"9.5","target":"9.5","value":11},{"source":"9.5","target":"10.1","value":11.5},{"source":"9.5","target":"10.7","value":8.5},{"source":"9.5","target":"11.1","value":8.5},{"source":"9.5","target":"11.2","value":14},{"source":"9.5","target":"12.1","value":18},{"source":"9.5","target":"12.5","value":12.5},{"source":"9.5","target":"13.1","value":13.5},{"source":"9.5","target":"13.2","value":20},{"source":"9.5","target":"14.1","value":12.5},{"source":"9.5","target":"14.4","value":5.5},{"source":"9.5","target":"15.2","value":8.5},{"source":"9.5","target":"15.5","value":15},{"source":"9.5","target":"16.4","value":3.5},{"source":"9.5","target":"16.6","value":7},{"source":"9.5","target":"17.11","value":-3.5},{"source":"9.5","target":"17.13","value":9},{"source":"10.1","target":"1.3","value":10.5},{"source":"10.1","target":"1.5","value":8.5},{"source":"10.1","target":"2.2","value":4.5},{"source":"10.1","target":"2.4","value":3.5},{"source":"10.1","target":"3.4","value":8},{"source":"10.1","target":"3.8","value":5},{"source":"10.1","target":"4.1","value":5.5},{"source":"10.1","target":"4.4","value":5.5},{"source":"10.1","target":"5.4","value":2.5},{"source":"10.1","target":"5.5","value":3},{"source":"10.1","target":"6.5","value":1.5},{"source":"10.1","target":"6.6","value":2.5},{"source":"10.1","target":"7.2","value":0},{"source":"10.1","target":"7.3","value":1.5},{"source":"10.1","target":"8.4","value":2.5},{"source":"10.1","target":"8.5","value":7},{"source":"10.1","target":"9.4","value":2},{"source":"10.1","target":"9.5","value":1},{"source":"10.1","target":"10.1","value":7.5},{"source":"10.1","target":"10.7","value":5.5},{"source":"10.1","target":"11.1","value":4},{"source":"10.1","target":"11.2","value":3.5},{"source":"10.1","target":"12.1","value":2},{"source":"10.1","target":"12.5","value":1},{"source":"10.1","target":"13.1","value":5},{"source":"10.1","target":"13.2","value":4},{"source":"10.1","target":"14.1","value":0},{"source":"10.1","target":"14.4","value":0.5},{"source":"10.1","target":"15.2","value":2},{"source":"10.1","target":"15.5","value":1.5},{"source":"10.1","target":"16.4","value":2},{"source":"10.1","target":"16.6","value":3},{"source":"10.1","target":"17.11","value":1},{"source":"10.1","target":"17.13","value":2},{"source":"10.7","target":"1.3","value":10.5},{"source":"10.7","target":"1.5","value":10.5},{"source":"10.7","target":"2.2","value":5.5},{"source":"10.7","target":"2.4","value":4},{"source":"10.7","target":"3.4","value":6.5},{"source":"10.7","target":"3.8","value":6.5},{"source":"10.7","target":"4.1","value":3.5},{"source":"10.7","target":"4.4","value":9},{"source":"10.7","target":"5.4","value":6},{"source":"10.7","target":"5.5","value":6.5},{"source":"10.7","target":"6.5","value":2},{"source":"10.7","target":"6.6","value":4.5},{"source":"10.7","target":"7.2","value":-1.5},{"source":"10.7","target":"7.3","value":0},{"source":"10.7","target":"8.4","value":1},{"source":"10.7","target":"8.5","value":8.5},{"source":"10.7","target":"9.4","value":1},{"source":"10.7","target":"9.5","value":2},{"source":"10.7","target":"10.1","value":11.5},{"source":"10.7","target":"10.7","value":9.5},{"source":"10.7","target":"11.1","value":8},{"source":"10.7","target":"11.2","value":6.5},{"source":"10.7","target":"12.1","value":1},{"source":"10.7","target":"12.5","value":1},{"source":"10.7","target":"13.1","value":5},{"source":"10.7","target":"13.2","value":3},{"source":"10.7","target":"14.1","value":0.5},{"source":"10.7","target":"14.4","value":1},{"source":"10.7","target":"15.2","value":3.5},{"source":"10.7","target":"15.5","value":2.5},{"source":"10.7","target":"16.4","value":3.5},{"source":"10.7","target":"16.6","value":7},{"source":"10.7","target":"17.11","value":3},{"source":"10.7","target":"17.13","value":6.5},{"source":"11.1","target":"1.3","value":10.5},{"source":"11.1","target":"1.5","value":10},{"source":"11.1","target":"2.2","value":5},{"source":"11.1","target":"2.4","value":2.5},{"source":"11.1","target":"3.4","value":6},{"source":"11.1","target":"3.8","value":6},{"source":"11.1","target":"4.1","value":5.5},{"source":"11.1","target":"4.4","value":9},{"source":"11.1","target":"5.4","value":2.5},{"source":"11.1","target":"5.5","value":5},{"source":"11.1","target":"6.5","value":1.5},{"source":"11.1","target":"6.6","value":3},{"source":"11.1","target":"7.2","value":-1},{"source":"11.1","target":"7.3","value":1},{"source":"11.1","target":"8.4","value":3.5},{"source":"11.1","target":"8.5","value":5.5},{"source":"11.1","target":"9.4","value":2.5},{"source":"11.1","target":"9.5","value":2.5},{"source":"11.1","target":"10.1","value":10},{"source":"11.1","target":"10.7","value":4.5},{"source":"11.1","target":"11.1","value":7.5},{"source":"11.1","target":"11.2","value":3.5},{"source":"11.1","target":"12.1","value":4},{"source":"11.1","target":"12.5","value":2},{"source":"11.1","target":"13.1","value":6},{"source":"11.1","target":"13.2","value":7.5},{"source":"11.1","target":"14.1","value":-0.5},{"source":"11.1","target":"14.4","value":0},{"source":"11.1","target":"15.2","value":3},{"source":"11.1","target":"15.5","value":2},{"source":"11.1","target":"16.4","value":3.5},{"source":"11.1","target":"16.6","value":2.5},{"source":"11.1","target":"17.11","value":1.5},{"source":"11.1","target":"17.13","value":4.5},{"source":"11.2","target":"1.3","value":5},{"source":"11.2","target":"1.5","value":10},{"source":"11.2","target":"2.2","value":1.5},{"source":"11.2","target":"2.4","value":9.5},{"source":"11.2","target":"3.4","value":5},{"source":"11.2","target":"3.8","value":2.5},{"source":"11.2","target":"4.1","value":4.5},{"source":"11.2","target":"4.4","value":8},{"source":"11.2","target":"5.4","value":5.5},{"source":"11.2","target":"5.5","value":3.5},{"source":"11.2","target":"6.5","value":5},{"source":"11.2","target":"6.6","value":0},{"source":"11.2","target":"7.2","value":6.5},{"source":"11.2","target":"7.3","value":11},{"source":"11.2","target":"8.4","value":14},{"source":"11.2","target":"8.5","value":10.5},{"source":"11.2","target":"9.4","value":13},{"source":"11.2","target":"9.5","value":10},{"source":"11.2","target":"10.1","value":10},{"source":"11.2","target":"10.7","value":4.5},{"source":"11.2","target":"11.1","value":8},{"source":"11.2","target":"11.2","value":13},{"source":"11.2","target":"12.1","value":11.5},{"source":"11.2","target":"12.5","value":10.5},{"source":"11.2","target":"13.1","value":11.5},{"source":"11.2","target":"13.2","value":12.5},{"source":"11.2","target":"14.1","value":9},{"source":"11.2","target":"14.4","value":2.5},{"source":"11.2","target":"15.2","value":4},{"source":"11.2","target":"15.5","value":8.5},{"source":"11.2","target":"16.4","value":2.5},{"source":"11.2","target":"16.6","value":5.5},{"source":"11.2","target":"17.11","value":-2.5},{"source":"11.2","target":"17.13","value":6.5},{"source":"12.1","target":"1.3","value":9},{"source":"12.1","target":"1.5","value":21},{"source":"12.1","target":"2.2","value":6},{"source":"12.1","target":"2.4","value":28},{"source":"12.1","target":"3.4","value":8},{"source":"12.1","target":"3.8","value":5},{"source":"12.1","target":"4.1","value":7},{"source":"12.1","target":"4.4","value":12},{"source":"12.1","target":"5.4","value":6.5},{"source":"12.1","target":"5.5","value":8.5},{"source":"12.1","target":"6.5","value":16.5},{"source":"12.1","target":"6.6","value":19.5},{"source":"12.1","target":"7.2","value":4.5},{"source":"12.1","target":"7.3","value":15},{"source":"12.1","target":"8.4","value":22},{"source":"12.1","target":"8.5","value":14},{"source":"12.1","target":"9.4","value":21.5},{"source":"12.1","target":"9.5","value":15.5},{"source":"12.1","target":"10.1","value":15},{"source":"12.1","target":"10.7","value":9.5},{"source":"12.1","target":"11.1","value":9.5},{"source":"12.1","target":"11.2","value":14},{"source":"12.1","target":"12.1","value":29},{"source":"12.1","target":"12.5","value":18.5},{"source":"12.1","target":"13.1","value":21.5},{"source":"12.1","target":"13.2","value":25.5},{"source":"12.1","target":"14.1","value":18},{"source":"12.1","target":"14.4","value":13},{"source":"12.1","target":"15.2","value":15},{"source":"12.1","target":"15.5","value":23.5},{"source":"12.1","target":"16.4","value":5},{"source":"12.1","target":"16.6","value":6},{"source":"12.1","target":"17.11","value":-3},{"source":"12.1","target":"17.13","value":10.5},{"source":"12.5","target":"1.3","value":8.5},{"source":"12.5","target":"1.5","value":13.5},{"source":"12.5","target":"2.2","value":7},{"source":"12.5","target":"2.4","value":22},{"source":"12.5","target":"3.4","value":3.5},{"source":"12.5","target":"3.8","value":4},{"source":"12.5","target":"4.1","value":4},{"source":"12.5","target":"4.4","value":8},{"source":"12.5","target":"5.4","value":6},{"source":"12.5","target":"5.5","value":6.5},{"source":"12.5","target":"6.5","value":13},{"source":"12.5","target":"6.6","value":13},{"source":"12.5","target":"7.2","value":5.5},{"source":"12.5","target":"7.3","value":10},{"source":"12.5","target":"8.4","value":15},{"source":"12.5","target":"8.5","value":11},{"source":"12.5","target":"9.4","value":15.5},{"source":"12.5","target":"9.5","value":12},{"source":"12.5","target":"10.1","value":10},{"source":"12.5","target":"10.7","value":7},{"source":"12.5","target":"11.1","value":7},{"source":"12.5","target":"11.2","value":11.5},{"source":"12.5","target":"12.1","value":15.5},{"source":"12.5","target":"12.5","value":16.5},{"source":"12.5","target":"13.1","value":16.5},{"source":"12.5","target":"13.2","value":17},{"source":"12.5","target":"14.1","value":15},{"source":"12.5","target":"14.4","value":12},{"source":"12.5","target":"15.2","value":14.5},{"source":"12.5","target":"15.5","value":16.5},{"source":"12.5","target":"16.4","value":3},{"source":"12.5","target":"16.6","value":6},{"source":"12.5","target":"17.11","value":-2.5},{"source":"12.5","target":"17.13","value":8.5},{"source":"13.1","target":"1.3","value":11.5},{"source":"13.1","target":"1.5","value":17.5},{"source":"13.1","target":"2.2","value":4.5},{"source":"13.1","target":"2.4","value":7.5},{"source":"13.1","target":"3.4","value":14.5},{"source":"13.1","target":"3.8","value":6},{"source":"13.1","target":"4.1","value":8.5},{"source":"13.1","target":"4.4","value":10.5},{"source":"13.1","target":"5.4","value":8},{"source":"13.1","target":"5.5","value":7},{"source":"13.1","target":"6.5","value":9.5},{"source":"13.1","target":"6.6","value":11},{"source":"13.1","target":"7.2","value":0},{"source":"13.1","target":"7.3","value":7.5},{"source":"13.1","target":"8.4","value":6.5},{"source":"13.1","target":"8.5","value":8},{"source":"13.1","target":"9.4","value":7},{"source":"13.1","target":"9.5","value":2.5},{"source":"13.1","target":"10.1","value":12},{"source":"13.1","target":"10.7","value":8.5},{"source":"13.1","target":"11.1","value":6},{"source":"13.1","target":"11.2","value":6},{"source":"13.1","target":"12.1","value":8},{"source":"13.1","target":"12.5","value":5.5},{"source":"13.1","target":"13.1","value":19.5},{"source":"13.1","target":"13.2","value":0},{"source":"13.1","target":"14.1","value":11},{"source":"13.1","target":"14.4","value":9.5},{"source":"13.1","target":"15.2","value":12},{"source":"13.1","target":"15.5","value":14},{"source":"13.1","target":"16.4","value":5.5},{"source":"13.1","target":"16.6","value":6},{"source":"13.1","target":"17.11","value":4.5},{"source":"13.1","target":"17.13","value":8.5},{"source":"13.2","target":"1.3","value":1.5},{"source":"13.2","target":"1.5","value":1},{"source":"13.2","target":"2.2","value":2.5},{"source":"13.2","target":"2.4","value":12},{"source":"13.2","target":"3.4","value":-4.5},{"source":"13.2","target":"3.8","value":0.5},{"source":"13.2","target":"4.1","value":1},{"source":"13.2","target":"4.4","value":5},{"source":"13.2","target":"5.4","value":1.5},{"source":"13.2","target":"5.5","value":2},{"source":"13.2","target":"6.5","value":9},{"source":"13.2","target":"6.6","value":6},{"source":"13.2","target":"7.2","value":4},{"source":"13.2","target":"7.3","value":8},{"source":"13.2","target":"8.4","value":13},{"source":"13.2","target":"8.5","value":5},{"source":"13.2","target":"9.4","value":15},{"source":"13.2","target":"9.5","value":12.5},{"source":"13.2","target":"10.1","value":5},{"source":"13.2","target":"10.7","value":-0.5},{"source":"13.2","target":"11.1","value":8.5},{"source":"13.2","target":"11.2","value":10},{"source":"13.2","target":"12.1","value":15.5},{"source":"13.2","target":"12.5","value":14.5},{"source":"13.2","target":"13.1","value":5.5},{"source":"13.2","target":"13.2","value":19.5},{"source":"13.2","target":"14.1","value":9.5},{"source":"13.2","target":"14.4","value":5.5},{"source":"13.2","target":"15.2","value":8.5},{"source":"13.2","target":"15.5","value":10},{"source":"13.2","target":"16.4","value":1},{"source":"13.2","target":"16.6","value":3},{"source":"13.2","target":"17.11","value":-5.5},{"source":"13.2","target":"17.13","value":6},{"source":"14.1","target":"1.3","value":1},{"source":"14.1","target":"1.5","value":5.5},{"source":"14.1","target":"2.2","value":2},{"source":"14.1","target":"2.4","value":8.5},{"source":"14.1","target":"3.4","value":1},{"source":"14.1","target":"3.8","value":0},{"source":"14.1","target":"4.1","value":0},{"source":"14.1","target":"4.4","value":2},{"source":"14.1","target":"5.4","value":2},{"source":"14.1","target":"5.5","value":0},{"source":"14.1","target":"6.5","value":9},{"source":"14.1","target":"6.6","value":9},{"source":"14.1","target":"7.2","value":-0.5},{"source":"14.1","target":"7.3","value":4},{"source":"14.1","target":"8.4","value":7},{"source":"14.1","target":"8.5","value":2},{"source":"14.1","target":"9.4","value":6},{"source":"14.1","target":"9.5","value":3},{"source":"14.1","target":"10.1","value":2},{"source":"14.1","target":"10.7","value":0},{"source":"14.1","target":"11.1","value":0},{"source":"14.1","target":"11.2","value":2},{"source":"14.1","target":"12.1","value":6},{"source":"14.1","target":"12.5","value":5},{"source":"14.1","target":"13.1","value":11},{"source":"14.1","target":"13.2","value":6},{"source":"14.1","target":"14.1","value":11},{"source":"14.1","target":"14.4","value":9},{"source":"14.1","target":"15.2","value":13},{"source":"14.1","target":"15.5","value":13},{"source":"14.1","target":"16.4","value":1},{"source":"14.1","target":"16.6","value":3},{"source":"14.1","target":"17.11","value":-2},{"source":"14.1","target":"17.13","value":5},{"source":"14.4","target":"1.3","value":1},{"source":"14.4","target":"1.5","value":5},{"source":"14.4","target":"2.2","value":3},{"source":"14.4","target":"2.4","value":8},{"source":"14.4","target":"3.4","value":3},{"source":"14.4","target":"3.8","value":0},{"source":"14.4","target":"4.1","value":1.5},{"source":"14.4","target":"4.4","value":2},{"source":"14.4","target":"5.4","value":2},{"source":"14.4","target":"5.5","value":1},{"source":"14.4","target":"6.5","value":10},{"source":"14.4","target":"6.6","value":8.5},{"source":"14.4","target":"7.2","value":0},{"source":"14.4","target":"7.3","value":4},{"source":"14.4","target":"8.4","value":6},{"source":"14.4","target":"8.5","value":3.5},{"source":"14.4","target":"9.4","value":7.5},{"source":"14.4","target":"9.5","value":6},{"source":"14.4","target":"10.1","value":2},{"source":"14.4","target":"10.7","value":0},{"source":"14.4","target":"11.1","value":2.5},{"source":"14.4","target":"11.2","value":4},{"source":"14.4","target":"12.1","value":7},{"source":"14.4","target":"12.5","value":7},{"source":"14.4","target":"13.1","value":10},{"source":"14.4","target":"13.2","value":6.5},{"source":"14.4","target":"14.1","value":10.5},{"source":"14.4","target":"14.4","value":10.5},{"source":"14.4","target":"15.2","value":13},{"source":"14.4","target":"15.5","value":11},{"source":"14.4","target":"16.4","value":0},{"source":"14.4","target":"16.6","value":2.5},{"source":"14.4","target":"17.11","value":-2},{"source":"14.4","target":"17.13","value":3.5},{"source":"15.2","target":"1.3","value":3.5},{"source":"15.2","target":"1.5","value":6},{"source":"15.2","target":"2.2","value":2},{"source":"15.2","target":"2.4","value":10},{"source":"15.2","target":"3.4","value":1.5},{"source":"15.2","target":"3.8","value":2},{"source":"15.2","target":"4.1","value":0.5},{"source":"15.2","target":"4.4","value":2},{"source":"15.2","target":"5.4","value":0.5},{"source":"15.2","target":"5.5","value":1.5},{"source":"15.2","target":"6.5","value":10},{"source":"15.2","target":"6.6","value":12},{"source":"15.2","target":"7.2","value":-3.5},{"source":"15.2","target":"7.3","value":1.5},{"source":"15.2","target":"8.4","value":2.5},{"source":"15.2","target":"8.5","value":1.5},{"source":"15.2","target":"9.4","value":1},{"source":"15.2","target":"9.5","value":2.5},{"source":"15.2","target":"10.1","value":1.5},{"source":"15.2","target":"10.7","value":2},{"source":"15.2","target":"11.1","value":0.5},{"source":"15.2","target":"11.2","value":1.5},{"source":"15.2","target":"12.1","value":5.5},{"source":"15.2","target":"12.5","value":5.5},{"source":"15.2","target":"13.1","value":9},{"source":"15.2","target":"13.2","value":2.5},{"source":"15.2","target":"14.1","value":6},{"source":"15.2","target":"14.4","value":9},{"source":"15.2","target":"15.2","value":12.5},{"source":"15.2","target":"15.5","value":9.5},{"source":"15.2","target":"16.4","value":-0.5},{"source":"15.2","target":"16.6","value":1.5},{"source":"15.2","target":"17.11","value":1},{"source":"15.2","target":"17.13","value":0},{"source":"15.5","target":"1.3","value":2},{"source":"15.5","target":"1.5","value":7},{"source":"15.5","target":"2.2","value":2.5},{"source":"15.5","target":"2.4","value":13.5},{"source":"15.5","target":"3.4","value":2.5},{"source":"15.5","target":"3.8","value":1},{"source":"15.5","target":"4.1","value":0.5},{"source":"15.5","target":"4.4","value":1.5},{"source":"15.5","target":"5.4","value":1},{"source":"15.5","target":"5.5","value":0.5},{"source":"15.5","target":"6.5","value":10.5},{"source":"15.5","target":"6.6","value":15},{"source":"15.5","target":"7.2","value":-3.5},{"source":"15.5","target":"7.3","value":1.5},{"source":"15.5","target":"8.4","value":8},{"source":"15.5","target":"8.5","value":2},{"source":"15.5","target":"9.4","value":3.5},{"source":"15.5","target":"9.5","value":3},{"source":"15.5","target":"10.1","value":1.5},{"source":"15.5","target":"10.7","value":1},{"source":"15.5","target":"11.1","value":0.5},{"source":"15.5","target":"11.2","value":1.5},{"source":"15.5","target":"12.1","value":8},{"source":"15.5","target":"12.5","value":3.5},{"source":"15.5","target":"13.1","value":9.5},{"source":"15.5","target":"13.2","value":7},{"source":"15.5","target":"14.1","value":7.5},{"source":"15.5","target":"14.4","value":4.5},{"source":"15.5","target":"15.2","value":7.5},{"source":"15.5","target":"15.5","value":17},{"source":"15.5","target":"16.4","value":0.5},{"source":"15.5","target":"16.6","value":2},{"source":"15.5","target":"17.11","value":-2.5},{"source":"15.5","target":"17.13","value":2.5},{"source":"16.4","target":"1.3","value":14.5},{"source":"16.4","target":"1.5","value":15},{"source":"16.4","target":"2.2","value":9},{"source":"16.4","target":"2.4","value":9.5},{"source":"16.4","target":"3.4","value":11},{"source":"16.4","target":"3.8","value":9},{"source":"16.4","target":"4.1","value":8.5},{"source":"16.4","target":"4.4","value":9.5},{"source":"16.4","target":"5.4","value":6.5},{"source":"16.4","target":"5.5","value":8},{"source":"16.4","target":"6.5","value":6.5},{"source":"16.4","target":"6.6","value":6.5},{"source":"16.4","target":"7.2","value":0},{"source":"16.4","target":"7.3","value":1},{"source":"16.4","target":"8.4","value":3.5},{"source":"16.4","target":"8.5","value":8},{"source":"16.4","target":"9.4","value":4.5},{"source":"16.4","target":"9.5","value":5},{"source":"16.4","target":"10.1","value":10},{"source":"16.4","target":"10.7","value":9.5},{"source":"16.4","target":"11.1","value":3},{"source":"16.4","target":"11.2","value":3},{"source":"16.4","target":"12.1","value":7.5},{"source":"16.4","target":"12.5","value":4.5},{"source":"16.4","target":"13.1","value":12},{"source":"16.4","target":"13.2","value":4},{"source":"16.4","target":"14.1","value":4.5},{"source":"16.4","target":"14.4","value":4.5},{"source":"16.4","target":"15.2","value":4.5},{"source":"16.4","target":"15.5","value":7.5},{"source":"16.4","target":"16.4","value":7.5},{"source":"16.4","target":"16.6","value":2.5},{"source":"16.4","target":"17.11","value":1.5},{"source":"16.4","target":"17.13","value":7.5},{"source":"16.6","target":"1.3","value":21.5},{"source":"16.6","target":"1.5","value":29.5},{"source":"16.6","target":"2.2","value":14},{"source":"16.6","target":"2.4","value":27.5},{"source":"16.6","target":"3.4","value":19.5},{"source":"16.6","target":"3.8","value":12},{"source":"16.6","target":"4.1","value":13.5},{"source":"16.6","target":"4.4","value":19},{"source":"16.6","target":"5.4","value":12.5},{"source":"16.6","target":"5.5","value":8.5},{"source":"16.6","target":"6.5","value":15.5},{"source":"16.6","target":"6.6","value":19.5},{"source":"16.6","target":"7.2","value":4},{"source":"16.6","target":"7.3","value":10},{"source":"16.6","target":"8.4","value":17},{"source":"16.6","target":"8.5","value":22.5},{"source":"16.6","target":"9.4","value":11.5},{"source":"16.6","target":"9.5","value":7},{"source":"16.6","target":"10.1","value":22},{"source":"16.6","target":"10.7","value":15},{"source":"16.6","target":"11.1","value":12.5},{"source":"16.6","target":"11.2","value":12.5},{"source":"16.6","target":"12.1","value":16.5},{"source":"16.6","target":"12.5","value":13},{"source":"16.6","target":"13.1","value":25.5},{"source":"16.6","target":"13.2","value":15},{"source":"16.6","target":"14.1","value":16},{"source":"16.6","target":"14.4","value":11},{"source":"16.6","target":"15.2","value":15},{"source":"16.6","target":"15.5","value":21.5},{"source":"16.6","target":"16.4","value":5.5},{"source":"16.6","target":"16.6","value":15.5},{"source":"16.6","target":"17.11","value":2},{"source":"16.6","target":"17.13","value":13},{"source":"17.11","target":"1.3","value":-2},{"source":"17.11","target":"1.5","value":-2.5},{"source":"17.11","target":"2.2","value":-1.5},{"source":"17.11","target":"2.4","value":-5.5},{"source":"17.11","target":"3.4","value":-0.5},{"source":"17.11","target":"3.8","value":-1.5},{"source":"17.11","target":"4.1","value":-0.5},{"source":"17.11","target":"4.4","value":-4.5},{"source":"17.11","target":"5.4","value":-1.5},{"source":"17.11","target":"5.5","value":-1.5},{"source":"17.11","target":"6.5","value":-5},{"source":"17.11","target":"6.6","value":-5.5},{"source":"17.11","target":"7.2","value":1.5},{"source":"17.11","target":"7.3","value":-3},{"source":"17.11","target":"8.4","value":-9.5},{"source":"17.11","target":"8.5","value":-1.5},{"source":"17.11","target":"9.4","value":-6},{"source":"17.11","target":"9.5","value":-5.5},{"source":"17.11","target":"10.1","value":-5},{"source":"17.11","target":"10.7","value":0.5},{"source":"17.11","target":"11.1","value":-4},{"source":"17.11","target":"11.2","value":-6.5},{"source":"17.11","target":"12.1","value":-8},{"source":"17.11","target":"12.5","value":-4.5},{"source":"17.11","target":"13.1","value":-4},{"source":"17.11","target":"13.2","value":-9.5},{"source":"17.11","target":"14.1","value":-5},{"source":"17.11","target":"14.4","value":-1},{"source":"17.11","target":"15.2","value":-3.5},{"source":"17.11","target":"15.5","value":-8},{"source":"17.11","target":"16.4","value":-0.5},{"source":"17.11","target":"16.6","value":-2.5},{"source":"17.11","target":"17.11","value":3},{"source":"17.11","target":"17.13","value":-4},{"source":"17.13","target":"1.3","value":4},{"source":"17.13","target":"1.5","value":2.5},{"source":"17.13","target":"2.2","value":1.5},{"source":"17.13","target":"2.4","value":1.5},{"source":"17.13","target":"3.4","value":3},{"source":"17.13","target":"3.8","value":2},{"source":"17.13","target":"4.1","value":2},{"source":"17.13","target":"4.4","value":4},{"source":"17.13","target":"5.4","value":1.5},{"source":"17.13","target":"5.5","value":2},{"source":"17.13","target":"6.5","value":1.5},{"source":"17.13","target":"6.6","value":1},{"source":"17.13","target":"7.2","value":-1.5},{"source":"17.13","target":"7.3","value":-0.5},{"source":"17.13","target":"8.4","value":5.5},{"source":"17.13","target":"8.5","value":2.5},{"source":"17.13","target":"9.4","value":7},{"source":"17.13","target":"9.5","value":6.5},{"source":"17.13","target":"10.1","value":5.5},{"source":"17.13","target":"10.7","value":2},{"source":"17.13","target":"11.1","value":5},{"source":"17.13","target":"11.2","value":4},{"source":"17.13","target":"12.1","value":3.5},{"source":"17.13","target":"12.5","value":2.5},{"source":"17.13","target":"13.1","value":5.5},{"source":"17.13","target":"13.2","value":5.5},{"source":"17.13","target":"14.1","value":2.5},{"source":"17.13","target":"14.4","value":2.5},{"source":"17.13","target":"15.2","value":4},{"source":"17.13","target":"15.5","value":3},{"source":"17.13","target":"16.4","value":3.5},{"source":"17.13","target":"16.6","value":2},{"source":"17.13","target":"17.11","value":0},{"source":"17.13","target":"17.13","value":5.5}]

connections2orderInfluenced = connections2orderInfluenced.filter(function(d) {return d.value != 0});
connections2orderInfluencing = connections2orderInfluencing.filter(function(d) {return d.value != 0});


connections2orderInfluencedMax = Math.max.apply(Math,connections2orderInfluenced.map(function(o){return o.value;}));
connections2orderInfluencedMin =  Math.min.apply(Math,connections2orderInfluenced.map(function(o){return o.value;}));

connections2orderInfluencingMax = Math.max.apply(Math,connections2orderInfluencing.map(function(o){return o.value;}));
connections2orderInfluencingMin =  Math.min.apply(Math,connections2orderInfluencing.map(function(o){return o.value;}));



var connections3orderInfluencing=[
  {
    "source": "1.3",
    "target": "1.3",
    "value": 287.5
  },
  {
    "source": "1.3",
    "target": "1.5",
    "value": 425
  },
  {
    "source": "1.3",
    "target": "2.2",
    "value": 170
  },
  {
    "source": "1.3",
    "target": "2.4",
    "value": 350.5
  },
  {
    "source": "1.3",
    "target": "3.4",
    "value": 220.5
  },
  {
    "source": "1.3",
    "target": "3.8",
    "value": 162.5
  },
  {
    "source": "1.3",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "1.3",
    "target": "4.4",
    "value": 280
  },
  {
    "source": "1.3",
    "target": "5.4",
    "value": 168.5
  },
  {
    "source": "1.3",
    "target": "5.5",
    "value": 182
  },
  {
    "source": "1.3",
    "target": "6.5",
    "value": 243.5
  },
  {
    "source": "1.3",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "1.3",
    "target": "7.2",
    "value": 64
  },
  {
    "source": "1.3",
    "target": "7.3",
    "value": 197.5
  },
  {
    "source": "1.3",
    "target": "8.4",
    "value": 279
  },
  {
    "source": "1.3",
    "target": "8.5",
    "value": 290.5
  },
  {
    "source": "1.3",
    "target": "9.4",
    "value": 257
  },
  {
    "source": "1.3",
    "target": "9.5",
    "value": 191.5
  },
  {
    "source": "1.3",
    "target": "10.1",
    "value": 319
  },
  {
    "source": "1.3",
    "target": "10.7",
    "value": 226.5
  },
  {
    "source": "1.3",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "1.3",
    "target": "11.2",
    "value": 242
  },
  {
    "source": "1.3",
    "target": "12.1",
    "value": 313
  },
  {
    "source": "1.3",
    "target": "12.5",
    "value": 227.5
  },
  {
    "source": "1.3",
    "target": "13.1",
    "value": 366
  },
  {
    "source": "1.3",
    "target": "13.2",
    "value": 309
  },
  {
    "source": "1.3",
    "target": "14.1",
    "value": 247.5
  },
  {
    "source": "1.3",
    "target": "14.4",
    "value": 175
  },
  {
    "source": "1.3",
    "target": "15.2",
    "value": 254.5
  },
  {
    "source": "1.3",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "1.3",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "1.3",
    "target": "16.6",
    "value": 171.5
  },
  {
    "source": "1.3",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "1.3",
    "target": "17.13",
    "value": 219
  },
  {
    "source": "1.5",
    "target": "1.3",
    "value": 287
  },
  {
    "source": "1.5",
    "target": "1.5",
    "value": 424
  },
  {
    "source": "1.5",
    "target": "2.2",
    "value": 169
  },
  {
    "source": "1.5",
    "target": "2.4",
    "value": 352.5
  },
  {
    "source": "1.5",
    "target": "3.4",
    "value": 220
  },
  {
    "source": "1.5",
    "target": "3.8",
    "value": 161.5
  },
  {
    "source": "1.5",
    "target": "4.1",
    "value": 162
  },
  {
    "source": "1.5",
    "target": "4.4",
    "value": 279
  },
  {
    "source": "1.5",
    "target": "5.4",
    "value": 168.5
  },
  {
    "source": "1.5",
    "target": "5.5",
    "value": 181
  },
  {
    "source": "1.5",
    "target": "6.5",
    "value": 245.5
  },
  {
    "source": "1.5",
    "target": "6.6",
    "value": 260
  },
  {
    "source": "1.5",
    "target": "7.2",
    "value": 63
  },
  {
    "source": "1.5",
    "target": "7.3",
    "value": 197.5
  },
  {
    "source": "1.5",
    "target": "8.4",
    "value": 279
  },
  {
    "source": "1.5",
    "target": "8.5",
    "value": 289.5
  },
  {
    "source": "1.5",
    "target": "9.4",
    "value": 257
  },
  {
    "source": "1.5",
    "target": "9.5",
    "value": 191.5
  },
  {
    "source": "1.5",
    "target": "10.1",
    "value": 318
  },
  {
    "source": "1.5",
    "target": "10.7",
    "value": 226
  },
  {
    "source": "1.5",
    "target": "11.1",
    "value": 208
  },
  {
    "source": "1.5",
    "target": "11.2",
    "value": 242
  },
  {
    "source": "1.5",
    "target": "12.1",
    "value": 313.5
  },
  {
    "source": "1.5",
    "target": "12.5",
    "value": 228
  },
  {
    "source": "1.5",
    "target": "13.1",
    "value": 368
  },
  {
    "source": "1.5",
    "target": "13.2",
    "value": 309.5
  },
  {
    "source": "1.5",
    "target": "14.1",
    "value": 248.5
  },
  {
    "source": "1.5",
    "target": "14.4",
    "value": 176.5
  },
  {
    "source": "1.5",
    "target": "15.2",
    "value": 257.5
  },
  {
    "source": "1.5",
    "target": "15.5",
    "value": 334
  },
  {
    "source": "1.5",
    "target": "16.4",
    "value": 109.5
  },
  {
    "source": "1.5",
    "target": "16.6",
    "value": 172
  },
  {
    "source": "1.5",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "1.5",
    "target": "17.13",
    "value": 220
  },
  {
    "source": "2.2",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "2.2",
    "target": "1.5",
    "value": 412
  },
  {
    "source": "2.2",
    "target": "2.2",
    "value": 161.5
  },
  {
    "source": "2.2",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "2.2",
    "target": "3.4",
    "value": 212.5
  },
  {
    "source": "2.2",
    "target": "3.8",
    "value": 153
  },
  {
    "source": "2.2",
    "target": "4.1",
    "value": 157.5
  },
  {
    "source": "2.2",
    "target": "4.4",
    "value": 274
  },
  {
    "source": "2.2",
    "target": "5.4",
    "value": 163.5
  },
  {
    "source": "2.2",
    "target": "5.5",
    "value": 176.5
  },
  {
    "source": "2.2",
    "target": "6.5",
    "value": 245
  },
  {
    "source": "2.2",
    "target": "6.6",
    "value": 256.5
  },
  {
    "source": "2.2",
    "target": "7.2",
    "value": 67
  },
  {
    "source": "2.2",
    "target": "7.3",
    "value": 201.5
  },
  {
    "source": "2.2",
    "target": "8.4",
    "value": 284.5
  },
  {
    "source": "2.2",
    "target": "8.5",
    "value": 283.5
  },
  {
    "source": "2.2",
    "target": "9.4",
    "value": 258
  },
  {
    "source": "2.2",
    "target": "9.5",
    "value": 193
  },
  {
    "source": "2.2",
    "target": "10.1",
    "value": 311.5
  },
  {
    "source": "2.2",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "2.2",
    "target": "11.1",
    "value": 204
  },
  {
    "source": "2.2",
    "target": "11.2",
    "value": 241
  },
  {
    "source": "2.2",
    "target": "12.1",
    "value": 317.5
  },
  {
    "source": "2.2",
    "target": "12.5",
    "value": 231.5
  },
  {
    "source": "2.2",
    "target": "13.1",
    "value": 362.5
  },
  {
    "source": "2.2",
    "target": "13.2",
    "value": 311.5
  },
  {
    "source": "2.2",
    "target": "14.1",
    "value": 253
  },
  {
    "source": "2.2",
    "target": "14.4",
    "value": 175
  },
  {
    "source": "2.2",
    "target": "15.2",
    "value": 254
  },
  {
    "source": "2.2",
    "target": "15.5",
    "value": 336
  },
  {
    "source": "2.2",
    "target": "16.4",
    "value": 105
  },
  {
    "source": "2.2",
    "target": "16.6",
    "value": 168.5
  },
  {
    "source": "2.2",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "2.2",
    "target": "17.13",
    "value": 218
  },
  {
    "source": "2.4",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "2.4",
    "target": "1.5",
    "value": 416
  },
  {
    "source": "2.4",
    "target": "2.2",
    "value": 164.5
  },
  {
    "source": "2.4",
    "target": "2.4",
    "value": 363.5
  },
  {
    "source": "2.4",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "2.4",
    "target": "3.8",
    "value": 154
  },
  {
    "source": "2.4",
    "target": "4.1",
    "value": 155.5
  },
  {
    "source": "2.4",
    "target": "4.4",
    "value": 273
  },
  {
    "source": "2.4",
    "target": "5.4",
    "value": 161.5
  },
  {
    "source": "2.4",
    "target": "5.5",
    "value": 174
  },
  {
    "source": "2.4",
    "target": "6.5",
    "value": 258
  },
  {
    "source": "2.4",
    "target": "6.6",
    "value": 277.5
  },
  {
    "source": "2.4",
    "target": "7.2",
    "value": 59.5
  },
  {
    "source": "2.4",
    "target": "7.3",
    "value": 201
  },
  {
    "source": "2.4",
    "target": "8.4",
    "value": 286.5
  },
  {
    "source": "2.4",
    "target": "8.5",
    "value": 281
  },
  {
    "source": "2.4",
    "target": "9.4",
    "value": 256.5
  },
  {
    "source": "2.4",
    "target": "9.5",
    "value": 194
  },
  {
    "source": "2.4",
    "target": "10.1",
    "value": 308
  },
  {
    "source": "2.4",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "2.4",
    "target": "11.1",
    "value": 203.5
  },
  {
    "source": "2.4",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "2.4",
    "target": "12.1",
    "value": 324.5
  },
  {
    "source": "2.4",
    "target": "12.5",
    "value": 236
  },
  {
    "source": "2.4",
    "target": "13.1",
    "value": 371.5
  },
  {
    "source": "2.4",
    "target": "13.2",
    "value": 317
  },
  {
    "source": "2.4",
    "target": "14.1",
    "value": 259
  },
  {
    "source": "2.4",
    "target": "14.4",
    "value": 182
  },
  {
    "source": "2.4",
    "target": "15.2",
    "value": 265.5
  },
  {
    "source": "2.4",
    "target": "15.5",
    "value": 353
  },
  {
    "source": "2.4",
    "target": "16.4",
    "value": 103.5
  },
  {
    "source": "2.4",
    "target": "16.6",
    "value": 167.5
  },
  {
    "source": "2.4",
    "target": "17.11",
    "value": -3
  },
  {
    "source": "2.4",
    "target": "17.13",
    "value": 217
  },
  {
    "source": "3.4",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "3.4",
    "target": "1.5",
    "value": 408
  },
  {
    "source": "3.4",
    "target": "2.2",
    "value": 162.5
  },
  {
    "source": "3.4",
    "target": "2.4",
    "value": 344
  },
  {
    "source": "3.4",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "3.4",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "3.4",
    "target": "4.1",
    "value": 156.5
  },
  {
    "source": "3.4",
    "target": "4.4",
    "value": 270.5
  },
  {
    "source": "3.4",
    "target": "5.4",
    "value": 162.5
  },
  {
    "source": "3.4",
    "target": "5.5",
    "value": 175
  },
  {
    "source": "3.4",
    "target": "6.5",
    "value": 241.5
  },
  {
    "source": "3.4",
    "target": "6.6",
    "value": 255
  },
  {
    "source": "3.4",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "3.4",
    "target": "7.3",
    "value": 194.5
  },
  {
    "source": "3.4",
    "target": "8.4",
    "value": 276.5
  },
  {
    "source": "3.4",
    "target": "8.5",
    "value": 278.5
  },
  {
    "source": "3.4",
    "target": "9.4",
    "value": 252
  },
  {
    "source": "3.4",
    "target": "9.5",
    "value": 189
  },
  {
    "source": "3.4",
    "target": "10.1",
    "value": 307.5
  },
  {
    "source": "3.4",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "3.4",
    "target": "11.1",
    "value": 202
  },
  {
    "source": "3.4",
    "target": "11.2",
    "value": 236
  },
  {
    "source": "3.4",
    "target": "12.1",
    "value": 310
  },
  {
    "source": "3.4",
    "target": "12.5",
    "value": 227
  },
  {
    "source": "3.4",
    "target": "13.1",
    "value": 359.5
  },
  {
    "source": "3.4",
    "target": "13.2",
    "value": 304.5
  },
  {
    "source": "3.4",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "3.4",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "3.4",
    "target": "15.2",
    "value": 251.5
  },
  {
    "source": "3.4",
    "target": "15.5",
    "value": 329.5
  },
  {
    "source": "3.4",
    "target": "16.4",
    "value": 104.5
  },
  {
    "source": "3.4",
    "target": "16.6",
    "value": 166
  },
  {
    "source": "3.4",
    "target": "17.11",
    "value": 0.5
  },
  {
    "source": "3.4",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "3.8",
    "target": "1.3",
    "value": 278
  },
  {
    "source": "3.8",
    "target": "1.5",
    "value": 414
  },
  {
    "source": "3.8",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "3.8",
    "target": "2.4",
    "value": 344.5
  },
  {
    "source": "3.8",
    "target": "3.4",
    "value": 214.5
  },
  {
    "source": "3.8",
    "target": "3.8",
    "value": 156.5
  },
  {
    "source": "3.8",
    "target": "4.1",
    "value": 157
  },
  {
    "source": "3.8",
    "target": "4.4",
    "value": 274
  },
  {
    "source": "3.8",
    "target": "5.4",
    "value": 164.5
  },
  {
    "source": "3.8",
    "target": "5.5",
    "value": 177.5
  },
  {
    "source": "3.8",
    "target": "6.5",
    "value": 242
  },
  {
    "source": "3.8",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "3.8",
    "target": "7.2",
    "value": 61
  },
  {
    "source": "3.8",
    "target": "7.3",
    "value": 194
  },
  {
    "source": "3.8",
    "target": "8.4",
    "value": 277.5
  },
  {
    "source": "3.8",
    "target": "8.5",
    "value": 281
  },
  {
    "source": "3.8",
    "target": "9.4",
    "value": 251.5
  },
  {
    "source": "3.8",
    "target": "9.5",
    "value": 189.5
  },
  {
    "source": "3.8",
    "target": "10.1",
    "value": 313.5
  },
  {
    "source": "3.8",
    "target": "10.7",
    "value": 215.5
  },
  {
    "source": "3.8",
    "target": "11.1",
    "value": 205.5
  },
  {
    "source": "3.8",
    "target": "11.2",
    "value": 238
  },
  {
    "source": "3.8",
    "target": "12.1",
    "value": 311
  },
  {
    "source": "3.8",
    "target": "12.5",
    "value": 226.5
  },
  {
    "source": "3.8",
    "target": "13.1",
    "value": 361.5
  },
  {
    "source": "3.8",
    "target": "13.2",
    "value": 307
  },
  {
    "source": "3.8",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "3.8",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "3.8",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "3.8",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "3.8",
    "target": "16.4",
    "value": 106
  },
  {
    "source": "3.8",
    "target": "16.6",
    "value": 167
  },
  {
    "source": "3.8",
    "target": "17.11",
    "value": 2
  },
  {
    "source": "3.8",
    "target": "17.13",
    "value": 217
  },
  {
    "source": "4.1",
    "target": "1.3",
    "value": 285.5
  },
  {
    "source": "4.1",
    "target": "1.5",
    "value": 420
  },
  {
    "source": "4.1",
    "target": "2.2",
    "value": 166.5
  },
  {
    "source": "4.1",
    "target": "2.4",
    "value": 347.5
  },
  {
    "source": "4.1",
    "target": "3.4",
    "value": 216
  },
  {
    "source": "4.1",
    "target": "3.8",
    "value": 160.5
  },
  {
    "source": "4.1",
    "target": "4.1",
    "value": 160
  },
  {
    "source": "4.1",
    "target": "4.4",
    "value": 279
  },
  {
    "source": "4.1",
    "target": "5.4",
    "value": 166.5
  },
  {
    "source": "4.1",
    "target": "5.5",
    "value": 182
  },
  {
    "source": "4.1",
    "target": "6.5",
    "value": 244
  },
  {
    "source": "4.1",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "4.1",
    "target": "7.2",
    "value": 65
  },
  {
    "source": "4.1",
    "target": "7.3",
    "value": 198
  },
  {
    "source": "4.1",
    "target": "8.4",
    "value": 281
  },
  {
    "source": "4.1",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "4.1",
    "target": "9.4",
    "value": 258.5
  },
  {
    "source": "4.1",
    "target": "9.5",
    "value": 193.5
  },
  {
    "source": "4.1",
    "target": "10.1",
    "value": 318.5
  },
  {
    "source": "4.1",
    "target": "10.7",
    "value": 220.5
  },
  {
    "source": "4.1",
    "target": "11.1",
    "value": 207.5
  },
  {
    "source": "4.1",
    "target": "11.2",
    "value": 241
  },
  {
    "source": "4.1",
    "target": "12.1",
    "value": 314.5
  },
  {
    "source": "4.1",
    "target": "12.5",
    "value": 230.5
  },
  {
    "source": "4.1",
    "target": "13.1",
    "value": 366.5
  },
  {
    "source": "4.1",
    "target": "13.2",
    "value": 311
  },
  {
    "source": "4.1",
    "target": "14.1",
    "value": 249.5
  },
  {
    "source": "4.1",
    "target": "14.4",
    "value": 177
  },
  {
    "source": "4.1",
    "target": "15.2",
    "value": 256.5
  },
  {
    "source": "4.1",
    "target": "15.5",
    "value": 333.5
  },
  {
    "source": "4.1",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "4.1",
    "target": "16.6",
    "value": 170.5
  },
  {
    "source": "4.1",
    "target": "17.11",
    "value": 1.5
  },
  {
    "source": "4.1",
    "target": "17.13",
    "value": 221
  },
  {
    "source": "4.4",
    "target": "1.3",
    "value": 286.5
  },
  {
    "source": "4.4",
    "target": "1.5",
    "value": 424
  },
  {
    "source": "4.4",
    "target": "2.2",
    "value": 168
  },
  {
    "source": "4.4",
    "target": "2.4",
    "value": 354.5
  },
  {
    "source": "4.4",
    "target": "3.4",
    "value": 218.5
  },
  {
    "source": "4.4",
    "target": "3.8",
    "value": 161
  },
  {
    "source": "4.4",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "4.4",
    "target": "4.4",
    "value": 282.5
  },
  {
    "source": "4.4",
    "target": "5.4",
    "value": 170
  },
  {
    "source": "4.4",
    "target": "5.5",
    "value": 183
  },
  {
    "source": "4.4",
    "target": "6.5",
    "value": 248
  },
  {
    "source": "4.4",
    "target": "6.6",
    "value": 260.5
  },
  {
    "source": "4.4",
    "target": "7.2",
    "value": 64.5
  },
  {
    "source": "4.4",
    "target": "7.3",
    "value": 202.5
  },
  {
    "source": "4.4",
    "target": "8.4",
    "value": 289
  },
  {
    "source": "4.4",
    "target": "8.5",
    "value": 290.5
  },
  {
    "source": "4.4",
    "target": "9.4",
    "value": 264
  },
  {
    "source": "4.4",
    "target": "9.5",
    "value": 199
  },
  {
    "source": "4.4",
    "target": "10.1",
    "value": 322.5
  },
  {
    "source": "4.4",
    "target": "10.7",
    "value": 223.5
  },
  {
    "source": "4.4",
    "target": "11.1",
    "value": 213
  },
  {
    "source": "4.4",
    "target": "11.2",
    "value": 247
  },
  {
    "source": "4.4",
    "target": "12.1",
    "value": 323.5
  },
  {
    "source": "4.4",
    "target": "12.5",
    "value": 235
  },
  {
    "source": "4.4",
    "target": "13.1",
    "value": 373
  },
  {
    "source": "4.4",
    "target": "13.2",
    "value": 318.5
  },
  {
    "source": "4.4",
    "target": "14.1",
    "value": 253.5
  },
  {
    "source": "4.4",
    "target": "14.4",
    "value": 177.5
  },
  {
    "source": "4.4",
    "target": "15.2",
    "value": 258.5
  },
  {
    "source": "4.4",
    "target": "15.5",
    "value": 340
  },
  {
    "source": "4.4",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "4.4",
    "target": "16.6",
    "value": 173.5
  },
  {
    "source": "4.4",
    "target": "17.11",
    "value": 0.5
  },
  {
    "source": "4.4",
    "target": "17.13",
    "value": 224.5
  },
  {
    "source": "5.4",
    "target": "1.3",
    "value": 287
  },
  {
    "source": "5.4",
    "target": "1.5",
    "value": 425.5
  },
  {
    "source": "5.4",
    "target": "2.2",
    "value": 170
  },
  {
    "source": "5.4",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "5.4",
    "target": "3.4",
    "value": 225
  },
  {
    "source": "5.4",
    "target": "3.8",
    "value": 163.5
  },
  {
    "source": "5.4",
    "target": "4.1",
    "value": 164
  },
  {
    "source": "5.4",
    "target": "4.4",
    "value": 282.5
  },
  {
    "source": "5.4",
    "target": "5.4",
    "value": 166.5
  },
  {
    "source": "5.4",
    "target": "5.5",
    "value": 181.5
  },
  {
    "source": "5.4",
    "target": "6.5",
    "value": 243.5
  },
  {
    "source": "5.4",
    "target": "6.6",
    "value": 257.5
  },
  {
    "source": "5.4",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "5.4",
    "target": "7.3",
    "value": 195
  },
  {
    "source": "5.4",
    "target": "8.4",
    "value": 282
  },
  {
    "source": "5.4",
    "target": "8.5",
    "value": 291.5
  },
  {
    "source": "5.4",
    "target": "9.4",
    "value": 255.5
  },
  {
    "source": "5.4",
    "target": "9.5",
    "value": 192.5
  },
  {
    "source": "5.4",
    "target": "10.1",
    "value": 324
  },
  {
    "source": "5.4",
    "target": "10.7",
    "value": 219
  },
  {
    "source": "5.4",
    "target": "11.1",
    "value": 208
  },
  {
    "source": "5.4",
    "target": "11.2",
    "value": 241
  },
  {
    "source": "5.4",
    "target": "12.1",
    "value": 315
  },
  {
    "source": "5.4",
    "target": "12.5",
    "value": 229.5
  },
  {
    "source": "5.4",
    "target": "13.1",
    "value": 367.5
  },
  {
    "source": "5.4",
    "target": "13.2",
    "value": 311
  },
  {
    "source": "5.4",
    "target": "14.1",
    "value": 247
  },
  {
    "source": "5.4",
    "target": "14.4",
    "value": 176
  },
  {
    "source": "5.4",
    "target": "15.2",
    "value": 255
  },
  {
    "source": "5.4",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "5.4",
    "target": "16.4",
    "value": 108.5
  },
  {
    "source": "5.4",
    "target": "16.6",
    "value": 172
  },
  {
    "source": "5.4",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "5.4",
    "target": "17.13",
    "value": 218
  },
  {
    "source": "5.5",
    "target": "1.3",
    "value": 293
  },
  {
    "source": "5.5",
    "target": "1.5",
    "value": 430
  },
  {
    "source": "5.5",
    "target": "2.2",
    "value": 172.5
  },
  {
    "source": "5.5",
    "target": "2.4",
    "value": 353
  },
  {
    "source": "5.5",
    "target": "3.4",
    "value": 227.5
  },
  {
    "source": "5.5",
    "target": "3.8",
    "value": 166
  },
  {
    "source": "5.5",
    "target": "4.1",
    "value": 165.5
  },
  {
    "source": "5.5",
    "target": "4.4",
    "value": 286
  },
  {
    "source": "5.5",
    "target": "5.4",
    "value": 170
  },
  {
    "source": "5.5",
    "target": "5.5",
    "value": 184
  },
  {
    "source": "5.5",
    "target": "6.5",
    "value": 248.5
  },
  {
    "source": "5.5",
    "target": "6.6",
    "value": 263
  },
  {
    "source": "5.5",
    "target": "7.2",
    "value": 60
  },
  {
    "source": "5.5",
    "target": "7.3",
    "value": 196.5
  },
  {
    "source": "5.5",
    "target": "8.4",
    "value": 283
  },
  {
    "source": "5.5",
    "target": "8.5",
    "value": 293.5
  },
  {
    "source": "5.5",
    "target": "9.4",
    "value": 258
  },
  {
    "source": "5.5",
    "target": "9.5",
    "value": 195
  },
  {
    "source": "5.5",
    "target": "10.1",
    "value": 326.5
  },
  {
    "source": "5.5",
    "target": "10.7",
    "value": 225.5
  },
  {
    "source": "5.5",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "5.5",
    "target": "11.2",
    "value": 242.5
  },
  {
    "source": "5.5",
    "target": "12.1",
    "value": 320
  },
  {
    "source": "5.5",
    "target": "12.5",
    "value": 231
  },
  {
    "source": "5.5",
    "target": "13.1",
    "value": 372
  },
  {
    "source": "5.5",
    "target": "13.2",
    "value": 314.5
  },
  {
    "source": "5.5",
    "target": "14.1",
    "value": 252.5
  },
  {
    "source": "5.5",
    "target": "14.4",
    "value": 179.5
  },
  {
    "source": "5.5",
    "target": "15.2",
    "value": 259
  },
  {
    "source": "5.5",
    "target": "15.5",
    "value": 337
  },
  {
    "source": "5.5",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "5.5",
    "target": "16.6",
    "value": 174.5
  },
  {
    "source": "5.5",
    "target": "17.11",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "17.13",
    "value": 222.5
  },
  {
    "source": "6.5",
    "target": "1.3",
    "value": 277.5
  },
  {
    "source": "6.5",
    "target": "1.5",
    "value": 414.5
  },
  {
    "source": "6.5",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "6.5",
    "target": "2.4",
    "value": 363.5
  },
  {
    "source": "6.5",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "6.5",
    "target": "3.8",
    "value": 155.5
  },
  {
    "source": "6.5",
    "target": "4.1",
    "value": 156
  },
  {
    "source": "6.5",
    "target": "4.4",
    "value": 273
  },
  {
    "source": "6.5",
    "target": "5.4",
    "value": 163
  },
  {
    "source": "6.5",
    "target": "5.5",
    "value": 176
  },
  {
    "source": "6.5",
    "target": "6.5",
    "value": 258
  },
  {
    "source": "6.5",
    "target": "6.6",
    "value": 276
  },
  {
    "source": "6.5",
    "target": "7.2",
    "value": 60.5
  },
  {
    "source": "6.5",
    "target": "7.3",
    "value": 199.5
  },
  {
    "source": "6.5",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "6.5",
    "target": "8.5",
    "value": 280.5
  },
  {
    "source": "6.5",
    "target": "9.4",
    "value": 256
  },
  {
    "source": "6.5",
    "target": "9.5",
    "value": 194.5
  },
  {
    "source": "6.5",
    "target": "10.1",
    "value": 308.5
  },
  {
    "source": "6.5",
    "target": "10.7",
    "value": 214.5
  },
  {
    "source": "6.5",
    "target": "11.1",
    "value": 202.5
  },
  {
    "source": "6.5",
    "target": "11.2",
    "value": 237.5
  },
  {
    "source": "6.5",
    "target": "12.1",
    "value": 323.5
  },
  {
    "source": "6.5",
    "target": "12.5",
    "value": 235.5
  },
  {
    "source": "6.5",
    "target": "13.1",
    "value": 370.5
  },
  {
    "source": "6.5",
    "target": "13.2",
    "value": 314
  },
  {
    "source": "6.5",
    "target": "14.1",
    "value": 258.5
  },
  {
    "source": "6.5",
    "target": "14.4",
    "value": 183
  },
  {
    "source": "6.5",
    "target": "15.2",
    "value": 266.5
  },
  {
    "source": "6.5",
    "target": "15.5",
    "value": 351.5
  },
  {
    "source": "6.5",
    "target": "16.4",
    "value": 106
  },
  {
    "source": "6.5",
    "target": "16.6",
    "value": 168.5
  },
  {
    "source": "6.5",
    "target": "17.11",
    "value": -0.5
  },
  {
    "source": "6.5",
    "target": "17.13",
    "value": 219
  },
  {
    "source": "6.6",
    "target": "1.3",
    "value": 275.5
  },
  {
    "source": "6.6",
    "target": "1.5",
    "value": 411.5
  },
  {
    "source": "6.6",
    "target": "2.2",
    "value": 162.5
  },
  {
    "source": "6.6",
    "target": "2.4",
    "value": 352.5
  },
  {
    "source": "6.6",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "6.6",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "6.6",
    "target": "4.1",
    "value": 154.5
  },
  {
    "source": "6.6",
    "target": "4.4",
    "value": 269.5
  },
  {
    "source": "6.6",
    "target": "5.4",
    "value": 160.5
  },
  {
    "source": "6.6",
    "target": "5.5",
    "value": 173.5
  },
  {
    "source": "6.6",
    "target": "6.5",
    "value": 248.5
  },
  {
    "source": "6.6",
    "target": "6.6",
    "value": 268
  },
  {
    "source": "6.6",
    "target": "7.2",
    "value": 56.5
  },
  {
    "source": "6.6",
    "target": "7.3",
    "value": 194
  },
  {
    "source": "6.6",
    "target": "8.4",
    "value": 276.5
  },
  {
    "source": "6.6",
    "target": "8.5",
    "value": 277
  },
  {
    "source": "6.6",
    "target": "9.4",
    "value": 251
  },
  {
    "source": "6.6",
    "target": "9.5",
    "value": 189.5
  },
  {
    "source": "6.6",
    "target": "10.1",
    "value": 305
  },
  {
    "source": "6.6",
    "target": "10.7",
    "value": 213.5
  },
  {
    "source": "6.6",
    "target": "11.1",
    "value": 200
  },
  {
    "source": "6.6",
    "target": "11.2",
    "value": 235
  },
  {
    "source": "6.6",
    "target": "12.1",
    "value": 312
  },
  {
    "source": "6.6",
    "target": "12.5",
    "value": 228.5
  },
  {
    "source": "6.6",
    "target": "13.1",
    "value": 365
  },
  {
    "source": "6.6",
    "target": "13.2",
    "value": 308
  },
  {
    "source": "6.6",
    "target": "14.1",
    "value": 252
  },
  {
    "source": "6.6",
    "target": "14.4",
    "value": 179.5
  },
  {
    "source": "6.6",
    "target": "15.2",
    "value": 260.5
  },
  {
    "source": "6.6",
    "target": "15.5",
    "value": 339
  },
  {
    "source": "6.6",
    "target": "16.4",
    "value": 103.5
  },
  {
    "source": "6.6",
    "target": "16.6",
    "value": 166.5
  },
  {
    "source": "6.6",
    "target": "17.11",
    "value": -0.5
  },
  {
    "source": "6.6",
    "target": "17.13",
    "value": 213.5
  },
  {
    "source": "7.2",
    "target": "1.3",
    "value": 274
  },
  {
    "source": "7.2",
    "target": "1.5",
    "value": 413
  },
  {
    "source": "7.2",
    "target": "2.2",
    "value": 160
  },
  {
    "source": "7.2",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "7.2",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "7.2",
    "target": "3.8",
    "value": 153
  },
  {
    "source": "7.2",
    "target": "4.1",
    "value": 157
  },
  {
    "source": "7.2",
    "target": "4.4",
    "value": 275
  },
  {
    "source": "7.2",
    "target": "5.4",
    "value": 164
  },
  {
    "source": "7.2",
    "target": "5.5",
    "value": 176.5
  },
  {
    "source": "7.2",
    "target": "6.5",
    "value": 243.5
  },
  {
    "source": "7.2",
    "target": "6.6",
    "value": 250.5
  },
  {
    "source": "7.2",
    "target": "7.2",
    "value": 71.5
  },
  {
    "source": "7.2",
    "target": "7.3",
    "value": 207
  },
  {
    "source": "7.2",
    "target": "8.4",
    "value": 288
  },
  {
    "source": "7.2",
    "target": "8.5",
    "value": 284.5
  },
  {
    "source": "7.2",
    "target": "9.4",
    "value": 262.5
  },
  {
    "source": "7.2",
    "target": "9.5",
    "value": 198
  },
  {
    "source": "7.2",
    "target": "10.1",
    "value": 312
  },
  {
    "source": "7.2",
    "target": "10.7",
    "value": 217
  },
  {
    "source": "7.2",
    "target": "11.1",
    "value": 207.5
  },
  {
    "source": "7.2",
    "target": "11.2",
    "value": 244
  },
  {
    "source": "7.2",
    "target": "12.1",
    "value": 320.5
  },
  {
    "source": "7.2",
    "target": "12.5",
    "value": 232.5
  },
  {
    "source": "7.2",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "7.2",
    "target": "13.2",
    "value": 316.5
  },
  {
    "source": "7.2",
    "target": "14.1",
    "value": 252.5
  },
  {
    "source": "7.2",
    "target": "14.4",
    "value": 174
  },
  {
    "source": "7.2",
    "target": "15.2",
    "value": 250
  },
  {
    "source": "7.2",
    "target": "15.5",
    "value": 332.5
  },
  {
    "source": "7.2",
    "target": "16.4",
    "value": 104.5
  },
  {
    "source": "7.2",
    "target": "16.6",
    "value": 166.5
  },
  {
    "source": "7.2",
    "target": "17.11",
    "value": -0.5
  },
  {
    "source": "7.2",
    "target": "17.13",
    "value": 216.5
  },
  {
    "source": "7.3",
    "target": "1.3",
    "value": 273
  },
  {
    "source": "7.3",
    "target": "1.5",
    "value": 414.5
  },
  {
    "source": "7.3",
    "target": "2.2",
    "value": 160
  },
  {
    "source": "7.3",
    "target": "2.4",
    "value": 355.5
  },
  {
    "source": "7.3",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "7.3",
    "target": "3.8",
    "value": 150.5
  },
  {
    "source": "7.3",
    "target": "4.1",
    "value": 157.5
  },
  {
    "source": "7.3",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "7.3",
    "target": "5.4",
    "value": 165
  },
  {
    "source": "7.3",
    "target": "5.5",
    "value": 174.5
  },
  {
    "source": "7.3",
    "target": "6.5",
    "value": 253
  },
  {
    "source": "7.3",
    "target": "6.6",
    "value": 261
  },
  {
    "source": "7.3",
    "target": "7.2",
    "value": 73
  },
  {
    "source": "7.3",
    "target": "7.3",
    "value": 216.5
  },
  {
    "source": "7.3",
    "target": "8.4",
    "value": 298
  },
  {
    "source": "7.3",
    "target": "8.5",
    "value": 285
  },
  {
    "source": "7.3",
    "target": "9.4",
    "value": 269
  },
  {
    "source": "7.3",
    "target": "9.5",
    "value": 199.5
  },
  {
    "source": "7.3",
    "target": "10.1",
    "value": 311.5
  },
  {
    "source": "7.3",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "7.3",
    "target": "11.1",
    "value": 207.5
  },
  {
    "source": "7.3",
    "target": "11.2",
    "value": 247.5
  },
  {
    "source": "7.3",
    "target": "12.1",
    "value": 332.5
  },
  {
    "source": "7.3",
    "target": "12.5",
    "value": 241.5
  },
  {
    "source": "7.3",
    "target": "13.1",
    "value": 371.5
  },
  {
    "source": "7.3",
    "target": "13.2",
    "value": 326.5
  },
  {
    "source": "7.3",
    "target": "14.1",
    "value": 263.5
  },
  {
    "source": "7.3",
    "target": "14.4",
    "value": 178
  },
  {
    "source": "7.3",
    "target": "15.2",
    "value": 261
  },
  {
    "source": "7.3",
    "target": "15.5",
    "value": 349.5
  },
  {
    "source": "7.3",
    "target": "16.4",
    "value": 104
  },
  {
    "source": "7.3",
    "target": "16.6",
    "value": 168
  },
  {
    "source": "7.3",
    "target": "17.11",
    "value": -6
  },
  {
    "source": "7.3",
    "target": "17.13",
    "value": 220.5
  },
  {
    "source": "8.4",
    "target": "1.3",
    "value": 284.5
  },
  {
    "source": "8.4",
    "target": "1.5",
    "value": 427
  },
  {
    "source": "8.4",
    "target": "2.2",
    "value": 168
  },
  {
    "source": "8.4",
    "target": "2.4",
    "value": 367.5
  },
  {
    "source": "8.4",
    "target": "3.4",
    "value": 217.5
  },
  {
    "source": "8.4",
    "target": "3.8",
    "value": 158
  },
  {
    "source": "8.4",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "8.4",
    "target": "4.4",
    "value": 283
  },
  {
    "source": "8.4",
    "target": "5.4",
    "value": 168.5
  },
  {
    "source": "8.4",
    "target": "5.5",
    "value": 180
  },
  {
    "source": "8.4",
    "target": "6.5",
    "value": 258
  },
  {
    "source": "8.4",
    "target": "6.6",
    "value": 271
  },
  {
    "source": "8.4",
    "target": "7.2",
    "value": 69
  },
  {
    "source": "8.4",
    "target": "7.3",
    "value": 212
  },
  {
    "source": "8.4",
    "target": "8.4",
    "value": 301.5
  },
  {
    "source": "8.4",
    "target": "8.5",
    "value": 291.5
  },
  {
    "source": "8.4",
    "target": "9.4",
    "value": 274.5
  },
  {
    "source": "8.4",
    "target": "9.5",
    "value": 203
  },
  {
    "source": "8.4",
    "target": "10.1",
    "value": 320
  },
  {
    "source": "8.4",
    "target": "10.7",
    "value": 221.5
  },
  {
    "source": "8.4",
    "target": "11.1",
    "value": 210
  },
  {
    "source": "8.4",
    "target": "11.2",
    "value": 251.5
  },
  {
    "source": "8.4",
    "target": "12.1",
    "value": 336.5
  },
  {
    "source": "8.4",
    "target": "12.5",
    "value": 246.5
  },
  {
    "source": "8.4",
    "target": "13.1",
    "value": 380.5
  },
  {
    "source": "8.4",
    "target": "13.2",
    "value": 330.5
  },
  {
    "source": "8.4",
    "target": "14.1",
    "value": 266
  },
  {
    "source": "8.4",
    "target": "14.4",
    "value": 185.5
  },
  {
    "source": "8.4",
    "target": "15.2",
    "value": 268
  },
  {
    "source": "8.4",
    "target": "15.5",
    "value": 353.5
  },
  {
    "source": "8.4",
    "target": "16.4",
    "value": 108
  },
  {
    "source": "8.4",
    "target": "16.6",
    "value": 172.5
  },
  {
    "source": "8.4",
    "target": "17.11",
    "value": -4
  },
  {
    "source": "8.4",
    "target": "17.13",
    "value": 225
  },
  {
    "source": "8.5",
    "target": "1.3",
    "value": 289.5
  },
  {
    "source": "8.5",
    "target": "1.5",
    "value": 426
  },
  {
    "source": "8.5",
    "target": "2.2",
    "value": 171
  },
  {
    "source": "8.5",
    "target": "2.4",
    "value": 354
  },
  {
    "source": "8.5",
    "target": "3.4",
    "value": 221.5
  },
  {
    "source": "8.5",
    "target": "3.8",
    "value": 163
  },
  {
    "source": "8.5",
    "target": "4.1",
    "value": 165
  },
  {
    "source": "8.5",
    "target": "4.4",
    "value": 283.5
  },
  {
    "source": "8.5",
    "target": "5.4",
    "value": 171
  },
  {
    "source": "8.5",
    "target": "5.5",
    "value": 182.5
  },
  {
    "source": "8.5",
    "target": "6.5",
    "value": 247.5
  },
  {
    "source": "8.5",
    "target": "6.6",
    "value": 259
  },
  {
    "source": "8.5",
    "target": "7.2",
    "value": 67
  },
  {
    "source": "8.5",
    "target": "7.3",
    "value": 202
  },
  {
    "source": "8.5",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "8.5",
    "target": "8.5",
    "value": 293
  },
  {
    "source": "8.5",
    "target": "9.4",
    "value": 260.5
  },
  {
    "source": "8.5",
    "target": "9.5",
    "value": 194.5
  },
  {
    "source": "8.5",
    "target": "10.1",
    "value": 322
  },
  {
    "source": "8.5",
    "target": "10.7",
    "value": 225.5
  },
  {
    "source": "8.5",
    "target": "11.1",
    "value": 212
  },
  {
    "source": "8.5",
    "target": "11.2",
    "value": 245.5
  },
  {
    "source": "8.5",
    "target": "12.1",
    "value": 318.5
  },
  {
    "source": "8.5",
    "target": "12.5",
    "value": 232
  },
  {
    "source": "8.5",
    "target": "13.1",
    "value": 370
  },
  {
    "source": "8.5",
    "target": "13.2",
    "value": 315.5
  },
  {
    "source": "8.5",
    "target": "14.1",
    "value": 252
  },
  {
    "source": "8.5",
    "target": "14.4",
    "value": 176
  },
  {
    "source": "8.5",
    "target": "15.2",
    "value": 258
  },
  {
    "source": "8.5",
    "target": "15.5",
    "value": 337
  },
  {
    "source": "8.5",
    "target": "16.4",
    "value": 110.5
  },
  {
    "source": "8.5",
    "target": "16.6",
    "value": 175
  },
  {
    "source": "8.5",
    "target": "17.11",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "17.13",
    "value": 224.5
  },
  {
    "source": "9.4",
    "target": "1.3",
    "value": 278
  },
  {
    "source": "9.4",
    "target": "1.5",
    "value": 419
  },
  {
    "source": "9.4",
    "target": "2.2",
    "value": 162.5
  },
  {
    "source": "9.4",
    "target": "2.4",
    "value": 361
  },
  {
    "source": "9.4",
    "target": "3.4",
    "value": 210.5
  },
  {
    "source": "9.4",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "9.4",
    "target": "4.1",
    "value": 158
  },
  {
    "source": "9.4",
    "target": "4.4",
    "value": 277
  },
  {
    "source": "9.4",
    "target": "5.4",
    "value": 164.5
  },
  {
    "source": "9.4",
    "target": "5.5",
    "value": 177
  },
  {
    "source": "9.4",
    "target": "6.5",
    "value": 252.5
  },
  {
    "source": "9.4",
    "target": "6.6",
    "value": 265.5
  },
  {
    "source": "9.4",
    "target": "7.2",
    "value": 68
  },
  {
    "source": "9.4",
    "target": "7.3",
    "value": 209
  },
  {
    "source": "9.4",
    "target": "8.4",
    "value": 295.5
  },
  {
    "source": "9.4",
    "target": "8.5",
    "value": 286
  },
  {
    "source": "9.4",
    "target": "9.4",
    "value": 269.5
  },
  {
    "source": "9.4",
    "target": "9.5",
    "value": 201
  },
  {
    "source": "9.4",
    "target": "10.1",
    "value": 314
  },
  {
    "source": "9.4",
    "target": "10.7",
    "value": 217.5
  },
  {
    "source": "9.4",
    "target": "11.1",
    "value": 209
  },
  {
    "source": "9.4",
    "target": "11.2",
    "value": 249
  },
  {
    "source": "9.4",
    "target": "12.1",
    "value": 328.5
  },
  {
    "source": "9.4",
    "target": "12.5",
    "value": 241.5
  },
  {
    "source": "9.4",
    "target": "13.1",
    "value": 372
  },
  {
    "source": "9.4",
    "target": "13.2",
    "value": 325.5
  },
  {
    "source": "9.4",
    "target": "14.1",
    "value": 261
  },
  {
    "source": "9.4",
    "target": "14.4",
    "value": 181
  },
  {
    "source": "9.4",
    "target": "15.2",
    "value": 262.5
  },
  {
    "source": "9.4",
    "target": "15.5",
    "value": 345.5
  },
  {
    "source": "9.4",
    "target": "16.4",
    "value": 106
  },
  {
    "source": "9.4",
    "target": "16.6",
    "value": 169.5
  },
  {
    "source": "9.4",
    "target": "17.11",
    "value": -3.5
  },
  {
    "source": "9.4",
    "target": "17.13",
    "value": 221
  },
  {
    "source": "9.5",
    "target": "1.3",
    "value": 279.5
  },
  {
    "source": "9.5",
    "target": "1.5",
    "value": 421.5
  },
  {
    "source": "9.5",
    "target": "2.2",
    "value": 162.5
  },
  {
    "source": "9.5",
    "target": "2.4",
    "value": 359
  },
  {
    "source": "9.5",
    "target": "3.4",
    "value": 212
  },
  {
    "source": "9.5",
    "target": "3.8",
    "value": 155
  },
  {
    "source": "9.5",
    "target": "4.1",
    "value": 159
  },
  {
    "source": "9.5",
    "target": "4.4",
    "value": 279
  },
  {
    "source": "9.5",
    "target": "5.4",
    "value": 165.5
  },
  {
    "source": "9.5",
    "target": "5.5",
    "value": 177.5
  },
  {
    "source": "9.5",
    "target": "6.5",
    "value": 250.5
  },
  {
    "source": "9.5",
    "target": "6.6",
    "value": 263
  },
  {
    "source": "9.5",
    "target": "7.2",
    "value": 70
  },
  {
    "source": "9.5",
    "target": "7.3",
    "value": 211
  },
  {
    "source": "9.5",
    "target": "8.4",
    "value": 296
  },
  {
    "source": "9.5",
    "target": "8.5",
    "value": 289
  },
  {
    "source": "9.5",
    "target": "9.4",
    "value": 271
  },
  {
    "source": "9.5",
    "target": "9.5",
    "value": 199.5
  },
  {
    "source": "9.5",
    "target": "10.1",
    "value": 316.5
  },
  {
    "source": "9.5",
    "target": "10.7",
    "value": 219.5
  },
  {
    "source": "9.5",
    "target": "11.1",
    "value": 210
  },
  {
    "source": "9.5",
    "target": "11.2",
    "value": 250
  },
  {
    "source": "9.5",
    "target": "12.1",
    "value": 329.5
  },
  {
    "source": "9.5",
    "target": "12.5",
    "value": 240.5
  },
  {
    "source": "9.5",
    "target": "13.1",
    "value": 371.5
  },
  {
    "source": "9.5",
    "target": "13.2",
    "value": 326.5
  },
  {
    "source": "9.5",
    "target": "14.1",
    "value": 259.5
  },
  {
    "source": "9.5",
    "target": "14.4",
    "value": 178.5
  },
  {
    "source": "9.5",
    "target": "15.2",
    "value": 260.5
  },
  {
    "source": "9.5",
    "target": "15.5",
    "value": 345
  },
  {
    "source": "9.5",
    "target": "16.4",
    "value": 107
  },
  {
    "source": "9.5",
    "target": "16.6",
    "value": 171
  },
  {
    "source": "9.5",
    "target": "17.11",
    "value": -4
  },
  {
    "source": "9.5",
    "target": "17.13",
    "value": 222
  },
  {
    "source": "10.1",
    "target": "1.3",
    "value": 282
  },
  {
    "source": "10.1",
    "target": "1.5",
    "value": 415
  },
  {
    "source": "10.1",
    "target": "2.2",
    "value": 165.5
  },
  {
    "source": "10.1",
    "target": "2.4",
    "value": 346.5
  },
  {
    "source": "10.1",
    "target": "3.4",
    "value": 215.5
  },
  {
    "source": "10.1",
    "target": "3.8",
    "value": 158
  },
  {
    "source": "10.1",
    "target": "4.1",
    "value": 159.5
  },
  {
    "source": "10.1",
    "target": "4.4",
    "value": 274
  },
  {
    "source": "10.1",
    "target": "5.4",
    "value": 163.5
  },
  {
    "source": "10.1",
    "target": "5.5",
    "value": 176
  },
  {
    "source": "10.1",
    "target": "6.5",
    "value": 242.5
  },
  {
    "source": "10.1",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "10.1",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "10.1",
    "target": "7.3",
    "value": 196
  },
  {
    "source": "10.1",
    "target": "8.4",
    "value": 278.5
  },
  {
    "source": "10.1",
    "target": "8.5",
    "value": 283
  },
  {
    "source": "10.1",
    "target": "9.4",
    "value": 253.5
  },
  {
    "source": "10.1",
    "target": "9.5",
    "value": 189.5
  },
  {
    "source": "10.1",
    "target": "10.1",
    "value": 311.5
  },
  {
    "source": "10.1",
    "target": "10.7",
    "value": 217.5
  },
  {
    "source": "10.1",
    "target": "11.1",
    "value": 204.5
  },
  {
    "source": "10.1",
    "target": "11.2",
    "value": 238.5
  },
  {
    "source": "10.1",
    "target": "12.1",
    "value": 311.5
  },
  {
    "source": "10.1",
    "target": "12.5",
    "value": 227
  },
  {
    "source": "10.1",
    "target": "13.1",
    "value": 363
  },
  {
    "source": "10.1",
    "target": "13.2",
    "value": 308.5
  },
  {
    "source": "10.1",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "10.1",
    "target": "14.4",
    "value": 173.5
  },
  {
    "source": "10.1",
    "target": "15.2",
    "value": 253
  },
  {
    "source": "10.1",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "10.1",
    "target": "16.4",
    "value": 105.5
  },
  {
    "source": "10.1",
    "target": "16.6",
    "value": 167
  },
  {
    "source": "10.1",
    "target": "17.11",
    "value": 0.5
  },
  {
    "source": "10.1",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "10.7",
    "target": "1.3",
    "value": 284
  },
  {
    "source": "10.7",
    "target": "1.5",
    "value": 418
  },
  {
    "source": "10.7",
    "target": "2.2",
    "value": 165.5
  },
  {
    "source": "10.7",
    "target": "2.4",
    "value": 347
  },
  {
    "source": "10.7",
    "target": "3.4",
    "value": 215
  },
  {
    "source": "10.7",
    "target": "3.8",
    "value": 159.5
  },
  {
    "source": "10.7",
    "target": "4.1",
    "value": 158.5
  },
  {
    "source": "10.7",
    "target": "4.4",
    "value": 277.5
  },
  {
    "source": "10.7",
    "target": "5.4",
    "value": 166
  },
  {
    "source": "10.7",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "10.7",
    "target": "6.5",
    "value": 243
  },
  {
    "source": "10.7",
    "target": "6.6",
    "value": 259
  },
  {
    "source": "10.7",
    "target": "7.2",
    "value": 60.5
  },
  {
    "source": "10.7",
    "target": "7.3",
    "value": 194.5
  },
  {
    "source": "10.7",
    "target": "8.4",
    "value": 277
  },
  {
    "source": "10.7",
    "target": "8.5",
    "value": 285.5
  },
  {
    "source": "10.7",
    "target": "9.4",
    "value": 252.5
  },
  {
    "source": "10.7",
    "target": "9.5",
    "value": 190.5
  },
  {
    "source": "10.7",
    "target": "10.1",
    "value": 316.5
  },
  {
    "source": "10.7",
    "target": "10.7",
    "value": 220.5
  },
  {
    "source": "10.7",
    "target": "11.1",
    "value": 208.5
  },
  {
    "source": "10.7",
    "target": "11.2",
    "value": 240.5
  },
  {
    "source": "10.7",
    "target": "12.1",
    "value": 310.5
  },
  {
    "source": "10.7",
    "target": "12.5",
    "value": 227
  },
  {
    "source": "10.7",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "10.7",
    "target": "13.2",
    "value": 307.5
  },
  {
    "source": "10.7",
    "target": "14.1",
    "value": 246.5
  },
  {
    "source": "10.7",
    "target": "14.4",
    "value": 174
  },
  {
    "source": "10.7",
    "target": "15.2",
    "value": 254.5
  },
  {
    "source": "10.7",
    "target": "15.5",
    "value": 331.5
  },
  {
    "source": "10.7",
    "target": "16.4",
    "value": 108
  },
  {
    "source": "10.7",
    "target": "16.6",
    "value": 171
  },
  {
    "source": "10.7",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "10.7",
    "target": "17.13",
    "value": 218.5
  },
  {
    "source": "11.1",
    "target": "1.3",
    "value": 283
  },
  {
    "source": "11.1",
    "target": "1.5",
    "value": 416.5
  },
  {
    "source": "11.1",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "11.1",
    "target": "2.4",
    "value": 345.5
  },
  {
    "source": "11.1",
    "target": "3.4",
    "value": 214.5
  },
  {
    "source": "11.1",
    "target": "3.8",
    "value": 158
  },
  {
    "source": "11.1",
    "target": "4.1",
    "value": 159.5
  },
  {
    "source": "11.1",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "11.1",
    "target": "5.4",
    "value": 163.5
  },
  {
    "source": "11.1",
    "target": "5.5",
    "value": 177
  },
  {
    "source": "11.1",
    "target": "6.5",
    "value": 242.5
  },
  {
    "source": "11.1",
    "target": "6.6",
    "value": 257.5
  },
  {
    "source": "11.1",
    "target": "7.2",
    "value": 61
  },
  {
    "source": "11.1",
    "target": "7.3",
    "value": 196.5
  },
  {
    "source": "11.1",
    "target": "8.4",
    "value": 279.5
  },
  {
    "source": "11.1",
    "target": "8.5",
    "value": 282.5
  },
  {
    "source": "11.1",
    "target": "9.4",
    "value": 255
  },
  {
    "source": "11.1",
    "target": "9.5",
    "value": 191
  },
  {
    "source": "11.1",
    "target": "10.1",
    "value": 314
  },
  {
    "source": "11.1",
    "target": "10.7",
    "value": 218.5
  },
  {
    "source": "11.1",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "11.1",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "11.1",
    "target": "12.1",
    "value": 313.5
  },
  {
    "source": "11.1",
    "target": "12.5",
    "value": 228
  },
  {
    "source": "11.1",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "11.1",
    "target": "13.2",
    "value": 311
  },
  {
    "source": "11.1",
    "target": "14.1",
    "value": 245.5
  },
  {
    "source": "11.1",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "11.1",
    "target": "15.2",
    "value": 254
  },
  {
    "source": "11.1",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "11.1",
    "target": "16.4",
    "value": 107
  },
  {
    "source": "11.1",
    "target": "16.6",
    "value": 166.5
  },
  {
    "source": "11.1",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "17.13",
    "value": 216.5
  },
  {
    "source": "11.2",
    "target": "1.3",
    "value": 277.5
  },
  {
    "source": "11.2",
    "target": "1.5",
    "value": 415.5
  },
  {
    "source": "11.2",
    "target": "2.2",
    "value": 161.5
  },
  {
    "source": "11.2",
    "target": "2.4",
    "value": 352.5
  },
  {
    "source": "11.2",
    "target": "3.4",
    "value": 213.5
  },
  {
    "source": "11.2",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "11.2",
    "target": "4.1",
    "value": 159.5
  },
  {
    "source": "11.2",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "11.2",
    "target": "5.4",
    "value": 165.5
  },
  {
    "source": "11.2",
    "target": "5.5",
    "value": 176.5
  },
  {
    "source": "11.2",
    "target": "6.5",
    "value": 246
  },
  {
    "source": "11.2",
    "target": "6.6",
    "value": 254.5
  },
  {
    "source": "11.2",
    "target": "7.2",
    "value": 69.5
  },
  {
    "source": "11.2",
    "target": "7.3",
    "value": 207.5
  },
  {
    "source": "11.2",
    "target": "8.4",
    "value": 292
  },
  {
    "source": "11.2",
    "target": "8.5",
    "value": 286.5
  },
  {
    "source": "11.2",
    "target": "9.4",
    "value": 266.5
  },
  {
    "source": "11.2",
    "target": "9.5",
    "value": 198.5
  },
  {
    "source": "11.2",
    "target": "10.1",
    "value": 315
  },
  {
    "source": "11.2",
    "target": "10.7",
    "value": 216.5
  },
  {
    "source": "11.2",
    "target": "11.1",
    "value": 208.5
  },
  {
    "source": "11.2",
    "target": "11.2",
    "value": 247
  },
  {
    "source": "11.2",
    "target": "12.1",
    "value": 323
  },
  {
    "source": "11.2",
    "target": "12.5",
    "value": 236.5
  },
  {
    "source": "11.2",
    "target": "13.1",
    "value": 368.5
  },
  {
    "source": "11.2",
    "target": "13.2",
    "value": 320
  },
  {
    "source": "11.2",
    "target": "14.1",
    "value": 255
  },
  {
    "source": "11.2",
    "target": "14.4",
    "value": 175.5
  },
  {
    "source": "11.2",
    "target": "15.2",
    "value": 255
  },
  {
    "source": "11.2",
    "target": "15.5",
    "value": 337.5
  },
  {
    "source": "11.2",
    "target": "16.4",
    "value": 106
  },
  {
    "source": "11.2",
    "target": "16.6",
    "value": 169.5
  },
  {
    "source": "11.2",
    "target": "17.11",
    "value": -3
  },
  {
    "source": "11.2",
    "target": "17.13",
    "value": 218.5
  },
  {
    "source": "12.1",
    "target": "1.3",
    "value": 281.5
  },
  {
    "source": "12.1",
    "target": "1.5",
    "value": 426.5
  },
  {
    "source": "12.1",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "12.1",
    "target": "2.4",
    "value": 373
  },
  {
    "source": "12.1",
    "target": "3.4",
    "value": 215.5
  },
  {
    "source": "12.1",
    "target": "3.8",
    "value": 157
  },
  {
    "source": "12.1",
    "target": "4.1",
    "value": 161
  },
  {
    "source": "12.1",
    "target": "4.4",
    "value": 280.5
  },
  {
    "source": "12.1",
    "target": "5.4",
    "value": 167.5
  },
  {
    "source": "12.1",
    "target": "5.5",
    "value": 180.5
  },
  {
    "source": "12.1",
    "target": "6.5",
    "value": 259.5
  },
  {
    "source": "12.1",
    "target": "6.6",
    "value": 275
  },
  {
    "source": "12.1",
    "target": "7.2",
    "value": 68.5
  },
  {
    "source": "12.1",
    "target": "7.3",
    "value": 211.5
  },
  {
    "source": "12.1",
    "target": "8.4",
    "value": 301
  },
  {
    "source": "12.1",
    "target": "8.5",
    "value": 291
  },
  {
    "source": "12.1",
    "target": "9.4",
    "value": 275
  },
  {
    "source": "12.1",
    "target": "9.5",
    "value": 205
  },
  {
    "source": "12.1",
    "target": "10.1",
    "value": 320
  },
  {
    "source": "12.1",
    "target": "10.7",
    "value": 220.5
  },
  {
    "source": "12.1",
    "target": "11.1",
    "value": 210
  },
  {
    "source": "12.1",
    "target": "11.2",
    "value": 250
  },
  {
    "source": "12.1",
    "target": "12.1",
    "value": 338.5
  },
  {
    "source": "12.1",
    "target": "12.5",
    "value": 246.5
  },
  {
    "source": "12.1",
    "target": "13.1",
    "value": 380.5
  },
  {
    "source": "12.1",
    "target": "13.2",
    "value": 333
  },
  {
    "source": "12.1",
    "target": "14.1",
    "value": 267
  },
  {
    "source": "12.1",
    "target": "14.4",
    "value": 187
  },
  {
    "source": "12.1",
    "target": "15.2",
    "value": 268
  },
  {
    "source": "12.1",
    "target": "15.5",
    "value": 355.5
  },
  {
    "source": "12.1",
    "target": "16.4",
    "value": 108.5
  },
  {
    "source": "12.1",
    "target": "16.6",
    "value": 171
  },
  {
    "source": "12.1",
    "target": "17.11",
    "value": -4.5
  },
  {
    "source": "12.1",
    "target": "17.13",
    "value": 224.5
  },
  {
    "source": "12.5",
    "target": "1.3",
    "value": 280
  },
  {
    "source": "12.5",
    "target": "1.5",
    "value": 419
  },
  {
    "source": "12.5",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "12.5",
    "target": "2.4",
    "value": 366
  },
  {
    "source": "12.5",
    "target": "3.4",
    "value": 211
  },
  {
    "source": "12.5",
    "target": "3.8",
    "value": 156
  },
  {
    "source": "12.5",
    "target": "4.1",
    "value": 158
  },
  {
    "source": "12.5",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "12.5",
    "target": "5.4",
    "value": 167
  },
  {
    "source": "12.5",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "12.5",
    "target": "6.5",
    "value": 255
  },
  {
    "source": "12.5",
    "target": "6.6",
    "value": 268.5
  },
  {
    "source": "12.5",
    "target": "7.2",
    "value": 68.5
  },
  {
    "source": "12.5",
    "target": "7.3",
    "value": 206.5
  },
  {
    "source": "12.5",
    "target": "8.4",
    "value": 293
  },
  {
    "source": "12.5",
    "target": "8.5",
    "value": 288
  },
  {
    "source": "12.5",
    "target": "9.4",
    "value": 268
  },
  {
    "source": "12.5",
    "target": "9.5",
    "value": 200.5
  },
  {
    "source": "12.5",
    "target": "10.1",
    "value": 315
  },
  {
    "source": "12.5",
    "target": "10.7",
    "value": 218
  },
  {
    "source": "12.5",
    "target": "11.1",
    "value": 206.5
  },
  {
    "source": "12.5",
    "target": "11.2",
    "value": 245.5
  },
  {
    "source": "12.5",
    "target": "12.1",
    "value": 328
  },
  {
    "source": "12.5",
    "target": "12.5",
    "value": 242.5
  },
  {
    "source": "12.5",
    "target": "13.1",
    "value": 374.5
  },
  {
    "source": "12.5",
    "target": "13.2",
    "value": 323.5
  },
  {
    "source": "12.5",
    "target": "14.1",
    "value": 263
  },
  {
    "source": "12.5",
    "target": "14.4",
    "value": 185
  },
  {
    "source": "12.5",
    "target": "15.2",
    "value": 266.5
  },
  {
    "source": "12.5",
    "target": "15.5",
    "value": 348.5
  },
  {
    "source": "12.5",
    "target": "16.4",
    "value": 107.5
  },
  {
    "source": "12.5",
    "target": "16.6",
    "value": 171
  },
  {
    "source": "12.5",
    "target": "17.11",
    "value": -4
  },
  {
    "source": "12.5",
    "target": "17.13",
    "value": 222.5
  },
  {
    "source": "13.1",
    "target": "1.3",
    "value": 286
  },
  {
    "source": "13.1",
    "target": "1.5",
    "value": 425
  },
  {
    "source": "13.1",
    "target": "2.2",
    "value": 165.5
  },
  {
    "source": "13.1",
    "target": "2.4",
    "value": 353.5
  },
  {
    "source": "13.1",
    "target": "3.4",
    "value": 222
  },
  {
    "source": "13.1",
    "target": "3.8",
    "value": 160
  },
  {
    "source": "13.1",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "13.1",
    "target": "4.4",
    "value": 279
  },
  {
    "source": "13.1",
    "target": "5.4",
    "value": 168
  },
  {
    "source": "13.1",
    "target": "5.5",
    "value": 180
  },
  {
    "source": "13.1",
    "target": "6.5",
    "value": 252.5
  },
  {
    "source": "13.1",
    "target": "6.6",
    "value": 268.5
  },
  {
    "source": "13.1",
    "target": "7.2",
    "value": 60
  },
  {
    "source": "13.1",
    "target": "7.3",
    "value": 201
  },
  {
    "source": "13.1",
    "target": "8.4",
    "value": 282.5
  },
  {
    "source": "13.1",
    "target": "8.5",
    "value": 285
  },
  {
    "source": "13.1",
    "target": "9.4",
    "value": 257.5
  },
  {
    "source": "13.1",
    "target": "9.5",
    "value": 192
  },
  {
    "source": "13.1",
    "target": "10.1",
    "value": 317
  },
  {
    "source": "13.1",
    "target": "10.7",
    "value": 221.5
  },
  {
    "source": "13.1",
    "target": "11.1",
    "value": 206.5
  },
  {
    "source": "13.1",
    "target": "11.2",
    "value": 241
  },
  {
    "source": "13.1",
    "target": "12.1",
    "value": 317.5
  },
  {
    "source": "13.1",
    "target": "12.5",
    "value": 231.5
  },
  {
    "source": "13.1",
    "target": "13.1",
    "value": 376.5
  },
  {
    "source": "13.1",
    "target": "13.2",
    "value": 307.5
  },
  {
    "source": "13.1",
    "target": "14.1",
    "value": 257
  },
  {
    "source": "13.1",
    "target": "14.4",
    "value": 182.5
  },
  {
    "source": "13.1",
    "target": "15.2",
    "value": 264
  },
  {
    "source": "13.1",
    "target": "15.5",
    "value": 344
  },
  {
    "source": "13.1",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "13.1",
    "target": "16.6",
    "value": 171
  },
  {
    "source": "13.1",
    "target": "17.11",
    "value": 4
  },
  {
    "source": "13.1",
    "target": "17.13",
    "value": 220.5
  },
  {
    "source": "13.2",
    "target": "1.3",
    "value": 272
  },
  {
    "source": "13.2",
    "target": "1.5",
    "value": 405.5
  },
  {
    "source": "13.2",
    "target": "2.2",
    "value": 160.5
  },
  {
    "source": "13.2",
    "target": "2.4",
    "value": 356
  },
  {
    "source": "13.2",
    "target": "3.4",
    "value": 203
  },
  {
    "source": "13.2",
    "target": "3.8",
    "value": 151.5
  },
  {
    "source": "13.2",
    "target": "4.1",
    "value": 155
  },
  {
    "source": "13.2",
    "target": "4.4",
    "value": 272.5
  },
  {
    "source": "13.2",
    "target": "5.4",
    "value": 161.5
  },
  {
    "source": "13.2",
    "target": "5.5",
    "value": 174
  },
  {
    "source": "13.2",
    "target": "6.5",
    "value": 250
  },
  {
    "source": "13.2",
    "target": "6.6",
    "value": 259.5
  },
  {
    "source": "13.2",
    "target": "7.2",
    "value": 68
  },
  {
    "source": "13.2",
    "target": "7.3",
    "value": 205.5
  },
  {
    "source": "13.2",
    "target": "8.4",
    "value": 292
  },
  {
    "source": "13.2",
    "target": "8.5",
    "value": 281
  },
  {
    "source": "13.2",
    "target": "9.4",
    "value": 268.5
  },
  {
    "source": "13.2",
    "target": "9.5",
    "value": 202
  },
  {
    "source": "13.2",
    "target": "10.1",
    "value": 309
  },
  {
    "source": "13.2",
    "target": "10.7",
    "value": 210.5
  },
  {
    "source": "13.2",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "13.2",
    "target": "11.2",
    "value": 245
  },
  {
    "source": "13.2",
    "target": "12.1",
    "value": 327
  },
  {
    "source": "13.2",
    "target": "12.5",
    "value": 241.5
  },
  {
    "source": "13.2",
    "target": "13.1",
    "value": 363.5
  },
  {
    "source": "13.2",
    "target": "13.2",
    "value": 324
  },
  {
    "source": "13.2",
    "target": "14.1",
    "value": 257.5
  },
  {
    "source": "13.2",
    "target": "14.4",
    "value": 178.5
  },
  {
    "source": "13.2",
    "target": "15.2",
    "value": 258.5
  },
  {
    "source": "13.2",
    "target": "15.5",
    "value": 340
  },
  {
    "source": "13.2",
    "target": "16.4",
    "value": 104.5
  },
  {
    "source": "13.2",
    "target": "16.6",
    "value": 167
  },
  {
    "source": "13.2",
    "target": "17.11",
    "value": -6
  },
  {
    "source": "13.2",
    "target": "17.13",
    "value": 218
  },
  {
    "source": "14.1",
    "target": "1.3",
    "value": 272.5
  },
  {
    "source": "14.1",
    "target": "1.5",
    "value": 410
  },
  {
    "source": "14.1",
    "target": "2.2",
    "value": 162
  },
  {
    "source": "14.1",
    "target": "2.4",
    "value": 353.5
  },
  {
    "source": "14.1",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "14.1",
    "target": "3.8",
    "value": 152
  },
  {
    "source": "14.1",
    "target": "4.1",
    "value": 154
  },
  {
    "source": "14.1",
    "target": "4.4",
    "value": 269.5
  },
  {
    "source": "14.1",
    "target": "5.4",
    "value": 162
  },
  {
    "source": "14.1",
    "target": "5.5",
    "value": 172
  },
  {
    "source": "14.1",
    "target": "6.5",
    "value": 252
  },
  {
    "source": "14.1",
    "target": "6.6",
    "value": 266.5
  },
  {
    "source": "14.1",
    "target": "7.2",
    "value": 61.5
  },
  {
    "source": "14.1",
    "target": "7.3",
    "value": 198.5
  },
  {
    "source": "14.1",
    "target": "8.4",
    "value": 283
  },
  {
    "source": "14.1",
    "target": "8.5",
    "value": 278
  },
  {
    "source": "14.1",
    "target": "9.4",
    "value": 257.5
  },
  {
    "source": "14.1",
    "target": "9.5",
    "value": 191.5
  },
  {
    "source": "14.1",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "14.1",
    "target": "10.7",
    "value": 211
  },
  {
    "source": "14.1",
    "target": "11.1",
    "value": 199.5
  },
  {
    "source": "14.1",
    "target": "11.2",
    "value": 236
  },
  {
    "source": "14.1",
    "target": "12.1",
    "value": 317.5
  },
  {
    "source": "14.1",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "14.1",
    "target": "13.1",
    "value": 368
  },
  {
    "source": "14.1",
    "target": "13.2",
    "value": 310.5
  },
  {
    "source": "14.1",
    "target": "14.1",
    "value": 257
  },
  {
    "source": "14.1",
    "target": "14.4",
    "value": 182
  },
  {
    "source": "14.1",
    "target": "15.2",
    "value": 264
  },
  {
    "source": "14.1",
    "target": "15.5",
    "value": 344
  },
  {
    "source": "14.1",
    "target": "16.4",
    "value": 104.5
  },
  {
    "source": "14.1",
    "target": "16.6",
    "value": 167
  },
  {
    "source": "14.1",
    "target": "17.11",
    "value": -2.5
  },
  {
    "source": "14.1",
    "target": "17.13",
    "value": 217
  },
  {
    "source": "14.4",
    "target": "1.3",
    "value": 272.5
  },
  {
    "source": "14.4",
    "target": "1.5",
    "value": 409.5
  },
  {
    "source": "14.4",
    "target": "2.2",
    "value": 164
  },
  {
    "source": "14.4",
    "target": "2.4",
    "value": 354
  },
  {
    "source": "14.4",
    "target": "3.4",
    "value": 210.5
  },
  {
    "source": "14.4",
    "target": "3.8",
    "value": 152
  },
  {
    "source": "14.4",
    "target": "4.1",
    "value": 155.5
  },
  {
    "source": "14.4",
    "target": "4.4",
    "value": 269.5
  },
  {
    "source": "14.4",
    "target": "5.4",
    "value": 162
  },
  {
    "source": "14.4",
    "target": "5.5",
    "value": 173
  },
  {
    "source": "14.4",
    "target": "6.5",
    "value": 252
  },
  {
    "source": "14.4",
    "target": "6.6",
    "value": 265
  },
  {
    "source": "14.4",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "14.4",
    "target": "7.3",
    "value": 198.5
  },
  {
    "source": "14.4",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "14.4",
    "target": "8.5",
    "value": 279.5
  },
  {
    "source": "14.4",
    "target": "9.4",
    "value": 259
  },
  {
    "source": "14.4",
    "target": "9.5",
    "value": 194.5
  },
  {
    "source": "14.4",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "14.4",
    "target": "10.7",
    "value": 211
  },
  {
    "source": "14.4",
    "target": "11.1",
    "value": 202
  },
  {
    "source": "14.4",
    "target": "11.2",
    "value": 238
  },
  {
    "source": "14.4",
    "target": "12.1",
    "value": 318.5
  },
  {
    "source": "14.4",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "14.4",
    "target": "13.1",
    "value": 367
  },
  {
    "source": "14.4",
    "target": "13.2",
    "value": 311
  },
  {
    "source": "14.4",
    "target": "14.1",
    "value": 256.5
  },
  {
    "source": "14.4",
    "target": "14.4",
    "value": 183.5
  },
  {
    "source": "14.4",
    "target": "15.2",
    "value": 264
  },
  {
    "source": "14.4",
    "target": "15.5",
    "value": 342
  },
  {
    "source": "14.4",
    "target": "16.4",
    "value": 103.5
  },
  {
    "source": "14.4",
    "target": "16.6",
    "value": 166.5
  },
  {
    "source": "14.4",
    "target": "17.11",
    "value": -2.5
  },
  {
    "source": "14.4",
    "target": "17.13",
    "value": 215.5
  },
  {
    "source": "15.2",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "15.2",
    "target": "1.5",
    "value": 411.5
  },
  {
    "source": "15.2",
    "target": "2.2",
    "value": 162
  },
  {
    "source": "15.2",
    "target": "2.4",
    "value": 355
  },
  {
    "source": "15.2",
    "target": "3.4",
    "value": 209
  },
  {
    "source": "15.2",
    "target": "3.8",
    "value": 154
  },
  {
    "source": "15.2",
    "target": "4.1",
    "value": 154.5
  },
  {
    "source": "15.2",
    "target": "4.4",
    "value": 269.5
  },
  {
    "source": "15.2",
    "target": "5.4",
    "value": 160.5
  },
  {
    "source": "15.2",
    "target": "5.5",
    "value": 173.5
  },
  {
    "source": "15.2",
    "target": "6.5",
    "value": 252
  },
  {
    "source": "15.2",
    "target": "6.6",
    "value": 269.5
  },
  {
    "source": "15.2",
    "target": "7.2",
    "value": 57.5
  },
  {
    "source": "15.2",
    "target": "7.3",
    "value": 196
  },
  {
    "source": "15.2",
    "target": "8.4",
    "value": 278.5
  },
  {
    "source": "15.2",
    "target": "8.5",
    "value": 277.5
  },
  {
    "source": "15.2",
    "target": "9.4",
    "value": 252.5
  },
  {
    "source": "15.2",
    "target": "9.5",
    "value": 191
  },
  {
    "source": "15.2",
    "target": "10.1",
    "value": 305.5
  },
  {
    "source": "15.2",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "15.2",
    "target": "11.1",
    "value": 200
  },
  {
    "source": "15.2",
    "target": "11.2",
    "value": 235.5
  },
  {
    "source": "15.2",
    "target": "12.1",
    "value": 315
  },
  {
    "source": "15.2",
    "target": "12.5",
    "value": 231.5
  },
  {
    "source": "15.2",
    "target": "13.1",
    "value": 368
  },
  {
    "source": "15.2",
    "target": "13.2",
    "value": 308
  },
  {
    "source": "15.2",
    "target": "14.1",
    "value": 253
  },
  {
    "source": "15.2",
    "target": "14.4",
    "value": 182
  },
  {
    "source": "15.2",
    "target": "15.2",
    "value": 263.5
  },
  {
    "source": "15.2",
    "target": "15.5",
    "value": 341.5
  },
  {
    "source": "15.2",
    "target": "16.4",
    "value": 103
  },
  {
    "source": "15.2",
    "target": "16.6",
    "value": 165.5
  },
  {
    "source": "15.2",
    "target": "17.11",
    "value": -0.5
  },
  {
    "source": "15.2",
    "target": "17.13",
    "value": 212
  },
  {
    "source": "15.5",
    "target": "1.3",
    "value": 273.5
  },
  {
    "source": "15.5",
    "target": "1.5",
    "value": 411.5
  },
  {
    "source": "15.5",
    "target": "2.2",
    "value": 163.5
  },
  {
    "source": "15.5",
    "target": "2.4",
    "value": 358.5
  },
  {
    "source": "15.5",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "15.5",
    "target": "3.8",
    "value": 153
  },
  {
    "source": "15.5",
    "target": "4.1",
    "value": 154.5
  },
  {
    "source": "15.5",
    "target": "4.4",
    "value": 269
  },
  {
    "source": "15.5",
    "target": "5.4",
    "value": 161
  },
  {
    "source": "15.5",
    "target": "5.5",
    "value": 172.5
  },
  {
    "source": "15.5",
    "target": "6.5",
    "value": 252.5
  },
  {
    "source": "15.5",
    "target": "6.6",
    "value": 271.5
  },
  {
    "source": "15.5",
    "target": "7.2",
    "value": 58.5
  },
  {
    "source": "15.5",
    "target": "7.3",
    "value": 196
  },
  {
    "source": "15.5",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "15.5",
    "target": "8.5",
    "value": 278
  },
  {
    "source": "15.5",
    "target": "9.4",
    "value": 255
  },
  {
    "source": "15.5",
    "target": "9.5",
    "value": 191.5
  },
  {
    "source": "15.5",
    "target": "10.1",
    "value": 305.5
  },
  {
    "source": "15.5",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "15.5",
    "target": "11.1",
    "value": 200
  },
  {
    "source": "15.5",
    "target": "11.2",
    "value": 235.5
  },
  {
    "source": "15.5",
    "target": "12.1",
    "value": 318.5
  },
  {
    "source": "15.5",
    "target": "12.5",
    "value": 230.5
  },
  {
    "source": "15.5",
    "target": "13.1",
    "value": 367.5
  },
  {
    "source": "15.5",
    "target": "13.2",
    "value": 311.5
  },
  {
    "source": "15.5",
    "target": "14.1",
    "value": 254.5
  },
  {
    "source": "15.5",
    "target": "14.4",
    "value": 180.5
  },
  {
    "source": "15.5",
    "target": "15.2",
    "value": 261.5
  },
  {
    "source": "15.5",
    "target": "15.5",
    "value": 346
  },
  {
    "source": "15.5",
    "target": "16.4",
    "value": 104
  },
  {
    "source": "15.5",
    "target": "16.6",
    "value": 166
  },
  {
    "source": "15.5",
    "target": "17.11",
    "value": -3
  },
  {
    "source": "15.5",
    "target": "17.13",
    "value": 214.5
  },
  {
    "source": "16.4",
    "target": "1.3",
    "value": 287
  },
  {
    "source": "16.4",
    "target": "1.5",
    "value": 419.5
  },
  {
    "source": "16.4",
    "target": "2.2",
    "value": 170
  },
  {
    "source": "16.4",
    "target": "2.4",
    "value": 353.5
  },
  {
    "source": "16.4",
    "target": "3.4",
    "value": 218.5
  },
  {
    "source": "16.4",
    "target": "3.8",
    "value": 161
  },
  {
    "source": "16.4",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "16.4",
    "target": "4.4",
    "value": 277
  },
  {
    "source": "16.4",
    "target": "5.4",
    "value": 168.5
  },
  {
    "source": "16.4",
    "target": "5.5",
    "value": 181
  },
  {
    "source": "16.4",
    "target": "6.5",
    "value": 247.5
  },
  {
    "source": "16.4",
    "target": "6.6",
    "value": 261
  },
  {
    "source": "16.4",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "16.4",
    "target": "7.3",
    "value": 195.5
  },
  {
    "source": "16.4",
    "target": "8.4",
    "value": 279.5
  },
  {
    "source": "16.4",
    "target": "8.5",
    "value": 286
  },
  {
    "source": "16.4",
    "target": "9.4",
    "value": 256
  },
  {
    "source": "16.4",
    "target": "9.5",
    "value": 193.5
  },
  {
    "source": "16.4",
    "target": "10.1",
    "value": 314
  },
  {
    "source": "16.4",
    "target": "10.7",
    "value": 223.5
  },
  {
    "source": "16.4",
    "target": "11.1",
    "value": 203.5
  },
  {
    "source": "16.4",
    "target": "11.2",
    "value": 237
  },
  {
    "source": "16.4",
    "target": "12.1",
    "value": 317
  },
  {
    "source": "16.4",
    "target": "12.5",
    "value": 230.5
  },
  {
    "source": "16.4",
    "target": "13.1",
    "value": 369
  },
  {
    "source": "16.4",
    "target": "13.2",
    "value": 308.5
  },
  {
    "source": "16.4",
    "target": "14.1",
    "value": 251.5
  },
  {
    "source": "16.4",
    "target": "14.4",
    "value": 178.5
  },
  {
    "source": "16.4",
    "target": "15.2",
    "value": 256.5
  },
  {
    "source": "16.4",
    "target": "15.5",
    "value": 336.5
  },
  {
    "source": "16.4",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "16.4",
    "target": "16.6",
    "value": 169.5
  },
  {
    "source": "16.4",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "17.13",
    "value": 220.5
  },
  {
    "source": "16.6",
    "target": "1.3",
    "value": 296
  },
  {
    "source": "16.6",
    "target": "1.5",
    "value": 436
  },
  {
    "source": "16.6",
    "target": "2.2",
    "value": 176
  },
  {
    "source": "16.6",
    "target": "2.4",
    "value": 372.5
  },
  {
    "source": "16.6",
    "target": "3.4",
    "value": 228
  },
  {
    "source": "16.6",
    "target": "3.8",
    "value": 166
  },
  {
    "source": "16.6",
    "target": "4.1",
    "value": 168.5
  },
  {
    "source": "16.6",
    "target": "4.4",
    "value": 287.5
  },
  {
    "source": "16.6",
    "target": "5.4",
    "value": 174.5
  },
  {
    "source": "16.6",
    "target": "5.5",
    "value": 183.5
  },
  {
    "source": "16.6",
    "target": "6.5",
    "value": 258.5
  },
  {
    "source": "16.6",
    "target": "6.6",
    "value": 275
  },
  {
    "source": "16.6",
    "target": "7.2",
    "value": 66
  },
  {
    "source": "16.6",
    "target": "7.3",
    "value": 204.5
  },
  {
    "source": "16.6",
    "target": "8.4",
    "value": 293
  },
  {
    "source": "16.6",
    "target": "8.5",
    "value": 299.5
  },
  {
    "source": "16.6",
    "target": "9.4",
    "value": 264
  },
  {
    "source": "16.6",
    "target": "9.5",
    "value": 197.5
  },
  {
    "source": "16.6",
    "target": "10.1",
    "value": 327
  },
  {
    "source": "16.6",
    "target": "10.7",
    "value": 229
  },
  {
    "source": "16.6",
    "target": "11.1",
    "value": 212
  },
  {
    "source": "16.6",
    "target": "11.2",
    "value": 246.5
  },
  {
    "source": "16.6",
    "target": "12.1",
    "value": 328
  },
  {
    "source": "16.6",
    "target": "12.5",
    "value": 240
  },
  {
    "source": "16.6",
    "target": "13.1",
    "value": 384.5
  },
  {
    "source": "16.6",
    "target": "13.2",
    "value": 321.5
  },
  {
    "source": "16.6",
    "target": "14.1",
    "value": 264
  },
  {
    "source": "16.6",
    "target": "14.4",
    "value": 186
  },
  {
    "source": "16.6",
    "target": "15.2",
    "value": 268
  },
  {
    "source": "16.6",
    "target": "15.5",
    "value": 352.5
  },
  {
    "source": "16.6",
    "target": "16.4",
    "value": 112
  },
  {
    "source": "16.6",
    "target": "16.6",
    "value": 179.5
  },
  {
    "source": "16.6",
    "target": "17.11",
    "value": 1.5
  },
  {
    "source": "16.6",
    "target": "17.13",
    "value": 228
  },
  {
    "source": "17.11",
    "target": "1.3",
    "value": 269.5
  },
  {
    "source": "17.11",
    "target": "1.5",
    "value": 401
  },
  {
    "source": "17.11",
    "target": "2.2",
    "value": 158.5
  },
  {
    "source": "17.11",
    "target": "2.4",
    "value": 336.5
  },
  {
    "source": "17.11",
    "target": "3.4",
    "value": 207
  },
  {
    "source": "17.11",
    "target": "3.8",
    "value": 150.5
  },
  {
    "source": "17.11",
    "target": "4.1",
    "value": 153.5
  },
  {
    "source": "17.11",
    "target": "4.4",
    "value": 263
  },
  {
    "source": "17.11",
    "target": "5.4",
    "value": 158.5
  },
  {
    "source": "17.11",
    "target": "5.5",
    "value": 170.5
  },
  {
    "source": "17.11",
    "target": "6.5",
    "value": 236
  },
  {
    "source": "17.11",
    "target": "6.6",
    "value": 249
  },
  {
    "source": "17.11",
    "target": "7.2",
    "value": 62.5
  },
  {
    "source": "17.11",
    "target": "7.3",
    "value": 190.5
  },
  {
    "source": "17.11",
    "target": "8.4",
    "value": 265.5
  },
  {
    "source": "17.11",
    "target": "8.5",
    "value": 273.5
  },
  {
    "source": "17.11",
    "target": "9.4",
    "value": 245.5
  },
  {
    "source": "17.11",
    "target": "9.5",
    "value": 183
  },
  {
    "source": "17.11",
    "target": "10.1",
    "value": 298
  },
  {
    "source": "17.11",
    "target": "10.7",
    "value": 212.5
  },
  {
    "source": "17.11",
    "target": "11.1",
    "value": 195.5
  },
  {
    "source": "17.11",
    "target": "11.2",
    "value": 227.5
  },
  {
    "source": "17.11",
    "target": "12.1",
    "value": 300.5
  },
  {
    "source": "17.11",
    "target": "12.5",
    "value": 219.5
  },
  {
    "source": "17.11",
    "target": "13.1",
    "value": 351
  },
  {
    "source": "17.11",
    "target": "13.2",
    "value": 294
  },
  {
    "source": "17.11",
    "target": "14.1",
    "value": 241
  },
  {
    "source": "17.11",
    "target": "14.4",
    "value": 171
  },
  {
    "source": "17.11",
    "target": "15.2",
    "value": 247.5
  },
  {
    "source": "17.11",
    "target": "15.5",
    "value": 321
  },
  {
    "source": "17.11",
    "target": "16.4",
    "value": 104
  },
  {
    "source": "17.11",
    "target": "16.6",
    "value": 162.5
  },
  {
    "source": "17.11",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "17.11",
    "target": "17.13",
    "value": 210
  },
  {
    "source": "17.13",
    "target": "1.3",
    "value": 275.5
  },
  {
    "source": "17.13",
    "target": "1.5",
    "value": 409
  },
  {
    "source": "17.13",
    "target": "2.2",
    "value": 161.5
  },
  {
    "source": "17.13",
    "target": "2.4",
    "value": 346.5
  },
  {
    "source": "17.13",
    "target": "3.4",
    "value": 210.5
  },
  {
    "source": "17.13",
    "target": "3.8",
    "value": 154
  },
  {
    "source": "17.13",
    "target": "4.1",
    "value": 156
  },
  {
    "source": "17.13",
    "target": "4.4",
    "value": 271.5
  },
  {
    "source": "17.13",
    "target": "5.4",
    "value": 161.5
  },
  {
    "source": "17.13",
    "target": "5.5",
    "value": 174
  },
  {
    "source": "17.13",
    "target": "6.5",
    "value": 242.5
  },
  {
    "source": "17.13",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "17.13",
    "target": "7.2",
    "value": 62.5
  },
  {
    "source": "17.13",
    "target": "7.3",
    "value": 195
  },
  {
    "source": "17.13",
    "target": "8.4",
    "value": 281.5
  },
  {
    "source": "17.13",
    "target": "8.5",
    "value": 279.5
  },
  {
    "source": "17.13",
    "target": "9.4",
    "value": 259.5
  },
  {
    "source": "17.13",
    "target": "9.5",
    "value": 195
  },
  {
    "source": "17.13",
    "target": "10.1",
    "value": 309.5
  },
  {
    "source": "17.13",
    "target": "10.7",
    "value": 214
  },
  {
    "source": "17.13",
    "target": "11.1",
    "value": 204.5
  },
  {
    "source": "17.13",
    "target": "11.2",
    "value": 238
  },
  {
    "source": "17.13",
    "target": "12.1",
    "value": 313
  },
  {
    "source": "17.13",
    "target": "12.5",
    "value": 228.5
  },
  {
    "source": "17.13",
    "target": "13.1",
    "value": 362.5
  },
  {
    "source": "17.13",
    "target": "13.2",
    "value": 310
  },
  {
    "source": "17.13",
    "target": "14.1",
    "value": 248.5
  },
  {
    "source": "17.13",
    "target": "14.4",
    "value": 175.5
  },
  {
    "source": "17.13",
    "target": "15.2",
    "value": 255
  },
  {
    "source": "17.13",
    "target": "15.5",
    "value": 332
  },
  {
    "source": "17.13",
    "target": "16.4",
    "value": 107
  },
  {
    "source": "17.13",
    "target": "16.6",
    "value": 166
  },
  {
    "source": "17.13",
    "target": "17.11",
    "value": 0.5
  },
  {
    "source": "17.13",
    "target": "17.13",
    "value": 217.5
  }
]


var connections3orderInfluenced=[
  {
    "source": "1.3",
    "target": "1.3",
    "value": 287.5
  },
  {
    "source": "1.3",
    "target": "1.5",
    "value": 420
  },
  {
    "source": "1.3",
    "target": "2.2",
    "value": 163.5
  },
  {
    "source": "1.3",
    "target": "2.4",
    "value": 346.5
  },
  {
    "source": "1.3",
    "target": "3.4",
    "value": 211
  },
  {
    "source": "1.3",
    "target": "3.8",
    "value": 158.5
  },
  {
    "source": "1.3",
    "target": "4.1",
    "value": 168
  },
  {
    "source": "1.3",
    "target": "4.4",
    "value": 282.5
  },
  {
    "source": "1.3",
    "target": "5.4",
    "value": 175.5
  },
  {
    "source": "1.3",
    "target": "5.5",
    "value": 193.5
  },
  {
    "source": "1.3",
    "target": "6.5",
    "value": 247
  },
  {
    "source": "1.3",
    "target": "6.6",
    "value": 258.5
  },
  {
    "source": "1.3",
    "target": "7.2",
    "value": 64.5
  },
  {
    "source": "1.3",
    "target": "7.3",
    "value": 196
  },
  {
    "source": "1.3",
    "target": "8.4",
    "value": 289
  },
  {
    "source": "1.3",
    "target": "8.5",
    "value": 294
  },
  {
    "source": "1.3",
    "target": "9.4",
    "value": 258
  },
  {
    "source": "1.3",
    "target": "9.5",
    "value": 196.5
  },
  {
    "source": "1.3",
    "target": "10.1",
    "value": 314.5
  },
  {
    "source": "1.3",
    "target": "10.7",
    "value": 223.5
  },
  {
    "source": "1.3",
    "target": "11.1",
    "value": 211
  },
  {
    "source": "1.3",
    "target": "11.2",
    "value": 240
  },
  {
    "source": "1.3",
    "target": "12.1",
    "value": 319.5
  },
  {
    "source": "1.3",
    "target": "12.5",
    "value": 234.5
  },
  {
    "source": "1.3",
    "target": "13.1",
    "value": 371.5
  },
  {
    "source": "1.3",
    "target": "13.2",
    "value": 305
  },
  {
    "source": "1.3",
    "target": "14.1",
    "value": 247
  },
  {
    "source": "1.3",
    "target": "14.4",
    "value": 174
  },
  {
    "source": "1.3",
    "target": "15.2",
    "value": 254.5
  },
  {
    "source": "1.3",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "1.3",
    "target": "16.4",
    "value": 119
  },
  {
    "source": "1.3",
    "target": "16.6",
    "value": 188.5
  },
  {
    "source": "1.3",
    "target": "17.11",
    "value": -2.5
  },
  {
    "source": "1.3",
    "target": "17.13",
    "value": 216
  },
  {
    "source": "1.5",
    "target": "1.3",
    "value": 292
  },
  {
    "source": "1.5",
    "target": "1.5",
    "value": 424
  },
  {
    "source": "1.5",
    "target": "2.2",
    "value": 167.5
  },
  {
    "source": "1.5",
    "target": "2.4",
    "value": 354.5
  },
  {
    "source": "1.5",
    "target": "3.4",
    "value": 211
  },
  {
    "source": "1.5",
    "target": "3.8",
    "value": 161.5
  },
  {
    "source": "1.5",
    "target": "4.1",
    "value": 169.5
  },
  {
    "source": "1.5",
    "target": "4.4",
    "value": 287
  },
  {
    "source": "1.5",
    "target": "5.4",
    "value": 181
  },
  {
    "source": "1.5",
    "target": "5.5",
    "value": 197.5
  },
  {
    "source": "1.5",
    "target": "6.5",
    "value": 251
  },
  {
    "source": "1.5",
    "target": "6.6",
    "value": 261.5
  },
  {
    "source": "1.5",
    "target": "7.2",
    "value": 70.5
  },
  {
    "source": "1.5",
    "target": "7.3",
    "value": 204.5
  },
  {
    "source": "1.5",
    "target": "8.4",
    "value": 298.5
  },
  {
    "source": "1.5",
    "target": "8.5",
    "value": 297.5
  },
  {
    "source": "1.5",
    "target": "9.4",
    "value": 266
  },
  {
    "source": "1.5",
    "target": "9.5",
    "value": 205.5
  },
  {
    "source": "1.5",
    "target": "10.1",
    "value": 314.5
  },
  {
    "source": "1.5",
    "target": "10.7",
    "value": 224.5
  },
  {
    "source": "1.5",
    "target": "11.1",
    "value": 211.5
  },
  {
    "source": "1.5",
    "target": "11.2",
    "value": 245
  },
  {
    "source": "1.5",
    "target": "12.1",
    "value": 331.5
  },
  {
    "source": "1.5",
    "target": "12.5",
    "value": 240.5
  },
  {
    "source": "1.5",
    "target": "13.1",
    "value": 377.5
  },
  {
    "source": "1.5",
    "target": "13.2",
    "value": 305.5
  },
  {
    "source": "1.5",
    "target": "14.1",
    "value": 251.5
  },
  {
    "source": "1.5",
    "target": "14.4",
    "value": 178
  },
  {
    "source": "1.5",
    "target": "15.2",
    "value": 258
  },
  {
    "source": "1.5",
    "target": "15.5",
    "value": 336
  },
  {
    "source": "1.5",
    "target": "16.4",
    "value": 118.5
  },
  {
    "source": "1.5",
    "target": "16.6",
    "value": 195.5
  },
  {
    "source": "1.5",
    "target": "17.11",
    "value": -4
  },
  {
    "source": "1.5",
    "target": "17.13",
    "value": 216.5
  },
  {
    "source": "2.2",
    "target": "1.3",
    "value": 281.5
  },
  {
    "source": "2.2",
    "target": "1.5",
    "value": 413.5
  },
  {
    "source": "2.2",
    "target": "2.2",
    "value": 161.5
  },
  {
    "source": "2.2",
    "target": "2.4",
    "value": 347.5
  },
  {
    "source": "2.2",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "2.2",
    "target": "3.8",
    "value": 157
  },
  {
    "source": "2.2",
    "target": "4.1",
    "value": 160.5
  },
  {
    "source": "2.2",
    "target": "4.4",
    "value": 275.5
  },
  {
    "source": "2.2",
    "target": "5.4",
    "value": 170
  },
  {
    "source": "2.2",
    "target": "5.5",
    "value": 184.5
  },
  {
    "source": "2.2",
    "target": "6.5",
    "value": 246
  },
  {
    "source": "2.2",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "2.2",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "2.2",
    "target": "7.3",
    "value": 194.5
  },
  {
    "source": "2.2",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "2.2",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "2.2",
    "target": "9.4",
    "value": 254
  },
  {
    "source": "2.2",
    "target": "9.5",
    "value": 191
  },
  {
    "source": "2.2",
    "target": "10.1",
    "value": 309.5
  },
  {
    "source": "2.2",
    "target": "10.7",
    "value": 216.5
  },
  {
    "source": "2.2",
    "target": "11.1",
    "value": 204.5
  },
  {
    "source": "2.2",
    "target": "11.2",
    "value": 235.5
  },
  {
    "source": "2.2",
    "target": "12.1",
    "value": 316.5
  },
  {
    "source": "2.2",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "2.2",
    "target": "13.1",
    "value": 362.5
  },
  {
    "source": "2.2",
    "target": "13.2",
    "value": 305
  },
  {
    "source": "2.2",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "2.2",
    "target": "14.4",
    "value": 177
  },
  {
    "source": "2.2",
    "target": "15.2",
    "value": 253
  },
  {
    "source": "2.2",
    "target": "15.5",
    "value": 332.5
  },
  {
    "source": "2.2",
    "target": "16.4",
    "value": 113.5
  },
  {
    "source": "2.2",
    "target": "16.6",
    "value": 180
  },
  {
    "source": "2.2",
    "target": "17.11",
    "value": -2
  },
  {
    "source": "2.2",
    "target": "17.13",
    "value": 213.5
  },
  {
    "source": "2.4",
    "target": "1.3",
    "value": 279
  },
  {
    "source": "2.4",
    "target": "1.5",
    "value": 414
  },
  {
    "source": "2.4",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "2.4",
    "target": "2.4",
    "value": 363.5
  },
  {
    "source": "2.4",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "2.4",
    "target": "3.8",
    "value": 153.5
  },
  {
    "source": "2.4",
    "target": "4.1",
    "value": 158.5
  },
  {
    "source": "2.4",
    "target": "4.4",
    "value": 279
  },
  {
    "source": "2.4",
    "target": "5.4",
    "value": 165
  },
  {
    "source": "2.4",
    "target": "5.5",
    "value": 182
  },
  {
    "source": "2.4",
    "target": "6.5",
    "value": 261.5
  },
  {
    "source": "2.4",
    "target": "6.6",
    "value": 264
  },
  {
    "source": "2.4",
    "target": "7.2",
    "value": 67
  },
  {
    "source": "2.4",
    "target": "7.3",
    "value": 207
  },
  {
    "source": "2.4",
    "target": "8.4",
    "value": 300.5
  },
  {
    "source": "2.4",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "2.4",
    "target": "9.4",
    "value": 269.5
  },
  {
    "source": "2.4",
    "target": "9.5",
    "value": 204.5
  },
  {
    "source": "2.4",
    "target": "10.1",
    "value": 307.5
  },
  {
    "source": "2.4",
    "target": "10.7",
    "value": 215
  },
  {
    "source": "2.4",
    "target": "11.1",
    "value": 202
  },
  {
    "source": "2.4",
    "target": "11.2",
    "value": 243.5
  },
  {
    "source": "2.4",
    "target": "12.1",
    "value": 339.5
  },
  {
    "source": "2.4",
    "target": "12.5",
    "value": 249
  },
  {
    "source": "2.4",
    "target": "13.1",
    "value": 367.5
  },
  {
    "source": "2.4",
    "target": "13.2",
    "value": 317.5
  },
  {
    "source": "2.4",
    "target": "14.1",
    "value": 256.5
  },
  {
    "source": "2.4",
    "target": "14.4",
    "value": 184
  },
  {
    "source": "2.4",
    "target": "15.2",
    "value": 263
  },
  {
    "source": "2.4",
    "target": "15.5",
    "value": 344.5
  },
  {
    "source": "2.4",
    "target": "16.4",
    "value": 114
  },
  {
    "source": "2.4",
    "target": "16.6",
    "value": 193.5
  },
  {
    "source": "2.4",
    "target": "17.11",
    "value": -7
  },
  {
    "source": "2.4",
    "target": "17.13",
    "value": 215.5
  },
  {
    "source": "3.4",
    "target": "1.3",
    "value": 284.5
  },
  {
    "source": "3.4",
    "target": "1.5",
    "value": 417
  },
  {
    "source": "3.4",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "3.4",
    "target": "2.4",
    "value": 344
  },
  {
    "source": "3.4",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "3.4",
    "target": "3.8",
    "value": 159
  },
  {
    "source": "3.4",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "3.4",
    "target": "4.4",
    "value": 278.5
  },
  {
    "source": "3.4",
    "target": "5.4",
    "value": 177.5
  },
  {
    "source": "3.4",
    "target": "5.5",
    "value": 192
  },
  {
    "source": "3.4",
    "target": "6.5",
    "value": 243
  },
  {
    "source": "3.4",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "3.4",
    "target": "7.2",
    "value": 64
  },
  {
    "source": "3.4",
    "target": "7.3",
    "value": 196.5
  },
  {
    "source": "3.4",
    "target": "8.4",
    "value": 286
  },
  {
    "source": "3.4",
    "target": "8.5",
    "value": 290
  },
  {
    "source": "3.4",
    "target": "9.4",
    "value": 254.5
  },
  {
    "source": "3.4",
    "target": "9.5",
    "value": 193
  },
  {
    "source": "3.4",
    "target": "10.1",
    "value": 312
  },
  {
    "source": "3.4",
    "target": "10.7",
    "value": 218.5
  },
  {
    "source": "3.4",
    "target": "11.1",
    "value": 206.5
  },
  {
    "source": "3.4",
    "target": "11.2",
    "value": 240
  },
  {
    "source": "3.4",
    "target": "12.1",
    "value": 317.5
  },
  {
    "source": "3.4",
    "target": "12.5",
    "value": 229.5
  },
  {
    "source": "3.4",
    "target": "13.1",
    "value": 371.5
  },
  {
    "source": "3.4",
    "target": "13.2",
    "value": 300
  },
  {
    "source": "3.4",
    "target": "14.1",
    "value": 247
  },
  {
    "source": "3.4",
    "target": "14.4",
    "value": 176
  },
  {
    "source": "3.4",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "3.4",
    "target": "15.5",
    "value": 331.5
  },
  {
    "source": "3.4",
    "target": "16.4",
    "value": 114.5
  },
  {
    "source": "3.4",
    "target": "16.6",
    "value": 184.5
  },
  {
    "source": "3.4",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "3.4",
    "target": "17.13",
    "value": 215
  },
  {
    "source": "3.8",
    "target": "1.3",
    "value": 282
  },
  {
    "source": "3.8",
    "target": "1.5",
    "value": 414
  },
  {
    "source": "3.8",
    "target": "2.2",
    "value": 161
  },
  {
    "source": "3.8",
    "target": "2.4",
    "value": 345
  },
  {
    "source": "3.8",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "3.8",
    "target": "3.8",
    "value": 156.5
  },
  {
    "source": "3.8",
    "target": "4.1",
    "value": 162.5
  },
  {
    "source": "3.8",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "3.8",
    "target": "5.4",
    "value": 171.5
  },
  {
    "source": "3.8",
    "target": "5.5",
    "value": 186
  },
  {
    "source": "3.8",
    "target": "6.5",
    "value": 244.5
  },
  {
    "source": "3.8",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "3.8",
    "target": "7.2",
    "value": 63
  },
  {
    "source": "3.8",
    "target": "7.3",
    "value": 193
  },
  {
    "source": "3.8",
    "target": "8.4",
    "value": 282
  },
  {
    "source": "3.8",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "3.8",
    "target": "9.4",
    "value": 254
  },
  {
    "source": "3.8",
    "target": "9.5",
    "value": 191.5
  },
  {
    "source": "3.8",
    "target": "10.1",
    "value": 310
  },
  {
    "source": "3.8",
    "target": "10.7",
    "value": 218.5
  },
  {
    "source": "3.8",
    "target": "11.1",
    "value": 205.5
  },
  {
    "source": "3.8",
    "target": "11.2",
    "value": 236.5
  },
  {
    "source": "3.8",
    "target": "12.1",
    "value": 314.5
  },
  {
    "source": "3.8",
    "target": "12.5",
    "value": 230
  },
  {
    "source": "3.8",
    "target": "13.1",
    "value": 365
  },
  {
    "source": "3.8",
    "target": "13.2",
    "value": 304
  },
  {
    "source": "3.8",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "3.8",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "3.8",
    "target": "15.2",
    "value": 253
  },
  {
    "source": "3.8",
    "target": "15.5",
    "value": 330
  },
  {
    "source": "3.8",
    "target": "16.4",
    "value": 112.5
  },
  {
    "source": "3.8",
    "target": "16.6",
    "value": 178
  },
  {
    "source": "3.8",
    "target": "17.11",
    "value": -2
  },
  {
    "source": "3.8",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "4.1",
    "target": "1.3",
    "value": 280
  },
  {
    "source": "4.1",
    "target": "1.5",
    "value": 412.5
  },
  {
    "source": "4.1",
    "target": "2.2",
    "value": 163.5
  },
  {
    "source": "4.1",
    "target": "2.4",
    "value": 344.5
  },
  {
    "source": "4.1",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "4.1",
    "target": "3.8",
    "value": 155
  },
  {
    "source": "4.1",
    "target": "4.1",
    "value": 160
  },
  {
    "source": "4.1",
    "target": "4.4",
    "value": 276
  },
  {
    "source": "4.1",
    "target": "5.4",
    "value": 170
  },
  {
    "source": "4.1",
    "target": "5.5",
    "value": 183.5
  },
  {
    "source": "4.1",
    "target": "6.5",
    "value": 243
  },
  {
    "source": "4.1",
    "target": "6.6",
    "value": 255
  },
  {
    "source": "4.1",
    "target": "7.2",
    "value": 65
  },
  {
    "source": "4.1",
    "target": "7.3",
    "value": 198
  },
  {
    "source": "4.1",
    "target": "8.4",
    "value": 284.5
  },
  {
    "source": "4.1",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "4.1",
    "target": "9.4",
    "value": 255.5
  },
  {
    "source": "4.1",
    "target": "9.5",
    "value": 193.5
  },
  {
    "source": "4.1",
    "target": "10.1",
    "value": 309.5
  },
  {
    "source": "4.1",
    "target": "10.7",
    "value": 215.5
  },
  {
    "source": "4.1",
    "target": "11.1",
    "value": 205
  },
  {
    "source": "4.1",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "4.1",
    "target": "12.1",
    "value": 316.5
  },
  {
    "source": "4.1",
    "target": "12.5",
    "value": 230
  },
  {
    "source": "4.1",
    "target": "13.1",
    "value": 365.5
  },
  {
    "source": "4.1",
    "target": "13.2",
    "value": 305.5
  },
  {
    "source": "4.1",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "4.1",
    "target": "14.4",
    "value": 174.5
  },
  {
    "source": "4.1",
    "target": "15.2",
    "value": 251.5
  },
  {
    "source": "4.1",
    "target": "15.5",
    "value": 329.5
  },
  {
    "source": "4.1",
    "target": "16.4",
    "value": 112
  },
  {
    "source": "4.1",
    "target": "16.6",
    "value": 178.5
  },
  {
    "source": "4.1",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "4.1",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "4.4",
    "target": "1.3",
    "value": 284
  },
  {
    "source": "4.4",
    "target": "1.5",
    "value": 416
  },
  {
    "source": "4.4",
    "target": "2.2",
    "value": 166.5
  },
  {
    "source": "4.4",
    "target": "2.4",
    "value": 348.5
  },
  {
    "source": "4.4",
    "target": "3.4",
    "value": 210.5
  },
  {
    "source": "4.4",
    "target": "3.8",
    "value": 158.5
  },
  {
    "source": "4.4",
    "target": "4.1",
    "value": 165.5
  },
  {
    "source": "4.4",
    "target": "4.4",
    "value": 282.5
  },
  {
    "source": "4.4",
    "target": "5.4",
    "value": 175
  },
  {
    "source": "4.4",
    "target": "5.5",
    "value": 190.5
  },
  {
    "source": "4.4",
    "target": "6.5",
    "value": 246.5
  },
  {
    "source": "4.4",
    "target": "6.6",
    "value": 256.5
  },
  {
    "source": "4.4",
    "target": "7.2",
    "value": 69.5
  },
  {
    "source": "4.4",
    "target": "7.3",
    "value": 203.5
  },
  {
    "source": "4.4",
    "target": "8.4",
    "value": 291.5
  },
  {
    "source": "4.4",
    "target": "8.5",
    "value": 292
  },
  {
    "source": "4.4",
    "target": "9.4",
    "value": 261
  },
  {
    "source": "4.4",
    "target": "9.5",
    "value": 200
  },
  {
    "source": "4.4",
    "target": "10.1",
    "value": 310.5
  },
  {
    "source": "4.4",
    "target": "10.7",
    "value": 221
  },
  {
    "source": "4.4",
    "target": "11.1",
    "value": 208.5
  },
  {
    "source": "4.4",
    "target": "11.2",
    "value": 243
  },
  {
    "source": "4.4",
    "target": "12.1",
    "value": 322.5
  },
  {
    "source": "4.4",
    "target": "12.5",
    "value": 235
  },
  {
    "source": "4.4",
    "target": "13.1",
    "value": 368.5
  },
  {
    "source": "4.4",
    "target": "13.2",
    "value": 309.5
  },
  {
    "source": "4.4",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "4.4",
    "target": "14.4",
    "value": 175
  },
  {
    "source": "4.4",
    "target": "15.2",
    "value": 253
  },
  {
    "source": "4.4",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "4.4",
    "target": "16.4",
    "value": 113
  },
  {
    "source": "4.4",
    "target": "16.6",
    "value": 184
  },
  {
    "source": "4.4",
    "target": "17.11",
    "value": -5
  },
  {
    "source": "4.4",
    "target": "17.13",
    "value": 216
  },
  {
    "source": "5.4",
    "target": "1.3",
    "value": 280
  },
  {
    "source": "5.4",
    "target": "1.5",
    "value": 413
  },
  {
    "source": "5.4",
    "target": "2.2",
    "value": 163.5
  },
  {
    "source": "5.4",
    "target": "2.4",
    "value": 344.5
  },
  {
    "source": "5.4",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "5.4",
    "target": "3.8",
    "value": 156.5
  },
  {
    "source": "5.4",
    "target": "4.1",
    "value": 160.5
  },
  {
    "source": "5.4",
    "target": "4.4",
    "value": 277.5
  },
  {
    "source": "5.4",
    "target": "5.4",
    "value": 166.5
  },
  {
    "source": "5.4",
    "target": "5.5",
    "value": 182
  },
  {
    "source": "5.4",
    "target": "6.5",
    "value": 244
  },
  {
    "source": "5.4",
    "target": "6.6",
    "value": 255
  },
  {
    "source": "5.4",
    "target": "7.2",
    "value": 66
  },
  {
    "source": "5.4",
    "target": "7.3",
    "value": 199.5
  },
  {
    "source": "5.4",
    "target": "8.4",
    "value": 284.5
  },
  {
    "source": "5.4",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "5.4",
    "target": "9.4",
    "value": 256
  },
  {
    "source": "5.4",
    "target": "9.5",
    "value": 194
  },
  {
    "source": "5.4",
    "target": "10.1",
    "value": 307.5
  },
  {
    "source": "5.4",
    "target": "10.7",
    "value": 217
  },
  {
    "source": "5.4",
    "target": "11.1",
    "value": 203
  },
  {
    "source": "5.4",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "5.4",
    "target": "12.1",
    "value": 317
  },
  {
    "source": "5.4",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "5.4",
    "target": "13.1",
    "value": 365
  },
  {
    "source": "5.4",
    "target": "13.2",
    "value": 306
  },
  {
    "source": "5.4",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "5.4",
    "target": "14.4",
    "value": 175
  },
  {
    "source": "5.4",
    "target": "15.2",
    "value": 251.5
  },
  {
    "source": "5.4",
    "target": "15.5",
    "value": 330
  },
  {
    "source": "5.4",
    "target": "16.4",
    "value": 112
  },
  {
    "source": "5.4",
    "target": "16.6",
    "value": 178.5
  },
  {
    "source": "5.4",
    "target": "17.11",
    "value": -2
  },
  {
    "source": "5.4",
    "target": "17.13",
    "value": 213.5
  },
  {
    "source": "5.5",
    "target": "1.3",
    "value": 281.5
  },
  {
    "source": "5.5",
    "target": "1.5",
    "value": 413.5
  },
  {
    "source": "5.5",
    "target": "2.2",
    "value": 164.5
  },
  {
    "source": "5.5",
    "target": "2.4",
    "value": 345
  },
  {
    "source": "5.5",
    "target": "3.4",
    "value": 210.5
  },
  {
    "source": "5.5",
    "target": "3.8",
    "value": 157.5
  },
  {
    "source": "5.5",
    "target": "4.1",
    "value": 164
  },
  {
    "source": "5.5",
    "target": "4.4",
    "value": 278.5
  },
  {
    "source": "5.5",
    "target": "5.4",
    "value": 169.5
  },
  {
    "source": "5.5",
    "target": "5.5",
    "value": 184
  },
  {
    "source": "5.5",
    "target": "6.5",
    "value": 245
  },
  {
    "source": "5.5",
    "target": "6.6",
    "value": 256
  },
  {
    "source": "5.5",
    "target": "7.2",
    "value": 66.5
  },
  {
    "source": "5.5",
    "target": "7.3",
    "value": 197
  },
  {
    "source": "5.5",
    "target": "8.4",
    "value": 284
  },
  {
    "source": "5.5",
    "target": "8.5",
    "value": 286.5
  },
  {
    "source": "5.5",
    "target": "9.4",
    "value": 256.5
  },
  {
    "source": "5.5",
    "target": "9.5",
    "value": 194
  },
  {
    "source": "5.5",
    "target": "10.1",
    "value": 308
  },
  {
    "source": "5.5",
    "target": "10.7",
    "value": 217.5
  },
  {
    "source": "5.5",
    "target": "11.1",
    "value": 204.5
  },
  {
    "source": "5.5",
    "target": "11.2",
    "value": 238.5
  },
  {
    "source": "5.5",
    "target": "12.1",
    "value": 318
  },
  {
    "source": "5.5",
    "target": "12.5",
    "value": 232.5
  },
  {
    "source": "5.5",
    "target": "13.1",
    "value": 365
  },
  {
    "source": "5.5",
    "target": "13.2",
    "value": 306.5
  },
  {
    "source": "5.5",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "5.5",
    "target": "14.4",
    "value": 174
  },
  {
    "source": "5.5",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "5.5",
    "target": "15.5",
    "value": 329.5
  },
  {
    "source": "5.5",
    "target": "16.4",
    "value": 112.5
  },
  {
    "source": "5.5",
    "target": "16.6",
    "value": 175.5
  },
  {
    "source": "5.5",
    "target": "17.11",
    "value": -2
  },
  {
    "source": "5.5",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "6.5",
    "target": "1.3",
    "value": 274
  },
  {
    "source": "6.5",
    "target": "1.5",
    "value": 409
  },
  {
    "source": "6.5",
    "target": "2.2",
    "value": 164
  },
  {
    "source": "6.5",
    "target": "2.4",
    "value": 360
  },
  {
    "source": "6.5",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "6.5",
    "target": "3.8",
    "value": 153
  },
  {
    "source": "6.5",
    "target": "4.1",
    "value": 157
  },
  {
    "source": "6.5",
    "target": "4.4",
    "value": 274.5
  },
  {
    "source": "6.5",
    "target": "5.4",
    "value": 162.5
  },
  {
    "source": "6.5",
    "target": "5.5",
    "value": 179.5
  },
  {
    "source": "6.5",
    "target": "6.5",
    "value": 258
  },
  {
    "source": "6.5",
    "target": "6.6",
    "value": 262
  },
  {
    "source": "6.5",
    "target": "7.2",
    "value": 64.5
  },
  {
    "source": "6.5",
    "target": "7.3",
    "value": 206.5
  },
  {
    "source": "6.5",
    "target": "8.4",
    "value": 293
  },
  {
    "source": "6.5",
    "target": "8.5",
    "value": 282.5
  },
  {
    "source": "6.5",
    "target": "9.4",
    "value": 263
  },
  {
    "source": "6.5",
    "target": "9.5",
    "value": 198
  },
  {
    "source": "6.5",
    "target": "10.1",
    "value": 305.5
  },
  {
    "source": "6.5",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "6.5",
    "target": "11.1",
    "value": 201
  },
  {
    "source": "6.5",
    "target": "11.2",
    "value": 239
  },
  {
    "source": "6.5",
    "target": "12.1",
    "value": 328
  },
  {
    "source": "6.5",
    "target": "12.5",
    "value": 240
  },
  {
    "source": "6.5",
    "target": "13.1",
    "value": 368.5
  },
  {
    "source": "6.5",
    "target": "13.2",
    "value": 313.5
  },
  {
    "source": "6.5",
    "target": "14.1",
    "value": 257
  },
  {
    "source": "6.5",
    "target": "14.4",
    "value": 184
  },
  {
    "source": "6.5",
    "target": "15.2",
    "value": 262
  },
  {
    "source": "6.5",
    "target": "15.5",
    "value": 340.5
  },
  {
    "source": "6.5",
    "target": "16.4",
    "value": 110
  },
  {
    "source": "6.5",
    "target": "16.6",
    "value": 181.5
  },
  {
    "source": "6.5",
    "target": "17.11",
    "value": -5.5
  },
  {
    "source": "6.5",
    "target": "17.13",
    "value": 213.5
  },
  {
    "source": "6.6",
    "target": "1.3",
    "value": 274
  },
  {
    "source": "6.6",
    "target": "1.5",
    "value": 410
  },
  {
    "source": "6.6",
    "target": "2.2",
    "value": 162
  },
  {
    "source": "6.6",
    "target": "2.4",
    "value": 366
  },
  {
    "source": "6.6",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "6.6",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "6.6",
    "target": "4.1",
    "value": 156.5
  },
  {
    "source": "6.6",
    "target": "4.4",
    "value": 273.5
  },
  {
    "source": "6.6",
    "target": "5.4",
    "value": 163
  },
  {
    "source": "6.6",
    "target": "5.5",
    "value": 180.5
  },
  {
    "source": "6.6",
    "target": "6.5",
    "value": 262.5
  },
  {
    "source": "6.6",
    "target": "6.6",
    "value": 268
  },
  {
    "source": "6.6",
    "target": "7.2",
    "value": 58
  },
  {
    "source": "6.6",
    "target": "7.3",
    "value": 201
  },
  {
    "source": "6.6",
    "target": "8.4",
    "value": 292.5
  },
  {
    "source": "6.6",
    "target": "8.5",
    "value": 280.5
  },
  {
    "source": "6.6",
    "target": "9.4",
    "value": 262.5
  },
  {
    "source": "6.6",
    "target": "9.5",
    "value": 197
  },
  {
    "source": "6.6",
    "target": "10.1",
    "value": 306.5
  },
  {
    "source": "6.6",
    "target": "10.7",
    "value": 215.5
  },
  {
    "source": "6.6",
    "target": "11.1",
    "value": 202.5
  },
  {
    "source": "6.6",
    "target": "11.2",
    "value": 234
  },
  {
    "source": "6.6",
    "target": "12.1",
    "value": 330
  },
  {
    "source": "6.6",
    "target": "12.5",
    "value": 240
  },
  {
    "source": "6.6",
    "target": "13.1",
    "value": 371
  },
  {
    "source": "6.6",
    "target": "13.2",
    "value": 309.5
  },
  {
    "source": "6.6",
    "target": "14.1",
    "value": 258
  },
  {
    "source": "6.6",
    "target": "14.4",
    "value": 183.5
  },
  {
    "source": "6.6",
    "target": "15.2",
    "value": 266
  },
  {
    "source": "6.6",
    "target": "15.5",
    "value": 346
  },
  {
    "source": "6.6",
    "target": "16.4",
    "value": 110
  },
  {
    "source": "6.6",
    "target": "16.6",
    "value": 184.5
  },
  {
    "source": "6.6",
    "target": "17.11",
    "value": -6
  },
  {
    "source": "6.6",
    "target": "17.13",
    "value": 213
  },
  {
    "source": "7.2",
    "target": "1.3",
    "value": 273.5
  },
  {
    "source": "7.2",
    "target": "1.5",
    "value": 405.5
  },
  {
    "source": "7.2",
    "target": "2.2",
    "value": 165
  },
  {
    "source": "7.2",
    "target": "2.4",
    "value": 340.5
  },
  {
    "source": "7.2",
    "target": "3.4",
    "value": 207.5
  },
  {
    "source": "7.2",
    "target": "3.8",
    "value": 151
  },
  {
    "source": "7.2",
    "target": "4.1",
    "value": 157
  },
  {
    "source": "7.2",
    "target": "4.4",
    "value": 270
  },
  {
    "source": "7.2",
    "target": "5.4",
    "value": 160
  },
  {
    "source": "7.2",
    "target": "5.5",
    "value": 170
  },
  {
    "source": "7.2",
    "target": "6.5",
    "value": 239.5
  },
  {
    "source": "7.2",
    "target": "6.6",
    "value": 249
  },
  {
    "source": "7.2",
    "target": "7.2",
    "value": 71.5
  },
  {
    "source": "7.2",
    "target": "7.3",
    "value": 205.5
  },
  {
    "source": "7.2",
    "target": "8.4",
    "value": 283
  },
  {
    "source": "7.2",
    "target": "8.5",
    "value": 281
  },
  {
    "source": "7.2",
    "target": "9.4",
    "value": 257.5
  },
  {
    "source": "7.2",
    "target": "9.5",
    "value": 196.5
  },
  {
    "source": "7.2",
    "target": "10.1",
    "value": 304
  },
  {
    "source": "7.2",
    "target": "10.7",
    "value": 209.5
  },
  {
    "source": "7.2",
    "target": "11.1",
    "value": 198.5
  },
  {
    "source": "7.2",
    "target": "11.2",
    "value": 241.5
  },
  {
    "source": "7.2",
    "target": "12.1",
    "value": 316
  },
  {
    "source": "7.2",
    "target": "12.5",
    "value": 232.5
  },
  {
    "source": "7.2",
    "target": "13.1",
    "value": 355
  },
  {
    "source": "7.2",
    "target": "13.2",
    "value": 310.5
  },
  {
    "source": "7.2",
    "target": "14.1",
    "value": 245.5
  },
  {
    "source": "7.2",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "7.2",
    "target": "15.2",
    "value": 246.5
  },
  {
    "source": "7.2",
    "target": "15.5",
    "value": 325.5
  },
  {
    "source": "7.2",
    "target": "16.4",
    "value": 103.5
  },
  {
    "source": "7.2",
    "target": "16.6",
    "value": 168
  },
  {
    "source": "7.2",
    "target": "17.11",
    "value": 0
  },
  {
    "source": "7.2",
    "target": "17.13",
    "value": 212.5
  },
  {
    "source": "7.3",
    "target": "1.3",
    "value": 274.5
  },
  {
    "source": "7.3",
    "target": "1.5",
    "value": 407.5
  },
  {
    "source": "7.3",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "7.3",
    "target": "2.4",
    "value": 349.5
  },
  {
    "source": "7.3",
    "target": "3.4",
    "value": 207.5
  },
  {
    "source": "7.3",
    "target": "3.8",
    "value": 151.5
  },
  {
    "source": "7.3",
    "target": "4.1",
    "value": 157.5
  },
  {
    "source": "7.3",
    "target": "4.4",
    "value": 275.5
  },
  {
    "source": "7.3",
    "target": "5.4",
    "value": 160.5
  },
  {
    "source": "7.3",
    "target": "5.5",
    "value": 174
  },
  {
    "source": "7.3",
    "target": "6.5",
    "value": 246
  },
  {
    "source": "7.3",
    "target": "6.6",
    "value": 254
  },
  {
    "source": "7.3",
    "target": "7.2",
    "value": 74.5
  },
  {
    "source": "7.3",
    "target": "7.3",
    "value": 216.5
  },
  {
    "source": "7.3",
    "target": "8.4",
    "value": 293.5
  },
  {
    "source": "7.3",
    "target": "8.5",
    "value": 283.5
  },
  {
    "source": "7.3",
    "target": "9.4",
    "value": 266
  },
  {
    "source": "7.3",
    "target": "9.5",
    "value": 205
  },
  {
    "source": "7.3",
    "target": "10.1",
    "value": 305.5
  },
  {
    "source": "7.3",
    "target": "10.7",
    "value": 211
  },
  {
    "source": "7.3",
    "target": "11.1",
    "value": 201.5
  },
  {
    "source": "7.3",
    "target": "11.2",
    "value": 247
  },
  {
    "source": "7.3",
    "target": "12.1",
    "value": 326.5
  },
  {
    "source": "7.3",
    "target": "12.5",
    "value": 238
  },
  {
    "source": "7.3",
    "target": "13.1",
    "value": 363.5
  },
  {
    "source": "7.3",
    "target": "13.2",
    "value": 315.5
  },
  {
    "source": "7.3",
    "target": "14.1",
    "value": 250
  },
  {
    "source": "7.3",
    "target": "14.4",
    "value": 177
  },
  {
    "source": "7.3",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "7.3",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "7.3",
    "target": "16.4",
    "value": 104.5
  },
  {
    "source": "7.3",
    "target": "16.6",
    "value": 174
  },
  {
    "source": "7.3",
    "target": "17.11",
    "value": -4.5
  },
  {
    "source": "7.3",
    "target": "17.13",
    "value": 212.5
  },
  {
    "source": "8.4",
    "target": "1.3",
    "value": 274.5
  },
  {
    "source": "8.4",
    "target": "1.5",
    "value": 407.5
  },
  {
    "source": "8.4",
    "target": "2.2",
    "value": 168.5
  },
  {
    "source": "8.4",
    "target": "2.4",
    "value": 353.5
  },
  {
    "source": "8.4",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "8.4",
    "target": "3.8",
    "value": 153.5
  },
  {
    "source": "8.4",
    "target": "4.1",
    "value": 159
  },
  {
    "source": "8.4",
    "target": "4.4",
    "value": 280.5
  },
  {
    "source": "8.4",
    "target": "5.4",
    "value": 166
  },
  {
    "source": "8.4",
    "target": "5.5",
    "value": 179
  },
  {
    "source": "8.4",
    "target": "6.5",
    "value": 249
  },
  {
    "source": "8.4",
    "target": "6.6",
    "value": 255
  },
  {
    "source": "8.4",
    "target": "7.2",
    "value": 74
  },
  {
    "source": "8.4",
    "target": "7.3",
    "value": 216.5
  },
  {
    "source": "8.4",
    "target": "8.4",
    "value": 301.5
  },
  {
    "source": "8.4",
    "target": "8.5",
    "value": 284
  },
  {
    "source": "8.4",
    "target": "9.4",
    "value": 271
  },
  {
    "source": "8.4",
    "target": "9.5",
    "value": 208.5
  },
  {
    "source": "8.4",
    "target": "10.1",
    "value": 306.5
  },
  {
    "source": "8.4",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "8.4",
    "target": "11.1",
    "value": 203
  },
  {
    "source": "8.4",
    "target": "11.2",
    "value": 250
  },
  {
    "source": "8.4",
    "target": "12.1",
    "value": 334.5
  },
  {
    "source": "8.4",
    "target": "12.5",
    "value": 243
  },
  {
    "source": "8.4",
    "target": "13.1",
    "value": 363.5
  },
  {
    "source": "8.4",
    "target": "13.2",
    "value": 320.5
  },
  {
    "source": "8.4",
    "target": "14.1",
    "value": 253
  },
  {
    "source": "8.4",
    "target": "14.4",
    "value": 181
  },
  {
    "source": "8.4",
    "target": "15.2",
    "value": 253.5
  },
  {
    "source": "8.4",
    "target": "15.5",
    "value": 337
  },
  {
    "source": "8.4",
    "target": "16.4",
    "value": 107
  },
  {
    "source": "8.4",
    "target": "16.6",
    "value": 181
  },
  {
    "source": "8.4",
    "target": "17.11",
    "value": -11
  },
  {
    "source": "8.4",
    "target": "17.13",
    "value": 217.5
  },
  {
    "source": "8.5",
    "target": "1.3",
    "value": 286
  },
  {
    "source": "8.5",
    "target": "1.5",
    "value": 418
  },
  {
    "source": "8.5",
    "target": "2.2",
    "value": 167.5
  },
  {
    "source": "8.5",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "8.5",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "8.5",
    "target": "3.8",
    "value": 157
  },
  {
    "source": "8.5",
    "target": "4.1",
    "value": 165
  },
  {
    "source": "8.5",
    "target": "4.4",
    "value": 282
  },
  {
    "source": "8.5",
    "target": "5.4",
    "value": 175.5
  },
  {
    "source": "8.5",
    "target": "5.5",
    "value": 189.5
  },
  {
    "source": "8.5",
    "target": "6.5",
    "value": 245.5
  },
  {
    "source": "8.5",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "8.5",
    "target": "7.2",
    "value": 70.5
  },
  {
    "source": "8.5",
    "target": "7.3",
    "value": 203.5
  },
  {
    "source": "8.5",
    "target": "8.4",
    "value": 291.5
  },
  {
    "source": "8.5",
    "target": "8.5",
    "value": 293
  },
  {
    "source": "8.5",
    "target": "9.4",
    "value": 261.5
  },
  {
    "source": "8.5",
    "target": "9.5",
    "value": 201.5
  },
  {
    "source": "8.5",
    "target": "10.1",
    "value": 311
  },
  {
    "source": "8.5",
    "target": "10.7",
    "value": 220.5
  },
  {
    "source": "8.5",
    "target": "11.1",
    "value": 206
  },
  {
    "source": "8.5",
    "target": "11.2",
    "value": 244.5
  },
  {
    "source": "8.5",
    "target": "12.1",
    "value": 324.5
  },
  {
    "source": "8.5",
    "target": "12.5",
    "value": 238
  },
  {
    "source": "8.5",
    "target": "13.1",
    "value": 366
  },
  {
    "source": "8.5",
    "target": "13.2",
    "value": 309.5
  },
  {
    "source": "8.5",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "8.5",
    "target": "14.4",
    "value": 176.5
  },
  {
    "source": "8.5",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "8.5",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "8.5",
    "target": "16.4",
    "value": 113.5
  },
  {
    "source": "8.5",
    "target": "16.6",
    "value": 187.5
  },
  {
    "source": "8.5",
    "target": "17.11",
    "value": -3
  },
  {
    "source": "8.5",
    "target": "17.13",
    "value": 215.5
  },
  {
    "source": "9.4",
    "target": "1.3",
    "value": 277
  },
  {
    "source": "9.4",
    "target": "1.5",
    "value": 410
  },
  {
    "source": "9.4",
    "target": "2.2",
    "value": 166.5
  },
  {
    "source": "9.4",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "9.4",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "9.4",
    "target": "3.8",
    "value": 152
  },
  {
    "source": "9.4",
    "target": "4.1",
    "value": 161
  },
  {
    "source": "9.4",
    "target": "4.4",
    "value": 280
  },
  {
    "source": "9.4",
    "target": "5.4",
    "value": 164
  },
  {
    "source": "9.4",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "9.4",
    "target": "6.5",
    "value": 245.5
  },
  {
    "source": "9.4",
    "target": "6.6",
    "value": 254
  },
  {
    "source": "9.4",
    "target": "7.2",
    "value": 73
  },
  {
    "source": "9.4",
    "target": "7.3",
    "value": 212
  },
  {
    "source": "9.4",
    "target": "8.4",
    "value": 299
  },
  {
    "source": "9.4",
    "target": "8.5",
    "value": 285
  },
  {
    "source": "9.4",
    "target": "9.4",
    "value": 269.5
  },
  {
    "source": "9.4",
    "target": "9.5",
    "value": 208
  },
  {
    "source": "9.4",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "9.4",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "9.4",
    "target": "11.1",
    "value": 203
  },
  {
    "source": "9.4",
    "target": "11.2",
    "value": 249
  },
  {
    "source": "9.4",
    "target": "12.1",
    "value": 333
  },
  {
    "source": "9.4",
    "target": "12.5",
    "value": 242.5
  },
  {
    "source": "9.4",
    "target": "13.1",
    "value": 363
  },
  {
    "source": "9.4",
    "target": "13.2",
    "value": 321.5
  },
  {
    "source": "9.4",
    "target": "14.1",
    "value": 252
  },
  {
    "source": "9.4",
    "target": "14.4",
    "value": 180.5
  },
  {
    "source": "9.4",
    "target": "15.2",
    "value": 252
  },
  {
    "source": "9.4",
    "target": "15.5",
    "value": 332.5
  },
  {
    "source": "9.4",
    "target": "16.4",
    "value": 108
  },
  {
    "source": "9.4",
    "target": "16.6",
    "value": 176.5
  },
  {
    "source": "9.4",
    "target": "17.11",
    "value": -6.5
  },
  {
    "source": "9.4",
    "target": "17.13",
    "value": 220
  },
  {
    "source": "9.5",
    "target": "1.3",
    "value": 274.5
  },
  {
    "source": "9.5",
    "target": "1.5",
    "value": 407.5
  },
  {
    "source": "9.5",
    "target": "2.2",
    "value": 164.5
  },
  {
    "source": "9.5",
    "target": "2.4",
    "value": 348.5
  },
  {
    "source": "9.5",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "9.5",
    "target": "3.8",
    "value": 153
  },
  {
    "source": "9.5",
    "target": "4.1",
    "value": 159
  },
  {
    "source": "9.5",
    "target": "4.4",
    "value": 278
  },
  {
    "source": "9.5",
    "target": "5.4",
    "value": 164
  },
  {
    "source": "9.5",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "9.5",
    "target": "6.5",
    "value": 247
  },
  {
    "source": "9.5",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "9.5",
    "target": "7.2",
    "value": 71.5
  },
  {
    "source": "9.5",
    "target": "7.3",
    "value": 205.5
  },
  {
    "source": "9.5",
    "target": "8.4",
    "value": 290.5
  },
  {
    "source": "9.5",
    "target": "8.5",
    "value": 282
  },
  {
    "source": "9.5",
    "target": "9.4",
    "value": 264
  },
  {
    "source": "9.5",
    "target": "9.5",
    "value": 199.5
  },
  {
    "source": "9.5",
    "target": "10.1",
    "value": 305
  },
  {
    "source": "9.5",
    "target": "10.7",
    "value": 213
  },
  {
    "source": "9.5",
    "target": "11.1",
    "value": 202
  },
  {
    "source": "9.5",
    "target": "11.2",
    "value": 244
  },
  {
    "source": "9.5",
    "target": "12.1",
    "value": 326
  },
  {
    "source": "9.5",
    "target": "12.5",
    "value": 238
  },
  {
    "source": "9.5",
    "target": "13.1",
    "value": 360.5
  },
  {
    "source": "9.5",
    "target": "13.2",
    "value": 318
  },
  {
    "source": "9.5",
    "target": "14.1",
    "value": 249
  },
  {
    "source": "9.5",
    "target": "14.4",
    "value": 179
  },
  {
    "source": "9.5",
    "target": "15.2",
    "value": 253.5
  },
  {
    "source": "9.5",
    "target": "15.5",
    "value": 332
  },
  {
    "source": "9.5",
    "target": "16.4",
    "value": 108.5
  },
  {
    "source": "9.5",
    "target": "16.6",
    "value": 173
  },
  {
    "source": "9.5",
    "target": "17.11",
    "value": -6
  },
  {
    "source": "9.5",
    "target": "17.13",
    "value": 218.5
  },
  {
    "source": "10.1",
    "target": "1.3",
    "value": 286.5
  },
  {
    "source": "10.1",
    "target": "1.5",
    "value": 418.5
  },
  {
    "source": "10.1",
    "target": "2.2",
    "value": 167.5
  },
  {
    "source": "10.1",
    "target": "2.4",
    "value": 347
  },
  {
    "source": "10.1",
    "target": "3.4",
    "value": 211
  },
  {
    "source": "10.1",
    "target": "3.8",
    "value": 161.5
  },
  {
    "source": "10.1",
    "target": "4.1",
    "value": 168.5
  },
  {
    "source": "10.1",
    "target": "4.4",
    "value": 286
  },
  {
    "source": "10.1",
    "target": "5.4",
    "value": 180
  },
  {
    "source": "10.1",
    "target": "5.5",
    "value": 194.5
  },
  {
    "source": "10.1",
    "target": "6.5",
    "value": 245.5
  },
  {
    "source": "10.1",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "10.1",
    "target": "7.2",
    "value": 70
  },
  {
    "source": "10.1",
    "target": "7.3",
    "value": 202
  },
  {
    "source": "10.1",
    "target": "8.4",
    "value": 292
  },
  {
    "source": "10.1",
    "target": "8.5",
    "value": 294
  },
  {
    "source": "10.1",
    "target": "9.4",
    "value": 261.5
  },
  {
    "source": "10.1",
    "target": "9.5",
    "value": 201
  },
  {
    "source": "10.1",
    "target": "10.1",
    "value": 311.5
  },
  {
    "source": "10.1",
    "target": "10.7",
    "value": 223.5
  },
  {
    "source": "10.1",
    "target": "11.1",
    "value": 209.5
  },
  {
    "source": "10.1",
    "target": "11.2",
    "value": 245
  },
  {
    "source": "10.1",
    "target": "12.1",
    "value": 325.5
  },
  {
    "source": "10.1",
    "target": "12.5",
    "value": 237
  },
  {
    "source": "10.1",
    "target": "13.1",
    "value": 370
  },
  {
    "source": "10.1",
    "target": "13.2",
    "value": 309.5
  },
  {
    "source": "10.1",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "10.1",
    "target": "14.4",
    "value": 175
  },
  {
    "source": "10.1",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "10.1",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "10.1",
    "target": "16.4",
    "value": 113.5
  },
  {
    "source": "10.1",
    "target": "16.6",
    "value": 187
  },
  {
    "source": "10.1",
    "target": "17.11",
    "value": -6.5
  },
  {
    "source": "10.1",
    "target": "17.13",
    "value": 217.5
  },
  {
    "source": "10.7",
    "target": "1.3",
    "value": 287
  },
  {
    "source": "10.7",
    "target": "1.5",
    "value": 419.5
  },
  {
    "source": "10.7",
    "target": "2.2",
    "value": 162
  },
  {
    "source": "10.7",
    "target": "2.4",
    "value": 345
  },
  {
    "source": "10.7",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "10.7",
    "target": "3.8",
    "value": 156.5
  },
  {
    "source": "10.7",
    "target": "4.1",
    "value": 163.5
  },
  {
    "source": "10.7",
    "target": "4.4",
    "value": 280
  },
  {
    "source": "10.7",
    "target": "5.4",
    "value": 168
  },
  {
    "source": "10.7",
    "target": "5.5",
    "value": 186.5
  },
  {
    "source": "10.7",
    "target": "6.5",
    "value": 244.5
  },
  {
    "source": "10.7",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "10.7",
    "target": "7.2",
    "value": 68
  },
  {
    "source": "10.7",
    "target": "7.3",
    "value": 196.5
  },
  {
    "source": "10.7",
    "target": "8.4",
    "value": 286.5
  },
  {
    "source": "10.7",
    "target": "8.5",
    "value": 290.5
  },
  {
    "source": "10.7",
    "target": "9.4",
    "value": 258
  },
  {
    "source": "10.7",
    "target": "9.5",
    "value": 197
  },
  {
    "source": "10.7",
    "target": "10.1",
    "value": 310.5
  },
  {
    "source": "10.7",
    "target": "10.7",
    "value": 220.5
  },
  {
    "source": "10.7",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "10.7",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "10.7",
    "target": "12.1",
    "value": 319
  },
  {
    "source": "10.7",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "10.7",
    "target": "13.1",
    "value": 367.5
  },
  {
    "source": "10.7",
    "target": "13.2",
    "value": 304
  },
  {
    "source": "10.7",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "10.7",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "10.7",
    "target": "15.2",
    "value": 253
  },
  {
    "source": "10.7",
    "target": "15.5",
    "value": 330
  },
  {
    "source": "10.7",
    "target": "16.4",
    "value": 116
  },
  {
    "source": "10.7",
    "target": "16.6",
    "value": 182
  },
  {
    "source": "10.7",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "17.13",
    "value": 215
  },
  {
    "source": "11.1",
    "target": "1.3",
    "value": 279
  },
  {
    "source": "11.1",
    "target": "1.5",
    "value": 413
  },
  {
    "source": "11.1",
    "target": "2.2",
    "value": 164.5
  },
  {
    "source": "11.1",
    "target": "2.4",
    "value": 347
  },
  {
    "source": "11.1",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "11.1",
    "target": "3.8",
    "value": 158
  },
  {
    "source": "11.1",
    "target": "4.1",
    "value": 162
  },
  {
    "source": "11.1",
    "target": "4.4",
    "value": 281
  },
  {
    "source": "11.1",
    "target": "5.4",
    "value": 168.5
  },
  {
    "source": "11.1",
    "target": "5.5",
    "value": 179.5
  },
  {
    "source": "11.1",
    "target": "6.5",
    "value": 244
  },
  {
    "source": "11.1",
    "target": "6.6",
    "value": 255
  },
  {
    "source": "11.1",
    "target": "7.2",
    "value": 70
  },
  {
    "source": "11.1",
    "target": "7.3",
    "value": 202.5
  },
  {
    "source": "11.1",
    "target": "8.4",
    "value": 286.5
  },
  {
    "source": "11.1",
    "target": "8.5",
    "value": 288.5
  },
  {
    "source": "11.1",
    "target": "9.4",
    "value": 261
  },
  {
    "source": "11.1",
    "target": "9.5",
    "value": 199
  },
  {
    "source": "11.1",
    "target": "10.1",
    "value": 309
  },
  {
    "source": "11.1",
    "target": "10.7",
    "value": 220
  },
  {
    "source": "11.1",
    "target": "11.1",
    "value": 207
  },
  {
    "source": "11.1",
    "target": "11.2",
    "value": 243
  },
  {
    "source": "11.1",
    "target": "12.1",
    "value": 320
  },
  {
    "source": "11.1",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "11.1",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "11.1",
    "target": "13.2",
    "value": 312
  },
  {
    "source": "11.1",
    "target": "14.1",
    "value": 246
  },
  {
    "source": "11.1",
    "target": "14.4",
    "value": 175.5
  },
  {
    "source": "11.1",
    "target": "15.2",
    "value": 251.5
  },
  {
    "source": "11.1",
    "target": "15.5",
    "value": 329.5
  },
  {
    "source": "11.1",
    "target": "16.4",
    "value": 107.5
  },
  {
    "source": "11.1",
    "target": "16.6",
    "value": 176.5
  },
  {
    "source": "11.1",
    "target": "17.11",
    "value": -4.5
  },
  {
    "source": "11.1",
    "target": "17.13",
    "value": 217
  },
  {
    "source": "11.2",
    "target": "1.3",
    "value": 279.5
  },
  {
    "source": "11.2",
    "target": "1.5",
    "value": 412.5
  },
  {
    "source": "11.2",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "11.2",
    "target": "2.4",
    "value": 348.5
  },
  {
    "source": "11.2",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "11.2",
    "target": "3.8",
    "value": 156
  },
  {
    "source": "11.2",
    "target": "4.1",
    "value": 161
  },
  {
    "source": "11.2",
    "target": "4.4",
    "value": 280.5
  },
  {
    "source": "11.2",
    "target": "5.4",
    "value": 167
  },
  {
    "source": "11.2",
    "target": "5.5",
    "value": 180.5
  },
  {
    "source": "11.2",
    "target": "6.5",
    "value": 244.5
  },
  {
    "source": "11.2",
    "target": "6.6",
    "value": 255.5
  },
  {
    "source": "11.2",
    "target": "7.2",
    "value": 72
  },
  {
    "source": "11.2",
    "target": "7.3",
    "value": 208
  },
  {
    "source": "11.2",
    "target": "8.4",
    "value": 293.5
  },
  {
    "source": "11.2",
    "target": "8.5",
    "value": 287.5
  },
  {
    "source": "11.2",
    "target": "9.4",
    "value": 266.5
  },
  {
    "source": "11.2",
    "target": "9.5",
    "value": 204.5
  },
  {
    "source": "11.2",
    "target": "10.1",
    "value": 308.5
  },
  {
    "source": "11.2",
    "target": "10.7",
    "value": 217.5
  },
  {
    "source": "11.2",
    "target": "11.1",
    "value": 205
  },
  {
    "source": "11.2",
    "target": "11.2",
    "value": 247
  },
  {
    "source": "11.2",
    "target": "12.1",
    "value": 325.5
  },
  {
    "source": "11.2",
    "target": "12.5",
    "value": 237.5
  },
  {
    "source": "11.2",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "11.2",
    "target": "13.2",
    "value": 315.5
  },
  {
    "source": "11.2",
    "target": "14.1",
    "value": 248
  },
  {
    "source": "11.2",
    "target": "14.4",
    "value": 177
  },
  {
    "source": "11.2",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "11.2",
    "target": "15.5",
    "value": 330.5
  },
  {
    "source": "11.2",
    "target": "16.4",
    "value": 106.5
  },
  {
    "source": "11.2",
    "target": "16.6",
    "value": 176.5
  },
  {
    "source": "11.2",
    "target": "17.11",
    "value": -7
  },
  {
    "source": "11.2",
    "target": "17.13",
    "value": 216
  },
  {
    "source": "12.1",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "12.1",
    "target": "1.5",
    "value": 408.5
  },
  {
    "source": "12.1",
    "target": "2.2",
    "value": 168
  },
  {
    "source": "12.1",
    "target": "2.4",
    "value": 358
  },
  {
    "source": "12.1",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "12.1",
    "target": "3.8",
    "value": 153.5
  },
  {
    "source": "12.1",
    "target": "4.1",
    "value": 159
  },
  {
    "source": "12.1",
    "target": "4.4",
    "value": 281.5
  },
  {
    "source": "12.1",
    "target": "5.4",
    "value": 165.5
  },
  {
    "source": "12.1",
    "target": "5.5",
    "value": 182.5
  },
  {
    "source": "12.1",
    "target": "6.5",
    "value": 255
  },
  {
    "source": "12.1",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "12.1",
    "target": "7.2",
    "value": 73
  },
  {
    "source": "12.1",
    "target": "7.3",
    "value": 217.5
  },
  {
    "source": "12.1",
    "target": "8.4",
    "value": 303
  },
  {
    "source": "12.1",
    "target": "8.5",
    "value": 285
  },
  {
    "source": "12.1",
    "target": "9.4",
    "value": 270.5
  },
  {
    "source": "12.1",
    "target": "9.5",
    "value": 208.5
  },
  {
    "source": "12.1",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "12.1",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "12.1",
    "target": "11.1",
    "value": 203.5
  },
  {
    "source": "12.1",
    "target": "11.2",
    "value": 247.5
  },
  {
    "source": "12.1",
    "target": "12.1",
    "value": 338.5
  },
  {
    "source": "12.1",
    "target": "12.5",
    "value": 244.5
  },
  {
    "source": "12.1",
    "target": "13.1",
    "value": 365
  },
  {
    "source": "12.1",
    "target": "13.2",
    "value": 322
  },
  {
    "source": "12.1",
    "target": "14.1",
    "value": 254
  },
  {
    "source": "12.1",
    "target": "14.4",
    "value": 182
  },
  {
    "source": "12.1",
    "target": "15.2",
    "value": 256.5
  },
  {
    "source": "12.1",
    "target": "15.5",
    "value": 338
  },
  {
    "source": "12.1",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "12.1",
    "target": "16.6",
    "value": 182.5
  },
  {
    "source": "12.1",
    "target": "17.11",
    "value": -9.5
  },
  {
    "source": "12.1",
    "target": "17.13",
    "value": 215.5
  },
  {
    "source": "12.5",
    "target": "1.3",
    "value": 273
  },
  {
    "source": "12.5",
    "target": "1.5",
    "value": 406.5
  },
  {
    "source": "12.5",
    "target": "2.2",
    "value": 165.5
  },
  {
    "source": "12.5",
    "target": "2.4",
    "value": 353
  },
  {
    "source": "12.5",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "12.5",
    "target": "3.8",
    "value": 152.5
  },
  {
    "source": "12.5",
    "target": "4.1",
    "value": 158.5
  },
  {
    "source": "12.5",
    "target": "4.4",
    "value": 276.5
  },
  {
    "source": "12.5",
    "target": "5.4",
    "value": 163.5
  },
  {
    "source": "12.5",
    "target": "5.5",
    "value": 177
  },
  {
    "source": "12.5",
    "target": "6.5",
    "value": 250.5
  },
  {
    "source": "12.5",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "12.5",
    "target": "7.2",
    "value": 68.5
  },
  {
    "source": "12.5",
    "target": "7.3",
    "value": 210
  },
  {
    "source": "12.5",
    "target": "8.4",
    "value": 296.5
  },
  {
    "source": "12.5",
    "target": "8.5",
    "value": 282
  },
  {
    "source": "12.5",
    "target": "9.4",
    "value": 267
  },
  {
    "source": "12.5",
    "target": "9.5",
    "value": 203
  },
  {
    "source": "12.5",
    "target": "10.1",
    "value": 305
  },
  {
    "source": "12.5",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "12.5",
    "target": "11.1",
    "value": 201.5
  },
  {
    "source": "12.5",
    "target": "11.2",
    "value": 244.5
  },
  {
    "source": "12.5",
    "target": "12.1",
    "value": 330
  },
  {
    "source": "12.5",
    "target": "12.5",
    "value": 242.5
  },
  {
    "source": "12.5",
    "target": "13.1",
    "value": 362.5
  },
  {
    "source": "12.5",
    "target": "13.2",
    "value": 320
  },
  {
    "source": "12.5",
    "target": "14.1",
    "value": 253
  },
  {
    "source": "12.5",
    "target": "14.4",
    "value": 180
  },
  {
    "source": "12.5",
    "target": "15.2",
    "value": 256.5
  },
  {
    "source": "12.5",
    "target": "15.5",
    "value": 333.5
  },
  {
    "source": "12.5",
    "target": "16.4",
    "value": 108
  },
  {
    "source": "12.5",
    "target": "16.6",
    "value": 178
  },
  {
    "source": "12.5",
    "target": "17.11",
    "value": -7
  },
  {
    "source": "12.5",
    "target": "17.13",
    "value": 214.5
  },
  {
    "source": "13.1",
    "target": "1.3",
    "value": 280.5
  },
  {
    "source": "13.1",
    "target": "1.5",
    "value": 415.5
  },
  {
    "source": "13.1",
    "target": "2.2",
    "value": 165.5
  },
  {
    "source": "13.1",
    "target": "2.4",
    "value": 357.5
  },
  {
    "source": "13.1",
    "target": "3.4",
    "value": 210
  },
  {
    "source": "13.1",
    "target": "3.8",
    "value": 156.5
  },
  {
    "source": "13.1",
    "target": "4.1",
    "value": 163.5
  },
  {
    "source": "13.1",
    "target": "4.4",
    "value": 283.5
  },
  {
    "source": "13.1",
    "target": "5.4",
    "value": 170.5
  },
  {
    "source": "13.1",
    "target": "5.5",
    "value": 187
  },
  {
    "source": "13.1",
    "target": "6.5",
    "value": 254.5
  },
  {
    "source": "13.1",
    "target": "6.6",
    "value": 262.5
  },
  {
    "source": "13.1",
    "target": "7.2",
    "value": 69
  },
  {
    "source": "13.1",
    "target": "7.3",
    "value": 209
  },
  {
    "source": "13.1",
    "target": "8.4",
    "value": 299.5
  },
  {
    "source": "13.1",
    "target": "8.5",
    "value": 289
  },
  {
    "source": "13.1",
    "target": "9.4",
    "value": 266.5
  },
  {
    "source": "13.1",
    "target": "9.5",
    "value": 203
  },
  {
    "source": "13.1",
    "target": "10.1",
    "value": 310
  },
  {
    "source": "13.1",
    "target": "10.7",
    "value": 218
  },
  {
    "source": "13.1",
    "target": "11.1",
    "value": 206.5
  },
  {
    "source": "13.1",
    "target": "11.2",
    "value": 245.5
  },
  {
    "source": "13.1",
    "target": "12.1",
    "value": 333
  },
  {
    "source": "13.1",
    "target": "12.5",
    "value": 243.5
  },
  {
    "source": "13.1",
    "target": "13.1",
    "value": 376.5
  },
  {
    "source": "13.1",
    "target": "13.2",
    "value": 311
  },
  {
    "source": "13.1",
    "target": "14.1",
    "value": 257
  },
  {
    "source": "13.1",
    "target": "14.4",
    "value": 183
  },
  {
    "source": "13.1",
    "target": "15.2",
    "value": 262
  },
  {
    "source": "13.1",
    "target": "15.5",
    "value": 339.5
  },
  {
    "source": "13.1",
    "target": "16.4",
    "value": 115.5
  },
  {
    "source": "13.1",
    "target": "16.6",
    "value": 191.5
  },
  {
    "source": "13.1",
    "target": "17.11",
    "value": -6.5
  },
  {
    "source": "13.1",
    "target": "17.13",
    "value": 217.5
  },
  {
    "source": "13.2",
    "target": "1.3",
    "value": 276
  },
  {
    "source": "13.2",
    "target": "1.5",
    "value": 409.5
  },
  {
    "source": "13.2",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "13.2",
    "target": "2.4",
    "value": 355.5
  },
  {
    "source": "13.2",
    "target": "3.4",
    "value": 207.5
  },
  {
    "source": "13.2",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "13.2",
    "target": "4.1",
    "value": 160.5
  },
  {
    "source": "13.2",
    "target": "4.4",
    "value": 281.5
  },
  {
    "source": "13.2",
    "target": "5.4",
    "value": 166.5
  },
  {
    "source": "13.2",
    "target": "5.5",
    "value": 182
  },
  {
    "source": "13.2",
    "target": "6.5",
    "value": 250.5
  },
  {
    "source": "13.2",
    "target": "6.6",
    "value": 258
  },
  {
    "source": "13.2",
    "target": "7.2",
    "value": 74
  },
  {
    "source": "13.2",
    "target": "7.3",
    "value": 216.5
  },
  {
    "source": "13.2",
    "target": "8.4",
    "value": 302
  },
  {
    "source": "13.2",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "13.2",
    "target": "9.4",
    "value": 272.5
  },
  {
    "source": "13.2",
    "target": "9.5",
    "value": 210.5
  },
  {
    "source": "13.2",
    "target": "10.1",
    "value": 308
  },
  {
    "source": "13.2",
    "target": "10.7",
    "value": 214
  },
  {
    "source": "13.2",
    "target": "11.1",
    "value": 206
  },
  {
    "source": "13.2",
    "target": "11.2",
    "value": 249.5
  },
  {
    "source": "13.2",
    "target": "12.1",
    "value": 338
  },
  {
    "source": "13.2",
    "target": "12.5",
    "value": 245
  },
  {
    "source": "13.2",
    "target": "13.1",
    "value": 360
  },
  {
    "source": "13.2",
    "target": "13.2",
    "value": 324
  },
  {
    "source": "13.2",
    "target": "14.1",
    "value": 252
  },
  {
    "source": "13.2",
    "target": "14.4",
    "value": 179.5
  },
  {
    "source": "13.2",
    "target": "15.2",
    "value": 254.5
  },
  {
    "source": "13.2",
    "target": "15.5",
    "value": 336
  },
  {
    "source": "13.2",
    "target": "16.4",
    "value": 107.5
  },
  {
    "source": "13.2",
    "target": "16.6",
    "value": 181
  },
  {
    "source": "13.2",
    "target": "17.11",
    "value": -11
  },
  {
    "source": "13.2",
    "target": "17.13",
    "value": 217.5
  },
  {
    "source": "14.1",
    "target": "1.3",
    "value": 273
  },
  {
    "source": "14.1",
    "target": "1.5",
    "value": 407
  },
  {
    "source": "14.1",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "14.1",
    "target": "2.4",
    "value": 356
  },
  {
    "source": "14.1",
    "target": "3.4",
    "value": 207.5
  },
  {
    "source": "14.1",
    "target": "3.8",
    "value": 152
  },
  {
    "source": "14.1",
    "target": "4.1",
    "value": 157.5
  },
  {
    "source": "14.1",
    "target": "4.4",
    "value": 275
  },
  {
    "source": "14.1",
    "target": "5.4",
    "value": 161
  },
  {
    "source": "14.1",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "14.1",
    "target": "6.5",
    "value": 253.5
  },
  {
    "source": "14.1",
    "target": "6.6",
    "value": 260.5
  },
  {
    "source": "14.1",
    "target": "7.2",
    "value": 68.5
  },
  {
    "source": "14.1",
    "target": "7.3",
    "value": 212
  },
  {
    "source": "14.1",
    "target": "8.4",
    "value": 296
  },
  {
    "source": "14.1",
    "target": "8.5",
    "value": 282
  },
  {
    "source": "14.1",
    "target": "9.4",
    "value": 266.5
  },
  {
    "source": "14.1",
    "target": "9.5",
    "value": 202
  },
  {
    "source": "14.1",
    "target": "10.1",
    "value": 304
  },
  {
    "source": "14.1",
    "target": "10.7",
    "value": 211.5
  },
  {
    "source": "14.1",
    "target": "11.1",
    "value": 199
  },
  {
    "source": "14.1",
    "target": "11.2",
    "value": 243
  },
  {
    "source": "14.1",
    "target": "12.1",
    "value": 330.5
  },
  {
    "source": "14.1",
    "target": "12.5",
    "value": 243
  },
  {
    "source": "14.1",
    "target": "13.1",
    "value": 368
  },
  {
    "source": "14.1",
    "target": "13.2",
    "value": 316
  },
  {
    "source": "14.1",
    "target": "14.1",
    "value": 257
  },
  {
    "source": "14.1",
    "target": "14.4",
    "value": 183.5
  },
  {
    "source": "14.1",
    "target": "15.2",
    "value": 258
  },
  {
    "source": "14.1",
    "target": "15.5",
    "value": 337.5
  },
  {
    "source": "14.1",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "14.1",
    "target": "16.6",
    "value": 182
  },
  {
    "source": "14.1",
    "target": "17.11",
    "value": -5.5
  },
  {
    "source": "14.1",
    "target": "17.13",
    "value": 214.5
  },
  {
    "source": "14.4",
    "target": "1.3",
    "value": 273.5
  },
  {
    "source": "14.4",
    "target": "1.5",
    "value": 408
  },
  {
    "source": "14.4",
    "target": "2.2",
    "value": 162
  },
  {
    "source": "14.4",
    "target": "2.4",
    "value": 352
  },
  {
    "source": "14.4",
    "target": "3.4",
    "value": 207.5
  },
  {
    "source": "14.4",
    "target": "3.8",
    "value": 152
  },
  {
    "source": "14.4",
    "target": "4.1",
    "value": 158
  },
  {
    "source": "14.4",
    "target": "4.4",
    "value": 272
  },
  {
    "source": "14.4",
    "target": "5.4",
    "value": 163
  },
  {
    "source": "14.4",
    "target": "5.5",
    "value": 178.5
  },
  {
    "source": "14.4",
    "target": "6.5",
    "value": 251
  },
  {
    "source": "14.4",
    "target": "6.6",
    "value": 261
  },
  {
    "source": "14.4",
    "target": "7.2",
    "value": 63
  },
  {
    "source": "14.4",
    "target": "7.3",
    "value": 199.5
  },
  {
    "source": "14.4",
    "target": "8.4",
    "value": 288.5
  },
  {
    "source": "14.4",
    "target": "8.5",
    "value": 279
  },
  {
    "source": "14.4",
    "target": "9.4",
    "value": 259.5
  },
  {
    "source": "14.4",
    "target": "9.5",
    "value": 194
  },
  {
    "source": "14.4",
    "target": "10.1",
    "value": 304.5
  },
  {
    "source": "14.4",
    "target": "10.7",
    "value": 212
  },
  {
    "source": "14.4",
    "target": "11.1",
    "value": 199.5
  },
  {
    "source": "14.4",
    "target": "11.2",
    "value": 236.5
  },
  {
    "source": "14.4",
    "target": "12.1",
    "value": 323.5
  },
  {
    "source": "14.4",
    "target": "12.5",
    "value": 238
  },
  {
    "source": "14.4",
    "target": "13.1",
    "value": 366.5
  },
  {
    "source": "14.4",
    "target": "13.2",
    "value": 310
  },
  {
    "source": "14.4",
    "target": "14.1",
    "value": 255
  },
  {
    "source": "14.4",
    "target": "14.4",
    "value": 183.5
  },
  {
    "source": "14.4",
    "target": "15.2",
    "value": 260
  },
  {
    "source": "14.4",
    "target": "15.5",
    "value": 336.5
  },
  {
    "source": "14.4",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "14.4",
    "target": "16.6",
    "value": 177
  },
  {
    "source": "14.4",
    "target": "17.11",
    "value": -2.5
  },
  {
    "source": "14.4",
    "target": "17.13",
    "value": 214.5
  },
  {
    "source": "15.2",
    "target": "1.3",
    "value": 275
  },
  {
    "source": "15.2",
    "target": "1.5",
    "value": 411
  },
  {
    "source": "15.2",
    "target": "2.2",
    "value": 163
  },
  {
    "source": "15.2",
    "target": "2.4",
    "value": 357.5
  },
  {
    "source": "15.2",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "15.2",
    "target": "3.8",
    "value": 153.5
  },
  {
    "source": "15.2",
    "target": "4.1",
    "value": 159.5
  },
  {
    "source": "15.2",
    "target": "4.4",
    "value": 275
  },
  {
    "source": "15.2",
    "target": "5.4",
    "value": 164
  },
  {
    "source": "15.2",
    "target": "5.5",
    "value": 180
  },
  {
    "source": "15.2",
    "target": "6.5",
    "value": 256.5
  },
  {
    "source": "15.2",
    "target": "6.6",
    "value": 264
  },
  {
    "source": "15.2",
    "target": "7.2",
    "value": 61
  },
  {
    "source": "15.2",
    "target": "7.3",
    "value": 204.5
  },
  {
    "source": "15.2",
    "target": "8.4",
    "value": 293
  },
  {
    "source": "15.2",
    "target": "8.5",
    "value": 283
  },
  {
    "source": "15.2",
    "target": "9.4",
    "value": 263
  },
  {
    "source": "15.2",
    "target": "9.5",
    "value": 198
  },
  {
    "source": "15.2",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "15.2",
    "target": "10.7",
    "value": 214.5
  },
  {
    "source": "15.2",
    "target": "11.1",
    "value": 202.5
  },
  {
    "source": "15.2",
    "target": "11.2",
    "value": 238
  },
  {
    "source": "15.2",
    "target": "12.1",
    "value": 326.5
  },
  {
    "source": "15.2",
    "target": "12.5",
    "value": 241.5
  },
  {
    "source": "15.2",
    "target": "13.1",
    "value": 370
  },
  {
    "source": "15.2",
    "target": "13.2",
    "value": 312
  },
  {
    "source": "15.2",
    "target": "14.1",
    "value": 259
  },
  {
    "source": "15.2",
    "target": "14.4",
    "value": 186
  },
  {
    "source": "15.2",
    "target": "15.2",
    "value": 263.5
  },
  {
    "source": "15.2",
    "target": "15.5",
    "value": 339.5
  },
  {
    "source": "15.2",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "15.2",
    "target": "16.6",
    "value": 181
  },
  {
    "source": "15.2",
    "target": "17.11",
    "value": -4
  },
  {
    "source": "15.2",
    "target": "17.13",
    "value": 216
  },
  {
    "source": "15.5",
    "target": "1.3",
    "value": 273.5
  },
  {
    "source": "15.5",
    "target": "1.5",
    "value": 409.5
  },
  {
    "source": "15.5",
    "target": "2.2",
    "value": 167
  },
  {
    "source": "15.5",
    "target": "2.4",
    "value": 367
  },
  {
    "source": "15.5",
    "target": "3.4",
    "value": 208
  },
  {
    "source": "15.5",
    "target": "3.8",
    "value": 153.5
  },
  {
    "source": "15.5",
    "target": "4.1",
    "value": 158.5
  },
  {
    "source": "15.5",
    "target": "4.4",
    "value": 278.5
  },
  {
    "source": "15.5",
    "target": "5.4",
    "value": 162
  },
  {
    "source": "15.5",
    "target": "5.5",
    "value": 180
  },
  {
    "source": "15.5",
    "target": "6.5",
    "value": 263.5
  },
  {
    "source": "15.5",
    "target": "6.6",
    "value": 264.5
  },
  {
    "source": "15.5",
    "target": "7.2",
    "value": 65.5
  },
  {
    "source": "15.5",
    "target": "7.3",
    "value": 215
  },
  {
    "source": "15.5",
    "target": "8.4",
    "value": 300.5
  },
  {
    "source": "15.5",
    "target": "8.5",
    "value": 284
  },
  {
    "source": "15.5",
    "target": "9.4",
    "value": 268
  },
  {
    "source": "15.5",
    "target": "9.5",
    "value": 204.5
  },
  {
    "source": "15.5",
    "target": "10.1",
    "value": 305.5
  },
  {
    "source": "15.5",
    "target": "10.7",
    "value": 213.5
  },
  {
    "source": "15.5",
    "target": "11.1",
    "value": 201.5
  },
  {
    "source": "15.5",
    "target": "11.2",
    "value": 242.5
  },
  {
    "source": "15.5",
    "target": "12.1",
    "value": 336
  },
  {
    "source": "15.5",
    "target": "12.5",
    "value": 245.5
  },
  {
    "source": "15.5",
    "target": "13.1",
    "value": 372
  },
  {
    "source": "15.5",
    "target": "13.2",
    "value": 315.5
  },
  {
    "source": "15.5",
    "target": "14.1",
    "value": 261
  },
  {
    "source": "15.5",
    "target": "14.4",
    "value": 186
  },
  {
    "source": "15.5",
    "target": "15.2",
    "value": 263.5
  },
  {
    "source": "15.5",
    "target": "15.5",
    "value": 346
  },
  {
    "source": "15.5",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "15.5",
    "target": "16.6",
    "value": 187.5
  },
  {
    "source": "15.5",
    "target": "17.11",
    "value": -8.5
  },
  {
    "source": "15.5",
    "target": "17.13",
    "value": 215
  },
  {
    "source": "16.4",
    "target": "1.3",
    "value": 277
  },
  {
    "source": "16.4",
    "target": "1.5",
    "value": 410.5
  },
  {
    "source": "16.4",
    "target": "2.2",
    "value": 161.5
  },
  {
    "source": "16.4",
    "target": "2.4",
    "value": 343
  },
  {
    "source": "16.4",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "16.4",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "16.4",
    "target": "4.1",
    "value": 161.5
  },
  {
    "source": "16.4",
    "target": "4.4",
    "value": 275
  },
  {
    "source": "16.4",
    "target": "5.4",
    "value": 165
  },
  {
    "source": "16.4",
    "target": "5.5",
    "value": 179.5
  },
  {
    "source": "16.4",
    "target": "6.5",
    "value": 243.5
  },
  {
    "source": "16.4",
    "target": "6.6",
    "value": 254.5
  },
  {
    "source": "16.4",
    "target": "7.2",
    "value": 63
  },
  {
    "source": "16.4",
    "target": "7.3",
    "value": 195
  },
  {
    "source": "16.4",
    "target": "8.4",
    "value": 280.5
  },
  {
    "source": "16.4",
    "target": "8.5",
    "value": 283
  },
  {
    "source": "16.4",
    "target": "9.4",
    "value": 254
  },
  {
    "source": "16.4",
    "target": "9.5",
    "value": 192
  },
  {
    "source": "16.4",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "16.4",
    "target": "10.7",
    "value": 215.5
  },
  {
    "source": "16.4",
    "target": "11.1",
    "value": 203
  },
  {
    "source": "16.4",
    "target": "11.2",
    "value": 236.5
  },
  {
    "source": "16.4",
    "target": "12.1",
    "value": 314.5
  },
  {
    "source": "16.4",
    "target": "12.5",
    "value": 230
  },
  {
    "source": "16.4",
    "target": "13.1",
    "value": 362.5
  },
  {
    "source": "16.4",
    "target": "13.2",
    "value": 305.5
  },
  {
    "source": "16.4",
    "target": "14.1",
    "value": 247
  },
  {
    "source": "16.4",
    "target": "14.4",
    "value": 173
  },
  {
    "source": "16.4",
    "target": "15.2",
    "value": 250.5
  },
  {
    "source": "16.4",
    "target": "15.5",
    "value": 329.5
  },
  {
    "source": "16.4",
    "target": "16.4",
    "value": 111
  },
  {
    "source": "16.4",
    "target": "16.6",
    "value": 172.5
  },
  {
    "source": "16.4",
    "target": "17.11",
    "value": 0
  },
  {
    "source": "16.4",
    "target": "17.13",
    "value": 215.5
  },
  {
    "source": "16.6",
    "target": "1.3",
    "value": 279
  },
  {
    "source": "16.6",
    "target": "1.5",
    "value": 412.5
  },
  {
    "source": "16.6",
    "target": "2.2",
    "value": 164.5
  },
  {
    "source": "16.6",
    "target": "2.4",
    "value": 346.5
  },
  {
    "source": "16.6",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "16.6",
    "target": "3.8",
    "value": 155
  },
  {
    "source": "16.6",
    "target": "4.1",
    "value": 160.5
  },
  {
    "source": "16.6",
    "target": "4.4",
    "value": 277
  },
  {
    "source": "16.6",
    "target": "5.4",
    "value": 168
  },
  {
    "source": "16.6",
    "target": "5.5",
    "value": 182.5
  },
  {
    "source": "16.6",
    "target": "6.5",
    "value": 245.5
  },
  {
    "source": "16.6",
    "target": "6.6",
    "value": 257
  },
  {
    "source": "16.6",
    "target": "7.2",
    "value": 64.5
  },
  {
    "source": "16.6",
    "target": "7.3",
    "value": 198.5
  },
  {
    "source": "16.6",
    "target": "8.4",
    "value": 284.5
  },
  {
    "source": "16.6",
    "target": "8.5",
    "value": 287
  },
  {
    "source": "16.6",
    "target": "9.4",
    "value": 257
  },
  {
    "source": "16.6",
    "target": "9.5",
    "value": 195.5
  },
  {
    "source": "16.6",
    "target": "10.1",
    "value": 307
  },
  {
    "source": "16.6",
    "target": "10.7",
    "value": 218
  },
  {
    "source": "16.6",
    "target": "11.1",
    "value": 202
  },
  {
    "source": "16.6",
    "target": "11.2",
    "value": 239.5
  },
  {
    "source": "16.6",
    "target": "12.1",
    "value": 316.5
  },
  {
    "source": "16.6",
    "target": "12.5",
    "value": 233
  },
  {
    "source": "16.6",
    "target": "13.1",
    "value": 364
  },
  {
    "source": "16.6",
    "target": "13.2",
    "value": 307.5
  },
  {
    "source": "16.6",
    "target": "14.1",
    "value": 249
  },
  {
    "source": "16.6",
    "target": "14.4",
    "value": 175.5
  },
  {
    "source": "16.6",
    "target": "15.2",
    "value": 252.5
  },
  {
    "source": "16.6",
    "target": "15.5",
    "value": 331
  },
  {
    "source": "16.6",
    "target": "16.4",
    "value": 109
  },
  {
    "source": "16.6",
    "target": "16.6",
    "value": 179.5
  },
  {
    "source": "16.6",
    "target": "17.11",
    "value": -2
  },
  {
    "source": "16.6",
    "target": "17.13",
    "value": 214
  },
  {
    "source": "17.11",
    "target": "1.3",
    "value": 274.5
  },
  {
    "source": "17.11",
    "target": "1.5",
    "value": 407.5
  },
  {
    "source": "17.11",
    "target": "2.2",
    "value": 159.5
  },
  {
    "source": "17.11",
    "target": "2.4",
    "value": 340.5
  },
  {
    "source": "17.11",
    "target": "3.4",
    "value": 208.5
  },
  {
    "source": "17.11",
    "target": "3.8",
    "value": 154.5
  },
  {
    "source": "17.11",
    "target": "4.1",
    "value": 156
  },
  {
    "source": "17.11",
    "target": "4.4",
    "value": 268.5
  },
  {
    "source": "17.11",
    "target": "5.4",
    "value": 163
  },
  {
    "source": "17.11",
    "target": "5.5",
    "value": 174.5
  },
  {
    "source": "17.11",
    "target": "6.5",
    "value": 241
  },
  {
    "source": "17.11",
    "target": "6.6",
    "value": 254.5
  },
  {
    "source": "17.11",
    "target": "7.2",
    "value": 62
  },
  {
    "source": "17.11",
    "target": "7.3",
    "value": 189
  },
  {
    "source": "17.11",
    "target": "8.4",
    "value": 272.5
  },
  {
    "source": "17.11",
    "target": "8.5",
    "value": 278.5
  },
  {
    "source": "17.11",
    "target": "9.4",
    "value": 248.5
  },
  {
    "source": "17.11",
    "target": "9.5",
    "value": 185
  },
  {
    "source": "17.11",
    "target": "10.1",
    "value": 305
  },
  {
    "source": "17.11",
    "target": "10.7",
    "value": 214
  },
  {
    "source": "17.11",
    "target": "11.1",
    "value": 201
  },
  {
    "source": "17.11",
    "target": "11.2",
    "value": 231.5
  },
  {
    "source": "17.11",
    "target": "12.1",
    "value": 305.5
  },
  {
    "source": "17.11",
    "target": "12.5",
    "value": 222.5
  },
  {
    "source": "17.11",
    "target": "13.1",
    "value": 361.5
  },
  {
    "source": "17.11",
    "target": "13.2",
    "value": 299
  },
  {
    "source": "17.11",
    "target": "14.1",
    "value": 244
  },
  {
    "source": "17.11",
    "target": "14.4",
    "value": 171
  },
  {
    "source": "17.11",
    "target": "15.2",
    "value": 251
  },
  {
    "source": "17.11",
    "target": "15.5",
    "value": 326.5
  },
  {
    "source": "17.11",
    "target": "16.4",
    "value": 105
  },
  {
    "source": "17.11",
    "target": "16.6",
    "value": 166
  },
  {
    "source": "17.11",
    "target": "17.11",
    "value": 2.5
  },
  {
    "source": "17.11",
    "target": "17.13",
    "value": 213
  },
  {
    "source": "17.13",
    "target": "1.3",
    "value": 278.5
  },
  {
    "source": "17.13",
    "target": "1.5",
    "value": 412.5
  },
  {
    "source": "17.13",
    "target": "2.2",
    "value": 166
  },
  {
    "source": "17.13",
    "target": "2.4",
    "value": 348
  },
  {
    "source": "17.13",
    "target": "3.4",
    "value": 209.5
  },
  {
    "source": "17.13",
    "target": "3.8",
    "value": 157
  },
  {
    "source": "17.13",
    "target": "4.1",
    "value": 163
  },
  {
    "source": "17.13",
    "target": "4.4",
    "value": 280
  },
  {
    "source": "17.13",
    "target": "5.4",
    "value": 166
  },
  {
    "source": "17.13",
    "target": "5.5",
    "value": 182.5
  },
  {
    "source": "17.13",
    "target": "6.5",
    "value": 248
  },
  {
    "source": "17.13",
    "target": "6.6",
    "value": 256
  },
  {
    "source": "17.13",
    "target": "7.2",
    "value": 66.5
  },
  {
    "source": "17.13",
    "target": "7.3",
    "value": 203
  },
  {
    "source": "17.13",
    "target": "8.4",
    "value": 289
  },
  {
    "source": "17.13",
    "target": "8.5",
    "value": 288.5
  },
  {
    "source": "17.13",
    "target": "9.4",
    "value": 260.5
  },
  {
    "source": "17.13",
    "target": "9.5",
    "value": 198.5
  },
  {
    "source": "17.13",
    "target": "10.1",
    "value": 306
  },
  {
    "source": "17.13",
    "target": "10.7",
    "value": 217.5
  },
  {
    "source": "17.13",
    "target": "11.1",
    "value": 204
  },
  {
    "source": "17.13",
    "target": "11.2",
    "value": 240.5
  },
  {
    "source": "17.13",
    "target": "12.1",
    "value": 322
  },
  {
    "source": "17.13",
    "target": "12.5",
    "value": 236.5
  },
  {
    "source": "17.13",
    "target": "13.1",
    "value": 365.5
  },
  {
    "source": "17.13",
    "target": "13.2",
    "value": 310.5
  },
  {
    "source": "17.13",
    "target": "14.1",
    "value": 251
  },
  {
    "source": "17.13",
    "target": "14.4",
    "value": 176.5
  },
  {
    "source": "17.13",
    "target": "15.2",
    "value": 251
  },
  {
    "source": "17.13",
    "target": "15.5",
    "value": 331.5
  },
  {
    "source": "17.13",
    "target": "16.4",
    "value": 112
  },
  {
    "source": "17.13",
    "target": "16.6",
    "value": 180
  },
  {
    "source": "17.13",
    "target": "17.11",
    "value": -2.5
  },
  {
    "source": "17.13",
    "target": "17.13",
    "value": 217.5
  }
]



connections3orderInfluenced = connections3orderInfluenced.filter(function(d) {return d.value != 0});
connections3orderInfluencing = connections3orderInfluencing.filter(function(d) {return d.value != 0});


connections3orderInfluencedMax = Math.max.apply(Math,connections3orderInfluenced.map(function(o){return o.value;}));
connections3orderInfluencedMin =  Math.min.apply(Math,connections3orderInfluenced.map(function(o){return o.value;}));

connections3orderInfluencingMax = Math.max.apply(Math,connections3orderInfluencing.map(function(o){return o.value;}));
connections3orderInfluencingMin =  Math.min.apply(Math,connections3orderInfluencing.map(function(o){return o.value;}));

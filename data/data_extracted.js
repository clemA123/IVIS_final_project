/* DATA PART
  var data = []

  d3.csv("data/nodes.csv")
    .row(function (d){
      return{
      name: d.name,
      influencing: parseInt(d.influencing),
      influenced: parseInt(d.influenced)
      };
    })
    .get(function(error,csv) {
      data = csv;
    })
	
	
  ##ADD RANKS : 
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
	
	
	data.sort(function(a,b){return parseFloat(a.name) - parseFloat(b.name)})
  
  
  ##END add ranks

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



  var connections = []

  d3.csv("data/connections_fake.csv")
   .row(function (d){
      return{
      source: d.source.replace(",","."),
      target: d.target.replace(",","."),
      value: parseFloat(d.value)
      };
    })
    .get(function(error,csv) {
      connections = csv.filter(function(d){return d.value!=0 });
      return connections;
    })


 End of data part */



data =[
  {
    "name": "1.3",
    "influencing": 25,
    "influenced": 26,
    "rankInfluencing": 12,
    "rankInfluenced": 10
  },
  {
    "name": "1.5",
    "influencing": 26,
    "influenced": 37,
    "rankInfluencing": 11,
    "rankInfluenced": 1
  },
  {
    "name": "2.2",
    "influencing": 13,
    "influenced": 16,
    "rankInfluencing": 22,
    "rankInfluenced": 25
  },
  {
    "name": "2.4",
    "influencing": 23,
    "influenced": 32,
    "rankInfluencing": 14,
    "rankInfluenced": 2
  },
  {
    "name": "3.4",
    "influencing": 4,
    "influenced": 21,
    "rankInfluencing": 33,
    "rankInfluenced": 17
  },
  {
    "name": "3.8",
    "influencing": 11,
    "influenced": 14,
    "rankInfluencing": 29,
    "rankInfluenced": 30
  },
  {
    "name": "4.1",
    "influencing": 17,
    "influenced": 15,
    "rankInfluencing": 19,
    "rankInfluenced": 29
  },
  {
    "name": "4.4",
    "influencing": 30,
    "influenced": 24,
    "rankInfluencing": 5,
    "rankInfluenced": 12
  },
  {
    "name": "5.4",
    "influencing": 24,
    "influenced": 15,
    "rankInfluencing": 13,
    "rankInfluenced": 27
  },
  {
    "name": "5.5",
    "influencing": 31,
    "influenced": 15,
    "rankInfluencing": 4,
    "rankInfluenced": 26
  },
  {
    "name": "6.5",
    "influencing": 22,
    "influenced": 20,
    "rankInfluencing": 15,
    "rankInfluenced": 18
  },
  {
    "name": "6.6",
    "influencing": 9,
    "influenced": 20,
    "rankInfluencing": 32,
    "rankInfluenced": 20
  },
  {
    "name": "7.2",
    "influencing": 12,
    "influenced": 4,
    "rankInfluencing": 27,
    "rankInfluenced": 33
  },
  {
    "name": "7.3",
    "influencing": 20,
    "influenced": 15,
    "rankInfluencing": 17,
    "rankInfluenced": 28
  },
  {
    "name": "8.4",
    "influencing": 40,
    "influenced": 26,
    "rankInfluencing": 3,
    "rankInfluenced": 9
  },
  {
    "name": "8.5",
    "influencing": 29,
    "influenced": 27,
    "rankInfluencing": 6,
    "rankInfluenced": 8
  },
  {
    "name": "9.4",
    "influencing": 28,
    "influenced": 25,
    "rankInfluencing": 9,
    "rankInfluenced": 11
  },
  {
    "name": "9.5",
    "influencing": 29,
    "influenced": 17,
    "rankInfluencing": 7,
    "rankInfluenced": 23
  },
  {
    "name": "10.1",
    "influencing": 11,
    "influenced": 28,
    "rankInfluencing": 30,
    "rankInfluenced": 7
  },
  {
    "name": "10.7",
    "influencing": 15,
    "influenced": 22,
    "rankInfluencing": 21,
    "rankInfluenced": 13
  },
  {
    "name": "11.1",
    "influencing": 13,
    "influenced": 17,
    "rankInfluencing": 23,
    "rankInfluenced": 24
  },
  {
    "name": "11.2",
    "influencing": 21,
    "influenced": 21,
    "rankInfluencing": 16,
    "rankInfluenced": 14
  },
  {
    "name": "12.1",
    "influencing": 43,
    "influenced": 29,
    "rankInfluencing": 2,
    "rankInfluenced": 4
  },
  {
    "name": "12.5",
    "influencing": 29,
    "influenced": 18,
    "rankInfluencing": 8,
    "rankInfluenced": 21
  },
  {
    "name": "13.1",
    "influencing": 28,
    "influenced": 30,
    "rankInfluencing": 10,
    "rankInfluenced": 3
  },
  {
    "name": "13.2",
    "influencing": 13,
    "influenced": 29,
    "rankInfluencing": 24,
    "rankInfluenced": 5
  },
  {
    "name": "14.1",
    "influencing": 13,
    "influenced": 21,
    "rankInfluencing": 25,
    "rankInfluenced": 15
  },
  {
    "name": "14.4",
    "influencing": 13,
    "influenced": 13,
    "rankInfluencing": 26,
    "rankInfluenced": 31
  },
  {
    "name": "15.2",
    "influencing": 12,
    "influenced": 20,
    "rankInfluencing": 28,
    "rankInfluenced": 19
  },
  {
    "name": "15.5",
    "influencing": 16,
    "influenced": 28,
    "rankInfluencing": 20,
    "rankInfluenced": 6
  },
  {
    "name": "16.4",
    "influencing": 19,
    "influenced": 11,
    "rankInfluencing": 18,
    "rankInfluenced": 32
  },
  {
    "name": "16.6",
    "influencing": 51,
    "influenced": 17,
    "rankInfluencing": 1,
    "rankInfluenced": 22
  },
  {
    "name": "17.11",
    "influencing": -9,
    "influenced": -2,
    "rankInfluencing": 34,
    "rankInfluenced": 34
  },
  {
    "name": "17.13",
    "influencing": 11,
    "influenced": 21,
    "rankInfluencing": 31,
    "rankInfluenced": 16
  }
]
positions = [
  {
    "name": "1.3",
    "x": 50,
    "y": 0
  },
  {
    "name": "1.5",
    "x": 70,
    "y": 0
  },
  {
    "name": "2.2",
    "x": 46.62361147021779,
    "y": 18.062083309357646
  },
  {
    "name": "2.4",
    "x": 65.2730560583049,
    "y": 25.286916633100706
  },
  {
    "name": "3.4",
    "x": 36.950445861032954,
    "y": 33.68478218232786
  },
  {
    "name": "3.8",
    "x": 51.730624205446134,
    "y": 47.158695055259
  },
  {
    "name": "4.1",
    "x": 22.286917788826916,
    "y": 44.75816456775312
  },
  {
    "name": "4.4",
    "x": 31.20168490435768,
    "y": 62.661430394854364
  },
  {
    "name": "5.4",
    "x": 4.613417973165101,
    "y": 49.78670881475173
  },
  {
    "name": "5.5",
    "x": 6.458785162431141,
    "y": 69.70139234065242
  },
  {
    "name": "6.5",
    "x": -13.683149503604145,
    "y": 48.09128215864095
  },
  {
    "name": "6.6",
    "x": -19.156409305045802,
    "y": 67.32779502209733
  },
  {
    "name": "7.2",
    "x": -30.131731818962816,
    "y": 39.90086136401198
  },
  {
    "name": "7.3",
    "x": -42.18442454654794,
    "y": 55.86120590961677
  },
  {
    "name": "8.4",
    "x": -42.5108567864807,
    "y": 26.321608143867802
  },
  {
    "name": "8.5",
    "x": -59.51519950107298,
    "y": 36.85025140141492
  },
  {
    "name": "9.4",
    "x": -49.14865498419509,
    "y": 9.187475890828518
  },
  {
    "name": "9.5",
    "x": -68.80811697787313,
    "y": 12.862466247159926
  },
  {
    "name": "10.1",
    "x": -49.14865498419509,
    "y": -9.187475890828505
  },
  {
    "name": "10.7",
    "x": -68.80811697787313,
    "y": -12.862466247159908
  },
  {
    "name": "11.1",
    "x": -42.51085678648071,
    "y": -26.321608143867792
  },
  {
    "name": "11.2",
    "x": -59.515199501072985,
    "y": -36.85025140141491
  },
  {
    "name": "12.1",
    "x": -30.13173181896286,
    "y": -39.900861364011945
  },
  {
    "name": "12.5",
    "x": -42.184424546548,
    "y": -55.86120590961673
  },
  {
    "name": "13.1",
    "x": -13.683149503604156,
    "y": -48.09128215864095
  },
  {
    "name": "13.2",
    "x": -19.156409305045816,
    "y": -67.32779502209733
  },
  {
    "name": "14.1",
    "x": 4.613417973165122,
    "y": -49.78670881475173
  },
  {
    "name": "14.4",
    "x": 6.4587851624311705,
    "y": -69.70139234065242
  },
  {
    "name": "15.2",
    "x": 22.286917788826884,
    "y": -44.75816456775313
  },
  {
    "name": "15.5",
    "x": 31.201684904357638,
    "y": -62.66143039485438
  },
  {
    "name": "16.4",
    "x": 36.95044586103293,
    "y": -33.684782182327886
  },
  {
    "name": "16.6",
    "x": 51.730624205446105,
    "y": -47.158695055259045
  },
  {
    "name": "17.11",
    "x": 46.62361147021779,
    "y": -18.06208330935765
  },
  {
    "name": "17.13",
    "x": 65.2730560583049,
    "y": -25.286916633100713
  }
]

connections = [
  {
    "source": "1.3",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "3.4",
    "value": 2
  },
  {
    "source": "1.3",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "4.4",
    "value": 2
  },
  {
    "source": "1.3",
    "target": "5.4",
    "value": 2
  },
  {
    "source": "1.3",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "10.1",
    "value": 3
  },
  {
    "source": "1.3",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "11.1",
    "value": 2
  },
  {
    "source": "1.3",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "1.3",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "1.5",
    "target": "1.3",
    "value": 2
  },
  {
    "source": "1.5",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "4.4",
    "value": 2
  },
  {
    "source": "1.5",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "6.6",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "1.5",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "11.1",
    "value": 2
  },
  {
    "source": "1.5",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "15.5",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "1.5",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "2.2",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "2.2",
    "target": "3.4",
    "value": 3
  },
  {
    "source": "2.2",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "2.2",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "2.2",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "2.2",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "2.2",
    "target": "13.2",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "2.4",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "6.6",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "2.4",
    "target": "8.4",
    "value": 1
  },
  {
    "source": "2.4",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "12.1",
    "value": 1
  },
  {
    "source": "2.4",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "2.4",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "14.1",
    "value": 2
  },
  {
    "source": "2.4",
    "target": "14.4",
    "value": 3
  },
  {
    "source": "2.4",
    "target": "15.2",
    "value": 3
  },
  {
    "source": "2.4",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "3.4",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "3.4",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "3.4",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "3.4",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "3.8",
    "target": "1.3",
    "value": 2
  },
  {
    "source": "3.8",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "3.8",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "3.8",
    "target": "3.4",
    "value": 2
  },
  {
    "source": "3.8",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "3.8",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "3.8",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "1.3",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "4.1",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "4.4",
    "value": 3
  },
  {
    "source": "4.1",
    "target": "8.5",
    "value": 2
  },
  {
    "source": "4.1",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "4.1",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "12.1",
    "value": 1
  },
  {
    "source": "4.1",
    "target": "16.6",
    "value": 2
  },
  {
    "source": "4.4",
    "target": "1.3",
    "value": 2
  },
  {
    "source": "4.4",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "4.4",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "7.3",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "8.4",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "8.5",
    "value": 3
  },
  {
    "source": "4.4",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "4.4",
    "target": "9.5",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "4.4",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "13.2",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "14.4",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "4.4",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "5.4",
    "target": "1.3",
    "value": 3
  },
  {
    "source": "5.4",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "5.4",
    "target": "2.2",
    "value": 3
  },
  {
    "source": "5.4",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "5.4",
    "target": "3.4",
    "value": 2
  },
  {
    "source": "5.4",
    "target": "3.8",
    "value": 2
  },
  {
    "source": "5.4",
    "target": "4.1",
    "value": 2
  },
  {
    "source": "5.4",
    "target": "4.4",
    "value": 3
  },
  {
    "source": "5.4",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "5.4",
    "target": "8.5",
    "value": 2
  },
  {
    "source": "5.4",
    "target": "10.1",
    "value": 3
  },
  {
    "source": "5.4",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "5.4",
    "target": "11.1",
    "value": -1
  },
  {
    "source": "5.4",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "1.3",
    "value": 3
  },
  {
    "source": "5.5",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "2.2",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "3.4",
    "value": 3
  },
  {
    "source": "5.5",
    "target": "3.8",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "4.1",
    "value": 3
  },
  {
    "source": "5.5",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "5.4",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "8.5",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "5.5",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "5.5",
    "target": "16.6",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "6.6",
    "value": 3
  },
  {
    "source": "6.5",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "6.5",
    "target": "8.4",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "11.1",
    "value": -1
  },
  {
    "source": "6.5",
    "target": "12.1",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "13.2",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "14.1",
    "value": 3
  },
  {
    "source": "6.5",
    "target": "14.4",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "6.5",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "6.5",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "6.6",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "6.6",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "6.6",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "6.6",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "6.6",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "6.6",
    "target": "15.2",
    "value": 2
  },
  {
    "source": "6.6",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "7.2",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "6.5",
    "value": -1
  },
  {
    "source": "7.2",
    "target": "6.6",
    "value": -2
  },
  {
    "source": "7.2",
    "target": "7.3",
    "value": -1
  },
  {
    "source": "7.2",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "7.2",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "9.4",
    "value": 3
  },
  {
    "source": "7.2",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "7.2",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "7.2",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "7.2",
    "target": "15.2",
    "value": -1
  },
  {
    "source": "7.2",
    "target": "15.5",
    "value": -1
  },
  {
    "source": "7.2",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "7.2",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "7.2",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "7.3",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "7.3",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "7.3",
    "target": "8.4",
    "value": 3
  },
  {
    "source": "7.3",
    "target": "9.4",
    "value": 3
  },
  {
    "source": "7.3",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "7.3",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "7.3",
    "target": "11.2",
    "value": 2
  },
  {
    "source": "7.3",
    "target": "12.1",
    "value": 3
  },
  {
    "source": "7.3",
    "target": "12.5",
    "value": 3
  },
  {
    "source": "7.3",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "7.3",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "7.3",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "8.4",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "6.6",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "8.5",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "11.1",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "11.2",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "12.1",
    "value": 3
  },
  {
    "source": "8.4",
    "target": "12.5",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "13.2",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "14.1",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "14.4",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "8.4",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "8.4",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "8.4",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "1.3",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "4.4",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "5.5",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "8.4",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "9.5",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "10.1",
    "value": 2
  },
  {
    "source": "8.5",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "12.1",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "17.11",
    "value": 1
  },
  {
    "source": "8.5",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "9.4",
    "target": "14.1",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "9.4",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "9.4",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "4.4",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "11.1",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "11.2",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "12.5",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "13.2",
    "value": 2
  },
  {
    "source": "9.5",
    "target": "14.1",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "15.5",
    "value": 1
  },
  {
    "source": "9.5",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "10.1",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "10.1",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "1.3",
    "value": 2
  },
  {
    "source": "10.7",
    "target": "1.5",
    "value": 3
  },
  {
    "source": "10.7",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "3.8",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "10.7",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "10.7",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "1.3",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "11.1",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "7.3",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "10.7",
    "value": 3
  },
  {
    "source": "11.1",
    "target": "11.2",
    "value": 2
  },
  {
    "source": "11.1",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "11.1",
    "target": "13.2",
    "value": -1
  },
  {
    "source": "11.2",
    "target": "1.3",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "11.2",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "11.2",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "11.2",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "11.2",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "11.2",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "12.1",
    "target": "1.3",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "6.6",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "7.2",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "8.4",
    "value": 3
  },
  {
    "source": "12.1",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "9.5",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "11.2",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "12.5",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "12.1",
    "target": "14.1",
    "value": 3
  },
  {
    "source": "12.1",
    "target": "14.4",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "15.2",
    "value": 2
  },
  {
    "source": "12.1",
    "target": "15.5",
    "value": 3
  },
  {
    "source": "12.1",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "12.1",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "12.1",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "12.5",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "5.4",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "6.6",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "7.2",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "7.3",
    "value": 2
  },
  {
    "source": "12.5",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "12.5",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "12.1",
    "value": 3
  },
  {
    "source": "12.5",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "13.2",
    "value": 2
  },
  {
    "source": "12.5",
    "target": "14.1",
    "value": 2
  },
  {
    "source": "12.5",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "15.5",
    "value": 3
  },
  {
    "source": "12.5",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "12.5",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "12.5",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "13.1",
    "target": "1.3",
    "value": 3
  },
  {
    "source": "13.1",
    "target": "1.5",
    "value": 3
  },
  {
    "source": "13.1",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "2.4",
    "value": 3
  },
  {
    "source": "13.1",
    "target": "3.8",
    "value": 2
  },
  {
    "source": "13.1",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "13.1",
    "target": "6.6",
    "value": 3
  },
  {
    "source": "13.1",
    "target": "7.2",
    "value": -2
  },
  {
    "source": "13.1",
    "target": "7.3",
    "value": -1
  },
  {
    "source": "13.1",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "9.4",
    "value": -1
  },
  {
    "source": "13.1",
    "target": "9.5",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "10.7",
    "value": 2
  },
  {
    "source": "13.1",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "13.2",
    "value": 3
  },
  {
    "source": "13.1",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "15.5",
    "value": 1
  },
  {
    "source": "13.1",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "1.3",
    "value": -1
  },
  {
    "source": "13.2",
    "target": "2.2",
    "value": -2
  },
  {
    "source": "13.2",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "3.8",
    "value": -1
  },
  {
    "source": "13.2",
    "target": "6.6",
    "value": -1
  },
  {
    "source": "13.2",
    "target": "7.2",
    "value": 2
  },
  {
    "source": "13.2",
    "target": "7.3",
    "value": 3
  },
  {
    "source": "13.2",
    "target": "8.4",
    "value": 3
  },
  {
    "source": "13.2",
    "target": "9.4",
    "value": 2
  },
  {
    "source": "13.2",
    "target": "9.5",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "11.1",
    "value": -1
  },
  {
    "source": "13.2",
    "target": "11.2",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "13.2",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "13.2",
    "target": "14.1",
    "value": 2
  },
  {
    "source": "13.2",
    "target": "15.2",
    "value": -1
  },
  {
    "source": "13.2",
    "target": "15.5",
    "value": 1
  },
  {
    "source": "14.1",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "14.1",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "14.1",
    "target": "6.6",
    "value": 3
  },
  {
    "source": "14.1",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "14.1",
    "target": "12.5",
    "value": 2
  },
  {
    "source": "14.1",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "14.4",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "14.4",
    "target": "2.4",
    "value": 3
  },
  {
    "source": "14.4",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "14.4",
    "target": "6.6",
    "value": 2
  },
  {
    "source": "14.4",
    "target": "8.4",
    "value": 2
  },
  {
    "source": "14.4",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "14.4",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "15.2",
    "target": "1.5",
    "value": 1
  },
  {
    "source": "15.2",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "15.2",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "15.2",
    "target": "6.6",
    "value": 3
  },
  {
    "source": "15.2",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "15.2",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "15.2",
    "target": "13.2",
    "value": 1
  },
  {
    "source": "15.2",
    "target": "14.1",
    "value": 1
  },
  {
    "source": "15.2",
    "target": "15.5",
    "value": 3
  },
  {
    "source": "15.2",
    "target": "17.11",
    "value": -1
  },
  {
    "source": "15.5",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "15.5",
    "target": "6.5",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "6.6",
    "value": 2
  },
  {
    "source": "15.5",
    "target": "12.1",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "13.1",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "14.1",
    "value": 1
  },
  {
    "source": "15.5",
    "target": "14.4",
    "value": 3
  },
  {
    "source": "15.5",
    "target": "15.2",
    "value": 3
  },
  {
    "source": "16.4",
    "target": "1.3",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "2.2",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "2.4",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "5.4",
    "value": 2
  },
  {
    "source": "16.4",
    "target": "5.5",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "8.5",
    "value": 2
  },
  {
    "source": "16.4",
    "target": "10.7",
    "value": 3
  },
  {
    "source": "16.4",
    "target": "11.1",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "14.1",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "14.4",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "15.2",
    "value": 1
  },
  {
    "source": "16.4",
    "target": "16.6",
    "value": 3
  },
  {
    "source": "16.4",
    "target": "17.13",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "1.3",
    "value": 3
  },
  {
    "source": "16.6",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "2.2",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "3.4",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "3.8",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "4.1",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "4.4",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "5.4",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "5.5",
    "value": 3
  },
  {
    "source": "16.6",
    "target": "6.5",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "6.6",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "9.5",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "10.1",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "10.7",
    "value": 3
  },
  {
    "source": "16.6",
    "target": "12.1",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "12.5",
    "value": 1
  },
  {
    "source": "16.6",
    "target": "13.1",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "13.2",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "14.1",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "14.4",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "15.2",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "15.5",
    "value": 2
  },
  {
    "source": "16.6",
    "target": "16.4",
    "value": 3
  },
  {
    "source": "16.6",
    "target": "17.13",
    "value": 3
  },
  {
    "source": "17.11",
    "target": "1.5",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "2.4",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "7.2",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "7.3",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "8.4",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "8.5",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "10.1",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "17.11",
    "target": "12.1",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "12.5",
    "value": -2
  },
  {
    "source": "17.11",
    "target": "13.1",
    "value": -2
  },
  {
    "source": "17.11",
    "target": "13.2",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "14.4",
    "value": -1
  },
  {
    "source": "17.11",
    "target": "16.4",
    "value": 1
  },
  {
    "source": "17.11",
    "target": "16.6",
    "value": 1
  },
  {
    "source": "17.11",
    "target": "17.13",
    "value": 2
  },
  {
    "source": "17.13",
    "target": "1.5",
    "value": 2
  },
  {
    "source": "17.13",
    "target": "2.4",
    "value": 2
  },
  {
    "source": "17.13",
    "target": "7.2",
    "value": 2
  },
  {
    "source": "17.13",
    "target": "7.3",
    "value": 1
  },
  {
    "source": "17.13",
    "target": "8.5",
    "value": 1
  },
  {
    "source": "17.13",
    "target": "9.4",
    "value": 1
  },
  {
    "source": "17.13",
    "target": "10.7",
    "value": 1
  },
  {
    "source": "17.13",
    "target": "17.11",
    "value": 1
  }
]

/* numberOfLink = {}
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
*/


numberOfLink = {
  "1.3": {
    "source": 18,
    "target": 15,
    "sum": 33
  },
  "1.5": {
    "source": 21,
    "target": 25,
    "sum": 46
  },
  "2.2": {
    "source": 7,
    "target": 15,
    "sum": 22
  },
  "3.4": {
    "source": 4,
    "target": 14,
    "sum": 18
  },
  "3.8": {
    "source": 7,
    "target": 12,
    "sum": 19
  },
  "4.1": {
    "source": 11,
    "target": 12,
    "sum": 23
  },
  "4.4": {
    "source": 24,
    "target": 16,
    "sum": 40
  },
  "5.4": {
    "source": 14,
    "target": 11,
    "sum": 25
  },
  "5.5": {
    "source": 18,
    "target": 12,
    "sum": 30
  },
  "8.5": {
    "source": 23,
    "target": 22,
    "sum": 45
  },
  "10.1": {
    "source": 10,
    "target": 20,
    "sum": 30
  },
  "10.7": {
    "source": 11,
    "target": 15,
    "sum": 26
  },
  "11.1": {
    "source": 11,
    "target": 19,
    "sum": 30
  },
  "11.2": {
    "source": 15,
    "target": 16,
    "sum": 31
  },
  "13.1": {
    "source": 22,
    "target": 24,
    "sum": 46
  },
  "16.4": {
    "source": 13,
    "target": 9,
    "sum": 22
  },
  "16.6": {
    "source": 27,
    "target": 13,
    "sum": 40
  },
  "17.11": {
    "source": 16,
    "target": 10,
    "sum": 26
  },
  "17.13": {
    "source": 8,
    "target": 13,
    "sum": 21
  },
  "6.6": {
    "source": 7,
    "target": 14,
    "sum": 21
  },
  "15.2": {
    "source": 10,
    "target": 17,
    "sum": 27
  },
  "15.5": {
    "source": 10,
    "target": 16,
    "sum": 26
  },
  "8.4": {
    "source": 28,
    "target": 15,
    "sum": 43
  },
  "12.1": {
    "source": 27,
    "target": 17,
    "sum": 44
  },
  "13.2": {
    "source": 18,
    "target": 16,
    "sum": 34
  },
  "2.4": {
    "source": 14,
    "target": 21,
    "sum": 35
  },
  "6.5": {
    "source": 17,
    "target": 15,
    "sum": 32
  },
  "7.2": {
    "source": 18,
    "target": 16,
    "sum": 34
  },
  "9.4": {
    "source": 20,
    "target": 16,
    "sum": 36
  },
  "9.5": {
    "source": 20,
    "target": 11,
    "sum": 31
  },
  "12.5": {
    "source": 22,
    "target": 15,
    "sum": 37
  },
  "14.1": {
    "source": 6,
    "target": 12,
    "sum": 18
  },
  "14.4": {
    "source": 7,
    "target": 9,
    "sum": 16
  },
  "7.3": {
    "source": 12,
    "target": 13,
    "sum": 25
  }
}
/* Get by
file = open("description.txt")
text = file.read()
lines = text.split("\n\n")

for i in range (0,len(lines),3):
	print('case "%s":\n return { "shortDescription":"%s : %s" ,\n "longDescription":"%s" } \n break;' % (lines[i],lines[i],lines[i+1],lines[i+2]))
	*/

function formatDescription(id){
switch(id) {
	case "1.3":
	 return { "shortDescription":"1.3 : Social protection" ,
	 "longDescription":"Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable" }
	 break;
	case "1.5":
	 return { "shortDescription":"1.5 : Economic and social resilience" ,
	 "longDescription":"By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters" }
	 break;
	case "2.2":
	 return { "shortDescription":"2.2 : Malnutrition" ,
	 "longDescription":"By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons" }
	 break;
	case "2.4":
	 return { "shortDescription":"2.4 : Food production/ agriculture" ,
	 "longDescription":"By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality" }
	 break;
	case "3.4":
	 return { "shortDescription":"3.4 : Non-communicable disease" ,
	 "longDescription":"By 2030, reduce by one-third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being" }
	 break;
	case "3.8":
	 return { "shortDescription":"3.8 : Health coverage" ,
	 "longDescription":"Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all" }
	 break;
	case "4.1":
	 return { "shortDescription":"4.1 : Primary and secondary education" ,
	 "longDescription":"By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes" }
	 break;
	case "4.4":
	 return { "shortDescription":"4.4 : Technical/vocational skills" ,
	 "longDescription":"By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship" }
	 break;
	case "5.4":
	 return { "shortDescription":"5.4 : Unpaid/domestic work" ,
	 "longDescription":"Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate" }
	 break;
	case "5.5":
	 return { "shortDescription":"5.5 : Women’s participation" ,
	 "longDescription":"Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life" }
	 break;
	case "6.5":
	 return { "shortDescription":"6.5 : Water resources management" ,
	 "longDescription":"By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate" }
	 break;
	case "6.6":
	 return { "shortDescription":"6.6 : Water-related ecosystems" ,
	 "longDescription":"By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes" }
	 break;
	case "7.2":
	 return { "shortDescription":"7.2 : Renewable energy" ,
	 "longDescription":"By 2030, increase substantially the share of renewable energy in the global energy mix" }
	 break;
	case "7.3":
	 return { "shortDescription":"7.3 : Energy efficiency" ,
	 "longDescription":"By 2030, double the global rate of improvement in energy efficiency" }
	 break;
	case "8.4":
	 return { "shortDescription":"8.4 : Resource efficiency" ,
	 "longDescription":"Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead" }
	 break;
	case "8.5":
	 return { "shortDescription":"8.5 : Employment" ,
	 "longDescription":"By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value" }
	 break;
	case "9.4":
	 return { "shortDescription":"9.4 : Infrastructure" ,
	 "longDescription":"By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities" }
	 break;
	case "9.5":
	 return { "shortDescription":"9.5 : Research/development" ,
	 "longDescription":"Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending" }
	 break;
	case "10.1":
	 return { "shortDescription":"10.1 : Economic equality" ,
	 "longDescription":"By 2030, progressively achieve and sustain income growth of the bottom 40% of the population at a rate higher than the national average" }
	 break;
	case "10.7":
	 return { "shortDescription":"10.7 : Migration" ,
	 "longDescription":"Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies" }
	 break;
	case "11.1":
	 return { "shortDescription":"11.1 : Affordable housing" ,
	 "longDescription":"By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums" }
	 break;
	case "11.2":
	 return { "shortDescription":"11.2 : Transport" ,
	 "longDescription":"By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons" }
	 break;
	case "12.1":
	 return { "shortDescription":"12.1 : Sustainable consumption/production" ,
	 "longDescription":"Implement the 10-year Framework of Programmes on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries" }
	 break;
	case "12.5":
	 return { "shortDescription":"12.5 : Waste" ,
	 "longDescription":"By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse" }
	 break;
	case "13.1":
	 return { "shortDescription":"13.1 : Climate change adaptation" ,
	 "longDescription":"Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries" }
	 break;
	case "13.2":
	 return { "shortDescription":"13.2 : Climate change policy/planning" ,
	 "longDescription":"Integrate climate change measures into national policies, strategies and planning" }
	 break;
	case "14.1":
	 return { "shortDescription":"14.1 : Marine pollution" ,
	 "longDescription":"By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution" }
	 break;
	case "14.4":
	 return { "shortDescription":"14.4 : Fishery" ,
	 "longDescription":"By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics" }
	 break;
	case "15.2":
	 return { "shortDescription":"15.2 : Forests" ,
	 "longDescription":"By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally" }
	 break;
	case "15.5":
	 return { "shortDescription":"15.5 : Biodiversity" ,
	 "longDescription":"Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species" }
	 break;
	case "16.4":
	 return { "shortDescription":"16.4 : Illicit financial/arms flow" ,
	 "longDescription":"By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime" }
	 break;
	case "16.6":
	 return { "shortDescription":"16.6 : Effective institutions" ,
	 "longDescription":"Develop effective, accountable and transparent institutions at all levels" }
	 break;
	case "17.11":
	 return { "shortDescription":"17.11 : Exports from developing countries" ,
	 "longDescription":"Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries’ share of global exports by 2020" }
	 break;
	case "17.13":
	 return { "shortDescription":"17.13 : Macroeconomic stability" ,
	 "longDescription":"Enhance global macroeconomic stability, including through policy coordination and policy coherence" }
	 break;
    default:
      return{
        "shortDescription" : ("Node : " + id),
        "longDescription" : ("Write a description for " + id)
      }


}
}

function formatEdgesText(value){
	switch(value){
		case (-3): return {"color":"#9C4A56", "text":"CANCELLING (-3) : Makes it impossible to reach another goal"}
		case (-2): return {"color":"#D6707D", "text": "COUNTERACTING (-2) : Clashed with another goal "}
		case (-1): return {"color":"#E8AD84", "text":"CONSTRAINING (-1) : Limits options on another goal "}
		case (0): return {"color": "#F2EBA5","text":"CONSISTENT (0) : No significant positive or negative interactions"}
		case (+1): return {"color":"#C7D795", "text":"ENABLING (+1) : Creates conditions that further another goal"}
		case (+2): return {"color":"#99CA8E","text":"REINFORCING (+2) : Aids the achievement of another goal"}
		case (+3): return {"color":"#70B388","text":"INDIVISBLE (+3) : Inextricably linked to the achievement of another goal"}
	}
}

function formatColor(categoryId){

	switch(categoryId){
		case "1" : return "E5243B"
		case "2" : return "DDA63A"
		case "3" : return "4C9F38"
		case "4" : return "C5192D"
		case "5" : return "FF3A21"
		case "6" : return "26BDE2"
		case "7" : return "FCC30B"
		case "8" : return "A21942"
		case "9" : return "FD6925"
		case "10" : return "DD1367"
		case "11" : return "FD9D24"
		case "12" : return "BF8B2E"
		case "13" : return "3F7E44"
		case "14" : return "0A97D9"
		case "15" : return "56C02B"
		case "16" : return "00689D"
		case "17" : return "19486A"

		default : return "000000"

	}

}

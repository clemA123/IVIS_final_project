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
	reduce_value = reduction(value);
	if (reduce_value < -2.5) return {"color":"#9C4A56", "text":"CANCELLING ("+ d3.round(value,2) +") : Makes it impossible to reach another goal"}
	else if	(reduce_value < - 1.5) return {"color":"#D6707D", "text": "COUNTERACTING ("+ d3.round(value,2) +"): Clashed with another goal "}
	else if	(reduce_value < - 0.5)  return {"color":"#E8AD84", "text":"CONSTRAINING ("+ d3.round(value,2) +") : Limits options on another goal "}
	else if	(reduce_value < 0.5) return {"color": "#F2EBA5","text":"CONSISTENT ("+ d3.round(value,2) +") : No significant positive or negative interactions"}
	else if	(reduce_value < 1.5) return {"color":"#C7D795", "text":"ENABLING ("+ d3.round(value,2) +") : Creates conditions that further another goal"}
	else if	(reduce_value < 2.5) return {"color":"#99CA8E","text":"REINFORCING ("+ d3.round(value,2) +") : Aids the achievement of another goal"}
	else return {"color":"#70B388","text":"INDIVISBLE ("+ d3.round(value,2) +") : Inextricably linked to the achievement of another goal"} //2.5 and above
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


function orderColor(order){
	switch(order){
		case (1) : return {"color":"#b2ebf2" ,"text":"1st Order"}
		case (2) : return {"color":"#b3e5fc","text":"2nd Order"}
		case (3) : return {"color":"#b2dfdb " ,"text":"3rd Order"}
	}
}

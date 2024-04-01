//Get all the countries from Asia continent /region using Filter function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
    console.log("The Countries from Asia Continent:");
     var final = res.map((ele)=>console.log(ele.name.common))

     //TASK 2:
     var PopulationLessThan2Lakhs = result.filter(ele => ele.population < 200000);
    console.log("Population less than 2 lakhs:");
    PopulationLessThan2Lakhs.map(ele => console.log(ele.name.common));

    // Task 3: Print name, capital, flag, using forEach function
console.log("Details of countries:");
result.forEach(ele => {
    console.log("Name:", ele.name.common);
    console.log("Capital:", ele.capital);
    console.log("Flag:", ele.flags.svg);
});

//TASK 4: Print the total population of countries using reduce function
var totalPopu = result.reduce((acc, curr) => acc + curr.population, 0);
    console.log("Total population of countries:", totalPopu);
 
//TASK 5:Print the country that uses US dollars as currency.
var UsingUSD = result.filter(ele => ele.currencies && ele.currencies.USD);
console.log("Countries using US dollars as currency:");
UsingUSD.forEach(ele => console.log(ele.name.common));   
}
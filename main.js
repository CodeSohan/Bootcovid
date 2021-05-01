
//get all country in a list

async function getCountryList()
{

 const response=await fetch('https://corona.lmao.ninja/v3/covid-19/countries');
 const data=await response.json();
 console.log(data);


document.querySelector('.menu-container').innerHTML=`

 <select class="form-select color-light" aria-label="Default select example" onchange="getMenuItem(this.value)">
<option>Select a Country</option>;

${data.map(function(name){
    
    return `<option>${name.country}</option>`;
 })}

</select>`;
 
}

document.addEventListener('DOMContentLoaded',getCountryList());


async function getData(country){
   
   if(country!='Select a Country'){
   	const response = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`);
   const data=await response.json();
      
      document.querySelector('.bg-one').style.visibility="visible";
      document.querySelector('.country-name').innerHTML=data.country;
      document.querySelector('#flag').src=data.countryInfo.flag;
      document.querySelector('.population').innerHTML=data.population;
      document.querySelector('.cases').innerHTML=data.cases;
      document.querySelector('.active1').innerHTML=data.active;
      document.querySelector('.recovered').innerHTML=data.recovered;
      document.querySelector('.deaths').innerHTML=data.deaths;
      document.querySelector('.undefined').innerHTML=data.undefined;
   
 
      }else{
      	document.querySelector('.bg-one').style.visibility="hidden";
      }
     
   }
   
  




function getMenuItem(value){

    
     getData(value);
     
}
(function () {
    fetch("https://restcountries.com/v3.1/all").then(function(data) {
        return data.json()
    })
    .then(function(countryList) {
                    myDisplay(countryList);
        })
    .catch(function(eror){
        console.log("error")
        })
        })();
    function weather(countryName) {
      let file = "https://api.openweathermap.org/data/2.5/weather?q="+countryName+"&appid=695229f85dcf2b98fbb7fba5d3a41e72";
      fetch(file).then(function(data) {
        return data.json()
    })
    .then(function(weatherDetails) {
        alert(JSON.stringify(weatherDetails));
        })
    .catch(function(eror){
        console.log("error")
    })
    }
    function listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;
           for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
            matrix[k].push(list[i]);
        }
        return matrix;
    }
    function myDisplay(countryList) {
        var tableCountry = document.createElement("TABLE");
        var matrix = listToMatrix(countryList, 5);
        //countryList.forEach(function(country) {
         for (var i = 0; i < 50; i++) {
            var trow = document.createElement("TR");
             for (var j = 0; j < 5; j++) {
            var tdCell = document.createElement("TD");
            let countryURL = "https://api.openweathermap.org/data/2.5/weather?q="+matrix[i][j].name.common+"&appid=695229f85dcf2b98fbb7fba5d3a41e72";
            tdCell.innerHTML = `<div class="container">
        <div class="card" style="width: 18rem;">
         <div class="card text-center">
         <div class="card bg-dark text-white">
        <div class="card-header">Country Name: ${matrix[i][j].name.common}</div>
      </div>
          <div class="card bg-secondary text-white">
        <div class="card-body">
      <img src=${matrix[i][j].flags.png} class="card-img-top" style="width: 14rem;">
          <h7 class="card-title">Capital: ${matrix[i][j].capital}</h7></br>
        <h7 class="card-title">Region: ${matrix[i][j].region}</h7></br>
        <button type="button" class="btn btn-primary" id="Weat" onclick="weather('${matrix[i][j].name.common}')">Click for Weather</button>
        </div> 
        </div>
    </div>
    </div>
    </div>`;
    trow.appendChild(tdCell);
     }
     tableCountry.appendChild(trow);
     }
     document.body.appendChild(tableCountry);
    }
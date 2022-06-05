'use strict'

const url =`https://rickandmortyapi.com/api/character` 

fetch (url,
{
    method: "GET"
})

.then(response => response.json()
).then(function(json){

    var container = document.querySelector('.container');

    //Essa função serve para exibir por meio do innerHTML o que tiver na função do container
    json.results.map(function(results){
        
        container.innerHTML+=`
        
            <div> 
               <img src= `+ results.image + ` > 
               <h3> <strong> Name: `+ results.name + `</strong> </h3>
               <h5><strong> Status: `+ results.status + `</strong><h5>  
               <h5><strong>Gender: `+ results.gender + `</strong><h5> 
               <h5><strong> Species: `+ results.species + `</strong><h5>
            </div>
        `;

    })

 
})
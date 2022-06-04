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
        
            <div> <img src= `+ results.image + `> </div>
            <hr>

            <strong>  `+ results.name + `</strong>    
        `;

    })

 
})
// document.getElementById("boton")


// function chooseCharacterHarryWorld(house) {
//     if (house !== "") {
//         fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
//             .then(response => response.json())
//             .then(data => {
//                 data.map(house => document.querySelector('body').innerHTML += `<p>${house.name}</p> <img src = "${house.image}"><p>${house.patronus}</p>`)
//             });
//     }
// }

// function chooseCharacterHarryWorld(characters) {
//     if (characters !== "") {
//         fetch(`http://hp-api.herokuapp.com/api/characters`)
//             .then(response => response.json())
//             .then(data => {
//                 data.map(characters => document.querySelector('body').innerHTML += `<p>${characters.name}</p> <img src = "${characters.image}"><br><p>${characters.wand.core}</p>`)
//             });
//     }
// }

function choosePokemon(pokemon) {
    if (pokemon !== "") {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data.sprites)
                let poke = document.getElementById("poke")
                let name = document.createElement("p")
                let cont = document.createTextNode(`Nombre: ${data.name}`)
                name.appendChild(cont)
                poke.appendChild(name)

                let cont3 = document.createElement("div")
                let img = document.createElement("img")
                img.setAttribute("src", data.sprites.front_default)
                img.appendChild(cont3)
                poke.appendChild(img);

                let cont4 = document.createElement("div")
                let img2 = document.createElement("img")
                img2.setAttribute("src", data.sprites.back_default)
                img.appendChild(cont4);
                poke.appendChild(img2)

                let cont5 = document.createElement("div")
                let img3 = document.createElement("img")
                img3.setAttribute("src", data.sprites.back_shiny)
                img.appendChild(cont5)
                poke.appendChild(img3);

                let cont6 = document.createElement("div")
                let img4 = document.createElement("img")
                img3.setAttribute("src", data.sprites.front_shiny)
                img.appendChild(cont6)
                poke.appendChild(img4);

                let weight = document.createElement("p")
                let cont1 = document.createTextNode(`Weight: ${data.weight}`);
                weight.appendChild(cont1)
                poke.appendChild(weight);

                let experience = document.createElement("p")
                let cont2 = document.createTextNode(`Experience: ${data.base_experience}`)
                // console.log(data.base_experience)
                experience.appendChild(cont2);
                poke.appendChild(experience);

                let moves = document.createElement("p")
                let cont7 = document.createTextNode(`Moves: ${data.moves}`);
                weight.appendChild(cont7)
                poke.appendChild(moves);


            }
            )


    }
}

// function informacion() {


// }

// fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
//     .then(response => response.json())
//     .then(data => {
//         let element = document.getElementById('wrapp')
//         element.innerHTML = `<p>${data.name}`
//         console.log(data)
//     })



// document.querySelector('#harryWorld').addEventListener("input", function () {
//     chooseCharacterHarryWorld(this.value)

// });

// .addEventListener("input", function () {
//     chooseCharacterHarryWorld(this.value)
// });



document.querySelector('#boton').addEventListener("click", function () {
    const input = document.querySelector('#harryWorld');
    choosePokemon(input.value)
});

// document.querySelector('#boton').addEventListener("click", function () {
//     const input = document.querySelector('#harryWorld');
//     chooseCharacterHarryWorld(input.value)
// });


// yo lo tenía así y lo que me han sugerido es que tengo que declarar un variable que haga referencia al id y  luego al momneto de cargar el valor decirle que lo haga con el input no con el this que era como lo tenía el ejemplo de david.

// document.querySelector('#boton').addEventListener("click", function () {
//     chooseCharacterHarryWorld(this.value)
// });
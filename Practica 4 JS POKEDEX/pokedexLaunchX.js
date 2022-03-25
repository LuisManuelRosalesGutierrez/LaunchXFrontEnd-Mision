const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeInput;
    fetch(url).then((res) => {
        if (res.status != 200){
            console.log(res);
            pokeImage("./img/pokebola.png")
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        
        let pokeimg = data.sprites.front_default;
        pokeImage(pokeimg);
        
        let poktype = data.types[0].type.name;
        tipo(poktype);
        fondoTipo(poktype)

        let pokepeso = data.weight;
        peso(pokepeso);

        let pokealtura = data.height;
        altura(pokealtura);

        let pokeid = data.id;
        id(pokeid);

        hab(data);

        let nomstat1 = data.stats[0].stat.name;
        let valstat1 = data.stats[0].base_stat;
        stats1(nomstat1,valstat1)
        let nomstat2 = data.stats[1].stat.name;
        let valstat2 = data.stats[1].base_stat;
        stats2(nomstat2,valstat2)
        let nomstat3 = data.stats[2].stat.name;
        let valstat3 = data.stats[2].base_stat;
        stats3(nomstat3,valstat3)
        let nomstat4 = data.stats[3].stat.name;
        let valstat4 = data.stats[3].base_stat;
        stats4(nomstat4,valstat4)
        let nomstat5 = data.stats[4].stat.name;
        let valstat5 = data.stats[4].base_stat;
        stats5(nomstat5,valstat5)
        let nomstat6 = data.stats[5].stat.name;
        let valstat6 = data.stats[5].base_stat;
        stats6(nomstat6,valstat6)
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImage");
    pokeImg.src = url;
}

const tipo = (type) => {
    const tipo = document.getElementById("pokeType");
    tipo.innerHTML = type;
}

const peso = (weight) => {
    const peso = document.getElementById("pokeweight");
    peso.innerHTML ="Peso: "+ weight + "  Kg";
}

const altura = (height) => {
    const altura = document.getElementById("pokeheight");
    if(height <10){
        altura.innerHTML ="Altura: ."+ height + "  M";
    }
    else{
        altura.innerHTML ="Altura:"+ height/10 + "  M";
    }
}

const id = (ida) => {
    const id = document.getElementById("pokeid");
    id.innerHTML ="# " + ida;
}

const hab = (data) => {
    var j = "";
    for (let i = 0; i < data.abilities.length; i++){
        j = j+  [data.abilities[i].ability.name] +" // ";
    }
    const habilidades = document.getElementById("abilities");
    habilidades.innerHTML = j
}

const stats1 = (nomest, valest) => {
    const stats1 = document.getElementById("stats1");
    stats1.innerHTML =nomest +": " + valest;
}

const stats2 = (nomest, valest) => {
    const stats2 = document.getElementById("stats2");
    stats2.innerHTML =nomest +": " + valest;
}

const stats3 = (nomest, valest) => {
    const stats3 = document.getElementById("stats3");
    stats3.innerHTML =nomest +": " + valest;
}

const stats4 = (nomest, valest) => {
    const stats4 = document.getElementById("stats4");
    stats4.innerHTML =nomest +": " + valest;
}

const stats5 = (nomest, valest) => {
    const stats5 = document.getElementById("stats5");
    stats5.innerHTML =nomest +": " + valest;
}

const stats6 = (nomest, valest) => {
    const stats6 = document.getElementById("stats6");
    stats6.innerHTML =nomest +": " + valest;
}

const fondoTipo = (type) => {
    switch(type){
        case "electric":
            document.getElementById("pokeType").style.backgroundColor = "yellow";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "fire":
            document.getElementById("pokeType").style.backgroundColor = "red";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "normal":
            document.getElementById("pokeType").style.backgroundColor = "rgb(252, 208, 180)";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "bug":
            document.getElementById("pokeType").style.backgroundColor = "#006400";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "dark":
            document.getElementById("pokeType").style.backgroundColor = "black";
            document.getElementById("pokeType").style.color = "white";
            break;        
        case "dragon":
            document.getElementById("pokeType").style.backgroundColor = "#00aae4";
            document.getElementById("pokeType").style.color = "black";
            break;  
        case "fairy":
            document.getElementById("pokeType").style.backgroundColor = "#FFC0CB";
            document.getElementById("pokeType").style.color = "black";
            break;      
        case "fighting":
            document.getElementById("pokeType").style.backgroundColor = "#8D4925";
            document.getElementById("pokeType").style.color = "black";
            break;      
        case "poison":
            document.getElementById("pokeType").style.backgroundColor = "#7F00FF";
            document.getElementById("pokeType").style.color = "black";
            break;  
        case "ghost":
            document.getElementById("pokeType").style.backgroundColor = "#723185";
            document.getElementById("pokeType").style.color = "white";
            break; 
        case "grass":
            document.getElementById("pokeType").style.backgroundColor = "green";
            document.getElementById("pokeType").style.color = "black";
            break; 
        case "ground":
            document.getElementById("pokeType").style.backgroundColor = "#a18262";
            document.getElementById("pokeType").style.color = "black";
            break; 
        case "water":
            document.getElementById("pokeType").style.backgroundColor = "darkblue";
            document.getElementById("pokeType").style.color = "white";
            break;
        case "psychic":
            document.getElementById("pokeType").style.backgroundColor = "#ff0080";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "rock":
            document.getElementById("pokeType").style.backgroundColor = "#804000 ";
            document.getElementById("pokeType").style.color = "black";
            break;
        case "steel":
            document.getElementById("pokeType").style.backgroundColor = "gray";
            document.getElementById("pokeType").style.color = "black";
            break;
            default:
            document.getElementById("pokeType").style.backgroundColor = "white";
            break;
    }

}

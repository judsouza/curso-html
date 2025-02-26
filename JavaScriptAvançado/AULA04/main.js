//atividade um

let cadastrar = document.querySelector('.cadastrar-aluno')
cadastrar.innerHTML = "Aluno, faça seu cadastro 😁"

document.querySelector('.cadastrar-aluno').innerHTML = "Aluno, faça seu cadastro 😁 2"

//Seleciona a tag P através da classe "texto" e salva na variável
//ou seja, a variavel txt é uma instância do elemento html selecionado

let txt = document.querySelector(".texto")
txt.style.backgroundColor = "blue"
txt.style.color = "white"

//atividade dois

let anim = document.querySelector(".animal")
anim.style.backgroundColor = "orange"
anim.style.color = "white"
anim.style.width = "300px"

//atividade tres

let planta = document.querySelector('.plantinha')

planta.addEventListener("mouseover",()=>{
    if(planta.innerText == "🌱"){
        planta.innerText = "🚿"
    }else if(planta.innerText == "🚿"){
        planta.innerText = "🌳"
    }else if(planta.innerText == "🌳"){
        planta.innerText = "🌳🍊"
    }
})
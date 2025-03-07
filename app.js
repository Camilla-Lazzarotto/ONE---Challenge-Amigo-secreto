//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo () 
{
    let amigo = document.querySelector("input").value;
    
    if (amigo == "")
    {
        alert ("Por favor, insira um nome.");
    }
    else
    {
        amigos.push(amigo);
        document.querySelector("input").value = "";
        atualizaListaAmigos();
    }
}

function atualizaListaAmigos ()
{
    document.querySelector("#listaAmigos").innerHTML = "";

    for (let i = 0; i < amigos.length; i++)
    {
        document.querySelector("#listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
    }
}

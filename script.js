document.getElementById("tarefa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enviar(); // Chama a função de enviar
    }
});

function enviar(){
let tarefas = document.getElementById("tarefa").value

if(!tarefas){
  return alert("Digite uma tarefa");
}
    let tarefaContainer = document.createElement("div");
    tarefaContainer.style.display = "flex";
    tarefaContainer.style.alignItems = "center";
    tarefaContainer.style.gap = "10px";

    let localtarefa = document.createElement("p");
    localtarefa.textContent = tarefas;

    let circulo = document.createElement("button");
  
      circulo.onclick = function() {
        tarefaContainer.classList.toggle("selecionada");
    };

    tarefaContainer.appendChild(localtarefa);
    tarefaContainer.appendChild(circulo);

    document.getElementById("mostarTarefas").appendChild(tarefaContainer);

document.getElementById("tarefa").value = ''




}




function excluir() {
    let tarefasSelecionadas = document.querySelectorAll(".selecionada");
    tarefasSelecionadas.forEach(tarefa => tarefa.remove());
}
document.addEventListener('DOMContentLoaded', function() {
    const inputTarefa = document.getElementById('novaTarefa');
    const btnAdicionar = document.getElementById('adicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    btnAdicionar.addEventListener('click', adicionarTarefa);

    function adicionarTarefa() {
        const textoTarefa = inputTarefa.value.trim();
        if (textoTarefa !== "") {
            const novaTarefa = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', marcarConcluida);

            const textoSpan = document.createElement('span');
            textoSpan.textContent = textoTarefa;


            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.className = 'remover';
            btnRemover.addEventListener('click', removerTarefa);

            novaTarefa.appendChild(checkbox);
            novaTarefa.appendChild(textoSpan);
            novaTarefa.appendChild(btnRemover);
            listaTarefas.appendChild(novaTarefa);
            inputTarefa.value = '';
        }
    }

    function marcarConcluida(event) {
        const itemLista = event.target.parentNode;
        itemLista.classList.toggle('concluida');
    }

    function removerTarefa(event) {
        const itemLista = event.target.parentNode;
        listaTarefas.removeChild(itemLista);
    }
});
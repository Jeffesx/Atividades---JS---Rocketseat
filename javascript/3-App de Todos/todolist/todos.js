//referenciando elementos
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//armazena os todos no local storage e transforma os itens em JSON
//getItem busca os itens no local storage da lista selecionada.
//Json.parse transforma os itens coletados em string JSON
// || caso não encontre valor, ele atribui um valor vazio ao JSON
var todos = JSON.parse(localStorage.getItem('list_todos')) || [''];

//RENDERIZANDO TODO
//for utilizado para percorrer arrays
function renderTodos() {
    //remove oque está dentro da ul quando adiciona um novo item
    //depois renderiza normalmente, com os itens já existentes na ul sem repetir
    listElement.innerHTML = '';
    //percorre todos os itens da variavél(array)todos e armazena na variavel todo
    for (todo of todos) {
        //cria um elemento li
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        //cria um elemento para exclusão
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        //adiciona o atributo href ao link 'a'
        linkElement.setAttribute('href', '#');
        //atribuindo elementos da li
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        //atribui titulo do link
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
        //indexOf retorna a posição no array do todo informado como parametro
        var pos = todos.indexOf(todo);
        //adiciona o atributo ao link a e chama a função de deletar, concatenado strings
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    }
}

renderTodos();
//ADICIONA TODO
function addTodo() {


    //coleta o valor do input
    var todoText = inputElement.value;
    //função do array para adicionar um novo item na posição final
    todos.push(todoText);
    //apaga o texto atual do input( o texto digitado) inputando um valor vazio;
    inputElement.value = '';
    //chama a função para renderizar liista com noto item(todo);
    renderTodos();
    //salva alterações
    saveToStorage();

}
//atribui a função onclick ao botão e aciona a função que adiciona uma todo
buttonElement.onclick = addTodo;

//função que deleta os todos da lista
//recebe a posição do array com a variavel pos
function deleteTodo(pos) {
    //function.splice(posição a ser removida, numero de itens)
    //a função splice remove os itens do array conforme parametros informados
    todos.splice(pos, 1);
    //renderiza com novos itens
    renderTodos();
    //salva alterações
    saveToStorage();
}

//Salva todos no local Storage
function saveToStorage() {
    //localStorage variavel local para realizar ações no local storage
    //metodo setItem altera a lista do localstorage adicionando itens
    //local storage não consegue utilizar arrays ou objetos como parametros
    //setitem(variavel que recebe a lista de itens, itens a serem add do tipo string)
    localStorage.setItem('list_todos', JSON.stringify(todos));
    //JSON = notação de objetos como STRING
    //JSON.stringify(variavel ou function), transforma o vetor em uma string
}
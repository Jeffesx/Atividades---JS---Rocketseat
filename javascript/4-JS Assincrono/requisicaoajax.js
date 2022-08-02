/*Ajax é uma requisição assincrona em algum backend,
assim ele requisita informações no servidor em um intervalo assincrono pois não acontece no mesmo fluxo do script*/
//Inicia a funcionalidade do Ajax para solicitar informações ou um arquivo XML que está localizado em um servidor.
var xhr = new XMLHttpRequest();
//abre o arquivo com a requisição Ajax
//GET metodo de busca das informações depois da virgula servidor de onde serão retiradas essas informações
xhr.open('GET', 'https://api.github.com/users/Jeffesx');
//envia parametros a requisição
xhr.send(null);
//onreadystatechange a função verifica o status da requisição.
xhr.onreadystatechange = function() {
    /*readyState busca o status da requisição que pode ser: 0 - UNSENT

    1 - OPENED

    2 - HEADERS_RECEIVED

    3 - LOADING

    4 - DONE */
    if (xhr.readyState === 4) {
        //atribui os textos do xhr para o responseText via JSON);
        console.log(JSON.parse(xhr.responseText));

    }
}
/*Promises são códigos que não influenciam na execução do javascript, são funções que retornam valores de verificação.
não possuindo real interferência no código*/
//resolve  variavel que recebe o valor da função caso sejá ok
//caso de algum erro na função o reject é realizado.
var MinhaPromise = function() {
    return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/Jeffesx');
            xhr.send(null);
            xhr.onreadystatechange = function() {

                if (xhr.readyState === 4) {
                    console.log(JSON.parse(xhr.responseText));
                }
                if (xhr.status === 200) {
                    //se a requisição for OK , então o javascript mostrar o resultado da busca da api
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    //caso erro a variavel reject será exibida
                    reject('erro na requisição');
                }
            }
        }
    });
}
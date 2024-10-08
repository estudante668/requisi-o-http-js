/**
 * 
 */

var xhr = new XMLHttpRequest();
let metodo = "GET";
let url = "https://jsonplaceholder.typicode.com/posts/1";
let documento;

//abrir conexao
xhr.open(metodo, url, true);

//enviar conexao
xhr.send();

//gereciamento de estado e recuperação de dados
xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
		documento = xhr.response;
		objdocumento = JSON.parse(documento);
        console.log(objdocumento);
    }
};

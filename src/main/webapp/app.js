/**
 * 
 */

var xhr = new XMLHttpRequest();
var documento;

//abrir conexao
xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1", true);

//gereciamento de estado
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
		documento = xhr.response;
		objdocumento = JSON.parse(documento);
        console.log(objdocumento);
    }
};

xhr.send();
/**
 * 
 */

var xhr = new XMLHttpRequest();

//abrir conexao
xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1", true);

//gereciamento de estado
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        console.log(xhr);
    }
};

xhr.send();
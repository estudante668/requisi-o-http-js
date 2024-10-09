/**
 *  var xhr = new XMLHttpRequest();
 let metodo = "GET";
 let url = "https://jsonplaceholder.typicode.com/posts/1";
 let documento;

 //abrir conexao
 xhr.open(metodo, url, true);

 //enviar conexao
 xhr.send();

 //gereciamento de estado e recuperação de dados
 xhr.onload = () => {
     if (xhr.status != 200) {
 		alert(`Erro: ${ xhr.status} Not Found`);
 	} else {
 		documento = xhr.response;
 		objdocumento = JSON.parse(documento);
         console.log(objdocumento);
     }
 };

 xhr.onprogress = function(event) {
   if (event.lengthComputable) {
     alert(`Received ${event.loaded} of ${event.total} bytes`);
   } else {
     alert(`Received ${event.total} bytes`); // no Content-Length
   }
 };

 xhr.onerror = ()=>{
 	console.log("Erro")
 }
 */

 //Metodo POST

var xhr = new XMLHttpRequest();
let metodo = "POST";
var url = "https://jsonplaceholder.typicode.com/posts";
var documento = {
	"userId": 200,
	"id": 12,
	"title": "Noticia exclusiva",
	"body": "Garotos de programa largam jquery apos descobrir quão facil é viver sem ele",
 }
 
 xhr.open(metodo, url);
 xhr.send(documento);
 xhr.onload = () => {
    
  		console.log(xhr);
  	}
 
  
  

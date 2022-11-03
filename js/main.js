//Ajax intro
var button = document.getElementById('btn');
var content = document.getElementById('content');

// button.onclick = () => {
//     var req = new XMLHttpRequest();

//     req.onload=()=> {
//         console.log(req);
//         content.innerHTML = req.responseText
//     }

//     req.open('GET', '../response.txt', true);
//     req.send();
// }

button.onclick = () => {
    fetch('../response.txt')
    .then(Response => Response.text())

    .then(text => content.innerHTML = text)
    .catch(error => console.log(error))
}
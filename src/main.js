var myElement = document.createElement('script');
myElement.src = 'merge.js';
myElement.onload = function() {
    console.log('merge carregou');
    var myElement2 = document.createElement('script');
    myElement2.src = 'main-ajax.js';
    myElement2.onload = function(){
        console.log('main-ajax carregou');
    }
    document.body.appendChild(myElement2);
}
window.onload = function(){
    document.body.appendChild(myElement);
}
var a = require('object-assign');
console.log(a);

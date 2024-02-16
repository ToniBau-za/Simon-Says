/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}

let colors =['#ffd1dc', '#ffecd1', '#d1ffea', '#e3d1ff', '#ffbf80', '#ffef96','#aaff80','#96ffe0','#ff9cf0','#d1c2ff','#b2b2b2','#99e6e6','#d98cb3','#d6ff80','#ffe080','#80ffbf']
let colorjuego=[]

function iniciarPartida(){

}
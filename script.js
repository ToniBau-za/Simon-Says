/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
//
function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor = colores[Math.trunc(Math.random()*colores.length)]

    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.display = 'none';
    }, 2000);
}

//el array del principio del juego con los colores identificados
//                         1          2          3          4           5         6         7         8         9        10         11        12        13        14        15        16
let colores =['#ffd1dc', '#ffecd1', '#d1ffea', '#e3d1ff', '#ffbf80', '#ffef96','#aaff80','#96ffe0','#ff9cf0','#d1c2ff','#b2b2b2','#99e6e6','#d98cb3','#d6ff80','#ffe080','#80ffbf']

//el array de los colores iluminados
//                               1            2           3           4           5           6           7           8           9          10           11          12         13          14            15         16
// let colorbrillante=['#F86C91FF','#FFB947FF','#42FFA9FF','#9241FFFF','#FF9228FF','#FFDF1CFF','#67FF1CFF','#27FFC1FF','#FF1FD9FF','#6839FFFF','#A82222FF','#29E3E3FF','#D6287FFF','#B9FF27FF','#FFD133FF','#21FF91FF']

//los colores que se iran añadiendo mientras pase el juego
let colorjuego=[]

//
// function IniciarPartida(){
//     i=colores[Math.trunc(Math.random()*colores.length)]
//     colorjuego.push[i]
//     console.log(colorjuego)
// }
// i=colores[Math.trunc(Math.random()*colores.length)]
// colorjuego.push[i]
// console.log(colorjuego)
// /*
// Iniciar partida. Es posa 'async' davant per indicar que té
// comandes que gestionen el temps d'execució. Pot haver "esperes"
// */
// async function iniciarPartida(){
//     for (let i=0;i<colores.length;i++){
//         //TODO instruccions per mostrar el color. Per exemple
//         showNotification(colors[i])
//         //Crida al mètode esperar
//         await esperar(2000);
//     }
// }
// function esperar(milliseconds){
//     return new Promise(resolve => {
//         setTimeout(resolve, milliseconds);
//     });
// }
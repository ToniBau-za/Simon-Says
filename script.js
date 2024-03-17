
//el array del principio del juego con los colores identificados
//                        0          1          2          3           4         5         6         7         8         9         10        11        12        13        14        15
let colores =['#ffd1dc', '#ffecd1', '#d1ffea', '#e3d1ff', '#ffbf80', '#ffef96','#aaff80','#96ffe0','#ff9cf0','#d1c2ff','#b2b2b2','#99e6e6','#d98cb3','#d6ff80','#ffe080','#80ffbf']

// los colores guardados del math.random
let guardadoscolores =[]


// /*
// Iniciar partida. Es posa 'async' davant per indicar que té
// comandes que gestionen el temps d'execució. Pot haver "esperes"
// */
async function iniciarPartida(){
    sequencia()
    for (let i=0;i<guardadoscolores.length;i++){
        showNotification(guardadoscolores[i]) //aqui es donde se controla el que saldrá en el recuadro de sequencia
        //Crida al mètode esperar
        await esperar(1000);
    }
}
function esperar(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
//
function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor= message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 1000);
}



//crea la sequencia cada vez que se apreta comienzo
function sequencia(){
    resultado = colores[Math.trunc(Math.random() * colores.length)]
    guardadoscolores.push(resultado)
}

function Comprobacion(card) {
    console.log(card) //detecta el numero de la funcion
    console.log(colores[card])

    if (guardadoscolores[0]==colores[card]){
        console.log('Bien')



    }else if (guardadoscolores[0]!=colores[card]){
        console.log('Mal')
        guardadoscolores=[]
    }
}

//todo, Hacer que detecte la sequencia entera, no solo el primer numero








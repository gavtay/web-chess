// Color the squares
boardMap.forEach(colorSquare);
function colorSquare(value, key) {
    let val = value;
    let square = document.getElementById(key);
    // val ? square.style.backgroundImage = 'url("./images/greengold1.jpg")' : square.style.backgroundColor='#f8e7bb';
    val ? square.style.backgroundColor='#72573f' : square.style.backgroundColor='#f8e7bb';

}


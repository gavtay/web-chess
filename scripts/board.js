// Color the squares
boardMap.forEach(colorSquare);
function colorSquare(value, key) {
    let val = value;
    let square = document.getElementById(key);
    val ? square.style.backgroundImage = 'url("./images/green-black.jpg")' : square.style.backgroundColor='#f3b164';
}


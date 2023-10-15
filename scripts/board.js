//Color the squares
boardMap.forEach(colorSquare);
function colorSquare(value, key) {
    var val = value;
    var square = document.getElementById(key);
    val ? square.style.backgroundColor = '#72573f' : square.style.backgroundColor = '#f8e7bb';
    console.log('hi');
}

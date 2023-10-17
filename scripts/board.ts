//Color the squares
boardMap.forEach(colorSquare);
function colorSquare(value: number, key: string): void {
    let val: number = value;
    let square = document.getElementById(key);

    val ? square!.style.backgroundColor='#72573f' : square!.style.backgroundColor='#f8e7bb';
}


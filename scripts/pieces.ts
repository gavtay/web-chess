class Piece {
    value: number;
    locat: string;
    team: string;
    kb: string;
    
    constructor(value: number, locat: string, team: string, kb: string = '') {
        // value (int) this will indicate the type of piece (like pawn or bishop)
        this.value = value;
        // location (string like 'a1') indicate the location of the specific piece
        this.locat = locat;
        // team (string like 'white' or 'black')
        this.team = team;
        // determines whether a 3 piece is knight or bishop
        this.kb = kb;
    }

    getValue() {
        return this.value;
    }
    getLocat() {
        return this.locat;
    }
    getTeam() {
        return this.team;
    }
    getKb() {
        return this.kb;
    }
    setValue(value: number) {
        this.value = value;
    }
    setLocat(locat: string) {
        this.locat = locat;
    }
    setTeam(team: string) {
        this.team = team;
    }
}
const whitePawnOne = new Piece(1, 'a7', 'white');
const whitePawnTwo = new Piece(1, 'b7', 'white');
const whitePawnThree = new Piece(1, 'c7', 'white');
const whitePawnFour = new Piece(1, 'd7', 'white');
const whitePawnFive = new Piece(1, 'e7', 'white');
const whitePawnSix = new Piece(1, 'f7', 'white');
const whitePawnSeven = new Piece(1, 'g7', 'white');
const whitePawnEight = new Piece(1, 'h7', 'white');
const whiteRookOne = new Piece(5, 'a8', 'white');
const whiteKnightOne = new Piece(3, 'b8', 'white', 'k');
const whiteBishopOne = new Piece(3, 'c8', 'white', 'b');
const whiteQueen = new Piece(9, 'd8', 'white');
const whiteKing = new Piece (1000, 'e8', 'white');
const whiteBishopTwo = new Piece(3, 'f8', 'white', 'b');
const whiteKnightTwo = new Piece(3, 'g8', 'white', 'k');
const whiteRookTwo = new Piece (5, 'h8', 'white');
const blackPawnOne = new Piece(1, 'a2', 'black');
const blackPawnTwo = new Piece(1, 'b2', 'black');
const blackPawnThree = new Piece(1, 'c2', 'black');
const blackPawnFour = new Piece(1, 'd2', 'black');
const blackPawnFive = new Piece(1, 'e2', 'black');
const blackPawnSix = new Piece(1, 'f2', 'black');
const blackPawnSeven = new Piece(1, 'g2', 'black');
const blackPawnEight = new Piece(1, 'h2', 'black');
const blackRookOne = new Piece(5, 'a1', 'black');
const blackKnightOne = new Piece(3, 'b1', 'black', 'k');
const blackBishopOne = new Piece(3, 'c1', 'black', 'b');
const blackQueen = new Piece(9, 'd1', 'black');
const blackKing = new Piece (1000, 'e1', 'black');
const blackBishopTwo = new Piece(3, 'f1', 'black', 'b');
const blackKnightTwo = new Piece(3, 'g1', 'black', 'k');
const blackRookTwo = new Piece (5, 'h1', 'black');

const objArray: object = [ whitePawnOne, whitePawnTwo, whitePawnThree, whitePawnFour, whitePawnFive,
whitePawnSix, whitePawnSeven, whitePawnEight, whiteRookOne, whiteKnightOne, whiteBishopOne,
whiteQueen, whiteKing, whiteBishopTwo, whiteKnightTwo, whiteRookTwo, blackPawnOne, blackPawnTwo,
blackPawnThree, blackPawnFour, blackPawnFive, blackPawnSix, blackPawnSeven, blackPawnEight,
blackRookOne, blackKnightOne, blackBishopOne, blackQueen, blackKing, blackBishopTwo, blackKnightTwo,
blackRookTwo ];

loadStartPieces(objArray);

function loadStartPieces(objectArray: any): void {
    for (let i: number = 0; i < objectArray.length; ++i) {

        let value: number = objectArray[i].getValue();
        let team: string = objectArray[i].getTeam();
        let loc: string = objectArray[i].getLocat();    
        let kb: string = objectArray[i].getKb();    
        const existParent = document.getElementById(loc);
        
        if (team === 'white') {
            if (value === 1) {
                const newChild = document.createElement('img');
                newChild.src = 'images/white-pawn.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 3) {
                if (kb === 'k') {
                    const newChild = document.createElement('img');
                    newChild.src = 'images/white-knight.png';
                    
                    existParent!.appendChild(newChild);
                }
                if (kb === 'b') {
                    const newChild = document.createElement('img');
                    newChild.src = 'images/white-bishop.png';
                    
                    existParent!.appendChild(newChild);
                }
            }
            if (value === 5) {
                const newChild = document.createElement('img');
                newChild.src = 'images/white-rook.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 9) {
                const newChild = document.createElement('img');
                newChild.src = 'images/white-queen.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 1000) {
                const newChild = document.createElement('img');
                newChild.src = 'images/white-king.png';
                
                existParent!.appendChild(newChild);
            }
        }
        else {
            if (value === 1) {
                const newChild = document.createElement('img');
                newChild.src = 'images/black-pawn.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 3) {
                if (kb === 'k') {
                    const newChild = document.createElement('img');
                    newChild.src = 'images/black-knight.png';
                    
                    existParent!.appendChild(newChild);
                }
                if (kb === 'b') {
                    const newChild = document.createElement('img');
                    newChild.src = 'images/black-bishop.png';
                    
                    existParent!.appendChild(newChild);
                }
            }
            if (value === 5) {
                const newChild = document.createElement('img');
                newChild.src = 'images/black-rook.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 9) {
                const newChild = document.createElement('img');
                newChild.src = 'images/black-queen.png';
                
                existParent!.appendChild(newChild);
            }
            if (value === 1000) {
                const newChild = document.createElement('img');
                newChild.src = 'images/black-king.png';
                
                existParent!.appendChild(newChild);
            }
        }
    
    }   
}

/* Create an event listener function for when a piece is clicked
Make a new function for changing the pieces locations, use the setter to change the location of the piece
*/

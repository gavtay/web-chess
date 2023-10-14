class Piece {
    constructor(value, locat, team) {
        // value (int) this will indicate the type of piece (like pawn or bishop)
        this.value = value;
        // location (string like 'a1') indicate the location of the specific piece
        this.locat = locat;
        // team (string like 'white' or 'black')
        this.team = team;

        /* function to set the legal moves
        function to change the color of squares that are legal moves
        function to change the position of the piece when legal square is pressed
        function to update the image of the piece on the board */
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
const whiteKnightOne = new Piece(3, 'b8', 'white');
const whiteBishopOne = new Piece(3, 'c8', 'white');
const whiteQueen = new Piece(9, 'd8', 'white');
const whiteKing = new Piece (1000, 'e8', 'white');
const whiteBishopTwo = new Piece(3, 'f8', 'white');
const whiteKnightTwo = new Piece(3, 'g8', 'white');
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
const blackKnightOne = new Piece(3, 'b1', 'black');
const blackBishopOne = new Piece(3, 'c1', 'black');
const blackQueen = new Piece(9, 'd1', 'black');
const blackKing = new Piece (1000, 'e1', 'black');
const blackBishopTwo = new Piece(3, 'f1', 'black');
const blackKnightTwo = new Piece(3, 'g1', 'black');
const blackRookTwo = new Piece (5, 'h1', 'black');


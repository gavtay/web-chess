var Piece = /** @class */ (function () {
    function Piece(value, locat, team, kb) {
        if (kb === void 0) { kb = ''; }
        // value (int) this will indicate the type of piece (like pawn or bishop)
        this.value = value;
        // location (string like 'a1') indicate the location of the specific piece
        this.locat = locat;
        // team (string like 'white' or 'black')
        this.team = team;
        // determines whether a 3 piece is knight or bishop
        this.kb = kb;
    }
    Piece.prototype.getValue = function () {
        return this.value;
    };
    Piece.prototype.getLocat = function () {
        return this.locat;
    };
    Piece.prototype.getTeam = function () {
        return this.team;
    };
    Piece.prototype.getKb = function () {
        return this.kb;
    };
    Piece.prototype.setValue = function (value) {
        this.value = value;
    };
    Piece.prototype.setLocat = function (locat) {
        this.locat = locat;
    };
    Piece.prototype.setTeam = function (team) {
        this.team = team;
    };
    return Piece;
}());
var whitePawnOne = new Piece(1, 'a7', 'white');
var whitePawnTwo = new Piece(1, 'b7', 'white');
var whitePawnThree = new Piece(1, 'c7', 'white');
var whitePawnFour = new Piece(1, 'd7', 'white');
var whitePawnFive = new Piece(1, 'e7', 'white');
var whitePawnSix = new Piece(1, 'f7', 'white');
var whitePawnSeven = new Piece(1, 'g7', 'white');
var whitePawnEight = new Piece(1, 'h7', 'white');
var whiteRookOne = new Piece(5, 'a8', 'white');
var whiteKnightOne = new Piece(3, 'b8', 'white', 'k');
var whiteBishopOne = new Piece(3, 'c8', 'white', 'b');
var whiteQueen = new Piece(9, 'd8', 'white');
var whiteKing = new Piece(1000, 'e8', 'white');
var whiteBishopTwo = new Piece(3, 'f8', 'white', 'b');
var whiteKnightTwo = new Piece(3, 'g8', 'white', 'k');
var whiteRookTwo = new Piece(5, 'h8', 'white');
var blackPawnOne = new Piece(1, 'a2', 'black');
var blackPawnTwo = new Piece(1, 'b2', 'black');
var blackPawnThree = new Piece(1, 'c2', 'black');
var blackPawnFour = new Piece(1, 'd2', 'black');
var blackPawnFive = new Piece(1, 'e2', 'black');
var blackPawnSix = new Piece(1, 'f2', 'black');
var blackPawnSeven = new Piece(1, 'g2', 'black');
var blackPawnEight = new Piece(1, 'h2', 'black');
var blackRookOne = new Piece(5, 'a1', 'black');
var blackKnightOne = new Piece(3, 'b1', 'black', 'k');
var blackBishopOne = new Piece(3, 'c1', 'black', 'b');
var blackQueen = new Piece(9, 'd1', 'black');
var blackKing = new Piece(1000, 'e1', 'black');
var blackBishopTwo = new Piece(3, 'f1', 'black', 'b');
var blackKnightTwo = new Piece(3, 'g1', 'black', 'k');
var blackRookTwo = new Piece(5, 'h1', 'black');
var objArray = [whitePawnOne, whitePawnTwo, whitePawnThree, whitePawnFour, whitePawnFive,
    whitePawnSix, whitePawnSeven, whitePawnEight, whiteRookOne, whiteKnightOne, whiteBishopOne,
    whiteQueen, whiteKing, whiteBishopTwo, whiteKnightTwo, whiteRookTwo, blackPawnOne, blackPawnTwo,
    blackPawnThree, blackPawnFour, blackPawnFive, blackPawnSix, blackPawnSeven, blackPawnEight,
    blackRookOne, blackKnightOne, blackBishopOne, blackQueen, blackKing, blackBishopTwo, blackKnightTwo,
    blackRookTwo];
loadStartPieces(objArray);
function loadStartPieces(objectArray) {
    for (var i = 0; i < objectArray.length; ++i) {
        var value = objectArray[i].getValue();
        var team = objectArray[i].getTeam();
        var loc = objectArray[i].getLocat();
        var kb = objectArray[i].getKb();
        var existParent = document.getElementById(loc);
        if (team === 'white') {
            if (value === 1) {
                var newChild = document.createElement('img');
                newChild.src = 'images/white-pawn.png';
                existParent.appendChild(newChild);
            }
            if (value === 3) {
                if (kb === 'k') {
                    var newChild = document.createElement('img');
                    newChild.src = 'images/white-knight.png';
                    existParent.appendChild(newChild);
                }
                if (kb === 'b') {
                    var newChild = document.createElement('img');
                    newChild.src = 'images/white-bishop.png';
                    existParent.appendChild(newChild);
                }
            }
            if (value === 5) {
                var newChild = document.createElement('img');
                newChild.src = 'images/white-rook.png';
                existParent.appendChild(newChild);
            }
            if (value === 9) {
                var newChild = document.createElement('img');
                newChild.src = 'images/white-queen.png';
                existParent.appendChild(newChild);
            }
            if (value === 1000) {
                var newChild = document.createElement('img');
                newChild.src = 'images/white-king.png';
                existParent.appendChild(newChild);
            }
        }
        else {
            if (value === 1) {
                var newChild = document.createElement('img');
                newChild.src = 'images/black-pawn.png';
                existParent.appendChild(newChild);
            }
            if (value === 3) {
                if (kb === 'k') {
                    var newChild = document.createElement('img');
                    newChild.src = 'images/black-knight.png';
                    existParent.appendChild(newChild);
                }
                if (kb === 'b') {
                    var newChild = document.createElement('img');
                    newChild.src = 'images/black-bishop.png';
                    existParent.appendChild(newChild);
                }
            }
            if (value === 5) {
                var newChild = document.createElement('img');
                newChild.src = 'images/black-rook.png';
                existParent.appendChild(newChild);
            }
            if (value === 9) {
                var newChild = document.createElement('img');
                newChild.src = 'images/black-queen.png';
                existParent.appendChild(newChild);
            }
            if (value === 1000) {
                var newChild = document.createElement('img');
                newChild.src = 'images/black-king.png';
                existParent.appendChild(newChild);
            }
        }
    }
}
var clickCount = 0;
var oldId = '';
var oldColor = '';
function whenClicked(that) {
    if (clickCount === 0) {
        if (that.hasChildNodes()) {
            oldColor = window.getComputedStyle(that).backgroundColor;
            oldId = that.id;
            that.style.backgroundColor = '#FF6865';
            clickCount++;
            console.log('Picked a valid piece, now pick a valid place');
            return;
        }
        else {
            console.log('Not a valid piece, choose a valid piece');
            return;
        }
    }
    if (clickCount === 1) {
        var nChild = that.childNodes[0];
        var oParentId = document.getElementById(oldId);
        var oChild = oParentId.childNodes[0];
        var oChildSrc = oChild.src;
        var oChildColor = 1;
        var nChildColor = 1;
        if (that.hasChildNodes()) {
            var nChildSrc = nChild.src;
            nChildColor = 1;
            if (oChildSrc.substring(45, 50) === 'black') {
                oChildColor = 2;
            }
            ;
            if (nChildSrc.substring(45, 50) === 'black') {
                nChildColor = 2;
            }
            ;
            if (oChildColor === nChildColor) {
                clickCount = 0;
                var oldElement = document.getElementById(oldId);
                oldElement.style.backgroundColor = oldColor;
                console.log('You can not take the same color piece');
                oldId = '';
                oldColor = '';
            }
            if (oChildColor !== nChildColor) {
                clickCount = 0;
                var oldElement = document.getElementById(oldId);
                oldElement.style.backgroundColor = oldColor;
                var newParent = that;
                console.log('You win a piece!');
                takePiece(oldElement, newParent);
                clickCount = 0;
            }
        }
        else {
            var oldChild = document.getElementById(oldId);
            oldChild.style.backgroundColor = oldColor;
            var newParent = that;
            console.log('The piece can move here');
            movePiece(oldChild, newParent);
            clickCount = 0;
        }
    }
}
function movePiece(oldPar, newPar) {
    newPar.appendChild(oldPar.childNodes[0]);
}
function takePiece(oldPar, newPar) {
    var imgDel = newPar.childNodes[0];
    newPar.removeChild(imgDel);
    newPar.appendChild(oldPar.childNodes[0]);
}

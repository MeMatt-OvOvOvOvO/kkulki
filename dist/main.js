/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backColor.ts":
/*!**************************!*\
  !*** ./src/backColor.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
/**
 * dekorator dla zmiany koloru tla, moze nie dzialac
 */
class BacColor {
    constructor(a) {
        this.num = a;
    }
    cos() {
        return _1.colors[this.num];
    }
}
exports["default"] = BacColor;


/***/ }),

/***/ "./src/helpArray.ts":
/*!**************************!*\
  !*** ./src/helpArray.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * tworzenie 2d planszy jako arrajow i wypelnianie ich danymi
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
class HelpArray {
    constructor(kulki, startt, meta) {
        this.kulki = kulki;
        this.startt = startt;
        this.meta = meta;
        this.jakasF();
    }
    /**
     * stworzrenie 2d arraya, wpisanie do niej miejsc kulek, startu sciezki i konca jej
     * @returns tabelke 2d w ktorej znajduja sie X, M, S i 0
     */
    jakasF() {
        let start = "S";
        let meta = "M";
        let sciana = "X";
        let pustePole = "0";
        let arrPath = [];
        /**
         *  Loop to create 2D array using 1D array
         */
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                arrPath[i] = [];
            }
        }
        /**
         * inserting elements to array
         */
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                arrPath[i][j] = pustePole;
            }
        }
        /**
         * dodanie pozycji kulek do 2d arraya
         */
        this.kulki.forEach(elem => {
            let each = String(elem);
            let a = each.charAt(0);
            let b = each.charAt(1);
            let c = Number(a);
            let d = Number(b);
            arrPath[c][d] = sciana;
        });
        /**
         * dodanie pozycji kulki do 2d arraya ktora bedzie startem
         */
        if (this.startt == '') {
        }
        else {
            let aa = this.startt.charAt(0);
            let bb = this.startt.charAt(1);
            let inter1 = { cc: Number(aa), dd: Number(bb) };
            arrPath[inter1.cc][inter1.dd] = start;
        }
        if (this.meta == undefined) {
        }
        else {
            let aaa = this.meta.charAt(0);
            let bbb = this.meta.charAt(1);
            let cos = { ccc: Number(aaa), ddd: Number(bbb) };
            if (arrPath[cos.ccc][cos.ddd] == 'X' || arrPath[cos.ccc][cos.ddd] == 'S') {
            }
            else if (arrPath[cos.ccc][cos.ddd] == '1') {
                //console.log('meta',arrPath[ccc][ddd])
                arrPath[cos.ccc][cos.ddd] = meta;
            }
            else {
                //console.log('meta1',arrPath[ccc][ddd])
                arrPath[cos.ccc][cos.ddd] = meta;
            }
        }
        //console.log('helArrayFile:arrPath', arrPath)
        return arrPath;
    }
    /**
     *
     * @param myArr przyjmuje tabelke z danymi do wpisania tam sciezki(liczba ktore sa kolejne od S do M)
     * @returns pusta tablica
     */
    static findPath(myArr) {
        let found = false;
        let doWpisania = 1;
        let numBefore = 0;
        let numAfter = 0;
        let visited = [];
        for (let p = 0; p < myArr.length; p++) {
            for (let m = 0; m < myArr[0].length; m++) {
                if (myArr[p][m] == 'S') {
                    myArr[p][m] = '1';
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                visited[i] = [];
            }
        }
        /**
         * inserting elements to array
         */
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                visited[i][j] = [];
            }
        }
        /**
         * dodanie kolejnych liczb do tabelki 2d od S do M
         */
        while (true) {
            for (let c = 0; c < myArr.length; c++) {
                for (let v = 0; v < myArr[0].length; v++) {
                    if (myArr[c][v] != doWpisania.toString()) {
                        continue;
                    }
                    if (c == 0 && v == 0) {
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (c == 0 && v == 8) {
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (c == 0) {
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (c == 8 && v == 0) {
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (v == 0) {
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (v == 8 && c == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (c == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else if (v == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                    else {
                        if (myArr[c - 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true;
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                        else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString();
                            numAfter++;
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }];
                        }
                    }
                }
            }
            if (found == true) {
                break;
            }
            if (numBefore == numAfter) {
                break;
            }
            else {
                numBefore = numAfter;
            }
            doWpisania++;
        }
        /**
         * @return x i y odwiedzonych miesjc przez algorytm
         */
        for (let p = 0; p < myArr.length; p++) {
            for (let m = 0; m < myArr[0].length; m++) {
                if (myArr[p][m] == 'M') {
                    // console.log(visited[p][m])
                    visited[p][m] = [...visited[p][m], { xx: p, yy: m }];
                    return visited[p][m];
                }
            }
        }
        return [];
    }
}
exports["default"] = HelpArray;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.colors = void 0;
const table_1 = __importDefault(__webpack_require__(/*! ./table */ "./src/table.ts"));
const nextBalls_1 = __importDefault(__webpack_require__(/*! ./nextBalls */ "./src/nextBalls.ts"));
const backColor_1 = __importDefault(__webpack_require__(/*! ./backColor */ "./src/backColor.ts"));
exports.colors = ['red', 'yellow', 'green', 'blue', 'purple', 'pink', 'orange'];
/**
 * dodanie na strone glowna previe i wygenerowanej tabelki
 */
let nextbalssss = new nextBalls_1.default;
let table = new table_1.default;
/**
 * losowanie randomowego koloru tla moze nie dzialac
 */
let rdcol = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
let kolorTla = new backColor_1.default(rdcol);
console.log(kolorTla.cos());


/***/ }),

/***/ "./src/nextBalls.ts":
/*!**************************!*\
  !*** ./src/nextBalls.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomColor2 = exports.randomColor1 = exports.randomColor = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
exports.randomColor = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
exports.randomColor1 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
exports.randomColor2 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
/**
 * tworzenie prewie kulek
 */
class NextBalls {
    constructor() {
        this.coscos();
    }
    /**
     * tworzenie preview 3 kulek
     */
    coscos() {
        const myBall = document.getElementById('ball');
        const myBall1 = document.getElementById('ball1');
        const myBall2 = document.getElementById('ball2');
        let ball = document.createElement('div');
        ball.style.backgroundColor = _1.colors[exports.randomColor];
        ball.style.width = '20px';
        ball.style.height = '20px';
        ball.style.borderRadius = '10px';
        ball.style.border = '1px solid black';
        let ball1 = document.createElement('div');
        ball1.style.backgroundColor = _1.colors[exports.randomColor1];
        ball1.style.width = '20px';
        ball1.style.height = '20px';
        ball1.style.borderRadius = '10px';
        ball1.style.marginLeft = '5px';
        ball1.style.border = '1px solid black';
        let ball2 = document.createElement('div');
        ball2.style.backgroundColor = _1.colors[exports.randomColor2];
        ball2.style.width = '20px';
        ball2.style.height = '20px';
        ball2.style.borderRadius = '10px';
        ball2.style.marginLeft = '5px';
        ball2.style.border = '1px solid black';
        myBall === null || myBall === void 0 ? void 0 : myBall.appendChild(ball);
        myBall1 === null || myBall1 === void 0 ? void 0 : myBall1.appendChild(ball1);
        myBall2 === null || myBall2 === void 0 ? void 0 : myBall2.appendChild(ball2);
    }
}
exports["default"] = NextBalls;


/***/ }),

/***/ "./src/table.ts":
/*!**********************!*\
  !*** ./src/table.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const nextBalls_1 = __webpack_require__(/*! ./nextBalls */ "./src/nextBalls.ts");
const helpArray_1 = __importDefault(__webpack_require__(/*! ./helpArray */ "./src/helpArray.ts"));
class Table {
    constructor() {
        this.obyDzialalo();
    }
    obyDzialalo() {
        let myArr = [];
        let meta;
        let table = document.getElementById('table');
        let arr = [];
        let next = document.getElementById('next');
        let nextColorArr = [_1.colors[nextBalls_1.randomColor], _1.colors[nextBalls_1.randomColor1], _1.colors[nextBalls_1.randomColor2]];
        let click = false;
        let startPath;
        let sasiedzi = [];
        /**
         * losowanie 3 randomowych numerow
         */
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * 81);
            if (arr.indexOf(r) === -1)
                arr.push(r);
        }
        /**
         * create tabelki html
         * dodanie styli kulce
         * dodanie id do kazdego pola tabelki
         */
        for (let i = 0; i < 9; i++) {
            let tr = document.createElement('tr');
            tr.className = "tr";
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
            for (let j = 0; j < 9; j++) {
                let td = document.createElement('td');
                td.className = 'td';
                let id = String(i) + String(j);
                td.id = id;
                myArr.push(id);
                let kulka = document.createElement('div');
                kulka.className = 'kulka';
                kulka.style.width = '20px';
                kulka.style.height = '20px';
                kulka.style.borderRadius = '10px';
                kulka.style.marginLeft = '5px';
                /**
                 * @param idd jest to id danego kwadracika z planszy
                 * funkcja dodaje onclick od kazdego kwadracika ktory przenosci kulke w wybrane miejsce
                 * pokazuje tez ona na czerwono najkrotsza sciezke
                 */
                const onMouseOver = (idd) => {
                    clearColorPath();
                    let x = idd.charAt(0);
                    let y = idd.charAt(1);
                    //console.log(x, y)
                    var elems = document.querySelectorAll('td');
                    elems.forEach(elem => {
                        elem.onclick = () => setMeta(elem.id);
                    });
                    let toHelp = [];
                    let helpArray2;
                    for (let o = 0; o < arr.length; o++) {
                        toHelp.push(myArr[arr[o]]);
                    }
                    if (id == idd) {
                        return;
                    }
                    else {
                        meta = idd;
                        let helpArray = new helpArray_1.default(toHelp, id, meta); //tu jest zle id
                        console.log(helpArray);
                        let helpArray2 = helpArray.jakasF();
                        let helpArray3 = helpArray_1.default.findPath(helpArray2);
                        helpArray3.forEach(el => {
                            //console.log(el)
                            let xx = el['xx'];
                            let yy = el['yy'];
                            let myId = String(xx) + String(yy);
                            //console.log(myId)
                            document.getElementById(myId).style.backgroundColor = 'red';
                        });
                    }
                    return true;
                };
                /**
                 * czysci kolor poprzednio wybranej najkrotszej sciezki
                 */
                const clearColorPath = () => {
                    for (let p = 0; p < 9; p++) {
                        for (let m = 0; m < 9; m++) {
                            let myId = String(p) + String(m);
                            document.getElementById(myId).style.backgroundColor = '';
                        }
                    }
                };
                /**
                 * @param iddd to id danej kratki na planszy ktora zosjanie przycisnieta
                 * funkcja ta przenosci kulke i ja usuwa
                 * poprawia tez moj nieumiejetny zapis losowych miejsc kulek
                 */
                const setMeta = (iddd) => {
                    //console.log(id, iddd)
                    //console.log('setMeta',iddd)
                    let toHelp = [];
                    meta = iddd;
                    for (let o = 0; o < arr.length; o++) {
                        toHelp.push(myArr[arr[o]]);
                    }
                    //console.log(id)
                    let helpArray = new helpArray_1.default(toHelp, id, meta);
                    var elems = document.querySelectorAll('td');
                    elems.forEach(elem => {
                        //elem.removeEventListener('mouseover', () => onMouseOver(elem.id),false)
                        elem.onmouseover = null;
                        elem.onclick = null;
                        kulka.style.width = '20px';
                        kulka.style.height = '20px';
                        kulka.style.borderRadius = '10px';
                        kulka.style.marginLeft = '5px';
                        kulka.removeAttribute('clicked');
                    });
                    let helpArray2 = helpArray.jakasF();
                    let helpArray3 = helpArray_1.default.findPath(helpArray2);
                    if (helpArray3 == []) {
                        return;
                    }
                    else {
                        //console.log(id) //id pola a nie random number
                        //console.log(arr)
                        arr.forEach(ell => {
                            var _a;
                            if (id == myArr[ell]) {
                                let mojaKulka = (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.childNodes[0];
                                let col = mojaKulka.style.backgroundColor;
                                const index = arr.indexOf(ell);
                                if (index > -1) {
                                    arr.splice(index, 1); // 2nd parameter means remove one item only
                                }
                                mojaKulka.style.backgroundColor = '';
                                let mojaNowaKulka = document.getElementById(iddd);
                                if (mojaNowaKulka.childNodes[0]) {
                                    myFun();
                                }
                                else {
                                    mojaNowaKulka.appendChild(kulka);
                                    kulka.className = 'kulka';
                                    kulka.style.width = '20px';
                                    kulka.style.height = '20px';
                                    kulka.style.borderRadius = '10px';
                                    kulka.style.marginLeft = '5px';
                                    kulka.style.backgroundColor = col;
                                }
                            }
                        });
                        //console.log('idddd',iddd)
                        let mojaWina;
                        if (iddd == '00') {
                            mojaWina = 0;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '01') {
                            mojaWina = 1;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '02') {
                            mojaWina = 2;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '03') {
                            mojaWina = 3;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '04') {
                            mojaWina = 4;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '05') {
                            mojaWina = 5;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '06') {
                            mojaWina = 6;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '07') {
                            mojaWina = 7;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '08') {
                            mojaWina = 8;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '10') {
                            mojaWina = 9;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '11') {
                            mojaWina = 10;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '12') {
                            mojaWina = 11;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '13') {
                            mojaWina = 12;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '14') {
                            mojaWina = 13;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '15') {
                            mojaWina = 14;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '16') {
                            mojaWina = 15;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '17') {
                            mojaWina = 16;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '18') {
                            mojaWina = 17;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '20') {
                            mojaWina = 18;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '21') {
                            mojaWina = 19;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '22') {
                            mojaWina = 20;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '23') {
                            mojaWina = 21;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '24') {
                            mojaWina = 22;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '25') {
                            mojaWina = 23;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '26') {
                            mojaWina = 24;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '27') {
                            mojaWina = 25;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '28') {
                            mojaWina = 26;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '30') {
                            mojaWina = 27;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '31') {
                            mojaWina = 28;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '32') {
                            mojaWina = 29;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '33') {
                            mojaWina = 30;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '34') {
                            mojaWina = 31;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '35') {
                            mojaWina = 32;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '36') {
                            mojaWina = 33;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '37') {
                            mojaWina = 34;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '38') {
                            mojaWina = 35;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '40') {
                            mojaWina = 36;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '41') {
                            mojaWina = 37;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '42') {
                            mojaWina = 38;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '43') {
                            mojaWina = 39;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '44') {
                            mojaWina = 40;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '45') {
                            mojaWina = 41;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '46') {
                            mojaWina = 42;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '47') {
                            mojaWina = 43;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '48') {
                            mojaWina = 44;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '50') {
                            mojaWina = 45;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '51') {
                            mojaWina = 46;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '52') {
                            mojaWina = 47;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '53') {
                            mojaWina = 48;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '54') {
                            mojaWina = 49;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '55') {
                            mojaWina = 50;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '56') {
                            mojaWina = 51;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '57') {
                            mojaWina = 52;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '58') {
                            mojaWina = 53;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '60') {
                            mojaWina = 54;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '61') {
                            mojaWina = 55;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '62') {
                            mojaWina = 56;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '63') {
                            mojaWina = 57;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '64') {
                            mojaWina = 58;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '65') {
                            mojaWina = 59;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '66') {
                            mojaWina = 60;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '67') {
                            mojaWina = 61;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '68') {
                            mojaWina = 62;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '70') {
                            mojaWina = 63;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '71') {
                            mojaWina = 64;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '72') {
                            mojaWina = 65;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '73') {
                            mojaWina = 66;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '74') {
                            mojaWina = 67;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '75') {
                            mojaWina = 68;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '76') {
                            mojaWina = 69;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '77') {
                            mojaWina = 70;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '78') {
                            mojaWina = 71;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '80') {
                            mojaWina = 72;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '81') {
                            mojaWina = 73;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '82') {
                            mojaWina = 74;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '83') {
                            mojaWina = 75;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '84') {
                            mojaWina = 76;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '85') {
                            mojaWina = 77;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '86') {
                            mojaWina = 78;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '87') {
                            mojaWina = 79;
                            arr.push(mojaWina);
                        }
                        else if (iddd == '88') {
                            mojaWina = 80;
                            arr.push(mojaWina);
                        }
                        //console.log(arr)
                        clearColorPath();
                        toHelp = [];
                        for (let u = 0; u < arr.length; u++) {
                            toHelp.push(myArr[arr[u]]);
                        }
                        //console.log('toHelp',toHelp)
                        let helpArray = new helpArray_1.default(toHelp, '', meta);
                        let helpArray2 = helpArray.jakasF();
                        let helpArray3 = helpArray_1.default.findPath(helpArray2);
                        console.log('asdf', iddd);
                    }
                    id = iddd;
                };
                /**
                 * dodanie tablicy i id do pliku z helpArrayem/ wpisanie 0, X, M, S do 2d arraya
                 */
                const myFun = () => {
                    if (kulka.hasAttribute('clicked')) {
                        kulka.style.width = '20px';
                        kulka.style.height = '20px';
                        kulka.style.borderRadius = '10px';
                        kulka.style.marginLeft = '5px';
                        kulka.removeAttribute('clicked');
                        var elems = document.querySelectorAll('td');
                        elems.forEach(elem => {
                            elem.onmouseover = null;
                        });
                    }
                    else {
                        //console.log(id)
                        kulka.style.width = '28px';
                        kulka.style.height = '28px';
                        kulka.style.marginLeft = '1px';
                        kulka.style.borderRadius = '14px';
                        let toHelp = [];
                        for (let o = 0; o < arr.length; o++) {
                            toHelp.push(myArr[arr[o]]);
                        }
                        console.log(id);
                        let helpArray = new helpArray_1.default(toHelp, id, meta);
                        let helpArray2 = helpArray.jakasF();
                        let helpArray3 = helpArray_1.default.findPath(helpArray2);
                        kulka.setAttribute('clicked', 'true');
                        var elems = document.querySelectorAll('td');
                        elems.forEach(elem => {
                            elem.onmouseover = () => onMouseOver(elem.id);
                        });
                    }
                };
                /**
                 * wpisanie kulek do tabelki html
                 */
                arr.forEach(elem => {
                    if (td.id == myArr[elem]) {
                        td.appendChild(kulka);
                        let rd = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
                        kulka.style.backgroundColor = _1.colors[rd];
                    }
                });
                /**
                 * dodanie listenera click do kulki
                 */
                kulka.addEventListener("click", myFun);
                tr.appendChild(td);
            }
        }
    }
}
exports["default"] = Table;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
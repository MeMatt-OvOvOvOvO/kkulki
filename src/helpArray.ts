/**
 * tworzenie 2d planszy jako arrajow i wypelnianie ich danymi
 */

export default class HelpArray {
    kulki: string[]
    startt: string
    meta: string
    constructor(kulki: string[], startt: string, meta: string) {
        this.kulki = kulki
        this.startt = startt

        this.meta = meta
        this.jakasF()

    }

    /**
     * stworzrenie 2d arraya, wpisanie do niej miejsc kulek, startu sciezki i konca jej
     * @returns tabelke 2d w ktorej znajduja sie X, M, S i 0
     */
    public jakasF() {
        let start = "S"
        let meta = "M"
        let sciana = "X"
        let pustePole = "0"
        let arrPath: any[] = []
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
                arrPath[i][j] = pustePole
            }
        }


        /**
         * dodanie pozycji kulek do 2d arraya
         */
        this.kulki.forEach(elem => {
            let each = String(elem)
            let a = each.charAt(0)
            let b = each.charAt(1)
            let c = Number(a)
            let d = Number(b)
            arrPath[c][d] = sciana
        })
        //console.log('safsdfasdfasdf', arrPath)
        /**
         * interface CCDD przyjmuje cc jako number i dd jako number
         */
        interface CCDD {
            cc: number,
            dd: number,
        }

        /**
         * dodanie pozycji kulki do 2d arraya ktora bedzie startem
         */
        if (this.startt == '') {

        } else {
            let aa = this.startt.charAt(0)
            let bb = this.startt.charAt(1)
            let inter1: CCDD = { cc: Number(aa), dd: Number(bb) }

            arrPath[inter1.cc][inter1.dd] = start
        }

        /**
         * interface CD przyjmuje ccc jako number i ddd jako number
         */
        interface CD {
            ccc: number,
            ddd: number,
        }


        if (this.meta == undefined) {

        } else {
            let aaa = this.meta.charAt(0)
            let bbb = this.meta.charAt(1)
            let cos: CD = { ccc: Number(aaa), ddd: Number(bbb) }
            if (arrPath[cos.ccc][cos.ddd] == 'X' || arrPath[cos.ccc][cos.ddd] == 'S') {

            } else if (arrPath[cos.ccc][cos.ddd] == '1') {
                //console.log('meta',arrPath[ccc][ddd])
                arrPath[cos.ccc][cos.ddd] = meta
            } else {
                //console.log('meta1',arrPath[ccc][ddd])
                arrPath[cos.ccc][cos.ddd] = meta
            }
        }

        //console.log('helArrayFile:arrPath', arrPath)



        return arrPath

    }

    /**
     * 
     * @param myArr przyjmuje tabelke z danymi do wpisania tam sciezki(liczba ktore sa kolejne od S do M)
     * @returns pusta tablica
     */
    static findPath(myArr: any) {
        let found: Boolean = false
        let doWpisania: number = 1
        let numBefore: number = 0
        let numAfter: number = 0
        let visited: any[] = []
        for (let p = 0; p < myArr.length; p++) {
            for (let m = 0; m < myArr[0].length; m++) {
                if (myArr[p][m] == 'S') {
                    myArr[p][m] = '1'
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
                visited[i][j] = []
            }
        }


        /**
         * dodanie kolejnych liczb do tabelki 2d od S do M
         */
        while (true) {
            for (let c = 0; c < myArr.length; c++) {
                for (let v = 0; v < myArr[0].length; v++) {
                    if (myArr[c][v] != doWpisania.toString()) {
                        continue
                    }


                    if (c == 0 && v == 0) {
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]

                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }

                    } else if (c == 0 && v == 8) {
                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }

                    } else if (c == 0) {
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }

                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }

                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }

                    } else if (c == 8 && v == 0) {
                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }

                    } else if (v == 0) {
                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                    } else if (v == 8 && c == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                    } else if (c == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                    } else if (v == 8) {
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                    } else {
                        if (myArr[c - 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c - 1][v] == '0') {
                            myArr[c - 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c - 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c + 1][v] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c + 1][v] == '0') {
                            myArr[c + 1][v] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c + 1][v] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v - 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v - 1] == '0') {
                            myArr[c][v - 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v - 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                        if (myArr[c][v + 1] == 'M') {
                            found = true
                            //dodaj do tablicy visited
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        } else if (myArr[c][v + 1] == '0') {
                            myArr[c][v + 1] = (doWpisania + 1).toString()
                            numAfter++
                            //dodaj do vosited id
                            visited[c][v + 1] = [...visited[c][v], { xx: c, yy: v }]
                        }
                    }

                }
            }
            if (found == true) {
                break
            }
            if (numBefore == numAfter) {
                break
            } else {
                numBefore = numAfter
            }
            doWpisania++
        }
        /**
         * @return x i y odwiedzonych miesjc przez algorytm
         */
        for (let p = 0; p < myArr.length; p++) {
            for (let m = 0; m < myArr[0].length; m++) {
                if (myArr[p][m] == 'M') {
                    // console.log(visited[p][m])
                    visited[p][m] = [...visited[p][m], { xx: p, yy: m }]
                    return visited[p][m]
                }
            }
        }

        return []
    }
}
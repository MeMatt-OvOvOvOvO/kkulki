import { colors } from "."
import { randomColor, randomColor1, randomColor2 } from "./nextBalls"
import HelpArray from "./helpArray"

export default class Table {

    constructor() {
        this.obyDzialalo()
    }
    private obyDzialalo() {
        let myArr: any[] = []
        let meta: string
        let table = document.getElementById('table')
        let arr: any[] = [];
        let next: any = document.getElementById('next')
        let nextColorArr = [colors[randomColor], colors[randomColor1], colors[randomColor2]]
        let click: boolean = false

        let startPath: HelpArray

        interface MyParams {
            xx: number
            yy: number
        }
        let sasiedzi: object[] = []
        /**
         * losowanie 3 randomowych numerow
         */
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * 81);
            if (arr.indexOf(r) === -1) arr.push(r);
        }

        /**
         * create tabelki html
         * dodanie styli kulce
         * dodanie id do kazdego pola tabelki
         */

        for (let i = 0; i < 9; i++) {
            let tr = document.createElement('tr')
            tr.className = "tr"
            table?.appendChild(tr)
            for (let j = 0; j < 9; j++) {
                let td = document.createElement('td')
                td.className = 'td'
                let id = String(i) + String(j)
                td.id = id
                myArr.push(id)

                let kulka = document.createElement('div')
                kulka.className = 'kulka'
                kulka.style.width = '20px'
                kulka.style.height = '20px'
                kulka.style.borderRadius = '10px'
                kulka.style.marginLeft = '5px'
                /**
                 * @param idd jest to id danego kwadracika z planszy
                 * funkcja dodaje onclick od kazdego kwadracika ktory przenosci kulke w wybrane miejsce
                 * pokazuje tez ona na czerwono najkrotsza sciezke
                 */
                const onMouseOver = (idd: string) => {
                    clearColorPath()
                    let x = idd.charAt(0)
                    let y = idd.charAt(1)
                    //console.log(x, y)
                    var elems = document.querySelectorAll('td');
                    elems.forEach(elem => {
                        elem.onclick = () => setMeta(elem.id)
                    })

                    let toHelp: string[] = []
                    let helpArray2
                    for (let o = 0; o < arr.length; o++) {
                        toHelp.push(myArr[arr[o]])
                    }
                    if (id == idd) {
                        return
                    } else {
                        meta = idd

                        let helpArray = new HelpArray(toHelp, id, meta)//tu jest zle id
                        console.log(helpArray)
                        let helpArray2 = helpArray.jakasF()

                        let helpArray3: any[] = HelpArray.findPath(helpArray2)
                        helpArray3.forEach(el => {
                            //console.log(el)
                            let xx = el['xx']
                            let yy = el['yy']

                            let myId = String(xx) + String(yy)
                            //console.log(myId)
                            document.getElementById(myId)!.style.backgroundColor = 'red'
                        })

                    }
                    return true
                }


                /**
                 * czysci kolor poprzednio wybranej najkrotszej sciezki
                 */
                const clearColorPath = () => {
                    for (let p = 0; p < 9; p++) {
                        for (let m = 0; m < 9; m++) {
                            let myId = String(p) + String(m)
                            document.getElementById(myId)!.style.backgroundColor = ''
                        }
                    }
                }

                /**
                 * @param iddd to id danej kratki na planszy ktora zosjanie przycisnieta
                 * funkcja ta przenosci kulke i ja usuwa
                 * poprawia tez moj nieumiejetny zapis losowych miejsc kulek
                 */
                const setMeta = (iddd: string) => {
                    //console.log(id, iddd)


                    //console.log('setMeta',iddd)
                    let toHelp: string[] = []
                    meta = iddd
                    for (let o = 0; o < arr.length; o++) {
                        toHelp.push(myArr[arr[o]])
                    }
                    //console.log(id)
                    let helpArray = new HelpArray(toHelp, id, meta)
                    var elems = document.querySelectorAll('td');
                    elems.forEach(elem => {
                        //elem.removeEventListener('mouseover', () => onMouseOver(elem.id),false)
                        elem.onmouseover = null
                        elem.onclick = null
                        kulka.style.width = '20px'
                        kulka.style.height = '20px'
                        kulka.style.borderRadius = '10px'
                        kulka.style.marginLeft = '5px'
                        kulka.removeAttribute('clicked')
                    })


                    let helpArray2 = helpArray.jakasF()

                    let helpArray3: any[] = HelpArray.findPath(helpArray2)
                    if (helpArray3 == []) {
                        return
                    } else {
                        //console.log(id) //id pola a nie random number
                        //console.log(arr)
                        arr.forEach(ell => {
                            if (id == myArr[ell]) {

                                let mojaKulka: any = document.getElementById(id)?.childNodes[0]
                                let col = mojaKulka.style.backgroundColor
                                const index = arr.indexOf(ell);
                                if (index > -1) {
                                    arr.splice(index, 1); // 2nd parameter means remove one item only
                                }
                                mojaKulka.style.backgroundColor = ''
                                let mojaNowaKulka: any = document.getElementById(iddd)

                                if (mojaNowaKulka.childNodes[0]) {
                                    myFun()
                                } else {
                                    mojaNowaKulka.appendChild(kulka)
                                    kulka.className = 'kulka'
                                    kulka.style.width = '20px'
                                    kulka.style.height = '20px'
                                    kulka.style.borderRadius = '10px'
                                    kulka.style.marginLeft = '5px'
                                    kulka.style.backgroundColor = col
                                }






                            }
                        })
                        //console.log('idddd',iddd)
                        let mojaWina: number
                        if (iddd == '00') {
                            mojaWina = 0
                            arr.push(mojaWina)
                        } else if (iddd == '01') {
                            mojaWina = 1
                            arr.push(mojaWina)
                        }
                        else if (iddd == '02') {
                            mojaWina = 2
                            arr.push(mojaWina)
                        }
                        else if (iddd == '03') {
                            mojaWina = 3
                            arr.push(mojaWina)
                        }
                        else if (iddd == '04') {
                            mojaWina = 4
                            arr.push(mojaWina)
                        }
                        else if (iddd == '05') {
                            mojaWina = 5
                            arr.push(mojaWina)
                        }
                        else if (iddd == '06') {
                            mojaWina = 6
                            arr.push(mojaWina)
                        }
                        else if (iddd == '07') {
                            mojaWina = 7
                            arr.push(mojaWina)
                        }
                        else if (iddd == '08') {
                            mojaWina = 8
                            arr.push(mojaWina)
                        }
                        else if (iddd == '10') {
                            mojaWina = 9
                            arr.push(mojaWina)
                        }
                        else if (iddd == '11') {
                            mojaWina = 10
                            arr.push(mojaWina)
                        }
                        else if (iddd == '12') {
                            mojaWina = 11
                            arr.push(mojaWina)
                        }
                        else if (iddd == '13') {
                            mojaWina = 12
                            arr.push(mojaWina)
                        }
                        else if (iddd == '14') {
                            mojaWina = 13
                            arr.push(mojaWina)
                        } else if (iddd == '15') {
                            mojaWina = 14
                            arr.push(mojaWina)
                        } else if (iddd == '16') {
                            mojaWina = 15
                            arr.push(mojaWina)
                        } else if (iddd == '17') {
                            mojaWina = 16
                            arr.push(mojaWina)
                        } else if (iddd == '18') {
                            mojaWina = 17
                            arr.push(mojaWina)
                        } else if (iddd == '20') {
                            mojaWina = 18
                            arr.push(mojaWina)
                        } else if (iddd == '21') {
                            mojaWina = 19
                            arr.push(mojaWina)
                        } else if (iddd == '22') {
                            mojaWina = 20
                            arr.push(mojaWina)
                        } else if (iddd == '23') {
                            mojaWina = 21
                            arr.push(mojaWina)
                        } else if (iddd == '24') {
                            mojaWina = 22
                            arr.push(mojaWina)
                        } else if (iddd == '25') {
                            mojaWina = 23
                            arr.push(mojaWina)
                        } else if (iddd == '26') {
                            mojaWina = 24
                            arr.push(mojaWina)
                        } else if (iddd == '27') {
                            mojaWina = 25
                            arr.push(mojaWina)
                        } else if (iddd == '28') {
                            mojaWina = 26
                            arr.push(mojaWina)
                        } else if (iddd == '30') {
                            mojaWina = 27
                            arr.push(mojaWina)
                        } else if (iddd == '31') {
                            mojaWina = 28
                            arr.push(mojaWina)
                        } else if (iddd == '32') {
                            mojaWina = 29
                            arr.push(mojaWina)
                        } else if (iddd == '33') {
                            mojaWina = 30
                            arr.push(mojaWina)
                        } else if (iddd == '34') {
                            mojaWina = 31
                            arr.push(mojaWina)
                        } else if (iddd == '35') {
                            mojaWina = 32
                            arr.push(mojaWina)
                        } else if (iddd == '36') {
                            mojaWina = 33
                            arr.push(mojaWina)
                        } else if (iddd == '37') {
                            mojaWina = 34
                            arr.push(mojaWina)
                        } else if (iddd == '38') {
                            mojaWina = 35
                            arr.push(mojaWina)
                        } else if (iddd == '40') {
                            mojaWina = 36
                            arr.push(mojaWina)
                        } else if (iddd == '41') {
                            mojaWina = 37
                            arr.push(mojaWina)
                        } else if (iddd == '42') {
                            mojaWina = 38
                            arr.push(mojaWina)
                        } else if (iddd == '43') {
                            mojaWina = 39
                            arr.push(mojaWina)
                        } else if (iddd == '44') {
                            mojaWina = 40
                            arr.push(mojaWina)
                        } else if (iddd == '45') {
                            mojaWina = 41
                            arr.push(mojaWina)
                        } else if (iddd == '46') {
                            mojaWina = 42
                            arr.push(mojaWina)
                        } else if (iddd == '47') {
                            mojaWina = 43
                            arr.push(mojaWina)
                        } else if (iddd == '48') {
                            mojaWina = 44
                            arr.push(mojaWina)
                        } else if (iddd == '50') {
                            mojaWina = 45
                            arr.push(mojaWina)
                        } else if (iddd == '51') {
                            mojaWina = 46
                            arr.push(mojaWina)
                        } else if (iddd == '52') {
                            mojaWina = 47
                            arr.push(mojaWina)
                        } else if (iddd == '53') {
                            mojaWina = 48
                            arr.push(mojaWina)
                        } else if (iddd == '54') {
                            mojaWina = 49
                            arr.push(mojaWina)
                        } else if (iddd == '55') {
                            mojaWina = 50
                            arr.push(mojaWina)
                        } else if (iddd == '56') {
                            mojaWina = 51
                            arr.push(mojaWina)
                        } else if (iddd == '57') {
                            mojaWina = 52
                            arr.push(mojaWina)
                        } else if (iddd == '58') {
                            mojaWina = 53
                            arr.push(mojaWina)
                        } else if (iddd == '60') {
                            mojaWina = 54
                            arr.push(mojaWina)
                        } else if (iddd == '61') {
                            mojaWina = 55
                            arr.push(mojaWina)
                        } else if (iddd == '62') {
                            mojaWina = 56
                            arr.push(mojaWina)
                        } else if (iddd == '63') {
                            mojaWina = 57
                            arr.push(mojaWina)
                        } else if (iddd == '64') {
                            mojaWina = 58
                            arr.push(mojaWina)
                        } else if (iddd == '65') {
                            mojaWina = 59
                            arr.push(mojaWina)
                        } else if (iddd == '66') {
                            mojaWina = 60
                            arr.push(mojaWina)
                        } else if (iddd == '67') {
                            mojaWina = 61
                            arr.push(mojaWina)
                        } else if (iddd == '68') {
                            mojaWina = 62
                            arr.push(mojaWina)
                        } else if (iddd == '70') {
                            mojaWina = 63
                            arr.push(mojaWina)
                        } else if (iddd == '71') {
                            mojaWina = 64
                            arr.push(mojaWina)
                        } else if (iddd == '72') {
                            mojaWina = 65
                            arr.push(mojaWina)
                        } else if (iddd == '73') {
                            mojaWina = 66
                            arr.push(mojaWina)
                        } else if (iddd == '74') {
                            mojaWina = 67
                            arr.push(mojaWina)
                        } else if (iddd == '75') {
                            mojaWina = 68
                            arr.push(mojaWina)
                        } else if (iddd == '76') {
                            mojaWina = 69
                            arr.push(mojaWina)
                        } else if (iddd == '77') {
                            mojaWina = 70
                            arr.push(mojaWina)
                        } else if (iddd == '78') {
                            mojaWina = 71
                            arr.push(mojaWina)
                        } else if (iddd == '80') {
                            mojaWina = 72
                            arr.push(mojaWina)
                        } else if (iddd == '81') {
                            mojaWina = 73
                            arr.push(mojaWina)
                        } else if (iddd == '82') {
                            mojaWina = 74
                            arr.push(mojaWina)
                        } else if (iddd == '83') {
                            mojaWina = 75
                            arr.push(mojaWina)
                        } else if (iddd == '84') {
                            mojaWina = 76
                            arr.push(mojaWina)
                        } else if (iddd == '85') {
                            mojaWina = 77
                            arr.push(mojaWina)
                        } else if (iddd == '86') {
                            mojaWina = 78
                            arr.push(mojaWina)
                        } else if (iddd == '87') {
                            mojaWina = 79
                            arr.push(mojaWina)
                        } else if (iddd == '88') {
                            mojaWina = 80
                            arr.push(mojaWina)
                        }

                        //console.log(arr)
                        clearColorPath()
                        toHelp = []
                        for (let u = 0; u < arr.length; u++) {
                            toHelp.push(myArr[arr[u]])
                        }

                        //console.log('toHelp',toHelp)
                        let helpArray = new HelpArray(toHelp, '', meta)
                        let helpArray2 = helpArray.jakasF()

                        let helpArray3: any[] = HelpArray.findPath(helpArray2)
                        console.log('asdf', iddd)
                    }
                    id = iddd



                }

                /**
                 * dodanie tablicy i id do pliku z helpArrayem/ wpisanie 0, X, M, S do 2d arraya
                 */
                const myFun = () => {
                    if (kulka.hasAttribute('clicked')) {
                        kulka.style.width = '20px'
                        kulka.style.height = '20px'
                        kulka.style.borderRadius = '10px'
                        kulka.style.marginLeft = '5px'
                        kulka.removeAttribute('clicked')
                        var elems = document.querySelectorAll('td');
                        elems.forEach(elem => {
                            elem.onmouseover = null
                        })
                    } else {
                        //console.log(id)
                        kulka.style.width = '28px'
                        kulka.style.height = '28px'
                        kulka.style.marginLeft = '1px'
                        kulka.style.borderRadius = '14px'
                        let toHelp: string[] = []
                        for (let o = 0; o < arr.length; o++) {
                            toHelp.push(myArr[arr[o]])
                        }
                        console.log(id)
                        let helpArray = new HelpArray(toHelp, id, meta)
                        let helpArray2 = helpArray.jakasF()

                        let helpArray3: any[] = HelpArray.findPath(helpArray2)
                        kulka.setAttribute('clicked', 'true')
                        var elems = document.querySelectorAll('td');

                        elems.forEach(elem => {
                            elem.onmouseover = () => onMouseOver(elem.id)
                        })

                    }
                }

                /**
                 * wpisanie kulek do tabelki html 
                 */
                arr.forEach(elem => {
                    if (td.id == myArr[elem]) {
                        td.appendChild(kulka)
                        let rd: number = Math.floor(Math.random() * (6 - 0 + 1)) + 0
                        kulka.style.backgroundColor = colors[rd]
                    }
                })
                /**
                 * dodanie listenera click do kulki
                 */

                kulka.addEventListener("click", myFun)

                tr.appendChild(td)
            }

        }
    }
}
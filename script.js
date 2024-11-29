let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let button1 = document.getElementById("button1")
let output1 = document.getElementById("output1")

function my50function() {
    if (parseInt(input1.value) === 50 || parseInt(input2.value) === 50 || parseInt(input1.value) + parseInt(input2.value) === 50) {
        output1.innerHTML = " "
        output1.innerHTML = "<p class='text-success fw-bold mb-0'>TRUE!</p>"
    }

    else {
        output1.innerHTML = " "
        output1.innerHTML = "<p class='text-danger fw-bold mb-0'> FALSE, TRY AGAIN!</p>"
    }
}

button1.addEventListener("click", my50function)








function removefromstring() {
    let input3 = document.getElementById("input3")
    let input4 = document.getElementById("input4")
    let button2 = document.getElementById("button2")
    let output2 = document.getElementById("output2")
    let value3 = input3.value
    let value4 = parseInt(input4.value)

    let newstring = value3.slice(0, value4) + value3.slice(value4 + 1)
        output2.innerHTML = `<p class="text-success fw-bold mb-0">${newstring} <p>`
}

button2.addEventListener("click", removefromstring)









function checknumbers() {
    let input5 = document.getElementById("input5")
    let input6 = document.getElementById("input6")
    let output3 = document.getElementById("output3")
    
    const value4 = parseInt(input5.value)
    const value5 = parseInt(input6.value)

    const isinrangeof4060 = value4 >= 40 && value4 <= 60 && value5 >= 40 && value5 <= 60
    const isinrangeof70100 = value4 >=70 && value4 <=100 && value5 >=70 && value5 <=100

    if (isinrangeof4060 || isinrangeof70100) {output3.innerHTML="<p class='text-success fw-bold mb-0'> True! </p>"}
    else {output3.innerHTML="<p class='text-danger fw-bold mb-0'> False! </p>"}   
}
let button3 = document.getElementById("button3")

button3.addEventListener("click", checknumbers)







function checkcityname(cityname) {
    if (cityname.includes("Los") || cityname.includes("New")) { console.log("true") }
    else { console.log("false") }
}
checkcityname("Rome")
checkcityname("Turin")



function checkarray(array) {
    let arrayelementssum = array.length
    console.log(arrayelementssum)
}

let array3 = ["ciao", "why", "hello", "world", "bye"]
checkarray(array3)





function checkarray2(array2) {
    if (array2.includes(1) || array2.includes(3)) { console.log("false") }
    else { console.log("true") }
}
let array2 = [2, 4, 5, 6, 7, 8, 9, 10]
checkarray2(array2)



function findcorner(degree) {
    if (degree < 90) { console.log("acute") }
    else if (degree === 90) { console.log("right") }
    else if (degree > 90 && degree < 180) { console.log("obtuse") }
    else if (degree === 180) { console.log("straight") }
}
findcorner(170)



let acronyme = "Save our souls"
console.log(acronyme[0] + acronyme[5] + acronyme[9])






function themostusedchar() {
    let string7 = document.getElementById("input7")
    let output4 = document.getElementById("output4")

    const conteggio = {};
    const val7=string7.value

    for (char of val7) { conteggio[char] = (conteggio[char] || 0) + 1 }

    let conteggioMassimo = 0;
    let charMassimo = null;

    for (char in conteggio) { if (conteggio[char] > conteggioMassimo) { conteggioMassimo = conteggio[char]; charMassimo = char } }

    output4.innerHTML = `<p class='text-secondary fw-bold'>${charMassimo} <p>`
}

document.getElementById("button4").addEventListener("click", themostusedchar)






function checkanagram(string1, string2) {
    let arraystring1 = [];
    let arraystring2 = [];
    for (char of string1) { arraystring1.push(char) }
    for (char of string2) { arraystring2.push(char) }

    console.log(arraystring1)
    console.log(arraystring2)

    for (element of arraystring1) {
        if (arraystring2.includes(element)) { console.log("true") }
        else { console.log("false") }
    }
}

checkanagram("listen", "stenli")






function findtheanagram(list, word) {
    let anagramsfound = [];
    let sortedword = word.split('').sort().join('')

    for (let words of list) {
        let wordssorted = words.split('').sort().join('')

        if (wordssorted === sortedword) { anagramsfound.push(words) }

    }
    console.log(anagramsfound)

}

list = ["dessert", "meat", "tame", "team"]
word = "mate"

findtheanagram(list, word)



function palindrome(string) {
    let reversedstring = string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').split('').reverse().join('').toLowerCase()
    console.log(reversedstring)

    let normalizedstring = string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toLowerCase();
    console.log(normalizedstring)

    if (reversedstring === normalizedstring) { console.log("true") }
    else { console.log("false") }

}

let string = "Lay a wallaby baby ball away, Al."
palindrome(string)




function differentnumbersamedigits(number1) {

    let newnumber = parseInt(number1.toString().split('').reverse().join(''))
    console.log(Math.sign(number1) * newnumber)
}


differentnumbersamedigits(-321)



function hashladder(x) {
    let hashladder = ""
    for (let i = 1; i <= x; i++) { hashladder += "#"; console.log(hashladder) }
}

hashladder(50)



function reversedstring(string) {
    let reversedstring = string.toLowerCase().split('').reverse().join('')
    console.log(reversedstring)
}



reversedstring("Supercalifragilistichespiralidoso")



function repeat(x) {

    for (let i = 1; i <= x; i++) {
        console.log("$".repeat(i))
    }
}
repeat(10)



function createandprintsubarrays(array, y) {

    for (let i = 0; i < array.length; i += y) {

        console.log(array.slice(i, i + y))

    }

}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let y = 3
createandprintsubarrays(array1, y);




function pyramid(x) {
    for (let i = 1; i <= x; i++) {
        let hashes = "#".repeat(i)
        let spaces = ''.repeat(x - i)


    }

}
pyramid(3)



function creaMatriceSpirale(N) {
    if (N <= 0) return []; // Gestione per valori non validi di N

    // Inizializza una matrice vuota NxN
    const matrice = Array.from({ length: N }, () => Array(N).fill(0));
    let valore = 1; // Valore iniziale da inserire nella matrice
    let alto = 0, basso = N - 1, sinistra = 0, destra = N - 1;

    // Riempimento della matrice a spirale
    while (alto <= basso && sinistra <= destra) {
        // Muoviti da sinistra a destra
        for (let i = sinistra; i <= destra; i++) {
            matrice[alto][i] = valore++;
        }
        alto++;

        // Muoviti dall'alto verso il basso
        for (let i = alto; i <= basso; i++) {
            matrice[i][destra] = valore++;
        }
        destra--;

        // Muoviti da destra a sinistra
        if (alto <= basso) {
            for (let i = destra; i >= sinistra; i--) {
                matrice[basso][i] = valore++;
            }
            basso--;
        }

        // Muoviti dal basso verso l'alto
        if (sinistra <= destra) {
            for (let i = basso; i >= alto; i--) {
                matrice[i][sinistra] = valore++;
            }
            sinistra++;
        }
    }

    return matrice;
}

// Esempio di utilizzo
const N = 8;
const matriceSpirale = creaMatriceSpirale(N);
console.log(matriceSpirale);

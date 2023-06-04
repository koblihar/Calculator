let input = document.getElementById("input")
let row = document.querySelectorAll("row")
writable = true

function btnClicked(event) {
    if (writable == true){
        // Vezme kliknuté tlačítko a vezme si jeho text
        var clicked = event.target
        var btnText = clicked.innerHTML

        // přidá číslo nebo + - () do stringu, který se bude vypisovat do input fieldu
        valuesInput = getValue()
        valuesInput += btnText
        input.value = valuesInput
    } 
}

function getValue() {
    let valuesInput = document.getElementById("input").value
    return valuesInput
}

// tlačítko na druhou
function squared() {
    if (writable == true) {
        valuesInput = getValue()
        valuesInput += "^2"
        input.value = valuesInput
    }
}

// tlačítko na y
function powered() {
    if (writable == true) {
        valuesInput = getValue()
        valuesInput += "^"
        input.value = valuesInput
    }
}

input.addEventListener("input", function() {
    // Získání nové hodnoty z pole pro vstup
    let newValue = input.value
    input.value = newValue
    console.log(newValue)
    valuesInput = newValue
})

// funkce pro smazání zadaných hodnot (tlačítko c) a nastaví input field zpět na writable, povolí psaní pomocí buttonů
function reset() {
    input.style.pointerEvents = "auto"
    valuesInput = ""
    input.value = valuesInput
    writable = true
}

// překlad ^ na ** a překlad √ aby fungoval výpočet
function Translate() {
    valuesInput = getValue()
    let translated = valuesInput.replace(/\^/g, "**")
    if (translated.includes("√")) {
        translated = Squared(translated)
        console.log(translated);
    }
    return translated
}


function Squared(expression) {
    let squared = expression.replace(/√(\d+)/g, function(match, number) {
      return Math.sqrt(parseInt(number, 10))
    });
  
    return eval(squared);
}

// Vezme hodnotu v inputu a spočítá ji
function calculate(){
    try {
        valuesInput = eval(Translate())
        input.value = valuesInput
        console.log(valuesInput)
        console.log(writable)
        writable = true
    } catch (error) {
        valuesInput = "Error"
        input.value = valuesInput
        input.style.pointerEvents = "none"
        writable = false 
    }
}

// mazání v políčku pro vstup 
function backSpace(){
    if (writable == true){
        input = document.getElementById("input")
        valuesInput = input.value
        console.log(valuesInput)
        valuesInput = valuesInput.substring(0,valuesInput.length -1)
        input.value = valuesInput
    }
}


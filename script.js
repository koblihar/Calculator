let input = document.getElementById("input")
let row = document.querySelectorAll("row")
let valuesInput = ""
writable = true


function btnClicked(event) {
    if (writable == true){
        // Vezme kliknuté tlačítko a vezme si jeho text
        var clicked = event.target
        var btnText = clicked.innerHTML

        // přidá číslo nebo + - () do stringu, který se bude vypisovat do input fieldu
        valuesInput += btnText
        input.value = valuesInput
    } 
}

// tlačítko na druhou
function squared() {
    if (writable == true) {
        valuesInput += "^2"
        input.value = valuesInput
    }
}

// tlačítko na y
function power() {
    if (writable == true) {
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
    valuesInput = input.value
    let translated = valuesInput.replace(/\^/g, "**")
    if (translated.includes("√")) {
        translated = Squared(translated)
        console.log(translated);
    }
    return translated
}


function Squared(expression) {
    let sqrtRegex = "" // regulární výraz pro hledání symbolu odmocniny (√) s číslem
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
    } catch (error) {
        valuesInput = "Error"
        input.value = valuesInput
        input.style.pointerEvents = "none"
        writable = false 
    }
}

// mazání v políčku pro v stup 
function backSpace(){
    if (writable == true){
        valuesInput = valuesInput.slice(0, -1)
        input.value = valuesInput
    }
}


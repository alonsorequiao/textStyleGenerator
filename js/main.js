var header = document.getElementById('myh1');
var header2 = document.getElementById('myh2');

var textBox = document.getElementById('textBox');

var mySet_text = [];
var mySet_color = [];
var mySet_fontSize = [];

var choiceContainerDisplay = document.getElementById("choiceContainer");

var countSaved;

function changeColorh1() {
    header.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    header2.innerText = header.style.color.toUpperCase();
}

function changeFontSizeh1() {
    header.style.fontSize = Math.floor(Math.random() * 60) + "px";
    header2.innerText = 'Font: ' + header.style.fontSize;
}

textBox.onkeyup = function() {
    header.innerHTML = textBox.value;
}

function saveSet() {

    choiceContainerDisplay.innerHTML= "";

    mySet_text.push(header.textContent);
    mySet_color.push(header.style.color.toUpperCase());
    mySet_fontSize.push(header.style.fontSize);

    // CONSOLE
    console.log("Tamanho do Array: " + mySet_text.length + "\n");
    for(var i = 0; i < mySet_text.length; i++ ) {
        console.log("No FOR, i="
            + i
            + " "
            + mySet_text[i]
            + " ---- COLOR: " +  mySet_color[i]
            + " ---- FONT: " +  mySet_fontSize[i]
            + "\n");
    }
    console.log("Final");

    //Print on ChoiceContainer
    // for (i = 0; i < mySet_text.length; i++) {
    //     console.log("Teste " + i);
    //     choiceContainerDisplay.innerHTML +=
    //         mySet_text[i]
    //         + "<br>"
    //         + mySet_color[i]
    //         + "<br>"
    //         + mySet_fontSize[i]
    //         + "<br><br>";
    // }

    for (i = 0; i < mySet_text.length; i++) {
        console.log("Teste " + i);
        choiceContainerDisplay.innerHTML +=
        // "<style = 'font-size:'" + mySet_fontSize + ">" + mySet_text[i] + "</style>";
            "<span style='font-size:" + mySet_fontSize[i] + ";" + " color:" + mySet_color[i] + "'>" + mySet_text[i] + "</span> <br>";

    }
}




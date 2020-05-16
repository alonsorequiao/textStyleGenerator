var header = document.getElementById('myh1');
var header2 = document.getElementById('myh2');

var textBox = document.getElementById('textBox');

var mySet_text = [];
var mySet_color = [];
var mySet_fontSize = [];

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

    mySet_text.push(header.textContent);
    mySet_color.push(header.style.color.toUpperCase());
    mySet_fontSize.push(header.style.fontSize);

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
}




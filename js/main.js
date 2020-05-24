//Text and style capture
var textTyped = document.getElementById('text1');

var styleFontSize = document.getElementById('text2');
var styleColor = document.getElementById('text3');
var textBox = document.getElementById('textBox');

//Loading
var barLoading = document.getElementById("barLoading");
var percentageDisplay = document.getElementById("percentageDisplay");

//Initial Style
textTyped.style.fontSize = 20 + "px";
textTyped.style.color = "#ffffff";
// If you to get the initial style from HTML
// window.getComputedStyle(document.getElementById('text1')).fontSize

//Arrays
var mySet_text = [];
var mySet_color = [];
var mySet_fontSize = [];

//Div space to stock settings saved
var choiceContainerDisplay = document.getElementById("variableContainer");

//Change fontSize
function changeFontSizeh1() {
    textTyped.style.fontSize = Math.floor(Math.random() * 60) + "px";
    styleFontSize.innerText = 'Font: ' + textTyped.style.fontSize;
}

//Change color style
function changeColorh1() {
    textTyped.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    styleColor.innerText = textTyped.style.color.toUpperCase();
}

//Apply input text whenever you type
textBox.onkeyup = function() {
    textTyped.innerHTML = textBox.value;
}

//Save Settings
function saveSet() {

    //Check if text input is not empty
    if (textBox.value.length !== 0) {

        //Check the number of characters - 9 is the maximum
        if (document.getElementById("textBox").value.length > 9) {
            alert("You've typed more than 9 characters");
            return;
        }

        //Fill Array with new information at the last index
        mySet_text.push(textBox.value);
        mySet_color.push(textTyped.style.color.toUpperCase());
        mySet_fontSize.push(textTyped.style.fontSize);

        //Print Style Saved
        printSave();
    }

    //Text input is empty
    else {
        alert("Type something before save");
    }
}

//Loading Bar
function loadingBar() {

    //Container's size
    var containerSize = choiceContainerDisplay.offsetHeight;

    //If container's size is greater than 402px (the limit until it collapses) - RETURN FALSE
    if(containerSize > 402) {
        return false;
    }

    //Print loading bar
    var barWidth = Math.round(containerSize * 500 / 402);
    barLoading.style.display = "block";
    barLoading.style.width = barWidth + "px";

    //Print percentage
    var percent = Math.round(containerSize * 100 / 402);
    percentageDisplay.innerText = percent + "%";

    //Change background color of the loading bar by each stage of "memory"

    //Blue to green
    if(percent < 25) {
        barLoading.style.backgroundImage = "linear-gradient(to left, #00ff0e, #3f00ff)";
    }

    //Blue to blue
    else if(25 < percent && percent < 50) {
        barLoading.style.backgroundImage = "linear-gradient(to left, #00c4ff, #3f00ff)";
    }

    //Blue to yellow
    else if (50 < percent && percent < 75) {
        barLoading.style.backgroundImage = "linear-gradient(to left, #fffb00, #3f00ff)";
    }

    //Blue to red
    else  {
        barLoading.style.backgroundImage = "linear-gradient(to left, #ff0000, #3f00ff)";
    }

}

//Reset Settings Saved
function resetStyles() {
    //Clear display of Styles Saved
    choiceContainerDisplay.innerHTML = "";

    //Clear count %
    percentageDisplay.innerText = "0%";

    //Clear loading bar
    barLoading.style.width = 0 + "px";
    barLoading.style.display = "none";

    //Clear array
    mySet_text = [];
    mySet_color = [];
    mySet_fontSize = [];
}

//Print Settings Saved
function printSave() {

    //Clean display of Styles Saved
    choiceContainerDisplay.innerHTML = "";

    //Clear loading bar when all indexes be deleted
    if (mySet_text.length === 0) {
        loadingBar();
    }

    //PRINT ARRAY
    for (let i = 0; i < mySet_text.length; i++) {

        choiceContainerDisplay.innerHTML +=
            "<span class='tooltip' style='font-size:"
            + mySet_fontSize[i] + ";"
            + " color:" + mySet_color[i]
            + "'>" + mySet_text[i]
            + "<span class='tooltiptext'>Color: "
            + mySet_color[i]
            + "<br>Font Size: "
            + mySet_fontSize[i]
            + "<br>"
            + "<button class='deleteButton' onclick='deleteIndex(" + i + ")'>Delete</button> </span> </span> <br>";

        //Check container's size AFTER print
        var statusSize = loadingBar();

        //IF size overcome what is allowed - DELETE last array's index
        if (statusSize === false) {

            alert("You filled almost all the Save Settings field."
                + "\n"
                + "Try to you use a smaller font size and maybe you'll have it saved.");

            //Clean the last Array position
            delete mySet_color.splice(i, 1);
            delete mySet_text.splice(i, 1);
            delete mySet_fontSize.splice(i, 1);

            //Clean display of Styles Saved
            choiceContainerDisplay.innerHTML = "";

            //Restart Loop to print the Styles Saved again (without the last inception)
            i = -1;
        }
    }

}

//Delete Selected Index
function deleteIndex(i) {

    //Delete Index
    mySet_text.splice(i,1);
    mySet_fontSize.splice(i,1);
    mySet_color.splice(i,1);

    //Print again
    printSave();
}
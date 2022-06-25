// XMLHttpRequest objects are used to interact with servers
var reader = new XMLHttpRequest();

//function to read file from local
function loadFile() {
    //open file
    reader.open('get', 'myFile.txt', true);
    reader.onreadystatechange = displayContents; //prepare server to accept event
    reader.send(null); //to ignore sending data
}
// function to display content in html page
function displayContents() {
    if (reader.readyState == 4) //4 means The operation is complete.
    {
        var element = document.getElementById('main');
        //split text to lines
        //responseText returns response as text.
        let line = reader.responseText.split("\n");
        let randomIndex = Math.floor(Math.random() * line.length)
        let span = document.createElement('span');
        element.innerHTML = ""; //reset div to empty
        element.appendChild(span); // add span element to div 
        span.innerHTML = line[randomIndex]; // display data in span
    }
}
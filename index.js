console.log("JavaScript is loaded");

function changeTitleColor(color) {
    const titleElement = document.getElementsByClassName("title");
    console.log(titleElement);
    for(let i = 0; i < titleElement.length; i++) {
        titleElement[i].style.color = color;
    }   
    //titleElement.style.color = color;
}

//JSON : JavaScript Object Notation

/*
 {
    "name": "dec",
    "test": "test"


 }



*/
var myImages= [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.png",
    "images/pic4.jpg",
    //"images/pic5.jpg",
   // "images/pic6.jpg"
]

var myDiv = document.querySelector(".container");

var rowdiv = document.createElement("div");
rowdiv.setAttribute("class","row");

myImages.forEach(element => {
    // creates <img></img>

    var coldiv = document.createElement("div");
    coldiv.setAttribute("class","col");
    

    var aNewImage = document.createElement("img");
    // creates <img src="images/pic1.jpg"></img>
    aNewImage.setAttribute("src",element);
    aNewImage.setAttribute("width","50%");

    coldiv.appendChild(aNewImage);
    rowdiv.appendChild(coldiv);
});

    myDiv.appendChild(rowdiv);
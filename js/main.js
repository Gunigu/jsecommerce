

function Shirt (name, color, stock, image){
this.name=name;
this.tSize = size;
this.color =color;
this.stock = stock;
this.image =image;
}

var shirtArray = [];

var whitetee = new Shirt ('White Tee', 'medium','White', 150, 'img/whitetee.png');
var blacktee = new Shirt ('Black Tee', 'medium', 'Black', 50, 'img/blacktee.png');
var redtee = new Shirt ('Red Tee','large', 'red',20, 'img/redtee.png');
var bluetee = new Shirt ('Blue Tee','small', 'blue', 70, 'img/bluetee.png');
var greentee = new Shirt ('Green Tee','large', 'green',55, 'img/greentee.png');
var yellowtee = new Shirt ('Yellow Tee','medium', 'yellow',250,  'img/yellowtee.png');




shirtArray.push(whitetee);
shirtArray.push(blacktee);
shirtArray.push(redtee);
shirtArray.push(bluetee);
shirtArray.push(greentee);
shirtArray.push(yellowtee);

for (i= 0; i<shirtArray.length; i++){
	var tName = document.createTextNode(shirtArray[i].name);
	var tSize = document.createTextNode("Available Size:" + shirtArray[i].size);
	var tColor = document.createTextNode("color:" + shirtArray[i].color);
	var tStock = document.createTextNode("In stock:" + shirtArray[i].stock);
	var tButton = document.createTextNode("Buy Now!");
	var tImage = shirtArray[i].image;
}


var myCol =document.createElement('DIV');
var myDiv =document.createElement('DIV');
var nameH1 =document.createElement('H1');
var sizeH4= document.createElement('H4');
var colorH4 = document.createElement('H4');
var stockH4 = document.createElement ('H4');
var buyNow = document.createElement('BUTTON');
var image = document.createElement('IMG');

nameH1.appendChild(tName);
sizeH4.appendChild(tSize);
colorH4.appendChild(tColor);
stockH4.appenChild(tStock);
buyNow.appenChild(tButton);
buyNow.className = 'btn btn-primary btn-lg';
image.src = tImage;
image.className = "img-responsive";

newCol.className ="col=sm-4"; 
newDiv.className = "t-shirt shirtName" + i +"thumbnail";
newDiv.appendChild(nameH1);
newDiv.appendChild(image);
newDiv.appendChild(sizeH4);
newDiv.appendChild(colorH4);
newDiv.appendChild(stockH4);
newDiv.appendChild(buyNow);
newCol.appendChild(newDiv);



myDiv.className = "bg-dark text-white p-5 col-12 col-sm mx-auto mb-5";
myDiv.style.minHeight ="300px";
myDiv.style.backgroundImage= "img/whitetee.png";


myH1.innerText = shirtArray.name;
myH4.innerText = shirtArray.color;
myP.innerText = "Price" + shirtArray.price + "Instock" + shirtArray.instock;

document.getElementByClassName("row")[0].appendChild(myDiv);
 


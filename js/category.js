var myIndex=1;
var priceStart=0;
var priceEnd=9999999;

function currentActive(n) {
	myIndex=n;
	var i;
	var boxes=document.getElementsByClassName("categoryTpye");

	for (i=0;i<boxes.length;i++) {
		boxes[i].className=boxes[i].className.replace(" active","");
	}

	boxes[myIndex-1].className += " active";
}
 
function wangwang() {
 	alert("弹出旺旺聊天窗口");
 }

function funcpriceStart() {
	var newPriceStart=document.getElementById("priceStart").value;
 	newPriceStart=Number(newPriceStart);
 	priceStart=newPriceStart;
 	price();
}

function funcpriceEnd() {
	var newPriceEnd=document.getElementById("priceEnd").value;
 	newPriceEnd=Number(newPriceEnd);
 	priceEnd=newPriceEnd;
 	price();
}

function price() {
 	var myPrices=document.getElementsByClassName("priceNumber");
 	var contentUnits=document.getElementsByClassName("contentUnit");

 	for(var i=0;i<contentUnits.length;i++) {
 		contentUnits[i].style.display="none";
 	}

 	var p;
 	for(p=0;p<myPrices.length;p++) {
 		var x=myPrices[p].innerHTML;
 		x=Number(x);
 		if(x<=priceEnd&&x>=priceStart) {
 			myPrices[p].parentNode.parentNode.parentNode.style.display="block";
 		}
 	}
 }
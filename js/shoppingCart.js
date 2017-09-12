var x=0;
var y=0;
var z=0;
var s=0;

function settle(n) {
	var mySelects=document.getElementsByClassName("selectIcon"); 
	if(mySelects[n-1].className.match("unSelected")) {
		mySelects[n-1].src="images/cartSelected.png";
		mySelects[n-1].className=mySelects[n-1].className.replace(" unSelected"," Selected");
	}else {
		mySelects[n-1].src="images/cartNotSelected.png";
		mySelects[n-1].className=mySelects[n-1].className.replace(" Selected"," unSelected");
	}

	buttonCheck();
	finalPrice();
}

function buttonCheck() {
	var myIcon1=document.getElementById("icon1"); 
	var myIcon2=document.getElementById("icon2"); 
	var myButtonIcons=document.getElementsByClassName("buttonIcon"); 
	if(myIcon1.className.match("Selected")||myIcon2.className.match("Selected")) {
		var i;
		for(i=0;i<myButtonIcons.length;i++) {
			myButtonIcons[i].className=myButtonIcons[i].className.replace(" disabled"," abled");
		}
	}
	if(myIcon1.className.match("unSelected")&&myIcon2.className.match("unSelected")) {
		var i;
		for(i=0;i<myButtonIcons.length;i++) {
			myButtonIcons[i].className=myButtonIcons[i].className.replace(" abled"," disabled");
		}
	}
}

function finalPrice() {
	var myIcon1=document.getElementById("icon1"); 
	var myIcon2=document.getElementById("icon2"); 
	var item1Price=document.getElementById("item1Price"); 
	var item1Num=document.getElementById("item1Num"); 
	var item1Total=document.getElementById("item1Total"); 
	var item2Price=document.getElementById("item2Price"); 
	var item2Num=document.getElementById("item2Num"); 
	var item2Total=document.getElementById("item2Total"); 
	var totalPrice=document.getElementById("totalPrice"); 
	var topPrice=document.getElementById("priceTop"); 
	var totalNum=document.getElementById("finalNum");

	if(myIcon1.className.match(" Selected")&&myIcon2.className.match(" unSelected")) {
		x=parseFloat(item1Price.innerHTML)*parseFloat(item1Num.value);
		item1Total.innerHTML=x;
		y=0;
		x=parseFloat(x);
		y=parseFloat(y);
		z=x+y;
		totalPrice.innerHTML=z;
		topPrice.innerHTML=z;
		s=item1Num.value;
		totalNum.innerHTML=s;
	}

	if(myIcon1.className.match(" unSelected")&&myIcon2.className.match(" Selected")) {
		x=0;
		y=parseFloat(item2Price.innerHTML)*parseFloat(item2Num.value);
		item2Total.innerHTML=y;
		x=parseFloat(x);
		y=parseFloat(y);
		z=x+y;
		totalPrice.innerHTML=z;
		topPrice.innerHTML=z;
		s=item2Num.value;
		totalNum.innerHTML=s;
	}

	if(myIcon1.className.match(" unSelected")&&myIcon2.className.match(" unSelected")) {
		totalPrice.innerHTML=0.00;
		topPrice.innerHTML=0.00;
		totalNum.innerHTML=0;
	}

	if(myIcon1.className.match(" Selected")&&myIcon2.className.match(" Selected")) {
		x=parseFloat(item1Price.innerHTML)*parseFloat(item1Num.value);
		item1Total.innerHTML=x;
		y=parseFloat(item2Price.innerHTML)*parseFloat(item2Num.value);
		item2Total.innerHTML=y;
		x=parseFloat(x);
		y=parseFloat(y);
		z=x+y;
		totalPrice.innerHTML=z;
		topPrice.innerHTML=z;
		s=parseInt(item1Num.value)+parseInt(item2Num.value);
		totalNum.innerHTML=s;
	}
}

function changeNum1(n) {
	var num=document.getElementById("item1Num");
	var m=parseInt(num.value);
	m+=n;
	num.value=m;
	checkNum1();
}

function checkNum1() {
	var num=document.getElementById("item1Num");
	var c1=num.value;
	if(isNaN(c1)) {
		num.value="1";
	}else if(c1<0) {
		num.value="0";
	}else if(c1>60) {
		num.value="60";
	}

	finalPrice();
}

function changeNum2(n) {
	var num=document.getElementById("item2Num");
	var m=parseInt(num.value);
	m+=n;
	num.value=m;
	checkNum2();
}

function checkNum2() {
	var num=document.getElementById("item2Num");
	var c1=num.value;
	if(isNaN(c1)) {
		num.value="1";
	}else if(c1<0) {
		num.value="0";
	}else if(c1>30) {
		num.value="30";
	}

	finalPrice();
}
var myIndex = 1;
showSlides();

function currentSlides(n){
	myIndex=n;
	var i;
	var slides=document.getElementsByClassName("mySlides");
	var dots=document.getElementsByClassName("mydots");

	if(myIndex<1){
		myIndex=slides.length;
	}
	if(myIndex>slides.length){
		myIndex=1;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<dots.length;i++){
		dots[i].style.backgroundColor="white";
	}
	slides[myIndex-1].style.display="block";
	dots[myIndex-1].style.backgroundColor="grey";
}

function showSlides(){
	var i;
	var slides=document.getElementsByClassName("mySlides");
	var dots=document.getElementsByClassName("mydots");

	if(myIndex<1){
		myIndex=slides.length;
	}
	if(myIndex>slides.length){
		myIndex=1;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<dots.length;i++){
		dots[i].style.backgroundColor="white";
	}
	slides[myIndex-1].style.display="block";
	dots[myIndex-1].style.backgroundColor="grey";
	myIndex++;
	setTimeout(showSlides,3000);
}

function showList(n) {
	var i;
	var myList=document.getElementsByClassName("listContainer");
	for (i=0;i<myList.length;i++) {
		myList[i].style.display="none";
	}
	document.getElementById("list"+n).style.display="block";
}

function hideList(){
	var i;
	var myList=document.getElementsByClassName("listContainer");
	for (i=0;i<myList.length;i++) {
		myList[i].style.display="none";
	}
}

function myToggle() {
	var x=document.getElementById("leftList");  //bug getlElmentsByClassName 
	var y=document.getElementById("leftHead");	//bug 点击两次才显示

	if(x.style.display == "none") {
		x.style.display="block";
	}else {
		x.style.display="none";
	}
//bug 

	
	if (!y.className.match("moreRed")){
		y.className += " moreRed";
	}else{
		y.className = y.className.replace(" moreRed","")
	}
	

}


// move cat ears
function moveCatEarIn1(n){
	document.getElementById("catear"+n).style.display="block";
	m=" catearMoveIn"+n;
	// alert(m);
	document.getElementById("catear"+n).className += m;
}

function moveCatEarOut1(n){
	var c1=document.getElementById("catear"+n);
	m=" catearMoveIn"+n;
	c1.className=c1.className.replace(m,"");
	c1.style.display="none";
	c1.style.top="0px";
}
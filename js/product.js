function changePictures(n) {
	var pics=document.getElementsByClassName("pictures");
	var bigPic=document.getElementById("bigPicture");

	bigPic.src="images/p"+n+".jpg";

	var i;
	for(i=0;i<pics.length;i++) {
		pics[i].className=pics[i].className.replace(" active","");
	}
	pics[n-1].className+=" active";
}

function changeDescribeRerview(n) {
	var describe=document.getElementById("contentDescribe");
	var rerview=document.getElementById("contentReview");
	var barSpan=document.getElementsByClassName("contentBarSpan");

	if(n==1) {
		describe.style.display="block";
		rerview.style.display="none";
	}

	if(n==2) {
		describe.style.display="none";
		rerview.style.display="block";
	}

	var i;
	for(i=0;i<barSpan.length;i++) {
		barSpan[i].className=barSpan[i].className.replace(" barActive","");
	}

	barSpan[n-1].className+=" barActive";

}

function changeNum(n) {
	var num=document.getElementById("textNum");
	var x=parseInt(num.value);
	x+=n;
	num.value=x;
	checkNum();
}

function checkNum() {
	var num=document.getElementById("textNum");
	var x=num.value;
	if(isNaN(x)) {
		num.value="1";
	}else if(x<=0) {
		num.value="1"
	}else if(x>66) {
		num.value="66"
	}
}


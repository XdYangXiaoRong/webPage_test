var mynavBar=document.getElementById("navBar");
var mynavLi=mynavBar.getElementsByTagName("li");//从零开始
var myhid=document.getElementsByClassName("hiddenTo");//从零开始
function mybar(){
	for(var i=1;i<mynavLi.length;i++){
		mynavLi[i].onmouseover=function(){
			for(var j=0;j<myhid.length;j++){
				myhid[j].style.display="none";
			}
			var index=this.getAttribute("date");
			myhid[index-1].style.display="block";
			myhid[index-1].onmouseover=function(){
				this.style.display="block";
			}
			myhid[index-1].onmouseout=function(){
				this.style.display="none";
			}

		}
		
	}
	for(var i=1;i<mynavLi.length;i++){
		mynavLi[i].onmouseout=function(){
			for(var j=0;j<myhid.length;j++){
				myhid[j].style.display="none";
			}
		}
	}
}
mybar();
var myBigPicture=document.getElementById("mainPicture");
var myWord=document.getElementsByClassName("word");

function picTo(n){
	myBigPicture.src="images/m"+n+".jpg" ;
}
var i=1;//表示图片的下标
setInterval(function(){
	if(i==4){
		i=1;
		myBigPicture.src="images/m"+i+".jpg";
		for(var k=0;k<myWord.length;k++){
			myWord[k].getElementsByTagName("a")[0].style.color="#898989";
			myWord[k].getElementsByTagName("a")[1].style.color="#898989";
		}
		myWord[0].getElementsByTagName("a")[0].style.color="black";
		myWord[0].getElementsByTagName("a")[1].style.color="black";
	}
	else{
		
		myBigPicture.src="images/m"+i+".jpg";
		for(var k=0;k<myWord.length;k++){
			myWord[k].getElementsByTagName("a")[0].style.color="#898989";
			myWord[k].getElementsByTagName("a")[1].style.color="#898989";
		}
		for(var k=0;k<myWord.length;k++){
			var index2=myWord[k].getAttribute("mydate");
			// console.log(index2+"b");
			// console.log(k+"b");
			// console.log(i+"b");
			if(i==index2){
				myWord[i].getElementsByTagName("a")[0].style.color="black";
				myWord[i].getElementsByTagName("a")[1].style.color="black";
			}
		}
		i++;
	}
},2000);
/*重要公告的左边的轮播图*/
var mynt1=document.getElementById("nt1");
var mynt2=document.getElementById("nt2");
var myUp=document.getElementsByClassName("up")[0];
var myLi=myUp.getElementsByTagName("li");

function hiddenTwo1(){
	mynt1.style.display="block";
	mynt2.style.display="none";
	myLi[0].setAttribute("name","black");
	myLi[2].setAttribute("name","");


}
function hiddenTwo2(){
	mynt1.style.display="none";
	mynt2.style.display="block";
	myLi[0].setAttribute("name","");
	myLi[2].setAttribute("name","black");

}
/*重要公告的右边的轮播图*/
var myLeft=document.getElementsByClassName("lt")[0];
var myRight=document.getElementsByClassName("gt")[0];
var myGroll=document.getElementById("myGroll");
function goLeft(){
	myGroll.style.marginLeft="-589px";
}
function goRight(){
	myGroll.style.marginLeft="0px";
}
/*银行卡的轮播图*/
var index=1;
var marginL;
function goLeft2(){
	 marginL=document.getElementById("myGroll2");
	 // console.log(marginL);
	
	if(index<=1){
 	 	// console.log(marginL.style.left);
 	 	// console.log(marginL.offsetLeft);
 	 	marginL.style.marginLeft=marginL.offsetLeft+0+"px";
 	 	
	}
	else if(index<=7){
		marginL.style.marginLeft=marginL.offsetLeft+230+"px";
		index--;

	}
	// else{
	// 	console.log(marginL.style.left);
 // 	 	console.log(marginL.offsetLeft);
	// }
	// console.log(index);
}

function goRight2(){
	 marginL=document.getElementById("myGroll2");
	 console.log(marginL);
	
	if(index==0){
 	 	// console.log(marginL.style.left);
 	 	// console.log(marginL.offsetLeft);
 	 	marginL.style.marginLeft=marginL.offsetLeft+0+"px";
	}
	else if(index>=7){
		// console.log(marginL.style.left);
 	//  	console.log(marginL.offsetLeft);
		marginL.style.marginLeft=-1380+"px";
	}
	else{
		// console.log(marginL.style.left);
 	//  	console.log(marginL.offsetLeft);
		marginL.style.marginLeft=marginL.offsetLeft-230+"px";
		index++;

	}
	// console.log(index);

}

/*个人客户服务的轮播图*/
var mypmScroll=document.getElementById("pmScroll");
var mypmLi=mypmScroll.getElementsByClassName("changeColor");
var mybankCard=document.getElementsByClassName("bankCard");
function personalManagement(){
	for(var i=0;i<mypmLi.length;i++){
		mypmLi[i].onclick=function(){
			for(var i=0;i<mypmLi.length;i++){
				mybankCard[i].style.display="none";
				mypmLi[i].setAttribute("name","");
			}
			var index=this.getAttribute("date-type");
			this.setAttribute("name","black");
			mybankCard[index].style.display="block";
		}

	}
}
personalManagement();

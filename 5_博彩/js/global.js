function getId(id){
	return document.getElementById(id);
}
function getClassName(className){
	if(!document.getElementsByClassName){//解决IE不兼容getElementsByClassName属性的方法
		var allTags = document.getElementsByTagName("*");
		for (var i = 0; i< allTags.length;i++) {
			if(allTags[i].className == className){
			return className;
			}
		}
	}
	else{
		return document.getElementsByClassName(className);
	}
	
};
/**  *****选项卡************
obj_click为导航栏的内容(及鼠标悬停或者点击的内容),
obj_all为装点击的所有项的(obj_click)父元素,obj_show为每一个选项对应的内容会*/
function choseCards(obj_all,obj_click,obj_show){
		for(var i=0;i<obj_click.length;i++){
		var bibao1=(function(i){
			obj_click[i].onmouseover=function(){
				for(var j=0;j<obj_show.length;j++){
					obj_show[j].style.display='none';
				}
				obj_show[i].style.display='block';
				obj_show[i].onmouseover=function(){
					this.style.display='block';
				}
				
				obj_show[i].onmouseout=function(){
					this.style.display='none';
				}
			}
		})(i);
		bibao1=null;
		}
		obj_all.onmouseout=function(){
			for(var j=0;j<obj_show.length;j++){
				obj_show[j].style.display='none';
			}
		}

}


/****右侧的选项卡 做特殊处理*/
function choseCards2(obj_all,obj_click,obj_show){
    	obj_click[0].style.borderLeftColor="white";
		for(var i=0;i<obj_click.length;i++){
		var bibao1=(function(i){
			obj_click[i].onclick=function(){
				for(var j=0;j<obj_show.length;j++){
					obj_show[j].style.display='none';
					obj_click[j].removeAttribute("class");

				}
				obj_click[i].setAttribute("class","curr");
				if(i==0){
					obj_click[0].style.borderLeftColor="white";
				}
				else if(i==obj_click.length-1){
					console.log(obj_click.length-1);
					obj_click[obj_click.length-1].style.borderRightColor="white";
				}
				obj_show[i].style.display='block';
			}
		})(i);
		bibao1=null;
		}
		// obj_all.onmouseout=function(){
		// 	for(var j=0;j<obj_show.length;j++){
		// 		obj_show[j].style.display='none';
		// 	}
		//}

}


/**** 滑动式轮播********图片在js中写入
	bannerSave表示存放拼接而成的图片的容器(容器中不能有任何标签否则会被清空),bannerAddress表示存放图片地址的数组,
	width_pic表示一张图片的宽度,time表示setInterval的时间
*/
	function myBanner(hold,bannerSave,bannerAddress,width_pic,textSave,textArray,time){
		// var myBanner1=getId("baner");
		// // var banner1Img=getId("banner_img");
		// var bannerArray=["../images/temp/banner1.png","../images/temp/banner2.png","../images/temp/banner3.png","../images/temp/banner4.png"];
		var count=0;
		var index=0;
		var html="";
		var sub=0;
		var ln=bannerAddress.length;
		for(var i=0;i<ln;i++){
			html+="<img src="+bannerAddress[i]+" class='banner_img'/>";
		}
		bannerSave.style.width=width_pic*ln+"px";
		bannerSave.innerHTML=html;
		// console.log(bannerSave.offsetWidth);
		textSave.innerHTML=textArray[0];
		function banner(){
			
			if(count>=ln-1){
				index++;
				if(index>ln-1){
					index=0;
					count=0;
				}else{
					sub--;
					// console.log(bannerSave.offsetLeft);
					bannerSave.style.marginLeft=bannerSave.offsetLeft+width_pic+"px";
					textSave.innerHTML=textArray[sub];

				}
				
			}else{

				count++;
				sub=count;
				bannerSave.style.marginLeft=-width_pic*count+"px";
				textSave.innerHTML=textArray[count];

				// console.log(bannerSave.offsetLeft);
			}

		}
	 var timer=setInterval(banner,time);
	 hold.onmouseover=function(){
	 	clearInterval(timer);
	 }
	 hold.onmouseout=function(){
	 	timer=setInterval(banner,time);
	 }
	}
	/** *****滑动式轮播图下方文字的轮播
		bannerSave表示存放文字的容器,bannerText表示轮播文字的数组,time表示setInterval的时间
	*/
	// function Text(bannerSave,bannerText,time){
	// 	var count=0;
	// 	var index=0;
	// 	var sub;
	// 	// var html="";
	
	// 	var ln=bannerText.length;
	// 	// for(var i=0;i<ln;i++){
	// 	// 	html+="<img src="+bannerAddress[i]+" class='banner_img'/>";
	// 	// }
	// 	// bannerSave.style.width=width_pic*ln+"px";
	// 	// bannerSave.innerHTML=html;
	// 	// console.log(bannerSave.offsetWidth);
	// 	bannerSave.innerHTML=bannerText[0];
	// 	function banner(){
			
	// 		if(count>=ln-1){
	// 			index++;
	// 			if(index>ln-1){
	// 				index=0;
	// 				count=0;
	// 				bannerSave.innerHTML=bannerText[count];
	// 			}else{
	// 				bannerSave.innerHTML=bannerText[sub];
	// 				sub--;
	// 			}
	// 		}else{
	// 			count++;
	// 			bannerSave.innerHTML=bannerText[count];
	// 			sub=count;
	// 		}

	// 	}
	// 	var timer=setInterval(banner,time);
	// }
// $("#one")
// $(".one")
// function $(flag){
// 	if(#){
// 		return document.getElementById(flag);
// 	}else if (.){
// 		getClassName(flag)
// 	}else {
// 		document.getElementsByTagName
// 	}

// }
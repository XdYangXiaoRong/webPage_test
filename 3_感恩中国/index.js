//得到当前的时间
window.onload=function times(){
	var myTime=document.getElementById("time");
	var today=new Date();
	var year=today.getFullYear();
	var month=today.getMonth()+1;
	var date=today.getDate();
	var weeks=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
	var day=today.getDay();
	var time=year+"年"+month+"月"+date+"日 "+weeks[day];
	myTime.innerHTML=time;
}
	var i=3;
	var myTell=document.getElementById("tell");
	var myA=myTell.getElementsByTagName("a")[0];
	var myImg=document.getElementById("picture");
	var border=document.getElementsByClassName("smallOne")[0];//得到类smallOne
	var borderIndex=border.getElementsByTagName("img");//得到smallONe里的图片
	// var Img4=borderIndex[0];
	// var Img3=borderIndex[1];
	// var Img5=borderIndex[2];
	// var Img6=borderIndex[3];
	var tell=["_","_","_","贾桂芳：我不是一个花心的女人","乌龟：天上的妈妈喊我回家吃饭了！","新发小学二年级（待捐助）（Bgznylcxfxx015)","第三完全小学五年级（待捐助）（Bqhnqdswx185"];
setInterval(
	function(){
		
		if(i==6){
			i=3;
			myImg.src="images/"+i+".jpg";
			myA.innerHTML=tell[i];
			//让小图片的边框也随之移动
			for(var k=0;k<borderIndex.length;k++){
				borderIndex[k].style.borderColor="#444";
			}
			for(var j=0;j<4;j++){
				var index=borderIndex[j].getAttribute("date-type");
				//console.log(index+"a======");
				if(index==i){
					borderIndex[j].style.borderColor="yellow";
				}
			}

		}
		else{
			i++;
			myImg.src="images/"+i+".jpg";
			myA.innerHTML=tell[i];
			//让小图片的边框也随之移动
			for(var k=0;k<borderIndex.length;k++){
				borderIndex[k].style.borderColor="#444";
			}
			for(var j=0;j<4;j++){
				var index=borderIndex[j].getAttribute("date-type");
				//console.log(index+"a++++");
				if(index==i){
					borderIndex[j].style.borderColor="yellow";
				}
			}
		}
	},6000);
function goTo(n){
	myImg.src="images/"+n+".jpg";
	myA.innerHTML=tell[n];
}

window.onload=function(){
	//页面顶端广告的删除
	var mycut=getId('ad_cut');
	mycut.onclick=function(){
		var ad=getClassName('advertisement')[0];
		ad.style.display='none';
	}
	//类别的点击
	var mykind=getClassName('kind')[0];
	var ul=mykind.getElementsByTagName('ul')[0];
	var lis=ul.getElementsByTagName('li');
	mykind.onmouseover=function(){
		ul.style.display='block';
		ul.onmouseout=function(){
			this.style.display='none';
		}
	}
	mykind.onmouseout=function(){
		ul.style.display='none';
	}
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			var kind_write=mykind.getElementsByTagName('span')[0];
			kind_write.innerHTML=this.innerHTML;
		}
	}
	//左侧的导航栏选项卡(彩种类别)
	var kind_nav=getId('left_nav');
	var navlis=kind_nav.getElementsByTagName("li");
	var left_nav_blocks=getClassName('left_nav_block');
	choseCards(kind_nav,navlis,left_nav_blocks);

	/** 轮播图部分的处理*/

	//banner图(轮播图) 滑动式自动轮播:setIntreval的time应该大于css的transition
	var myBannerContent=getClassName("content_center")[0];//存放轮播图所有组件的容器(包括左右箭头,图片下面的文字)
	var myBanner1=getId("baner");//存放所有图片的容器
	var bannerArray=["../images/temp/banner1.png","../images/temp/banner2.png","../images/temp/banner3.png","../images/temp/banner4.png"];//所欲图片的地址
	//滑动式自动轮播对应的文字轮播
	var bannerText=getId("bannerBottom");
	var texts=["图片一","图片二","图片三","图片四"];
	myBanner(myBannerContent,myBanner1,bannerArray,740,bannerText,texts,1000);

	
	// Text(bannerText,texts,5000);
	

	//banner图(轮播图) 点击左,右箭头进行轮播
	 var arrorLeft=getId("banerLeft");
	 var arrorRight=getId("banerRight");
	 var bannerBottom=getId("bannerBottom");
	 var bannerIndex=0;
	 arrorLeft.onclick=function(){
	 	if(myBanner1.offsetLeft>=0){
	 		bannerIndex=0;
	 		myBanner1.style.marginLeft=0+"px";
	 		bannerBottom.innerHTML=texts[bannerIndex];
	 		// console.log("a"+myBanner1.offsetLeft);
	 		// console.log(bannerIndex);
	 	}else{
	 		// myBanner1.style.marginLeft=myBanner1.offsetLeft-740+"px";
	 		bannerIndex--;
	 		myBanner1.style.marginLeft=-740*bannerIndex+"px";
	 		bannerBottom.innerHTML=texts[bannerIndex];
	 		// console.log("aaaa"+myBanner1.offsetLeft);
	 		// console.log(bannerIndex);
	 	}
	 	

	 }
	 arrorRight.onclick=function(){
	 	if(myBanner1.offsetLeft<=-2220){
	 		bannerIndex=3;
	 		myBanner1.style.marginLeft=-2220+"px";
	 		bannerBottom.innerHTML=texts[bannerIndex];
	 		console.log("b"+myBanner1.offsetLeft);
	 		console.log(bannerIndex);

	 	}else{
	 		bannerIndex++;
	 		// myBanner1.style.marginLeft=myBanner1.offsetLeft+740+"px";
	 		myBanner1.style.marginLeft=-740*bannerIndex+"px";
	 		bannerBottom.innerHTML=texts[bannerIndex];
	 		console.log("bbbb"+myBanner1.offsetLeft);
	 		console.log(bannerIndex);
	 	}
	 	
	 }
	 //用户头像下面的选项卡：公告、活动、推荐、安全
	 var choose2=getId("choose_cards");
	 var choose2_lis=choose2.getElementsByTagName("li");
	 var choose2_block=getClassName("choose_cards_content");
	 choseCards2(choose2,choose2_lis,choose2_block);
}

function calculate(){
	var height=document.getElementById("height").value;
	var weight=document.getElementById("weight").value;
	heigth=parseFloat("heigth");
	weight=parseFloat("weight");
	if(isNaN(height)){
		alert("请确保输入的身高,体重都是整数!");
	}
	else{
      var bim=weight/(height*height);
      alert(typeof(bim));
      document.getElementById("show").value=bim;
	}
}
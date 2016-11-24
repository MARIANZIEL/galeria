window.onload=cambiar;
var imagen;
imagen="<img src='";
var medidas="' height='400vw' width='400vw'/>";
var imagenprin="<img src='../galeria/imagenesgaleria/1.jpg' height='400vw' width='400vw' />";


function cambiar(){

	var i2=document.getElementById("i2");
	i2.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/2.jpg");
						});
	i2.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/2.jpg")});
	i2.addEventListener("mouseout",volver);

	var i3=document.getElementById("i3");
	i3.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/3.jpg");
						});
	i3.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/3.jpg")});
	i3.addEventListener("mouseout",volver);

	var i4=document.getElementById("i4");
	i4.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/4.jpg");
						});
	i4.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/4.jpg")});
	i4.addEventListener("mouseout",volver);

	var i5=document.getElementById("i5");
	i5.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/5.jpg");
						});
	i5.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/5.jpg")});
	i5.addEventListener("mouseout",volver);

	var i6=document.getElementById("i6");
	i6.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/6.jpg");
						});
	i6.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/6.jpg")});
	i6.addEventListener("mouseout",volver);

	var i7=document.getElementById("i7");
	i7.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/7.jpg");
						});
	i7.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/7.jpg")});
	i7.addEventListener("mouseout",volver);

	var i8=document.getElementById("i8");
	i8.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/8.jpg");
						});
	i8.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/8.jpg")});
	i8.addEventListener("mouseout",volver);

	var i9=document.getElementById("i9");
	i9.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/9.jpg");
						});
	i9.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/9.jpg")});
	i9.addEventListener("mouseout",volver);

	var i10=document.getElementById("i10");
	i10.addEventListener("click",function() {
									clic("../galeria/imagenesgaleria/10.jpg");
						});
	i10.addEventListener("mouseover",function(){
		                          cambiarImagen("../galeria/imagenesgaleria/10.jpg")});
	i10.addEventListener("mouseout",volver);
   
   
	
	


}

function clic(img){
imagen +=img;
imagen +=medidas;
var m=document.getElementById("imgprincipal").innerHTML=imagen;
imagenprin=imagen;
imagen="<img src='";
}

function cambiarImagen(img)
	  {
imagen +=img;
imagen +=medidas;
var m=document.getElementById("imgprincipal").innerHTML=imagen;
imagen="<img src='";
		
	  }

function volver(){
	
var m=document.getElementById("imgprincipal").innerHTML=imagenprin;
	  }
	


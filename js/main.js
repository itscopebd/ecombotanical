
let sliderIndex=1;
const BannerLoad = (n) => {
    const imgContainer=document.querySelectorAll(".slider");
   if (n> imgContainer.length-1 ) {
    sliderIndex=1;
   }
for (let i = 0; i < imgContainer.length; i++) {
    
    imgContainer[i].style.display="none";
    imgContainer[i].style.transition="1s";

}
imgContainer[sliderIndex-1].style.display="block"    


}
BannerLoad();
setInterval(()=>{
    BannerLoad(sliderIndex++);
},5000)
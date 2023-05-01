// slider 
let sliderIndex = 1;
const BannerLoad = (n) => {
    const imgContainer = document.querySelectorAll(".slider");
    if (n > imgContainer.length - 1) {
        sliderIndex = 1;
    }
    for (let i = 0; i < imgContainer.length; i++) {

        imgContainer[i].style.display = "none";
        imgContainer[i].style.transition = "1s";

    }
    imgContainer[sliderIndex - 1].style.display = "block"


}
BannerLoad();
setInterval(() => {
    BannerLoad(sliderIndex++);
}, 5000)


// carousel slider 

// const span=document.querySelectorAll(".newArraival__heading span")
const carousel__product = document.querySelectorAll(".carousel__product");
const totalProduct = carousel__product.length;
const perPageProduct = Math.ceil(totalProduct / 4);


let l = 0;
const perPage = 25.34;
const maxProductWidth=perPage * perPageProduct;
const rightMover = () => {
    l = l + perPage;
    for (const i of carousel__product) {
        if (l > maxProductWidth) {
            l=0;
            console.log(l)
        }
        i.style.left = "-" + l + "%";
    }
    
}



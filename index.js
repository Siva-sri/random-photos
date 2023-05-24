const imgageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    imageNum = 10
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        // put link inside bactick ``
        // the random number will be from 0 - 2000

        // add the image to container
        imgageContainerEl.appendChild(newImgEl);
    }
};
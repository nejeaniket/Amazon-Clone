const imgs = document.querySelectorAll(".handle-slider ul img")
const next_btn = document.querySelector(".control_next")
const prev_btn = document.querySelector(".control_prev")

let n=0;

function changeSlider() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';    
    }
    imgs[n].style.display = 'block'; 
}
changeSlider();

prev_btn.addEventListener('click', (e) =>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length -1;
    }
    changeSlider()
})

next_btn.addEventListener('click', (e) =>{
    if(n <  imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlider()
})

const ScrollContainer = document.querySelectorAll(".products");

for (const key of ScrollContainer) {
    key.addEventListener('wheel', (e) => {
        e.preventDefault();
        key.scrollLeft += e.deltaY;
    })
}
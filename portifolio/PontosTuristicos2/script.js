const modal = document.querySelector('.modal');
const previews = document.querySelectorAll(".container img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((preview)=>{
    preview.addEventListener("click",()=>{
        modal.classList.add("open")
        original.classList.add("open")

        //Dynamic change
        const originalSrc = preview.getAttribute("data-original")
        original.src = `./full/${originalSrc}`
        const altText = preview.alt
        imgText.textContent = altText   //innerHtml also works
    })
})

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
        original.classList.remove("open")
    }
})
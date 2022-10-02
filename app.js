const btnEL = document.querySelector(".btn");
btnEL.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEL.offsetLeft);
    const y = (event.pageY - btnEL.offsetTop);

    btnEL.style.setProperty("--xPos", x + "px");
    btnEL.style.setProperty("--yPos", y + "px");
})
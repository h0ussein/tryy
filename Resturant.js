


const acc  = document.querySelectorAll(`.item-label`);

    acc.forEach(
        acc=>{
        acc.addEventListener(
        "click", event =>  {
        acc.classList.toggle(`active`);
        const accBody = acc.nextElementSibling;
        if(acc.classList.contains(`active`)){
            accBody.style.maxHeight = accBody.scrollHeight + "px";

        } else {
            accBody.style.maxHeight = "0px";
        }
    })
});


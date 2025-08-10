let para = document.querySelector("p");

let btn = document.querySelector(".btn");

let check = 0;



btn.addEventListener("click", () => {
    if(check == 0){
        para.style.color = "blue";
        check = 1;
    }
    else{
        para.style.color = "white";
        check = 0;
    }
    console.log(check);
})
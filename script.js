const send = document.querySelector(".send");
const product = document.querySelector(".product");
const ul = document.querySelector(".lista");
let value = 0;

    
product.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        send.click();
     }
 });

send.addEventListener("click", function(){
    const text = product.value
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = text + " ";
    ul.appendChild(li);
    btn.textContent = "Usuń";
    li.appendChild(btn)

    btn.addEventListener("click", function(){
        li.remove();
    })

    li.addEventListener("click", function(){
        li.classList.toggle("done");
    })

})



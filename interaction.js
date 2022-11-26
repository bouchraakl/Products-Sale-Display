let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


let theBody = document.querySelector("body");
let itensSection = document.querySelector("#itens_section");
let style = document.querySelector("style");


for (let index = 0; index < ITENS_LOJA.length; index++) {
    let theDiv = document.createElement("div");
    theDiv.className = "item";
    itensSection.appendChild(theDiv);

    let span = document.createElement("span");
    theDiv.appendChild(span);
    span.className="ribbon";

    let Img = document.createElement("img");
    Img.src = `${ITENS_LOJA[index].url_img}`
    Img.className = "imgg";
    theDiv.appendChild(Img);

    theDiv.insertAdjacentHTML("beforeend",`
    <div class="con">
    <h5 class="title">${ITENS_LOJA[index].nome}</h5>
    <div class="stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
    <p class="disc">${ITENS_LOJA[index].descricao}</p>
    <div class="sub">
    <span class="pri">Preço : $${ITENS_LOJA[index].preco}</span>
    <span class="priP">$${ITENS_LOJA[index].preco + 50/100}</span>
    <a class="shop" href"#"><i class="bi bi-cart3"></i></a>
    </div>
    </div>
    `)

    
}



for(let i=0 ; i<document.querySelectorAll("a").length ; i++){

    document.querySelectorAll("a")[i].addEventListener('click',function(){
        let stringImg = ITENS_LOJA[i].url_img
        console.log("🚀 ~ file: interaction.js ~ line 92 ~ stringImg", stringImg)
        theBody.insertAdjacentHTML("afterbegin",`<section class="popUp">
        <div class="right">
            <img class="popImg" src="${stringImg}" >
        </div>
        <div class="left">
            <h5 class="nome">${ITENS_LOJA[i].nome}</h5>
            <div class="av">
                <div class="stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
                <div class="rev"><span>433 reviews</span></div>
            </div>
            <div class="color">
                <label for="head">Color:</label>
                <input type="color" id="head" name="head" list="colorsItem">
                <datalist id="colorsItem">
                    <option value="#cccccc">Grey</option>
    <option value="#ffffff">White</option>
    <option value="#6699cc">Blue</option>
                </datalist>
            </div>
            <div class="quan">
                <span class="price">$${ITENS_LOJA[i].preco}</span>
                <div class="quann">
                <label for="num">Quan:</label>
                <input type="number" id="num">
            </div>
            </div>
            <div class="btns">
            <button class="add">Add To Cart</button>
            <button class="buy">Buy Product</button>
        </div>
        </div>
        <a href="#"><i class="bi bi-x"></i></a>
    </section>`)
    let it = document.querySelectorAll("a")[0];
    
    it.addEventListener('click',function(){
        let popUp = document.querySelector(".popUp");
        popUp.classList.add("show");
    })
    
    

    });

   
}





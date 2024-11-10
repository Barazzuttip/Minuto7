const modal = document.getElementById("miModal");
const modalCont = document.getElementById("modalContent");
const btnCerrar = document.getElementById("btnCerrar");
const pack1 = document.getElementById("pack1");
const pack2 = document.getElementById("pack2");
const pack3 = document.getElementById("pack3");
const pack4 = document.getElementById("pack4");
const pack5 = document.getElementById("pack5");
const packs = {
    pack1, pack2, pack3, pack4, pack5
}
const txtCards = [`<div class="card-body">
    <h2 class="card-title">Pack 1</h2>
    <ul class="card-txt">
    <li class="precio">$18.000</li>
    <li class= "li-txt">Solo abdomen</li>
    <li class= "li-txt">8 clases al mes</li>
    <li class= "li-txt">Entrená en tu casa o gimnasio</li>
    <li class= "li-txt">Contacto exclusivo via wapp</li>
    </ul>
    <a href="https://wa.me/+5492914411003" target="_blank"><button class="btn-cta">Consultá por tu plan <img src="assets/click.png" alt="click btn"></button></a></div>`,
    `<div class="card-body"><h2 class="card-title">Pack 2</h2>
    <ul class="card-txt">
    <li class="precio">$18.000</li>
    <li class= "li-txt">8 clases al mes </li>
    <li class= "li-txt">Entrená en tu casa o gimnasio</li>
    <li class= "li-txt">Contacto exclusivo via wapp</li>
    </ul>
    <a href="https://wa.me/+5492914411003" target="_blank"><button class="btn-cta">Consultá por tu plan <img src="assets/click.png" alt="click btn"></button></a></div>`,
    `<div class="card-body"><h2 class="card-title">Pack 3</h2>
    <ul class="card-txt">
    <li class="precio">$20.000</li>
    <li class= "li-txt">12 clases al mes </li>
    <li class= "li-txt">Entrená en tu casa o gimnasio</li>
    <li class= "li-txt">Contacto exclusivo via wapp</li>
    </ul>
    <a href="https://wa.me/+5492914411003" target="_blank"><button class="btn-cta">Consultá por tu plan <img src="assets/click.png" alt="click btn"></button></a></div>`,
    `<div class="card-body"><h2 class="card-title">Pack 4</h2>
          <ul class="card-txt">
    <li class="precio">$24.000</li>
    <li class= "li-txt">12 clases al mes </li>
    <li class= "li-txt">Entrená en tu casa o gimnasio</li>
    <li class= "li-txt">Plan de Running en PDF</li>
    <li class= "li-txt">Contacto exclusivo via wapp</li>
    </ul>
    <a href="https://wa.me/+5492914411003" target="_blank"><button class="btn-cta">Consultá por tu plan <img src="assets/click.png" alt="click btn"></button></a></div>`,
    `<div class="card-body"><h2 class="card-title">Pack 5</h2>
          <ul class="card-txt">
    <li class="precio">$18.000</li>
    <li class= "li-txt"> Gluteos - Abdomen - Piernas</li>
    <li class= "li-txt">12 clases al mes </li>
    <li class= "li-txt">Entrená en tu casa o gimnasio</li>
    <li class= "li-txt">Contacto exclusivo via wapp</li>
    </ul>
    <a href="https://wa.me/+5492914411003" target="_blank"><button class="btn-cta">Consultá por tu plan <img src="assets/click.png" alt="click btn"></button></a></div>`];




const packtoJS = (n) => {

    modal.style.display = "flex";
    //div contenedor
    const div = document.createElement("div");
    div.className = "card-cont";

    modalCont.innerHTML = `<span id="btnCerrar" class="cerrar">&times;</span>`;

    const imgcont = document.createElement("div");
    const imgcont2 = document.createElement("div");
    const textcont = document.createElement("div");

    // Object.values(packs).forEach((pack) => {
    //     pack.classList.remove("show");
    // });

    const pack = packs[`pack${n}`];


    const clonePack1 = pack1.cloneNode(true);
    const clonePack2 = pack2.cloneNode(true);
    const clonePack3 = pack3.cloneNode(true);
    const clonePack4 = pack4.cloneNode(true);
    const clonePack5 = pack5.cloneNode(true);

    const clonePackN = pack.cloneNode(true);

    const clones = [clonePack1, clonePack2, clonePack3, clonePack4, clonePack5];
    clones.forEach((clon) => {
        if (clon.isEqualNode(clonePackN)) {  // Verificamos si el clon es igual al seleccionado
            clon.classList.add("show");
        }
    });

    clonePackN.classList.add("show");
    const auxClone = clonePackN;

    clonePack1.addEventListener("click", () => packtoJS(1));
    clonePack2.addEventListener("click", () => packtoJS(2));
    clonePack3.addEventListener("click", () => packtoJS(3));
    clonePack4.addEventListener("click", () => packtoJS(4));
    clonePack5.addEventListener("click", () => packtoJS(5));
    // if (`clonePack${n}` == pack) {
    //     //si esel mismo pack le agrego la clase show
    //     `clonePack${n}`.classList.add("show");
    // }

    // Añadir las imágenes clonadas al contenedor
    imgcont.append(clonePack1, clonePack2, clonePack3, clonePack4, clonePack5);
    imgcont.className = "svcIco";


    // Agregar pack1 al contenedor imgcont2
    imgcont2.append(auxClone);
    imgcont2.className = "svcImg animate__animated animate__zoomIn";


    textcont.innerHTML = txtCards[n - 1];
    textcont.className = "svcTxt";

    div.append(imgcont);
    div.append(imgcont2);
    div.append(textcont);
    modalCont.append(div);
}

pack1.addEventListener("click", () => packtoJS(1));
pack2.addEventListener("click", () => packtoJS(2));
pack3.addEventListener("click", () => packtoJS(3));
pack4.addEventListener("click", () => packtoJS(4));
pack5.addEventListener("click", () => packtoJS(5));

btnCerrar.addEventListener("click", () => {
    modal.style.display = "none"; // Ocultar modal
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";

        Object.values(packs).forEach((pack) => {
            pack.classList.remove("show");
        });
    }
});
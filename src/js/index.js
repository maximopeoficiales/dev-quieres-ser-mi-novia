let dimensions = {
    x: "",
    y: ""
}
let $contenedor = document.querySelector("#contenedor-eleccion");
let $btnNo = document.querySelector("#contenedor-eleccion");
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
const getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}
const setDimensions = () => {
    dimensions.y = $contenedor.offsetHeight;
    dimensions.x = $contenedor.offsetWidth;
    // console.log(dimensions);
}
const getDimensionsBody = () => {
    return {
        x: document.querySelector("body").offsetHeight,
        y: document.querySelector("body").offsetWidth,
    }
}
const translateButton = (e) => {
    // let dimensionsBody = getDimensionsBody();
    let x = getRandomNumber(dimensions.x / 2.8);
    let y = getRandomNumber(dimensions.y / 2);
    console.log(x, y);
    // console.log(x, dimensionsBody.x);
    // if (x > dimensionsBody.x || y > dimensionsBody.y) {
    //     translateButton(e);
    // } else {
    e.target.style.transform = `translate(${x}px,${y}px)`;
    // }
}
window.onload = () => {
    setDimensions();
}
window.onresize = () => {
    setDimensions();
    document.querySelector("#btn-no").style.transform = "none";
}

document.querySelector("#btn-no").addEventListener("mouseover", (e) => {
    // detecto el button
    translateButton(e);
});



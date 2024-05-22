let sketchSizeGlobal = getSketchSize();
let sketchWidthGlobal = 500;


let sketchElements = createSkitch(sketchSizeGlobal, sketchWidthGlobal);


function getSketchSize() {
    let size = Number(prompt("Enter sketch size (1 - 100)"));
    while(size<1 || size>100) {
        size = Number(prompt("Invalid Number try again, enter sketch size (1 - 100)"));
    }
    return size;
}

function createSkitch(sketchSize, sketchWidth) {
    let sketchElementsLocal = [];
    let sketchDiv = document.querySelector(".sketch-box");

    sketchDiv.style.width = `${sketchWidth}px`
    sketchDiv.style.height = `${sketchWidth}px`

    for(let cntr=0; cntr<sketchSize**2; cntr++) {

        sketchElementsLocal[cntr] = document.createElement("div");
        sketchElementsLocal[cntr].style.width = `${100/sketchSize}%`;
        sketchElementsLocal[cntr].style.height = `${100/sketchSize}%`;
        sketchElementsLocal[cntr].style.border = `0.1px solid grey`;
        sketchDiv.appendChild(sketchElementsLocal[cntr]);
    }

    return sketchElementsLocal;
}
let sketchSizeGlobal = getSketchSize();
let sketchWidthGlobal = 600;

let sketchDivGlobal = document.querySelector(".sketch-box");

sketchDivGlobal.style.width = `${sketchWidthGlobal}px`
sketchDivGlobal.style.height = `${sketchWidthGlobal}px`

let sketchElements = createSkitch(sketchDivGlobal, sketchSizeGlobal);

sketchDivGlobal.addEventListener("mouseover", (event)=> {
    sketchElements[Number(event.target.id.slice(6))].style.backgroundColor="grey";
})

resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", ()=> {
    sketchSizeGlobal = getSketchSize();
    sketchElements = createSkitch(sketchDivGlobal, sketchSizeGlobal, sketchWidthGlobal);
})


function getSketchSize() {
    let size = Number(prompt("Enter sketch size (1 - 100)"));
    while(size<1 || size>100) {
        size = Number(prompt("Invalid Number try again, enter sketch size (1 - 100)"));
    }
    return size;
}

function createSkitch(sketchDiv, sketchSize) {
    let sketchElementsLocal = [];

    sketchDiv.textContent="";
    for(let cntr=0; cntr<sketchSize**2; cntr++) {

        sketchElementsLocal[cntr] = document.createElement("div");
        sketchElementsLocal[cntr].style.width = `${100/sketchSize}%`;
        sketchElementsLocal[cntr].style.height = `${100/sketchSize}%`;
        sketchElementsLocal[cntr].style.border = `0.1px solid grey`;
        sketchElementsLocal[cntr].id = `pixel-${cntr}`;
        sketchDiv.appendChild(sketchElementsLocal[cntr]);
    }

    return sketchElementsLocal;
}


const modelViewerTexture = document.querySelector("#logo3D");

modelViewerTexture.addEventListener("load", () => {
    const material = modelViewerTexture.model.materials[0];
    const material2 = modelViewerTexture.model.materials[1];

    const createTexture = async () => {
        // // set texture for RED part :
        material.pbrMetallicRoughness.setBaseColorFactor("#F90200");

        // // set texture for BLUE part :
        material2.pbrMetallicRoughness.setBaseColorFactor("#1D45FC");
    }
    createTexture()
})

// DCMM SLOGAN CONCAC
const LOGO_WIDTH = modelViewerTexture.offsetWidth
const SLOGAN_INIT_WIDTH = 1069.6
const SLOGAN_ELEMENT = document.querySelector("#slogan");

const setWidthSlogan = () => {
    let finalScaleRate = ((LOGO_WIDTH * 0.72)/1069.6)
    console.log("finalScaleRate",finalScaleRate)
    SLOGAN_ELEMENT.style.transform = `scale(${finalScaleRate}) translate(-46%,100px)`
}

window.onresize = () => {
   setWidthSlogan()
}

window.onload = () => {
    setWidthSlogan()
}
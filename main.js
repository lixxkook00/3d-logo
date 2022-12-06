const modelViewerTexture = document.querySelector("#logo");

modelViewerTexture.addEventListener("load", () => {
    const material = modelViewerTexture.model.materials[0];
    const material2 = modelViewerTexture.model.materials[1];

    // material.pbrMetallicRoughness.setBaseColorFactor("../assest/do.png");

    const createTexture = async () => {
        const texture = await modelViewerTexture.createTexture("./assets/do.png");    
        const texture2 = await modelViewerTexture.createTexture("./assets/xanh.png");  
        
        console.log(modelViewerTexture.availableVariants)
        
        material.pbrMetallicRoughness["baseColorTexture"].setTexture(texture);
        material2.pbrMetallicRoughness["baseColorTexture"].setTexture(texture2);
    }

    createTexture()
})

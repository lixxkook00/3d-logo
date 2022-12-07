const modelViewerTexture = document.querySelector("#logo");

modelViewerTexture.addEventListener("load", () => {
    const material = modelViewerTexture.model.materials[0];
    const material2 = modelViewerTexture.model.materials[1];

    // material.pbrMetallicRoughness.setBaseColorFactor("../assest/do.png");

    const createTexture = async () => {
        const textureRed = await modelViewerTexture.createTexture("./assets/do.png");    
        const textureRed2 = await modelViewerTexture.createTexture("./assets/red.jpg");

        const textureBlue = await modelViewerTexture.createTexture("./assets/xanh.png");  
        const textureBlue2 = await modelViewerTexture.createTexture("./assets/blue.jpg");  
        
        console.log(material2.pbrMetallicRoughness["baseColorTexture"])
        
        // set texture for RED part :
        material.pbrMetallicRoughness["baseColorTexture"].setTexture(textureRed);
        material.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(textureRed2);
        material.occlusionTexture.setTexture(textureRed2);

        // set texture for BLUE part :
        material2.pbrMetallicRoughness["baseColorTexture"].setTexture(textureBlue2);
        material2.pbrMetallicRoughness.setBaseColorFactor("#3da1ff");
        material2.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(textureBlue2);
        // material2.occlusionTexture.setTexture(textureRed);
    }

    createTexture()
})

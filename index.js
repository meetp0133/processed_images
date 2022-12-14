const {compositeImages,
    getMetadata,
    rotateImage,
    resizeImage,
    cropImage,
    addTextOnImage,
    rotate,
    different
} = require("./middleware/middaleware")


// ----------------SHARP-------------------------

// getMetadata("./image/original_images/sammy.png")
// rotateImage("./image/original_images/sammy.png",0,0,0,0)
// resizeImage("./image/original_images/sammy.png",300,97)
// cropImage("./image/original_images/sammy.png",250,250,100,50)
//
// compositeImages("./image/original_images/underwater.png","./image/original_images/sammy-transparent.png")
//
// addTextOnImage("./image/original_images/underwater.png",750,483,"Hello Meet")


// ---------------JIMP----------------------

// rotate("./image/original_images/sammy.png")
// different("./image/original_images/sammy.png","./image/original_images/sammy-transparent.png")
const {compositeImages,
    getMetadata,
    rotateImage,
    resizeImage,
    cropImage,
    addTextOnImage
} = require("./middleware/middaleware")

getMetadata("./image/original_images/sammy.png")
rotateImage("./image/original_images/sammy.png",0,0,0,0)
resizeImage("./image/original_images/sammy.png",300,97)
cropImage("./image/original_images/sammy.png",250,250,100,50)

compositeImages("./image/original_images/underwater.png","./image/original_images/sammy-transparent.png")

addTextOnImage("./image/original_images/underwater.png",750,483,"Hello Meet")
const sharp = require("sharp");
const basePath =require("path")

exports.getMetadata = async(path)=> {
    try {
        const metadata = await sharp(path).metadata();
        console.log(metadata);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}`);
    }
}

exports.cropImage = async (path,width,height,left,top) => {
    try {
        const basename = await basePath.basename(path).split(".")
        await sharp(path)
            .extract({width: width, height: height, left: left, top: top})
            // .toFile(`./image/cropped_images/${basename[0]}-cropped.{basename[1]}`);
            .grayscale()
            .toFile(`./image/cropped_images/${basename[0]}-cropped-grayscale.${basename[1]}`);
    } catch (error) {
        console.log(error);
    }
}

exports.resizeImage = async (path, width, height) => {
    try {
        const basename = await basePath.basename(path).split(".")
        await sharp(path)
            .resize({
                width: width,
                height: height
            })
            .toFile(`./image/resized_images/${basename[0]}-resized_${width}_${height}.${basename[1]}`);
        // .toFormat("jpeg", {mozjpeg: true})
        // .toFile(`./image/resized_images/${basename[0]}-resized-compressed.${basename[1]}`);
    } catch (error) {
        console.log(error);
    }
}

exports.rotateImage = async (path,r,g,b,alpha)=> {
    try {
        const basename = await basePath.basename(path).split(".")
        await sharp(path)
            .rotate(33, { background: { r:r, g: g, b: b, alpha: alpha } })
            // .toFile(`./image/rotate_images/${basename[0]}-rotated.${basename[1]}`);
            .blur(4)
            .toFile(`./image/rotate_images/${basename[0]}-rotated-blurred.${basename[1]}`);
    } catch (error) {
        console.log(error);
    }
}

exports.compositeImages = async (path1,path2,top,left)=>{
    try{
        const basename = await basePath.basename(path1).split(".")
        const basename1 = await basePath.basename(path2).split(".")
            await sharp(path1)
            .composite([{
                input:path2,
                top:top,
                left:left
            }]).toFile(`./image/overlay_images/${basename[0]}-${basename1[0]}.${basename[1]}`)
    }catch (e) {

    }
}

exports.addTextOnImage = async (path,width,height,text)=>{
    try {
        const basename = await basePath.basename(path).split(".")
        const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: #001; font-size: 70px; font-weight: bold;}
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>
    `;
        const svgBuffer = Buffer.from(svgImage);
        const image = await sharp(path)
            .composite([
                {
                    input: svgBuffer,
                    top: 0,
                    left: 0,
                },
            ])
            .toFile(`./image/test_overlay_images/${basename[0]}-text-overlay.${basename[1]}`);
    } catch (error) {
        console.log(error);
    }
}
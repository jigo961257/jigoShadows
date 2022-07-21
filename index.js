
/**
 * 
 * @param {shadow_way} options | this for the assign what type of shadow's applyes ('soft' , 'hard')
 * @param {padding} options | this for the showing padding to object/element (true/false)
 * @param {appliedFor} options | this will deside that for which element does the shadows ('div', 'image')
 * 
 * @description The jigoShadows function for the applyed a shadow to the element shuch as div, image etx..
 * 
 * @author Jeegar Goyani (JigoGoyani)
 * 
 * @copyright jigoGoyani@2022 (Jeegar Goyani) https://www.linkedin.com/in/jeegar-goyani-b05965179/
 * 
 */
function jigoShadows(options) {
    let isDiv = false;
    let isImg = false;
    let images, divs;
    if (options.appliedFor == "div") {
        divs = document.querySelectorAll("div");
        isDiv = true;
        isImg = false;
    } else if (options.appliedFor == "image") {
        images = document.querySelectorAll("img");
        isDiv = false;
        isImg = true;
    }
    if (options.shadow_way === "hard")
        options.shadow_way = "0px";
    else
        options.shadow_way = "15px";

    if (isDiv) {
        divs.forEach(div => {
            div.style.boxShadow = `10px 10px ${options.shadow_way} 1px rgba(0,0,0,0.12)`;

            if (options.padding) {
                div.style.padding = '1em';
            }
        })
    } else if (isImg) {
        images.forEach(images => {
            images.style.boxShadow = `10px 10px ${options.shadow_way} 1px rgba(0,0,0,0.12)`;

            if (options.padding) {
                images.style.padding = '1em';
            }
        })
    }
}

modules.exports.jigoShadows = jigoShadows;
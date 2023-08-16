let isColorsInverted = false;

function invertColors() {
    if (isColorsInverted) {
        
        document.documentElement.style.filter = "";
        let allElements = document.querySelectorAll("img, video");
        allElements.forEach(el => {
            el.style.filter = "";
        });
    } else {
      
        document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    
        let allElements = document.querySelectorAll("img, video");
        allElements.forEach(el => {
            el.style.filter = "invert(1) hue-rotate(180deg)";
        });
    }

    isColorsInverted = !isColorsInverted;
}
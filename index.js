const simpleColorConverter = require('simple-color-converter');
const color = function (colorToConvert) {
    const tempColor = []
    
    tempColor[0] = new simpleColorConverter({
            color: colorToConvert, 
            to: 'hsl',
            debug: true
        })
    

    tempColor[0].color.h = (tempColor[0].color.h + 180)%360

    tempColor[1] = new simpleColorConverter({
        hsl: tempColor[0].color, 
        to: tempColor[0].from,
        hexRef: true,
    })
    

    return tempColor[1]
}


module.exports = color;
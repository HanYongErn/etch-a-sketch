const container = document.querySelector('.container');

function grid(size) {
    for (let i = 0; i < size; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        container.appendChild(gridColumn);

    }
    const eachColumn = document.querySelectorAll('.gridColumn');
    eachColumn.forEach((eachColumn => {
        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
            gridBox.setAttribute('style', 'background-color: white');
            eachColumn.appendChild(gridBox);
        }
    }))
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darken(color) {
    color = color - (color * 0.1);
    return Math.floor(color);
}

//ask user for grid number
let gridNum = Number(prompt("Enter a grid number (ex: 16 means 16 * 16) (maximum: 100)", ""));
if (gridNum > 100 || Number.isInteger(gridNum) !== true) {
    alert("Grid number should be A NUMBER LESS THAN 100");
} else {
    grid(gridNum);
}

const eachBox = document.querySelectorAll('.gridBox');
eachBox.forEach((eachBox => {
    eachBox.addEventListener('mouseenter', () => {
        if (eachBox.style.backgroundColor == 'white') {
            //fill in random color if its white
            let color = eachBox.style.backgroundColor = getRandomRGB();
            eachBox.setAttribute('id', color);
            eachBox.setAttribute('style', `background-color: ${color}`);
        } else {
            const rgbOri = eachBox.id.slice(4,-1).split(',');
            let rgbNew = []
            if(eachBox.id ==  eachBox.style.backgroundColor) {
                for (const rgbCode of rgbOri) {
                    //console.log(darken(rgbCode));
                    rgbNew.push(darken(rgbCode));
                }
            } else {
                //darken 10% for each interaction, until fully black 
                for (let i = 0; i < rgbOri.length; i++) {
                    let current = eachBox.style.backgroundColor.slice(4,-1).split(',')[i];
                    let darker = current - (rgbOri[i] * 0.1);
                    rgbNew.push(darker);
                }
            }  
            let newRGB = `rgb(${rgbNew.join(", ")})`;
            eachBox.setAttribute('style', `background-color: ${newRGB}`);
        }
    });
}))


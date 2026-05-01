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
            eachColumn.appendChild(gridBox);
        }
    }))
}
let gridNum = Number(prompt("Enter grid number(ex: 16 means 16 * 16) (maximum: 100)", ""));
console.log(gridNum.isInteger);
if (gridNum > 100 || Number.isInteger(gridNum) !== true) {
    alert("Grid number should be A NUMBER LESS THAN 100");
} else {
    grid(gridNum);
}

const eachBox = document.querySelectorAll('.gridBox');
eachBox.forEach((eachBox => {
    eachBox.addEventListener('mouseenter', () => {
        eachBox.setAttribute('style', 'background-color: purple');
    });
}))


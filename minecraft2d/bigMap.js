
const mineCraft2 = {};
mineCraft2.mapArray2 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

mineCraft2.currentTool = "";

mineCraft2.start = () => {
    mineCraft2.createDiv();
    mineCraft2.createGround();
    mineCraft2.createCloud();
    mineCraft2.createRock();
    mineCraft2.creategrass();
    mineCraft2.createWood();
    mineCraft2.createTools();
    mineCraft2.createStorege();
    document.querySelector('.map').style.width = '100%'
}
mineCraft2.createDiv = () => {
    for (let i = 0; i < mineCraft2.mapArray2.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        document.querySelector('.map').appendChild(row);
        for (let j = 0; j < 15; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            mineCraft2.mapArray2[i].push(j);
            block.setAttribute('id', "c" + i + "_" + j);
            row.appendChild(block);
            block.addEventListener('click', mineCraft2.breakeBlock);
        }
    }
}
mineCraft2.createGround = () => {
    for (let i = 10; i < 15; i++) {
        for (let j = 0; j < mineCraft2.mapArray2[i].length; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/dirt.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block ground");
        }
    }
}
mineCraft2.creategrass = () => {
    document.querySelector('#c8_2').style.backgroundImage = 'url("./images/trees.jpg")';
    document.querySelector('#c8_2').setAttribute("class", "block grass");
    for (let i = 1; i < 4; i++) {
        document.querySelector(`#c9_${i}`).style.backgroundImage = 'url("./images/trees.jpg")';
        document.querySelector(`#c9_${i}`).setAttribute("class", "block grass");
    }
    for (let j = 2; j < 5; j++) {
        for (let w = 5; w < 8; w++) {
            document.querySelector(`#c${j}_${w}`).style.backgroundImage = 'url("./images/trees.jpg")';
            document.querySelector(`#c${j}_${w}`).setAttribute("class", "block grass");
        }
    }
    for (let j = 2; j < 5; j++) {
        for (let w = 10; w < 13; w++) {
            document.querySelector(`#c${j}_${w}`).style.backgroundImage = 'url("./images/trees.jpg")';
            document.querySelector(`#c${j}_${w}`).setAttribute("class", "block grass");
        }
    }
}
mineCraft2.createWood = () => {
    for (let i = 5; i < 10; i++) {
        document.querySelector(`#c${i}_6`).style.backgroundImage = 'url("./images/log.jpg")';
        document.querySelector(`#c${i}_6`).setAttribute("class", "block wood");
    }
    for (let i = 5; i < 10; i++) {
        document.querySelector(`#c${i}_11`).style.backgroundImage = 'url("./images/log.jpg")';
        document.querySelector(`#c${i}_11`).setAttribute("class", "block wood");
    }
}
mineCraft2.createCloud = () => {
    document.querySelector('#c1_2').style.backgroundColor = 'white';
    document.querySelector('#c1_2').setAttribute("class", "block cloud");
    for (let i = 2; i < 3; i++) {
        for (let j = 1; j < 4; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundColor = 'white';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block cloud");
        }
    }
}
mineCraft2.createRock = () => {
    for (let i = 7; i < 10; i++) {
        for (let j = 5; j < 7; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/rocks.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block rock");
        }
    }
    for (let i = 8; i < 10; i++) {
        for (let j = 8; j < 10; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/rocks.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block rock");
        }
    }
};
mineCraft2.createTools = () => {
    for (let i = 0; i < 3; i++) {
        var divTool = document.createElement('div');
        document.querySelector('.tools').appendChild(divTool);
        divTool.setAttribute('class', 'tool hvr-grow');
        divTool.style.backgroundPosition = 'center';
        divTool.style.backgroundSize = 'cover';
        divTool.style.backgroundImage = `url("./images/${i}.png")`;
        divTool.setAttribute('id', `${i}`);
        divTool.addEventListener('click', mineCraft2.clickTool)
    }
}
mineCraft2.createStorege = () => {
    for (let i = 0; i < 4; i++) {
        var item = document.createElement('div');
        item.setAttribute('class', 'matirial hvr-grow');
        item.setAttribute('id', `m${i}`);
        item.addEventListener('click', mineCraft2.clickMatirial);
        item.style.cursor = 'pointer';
        document.querySelector('.storege').appendChild(item);
    }
}

mineCraft2.clickTool = (event) => {
    mineCraft2.currentMatirial = "";
    var arrTools = document.querySelectorAll('.tool');
    for (const tool of arrTools) {
        tool.style.border = '2px solid grey';
    };
    document.body.style.cursor = `url('./images/0${event.target.id}.png'), auto`;
    event.target.style.border = '5px solid red';

    switch (event.target.id) {
        case "0":
            mineCraft2.currentTool = "pickaxe";
            break;
        case "1":
            mineCraft2.currentTool = "axe";
            break;
        case "2":
            mineCraft2.currentTool = "shovel";
            break;
        default:
            mineCraft2.currentTool = "";
    }
}
mineCraft2.breakeBlock = (event) => {
    if (event.target.style.backgroundImage != "none") {
        if (mineCraft2.currentTool == "pickaxe" && event.target.className == "block rock") {
            document.querySelectorAll('.matirial')[0].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft2.currentTool == "axe" && event.target.className == "block wood") {
            document.querySelectorAll('.matirial')[1].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft2.currentTool == "axe" && event.target.className == "block grass") {
            document.querySelectorAll('.matirial')[2].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft2.currentTool == "shovel" && event.target.className == "block ground") {
            document.querySelectorAll('.matirial')[3].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        }
    }
    // else {
    if (event.target.style.backgroundImage === "none" || event.target.style.backgroundImage === "") {
        switch (mineCraft2.currentMatirial) {
            case "rock":
                event.target.style.backgroundImage = 'url("./images/rocks.jpg")';
                event.target.setAttribute("class", "block rock");
                mineCraft2.currentMatirial = '';
                document.querySelectorAll('.matirial')[0].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[0].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "tree":
                event.target.style.backgroundImage = 'url("./images/log.jpg")';
                event.target.setAttribute("class", "block wood");
                mineCraft2.currentMatirial = '';
                document.querySelectorAll('.matirial')[1].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[1].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "grass":
                event.target.style.backgroundImage = 'url("./images/trees.jpg")';
                event.target.setAttribute("class", "block grass");
                mineCraft2.currentMatirial = '';
                document.querySelectorAll('.matirial')[2].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[2].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "ground":
                event.target.style.backgroundImage = 'url("./images/dirt.jpg")';
                event.target.setAttribute("class", "block ground");
                mineCraft2.currentMatirial = '';
                document.querySelectorAll('.matirial')[3].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[3].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            default:
                mineCraft2.currentMatirial = "";
            // }
        }
    }
}

mineCraft2.clickMatirial = (e) => {
    mineCraft2.currentTool = "";
    var arrMtirials = document.querySelectorAll('.matirial');
    for (const matirial of arrMtirials) {
        matirial.style.border = '1px solid white';
    };
    if (event.target.style.backgroundImage != '') {
        event.target.style.border = '5px solid white';
        document.body.style.cursor = `url('./images/${event.target.id}.jpg'), auto`;
        switch (event.target.id) {
            case "m0":
                mineCraft2.currentMatirial = "rock";
                break;
            case "m1":
                mineCraft2.currentMatirial = "tree";
                break;
            case "m2":
                mineCraft2.currentMatirial = "grass";
                break;
            case "m3":
                mineCraft2.currentMatirial = "ground";
                break;
            default:
                mineCraft2.currentMatirial = "";
        }
    }
    else {
        document.body.style.cursor = 'default';
    }
}

mineCraft2.start();

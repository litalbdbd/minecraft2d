const mineCraft = {};
mineCraft.mapArray = [
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

mineCraft.currentTool = "";
mineCraft.currentMatirial = "";


mineCraft.start = () => {
    mineCraft.createDiv();
    mineCraft.createGround();
    mineCraft.createCloud();
    mineCraft.createRock();
    mineCraft.creategrass();
    mineCraft.createWood();
    mineCraft.createTools();
    mineCraft.createStorege();
}
mineCraft.createDiv = () => {
    for (let i = 0; i < mineCraft.mapArray.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        document.querySelector('.map').appendChild(row);
        for (let j = 0; j < 10; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            mineCraft.mapArray[i].push(j);
            block.setAttribute('id', "c" + i + "_" + j);
            row.appendChild(block);
            block.addEventListener('click', mineCraft.breakeBlock);
        }
    }
}
mineCraft.createGround = () => {
    for (let i = 7; i < 10; i++) {
        for (let j = 0; j < mineCraft.mapArray[i].length; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/dirt.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block ground");
        }
    }
}
mineCraft.creategrass = () => {
    document.querySelector('#c5_2').style.backgroundImage = 'url("./images/trees.jpg")';
    document.querySelector('#c5_2').setAttribute("class", "block grass");
    for (let i = 1; i < 4; i++) {
        document.querySelector(`#c6_${i}`).style.backgroundImage = 'url("./images/trees.jpg")';
        document.querySelector(`#c6_${i}`).setAttribute("class", "block grass");
    }
    for (let j = 2; j < 4; j++) {
        for (let w = 6; w < 9; w++) {
            document.querySelector(`#c${j}_${w}`).style.backgroundImage = 'url("./images/trees.jpg")';
            document.querySelector(`#c${j}_${w}`).setAttribute("class", "block grass");
        }
    }
}
mineCraft.createWood = () => {
    for (let i = 4; i < 7; i++) {
        document.querySelector(`#c${i}_7`).style.backgroundImage = 'url("./images/log.jpg")';
        document.querySelector(`#c${i}_7`).setAttribute("class", "block wood");
    }
}
mineCraft.createCloud = () => {
    document.querySelector('#c1_2').style.backgroundColor = 'white';
    document.querySelector('#c1_2').setAttribute("class", "block cloud");
    for (let i = 2; i < 3; i++) {
        for (let j = 1; j < 4; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundColor = 'white';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block cloud");
        }
    }
}
mineCraft.createRock = () => {
    for (let i = 6; i < 7; i++) {
        for (let j = 5; j < 7; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/rocks.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block rock");
        }
    }
};
mineCraft.createTools = () => {
    for (let i = 0; i < 3; i++) {
        var divTool = document.createElement('div');
        document.querySelector('.tools').appendChild(divTool);
        divTool.setAttribute('class', 'tool hvr-grow');
        divTool.style.backgroundPosition = 'center';
        divTool.style.backgroundSize = 'cover';
        divTool.style.backgroundImage = `url("./images/${i}.png")`;
        divTool.setAttribute('id', `${i}`);
        divTool.addEventListener('click', mineCraft.clickTool)
    }
}
mineCraft.createStorege = () => {
    for (let i = 0; i < 4; i++) {
        var item = document.createElement('div');
        item.setAttribute('class', 'matirial hvr-grow');
        item.setAttribute('id', `m${i}`);
        item.addEventListener('click', mineCraft.clickMatirial);
        item.style.cursor = 'pointer';
        document.querySelector('.storege').appendChild(item);
    }
}
mineCraft.clickTool = (event) => {
    mineCraft.currentMatirial = "";
    var arrTools = document.querySelectorAll('.tool');
    for (const tool of arrTools) {
        tool.style.border = '2px solid grey';
    };
    document.body.style.cursor = `url('./images/0${event.target.id}.png'), auto`;
    event.target.style.border = '5px solid red';

    switch (event.target.id) {
        case "0":
            mineCraft.currentTool = "pickaxe";
            break;
        case "1":
            mineCraft.currentTool = "axe";
            break;
        case "2":
            mineCraft.currentTool = "shovel";
            break;
        default:
            mineCraft.currentTool = "";
    }
}
mineCraft.breakeBlock = (event) => {
    if (event.target.style.backgroundImage != "none") {
        if (mineCraft.currentTool == "pickaxe" && event.target.className == "block rock") {
            document.querySelectorAll('.matirial')[0].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft.currentTool == "axe" && event.target.className == "block wood") {
            document.querySelectorAll('.matirial')[1].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft.currentTool == "axe" && event.target.className == "block grass") {
            document.querySelectorAll('.matirial')[2].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        } else if (mineCraft.currentTool == "shovel" && event.target.className == "block ground") {
            document.querySelectorAll('.matirial')[3].style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = "none";
        }
    }
    // else {
    if (event.target.style.backgroundImage === "none" || event.target.style.backgroundImage === "") {
        switch (mineCraft.currentMatirial) {
            case "rock":
                event.target.style.backgroundImage = 'url("./images/rocks.jpg")';
                event.target.setAttribute("class", "block rock");
                mineCraft.currentMatirial = '';
                document.querySelectorAll('.matirial')[0].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[0].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "tree":
                event.target.style.backgroundImage = 'url("./images/log.jpg")';
                event.target.setAttribute("class", "block wood");
                mineCraft.currentMatirial = '';
                document.querySelectorAll('.matirial')[1].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[1].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "grass":
                event.target.style.backgroundImage = 'url("./images/trees.jpg")';
                event.target.setAttribute("class", "block grass");
                mineCraft.currentMatirial = '';
                document.querySelectorAll('.matirial')[2].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[2].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            case "ground":
                event.target.style.backgroundImage = 'url("./images/dirt.jpg")';
                event.target.setAttribute("class", "block ground");
                mineCraft.currentMatirial = '';
                document.querySelectorAll('.matirial')[3].style.backgroundImage = '';
                document.querySelectorAll('.matirial')[3].style.border = '1px solid white';
                document.body.style.cursor = 'default';
                break;
            default:
                mineCraft.currentMatirial = "";
            // }
        }
    }
}

mineCraft.clickMatirial = (e) => {
    mineCraft.currentTool = "";
    var arrMtirials = document.querySelectorAll('.matirial');
    for (const matirial of arrMtirials) {
        matirial.style.border = '1px solid white';
    };
    if (event.target.style.backgroundImage != '') {
        event.target.style.border = '5px solid white';
        document.body.style.cursor = `url('./images/${event.target.id}.jpg'), auto`;
        switch (event.target.id) {
            case "m0":
                mineCraft.currentMatirial = "rock";
                break;
            case "m1":
                mineCraft.currentMatirial = "tree";
                break;
            case "m2":
                mineCraft.currentMatirial = "grass";
                break;
            case "m3":
                mineCraft.currentMatirial = "ground";
                break;
            default:
                mineCraft.currentMatirial = "";
        }
    }
    else {
        document.body.style.cursor = 'default';
    }
}



mineCraft.start();
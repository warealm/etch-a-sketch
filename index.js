const container = document.querySelector('.container');


function createBoard(grid) {

    //reset board first
    const board = document.querySelectorAll('.box');
    if (board) {
        board.forEach( (a) => a.remove());
    }
    

    for (let i = 0; i < grid*grid; i++) {
        const tempDiv = document.createElement('div');
        tempDiv.id = 'div' + i;
        tempDiv.className = "box";
        //tempDiv.setAttribute("style", `width:${960/grid}px`);
        //tempDiv.setAttribute("style", `height:${960/grid}px`);
        tempDiv.style.width = (700/grid-2)+"px";
        tempDiv.style.height = (700/grid-2)+"px";

        //tempDiv.style.backgroundColor = "yellow";
        container.appendChild(tempDiv);

        tempDiv.addEventListener('mouseenter', (e) => {
            //console.log(e);
            e.target.style.backgroundColor = "Black";
        })


    }

};



const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', (e) => {
    grid = window.prompt("What is your size per side??", 16)
    //grid=2;
    createBoard(grid);
})

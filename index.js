const container = document.querySelector('.container');


function createBoard(grid) {

    //reset board first
    const board = document.querySelectorAll('.box');
    if (board) {
        board.forEach((a) => a.remove());
    }


    for (let i = 0; i < grid * grid; i++) {
        const tempDiv = document.createElement('div');
        tempDiv.id = 'div' + i;
        tempDiv.className = "box";
        //tempDiv.style.opacity = 0;
        
        //tempDiv.setAttribute("style", `width:${960/grid}px`);
        //tempDiv.setAttribute("style", `height:${960/grid}px`);
        tempDiv.style.width = (700 / grid - 2) + "px";
        tempDiv.style.height = (700 / grid - 2) + "px";

        //tempDiv.style.backgroundColor = "yellow";
        container.appendChild(tempDiv);
        
        
            tempDiv.addEventListener('mouseenter', (e) => {
                //console.log(e);
                if (!tempDiv.classList.contains("changed")){
                e.target.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
                //e.target.style.backgroundColor = "black";
                //let value = e.target.style.opacity + 0.1;
                //e.target.style.opacity = value;    
                tempDiv.classList.add("changed");
                }
            })

            

    }

};



const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', (e) => {
    grid = window.prompt("What is your size per side??", 16)
    //grid=2;
    createBoard(grid);
})

import React from 'react'

function DesignPad (props){
    const dropping = t => {
        t.prevenDefault();
        const boardID = t.dataTransfer.getData('boardID');

        const board = document.getElementById(boardID);
        board.style.display= "block";
        t.target.appendChild(board); 
    }
    const dragOver = t => {
    }
     
        return (
            <div id={props.id} className={props.className} onDrop= {dropping} onDragOver={dragOver}
            > {props.children} </div>
        );
    }


export default DesignPad;
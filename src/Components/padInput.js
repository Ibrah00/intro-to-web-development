import Reacrt from 'react'

function padInput (props){

    const dragStart = t => {
        const target = t.target;
        t.dataTransfer.setData('boardID', target.id)

        setTimeout(() => {
            target.style.display = "none";

        });
    }

    const dragOver = t=> {
       
    }

    return (
        <div className={props.className} id={props.id} draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver}>
            { props.children }
        </div>
    )
}

export default padInput;
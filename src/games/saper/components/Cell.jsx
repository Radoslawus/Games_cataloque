
const Cell = ({details, toggleFlag, updateBoard}) => {

    const onClickUpdate = (x, y)=> {
        if (details.flagged) {return}
        updateBoard(x, y)
    }

    const numColor = (num) => {
        switch (num) {
            case 1:
                return "#ccc854"
            case 2:
                return "#11a10a"
            case 3:
                return "#1b93bf"
            case 4:
                return "#1c0b9c"
            case 5:
                return "#4f0870"
            case 6:
                return "#6e081c"
            default:
                return "#ff0000"
        } 
    }

    return (
        <div 
            onClick={() => onClickUpdate(details.x, details.y)} 
            className={["cell_component", details.revealed && 'transparent', (details.value === "X" && details.revealed) && 'bomb'].join(' ')}
            onContextMenu={(e) => toggleFlag(e, details.x, details.y)}
            style={{color: `${numColor(details.value)}`}}
        >
            {details.revealed && details.value !==0 ? details.value 
                : details.flagged && !details.revealed ? "🚩" 
                : ""}
        </div>
    )
}

export default Cell

import React, { useEffect, useState } from 'react'
import Cell from './components/Cell'
import Modal from './components/Modal'
import Timer from './components/Timer'
import Victory from './components/Victory'
import createBoard from './util/createBoard'
import { revealed } from './util/reveal'

const Board = () => {
    const [grid, setGrid] = useState([])
    const [nonMineCount, setNonMineCount] = useState('')
    const [mineLocations, setMineLocations] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [restart, setRestart] = useState(false)
    const [victory, setVictory] = useState(false)
    const [stopTime, setStopTime] = useState('')

    let rowNumber = 15
    let columnNumber = 15
    let mineNumber = 30

    useEffect(() => {
        function freshBoard(){
            const newBoard = createBoard(rowNumber, columnNumber, mineNumber)
            setNonMineCount(rowNumber*columnNumber - mineNumber)
            setMineLocations(newBoard.mineLocation)
            setGrid(newBoard.board)
            setGameOver(false)
            setRestart(false)
            setVictory(false)
        }
        freshBoard()
    }, [restart, columnNumber, mineNumber, rowNumber])

    useEffect(() => {
        if(nonMineCount === 0) {setVictory(true)}
    }, [nonMineCount])

    const toggleFlag = (e, x, y) => {
        e.preventDefault()
        let newGrid = JSON.parse(JSON.stringify(grid))
        if (newGrid[x][y].flagged === true) {
            newGrid[x][y].flagged = false
        } else {newGrid[x][y].flagged = true}
        setGrid(newGrid)
    }

    const updateBoard = async (x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid))
        if (newGrid[x][y].value === "X") {
            for (let i = 0; i < mineLocations.length; i++) {
                let x = newGrid[mineLocations[i][0]][mineLocations[i][1]]
                if(!x.flagged) {x.revealed = true}
            }
            setGrid(newGrid)
            setGameOver(true)
        } else {
            let newRevealedBoard = revealed(newGrid, x, y, nonMineCount)
            if(newRevealedBoard) {
                setGrid(newRevealedBoard.arr)
                setNonMineCount(newRevealedBoard.newNonMinesCount)                
            }
        }
    }

    return (
        <div className='saper'>
            <div className="saper_text">
                <h1 className='saper_header'>Mars Saper</h1>
                <div className="saper_text_under">
                    <div className="mineCount">Empty fields left: {nonMineCount}</div>
                    <span className="mineCount">Mines: {mineNumber}</span>
                    <Timer gameover={gameOver} victory={victory} setStopTime={setStopTime} stopTime={stopTime}/>
                </div>
            </div>
            {gameOver && <Modal reset={() => setRestart(true)} />}
            {victory && <Victory reset={() => setRestart(true)} stopTime={stopTime}/>}
            {grid && grid.map((singleRow, index1) => {
                return (
                    <div className='singleRow' key={index1}>
                        {singleRow.map((singleBlock, index2) => {
                            return (
                                <Cell 
                                    key={index2} 
                                    details={singleBlock} 
                                    toggleFlag={toggleFlag}
                                    updateBoard={updateBoard}
                                />
                            )
                        })}
                    </div>) 
            })}
        </div>
    )
}

export default Board

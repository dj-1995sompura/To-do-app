import { useState } from "react";
import './tic-tok.css';
const Tiktoegame = () =>{
    const [board, setBoard] = useState(Array(9).fill());
    const [player, setPlayer]= useState('X');
    const [winner, setWinner]= useState(null);

    const checkWinner=()=>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6]
            /* 012
               345
               678 */
        ];

        for(let i=0; i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(board[a]&& board[a]===board[b]&& board[a]=== board[c]){
                setWinner(board[a]);
            }
        }
    }


    const handleClickEvent=(index)=>{
        // console.log(index);
            if(board[index] || winner){
                return;
            }
            const newBoard=[...board];
            newBoard[index] = player;
            // console.log(newBoard);
            setBoard(newBoard);
            checkWinner();
            setPlayer(player==='X' ? 'O':'X');

    }

    const handleReset=() =>{
        setBoard(Array(9).fill(null));
        setPlayer('X');
        setWinner(null);
    }

    return(
        <>
        <div className="board">
        {board.map((cell,index)=>(
            <div className="cell"  key={index} onClick={()=>handleClickEvent(index)}>{cell}</div>
            ))}
            {!winner && board.every(cell=>cell)&&<p>Its a draw!</p>}
            <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default Tiktoegame;
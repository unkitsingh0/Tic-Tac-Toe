import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";
import Button from '@mui/material/Button';

function Board() {
    let [state, setState] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);
    let [xo, setXo] = useState(true);

    let checkWinner = () => {
        let winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let logic of winnerLogic) {
            let [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    let handelClick = (index) => {
        // console.log(index,'cliked')
        let copydata = [...state]
        if(state[index]===null){
            copydata[index]=xo?"X":"O"
            setState(copydata)
            setXo(!xo);
        }
        
        // console.log("Button has been clicked");
    };
    let isWinner = checkWinner();
    return (
        <div className="bord-container">
          <h1 className="Heading">Tic Tac Toe</h1>
            {isWinner ? (
                <div style={{display:"flex"}}>
                <h1 style={{marginRight:"24px"}}>
                 <span style={{borderBottom:"1px solid"}}>{isWinner}</span> wins</h1>
                    <Button
                    variant="contained"
                    onClick={() => {
                        setState([null, null, null, null, null, null, null, null, null]);
                        setXo(true);
                    }}
                    >
                        Start Again
                    </Button>
                        </div>
                
            ) : (
                <>
                    <div className="child1" >
            <h3>{xo ? "X" : "O"}'s Chance </h3>
            <h1>
              {isWinner}
              <Button
              variant="contained"
                onClick={() => {
                  setState([
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ]);
                  setXo(true);
                }}
              >
                Start Again
              </Button>
            </h1>
          </div>
         
          <div className="forCss">

         
                    <div className="bord-row">
                        <Square
                            onclick={() => {
                                handelClick(0);
                            }}
                            value={state[0]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(1);
                            }}
                            value={state[1]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(2);
                            }}
                            value={state[2]}
                        />
                    </div>
                    <div className="bord-row">
                        <Square
                            onclick={() => {
                                handelClick(3);
                            }}
                            value={state[3]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(4);
                            }}
                            value={state[4]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(5);
                            }}
                            value={state[5]}
                        />
                    </div>
                    <div className="bord-row">
                        <Square
                            onclick={() => {
                                handelClick(6);
                            }}
                            value={state[6]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(7);
                            }}
                            value={state[7]}
                        />
                        <Square
                            onclick={() => {
                                handelClick(8);
                            }}
                            value={state[8]}
                        />
                    </div>
            </div>
                </>
            )}
        </div>
    );
}

export default Board;

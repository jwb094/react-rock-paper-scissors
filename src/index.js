import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './App.css'
import App from './App';

//Render Rock Paper Scissors Buttons
function RockButton(props) {
    return (

        <div id="rock">
            <img src="img/rock.png" id="0" class="rbutton" onClick={props.onClick} />
        </div>

    )
}

function PaperButton(props) {
    return (

        <div id="paper">
            <img src="img/paper.svg" id="1" class="pbutton" onClick={props.onClick} />
        </div>
    )
}

function ScissorsButton(props) {
    return (



        <div id="scissors">
            <img src="img/scissors.svg" id="2" class="sbutton" onClick={props.onClick} />
        </div>

    )
}

class Board extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            player: 0,
            computer: 0,
            PlayerMove: '',
            ComputerMove: '',
            The_Winner:'',
            theOutcome:'',
            result:''

        };
        // this.handleClick = this.handleClick();
    }

    // handleClick(paramn) {
    // //     this.setState(prevState => ({
    // //       isToggleOn: !prevState.isToggleOn
    // //     }));
    //    }
    // get the Player & Computer' moves 
    moves(i) {
       // console.log(i);
        this.state.PlayerMove = i;
        this.state.ComputerMove = [Math.floor(Math.random() * whoWonTheBattle.length)];
        console.log(this.state.PlayerMove);
        console.log(this.state.ComputerMove);
        this.getFinalPosition();
    }

    //calculate the final position in the Matrix 
    getFinalPosition(){
        let  result;
        this.state.The_Winner = whoWonTheBattle[this.state.PlayerMove][this.state.ComputerMove];
        console.log(this.state.The_Winner);
        if (this.state.The_Winner == "P") {
            //this.state.result = "Player wins";
            this.setState({
                result: "Player wins",
              });
         // status = 'Winner: ' + winner;
        } else if(this.state.The_Winner == "C") {
          //status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
         // this.state.result = "Computer wins";
         this.setState({
            result: "Computer wins",
            computer: this.state.computer+1
          });
        } else{
            // this.state.result = "Draw";
            this.setState({
                result: "Its a Draw",
               // player: ++
              });
        }
      //  this.TheWinner(this.state.The_Winner);
      //this.TheWinner();
    }

   



    renderRock() {
        return (
            <RockButton
                value={0}
                onClick={(e) => this.moves(0, e)}
            />
        );
    }

    renderPaper() {
        return (
            <PaperButton
                value={0}
                onClick={(e) => this.moves(1, e)}
            />
        );
    }

    renderScissors() {
        return (
            <ScissorsButton
                value={0}
                onClick={(e) => this.moves(2, e)}
            />
        );
    }
   
    render() {
       // console.log(this.state.The_Winner);
       //this.state.theOutcome = TheWinner(this.state.The_Winner);
        //
        this.state.theOutcome = this.state.result;
        console.log(this.state.result);
        return (
            <div>
               <section class="scoreboard">
                    <label class="user">Player</label> <span id="playerCount">{this.state.player}</span>
                    <label class="user">Computer</label><span id="computerCount">{this.state.computer}</span>
                    <label id="resultmessage">{this.state.theOutcome}</label>
                </section>
            <section class="move-buttons">
                {this.renderRock()}
                {this.renderPaper()}
                {this.renderScissors()}


            </section>
            </div>
        )
    }
}


// A function that calculate the final position in the Matrix 



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            Winner: '',
        };

    }



    render() {
        return (
            <main>
                <h1>Rock Paper Scissors</h1>

                <Board
                    />
            </main>

        )
    }

}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
let whoWonTheBattle = [
    //(C)Rock Paper Scissors
/*(P)rock */['D', 'C', 'P'],
/*Paper */['P', 'D', 'C'],
/*Scissors*/['C', 'P', 'D']
];

// x
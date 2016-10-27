import React from 'react';

class Hangman extends React.Component {

    constructor(props){
        super(props);
        
        this.state = { 
            livesLeft: 6, 
            alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                        't', 'u', 'v', 'w', 'x', 'y', 'z'],
            answer: [{letter: 'r', revealed: false}, {letter: 'e', revealed: false}, {letter: 'a', revealed: false}, {letter: 'c', revealed: false}, {letter: 't', revealed: false}]

        }
    }

    checkWord(letter){
        console.log(letter);
        const foundLetter = this.state.answer.find(elem => elem.letter === letter)
        if(!foundLetter){
            this.setState({
                livesLeft: this.state.livesLeft - 1                
            });
        }else{
            foundLetter.revealed = true;
        }

        this.setState({
            alphabet: this.state.alphabet.filter(elem => elem !== letter)
        });
        // console.log(this.state.livesLeft);
        // console.log(this.state.alphabet);
    }

    render() {
        const hangmanHolder = {
            width: 75,
            overflow: 'hidden'
        };

        const imgStyle = {
            right: 75 * (6 - this.state.livesLeft),
            position: 'relative'
        };

        return (
            <div>
                {this.state.alphabet.map((letter) => <button value={letter} onClick={() => this.checkWord(letter)}>{letter}</button>)}
                <div id="pixHolder" style={hangmanHolder}><img id="hangman" src="dist/hangman.png" style={imgStyle}/></div>
                {this.state.answer.map((elem) => elem.revealed ? <div>{elem.letter}</div> : <div>_</div>)}
            </div>
            );
    }
}

export default Hangman;


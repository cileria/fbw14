import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            translatedText: ''
        };
    }

    translateText = (e) => {
        const code = {
            a:".-", b:"-...", c:"-.-.", d:"-..", e:".", f:"..-.", g:"--.",
            h:"....", i:"..", j:".---", k:"-.-", l:".-..", m:"--", n:"-.",
            o:"---", p:".--.", q:"--.-", r:".-.", s:"...", t:"-", u:"..-",
            v:"...-", w:".--", x:"-..-", y:"-.--", z:"--..",
            1:".----", 2:"..---", 3:"...--", 4:"....-", 5:".....",
            6:"-....", 7:"--...", 8:"---..", 9:"----.", 0:"------",
            '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
            '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
            '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
            '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
            '$': '...-..-', '@': '.--.-.', ' ': ' ', '\n': '\n'
        };

        let insertedInput = e.target.value;
        let morseText = '';

        for (let i = 0; i < insertedInput.length; i++) {
            morseText += ' ' + code[insertedInput[i].toLowerCase()];
        }

        this.setState({
            translatedText: morseText
        });
    };

    render() {

    return (

      <div className="translate">
          <h3>Translate to Morse</h3>
          <form className="form" action="index.html">
              <div className="translate">
                  <label htmlFor="letters">Input Message:</label>
                  <textarea type="text" cols="50" rows="8"
                            onKeyUp={this.translateText}
                            ref="inputText"
                            placeholder="Type your message here"/>
              </div>
              <div className="translate">
                  <label htmlFor="morse">Output Message:</label>
                  <textarea type="text" cols="50" rows="8"
                            placeholder="Here comes the Morse code"
                            value={this.state.translatedText}
                            readOnly />
              </div>
          </form>
      </div>

    );
  }
}

export default App;
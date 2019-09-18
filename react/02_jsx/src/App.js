import React, { Component } from 'react'; // exportiert React-component
// const Component = React.Component;
import './App.css';

class App extends Component {

  render() {

    // JSX -> JavaScript Extended (=Erweitert)
    const hallo = <div>Hallo</div>;
    // hallo.insert('<h2>Hi</h2>') -> Funktioniert nicht.
    // es gibt auch kein innerHTML bzw. innerText !
    const halloNoJsx = '<div>Hallo</div>';
    const liste2 = <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                   </ul>;

    const liste4 = [];
    liste4.push(<li>1</li>);
    liste4.push(<li>2</li>);
    liste4.push(<li>3</li>);

    /* Folgende Daten sind gegeben:  */

    const users = [
      { money: 150, name: 'paul', country: 'germany', born: 1995 },
      { money: -50, name: 'sarah', country: 'uk', born: 1990 },
      { money: 20, name: 'bob', country: 'spain', born: 1988 },
      { money: 550, name: 'hans', country: 'germany', born: 1982 },
      { money: 5, name: 'julia', country: 'germany', born: 1982 },
      { money: 1040, name: 'carl', country: 'denmark', born: 1999 },
      { money: -500, name: 'peter', country: 'germany', born: 1991 },
      { money: 0, name: 'julia', country: 'ireland', born: 1980 },
    ];
    
    // 1. Stelle alle Nutzer in einer Tabelle dar.
    // 2. Zeige in einer zweiten Tabelle nur die deutschen Nutzer.
    const germanUsers = users.filter( (user) => user.country === 'germany');

    return (
      <div>
        {hallo}
        {halloNoJsx}

        <h2>Liste 1</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <h2>Liste 2</h2>
        {liste2}

        <h2>Liste 3</h2>
        <ul>
          { [<li>1</li>, <li>2</li>, <li>3</li>] }
        </ul>

        <h2>Liste 4</h2>
        <ul>
          { liste4 }
        </ul>

        <h2>Liste 5</h2>
        <ul>
          { liste4.map( element => element ) }
        </ul>

        <table>
          <tr>
            <th>Money</th>
            <th>Name</th>
            <th>Country</th>
            <th>Born</th>
          </tr>
            {users.map( element => <tr>
              <td>{element.money}</td>
              <td>{element.name}</td>
              <td>{element.country}</td>
              <td>{element.born}</td>
          </tr>)}
        </table>

        <table>
          <tr>
            <th>Money</th>
            <th>Name</th>
            <th>Country</th>
            <th>Born</th>
          </tr>
            {germanUsers.map( element => <tr>
              <td>{element.money}</td>
              <td>{element.name}</td>
              <td>{element.country}</td>
              <td>{element.born}</td>
          </tr>)}
        </table>
      </div>
    );
  }
}


export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const hallo = <div>Hallo JSX</div>;
    const list2 = <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>;

    const someItems = [
      <li>1</li>,
      <li>2</li>
    ];
    someItems.push(<li>3</li>);
    const someNumbers = [1, 2, 3];

    const users = [
      { money: 150,  name: 'paul',  country: 'germany', born: 1995 },
      { money: -50,  name: 'sarah', country: 'uk',      born: 1990 },
      { money: 20,   name: 'bob',   country: 'spain',   born: 1988 },
      { money: 550,  name: 'hans',  country: 'germany', born: 1982 },
      { money: 5,    name: 'julia', country: 'germany', born: 1972 },
      { money: 1040, name: 'carl',  country: 'denmark', born: 1999 },
      { money: -500, name: 'peter', country: 'germany', born: 1991 },
      { money: 0,    name: 'julia', country: 'ireland', born: 1980 }
    ];

    // 1. Stelle die Nutzer in einer Tabelle dar.
    // 2. Stelle nur die deutschen Nutzer in einer Tabelle dar.

    const germanUsers = users.filter((user) => user.country === 'germany');

    for(let user of users) {
      console.log(user);
    }

    return (
      <div>
        {hallo}

        <h2>List 1</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <h2>List2</h2>
        {list2}

        <h2>List 3</h2>
        <ul>
          { [<li>1</li>, <li>2</li>, <li>3</li>] }
        </ul> 

        <h2>List 4</h2>
        <ul>
          {someItems}
        </ul>

        <h2>List 5</h2>
        <ul>
          {someItems.map((element) => element)}
        </ul>

        <h2>List 6</h2>
        <ul>
          {someNumbers.map((number) => <li>{number}</li>)}
        </ul>

        <h2>Users</h2>
        <table>
          <thead>
            <td>Money</td>
            <td>Name</td>
            <td>Country</td>
            <td>Born</td>
          </thead>
          { users.map( (user) => <tr>
              <td>{user.money}</td>
              <td>{user.name}</td>
              <td>{user.country}</td>
              <td>{user.born}</td>
          </tr>) }
        </table>

            {/*             
              money: 150,  name: 'paul',  country: 'germany', born: 1995
            */}

        <h2>Users Germany</h2>
        <table>
          <thead>
            <td>Money</td>
            <td>Name</td>
            <td>Country</td> 
            <td>Born</td>
          </thead>
          { 
            users.map( (user) => <tr>
                  <td>{user.money}</td>
                  <td>{user.name}</td>
                  <td>{user.country}</td>
                  <td>{user.born}</td>
                </tr>
          )
          } 
        </table>        
      </div>
    );
  }
}

export default App;
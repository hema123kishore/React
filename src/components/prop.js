import React, {Component} from 'react'


const TableBody = () => {
    return <tbody />
  }

  const TableHeader = () => {
    return <TableHeader />
  }


  class App extends Component {
    render() {
      const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]
  
      return (
        <div className="App">
          <Table characterData={characters} />
        </div>
      )
    }
  }


  class Table extends Component {
    render() {
      const {characterData} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }


  export default Table
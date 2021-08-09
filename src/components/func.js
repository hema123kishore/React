import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
          <tr>
              <td>kumarswamy</td>
              <td>Bangalore</td>
          </tr>  
          <tr>
              <td>Kishore</td>
              <td>Kurnool</td>
          </tr>
          <tr>
              <td>hemakumar</td>
              <td>Kadapa</td>
          </tr>
        </tbody>
    )
}


class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }


export default Table



import React, {Component} from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kumar</td>
            <td>software</td>
          </tr>
          <tr>
            <td>Kishore</td>
            <td>Doctor</td>
          </tr>
          <tr>
            <td>vamsi</td>
            <td>actress</td>
          </tr>
          <tr>
            <td>kumarswamy</td>
            <td>Software</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
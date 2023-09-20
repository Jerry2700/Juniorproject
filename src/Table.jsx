import React from 'react';
import "./Table.css";

function Table() {
  return (
    <div style={{alignItems:'center',justifyContent:'center',display:'flex',width:'100%'}}>
        <div style={{width:'80%'}}>
    <table className="table">
    <thead>
      <tr>
        <th scope="col" className='tabel-row'>Collaborators</th>
        <th scope="col" >Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td> input </td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  )
}

export default Table
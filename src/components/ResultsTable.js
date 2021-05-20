import React from "react";

function ResultsTable(props) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, key) => (
            <tr key={key}>
              <th scope="row"><img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} /></th>
              <td>{`${result.name.first} ${result.name.last}`}</td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{result.dob.date}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    );
  }
  
export default ResultsTable;
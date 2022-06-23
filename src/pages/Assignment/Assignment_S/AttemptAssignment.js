import react from "react";


function AttemptAssignment() {
  return (
    <div className="container" style={{color: "	#4d4d4d"}}>
      <div style={{
          backgroundColor: "white",
          marginTop: "30px",
          padding: "30px",
          border: "black solid 1px",
        }}>

          <h1>B19_IN 2320 - Computer Architecture</h1>

      </div>
      <div
        className=""
        style={{
          backgroundColor: "white",
          marginTop: "10px",
          padding: "30px",
          border: "black solid 1px",
        }}
      >
        <h2>Assignment 02 - Submission</h2>
        <br></br>
        <h3>Submission Status</h3>
        <br></br>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td scope="row">Submission Status</td>
              <td>No attemt</td>
            </tr>
            <tr>
              <td scope="row">Grading Status</td>
              <th>Not graded</th>
            </tr>
            <tr>
              <td scope="row">Due date</td>
              <td>Sunday, 8 May 2022, 11:59 PM</td>
            </tr>
            <tr>
              <td scope="row">Time remaining</td>
              <td style={{ color: "red" }}>
                Assingnment is overdue by: 44 days
              </td>
            </tr>
            <tr>
              <td scope="row">Last modified</td>
              <td>-</td>
            </tr>
            <tr>
              <td scope="row">Submission Comments</td>
              <td style={{ color: "blue" }}>Comments (0)</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <div style={{ textAlign: "center", paddingBottom: "10px" }}>
          <button type="button" class="btn btn-primary">
            Add Submission
          </button>
          <br></br>
          <p style={{color: "gray", padding: "10px"}}>You have not made a Submission yet</p>
        </div>
      </div>
    </div>
  );
}

export default AttemptAssignment;
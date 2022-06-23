import React from "react";

function AddSubmission() {
  return (
    <div>
      <div className="container" style={{ color: "	#4d4d4d" }}>
        <div
          style={{
            backgroundColor: "white",
            marginTop: "30px",
            padding: "30px",
            border: "black solid 1px",
          }}
        >
          <h2>B19_IN 2320 - Computer Architecture</h2>
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
          <h3>Assignment 02 - Submission</h3>
          <br></br>
          <div style={{ backgroundColor: "", height: "200px" }}>
            <h6>File Submission</h6>
            <div style={{}}>
              <div
                className=""
                style={{
                  height: "150px",
                  width: "80%",
                  backgroundColor: "",
                  float: "right",
                  border: "black solid 1px",
                  boxShadow: '1px 1px 10px gray',
                  textAlign: "center",
                }}
              >
                put file submission code here
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "", height: "300px" }}>
            <h6>Online Text</h6>
            <div style={{}}>
              <div
                className=""
                style={{
                  height: "250px",
                  width: "80%",
                  backgroundColor: "",
                  float: "right",
                }}
              >
                <textarea
                  style={{ resize: "none",boxShadow: '1px 1px 10px gray'}}
                  id="text"
                  name="text"
                  rows="10"
                  cols="131"
                ></textarea>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", paddingBottom: "10px" }}>
          <button type="button" class="btn btn-primary m-2">
            Save Changes
          </button>
          <button style={{backgroundColor: "lightgray"}} type="button" class="btn m-2">
            Cancel
          </button>

        </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default AddSubmission;
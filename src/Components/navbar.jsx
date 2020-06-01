import React from "react";

export default function navbar({ getInput, updateInput }) {
  return (
    <div className="container w-50 h-25 py-4">
      <div className="input-group input-group-md">
        <input type="text" className="form-control" onChange={updateInput} />
        <div className="input-group-append">
          <button className="btn btn-info" onClick={getInput}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

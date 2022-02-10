import React, { useState, useEffect } from 'react';
import "./AddIssue.css";


function AddIssue() {
  const[addIssue, setAddIssue] = useState(true);
  
  return (
    <div className="add-issue">
      <form>
          <label>
              Description
              <input type='text' />
          </label>

          <label>
              Assign To
              <select name="forDev" id="forDev">
                  <option value="John">John</option>
                  <option value="Chris">Chris</option>
                  <option value="Jenney">Jenney</option>
                  <option value="Bob">Bob</option>
              </select>
          </label>

          <label>
              Priority
              <select name="priority" id="priority">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">URGENT</option>
              </select>
          </label>
          <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;

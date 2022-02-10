import React, { useState } from 'react';
import "./AddIssue.css";


function AddIssue() {
  const [desc, setDes] = useState(true);
  const [dev, setDev] = useState(true);
  const [priority, setpriority] = useState(true);

  
  return (
    <div className="add-issue">
      <form>
          <label>
              Description
              <input type='text' placeholder="Describe Issue" className="desc-box"/>
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

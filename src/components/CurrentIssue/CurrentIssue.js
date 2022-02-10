import React, { useState, useEffect } from 'react';
import "./CurrentIssue.css";


function CurrentIssue() {
  const[addIssue, setAddIssue] = useState(true);
  
  return (
    <div className="current-issues">
      <div className="individual-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>

        <p>
          Priority<span>Medium</span>
        </p>

        <p>Description</p>
        <p className="description-text">
          loreasdlfkjas;dkfljas;dlfkj woeirupwe as;ldkfj ieowroj weir 
          a;weoirjpowaiej;klsadf  jfkdlsfife ed jfeikow jdfkls iewj o
          aiopsfjwe  k djlfsie klfjweio fjwoeifjlkf jjidfj owekf eijows
          wefrjioewsl fsdkfj iefwo jdlfk s
        </p>
        <hr />
      </div>

      <div className="individual-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>

        <p>
          Priority<span>Medium</span>
        </p>

        <p>Description</p>
        <p className="description-text">
          loreasdlfkjas;dkfljas;dlfkj woeirupwe as;ldkfj ieowroj weir 
          a;weoirjpowaiej;klsadf  jfkdlsfife ed jfeikow jdfkls iewj o
          aiopsfjwe  k djlfsie klfjweio fjwoeifjlkf jjidfj owekf eijows
          wefrjioewsl fsdkfj iefwo jdlfk s
        </p>
        <hr />
      </div>

      <div className="individual-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assigned<span>Username</span>
        </p>

        <p>
          Priority<span>Medium</span>
        </p>

        <p>Description</p>
        <p className="description-text">
          loreasdlfkjas;dkfljas;dlfkj woeirupwe as;ldkfj ieowroj weir 
          a;weoirjpowaiej;klsadf  jfkdlsfife ed jfeikow jdfkls iewj o
          aiopsfjwe  k djlfsie klfjweio fjwoeifjlkf jjidfj owekf eijows
          wefrjioewsl fsdkfj iefwo jdlfk s
        </p>
        <hr />
      </div>
      
    </div>
  );
}

export default CurrentIssue;

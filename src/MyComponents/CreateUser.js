import React, { useState } from "react";

export default function CreateUser(props) {
    const [userName,setuserName] = useState("");
    const [password,setpassword] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!userName)
        {
            alert("Enter User Name ");
        }
        if(!password)
        {
            alert("Enter  Password");
        }
        else{
            props.addUser(userName,password);
        }
        setuserName('');
        setpassword('');
        
    }
  return (
    <section className="container">
    <div>
        <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name
        </label>
        <input
            value={userName}
          type="text"
          className="form-control"
          id="userName"
          onChange={(e)=>{setuserName(e.target.value)}}
          placeholder="Enter User Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
         Password
        </label>
        <input
         value={password}
          type="text"
          className="form-control"
          id="password"
          onChange={(e)=>{setpassword(e.target.value)}}
          placeholder="Enter Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </section>
  );
}

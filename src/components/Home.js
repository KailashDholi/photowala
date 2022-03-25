
import CreateUser from "../MyComponents/CreateUser";
import Users from "../MyComponents/Users";
import React, { useEffect, useState } from "react";
export default function Home() {
    let initusers;
    if (localStorage.getItem("users") === null) {
      initusers = [];
    } else {
      initusers = JSON.parse(localStorage.getItem("users"));
    }
    const ondelete = (us) => {
      console.log("Im Delete", us);
      setUsers(
        users.filter((e) => {
          return e !== us;
        })
      );
    };
    const addUser = (userName, password) => {
      console.log("User Added Successfully");
      let sno = 1;
      if (users.length !== 0) sno = users[users.length - 1].Sno + 1;
      const Myuser = {
        Sno: sno,
        userName: userName,
        password: password,
      };
      setUsers([...users, Myuser]);
      console.log("SNo" + sno);
    };
    const [users, setUsers] = useState(
      initusers
     
    );
    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
  return (
    <>
      <CreateUser addUser={addUser} />
                <Users users={users} ondelete={ondelete} />
    </>
  )
}

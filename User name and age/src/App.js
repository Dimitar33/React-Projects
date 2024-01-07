import "./app.css";
import React, {useState} from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {

  const [dataa, setData] = useState([]);


  function UserData(data){

    let user = {
      ...data,
      id: Math.random().toString()
    }
    setData(x => [user, ...x]);
  }


  return (
    <div>
      <UserForm userData={UserData}></UserForm>
      <UserTable data={dataa}></UserTable>
    </div>
  );
}

export default App;

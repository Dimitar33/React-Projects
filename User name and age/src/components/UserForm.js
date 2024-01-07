import { useState } from "react";


export default function UserForm(props) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(+0);
    let users = [];

    function getUsername(ev){

        setName(ev.target.value)
    }

    function getYears(ev){

        setAge(ev.target.value);
    }

    function submitHandler(ev){
        ev.preventDefault();

        let userInput = {
            userName: name,
            userAge: age
        }
        
        if(!userInput.userName || userInput.userAge <= 0){

          alert('asdasd');
          return;
        }

        props.userData(userInput);
    }

  return (
    <div>
      <form className="input" onSubmit={submitHandler}>
        <label>Username</label>
        <input onChange={getUsername}></input>
        <label>Age(Years)</label>
        <input onChange={getYears} type="number"></input>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

import { useState, useRef } from "react";

const SimpleInput = (props) => {

const [isFormUsed, setIsFormUsed] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const refName = useRef(''); // just for testing

let isNameValid = name.trim() !== '';
let isEmailValid =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

function nameHandler(ev){
  setName(ev.target.value);
  setIsFormUsed(true);
}

function emailHandler(ev){
  
  setEmail(ev.target.value);
  setIsFormUsed(true);
}

function fokusHandler(ev){
  setIsFormUsed(true);

}


function submitHadler(ev){
  ev.preventDefault();

  if(!isNameValid){

    return;
  }

  if(!isEmailValid){
    return;
  }
  setName('');
  setEmail('');
  setIsFormUsed(false);

  console.log(email);
}



let formValidation = isNameValid || !isFormUsed;
let emailValidation = isEmailValid || !isFormUsed;
let isButtonDisabled = formValidation && emailValidation;

let formClasses = formValidation ? 'form-control' : 'form-control invalid'; 
let emailClasses = emailValidation ? 'form-control' : 'form-control invalid'; 

  return (
    <form>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        value={name}
        ref={refName} 
        type='text' 
        id='name' 
        onChange={nameHandler}
        onBlur={fokusHandler}/>
      </div>
      {(!formValidation) && <p className="error-text">Enter valid name</p>}
      <div className={emailClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
        value={email}
        type='text' 
        id='email' 
        onChange={emailHandler}
        onBlur={fokusHandler}/>
      </div>
      {(!emailValidation) && <p className="error-text">Enter valid email</p>}
      <div className="form-actions">
        <button disabled={!isButtonDisabled || !isFormUsed} onClick={submitHadler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

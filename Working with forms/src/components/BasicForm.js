import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    isTouched: isFirstNameTouched,
    onChangeInput: fristNameInput,
    changeBlur: firstNameBlur,
    isValid: isFirstNameValid,
    sectionValidation: firstNameValidation,
  } = useInput((inputValue => inputValue !== ''));
  
  const {
    isTouched: isLastNameTouched,
    onChangeInput: lastNameInput,
    changeBlur: lastNameBlur,
    isValid: isLastNameValid,
    sectionValidation: lastNameValidation,
  } = useInput((inputValue => inputValue !== ''));

  const {
    isTouched: isEmailTouched,
    onChangeInput: emailInput,
    changeBlur: emailBlur,
    isValid: isEmailNameValid,
    sectionValidation: emailValidation,
  } = useInput((inputValue => inputValue.includes('@')));

  let firstNameClasses = isFirstNameValid || !isFirstNameTouched ? "form-control" : "form-control invalid";
  let lastNameClasses = isLastNameValid || !isLastNameTouched ? "form-control" : "form-control invalid";
  let emailClasses = isEmailNameValid || !isEmailTouched ? "form-control" : "form-control invalid";

  let isButtonDisabled = isFirstNameValid && isLastNameValid && isEmailNameValid;

  console.log(lastNameValidation);

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input onChange={fristNameInput} onBlur={firstNameBlur} type="text" id="name" />
          {(!firstNameValidation && isFirstNameTouched) && <p className="error-text">First Name is not valid!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input onChange={lastNameInput} onBlur={lastNameBlur} type="text" id="name" />
          {(!lastNameValidation && isLastNameTouched) && <p className="error-text">Last Name is not valid!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input onChange={emailInput} onBlur={emailBlur} type="text" id="name" />
        {(!emailValidation && isEmailTouched) && <p className="error-text">Email is not valid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isButtonDisabled} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

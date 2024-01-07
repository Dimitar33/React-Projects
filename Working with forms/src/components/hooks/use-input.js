import { useState } from "react";

export default function useInput(Validdation){

    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function onChangeInput(ev){
        setInputValue(ev.target.value);
        setIsTouched(true);
    }

    function changeBlur(){
        setIsTouched(true);
    }

    let isValid = Validdation(inputValue);

    let sectionValidation = isValid && isTouched;

    let className = isValid || !isTouched ? "form-control" : "form-control invalid";


    return{
        isTouched,
        onChangeInput,
        changeBlur,
        isValid,
        sectionValidation,
        className
    }
}
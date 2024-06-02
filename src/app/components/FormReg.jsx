import { useState } from "react";

export default function FormReg() {
    // const [inputVal, setInputVal] = useState("qwerty");
    // const [inputType, setInputType] = useState("password");
    // const [buttonText, setButtonText] = useState("Показати пароль");

    const [formPassword, setFormPassword] = useState({
        inputVal: "qwerty",
        inputType: "password",
        buttonText: "Показати пароль",
    });

    function showPassword() {
        if (formPassword.inputType === "text") {
            setFormPassword({
                ...formPassword,
                inputType: "password",
                buttonText: "Показати пароль",
            });
        } else {
            setFormPassword({
                ...formPassword,
                inputType: "text",
                buttonText: "Приховати пароль",
            });
        }
    }

    const setNewValuePassword = (e) =>
        setFormPassword({
            ...formPassword,
            inputVal: e.target.value,
        });

    return (
        <div>
            <h1>Головна сторінка</h1>
            <input type={formPassword.inputType} value={formPassword.inputVal} onChange={setNewValuePassword} />
            <button onClick={showPassword}>{formPassword.buttonText}</button>
        </div>
    );
}

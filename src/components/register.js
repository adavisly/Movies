import React from 'react';

const Register = () => {
    return (
    <form className = "registerForm" method = "post" action="#">
         
            <h3 className = "regHeading">Регистрация</h3>
            <input required type = "text" className = "registerItem" name = "name" placeholder = "Имя"/> <br/>
            <input required type = "text" className = "registerItem" name = "surname" placeholder = "Фамилия"/> <br/>
            <input required type = "date" className = "registerItem" onchange="this.className=(this.value!=''?'has-value':'')" name = "birthday" placeholder = "Дата рождения_"/><br/>
            <input required type = "email" className = "registerItem" name = "email" placeholder = "e-mail"/><br/>
            <input required type = "password" className = "registerItem" name = "password" placeholder = "Пароль"/><br/>
            <input required type = "password" className = "registerItem" name = "password" placeholder = "Повторить пароль"/><br/>
            <button type = "submit" className = "registerButton">Зарегистрироваться</button>
         
    </form>
    )
};

export default Register;
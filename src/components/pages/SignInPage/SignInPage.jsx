import React from 'react'
import {Link} from "react-router-dom"
import { render } from 'react-dom';


function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

const loginProcess = () => {
    const emailData = document.getElementById("email").value;
    const passData = document.getElementById("password").value;
    
    if(!!!emailData || !!!passData){
        alert("Вы не ввели данные")
    }else{
        if (!validateEmail(emailData)){
            alert("Неправильно введен email")
        }
    }
}

export const SignInPage = () => {
    return (
      <div className='Content'>
        <div className='SignIn'>
            <h1 className='HeaderSign'>Авторизация</h1>
            <div className="SignMain">
            <div className='TextSign'>
                <div className="SignForm">
                    <form>
                        <p>Email</p>
                        <input id="email" type="email" name="email"/>
                        <p>Пароль</p>
                        <input id="password" type="password" name="password"/>
                    </form>
                    <button onClick={() => loginProcess()}>Sign In</button>
                </div>
                <div className="SignLinks">
                <Link to = '/register' style = {{"textDecoration" : "none", "color": "#000 !important"}}>
                    <p>First time here? Let’s registrate you!</p>
                </Link>
                    <p>Forgot password? It’s not a problem</p>
                </div>
            </div>
            <div className='ImgSign'>
                <img src={"./img/people1.jpg"} />
            </div>
            </div>
        </div>
      </div>
    )
  }
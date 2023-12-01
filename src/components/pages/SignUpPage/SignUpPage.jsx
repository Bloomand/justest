import {Link} from "react-router-dom"
import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

const registrProcess = () => {
    const nameData = document.getElementById("name").value;
    const surnameData = document.getElementById("surname").value;
    const emailData = document.getElementById("email").value;
    const passData = document.getElementById("password").value;
    const passData2 = document.getElementById("password2").value;
    if(!!!emailData || !!!passData || !!!passData2){
        alert("Вы не ввели данные")
    }else if (!validateEmail(emailData)){
        alert("Неправильно введен email")
    }
    else{
        if(passData!=passData2){
            alert("Пароли не совпадают")
        }
    }
    
}

export const SignUpPage = () => {
    return (
      <div className='Content'>
        <div className='SignUp'>
            <h1 className='HeaderSignUp'>Регистрация</h1>
            <div className="SignUpMain">
            <div className='TextSignUp'>
                <div className="SignUpForm">
                    <form>
                        <p>Имя</p>
                        <input type="text" id="name" placeholder=''/>
                        <p>Фамилия</p>
                        <input type="text" id="surname" placeholder=''/>
                        <p>Email</p>
                        <input type="email" id="email" placeholder=''/>
                        <p>Пароль</p>
                        <input type="password" id="password" placeholder=''/>
                        <p>Подтверждение пароля</p>
                        <input type="text" id="password2" placeholder=''/>
                    </form>
                    <button onClick={() => registrProcess()}>Sign Up</button>
                </div>
                <div className="SignUpLinks">
                <Link to = '/signinto' style = {{"textDecoration" : "none", "color": "#000 !important"}}>
                    <p>Already registrated?</p>
                </Link>
                </div>
            </div>
            <div className='ImgSignUp'>
                <img src={"./img/people2.jpg"} />
            </div>
            </div>
        </div>
      </div>
    )
  }
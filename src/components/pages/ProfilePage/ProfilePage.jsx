import React from 'react'
import { useState } from 'react';
import { render } from 'react-dom';


export const ProfilePage = () => {
    const TestData = {
        "id": 1,
        "name": "Алина",
        "surname": "Гельдаш",
        "company": "Justice",
        "mail": "geldashal@gmail.comа",
        "numTests": 35
    }

    let profileBlock = (<div className="ProfileMain">
        <img src={'./img/peopleProfile.jpg'} alt="" className="ProfileImg" />
        <div className="ProfileText">
            <div className="ProfileTop">
                <h2>Здравствуйте, {TestData.name}</h2>
                <p>ФИ - {TestData.name} {TestData.surname}</p>
                <p>Компания - {TestData.company}</p>
                <p>Почта - {TestData.mail}</p>                        
            </div>
            <div className="ProfileBottom">
                <h3>Текущий прогресс тестирования</h3>
                <p>Кол-во тестирований - {TestData.numTests}</p>
                <div className="ProfileButton">
                    <button onClick={() => changeProfile()}>Change</button>
                </div>
            </div>
        </div>
    </div>);

    const showProfile = () =>{
        console.log(0);
        profileBlock = (<div className="ProfileMain">
        <img src={'./img/peopleProfile.jpg'} alt="" className="ProfileImg" />
        <div className="ProfileText">
            <div className="ProfileTop">
                <h2>Здравствуйте, {TestData.name}</h2>
                <p className="p1">ФИ - {TestData.name} {TestData.surname}</p>
                <p className="p1">Компания - {TestData.company}</p>
                <p className="p1">Почта - {TestData.mail}</p>                        
            </div>
            <div className="ProfileBottom">
                <h3>Текущий прогресс тестирования</h3>
                <p className="p1">Кол-во тестирований - {TestData.numTests}</p>
                <div className="ProfileButton">
                    <button onClick={() => changeProfile()}>Change</button>
                </div>
            </div>
        </div>
        </div>);
        render(<div>{profileBlock}</div>, document.getElementById("profile"));
    }
    const changeProfile = () =>{
        console.log(1);
        profileBlock = (<div className="ProfileMain">
            <img src={'./img/peopleProfile.jpg'} alt="" className="ProfileImg" />
            <div className="ProfileText">
            <div className="ProfileTop">
                <div className="ProfileForm">
                    <form>
                        <p className="p2">Имя</p>
                        <input type="text" id="name" placeholder=''/>
                        <p>Фамилия</p>
                        <input type="text" id="surname" placeholder=''/>
                        <p>Email</p>
                        <input type="email" id="email" placeholder=''/>
                        <p>Пароль</p>
                        <input type="password" id="password" placeholder=''/>
                    </form>
                </div>
            </div>
            <div className="ProfileBottom">
                <div className="ProfileButton">
                    <button onClick={() => showProfile()}>Save Changes</button>
                </div>
            </div>
            </div>
            </div>);
        console.log(document.getElementById("profile"));
        console.log(profileBlock);
        render(<div>{profileBlock}</div>, document.getElementById("profile"));
    }



    return (
      <div className='Content'>
        <div className="Profile">
            <div className="ProfileHeader">
                <h1>Личный кабинет</h1>
            </div>
            <div id="profile">{profileBlock}</div>
        </div>
      </div>
    )
  }
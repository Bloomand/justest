import React from 'react'
import { ReactDOM } from 'react';
import { render } from 'react-dom';


const TestData = {
        "id": 1,
        "testName": "Are you seek?",
        "description": "Yes",
        "questions": [
        {
            "id": 1,
            "question": "Why are you worked there",
            "subanswers": [
                {
                    "id": 1,
                    "answer": "This is me",
                    "score": 99
                },
                {
                    "id": 2,
                    "answer": "This is",
                    "score": 23
                }
            ]
        },
        {
            "id": 4,
            "question": "Is not a quest",
            "subanswers": [
                {
                    "id": 5,
                    "answer": "This is 1",
                    "score": 2
                },
                {
                    "id": 6,
                    "answer": "This is 2",
                    "score": 4
                },
                {
                    "id": 7,
                    "answer": "This is 3",
                    "score": 5
                }
            ]
        }
    ]
}

let TestIDConst = TestData.id;

const questions = TestData.questions.map(item => {
    const res = [item.question];
    item.subanswers.forEach(subItem => res.push([subItem.answer, subItem.score]));
    return (res);
});


let listItems = [];
let listAnswers = [];
let num = 0;
for (let i of questions) {
    listAnswers = [];
    num = 0;
    for (let k of i) {
        if(num!=0){
            listAnswers.push(<div className="form-check">
            <label>
            <input
                type="radio"
                name="react-tips"
                value={k[1]}
                checked={true}
                className="form-check-input"
            />{k[0]}
            </label>
            </div>);
            
        }else{
            num++;
        }
    }

    listItems.push(<div>
        <div className="AnswerSelect">
            <p1>{i[0]}</p1>
            <form>
                <div className="form-check">
                    {listAnswers}
                </div>
            </form>                              
        </div>
    </div>);
}
let Exception = [];

let summaryAnswers = 0;//Баллы ответов пользователя
let maxAnswers = 0;

const saveAnswers = () => {
    maxAnswers = 0;
    console.log(questions);
    for(let i of questions){
        let num = 0;
        let max = 0;
        for(let k of i){
            if(num!=0){
                if(max<parseInt(k[1], 10)){
                    max=parseInt(k[1], 10);
                }
            }
            num++;
        }
        maxAnswers+=max;
    }
    summaryAnswers = 0;
    let countAnswers = 0;
    const fruits = document.querySelectorAll('input[name="react-tips"]')
    for (const f of fruits) {
        if (f.checked) {
            summaryAnswers += (parseInt(f.value, 10));
            countAnswers++;
        }
    }
    if(countAnswers==questions.length){
        alert(`Вы набрали ${summaryAnswers} баллов\nМаксимальное возможное количество: ${maxAnswers}\nРезультат: ${Math.round((summaryAnswers/maxAnswers)*100)}%`);
    }else{
        Exception.push(<span>*Вы не ответили на все вопросы</span>);
    }
    
}

let Name = "";
let Surname = "";
const handleChange = (i, event) =>{
    if(i==0){
        Name=event;
        console.log(Name);
    }else if(i==1){
        Surname=event;
        console.log(Surname);
    }
}

export const TestReady = () => {
    return (
      <div className='Content'>
        <div className="Create">
            <div className="CreateHeader">
                <h1>Тестирование</h1>
                <div className="MainCreate">
                    <img src={'./img/createtest.jpg'} alt="" className='CreateImg'/>
                    <div className="CreateQuestions">
                        <form>
                            <p>Название</p>
                            <div className="QuestMessage">{TestData.testName}</div>
                            <p>Описание</p>
                            <div className="QuestMessage">{TestData.description}</div>
                        </form>
                        
                    </div>
                    <p>Введите Имя и Фамилию для сохранения результата</p>
                    <div className="NameData">
                        <p>Имя</p>
                        <input type="text" className="QuestMessage" defaultValue={Name} onChange={event => handleChange(0,event.target.value)}/>
                        <p>Фамилия</p>
                        <input type="text" className="QuestMessage" defaultValue={Surname} onChange={event => handleChange(1,event.target.value)}/>
                    </div>
                    {listItems}
                    {Exception}
                    <button className="saveAnswers" onClick={() => saveAnswers()}>Save Answers</button>
                </div>
            </div>
        </div>
      </div>
    )
    
  }
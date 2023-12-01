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
                    "score": 99,
                    "choice": 0
                },
                {
                    "id": 2,
                    "answer": "This is",
                    "score": 23,
                    "choice": 1
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
                    "score": 2,
                    "choice": 0
                },
                {
                    "id": 6,
                    "answer": "This is 2",
                    "score": 4,
                    "choice": 1
                },
                {
                    "id": 7,
                    "answer": "This is 3",
                    "score": 5,
                    "choice": 0
                }
            ]
        }
    ]
}

let TestIDConst = TestData.id;

const questions = TestData.questions.map(item => {
    const res = [item.question];
    item.subanswers.forEach(subItem => res.push([subItem.answer, subItem.score,subItem.choice]));
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
            if(k[2]==0){
                listAnswers.push(<div className="form-check">
                <label>
                <input
                    type="radio"
                    name="react-tips"
                    value={k[1]}
                    disabled
                    checked={false}
                    className="form-check-input"
                />{k[0]}
                </label>
                </div>);
            }else{
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
            }
            
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

export const TestResult = () => {
    return (
      <div className='Content'>
        <div className="Create">
            <div className="CreateHeader">
                <h1>Популярные ответы</h1>
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
                    {listItems}
                </div>
            </div>
        </div>
      </div>
    )
    
  }
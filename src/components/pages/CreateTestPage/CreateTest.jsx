import React from 'react'
import { ReactDOM } from 'react';
import { render } from 'react-dom';
import Header from '../../Header/Header.jsx'
import { BrowserRouter } from 'react-router-dom';
import Select from 'react-select';
import { useState, useMemo, useEffect } from 'react';



let listItems = [];
let listAnswers = [];

const optionsType = [
    { value: '0', label: 'Default test' },
    { value: '1', label: 'Choice with points' }
]



export const CreateTest = () => {

    const currentUrl = window.location.href;
    const currentUrl_num=currentUrl.split('?')[1];

    let TestData = {
        "id": 1,
        "testName": "Are you seek?",
        "description": "Yes",
        "type": 1,
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
                },
                {
                    "id": 3,
                    "answer": "This",
                    "score": 5
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

    let [currentType,setType] = useState(optionsType[TestData.type]);

    let [questions,setQuest] = useState(TestData.questions.map(item => {
        let res = [item.question];
        item.subanswers.forEach(subItem => res.push([subItem.answer, subItem.score]));
        return (res);
    }));


    const updateList = () =>{
        listItems=[];
        
        listAnswers = []
        for (let i=0;i<questions.length;i++) {
            listAnswers = [];
            for (let k = 1;k<questions[i].length;k++) {
                console.log(i, "-----");
                console.log(questions[i]);
                    if(currentType == optionsType[0]){
                        listAnswers.push(<div className="form-check">
                        <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value={questions[i][k][1]}
                            checked={false}
                            className="form-check-input"
                        />
                        <input name="answer" type="text" defaultValue={questions[i][k][0]} onChange={event => inputChange(i,k,0,event.target.value)}></input>
                        </label>
                        </div>);
                    }else if(currentType == optionsType[1]){
                        listAnswers.push(<div className="form-check">
                        <label>
                        <input
                            type="radio"
                            name="react-tips"
                            value={questions[i][k][1]}
                            checked={false}
                            className="form-check-input"
                        />
                        <input name="answer" type="text" defaultValue={questions[i][k][0]} onChange={event => inputChange(i,k,0,event.target.value)}></input>
                        <input name="answer_score" class="input_2" type="text" defaultValue={questions[i][k][1]} onChange={event => inputChange(i,k,1,event.target.value)}></input>
                        <span for="answer_score">*Количество баллов за выбор ответа</span>
                        </label>
                        </div>);
                    }
            }
    
            listItems.push(<div>
                <div className="AnswerSelect">
                    <div className='AnswerSelectHeader'>
                        <p1><input name="question" type="text" defaultValue={questions[i][0]} onChange={event => inputChange(i,-1,0,event.target.value)}></input>
                        <span for="question">*Отредактируйте вопрос, если необходимо</span></p1>
                        <button onClick={() => deleteQuestion(i)}>Delete</button>
                    </div>
                    <form>
                        <div className="form-check">
                            {listAnswers}
                        </div>
                    </form>                             
                </div>
            </div>);
        }
        console.log(questions);
        return{listItems}
        
    }
    
    const inputChange = (i, k, f, event) =>{
        if(k!=-1){
            questions[i][k][f]=event;
        }else{
            questions[i][0]=event;
        }
    }
    const inputDefChange = (k, event) =>{ 
        if(k==0){ 
            TestData.testName=event; 
        }else{ 
            TestData.description=event; 
        } 
    }
    
    
    const addQuestion = () => {
        questions.push([`Вопрос ${questions.length+1}`,["Ответ 1",0],["Ответ 2", 0],["Ответ 3", 0]]);
        updateList();
        render(<div id="list">{listItems}</div>, document.getElementById("list"));
    };
    const deleteQuestion = (num_L) => { 
        setQuest(prev => {const newQuestions= [...prev]; 
            newQuestions.splice(num_L, 1);
            return newQuestions;
        });
        updateList(); 
        render(<div id="list">{listItems}</div>, document.getElementById("list")); 
    };

    // const deleteQuestion = (num_L) => {
    //     questions.splice(num_L, 1);
    //     updateList();
    //     render(<div id="list">{listItems}</div>, document.getElementById("list"));
    // };
    

    
    const saveTest = () => {
        console.log(questions);
        let questionsData = {};
        questionsData["testName"]=TestData.testName;
        questionsData["description"]=TestData.description;
        questionsData["type"]=currentType.value;
        questionsData["questions"] = [];
        for(let i = 0; i < questions.length; i++){
            let item = {};
            item["question"]=questions[i][0];
            item["subanswers"]=[];
            for(let k = 1; k < questions[i].length; k++){
                let subitem ={};
                subitem["answer"] = questions[i][k][0];
                subitem["score"] = questions[i][k][1];
                item["subanswers"].push(subitem);
            }
            questionsData["questions"].push(item);
        };
        console.log(questionsData);
    }

    

    updateList();

    const handleChangeType = (event) => {
        setType(optionsType[event.value]);
        updateList();
    }

    const updateArray = () =>{
        if(currentType == optionsType[0]){
            for (let i=0;i<questions.length;i++) {
                let num=0;
                for (let k = 0;k<questions[i].length;k++) {
                    if(num!=0){
                        questions[i][k][1] = 0;
                    }else{
                        num++;
                    }
                    
                }
            }
        }
        render(<div>{listItems}</div>, document.getElementById("list"));
        console.log(questions);
        return{questions}
    }

    useEffect(() => {
        updateArray();
        render(<div>{listItems}</div>, document.getElementById("list"));
    },[currentType]);

    return (
      <div className='Content'>
        <div className="Create">
            <div className="CreateHeader">
                <h1>Составь вопросы</h1>
                <div className="MainCreate">
                    <img src={'./img/createtest.jpg'} alt="" className='CreateImg'/>
                    <div className="CreateQuestions">
                        <form>
                            <p>Название</p>
                            <input type="text" className="QuestHeader" defaultValue={TestData.testName} onChange={event => inputDefChange(0, event.target.value)}/>
                            <p>Описание</p>
                            <input type="text" className="QuestMessage" defaultValue={TestData.description} onChange={event => inputDefChange(1, event.target.value)}/>
                        </form>
                    </div>
                    <div>
                        <button className="firststart" onClick={() => addQuestion()}>Add Question</button>
                        <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={currentType}
                        name="typeTest"
                        options={optionsType} 
                        onChange={event => {handleChangeType(event)}}/>
                        <div id="list">{listItems}</div>
                        <button className="firststart" onClick={() => saveTest()}>Save Test</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
    
  }
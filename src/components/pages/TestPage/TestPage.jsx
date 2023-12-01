import React from 'react'
import {Link} from "react-router-dom"

const TestData = {
  "lol":[
  {
    "id": 1,
    "testName": "Are you seek?",
    "description": "Yes"
  },
  {
    "id": 3,
    "testName": "Woooooow",
    "description": "Yes"
  },
  {
    "id": 5,
    "testName": "LowKik",
    "description": "Yes"
  },
  {
    "id": 6,
    "testName": "Lomdfkekvfdkvdfkvndfkvndfkvnfdknvkvnkfdvnkdfnw",
    "description": "Yes"
  }
]}

const questions = TestData.lol.map(item => {
  const res = [];
  res.push(item.id, item.testName)
  return (res);
});


let listTests = [];
for (let i of questions) {
  var sliced = i[1].slice(0,13);
  if (sliced.length < i[1].length) {
    sliced += '...';
  }
  listTests.push(<div value={i[0]} className='Item'>
    <Link to={`/createtest?${i[0]}`}>
    <img src={'./img/TestPic.png'} alt="" className="TestImg" />
    </Link>
    <div class="ImgSign">{sliced}</div>
    </div>)
}



export const TestPage = () => {
    if (!window.location.hash) {
      window.location = window.location + '#uge_obnovleno';
      window.location.reload();
    }
    return (
      <div className='Content'>
        <div className="Test">
        <div className="GalleryTest">
            <div className="GalleryHeader">
                <h2>Галерея шаблонов</h2>
                <p>Выберите шаблон или нажмите "Начать с нуля",чтобы создать тест</p>
            </div>
            <div className="GalleryBody">
                <p>Все шаблоны</p>
                <p>Психологические</p>
                <p>Логические</p>
                <p>Ассоциативные</p>
            </div>
        </div>
        <div className="TestMain">
            <h1>Создай тест</h1>
            <Link to = '/createtest?0' style = {{"textDecoration" : "none", "color": "#000 !important"}}>
            <button> + Начать с нуля</button>
            </Link>
            <div className="Tests">
              {listTests}
            </div>
        </div>
        </div>
      </div>
    )
  }
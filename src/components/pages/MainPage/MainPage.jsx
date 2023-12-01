import React from 'react'
import Footer from '../../Footer/Footer'
import {Link} from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion';


export const MainPage = () => {
  return (
    <div className='Content'>
        <div className = 'hero'>
        <div className = 'promo'>
            <h1 className = 'phrase'>Собери лучшую <span>команду</span></h1>
            <p className = 'minitxt'>Мы продвигаем собеседования на новый уровень. Создай тест и узнай качества сотрудника.</p>
            <Link to = '/test'><button className = 'firststart'>Start it!</button></Link>
        </div>
        <div className = 'blueside'/>
        <img className = 'boysh' src={"./img/pers.png"}/>
        <div className = 'sign'>
            <hr className = 'signline'/>
            <p className = 'slave'>COLLAB 2023 JUSTICE SOFTTECH</p>
        </div>    
    </div>
       <div className = 'info'>
        <div className = 'miniinfo1'>
            <div>
                <h1 className = 'phraseinfo'>Зачем нужно тестировать сотрудников?</h1>
                <p className = 'miniinfo'>Найти подходящего кандидата на предлагаемую должность.</p> 
                <p className = 'miniinfo'>Проверить умения уже работающего кандидата, понять, соответствует ли он занимаемой должности.</p> 
                <p className = 'miniinfo'>Оценить эмоциональное состояние сотрудника, лучше узнать его как человека.</p> 
                <p className = 'miniinfo'>Оценить уровень творческих способностей сотрудника.</p> 
            </div>
            <img className = 'infoimg' src={"./img/white1.png"}/>
        </div>
        <div className = 'miniinfo1' style={{paddingTop:'0px'}}>
        <Link to = '/test'><button className = 'firststart'>Перейти к созданию теста</button></Link>
        </div>
        <div className = 'miniinfo1'> 
            <img className = 'infoimg' src={"./img/white2.png"}/>
            <div>
                <h1 className = 'phraseinfo'>Есть вопросы?</h1>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Могу ли изменять/редактировать вопросы в шаблонах тестов?</Accordion.Header>
                        <Accordion.Body>Да, в нашем сервисе есть возможность изменять готовые вопросы, тем самым делая ваш тест уникальным.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Могу ли создать свой тест с нуля?</Accordion.Header>
                        <Accordion.Body>Вы можете полностью создать тестирование, опираясь на собственные задумки.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Как сотрудникам пройти тестирование?</Accordion.Header>
                        <Accordion.Body>По итогу создания теста, генерируется ссылка, перейдя по которой сотрудник получает доступ к прохождению тестирования.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Какие навыки нужно иметь, чтобы грамотно составить вопросы для тестирования?</Accordion.Header>
                        <Accordion.Body>Особые навыки не нужны, так как вы можете воспользоваться нашими шаблонами тестов. Вам будет предоставлена возможность выбрать интересующие вас форматы тестов и дополнить их своими вопросами.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
import {Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import { TestPage } from "./components/pages/TestPage/TestPage.jsx";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { SignInPage } from "./components/pages/SignInPage/SignInPage.jsx";
import { SignUpPage } from "./components/pages/SignUpPage/SignUpPage.jsx";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage.jsx";
import { CreateTest } from "./components/pages/CreateTestPage/CreateTest.jsx";
import { StatisticPage } from "./components/pages/StatisticPage/StatisticPage";
import { ArchivePage } from "./components/pages/ArchivePage/ArchivePage.jsx";
import { ItemQuestion } from "./components/pages/ItemQuestion/ItemQuestion.jsx";
import { TestReady } from "./components/pages/TestReadyPage/TestReady.jsx"
import { TestResult } from "./components/pages/TestResultPage/TestResult.jsx"


function App() {
  return (
    <div className="wrapper">
      <Header isLogged="1"/>
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='/test' element = {<TestPage/>}/>
        <Route path='/signinto' element = {<SignInPage/>}/>
        <Route path='/register' element = {<SignUpPage/>}/>
        <Route path='/profile' element = {<ProfilePage/>}/>
        <Route path='/createtest' element = {<CreateTest/>}/>
        <Route path='/statistic' element = {<StatisticPage/>}/>
        <Route path='/archive' element = {<ArchivePage/>}/>
        <Route path='/item' element = {<ItemQuestion/>}/>
        <Route path='/testread' element = {<TestReady/>}/>
        <Route path='/item' element = {<ItemQuestion/>}/>
        <Route path='/result' element = {<TestResult/>}/>
      </Routes>
    </div>
  );
}



export default App;

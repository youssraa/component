import {FullName , Status} from "./Component/Profile/FullName" ;
import MyEditor from "./Component/Profile/ProfilPhoto" ;
import { Ville , Tel , Email , City}  from "./Component/Profile/Address" ;
import { BsEnvelopeOpen , BsGeoAlt , BsPersonLinesFill , BsPip} from "react-icons/bs";
import  { FaCamera }  from "react-icons/fa";
import React from 'react' ;
import './App.css';
function App() {
  return (
 <>
<div class="muck-up">
  <div class="overlay"></div>
  <div class="top">
    <div class="nav">
      <span class="ion-android-menu"></span>
      <span class="ion-ios-more-outline"></span>
    </div>
    <div class="user-profile">
      <MyEditor/>      <div class="user-details">
        <h4><FullName/></h4>
        <p><Status/></p>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="filter-btn">
    <a id="one" href="#"></a>
    <a id="two" href="#"></a>
    <a id="three" href="#"></a>
    <a id="all" href="#"></a>
    <span class="toggle-btn ion-android-funnel"><FaCamera/></span>
  </div>
  <div class="clearfix"></div>
  <div class="bottom">
    <div class="title">
      <h3>Cordonnées

      </h3>
      <small>Mise à jour Octobre 8,2020</small>
    </div>
    <ul class="tasks">
      <li class="one red">
      <BsEnvelopeOpen/>  <span class="task-title"><Email/></span>
        <span class="task-time">modifier</span>
        <span class="task-cat">Adresse Electronique</span>

      </li>
      <li class="one red">
      <BsGeoAlt/> <span class="task-title"><Ville/></span>
        <span class="task-time">modifier</span>
        <span class="task-cat">ville Actuel</span>

      </li>
      <li class="two green">
      <BsPersonLinesFill /> <span class="task-title"><Tel/></span>
        <span class="task-time">modifier</span>
        <span class="task-cat">numero de pourtable</span>

      </li>
      <li class="tow green hang">
      <BsPip/> <span class="task-title"><City/></span>
        <span class="task-time">modifier</span>
        <span class="task-cat">7000 - Tunis</span>
        <img src="FB.png"/>
        <img src="IN.png"/>
        <img src="WT.png"/>
      </li>
    </ul>
  </div>
</div>

   </>
  );
}

export default App ;

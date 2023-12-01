import React from 'react'
import Avatar from 'react-avatar';

import {Link} from "react-router-dom"

export default function Header(props) {
  let Authentic= [];
  if(props.isLogged==1){
    Authentic.push(<div className = 'rightcontainer'><Link to = '/profile'>
    <div>
    <Avatar name="Account" size="42"  textSizeRatio={2} color="black"/>
    </div>
    </Link></div>);
  }else{
    Authentic.push(<div className = 'rightcontainer'><Link to = '/signinto' style={{textDecoration: 'none'}}>
    <div className = 'signin'>
      sign in
      <img className = 'signimg' src={"./img/login_but.png"}/>
    </div>
    </Link></div>);
  }
  return (
    <header className = 'mainheader' position="static">
        <div className = 'leftcontainer'>
            <Link to = '/' className = 'logo'>JUSTEST</Link>
            <Link to = '/test' className = 'element'>create test</Link>
            <Link to = '/archive' className = 'element'>test archieve</Link>
            <Link to = '/statistic' className = 'element'>statistic</Link>
            <Link to = '/signinto' className = 'element'>login</Link> 
        </div>
        {Authentic}        
    </header>
  )
}


import './nav.css';
import logo from "../../images/pintrest.png";
import { Button } from '../button/Button';
import { useState } from 'react';
import { Searchbar } from '../SearchBar/Searchbar';

const Navbar = ({ position, getSetNavDetails, boxshadow ,setsearch,justifycontent,display,check,setbackground}) => {
  const [navDetails, setNavDetails] = useState(false)

  getSetNavDetails(setNavDetails)

  return (
    <nav  className="navbarLogin" style={{ position: position, boxShadow: boxshadow,justifyContent:justifycontent }}>
      <div className="navbarLogin-left">
        <div style={{ display: 'flex', alignItems: "center" }}>
          <img src={logo} height="45px" width="45px" />
          <a href="/" className="logo">
            Pinterest
          </a>
        </div>
        {navDetails == false ? <div className='nav-explore'>
          <a href='' style={{display:display}}>Explore</a>

        </div> : ''}
      </div>

      {navDetails == false ? <div className="loginNavbar-center">
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/">Business</a></li>
          <li><a href='/'>Create</a></li>
          <li><a href='/'>News</a></li>
        </ul>

        <Button value="Sign up" clas='loginButton'/>
        {/* <Button value="Sign ip" clas={'signButton'}></Button> */}

      </div> : <Searchbar setsearch={setsearch} />}
        
      <div style={{display:'flex', alignItems:'center',gap:"1rem"}}>
        {/* <div className="responceveIcons">
          <i class="bi bi-search"></i>
          <i class="bi bi-three-dots-vertical"></i>
        </div> */}
      {
        check !=='login' ? (
            <div className='nav-account-info' onClick={()=>setbackground("usercard")}>
        <h4>A</h4>
      </div>
        ) :''
      }
      </div>
    </nav>
  );
};

export default Navbar;

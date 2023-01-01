import { useState } from "react";
import React from "react";

const MobileDropdown = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const toggleMenuButtonClass = "";
  const toggleMenuButton = () =>
  {
    if(toggleMenuButtonClass === "change")
    {
      toggleMenuButtonClass = "";
    }
    else
    {
      toggleMenuButtonClass = "change"
    };
  }
  

  return (
    <div className="mobile-dropdown-menu">
      <button onClick={toggleMenu} className={toggleMenuButtonClass}>
        &#9776;
      </button>
      {showMenu ? (
        <nav>
          {props.children.map((child, index) => (
            <React.Fragment key={index}>
              {child}
              <br/>
            </React.Fragment>
          ))}
        </nav>
      ) : null}


    

      <style>
        {`
          .mobile-dropdown-menu {
            position: relative;
          }
    
          .mobile-dropdown-menu button {
            padding: 8px 20px;
            background-color: #ff8a00;
            color: #fff;
            font-size: 1rem;
            border-radius: 5px;
            border: none;
            cursor: pointer;
          }
    
          .mobile-dropdown-menu ul {
            position: absolute;
            padding: 20px;
            background-color: #f2f2f2;
            width: 100%;
            z-index: 1;
            list-style: none;
            box-sizing: border-box;
            border-radius: 5px;
          }
    
          .mobile-dropdown-menu ul li {
            padding: 8px;
            font-size: 0.9rem;
            color: #000;
          }

          .change {
            background-color: #f2f2f2;
            color: #ff8a00;
          }

          @media (max-width: 480px) {
            .mobile-dropdown-menu {
              display: block;
            }
          }

          @media (min-width: 480px) {
            .mobile-dropdown-menu {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}

export default MobileDropdown;
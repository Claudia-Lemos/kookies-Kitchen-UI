import React from "react";

const Header =  () => {
   return (
   <div className="flex justify-between bg-slate-50 h-32 align-middle">
        <div className="logocontainer">
            <img src="/img/logo.jpg" alt="Kookie's Kitchen logo"/>
          
        </div>
<div className="flex p-4 space-x-4 justify-between">
    <ul>
        <li>About Kookie's Kitchen</li>
        <li>Meal Plans</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</div>
    </div>
    )
}

export default Header;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function Home(){
    const navigate = useNavigate();

const handleClick=()=>{
    navigate('/menu')
}

    return(
        <div>
            <h1> Welcome to Food's Kitchen</h1>
            <button className="add" style={{width:"150px",height:"40px"}} onClick={handleClick}> Go To Menu</button>
        </div>
    )


}
export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
import { isElementType } from "@testing-library/user-event/dist/utils";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';
function Body() {
    const[item, setitem ]=useState([])
  const[open,setOpen]=useState(false)
  const navigate = useNavigate();
  const[updateData,setupdateData]=useState([])
    var data1=[];
    useEffect(()=>{
        axios.get('https://bitbucket.org/punitdiwan/coding-challange/raw/b0cb9f038330df83d9d05a9e2c70d588df0c4e30/data/feeds.json')
        .then((res)=>{
          
            setitem(res.data);
            data1=[...item];


        }).catch((err)=>{
            console.log(err)
        })

    },[])

    useEffect(()=>{
data1=[...item];
data1.forEach((data=>{
    data.qty=0;
}))
setupdateData(data1);
    },[item])


const handlePlus=(title)=>{
data1=[...updateData];
data1.forEach((item)=>{
    if(item.name==title.name){
        item.qty=item.qty+1;
    }
})
console.log(data1)

setupdateData(data1)
}

const handleMinus=(title)=>{
    data1=[...updateData];
    data1.forEach((item)=>{
        if(item.name==title.name){
            item.qty=item.qty-1;
        }
    })
    console.log(data1);
    setupdateData(data1);
}

useEffect(()=>{

},[updateData])

const handleClose=()=>{
    setOpen(false);
}
const clickSave=()=>{
navigate('/checkout')
}
    const itmes=updateData.map((title)=>{
        return(
            <div className="col-md-3" variant="outlined" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",margin:"20px",paddingBottom:"10px"}} >
               
                <img src={"https://bitbucket.org/punitdiwan/coding-challange/raw/b0cb9f038330df83d9d05a9e2c70d588df0c4e30/assets/"+title.image} className='img-fluid' style={{height:"250px",width:"400px"}}/>
                <div style={{textAlign:"left",paddingLeft:"20px"}}>
                <h3 >{title.name}</h3>
                <p>Price:{title.price}</p>
                <div><button className='add' onClick={()=>handlePlus(title)} >+</button> <button className='subtract'onClick={()=>{handleMinus(title)}} style={{backgroundColor:title.qty>0?"red":'grey'}}>-</button></div>
                </div>
            </div>
        )
    })
    return <div>
        <div className="row">
            {itmes}

        </div>
       <button className="add" style={{width:"100px"}} onClick={()=>{setOpen(true)}}> Submit</button>
<Dialog open={open} onClose={handleClose}>
<DialogTitle>Order Summary</DialogTitle>
<DialogContent>
    <table>
        {
            updateData.map((item)=>{
                if(item.qty>0)
                return(
                    <tr>
                        <td>
                        {item.name} :{item.qty} </td>
                        <td><button className="add" style={{width:'50px'}} onClick={()=>handlePlus(item)}>+</button><button className="subtract" style={{width:'50px',backgroundColor:'red'}} onClick={()=>{handleMinus(item)}}>-</button></td>
                    </tr>
                )
            })
        }
    </table>
</DialogContent>
<DialogActions>
    <button className="add" style={{width:"150px"}} onClick={clickSave}>Save and checkout </button>
    <buton className="subtract" style={{width:"80px", marginLeft:"20px"}} variant="outlined" onClick={handleClose}>Cancel </buton>
</DialogActions>
</Dialog>

        
    </div>
    
}export default Body
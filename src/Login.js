import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Loginform() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState('')
    const navigate = useNavigate();
    function handleSubmit() {
        if (email == '' || password == '') {
            setFlag('*All Fields are Mandatory')
        }
        else {

            setFlag('')

            if (email == 'admin' && password == 'Abcd@1234') {

                navigate('/menu')
                setFlag('')

            }
            else {
                setFlag('Incorrect Username or Password')
            }

        }


    }
    return <div style={{ paddingLeft: '40%', paddingTop: '50px' }}>
        <div className="col-md-4" >
            <input type="text" className="form-control" value={email} placeholder='Username' onChange={(event) => setEmail(event.target.value)} /> <br />
            <input type="password" className="form-control" value={password} placeholder='Password' onChange={(event) => setPassword(event.target.value)} /> <br />
            {flag.length > 0 ? <div style={{ color: 'red' }}>{flag}</div> : null}
            <button style={{ margin: '10px' }} className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>

        </div>
    </div>

} export default Loginform
import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="mycard">
    <div className="card auth-card input-field ">
       <h2>Loan System</h2>
       <input type="text" placeholder='name' />
       <input type="text" placeholder="email" 
        />

       <input type="password" placeholder="password"
       
        />
       <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
       onClick="submit"
       >SignUp
       </button>
       <h5><Link to="/signin">ALready have an Account ?</Link></h5>

     </div>

   </div>
  )
}

export default SignIn

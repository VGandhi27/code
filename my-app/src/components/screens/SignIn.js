import React from 'react'

const SignIn = () => {
  return (
    <div className="mycard">
    <div className="card auth-card input-field ">
       <h2>Loan System</h2>
       <input type="text" placeholder="email" 
        />

       <input type="password" placeholder="password"
       
        />
       <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
       onClick=""
       >SignIn
       </button>
       <h5><a href="/signup">Don't have an Account ?</a></h5>

     </div>

   </div>
  )
}

export default SignIn

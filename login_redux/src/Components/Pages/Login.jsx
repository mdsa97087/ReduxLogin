import React from 'react'

function Login() {
  return (
    <div>
      <form action="" style={{
            display:'grid',
            margin:"100px auto",
            width:'500px'

      }}>
            <label htmlFor="">UserName:- </label>
            <input type="text" placeholder='Enter Email @gmail.com' />
            <br />
            <label htmlFor="">Password:- </label>
            <input type="password" placeholder='Enter Password' />
            <br />
            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
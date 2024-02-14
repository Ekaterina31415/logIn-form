const App = () => {
  return (
    <div className='container'>
      <div className='form-container'>

        <h1 className='title'>Log in</h1>

        <form className='form'>

          <input type='text' className='input login-input' id='login' placeholder="login"></input>
          
          <input type='text' className='input password-input' id='password' placeholder='password'></input>
          
        </form>
      </div>
    </div>
  )
}

export default App
import {Component} from 'react'
import {Link} from 'react-router-dom' ;
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }


  onChangeUsername = event => {
    this.setState({username: event.target.value})
    
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }



  onPassword = () => { 
    const {password} = this.state

    let PassErr = "" ;

    if (password.length === 0){
      PassErr = "Enter valid password" ; 
    }

    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          placeholder="password"
          onChange={this.onChangePassword}
        />
        <p className="err">{PassErr}</p>
      </>
    )
  }


     






  onUserName = () => {
    const {username} = this.state
    //console.log(username);
    let UsernameErr = "" ;
    


    if (username.length === 0){
        UsernameErr = "Please Enter a valid Name" ;
    }


       
    return (
      <>
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed "
          value={username}
          placeholder="username"
          onChange={this.onChangeUsername}
        />
        <p className="err">{UsernameErr}</p>
      </>
    )
  }



  
    
  render() {     
    //console.log(username);

    const {username , password} = this.state ;
    console.log(username) ;
    console.log(password) ; 
    
    return (
      <div className="login-container">
        <form className="form-container" >
          <div className="input-container">{this.onUserName()}</div>
          <div className="input-container">{this.onPassword()}</div>
          <button type="submit" className="login-button"  ><Link to="/dashboard"> Login </Link>
          </button>
          <p>Dont have account <span> <Link to="/Register" >Click Here </Link></span></p>
        </form>
      </div>
    )
  }
};

export default  LoginForm ;

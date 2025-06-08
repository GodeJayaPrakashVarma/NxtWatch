import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import DarkMode from '../../context/DarkMode'
import {
  BgContainer,
  BodyContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  FormLabel,
  FormInput,
  ShowContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from '../styledComponents/styledComponents'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  checkAuthorization = async () => {
    const {history} = this.props
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const apiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  onSubmitLogin = e => {
    e.preventDefault()
    this.checkAuthorization()
    this.setState({username: '', password: ''})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeShowPassword = e => {
    this.setState({showPassword: e.target.checked})
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, errorMsg} = this.state
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const color = isDarkTheme ? 'white' : '#475569'
          return (
            <BgContainer isDarkTheme={isDarkTheme}>
              <BodyContainer>
                <FormContainer
                  onSubmit={this.onSubmitLogin}
                  isDarkTheme={isDarkTheme}
                >
                  <WebsiteLogo
                    src={websiteLogo}
                    alt="website logo"
                  ></WebsiteLogo>
                  <InputContainer>
                    <FormLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="username"
                      isDarkTheme={isDarkTheme}
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                    ></FormInput>
                    <FormLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </FormLabel>
                    <FormInput
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      isDarkTheme={isDarkTheme}
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    ></FormInput>
                    <ShowContainer>
                      <CheckboxInput
                        type="checkbox"
                        id="show"
                        checked={showPassword}
                        onChange={this.onChangeShowPassword}
                      ></CheckboxInput>
                      <CheckboxLabel htmlFor="show" isDarkTheme={isDarkTheme}>
                        Show Password
                      </CheckboxLabel>
                    </ShowContainer>
                    <LoginButton type="submit">Login</LoginButton>
                  </InputContainer>
                  {errorMsg ? <ErrorMsg>{`*${errorMsg}`}</ErrorMsg> : <p> </p>}
                </FormContainer>
              </BodyContainer>
            </BgContainer>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}

export default Login

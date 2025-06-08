import {useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import DarkMode from '../../context/DarkMode'
import 'reactjs-popup/dist/index.css'
import {
  NavContainer,
  HeaderLogo,
  NavSmOptions,
  StyledFaBars,
  StyledFaMoon,
  StyledBsSun,
  StyledIoLogOutOutline,
  ProfileImg,
  IconButton,
  SmIcons,
  LgIcons,
  LogoutButton,
  PopupContainer,
  PopupContent,
  PopupButtons,
  CancelButton,
  ConfirmButton,
  StyledPopup,
  MobileMenuContainer,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileMenuLink,
  CloseButton,
  MobileMenuHeader,
} from '../styledComponents/styledComponents'


const Header = props => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <DarkMode.Consumer>
      {value => {
        const {isDarkTheme, changeMode} = value
        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onChangeMode = () => {
          changeMode()
        }

        const onClickLogout = () => {
          Cookies.remove('jwt_token')
          const {history} = props
          history.replace('/')
        }

        const toggleMobileMenu = () => {
          setMobileMenuOpen(!isMobileMenuOpen)
        }

        return (
          <>
            <NavContainer isDarkTheme={isDarkTheme}>
              <Link to="/">
                <HeaderLogo src={websiteLogo} alt="nxt watch logo"></HeaderLogo>
              </Link>
              <NavSmOptions>
                <IconButton onClick={onChangeMode} data-testid="theme">
                  {isDarkTheme ? <StyledBsSun /> : <StyledFaMoon />}
                </IconButton>
                <SmIcons>
                  <IconButton onClick={toggleMobileMenu}>
                    <StyledFaBars isDarkTheme={isDarkTheme} />
                  </IconButton>
                  <StyledPopup
                    isDarkTheme={isDarkTheme}
                    modal
                    trigger={
                      <IconButton>
                        <StyledIoLogOutOutline isDarkTheme={isDarkTheme} />
                      </IconButton>
                    }
                  >
                    {close => (
                      <PopupContainer isDarkTheme={isDarkTheme}>
                        <PopupContent isDarkTheme={isDarkTheme}>
                          Are you sure you want to logout?
                        </PopupContent>
                        <PopupButtons>
                          <CancelButton
                            isDarkTheme={isDarkTheme}
                            onClick={close}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            isDarkTheme={isDarkTheme}
                            onClick={onClickLogout}
                          >
                            Confirm
                          </ConfirmButton>
                        </PopupButtons>
                      </PopupContainer>
                    )}
                  </StyledPopup>
                </SmIcons>
                <LgIcons>
                  <IconButton>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    ></ProfileImg>
                  </IconButton>
                  <StyledPopup
                    isDarkTheme={isDarkTheme}
                    modal
                    trigger={
                      <LogoutButton isDarkTheme={isDarkTheme}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <PopupContainer isDarkTheme={isDarkTheme}>
                        <PopupContent isDarkTheme={isDarkTheme}>
                          Are you sure you want to logout?
                        </PopupContent>
                        <PopupButtons>
                          <CancelButton
                            isDarkTheme={isDarkTheme}
                            onClick={close}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            isDarkTheme={isDarkTheme}
                            onClick={onClickLogout}
                          >
                            Confirm
                          </ConfirmButton>
                        </PopupButtons>
                      </PopupContainer>
                    )}
                  </StyledPopup>
                </LgIcons>
              </NavSmOptions>
            </NavContainer>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <MobileMenuOverlay onClick={toggleMobileMenu} />
            )}
            <MobileMenuContainer
              isOpen={isMobileMenuOpen}
              isDarkTheme={isDarkTheme}
            >
              <MobileMenuHeader isDarkTheme={isDarkTheme}>
                <CloseButton
                  onClick={toggleMobileMenu}
                  isDarkTheme={isDarkTheme}
                >
                  ×
                </CloseButton>
              </MobileMenuHeader>
              <MobileMenuContent isDarkTheme={isDarkTheme}>
                <MobileMenuLink
                  to="/"
                  isDarkTheme={isDarkTheme}
                  onClick={toggleMobileMenu}
                >
                  Home
                </MobileMenuLink>
                <MobileMenuLink
                  to="/trending"
                  isDarkTheme={isDarkTheme}
                  onClick={toggleMobileMenu}
                >
                  Trending
                </MobileMenuLink>
                <MobileMenuLink
                  to="/gaming"
                  isDarkTheme={isDarkTheme}
                  onClick={toggleMobileMenu}
                >
                  Gaming
                </MobileMenuLink>
                <MobileMenuLink
                  to="/savedvideos"
                  isDarkTheme={isDarkTheme}
                  onClick={toggleMobileMenu}
                >
                  Saved Videos
                </MobileMenuLink>
              </MobileMenuContent>
            </MobileMenuContainer>
          </>
        )
      }}
    </DarkMode.Consumer>
  )
}

export default withRouter(Header)

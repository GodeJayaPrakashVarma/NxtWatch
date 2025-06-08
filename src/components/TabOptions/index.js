import {Component} from 'react'
import {withRouter} from 'react-router-dom' // Import withRouter
import DarkMode from '../../context/DarkMode'
import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  TabContactsContainer,
  TabsContainer,
  TabLink,
  TabItem,
  TabButton,
  IconWrapper,
  ContactsContainer,
  SocialIconContainer,
  ContactHeading,
  ContactDescription,
  StyledFacebook,
  StyledTwitter,
  StyledLinkedin,
} from '../styledComponents/styledComponents'

const tabsList = [
  {id: 'home', displayText: 'Home', icon: MdHome},
  {id: 'trending', displayText: 'Trending', icon: FaFire},
  {id: 'gaming', displayText: 'Gaming', icon: SiYoutubegaming},
  {id: 'savedvideos', displayText: 'Saved Videos', icon: CgPlayListAdd},
]

class TabOptions extends Component {
  getActiveTabId = () => {
    const {location} = this.props
    const currentPath = location.pathname.slice(1) // remove leading slash
    // If path is empty or '/', it's home
    if (!currentPath || currentPath === '/') return 'home'
    // Otherwise return the current path
    return currentPath
  }

  render() {
    const activeTabId = this.getActiveTabId()

    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TabContactsContainer isDarkTheme={isDarkTheme}>
              <TabsContainer isDarkTheme={isDarkTheme}>
                {tabsList.map(each => (
                  <TabItem
                    value={each.id}
                    activeTabId={activeTabId}
                    isDarkTheme={isDarkTheme}
                    key={each.id}
                  >
                    <TabLink to={`/${each.id === 'home' ? '' : each.id}`}>
                      <IconWrapper value={each.id} activeTabId={activeTabId}>
                        <each.icon />
                      </IconWrapper>
                      <TabButton
                        value={each.id}
                        activeTabId={activeTabId}
                        isDarkTheme={isDarkTheme}
                      >
                        {each.displayText}
                      </TabButton>
                    </TabLink>
                  </TabItem>
                ))}
              </TabsContainer>
              <ContactsContainer>
                <ContactHeading isDarkTheme={isDarkTheme}>CONTACT US</ContactHeading>
                <SocialIconContainer>
                  <StyledFacebook></StyledFacebook>
                  <StyledTwitter></StyledTwitter>
                  <StyledLinkedin></StyledLinkedin>
                </SocialIconContainer>
                <ContactDescription isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactsContainer>
            </TabContactsContainer>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}

export default withRouter(TabOptions)

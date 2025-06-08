import Header from '../Header'
import DarkMode from '../../context/DarkMode'
import TabOptions from '../TabOptions'
import {
  EmptyHeading,
  EmptyImgContainer,
  EmptyImg,
  EmptyText,
  EmptyBgContainer,
  EmptyContainer,
} from '../styledComponents/styledComponents'

const NotFound = () => {
  return (
    <DarkMode.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <>
            <Header />
            <EmptyBgContainer isDarkTheme={isDarkTheme}>
              <TabOptions />
              <EmptyContainer isDarkTheme={isDarkTheme}>
                <EmptyImgContainer isDarkTheme={isDarkTheme}>
                  <EmptyImg src={failureImg} alt="not found"></EmptyImg>
                  <EmptyHeading isDarkTheme={isDarkTheme}>
                    Page Not Found
                  </EmptyHeading>
                  <EmptyText isDarkTheme={isDarkTheme}>
                    We are sorry, the page you requested could not be found.
                  </EmptyText>
                </EmptyImgContainer>
              </EmptyContainer>
            </EmptyBgContainer>
          </>
        )
      }}
    </DarkMode.Consumer>
  )
}

export default NotFound

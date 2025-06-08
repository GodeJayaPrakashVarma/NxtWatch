import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabOptions from '../TabOptions'
import DarkMode from '../../context/DarkMode'
import {SiYoutubegaming} from 'react-icons/si'
import {formatDistanceToNow} from 'date-fns'
import {
  HomeBgContainer,
  TrendingBody,
  TrendingHeadingContainer,
  TrendingHeading,
  FireContainer,
  TrendingUl,
  TrendingItem,
  TrendingLink,
  TrendingImg,
  TrendingTextContainer,
  TrendingChannelLogo,
  TrendingTemp,
  TrendingTitle,
  TrendingTempChannel,
  TrendingChannel,
  TrendingViewsTime,
  TrendingViews,
  StyledLuDot,
  TrendingTime,
  EmptyImgContainer,
  EmptyImg,
  EmptyHeading,
  EmptyText,
  RetryButton,
  IconWrapper,
  GamingLink,
  GamingItem,
  GamingImg,
  GamingTitle,
  GamingTextContainer,
  GamingViews,
  GamingUl,
} from '../styledComponents/styledComponents'
import ThumbnailCard from '../ThumbnailCard'

const trendingStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    trendingList: [],
    isLoading: false,
    trendingStatus: '',
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({isLoading: true})
    const token = Cookies.get('jwt_token')
    const options = {headers: {Authorization: `Bearer ${token}`}, method: 'GET'}
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const formattedData = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))
    console.log(formattedData)
    if (response.ok) {
      this.setState({
        isLoading: false,
        trendingStatus: trendingStatusConstants.success,
        trendingList: formattedData,
      })
    } else {
      this.setState({
        isLoading: false,
        trendingStatus: trendingStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getThumbnailsList)
  }

  onSuccess = isDarkTheme => {
    const {trendingList} = this.state
    return (
      <>
        <TrendingHeadingContainer isDarkTheme={isDarkTheme}>
          <FireContainer isDarkTheme={isDarkTheme}>
            <SiYoutubegaming />
          </FireContainer>
          <TrendingHeading isDarkTheme={isDarkTheme}>Gaming</TrendingHeading>
        </TrendingHeadingContainer>
        <GamingUl isDarkTheme={isDarkTheme}>
          {trendingList.map(each => (
            <GamingItem key={each.id}>
              <GamingLink to={`/videos/${each.id}`}>
                <GamingImg src={each.thumbnailUrl}></GamingImg>
                <GamingTextContainer>
                  <GamingTitle isDarkTheme={isDarkTheme}>
                    {each.title}
                  </GamingTitle>
                  <GamingViews>{`${each.viewCount} Worldwide`}</GamingViews>
                </GamingTextContainer>
              </GamingLink>
            </GamingItem>
          ))}
        </GamingUl>
      </>
    )
  }

  onFailure = isDarkTheme => {
    const failureImg = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <EmptyImgContainer>
        <EmptyImg src={failureImg} alt='failure view'></EmptyImg>
        <EmptyHeading isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </EmptyHeading>
        <EmptyText isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </EmptyText>
        <RetryButton onClick={this.onClickRetry} isDarkTheme={isDarkTheme}>
          Retry
        </RetryButton>
      </EmptyImgContainer>
    )
  }

  checkThumbnailStatus = isDarkTheme => {
    const {trendingStatus} = this.state
    switch (trendingStatus) {
      case trendingStatusConstants.success:
        return this.onSuccess(isDarkTheme)
      default:
        return this.onFailure(isDarkTheme)
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer data-testid="gaming">
                <TabOptions />
                <TrendingBody isDarkTheme={isDarkTheme}>
                  {isLoading ? (
                    <div className="loader-container" data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height="50"
                        width="50"
                      />
                    </div>
                  ) : (
                    this.checkThumbnailStatus(isDarkTheme)
                  )}
                </TrendingBody>
              </HomeBgContainer>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}
export default Gaming

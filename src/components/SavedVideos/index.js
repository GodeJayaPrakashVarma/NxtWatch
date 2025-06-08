import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabOptions from '../TabOptions'
import DarkMode from '../../context/DarkMode'
import {FaFire} from 'react-icons/fa'
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
  EmptyContainer,
} from '../styledComponents/styledComponents'
import ThumbnailCard from '../ThumbnailCard'

const trendingStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SavedVideos extends Component {
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
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const formattedData = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))
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

  onSuccess = (isDarkTheme, savedList) => {
    const trendingList = savedList
    return (
      <>
        <TrendingHeadingContainer isDarkTheme={isDarkTheme}>
          <FireContainer isDarkTheme={isDarkTheme}>
            <FaFire />
          </FireContainer>
          <TrendingHeading isDarkTheme={isDarkTheme}>
            Saved Videos
          </TrendingHeading>
        </TrendingHeadingContainer>
        <TrendingUl isDarkTheme={isDarkTheme}>
          {trendingList.map(each => (
            <TrendingItem key={each.id}>
              <TrendingLink to={`/videos/${each.id}`}>
                <TrendingImg src={each.thumbnailUrl}></TrendingImg>
                <TrendingTextContainer>
                  <TrendingChannelLogo
                    src={each.channel.profileImageUrl}
                  ></TrendingChannelLogo>
                  <TrendingTemp>
                    <TrendingTitle isDarkTheme={isDarkTheme}>
                      {each.title}
                    </TrendingTitle>
                    <TrendingTempChannel>
                      <TrendingChannel>{each.channel.name}</TrendingChannel>
                      <TrendingViewsTime>
                        <TrendingViews>{each.viewCount}</TrendingViews>
                        <StyledLuDot></StyledLuDot>
                        <TrendingTime>{`${formatDistanceToNow(
                          new Date(each.publishedAt),
                        )} ago`}</TrendingTime>
                      </TrendingViewsTime>
                    </TrendingTempChannel>
                  </TrendingTemp>
                </TrendingTextContainer>
              </TrendingLink>
            </TrendingItem>
          ))}
        </TrendingUl>
      </>
    )
  }

  onEmptyList = isDarkTheme => {
    return (
      <EmptyContainer isDarkTheme={isDarkTheme}>
        <EmptyImgContainer isDarkTheme={isDarkTheme}>
          <EmptyImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          ></EmptyImg>
          <EmptyHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </EmptyHeading>
          <EmptyText isDarkTheme={isDarkTheme}>
            You can save your videos while watching them
          </EmptyText>
        </EmptyImgContainer>
      </EmptyContainer>
    )
  }

  checkThumbnailStatus = (isDarkTheme, savedList) => {
    if (savedList.length === 0) {
      return this.onEmptyList(isDarkTheme)
    } else {
      return this.onSuccess(isDarkTheme, savedList)
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme, savedList} = value
          console.log('saved', savedList)
          return (
            <>
              <Header />
              <HomeBgContainer isDarkTheme={isDarkTheme} data-testid="savedVideos">
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
                    this.checkThumbnailStatus(isDarkTheme, savedList)
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
export default SavedVideos

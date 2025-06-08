import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabOptions from '../TabOptions'
import DarkMode from '../../context/DarkMode'
import {formatDistanceToNow} from 'date-fns'
import {
  HomeBgContainer,
  VideoItemBody,
  StyledReactPlayer,
  VideoTextContainer,
  VideoTitle,
  VideoViewsTime,
  VideoViews,
  StyledLuDot,
  VideoTime,
  VideoViewsButton,
  VideoButtonsContainer,
  VideoLikeButton,
  VideoDislikeButton,
  VideoSaveButton,
  StyledLike,
  StyledDislike,
  StyledSave,
  HorizontalLine,
  VideoChannelContainer,
  VideoChannelLogo,
  VideoChannelName,
  VideoChannelNameContainer,
  VideoChannelSubscribers,
  VideoDescription,
  EmptyImg,
  EmptyHeading,
  EmptyText,
  RetryButton,
  EmptyImgContainer,
} from '../styledComponents/styledComponents'

class VideoItemDetails extends Component {
  state = {
    isLoading: false,
    videoDetails: {channel: {}},
    videoStatus: true,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({isLoading: true})
    const {match} = this.props
    const {id} = match.params
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {headers: {Authorization: `Bearer ${token}`}, method: 'GET'}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const details = data.video_details
    const formattedData = {
      id: details.id,
      title: details.title,
      videoUrl: details.video_url,
      thumbnailUrl: details.thumbnail_url,
      channel: {
        name: details.channel.name,
        profileImageUrl: details.channel.profile_image_url,
        subscriberCount: details.channel.subscriber_count,
      },
      viewCount: details.view_count,
      publishedAt: details.published_at,
      description: details.description,
    }
    if (response.ok) {
      this.setState({
        isLoading: false,
        videoDetails: formattedData,
        videoStatus: true,
      })
    } else {
      this.setState({isLoading: false, videoStatus: true})
    }
  }

  onClickLike = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      console.log('liked')
      this.setState({isLiked: true, isDisliked: false})
    }
  }

  onClickDislike = () => {
    const {isDisliked} = this.state
    if (isDisliked) {
      this.setState({isDisliked: false})
    } else {
      console.log('disliked')
      this.setState({isLiked: false, isDisliked: true})
    }
  }

  render() {
    const {isLoading, videoDetails, videoStatus, isLiked, isDisliked} =
      this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme, addToSaved, removeFromSaved, savedList} = value
          const isSaved = savedList.some(each => each.id === id)
          const onClickSave = () => {
            if (isSaved) {
              removeFromSaved(videoDetails)
            } else {
              addToSaved(videoDetails)
            }
          }

          const failureImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          return (
            <>
              {isLoading && (
                <div className="loader-container" data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height="50"
                    width="50"
                  />
                </div>
              )}
              <Header />
              <HomeBgContainer>
                <TabOptions />
                {videoStatus ? (
                  <VideoItemBody
                    isDarkTheme={isDarkTheme}
                    data-testid="videoItemDetails"
                  >
                    <StyledReactPlayer
                      url={videoUrl}
                      controls
                      width="100%"
                    ></StyledReactPlayer>
                    <VideoTextContainer>
                      <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                      <VideoViewsButton>
                        <VideoViewsTime>
                          <VideoViews>{`${viewCount} views`}</VideoViews>
                          <StyledLuDot></StyledLuDot>
                        </VideoViewsTime>
                        <VideoButtonsContainer>
                          <VideoLikeButton
                            isLiked={isLiked}
                            onClick={this.onClickLike}
                          >
                            <StyledLike></StyledLike>Like
                          </VideoLikeButton>
                          <VideoDislikeButton
                            isDisliked={isDisliked}
                            onClick={this.onClickDislike}
                          >
                            <StyledDislike></StyledDislike>
                            Dislike
                          </VideoDislikeButton>
                          <VideoSaveButton
                            isSaved={isSaved}
                            onClick={onClickSave}
                            value={videoDetails}
                          >
                            <StyledSave></StyledSave>Save
                          </VideoSaveButton>
                        </VideoButtonsContainer>
                      </VideoViewsButton>
                      <HorizontalLine></HorizontalLine>
                      <VideoChannelContainer>
                        <VideoChannelLogo
                          src={profileImageUrl}
                          alt="website logo"
                        ></VideoChannelLogo>
                        <VideoChannelNameContainer>
                          <VideoChannelName isDarkTheme={isDarkTheme}>
                            {name}
                          </VideoChannelName>
                          <VideoChannelSubscribers>
                            {`${subscriberCount} subscribers`}
                          </VideoChannelSubscribers>
                        </VideoChannelNameContainer>
                      </VideoChannelContainer>
                      <VideoDescription isDarkTheme={isDarkTheme}>
                        {description}
                      </VideoDescription>
                    </VideoTextContainer>
                  </VideoItemBody>
                ) : (
                  <EmptyImgContainer>
                    <EmptyImg src={failureImg} alt="failure view"></EmptyImg>
                    <EmptyHeading isDarkTheme={isDarkTheme}>
                      Oops! Something Went Wrong
                    </EmptyHeading>
                    <EmptyText isDarkTheme={isDarkTheme}>
                      TWe are having some trouble to complete your request.
                      Please try again.
                    </EmptyText>
                    <RetryButton
                      onClick={this.onClickRetry}
                      isDarkTheme={isDarkTheme}
                    >
                      Retry
                    </RetryButton>
                  </EmptyImgContainer>
                )}
              </HomeBgContainer>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}

export default VideoItemDetails

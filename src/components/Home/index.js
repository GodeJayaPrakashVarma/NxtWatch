import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import DarkMode from '../../context/DarkMode'
import TabOptions from '../TabOptions'
import {IoClose} from 'react-icons/io5'

import {
  HomeBgContainer,
  HomeBody,
  BannerContainer,
  BannerTextContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerClose,
  ThumbnailsContainer,
  SearchContainer,
  SearchBox,
  SearchButton,
  SearchIcon,
  Thumbnailul,
  EmptyImgContainer,
  EmptyImg,
  EmptyHeading,
  EmptyText,
  RetryButton,
  EmptyContainer,
} from '../styledComponents/styledComponents'
import ThumbnailCard from '../ThumbnailCard'

const thumbnailStatusConstants = {
  success: 'SUCCESS',
  empty: 'EMPTY',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    bannerDisplay: true,
    activeTabId: '',
    searchInput: '',
    thumbnailsList: [],
    isLoading: false,
    thumbnailStatus: '',
  }

  componentDidMount() {
    this.getThumbnailsList()
  }

  getThumbnailsList = async () => {
    this.setState({isLoading: true})
    const token = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const options = {headers: {Authorization: `Bearer ${token}`}, method: 'GET'}
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
    console.log(formattedData)
    if (response.ok) {
      if (formattedData.length === 0) {
        this.setState({
          isLoading: false,
          thumbnailStatus: thumbnailStatusConstants.empty,
          thumbnailsList: formattedData,
        })
      } else {
        this.setState({
          isLoading: false,
          thumbnailStatus: thumbnailStatusConstants.success,
          thumbnailsList: formattedData,
        })
      }
    } else {
      this.setState({
        isLoading: false,
        thumbnailStatus: thumbnailStatusConstants.failure,
      })
    }
  }

  onBannerClose = () => {
    this.setState({bannerDisplay: false})
  }

  onChangeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  onClickSearch = () => {
    this.getThumbnailsList()
  }

  onChangeTab = e => {
    this.setState({activeTabId: e.target.value})
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getThumbnailsList)
  }

  onSuccess = () => {
    const {thumbnailsList} = this.state
    return (
      <Thumbnailul>
        {thumbnailsList.map(each => (
          <ThumbnailCard key={each.id} thumbnailDetails={each} />
        ))}
      </Thumbnailul>
    )
  }

  onEmpty = isDarkTheme => {
    return (
      <EmptyContainer>
        <EmptyImgContainer>
          <EmptyImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          ></EmptyImg>
          <EmptyHeading isDarkTheme={isDarkTheme}>
            No Search Results Found
          </EmptyHeading>
          <EmptyText isDarkTheme={isDarkTheme}>
            Try different keywords or remove search filter
          </EmptyText>
          <RetryButton onClick={this.onClickRetry} isDarkTheme={isDarkTheme}>
            Retry
          </RetryButton>
        </EmptyImgContainer>
      </EmptyContainer>
    )
  }

  onFailure = isDarkTheme => {
    const failureImg = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <EmptyImgContainer>
        <EmptyImg src={failureImg} alt="failure view"></EmptyImg>
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
    const {thumbnailStatus} = this.state
    switch (thumbnailStatus) {
      case thumbnailStatusConstants.success:
        return this.onSuccess()
      case thumbnailStatusConstants.empty:
        return this.onEmpty(isDarkTheme)
      default:
        return this.onFailure(isDarkTheme)
    }
  }

  render() {
    const {bannerDisplay, searchInput, isLoading, activeTabId} = this.state
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer data-testid="home">
                <TabOptions />
                <HomeBody isDarkTheme={isDarkTheme}>
                  {bannerDisplay && (
                    <BannerContainer data-testid="banner">
                      <BannerTextContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        ></BannerLogo>
                        <BannerText>
                          Buy Nxt Watch Premium Prepaid plans with UPI
                        </BannerText>
                        <BannerButton>GET IT NOW</BannerButton>
                      </BannerTextContainer>
                      <BannerClose
                        onClick={this.onBannerClose}
                        data-testid="close"
                      >
                        <IoClose />
                      </BannerClose>
                    </BannerContainer>
                  )}
                  <ThumbnailsContainer>
                    <SearchContainer>
                      <SearchBox
                        type="search"
                        value={searchInput}
                        placeholder="Search"
                        onChange={this.onChangeSearch}
                        isDarkTheme={isDarkTheme}
                      ></SearchBox>
                      <SearchButton
                        isDarkTheme={isDarkTheme}
                        data-testid="searchButton"
                        onClick={this.onClickSearch}
                      >
                        <SearchIcon isDarkTheme={isDarkTheme}></SearchIcon>
                      </SearchButton>
                    </SearchContainer>
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
                  </ThumbnailsContainer>
                </HomeBody>
              </HomeBgContainer>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}
export default Home

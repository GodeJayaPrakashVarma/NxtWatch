import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import DarkMode from '../../context/DarkMode'
import {
  ThumbnailContainer,
  ThumbnailItem,
  ThumbnailImg,
  ThumbnailDetails,
  ThumbnailChannelLogo,
  ThumbnailTextContainer,
  ThumbnailTitle,
  ThumbnailChannel,
  ViewsTimeContainer,
  ThumbnailViews,
  StyledLuDot,
  ThumbnailTime,
} from '../styledComponents/styledComponents'

const ThumbnailCard = props => {
  const {thumbnailDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    thumbnailDetails

  return (
    <DarkMode.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ThumbnailContainer to={`/videos/${id}`}>
            <ThumbnailItem>
              <ThumbnailImg
                src={thumbnailUrl}
                alt="video thumbnail"
              ></ThumbnailImg>
              <ThumbnailDetails>
                <ThumbnailChannelLogo
                  src={channel.profileImageUrl}
                  alt="channel logo"
                ></ThumbnailChannelLogo>
                <ThumbnailTextContainer>
                  <ThumbnailTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </ThumbnailTitle>
                  <ThumbnailChannel>{channel.name}</ThumbnailChannel>
                  <ViewsTimeContainer>
                    <ThumbnailViews>{viewCount}</ThumbnailViews>
                    <StyledLuDot></StyledLuDot>
                    <ThumbnailTime>
                      {`${formatDistanceToNow(new Date(publishedAt))} ago`}
                    </ThumbnailTime>
                  </ViewsTimeContainer>
                </ThumbnailTextContainer>
              </ThumbnailDetails>
            </ThumbnailItem>
          </ThumbnailContainer>
        )
      }}
    </DarkMode.Consumer>
  )
}
export default ThumbnailCard

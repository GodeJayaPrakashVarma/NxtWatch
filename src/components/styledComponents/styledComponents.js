import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {
  FaMoon,
  FaBars,
  FaCircle,
  FaFire,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import {BsSun, BsDot} from 'react-icons/bs'
import {IoLogOutOutline} from 'react-icons/io5'
import {MdSearch, MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'

export const BgContainer = styled.div`
    background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const BodyContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.form`
    background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
    width: 100%;
    ${props => !props.isDarkTheme && 'box-shadow: 0px 4px 16px 0px #bfbfbf;'}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    padding: 20px;
    border-radius: 10px;
    padding-bottom: 50px;

    @media (min-width: 577px){
        width: 40%;
        padding: 50px;
    }
`
export const WebsiteLogo = styled.img`
    width: 150px;
    margin-bottom: 30px;
    margin-top: 20px;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormLabel = styled.label`
    font-size:15px;
    font-weight: 500;
    margin-bottom: 5px;
    color: ${props => (props.isDarkTheme ? 'white' : '#475569')}
`

export const FormInput = styled.input`
    background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
    color: ${props => (props.isDarkTheme ? 'white' : '#475569')};
    border: 1px solid #94a3b8;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 20px;
`

export const ShowContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const CheckboxInput = styled.input`cursor: pointer;`

export const CheckboxLabel = styled.label`
    margin-left: 10px;
    color: ${props => (props.isDarkTheme ? 'white' : '#181818')};
    cursor: pointer;
`

export const LoginButton = styled.button`
    background-color: #3b82f6;
    border: none;
    color: white;
    border-radius: 10px;
    height: 40px;
    font-weight: bold;
    cursor: pointer;
`

export const ErrorMsg = styled.p`
    color: #ff0000;
    align-self: flex-start;
`

export const NavContainer = styled.nav`
    background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 577px){
        padding: 50px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`

export const HeaderLogo = styled.img`
    width: 120px;
`

export const NavSmOptions = styled.div`
    display: flex;
    align-items: center;
`

export const StyledFaBars = styled(FaBars)`
    font-size: 20px;
    color: ${props => (props.isDarkTheme ? 'white' : '#181818')};
    margin-right: 10px;
`

export const StyledFaMoon = styled(FaMoon)`
    font-size: 20px;
    margin-right: 10px;

     @media (min-width: 577px){
        font-size: 25px;
    }
`

export const StyledBsSun = styled(BsSun)`
    font-size: 20px;
    color: white;
    margin-right: 10px;

     @media (min-width: 577px){
        font-size: 25px;
    }
`

export const StyledIoLogOutOutline = styled(IoLogOutOutline)`
    font-size: 30px;
    color: ${props => (props.isDarkTheme ? 'white' : '#181818')};
`

export const ProfileImg = styled.img`
    width: 30px;
    margin-right: 20px;
   
`

export const IconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const SmIcons = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 768px){
        display: none;
    }
`

export const LgIcons = styled.div`
    display: none;

    @media (min-width: 768px){
        display: flex;
        align-items: center;
    }
`

export const LogoutButton = styled.button`
    height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    border: ${props =>
      props.isDarkTheme ? '1px solid white' : '1px solid #3b82f6'};
    color : ${props => (props.isDarkTheme ? 'white' : '#3b82f6')};
    background-color: transparent;
    cursor: pointer;
`

export const StyledPopup = styled(Popup)`
    &-overlay {
    background: rgba(0, 0, 0, 0.6); /* Dimmed background */
    z-index: 1000;
  }

  &-content {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    max-width: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
  width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PopupContent = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 20px;
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
`

export const HomeBgContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => (props.isDarkTheme ? 'black' : 'white')}
`

export const TabContactsContainer = styled.div`
    width: 20%;
    min-height: 100vh;
    background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
    margin-top: 0;
    display: none;

    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
        gap: 300px;
    }
`

export const TabsContainer = styled.ul`
    background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
    list-style: none;
    margin-top: 0;
    padding:0;
    padding-top: 40px;
    display: none;

    @media (min-width: 768px){
        display: block;
    }
`

export const TabLink = styled(Link)`
  text-decoration: none;
  display: flex;
    align-items: center;
    gap: 15px;
`

export const TabItem = styled.li`
    width: 100%;
    height: 40px;
    width: 100%;
    padding-left: 20px;
    padding-top: 5px;
    margin-bottom: 10px;
    background-color: ${props => {
      const {activeTabId, value, isDarkTheme} = props
      if (isDarkTheme) {
        return activeTabId === value ? '#383838' : '#212121'
      } else {
        return activeTabId === value ? '#F1F5F9' : 'white'
      }
    }};
`

export const TabButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: 500;
    color: ${props => (props.isDarkTheme ? 'white' : 'black')};
    cursor: pointer;
    margin: 0;
`

export const IconWrapper = styled.div`
    font-size: 25px;
    color: ${props =>
      props.activeTabId === props.value ? '#ff0000' : '#616e7c'};
    margin: 0;
`

export const ContactsContainer = styled.div`
    padding: 20px;
`

export const ContactHeading = styled.h1`
    color: ${props => (props.isDarkTheme ? 'white' : '#314861')};
    font-size: 20px;
`

export const SocialIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
`

export const StyledFacebook = styled(FaFacebook)`
    color: #325495;
`

export const StyledTwitter = styled(AiFillTwitterCircle)`
    font-size: 35px;
    color: #3FABF1;
`

export const StyledLinkedin = styled(FaLinkedin)`
    color: #0076B0;
`

export const ContactDescription = styled.p`
    color: ${props => (props.isDarkTheme ? 'white' : '#314861')};
    font-size: 17px;
    font-weight: 500;
`

export const HomeBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
    min-height: 100vh;
`

export const BannerContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-positon: center;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const BannerTextContainer = styled.div``

export const BannerLogo = styled.img`
    width: 150px;
`

export const BannerText = styled.p`
    font-size: 20px;
`

export const BannerButton = styled.button`
    background: none;
    border: 1px solid black;
    padding: 10px;
    font-weight: 500;
`

export const BannerClose = styled.button`
    background: none;
    border:none;
    width: 30px;
    cursor: pointer;
`

export const ThumbnailsContainer = styled.div`
    padding: 20px;
`

export const SearchContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const SearchBox = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid #E0E0E0E;
    padding-left: 20px;
    color: ${props => (props.isDarkTheme ? 'white' : '#E0E0E0E')};
    background-color: ${props => (props.isDarkTheme ? 'transparent' : 'white')};
    box-shadow: none;
`

export const SearchIcon = styled(MdSearch)`
    font-size: 15px;
    color : ${props => (props.isDarkTheme ? 'white' : 'black')}
`

export const SearchButton = styled.button`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 3px;
    border: 1px solid #E0E0E0E;
    background-color: ${props => (props.isDarkTheme ? '#313031' : '#F4F4F4')};
`

export const Thumbnailul = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     @media (min-width: 576px) and (max-width: 767px){
        gap: 4%;
    };

    @media (min-width: 768px){
        gap: 2%;
    }
`

export const ThumbnailContainer = styled(Link)`
    width: 100%;
    margin-bottom: 40px;
    text-decoration: none;

    @media (min-width: 576px) and (max-width: 767px){
        width: 48%;
    };

    @media (min-width: 768px){
        width: 32%
    }
`
export const ThumbnailItem = styled.li``

export const ThumbnailImg = styled.img`
    width: 100%;
`

export const ThumbnailDetails = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 20px;
`

export const ThumbnailChannelLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 20px;
`

export const ThumbnailTextContainer = styled.div`
    width: 100%;
`

export const ThumbnailTitle = styled.p`
    margin-top:0;
    color: ${props => (props.isDarkTheme ? 'white' : '#212121')};
    font-weight: 500;
    margin-bottom: 0;
`

export const ThumbnailChannel = styled.p`
    color: #616e7c;
    font-weight: 500;
    margin-top: 10px;
`

export const ViewsTimeContainer = styled.div`
    display: flex;
    color: #616e7c;
    align-items: center;
    gap: 10px;
`

export const ThumbnailViews = styled.p`
    margin: 0;
    padding: 0;
`

export const StyledLuDot = styled(FaCircle)`
    margin: 0;
    padding: 0;
    font-size: 5px;
`

export const ThumbnailTime = styled.p`
    margin: 0;
    padding: 0;
`

export const EmptyImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    width: 60%;
    background-color: ${props => (props.isDarkTheme ? 'black' : '#F9F9F9')};
`

export const EmptyImg = styled.img`
    width: 100%;
`

export const EmptyHeading = styled.h1`
    color : ${props => (props.isDarkTheme ? 'white' : 'black')};

    @media (max-width: 767px){
        font-size: 20px;
    }
`

export const EmptyText = styled.p`
    color : ${props => (props.isDarkTheme ? 'white' : 'black')};

    @media (max-width: 767px){
        font-size: 15px;
    }
`

export const RetryButton = styled.button`
    background-color: #4f46e5;
    border: none;
    color: white;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
`

export const TrendingBody = styled.div`
    width: 100%;
    background-color: ${props => (props.isDarkTheme ? '##0F0F0F' : '#F9F9F9')};
    margin-top: 0;
`

export const TrendingHeadingContainer = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    background-color: ${props => (props.isDarkTheme ? '#181818' : '#F1F1F1')};

    @media (max-width: 767px){
        padding: 20px;
    };
`

export const FireContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#E1E9F0')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #FF031C;
`

export const TrendingHeading = styled.h1`
    margin: 0;
    color: ${props => (props.isDarkTheme ? 'white' : '#1E293B')};
    font-size: 25px;
    margin-left: 15px;
`

export const TrendingUl = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
    background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#F9F9F9')};
`

export const TrendingItem = styled.li`
    margin-bottom: 30px;
`

export const TrendingLink = styled(Link)`
    display: flex;
    text-decoration: none;

    @media (max-width: 575px){
        flex-direction: column;
    };
`

export const TrendingImg = styled.img`
    width: 350px;
    height: 200px;

    @media (max-width: 575px){
        width: 100%;
    };
`

export const TrendingTextContainer = styled.div`
    margin-left: 20px;

    @media (max-width: 575px){
        margin: 0;
        margin-top: 10px;
        display: flex;
    };
`

export const TrendingChannelLogo = styled.img`
    display: none;

    @media (max-width: 575px){
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 30px;
    };
`

export const TrendingTemp = styled.div`
    
    @media (max-width: 575px){
        display: block;
        margin-left: 10px;
    }
`

export const TrendingTitle = styled.p`
    margin-top:0;
    color: ${props => (props.isDarkTheme ? 'white' : '#212121')};
    font-weight: 500;
    margin-bottom: 0;

    @media (max-width: 575px){
        font-size: 15px;
    };
`

export const TrendingTempChannel = styled.div`

    @media (max-width: 575px){
        display: flex;
        gap: 20px;
        font-size: 12px;
    }
`

export const TrendingChannel = styled.p`
    color: #616e7c;
    font-weight: 500;
    margin-top: 10px;
`

export const TrendingViewsTime = styled.div`
    display: flex;
    color: #616e7c;
    align-items: center;
    gap: 10px;
    @media (max-width: 575px){
        font-size: 12px;
        gap: 10px;
    };
`

export const TrendingTime = styled.p`
    margin: 0;
`

export const TrendingViews = styled.p`
    margin: 0;
`

export const GamingUl = styled.ul`
    margin: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#F9F9F9')};


    @media (min-width: 576px){
        padding: 30px;
        gap: 2%;
    }
`

export const GamingLink = styled(Link)`
    text-decoration: none;
`

export const GamingImg = styled.img`
    width: 100%;
    
`

export const GamingItem = styled.li`
    margin: 10px;

    width: 44%;

    @media (min-width: 576px){
        width: 28%;
    }
`

export const GamingTextContainer = styled.div``

export const GamingTitle = styled.p`
    color: ${props => (props.isDarkTheme ? 'white' : 'black')};
    margin-bottom: 0;
`

export const GamingViews = styled.p`
    color: #616e7c;
    margin-top: 5px;
`

export const VideoItemBody = styled.div`
    background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#F9F9F9')};
    min-height: 100vh;
    width: 100%;

    @media (min-width: 768px){
        padding: 20px;
    }
`

export const StyledReactPlayer = styled(ReactPlayer)`
    width: 100%;
`

export const VideoTextContainer = styled.div`
    padding-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 767px){
        padding:20px;
    };
`

export const VideoTitle = styled.p`
    color: ${props => (props.isDarkTheme ? 'white' : '#212121')};
    font-weight: 500;
    margin-bottom: 0;
`

export const VideoViewsTime = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #616e7c;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const VideoViews = styled.p`
    margin: 0;
`

export const VideoTime = styled.p`
    maring: 0;
`

export const VideoViewsButton = styled.div`
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const VideoButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const VideoLikeButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: ${props => (props.isLiked ? '#2563eb' : '#64748b ')};
    cursor: pointer;
`

export const VideoDislikeButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: ${props => (props.isDisliked ? '#2563eb' : '#64748b ')};
    cursor: pointer;
`

export const VideoSaveButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: ${props => (props.isSaved ? '#2563eb' : '#64748b ')};
    cursor: pointer;
`

export const StyledLike = styled(BiLike)`
    margin-right: 5px;
`

export const StyledDislike = styled(BiDislike)`
    margin-right: 5px;
`

export const StyledSave = styled(CgPlayListAdd)`
    margin-right: 5px;
`

export const HorizontalLine = styled.hr`
    border: 1px solid #E8E7E7;
    margin-top: 25px;
`

export const VideoChannelContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

export const VideoChannelLogo = styled.img`
    width: 40px;
    height: 40px;
`

export const VideoChannelName = styled.p`
    margin: 0;
    color: ${props => (props.isDarkTheme ? 'white' : 'black')} ;
    font-weight: 400;
`

export const VideoChannelNameContainer = styled.div`
    margin:0;
    margin-left: 20px;
`

export const VideoChannelSubscribers = styled.p`
    margin: 0;
    margin-top: 5px;
    color: #616e7c;
    font-size: 15px;
`

export const VideoDescription = styled.p`
    color: ${props => (props.isDarkTheme ? 'white' : '#616e7c')} ;
`

export const EmptyBgContainer = styled.div`
    display: flex;
`

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  z-index: 1000;
  transition: left 0.3s ease-in-out;
  box-shadow: ${props =>
    props.isOpen ? '2px 0 10px rgba(0, 0, 0, 0.2)' : 'none'};
`

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const MobileMenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const MobileMenuLink = styled(Link)`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 8px 0;
  &:hover {
    color: #3b82f6;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  padding: 10px;
`

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-bottom: 1px solid ${props =>
    props.isDarkTheme ? '#424242' : '#e2e8f0'};
`

export const EmptyContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    height: 100vh;
    background-color: ${props => (props.isDarkTheme ? 'black' : '#F9F9F9')};
`

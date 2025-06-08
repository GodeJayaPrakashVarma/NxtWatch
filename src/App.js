import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import DarkMode from './context/DarkMode'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  changeMode = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSaved = details => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, {...details, isSaved: true}],
    }))
  }

  removeFromSaved = details => {
    this.setState(prevState => ({
      savedList: prevState.savedList.map(item => 
        item.id === details.id ? {...item, isSaved: false} : item
      ).filter(item => item.id !== details.id)
    }))
  }

  render() {
    const {isDarkTheme, savedList} = this.state
    return (
      <DarkMode.Provider
        value={{
          isDarkTheme,
          changeMode: this.changeMode,
          addToSaved: this.addToSaved,
          removeFromSaved: this.removeFromSaved,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute path="/SavedVideos" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </DarkMode.Provider>
    )
  }
}

export default App

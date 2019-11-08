import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGitHub} from '../redux/ducks/GH'
import User from "./User"
import Repos from "./Repos"
import I from "../lib/Icon"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const { user, repos } = useGitHub('aphanpo')

  return (
    <>
    <header>
      <I class="github"></I>
      <input id="ghsearch" placeholder="Search or jump to..."></input>
      <p>Pull requests</p>
      <p>Issues</p>
      <p>Marketplace</p>
      <p>Explore</p>
    </header>
    <div className="container">
      <User {...user} />
      <Repos repos={repos} />
    </div>
    </>
  )
}

export default Wrap

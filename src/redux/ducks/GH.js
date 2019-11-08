import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

// Action Definitions
const GET_USER = 'GitHub/GET_USER'
const GET_REPOS = 'GitHub/GET_REPOS'

// Initial State
const initialState = {
    user: {},
    repos: []
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload}
        case GET_REPOS:
            return { ...state, repos: action.payload}
        default:
            return initialState
    }
}

// Action Creators
function getUser(username) {
    return dispatch => { Axios.get(`http://api.github.com/users/${username}`).then(resp =>{
            dispatch({
                type: GET_USER,
                payload: resp.data
            })
        })
    }   
}
function getRepos(username) {
    return dispatch => { Axios.get(`http://api.github.com/users/${username}/repos`).then(resp =>{
            dispatch({
                type: GET_REPOS,
                payload: resp.data
            })
        })
    } 
}

// Custom Hooks
export function useGitHub(username) {
    const dispatch = useDispatch()
    const user = useSelector(appState => appState.githubReducer.user)
    const repos = useSelector(appState => appState.githubReducer.repos)

    useEffect (() => {
        dispatch(getUser(username))
        dispatch(getRepos(username))
    }, [])

    return { user, repos }
}
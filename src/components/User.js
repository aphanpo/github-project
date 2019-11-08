import React from 'react'
// import I from "../lib/Icon"

export default function(props) {

    return (
        <div className="profileSection">
            <img src={props.avatar_url} width="300px" height="300px" />
            {/* <I icon="star" /> */}
            <input id="status" type="text" placeholder="Set status"></input>
            <span id="wholeName">{props.name} </span>
            <span id="loginName">{props.login}</span>

            <button id="editProfButt">Edit Profile</button>

            <span id="located">{props.location}</span>
            <span id="emailadd">{props.email}</span>
        </div>
    )
}
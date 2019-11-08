import React from "react"


export default function (props) {
    return (
        <div className="repoSide"> 
            <div className="subNav">
                <p>Overview</p>
                <p>Repositories</p>
                <p>Project</p>
                <p>Packages</p>
                <p>Stars</p>
                <p>Followers</p>
                <p>Following</p>
            </div>

            <div className="filter">
                <input id="find" type='text' placeholder="Find a repository..."></input>
                <select id="type">
                    <option>Type: All</option>
                    <option>All</option>
                    <option>Publc</option>
                    <option>Private</option>
                    <option>Sources</option>
                    <option>Forks</option>
                    <option>Archived</option>
                    <option>Mirrors</option>
                </select>
                <select id="language">
                    <option>Language: All</option>
                    <option>All</option>
                    <option>Javascript</option>
                    <option>HTML</option>
                </select>
                <button id="new">New</button>
            </div>

           {props.repos.map((repo, i) => (
               <div className="singleRepo" key={'repo' + i}>
                   <p id="firstLine"><a href={repo.html_url}>{repo.name}</a>
                   <button id="star">Star</button></p>
                   <p id="secondLine">{repo.language} {repo.updated_at}</p>
               </div>
           ))}
        </div>
       
    )
}
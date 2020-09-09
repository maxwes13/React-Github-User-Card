import React from 'react';


function GitCard (props) {


    return (
        <div className="main">
            <div className="card">
                <div className="my-face">
                    <img src={props.data.avatar_url} alt="user-img" />
                </div>
                <div className="about">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.html_url}</p>
                    {props.followers.map(follow => {
                        return (
                            <p key={Date.now()}>{follow.login}</p>
                        )
                        })}
                </div>

            </div>
        </div>
    )
}

export default GitCard;
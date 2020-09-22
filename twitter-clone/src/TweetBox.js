import React, {useState, useEffect} from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core"
import db from "./firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Koding Keta',
            username: 'NiketaPatris',
            verified: true,
            text: tweetMessage,
            avatar:"https://images.knack.tech/profile/thumb/5BEvNR-5f469716314f6.jpg",
            image:tweetImage
        });
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.knack.tech/profile/thumb/5BEvNR-5f469716314f6.jpg"/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's Happening?" 
                    type="text"
                    />
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                />
                <Button 
                onClick={sendTweet}
                type= "submit"
                className="tweetBox__tweetButton"
                >
                Tweet
                </Button>
            </form>

        </div>
    )
}

export default TweetBox

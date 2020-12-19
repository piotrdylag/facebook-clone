import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";

function Feed() {
    return(
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                message='WOW, JS Rulez!!'
                timestamp='This is a timestamp'
                username='Piotr Dylag'
                image= "https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098155260-OD3QNLD1RK7DGPWMCUA6/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
            />
            <Post
                profilePic="https://www.vebo.pl/images/items/1720/logo_top.jpg"
                message='WebStorm is the best'
                timestamp='This is a timestamp'
                username='JetBrains'
                image= "https://www.jetbrains.com/webstorm/img/screenshots/webstorm-main.png"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                message='VSC is also great!!'
                timestamp='This is a timestamp'
                username='Microsoft'
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcl5x4slhrM9mbEh0VDTOAuax_tfbl36qLgg&usqp=CAU"
            />
        </div>
    );
}

export default Feed;
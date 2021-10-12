import React, {useState} from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([])

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='skyblue'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='limegreen'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='orange'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='pink'/>
                </div>
            </div>
            {/* Posts */}
            {posts.map((posts) => (
                <Post />
            ))}
            <Post name='Cole'  
            description='testdes' 
            message='test' 
            photoUrl=''/>
        </div>
    )
}

export default Feed;

import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className='sidebar'> 
            <div className='sidebar__top'>
               <img src='https://cdn.pixabay.com/photo/2018/03/02/21/49/waves-3194377__340.jpg' alt=''/>
               <Avatar className='sidebar__avatar'/>
               <h2>Cole Berletch</h2>
               <h4>coleberletch@gmail.com</h4> 
            </div>   

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,722</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,145</p>
                </div>  
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('python')}
                {recentItem('django')}
                
            </div>  
        </div>
    )
}

export default Sidebar

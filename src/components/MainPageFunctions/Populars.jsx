import React from 'react'
import clsx from 'clsx'

/* eslint-disable */ 

const Populars = ({ trendUsers, onTogglefollow }) => {
  
  return (
    <div className='populars'>
      <div className="popularsHeader">
        <h4>推薦跟隨</h4>
      </div>
      <div className="populars-wrapper">
        {trendUsers.map((user) => (
          <div className="wrapper-content">
            <div className="popularCard">
              <div className="popularImg">
                {user.avatar}
              </div>
              <div className="popularContent">
                <div className="popularName">
                  <p>{user.name}</p>
                </div>
                <div className="popularAccount">
                  <p>{user.account}</p>
                </div>
              </div>
            </div>
            <div className={clsx('followBtn', { 'followed': user.isFollowed })} 
              onClick={() => {
                onTogglefollow(user.id, user.isFollowed)
              }}>
              { user.isFollowed ? '正在跟隨' : '跟隨'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Populars
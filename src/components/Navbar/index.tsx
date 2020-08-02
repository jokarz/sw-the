import React from 'react'
import MailIcon from '../icons/MailIcon'
import CaretIcon from '../icons/CaretIcon'
import { useSelector } from 'react-redux'

type CurrentUser = {
  id: number,
  name: string,
  avatar: string,
  notifications_count: number
}

const Navbar = () => {
  const user = useSelector((state: { current_user: CurrentUser }) => state.current_user)
  const { name, avatar, notifications_count } = user
  return (
    <div className="navbar">
      <div className="sub">NARWHAL</div>
      <div className="main">
        <div className="title">
          Teams
          </div>
        <div className="flex">
          <div className="icon">
            <div className="relative">
              {
                notifications_count ?
                  <div className="badge">
                    {notifications_count}
                  </div> : null
              }
              <MailIcon />
            </div>

          </div>
          <div className="user">
            <span className="mr-2">Hello, {name}</span>
            <img src={avatar} alt="John's Profile" />
            <span>
              <CaretIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

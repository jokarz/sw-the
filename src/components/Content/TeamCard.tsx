import React, { FC } from 'react'
import StarOutlineIcon from '../icons/StarOutlineIcon'
import StarIcon from '../icons/StarIcon'
import ChatIcon from '../icons/ChatIcon'
import ContactIcon from '../icons/ContactIcon'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../../redux/data'

type TeamCardProps = {
  id: number,
  name: string,
  image: string,
  description: string,
  isFavorited: boolean,
  isArchived: boolean,
  campaignsCount: number,
  leadsCount: number,
  createdAt: string
}

const TeamCard: FC<TeamCardProps> = ({ id = 0, name = '', image = '', createdAt = '', description = '', isFavorited = false, isArchived = false, campaignsCount = 0, leadsCount = 0 }) => {
  const dispatch = useDispatch()

  return (
    <div className={`team-item ${isArchived ? 'bg-gray-300' : ''}`} >
      <div className="main">
        <div className="flex mb-3">
          <img title={name} src={image} alt={name}  />
          <div className="flex-grow flex-col">
            <div className=" font-semibold text-16 leading-px-19">
              {name}
            </div>
            {
              createdAt ?
                <div className="text-gray-500 leading-px-16 text-13 ">
                  Created on {createdAt}
                </div> : null
            }
          </div>
          <div className="flex-none justify-center cursor-pointer select-none"
            onClick={() => dispatch(setFavorite(id, !isFavorited))}
          >
            {isFavorited ?
              <div className="text-yellow-500">
                <StarIcon />
              </div>
              :
              <div className="text-gray-500">
                <StarOutlineIcon />
              </div>
            }

          </div>
        </div>
        <div
          className="leading-px-19 mb-3 text-gray-700 text-base" title={description}>
          {description}
        </div>
      </div>
      <div className="footer">
        <div className="mr-4 flex items-center">
          <div className="icon">
            <ChatIcon />
          </div>
          <div className="ml-2">
            {campaignsCount.toLocaleString()} Campaigns
              </div>
        </div>
        <div className="flex items-center">
          <div className="icon">
            <ContactIcon />
          </div>
          <div className="ml-2">
            {leadsCount.toLocaleString()} Leads
              </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
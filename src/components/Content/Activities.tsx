import React from 'react'
import { useSelector } from 'react-redux'
import ActivityCard from './ActivityCard'

type ActivitiesState = {
  person: {
    id: number,
    name: string,
    avatar: string
  }
  target: string,
  action: string,
  created_at?: string
}

const Activity = () => {
  const activities = useSelector((state: { activities: ActivitiesState[] }) => state.activities)
  return (
    <div className="flex-grow" style={{ minWidth: '230px', maxWidth: '320px' }}>
      <div className="content" >
        <div className="px-8 py-6 border-b-2 ">
          <div className="title text-gray-700">
            Activity
      </div>
        </div>
        <div className="pt-8 pb-6 flex flex-col">
          {activities.length ?
            <>
              {
                activities.map((activity: ActivitiesState, index) => (
                  <ActivityCard key={index} {...activity} createdAt={activity.created_at} />
                ))
              }
            </>
            :
            <div className="text-center font-semibold text-18 text-gray-500">
              No activity yet
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Activity
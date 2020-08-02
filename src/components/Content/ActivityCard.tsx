import React, { FC } from 'react'

type ActivityCardProps = {
  person: {
    id: number,
    name: string,
    avatar: string
  },
  target: string,
  action: string,
  createdAt?: string
}

const Msg = ({ name = '', target = '', action = '' }) => {
  switch (action) {
    case 'increased_quota':
      return (
        <div className="activity-msg">
          <span className="font-semibold">{name}</span>
          {' increased '}
          <span className="font-semibold">{target}</span>
          {' quota'}
        </div>
      )
    case 'added_leads':
      return (
        <div className="activity-msg">
          <span className="font-semibold">{name}</span>
          {' added new leads to '}
          <span className="font-semibold">{target}</span>
        </div>
      )
    case 'archived_team':
      return (
        <div className="activity-msg">
          <span className="font-semibold">{name}</span>
          {' archived the team '}
          <span className="font-semibold">{target}</span>
        </div>
      )
    default:
      return null
  }
}

const ActivityCard: FC<ActivityCardProps> = ({ person = { id: 0, name: '', avatar: '' }, target = '', action = '', createdAt = '' }) => {
  let { name, avatar } = person
  return (
    <div className="activity-item">
      <div className="flex-none mr-2">
        <img src={avatar} alt={`${name}'s Profile`} title={`${name}'s Profile`} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mb-2">
          <Msg name={name} target={target} action={action} />
        </div>

        {
          createdAt ?
            <div className="text-gray-500 text-13 leading-px-16">
              {createdAt}
            </div> : null
        }
      </div>
    </div>
  )
}


export default ActivityCard
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import TeamCard from './TeamCard'

type Team = {
  id: number,
  name: string,
  image: string,
  description: string,
  is_favorited: boolean,
  is_archived: boolean,
  campaigns_count: number,
  leads_count: number,
  created_at?: string
}


const Teams = () => {
  const teamsData = useSelector((state: { teams: Team[] }) => state.teams)
  const view = useSelector((state: { view: string }) => state.view)

  const [teams, setTeams] = useState(teamsData)

  useEffect(() => {
    let newTeamView = teamsData.filter(team => {
      switch (view) {
        case 'favorite':
          return team.is_favorited
        case 'archive':
          return team.is_archived
        default:
          return true
      }
    })
    setTeams(newTeamView)
  }, [view, teamsData])

  return (
    <div className="flex-grow mr-8" style={{ maxWidth: '1200px', minWidth: '880px' }}>
      <div className="content" >

        <div className="px-8 py-6 flex justify-between border-b-2 items-center">
          <div className="title">
            {view === 'favorite' ? 'Favorited Teams' : view === 'archive' ? 'Archived Teams' : 'All Teams'}
          </div>
          {
            teams.length ?
              <div className="text-gray-600"> Showing {teams.length} out of {teams.length} teams </div> : null
          }
        </div>
        {teams.length ?
          <div className="p-8 grid grid-cols-3 gap-4">
            {
              teams.map(
                team => {
                  const { id, name, image, created_at, description, is_favorited, is_archived, campaigns_count, leads_count } = team
                  return (
                    <TeamCard
                      id={id}
                      key={id}
                      name={name}
                      image={image}
                      description={description}
                      createdAt={created_at || ''}
                      isFavorited={is_favorited || false}
                      isArchived={is_archived || false}
                      campaignsCount={campaigns_count || 0}
                      leadsCount={leads_count || 0}
                    />
                  )
                }
              )
            }
          </div>
          : <div className="p-8">
            <div className="text-center font-semibold text-18 text-gray-500">
              No teams available
              </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Teams
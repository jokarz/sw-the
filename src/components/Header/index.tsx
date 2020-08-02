import React from 'react'
import TeamsIcon from '../icons/TeamsIcon'
import PlusIcon from '../icons/PlusIcon'
import SearchIcon from '../icons/SearchIcon'
import { useDispatch, useSelector } from 'react-redux'
import { setView } from '../../redux/data'

const Header = () => {
  const dispatch = useDispatch()
  const view = useSelector((state: { view: string }) => state.view)

  return (
    <div className="header">
      <div className="main">
        <div className="flex">
          <div className="icon">
            <TeamsIcon />
          </div>
          <span className="title">Teams</span>
        </div>
        <div className="flex justify-center items-center">
          <div className="btn">
            <div className="mr-4">
              <PlusIcon />
            </div>
            <div className="text">
              CREATE NEW TEAM
            </div>

          </div>
        </div>
      </div>
      <div className="sub">
        <div className="flex">
          <div
            onClick={() => dispatch(setView('all'))}
            className={`listing ${view === 'all' ? 'active' : ''}`}>All</div>
          <div
            onClick={() => dispatch(setView('favorite'))}
            className={`listing ${view === 'favorite' ? 'active' : ''}`}>Favorites</div>
          <div
            onClick={() => dispatch(setView('archive'))}
            className={`listing ${view === 'archive' ? 'active' : ''}`}>Archived</div>
        </div>
        <div className="flex items-center">
          <div className="">
            <SearchIcon />
          </div>
          <input type="text" className="search-input" placeholder="Search team name..." />
        </div>
      </div>
    </div>
  )
}

export default Header
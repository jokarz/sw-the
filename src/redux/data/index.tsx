import { createReducer, createAction } from '@reduxjs/toolkit'
import data from '../../test.json'

export const setView = createAction('data/SETVIEW', (view:string) => {
  return {
    payload: { view }
  }
})

export const setFavorite = createAction('data/SETFAVORITE', (id: number, isFavorited: boolean) => {
  return {
    payload: { id, isFavorited }
  }
})

export default createReducer({ ...data, view: 'all' }, {

  [setView.type]: (state, action) => {
    state.view = action.payload.view
  },
  [setFavorite.type]: (state, action) => {
    let index = state.teams.findIndex(team => team.id === action.payload.id)
    if (index !== -1) {
      state.teams[index].is_favorited = action.payload.isFavorited
    }
  }
})
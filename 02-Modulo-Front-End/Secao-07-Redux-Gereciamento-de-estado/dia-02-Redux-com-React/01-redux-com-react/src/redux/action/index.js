export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const INCREMENT_CLICKS = 'INCREMENT_CLICKS'


export const actionClick = (click) => ({
  type: INCREMENT_CLICKS,
  payload: click
})



export const actionCreator = ( increment = 1 ) => ({
  type: INCREMENT_COUNTER,
  payload: increment
})

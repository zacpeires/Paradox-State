import axios from 'axios'
import history from '../history'

const GET_NEW_ENQUIRY = "GET_NEW_ENQUIRY"

const initialEnquiry = {}

const getNewEnquiry = enquiry => ({
  type: GET_NEW_ENQUIRY,
  enquiry
})

export const gotNewEnquiry = enquiry => {
  return async dispatch => {
    const { data } = await axios.post('/api/enquiries/new-enquiry', enquiry)
    dispatch(getNewEnquiry(data))
  }
}

export default (state = initialEnquiry, action) => {
  switch (action.type) {
    case GET_NEW_ENQUIRY:
      return action.enquiry
    default:
      return state
  }
}

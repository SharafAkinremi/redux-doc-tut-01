import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Sharafdeen Akinremi' },
  { id: '1', name: 'Issa Abidoye' },
  { id: '2', name: 'Madison Price' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
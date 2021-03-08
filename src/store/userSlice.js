import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      mood: "",
      pregnancy: "first",
      name: "",
      reason: "",
  },
  reducers: {
    setName: (state, action) => {
        console.log(action);
      state.name += action.payload
    },
    setReason: (state, action) => {
        state.reason += action.payload
    },
    setPregnancy: (state, action) => {
        state.pregnancy += action.payload
    },
    setMood: (state, action) => {
        state.mood += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setName, setMood, setPregnancy, setReason } = userSlice.actions

export default userSlice.reducer
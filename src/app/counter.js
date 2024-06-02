import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    qty: 1,
  },
  reducers: {
    addcart: (state, action) => {
      console.log("qty=" + state.qty);
      state.value = [
        ...state.value,
        { ...action.payload, qty: state.qty, t: action.payload.price },
      ];
    },
    // increment: (state, action) => {
    //   console.log("qty="+action.qty)
    //   var value = state.data = state.value.find((ele) =>
    //     return
    //     ele.id == action.payload,
    //   )
    //   value.qty += 1,
    // }
  },
})

// Action creators are generated for each case reducer function
export const { addcart, increment } = counterSlice.actions

export default counterSlice.reducer
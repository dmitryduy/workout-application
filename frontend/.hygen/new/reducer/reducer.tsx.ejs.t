---
to: src/redux/reducers/<%= reducerName %>/<%= reducerName %>.ts
---

import { createSlice } from '@reduxjs/toolkit';

import { <%= sliceName %>State } from './<%= reducerName %>.typings';


const initialState: <%= sliceName %>State = {

};

const <%= sliceName %>Slice = createSlice({
  name: '<%= sliceName %>',
  initialState,
  reducers: { },
});

export const {  } = <%= sliceName %>Slice.actions;

export const { reducer: <%= reducerName %> } = <%= sliceName %>Slice;
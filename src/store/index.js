import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tool: null,
    canvas: null
}

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setTool(state,actions){
            state.tool = actions.payload;
        },
        setCanvas(state,actions){
            state.canvas = actions.payload;
        },
        setStrokeColour(state,actions){
            state.tool.strokeColour = actions.payload;
        },
        setFillColour(state,actions){
            state.tool.fillColour = actions.payload;
        },
        setLineWidth(state,actions){
            state.tool.lineWidth = actions.payload;
        },
    },
})

export const {setTool, setCanvas, setStrokeColour, setFillColour, setLineWidth} = statusSlice.actions

export default statusSlice.reducer
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { createAppSlice } from "../../createAppSlice"

import type { WeatherInfoSliceState,  WeatherInfoDate} from "./types"
import type { WeatherFormCities } from "../../../pages/WeatcherApp/Home/types"

const weatherInfoInitialState: WeatherInfoSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const weatherInfoSlice = createAppSlice({
  name: "WEATHER_INFO",
  initialState: weatherInfoInitialState,
  reducers: create => ({
    getTemp: create.asyncThunk(
      async (infoData:WeatherFormCities,thunkApi) => {
        try {
          const result = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}",
          )
          return result.data
        } catch (error) {
        thunkApi.rejectWithValue(error)
        }
      },

      {
        pending: (state: WeatherInfoSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherInfoSliceState, action: any) => {
          state.status = "success"
          state.data = [...state.data, action.payload]
        },
        rejected: (state: WeatherInfoSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
  }),

  selectors: {
    returnInfo: (state: WeatherInfoSliceState) => state,
  },
})
export const weatherInfoSliceActions = weatherInfoSlice.actions
export const weatherInfoSliceSelectors = weatherInfoSlice.selectors

export interface WeatherInfoDate{
name:string,
id:number
}

export interface WeatherInfoSliceState {
data: WeatherInfoDate[]
error:any
status:"default"|"loading"|"success"|"error"
}
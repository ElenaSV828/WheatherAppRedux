
import Button from "../../../components/Button/Button"
import Input from "../../../components/Input/Input"


import { useFormik } from 'formik'
import { HomePageWrapper, WeatherContainer, WeatherInfoName ,WeatherFormContainer  } from "./styles"


import type { WeatherFormCities } from "./types";
import{WEATHER_FORM_VALUES } from "./types"
import { weatherInfoSliceActions ,weatherInfoSliceSelectors } from "../../../store/redux/weatherInfo/weatherInfoSlice"
import { useAppDispatch,useAppSelector  } from "../../../store/hooks"
import { v4 } from "uuid"



function Home (){
const dispatch = useAppDispatch ();
const {error,status}= useAppSelector(weatherInfoSliceSelectors.returnInfo)



  const formik = useFormik({
initialValues: {
[WEATHER_FORM_VALUES.NAME]: ""

} as WeatherFormCities,
onSubmit: (values)=>{
 /* dispatch(weatherInfoSliceActions.getTemp({...values, id: v4()}))*/
}

})

    return(
    <HomePageWrapper>
    <WeatherInfoName>
     <WeatherFormContainer onSubmit={formik.handleSubmit}>
    <Input
    name={WEATHER_FORM_VALUES.NAME}
    placeholder="City name"
    value= {formik.values[WEATHER_FORM_VALUES.NAME]}
    onChange={formik.handleChange}
    />
     <Button name="Search" type="submit" />
    </WeatherFormContainer> 
    <WeatherContainer>
      <Button name="save" type="submit" />
      <Button name="delete" type="submit" />
    </WeatherContainer>
    </WeatherInfoName>
    </HomePageWrapper>
    
    
    )    
    
    }
    
    export default Home
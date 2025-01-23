import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const WeatherInfoName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
background-image: url(https://img.pikbest.com/wp/202408/raindrops-captiv…rning-a-window-s-glass-surface_9965360.jpg!bwr800);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`

export const WeatherFormContainer = styled.form`
 display: flex;
  flex-direction: column;
  justify-content:space-between;
  gap: 20px;
  width: 500px;
  height: fit-content;
  padding: 35px;
  border: 2px solid;
  border-radius: 10px;




`
 export const WeatherContainer= styled.div`
 display:flex;
 flex-direction: column;
 min-width: 500px;
  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  color:blue;
 `
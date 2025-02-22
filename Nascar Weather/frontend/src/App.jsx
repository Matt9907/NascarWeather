import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [error,setError] = useState(null);

  const races = [
    {date: '2025-02-23' , name: 'Ambetter Health 400', location: 'Atlanta, GA'},
    {date: '2025-03-02' ,name: 'EchoPark Automotive Grand Prix', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Shriners Childrens 500', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Pennzoil 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Straight Talk Wireless 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Cookout 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Goodyear 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Food City 500', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'jack Links 500', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Wurth 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'AdventHealth 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'All-Star Open', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'All-Star Race', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Coca-Cola 600', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Nashville', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Firekeepers Casino 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Mexico City', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Pocono', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Quaker State 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Grand Park 165', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Toyota/Save Mart 350', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Autotrader EchoPark Automotive 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Brickyard 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Iowa Corn 350', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Go Bowling at The Glen', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Cookout 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Coke Zero Sugar 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Southern 500', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Enjoy Illinois 300', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,ame: 'Bass Pro Nights Race', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'New Hampshire', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Hollywood Casino 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Bank of America 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'South Point 400', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'YellaWood 500', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Martinsville', location: 'Atlanta, GA'},
    {date: '2025-02-23' ,name: 'Championship', location: 'Atlanta, GA'},

  ];

  const API_KEY = import.meta.env.OpenWeatherAPI;

  const getWeather = async () =>{
    if(!selectedDate){
      setError('Please select a race!');
      return;
    }

    const race = races.find((r)=> r.date === selectedDate);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${race.location}&appid=${API_KEY}&units=imperial`;

    try{
      const response = await fetch(url);
      const data = await response.json();

      if(response.ok){
        setWeather({
          name: race.name,
          date: race.date,
          location: race.location,
          description: data.weather[0].description,
          temperature: data.main.temp,
          humidity: data.main.humidity,
        });
        setError(null);
      }else{
        setError("Weather data not available");
        setWeather(null);
      }
    }catch(err){
      console.error('Error fetching weather:', err);

    }
  }

}
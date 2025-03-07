import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [error,setError] = useState(null);

  const races = [
    {date: '2025-02-23' , name: 'Ambetter Health 400', location: 'Atlanta'},
    {date: '2025-03-02' ,name: 'EchoPark Automotive Grand Prix', location: 'Austin'},
    {date: '2025-03-09' ,name: 'Shriners Childrens 500', location: 'Avondale, AZ'},
    {date: '2025-03-16' ,name: 'Pennzoil 400', location: 'Las Vegas, NV'},
    {date: '2025-03-23' ,name: 'Straight Talk Wireless 400', location: 'Homestead, FL'},
    {date: '2025-03-30' ,name: 'Cookout 400', location: 'Martinsville, VA'},
    {date: '2025-04-06' ,name: 'Goodyear 400', location: 'Darlington, SC'},
    {date: '2025-04-13' ,name: 'Food City 500', location: 'Bristol, TN'},
    {date: '2025-04-27' ,name: 'Jack Links 500', location: 'Talladega, AL'},
    {date: '2025-05-04' ,name: 'Wurth 400', location: 'Fort Worth, TX'},
    {date: '2025-05-11' ,name: 'AdventHealth 400', location: 'Kansas City, KS'},
    //{date: '2025-05-18' ,name: 'All-Star Open', location: 'North Wilkesboro, NC'},
    {date: '2025-05-18' ,name: 'All-Star Race', location: 'North Wilkesboro, NC'},
    {date: '2025-05-25' ,name: 'Coca-Cola 600', location: 'Concord, NC'},
    {date: '2025-06-01' ,name: 'Nashville', location: 'Nashville, TN'},
    {date: '2025-06-08' ,name: 'Firekeepers Casino 400', location: 'Brooklyn, MI'},
    {date: '2025-06-15' ,name: 'Mexico City', location: 'Mexico City, MX'},
    {date: '2025-06-22' ,name: 'Pocono', location: 'Long Pond, PA'},
    {date: '2025-06-28' ,name: 'Quaker State 400', location: 'Hampton, GA'},
    {date: '2025-07-06' ,name: 'Grand Park 165', location: 'Chicago, IL'},
    {date: '2025-07-13' ,name: 'Toyota/Save Mart 350', location: 'Sonoma, CA'},
    {date: '2025-07-20' ,name: 'Autotrader EchoPark Automotive 400', location: 'Dover, DE'},
    {date: '2025-07-27' ,name: 'Brickyard 400', location: 'Speedway,IN'},
    {date: '2025-08-03' ,name: 'Iowa Corn 350', location: 'Newton,IA'},
    {date: '2025-08-10' ,name: 'Go Bowling at The Glen', location: 'Watkins Glen, NY'},
    {date: '2025-08-16' ,name: 'Cookout 400', location: 'Richmond, VA'},
    {date: '2025-08-23' ,name: 'Coke Zero Sugar 400', location: 'Daytona Beach, FL'},
    {date: '2025-08-31' ,name: 'Southern 500', location: 'Darlington, SC'},
    {date: '2025-09-07' ,name: 'Enjoy Illinois 300', location: 'Madison, IL'},
    {date: '2025-09-13' ,ame: 'Bass Pro Nights Race', location: 'Bristol, TN'},
    {date: '2025-09-21' ,name: 'New Hampshire', location: 'Loudon, NH'},
    {date: '2025-09-28' ,name: 'Hollywood Casino 400', location: 'Kansas City, KS'},
    {date: '2025-10-05' ,name: 'Bank of America 400', location: 'Concord, NC'},
    {date: '2025-10-12' ,name: 'South Point 400', location: 'Las Vegas, NV'},
    {date: '2025-10-19' ,name: 'YellaWood 500', location: 'Talladega, AL'},
    {date: '2025-10-26' ,name: 'Martinsville', location: 'Martinsville, VA'},
    {date: '2025-11-02' ,name: 'Championship', location: 'Avondale, AZ'},

  ];

  const API_KEY = '15aa35e8be1d489cd247705a5df24dab';
  console.log("API KEY from env:", API_KEY);

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
      console.log('API Respons:', data);
      console.log('Status:', response.status);

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
      setError('Error fetching weather data.');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>NASCAR Race Weather Checker</h1>
      <label htmlFor="race-select">Select a Race Date:</label>
      <select
        id="race-select"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="">--Choose a Race--</option>
        {races.map((race) => (
          <option key={race.date} value={race.date}>
            {race.name} ({race.date})
          </option>
        ))}
      </select>
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div id="weather-result">
          <h2>{weather.name} - {weather.date}</h2>
          <p>Location: {weather.location}</p>
          <p>Current Weather: {weather.description}</p>
          <p>Temperature: {weather.temperature}°F</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;



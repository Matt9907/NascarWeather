import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [error,setError] = useState(null);

  const races = [
    {date: '2025-02-23' , name: 'Ambetter Health 400'},
    {date: '2025-03-02' ,name: 'EchoPark Automotive Grand Prix'},
    {date: '2025-02-23' ,name: 'Shriners Childrens 500'},
    {date: '2025-02-23' ,name: 'Pennzoil 400'},
    {date: '2025-02-23' ,name: 'Straight Talk Wireless 400'},
    {date: '2025-02-23' ,name: 'Cookout 400'},
    {date: '2025-02-23' ,name: 'Goodyear 400'},
    {date: '2025-02-23' ,name: 'Food City 500'},
    {date: '2025-02-23' ,name: 'jack Links 500'},
    {date: '2025-02-23' ,name: 'Wurth 400'},
    {date: '2025-02-23' ,name: 'AdventHealth 400'},
    {date: '2025-02-23' ,name: 'All-Star Open'},
    {date: '2025-02-23' ,name: 'All-Star Race'},
    {date: '2025-02-23' ,name: 'Coca-Cola 600'},
    {date: '2025-02-23' ,name: 'Nashville'},
    {date: '2025-02-23' ,name: 'Firekeepers Casino 400'},
    {date: '2025-02-23' ,name: 'Mexico City'},
    {date: '2025-02-23' ,name: 'Pocono'},
    {date: '2025-02-23' ,name: 'Quaker State 400'},
    {date: '2025-02-23' ,name: 'Grand Park 165'},
    {date: '2025-02-23' ,name: 'Toyota/Save Mart 350'},
    {date: '2025-02-23' ,name: 'Autotrader EchoPark Automotive 400'},
    {date: '2025-02-23' ,name: 'Brickyard 400'},
    {date: '2025-02-23' ,name: 'Iowa Corn 350'},
    {date: '2025-02-23' ,name: 'Go Bowling at The Glen'},
    {date: '2025-02-23' ,name: 'Cookout 400'},
    {date: '2025-02-23' ,name: 'Coke Zero Sugar 400'},
    {date: '2025-02-23' ,name: 'Southern 500'},
    {date: '2025-02-23' ,name: 'Enjoy Illinois 300'},
    {date: '2025-02-23' ,ame: 'Bass Pro Nights Race'},
    {date: '2025-02-23' ,name: 'New Hampshire'},
    {date: '2025-02-23' ,name: 'Hollywood Casino 400'},
    {date: '2025-02-23' ,name: 'Bank of America 400'},
    {date: '2025-02-23' ,name: 'South Point 400'},
    {date: '2025-02-23' ,name: 'YellaWood 500'},
    {date: '2025-02-23' ,name: 'Martinsville'},
    {date: '2025-02-23' ,name: 'Championship'},















  ]


}
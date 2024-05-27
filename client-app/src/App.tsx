//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
// import DuckItem from './DuckItem'
// import { ducks } from './demo'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  //const [count, setCount] = useState(0)
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/activities')
      .then(response => {
        setActivities(response.data)
      }
      )

  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Activities' />
      <h1>Hello</h1>
      <List>
        {activities.map((activity: Any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>

        ))}
      </List>
    </div>


  )
}

export default App

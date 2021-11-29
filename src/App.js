import Owners from './Owners';
import Tasks from './Tasks';
import { useState, useEffect } from 'react'

function App() {
  const [owners, setOwners] = useState([])
  const [currentOwner, setCurrentOwner] = useState({})
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function getTasks(data) {
      const urls = data.map((owner) => `https://mod2-api.herokuapp.com/owner/${owner.id}/task`)

      const tasks = await Promise.all(urls.map(async url => {
        const resp = await fetch(url);
        return await resp.json();
      }))

      setTasks(tasks)
    }

    async function getOwners() {
      try {
        const response = await fetch("https://mod2-api.herokuapp.com/owner")
        const data = await response.json()
        setOwners(data)
        setCurrentOwner(data[0])
        getTasks(data)

      } catch {
        setOwners([])
      }
    }

    getOwners();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Todo List
        </h1>
      </header>

      <div className="Owner-Task-Container">
        <Owners owners={owners} currentOwner={currentOwner} setCurrentOwner={setCurrentOwner} />
        {/* <Tasks owners={owners} tasks={tasks} setTasks={setTasks} currentOwner={currentOwner} /> */}
      </div>
      <footer>{new Date().getFullYear()}</footer>
    </div>

  );
}

export default App;

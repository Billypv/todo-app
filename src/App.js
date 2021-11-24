import Owners from './Owners';
import Tasks from './Tasks';
import {useState, useEffect} from 'react'

function App() {
  const [owners, setOwners] = useState([])
  const [currentOwner, setCurrentOwner] = useState({})
  const [tasks, setTasks] = useState([])



  useEffect(() => {
    async function getOwners(){
      try{
        const response = await fetch("https://mod2-api.herokuapp.com/owner")
        const data = await response.json()
        setOwners(data)
        setCurrentOwner(data[0])
      } catch {
        setOwners([])
      }
    }
    

    getOwners();

  },[])

  useEffect(()=>{
    async function getTasks(id){
      try{
        const response = await fetch(`https://mod2-api.herokuapp.com/owner/${id}/task`)
        const data = await response.json()
        setTasks((previousState) => [...previousState,data])
      } catch {
        return [];
      }
    }
    owners.forEach((owner)=>{
      getTasks(owner.id)
    })

  },[owners])








  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Todo List
        </h1>
      </header>

    <div className="Owner-Task-Container">
      <Owners owners={owners} currentOwner={currentOwner} setCurrentOwner={setCurrentOwner}/>
      <Tasks owners={owners} tasks={tasks} setTasks={setTasks} currentOwner={currentOwner}/>
    </div>
    <footer>{new Date().getFullYear()}</footer>
    </div>

  );
}

export default App;

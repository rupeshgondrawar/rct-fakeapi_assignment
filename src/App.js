import "./App.css";
import { getPosts , getRandomUser } from "./Api";
import { useEffect } from "react";
import { useState } from "react";
import Postcard from "./Components/Postcard";
import UserCard from "./Components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData]= useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  useEffect(()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]))
  },[])
// console.log(userData);

const Refresh=()=>{
  getRandomUser().then((user)=>setUserData(user.results[0]))
};

  return (
    <div className="App">
{ userData &&   <UserCard data={userData}/>}
<button onClick={Refresh}>refresh user</button>
      {data ? data.map((e) => <Postcard title={e.title } body={e.body}/>) : <p>no data</p>}
    </div>
  );
}

export default App;

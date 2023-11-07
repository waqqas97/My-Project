import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import Featured from "../../components/Featured/Featured"
import List from "../../components/List/List"
import { useEffect, useState } from "react"
// import axios from "axios"

const Home = ({ type }) => {
  // const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  const [data, setData] = useState(null);

  const projectId = 'f104bi07c490';

  useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/ott/show', {
      method: 'GET',
      headers: {
        'projectId': projectId,
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  console.log(data);
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
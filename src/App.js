import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    //while we fetching data show loading screen
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      //set data we get into tours by using state and disable loading state
      setLoading(false);
      setTours(data);
    } catch (err) {
      //if error disable loading and show message
      setLoading(false);
      console.log('error')
    }
  }
  useEffect(() => {
    //in use effect fetch tours 
    fetchTours();
  }, [])

  //remove tour
  const removeTour = (id) => {
    //find clicked tour by id and get new arr without clicked item
    const leftOverTours = tours.filter(tour => tour.id !== id);
    //place new arr into tours state
    setTours(leftOverTours);
    console.log(id);

  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";

import "./App.css";
import Watch from "./Components/Watch/Watch";


function App() {
  const [watches, setWatches] = useState([]);

  // useEffect( () =>{
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))

  // },[]);

  useEffect( () =>{
    fetch('https://raw.githubusercontent.com/nayeem-miah/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))

  },[]);



  // const watches = [
  //   { id: 1, name: "Apple watch", price: 200 },
  //   { id: 2, name: "samsu watch", price: 100 },
  //   { id: 3, name: "MI watch", price: 160 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 7",
  //     price: "$399"
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: "$249"
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense",
  //     price: "$299"
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: "$399"
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 3",
  //     price: "$249"
  //   }
  // ];
  

  return (
    <>
      <h1>Vite + React</h1>
      {
      watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  );
}

export default App;

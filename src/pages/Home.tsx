// Home.tsx
import { useState, useEffect } from "react";

function Home() {
  const [item, setItem] = useState(null);

  useEffect(() => {
     fetch("chemin-de-la-reussite")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      setItem(data[0])   
    });
  }, [])
  

  if (item == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Affichage d'un {item?.nom}</h1>
      
    </>
  );
}

export default Home;

import { useEffect, useState } from "react";

// http://localhost:3000/users
const BASE_URL = "http://localhost:3000"
function Fruits() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(console.error);
  }, []);
  return (
    <main>
      {data.map(
        user => {
          return <div>{user.name}</div>
        }
      )}
    </main>
  )
}

export default Fruits;

import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

function HomePage() {
  const names = ["Putri Mulyani", "Maldini Sheva", "Cinta Laura"];
  // const [likes, setLikes] = useState(0);

  function handleClick() {
    // setLikes(likes + 1);
  }

  function resetLikes() {
    // setLikes(0);
  }

  return (
    <>
      <Header name="Welcome to React JS!" />
      <ul>
        {names.map((value, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>
      {/* <button onClick={handleClick}> Likes ({likes})</button> */}
      {/* <button onClick={resetLikes}>Reset</button> */}
    </>
  );
}

export default HomePage();

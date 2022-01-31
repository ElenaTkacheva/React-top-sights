import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {

  const [sights, setSights] = useState(0);
  const { id, name, description, rating, image } = data[sights];
  const [showMore, setShowMore] = useState(false);


  const previousSight = () => {
    setSights((sight) => {
      sight--;
      if (sight < 0) {
        return data.length - 1;
      }
      return sight;
    });
  };

  const nextSight = () => {
    setSights((sight) => {
      sight++;
      if (sight > data.length - 1) {
        sight = 0;
      }
      return sight;
    });
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <h1>Top {data.length} sights in Montreal</h1>
        </div>
        <div className="container">
          <h2>
            {id}. {name}
          </h2>
        </div>
        <div className="container">
          <img src={image} width="350px" alt="sight" />
        </div>
        <div className="container">
          <h2>"{rating} ⭐"</h2>
        </div>
        <div className="container">
          <p>
            {showMore ? description : description.substring(0, 240) + "..."}
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
        <div className="buttons container">
          <button className="btn" onClick={previousSight}>
            Previous
          </button>
          <button className="btn" onClick={nextSight}>
            Next
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;

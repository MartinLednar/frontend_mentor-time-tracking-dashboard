import { useState } from "react";
import "./App.css";
import ActivityBox from "./components/activity-box/activity-box.component";
import data from "./data";

function App() {
  const [category, setCategory] = useState("daily");

  const handleClick = (e) => {
    const newCategory = e.target.textContent.toLowerCase();
    setCategory(newCategory);
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="grid-container">
          <div className="user-nav-box">
            <div className="user-details">
              <img src="/image-jeremy.png" alt="User profile" />
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
            </div>

            <nav>
              <p onClick={handleClick} className={category === "daily" ? "nav-item active" : "nav-item "}>
                Daily
              </p>
              <p onClick={handleClick} className={category === "weekly" ? "nav-item active" : "nav-item "}>
                Weekly
              </p>
              <p onClick={handleClick} className={category === "monthly" ? "nav-item active" : "nav-item "}>
                Monthly
              </p>
            </nav>
          </div>

          {data.map((activity, i) => {
            const { current, previous } = activity.timeframes[category];
            return <ActivityBox key={i} current={current} previous={previous} title={activity.title} label={activity.label} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

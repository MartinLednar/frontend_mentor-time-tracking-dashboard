import "./activity-box.styles.scss";

const ActivityBox = ({ label, title, current, previous }) => (
  <div className={`activity-box ${label}`}>
    <img src={`/${label}.svg`} alt="Box icon" />

    <div className="activity-description">
      <div className="title-box">
        <h2>{title}</h2>
        <img src="/icon-ellipsis.svg" alt="Three dots icon" />
      </div>

      <div className="time-box">
        <h3>{current}hrs</h3>
        <span>Last Week - {previous}hrs</span>
      </div>
    </div>
  </div>
);

export default ActivityBox;

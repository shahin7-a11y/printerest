import "../dashboard/dashboard.css";

function Dashboard() {
  return (
    <div className="cards-container">
      {/* Earnings */}
      <div>

      <h2>Dashboard</h2>
      </div><br />
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div className="card yellow">
        <div className="card-content">
          <h2>$30200</h2>
          <p>All Earnings</p>
          <i className="fa-solid fa-dollar-sign"></i>
        </div>
        <div className="card-footer">
          <span>10% changes on profit</span>
          <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
      </div>

      {/* Task */}
      <div className="card red">
        <div className="card-content">
          <h2>145</h2>
          <p>Task</p>
          <i className="fa-solid fa-calendar"></i>
        </div>
        <div className="card-footer">
          <span>28% task performance</span>
          <i className="fa-solid fa-arrow-trend-down"></i>
        </div>
      </div>

      {/* Page Views */}
      <div className="card green">
        <div className="card-content">
          <h2>290+</h2>
          <p>Page Views</p>
          <i className="fa-solid fa-file"></i>
        </div>
        <div className="card-footer">
          <span>10k daily views</span>
          <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
      </div>

      {/* Downloads */}
      <div className="card blue">
        <div className="card-content">
          <h2>500</h2>
          <p>Downloads</p>
          <i className="fa-solid fa-thumbs-up"></i>
        </div>
        <div className="card-footer">
          <span>1k download in App store</span>
          <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
      </div>
      </div>
    </div>
  );
}

export { Dashboard };

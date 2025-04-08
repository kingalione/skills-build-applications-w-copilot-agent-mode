import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://miniature-system-jj4vvw9r7w2qpwx-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-danger text-white">
        <h2>Workouts</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {workouts.map(workout => (
            <li key={workout._id} className="list-group-item">
              <strong>{workout.name}</strong>: {workout.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;

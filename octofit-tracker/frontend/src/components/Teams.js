import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://miniature-system-jj4vvw9r7w2qpwx-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h2>Teams</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {teams.map(team => (
            <li key={team._id} className="list-group-item">{team.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;

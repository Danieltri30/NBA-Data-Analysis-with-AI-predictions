import React, { useEffect, useState } from "react";
import "./.styles/TodaysGames.css";

// Component to display today's NBA games
const TodaysGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static mapping of NBA team abbreviations to their ESPN logos
  const teamLogos = {
    ATL: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png",
    BOS: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
    BKN: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png",
    CHA: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png",
    CHI: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png",
    CLE: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png",
    DAL: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png",
    DEN: "https://a.espncdn.com/i/teamlogos/nba/500/den.png",
    DET: "https://a.espncdn.com/i/teamlogos/nba/500/det.png",
    GSW: "https://a.espncdn.com/i/teamlogos/nba/500/gs.png",
    HOU: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png",
    IND: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png",
    LAC: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png",
    LAL: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
    MEM: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png",
    MIA: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png",
    MIL: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png",
    MIN: "https://a.espncdn.com/i/teamlogos/nba/500/min.png",
    NOP: "https://a.espncdn.com/i/teamlogos/nba/500/no.png",
    NYK: "https://a.espncdn.com/i/teamlogos/nba/500/ny.png",
    OKC: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png",
    ORL: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png",
    PHI: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png",
    PHX: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png",
    POR: "https://a.espncdn.com/i/teamlogos/nba/500/por.png",
    SAC: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png",
    SAS: "https://a.espncdn.com/i/teamlogos/nba/500/sas.png",
    TOR: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png",
    UTA: "https://a.espncdn.com/i/teamlogos/nba/500/utah.png",
    WAS: "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png"
  };

  useEffect(() => {
    // Fetch today's games from the backend proxy server and refresh every 60 seconds
    const fetchGames = async () => {
      try {
        const today = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD
        const response = await fetch(`http://localhost:4000/api/games?date=${today}`);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Sort games by time (earliest to latest), and alphabetically if time is the same
        const sortedGames = data.data.sort((a, b) => {
          const timeA = new Date(a.datetime).getTime();
          const timeB = new Date(b.datetime).getTime();
          if (timeA !== timeB) return timeA - timeB;
          return a.visitor_team.full_name.localeCompare(b.visitor_team.full_name);
        });

        setGames(sortedGames);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
    const interval = setInterval(fetchGames, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  // Render loading, error, or "no games" states
  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;
  if (games.length === 0) return <p>No games scheduled for today.</p>;

  return (
    <div className="games-container">
      <h2>Today's NBA Games</h2>
      <div className="games-list">
        {games.map((game) => {
          const visitorLogo = teamLogos[game.visitor_team.abbreviation];
          const homeLogo = teamLogos[game.home_team.abbreviation];
          const formattedTime = new Date(game.datetime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });

          return (
            <div key={game.id} className="game-card">
              {/* Visitor team */}
              <div className="team-row">
                <img src={visitorLogo} alt="visitor team logo" className="team-logo" />
                <strong>{game.visitor_team.full_name}</strong> ({game.visitor_team_score})
              </div>

              <div className="vs">vs</div>

              {/* Home team */}
              <div className="team-row">
                <img src={homeLogo} alt="home team logo" className="team-logo" />
                <strong>{game.home_team.full_name}</strong> ({game.home_team_score})
              </div>

              {/* Display formatted game time */}
              <p className="game-time">Time: {formattedTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodaysGames;
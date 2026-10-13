import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function Events() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/events")
      .then((res) => setEvents(res.data))
      .catch(() => setError("Could not load events. Is the backend running?"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container">Loading events...</div>;
  if (error) return <div className="container error">{error}</div>;

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>All Events</h2>
        {user && (
          <Link to="/add-event" className="btn btn-primary">
            + Add Event
          </Link>
        )}
      </div>

      {events.length === 0 && <p>No events yet. Check back later!</p>}

      <div className="event-grid">
        {events.map((event) => (
          <div className="card" key={event.id}>
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
            <Link className="btn btn-primary" to={`/events/${event.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

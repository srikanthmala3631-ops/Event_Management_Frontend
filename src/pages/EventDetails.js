import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch(() => setError("Event not found."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleRegister = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setMessage("");
    setError("");

    api
      .post("/registrations", { userId: user.id, eventId: event.id })
      .then(() => setMessage("You have successfully registered for this event!"))
      .catch((err) => {
        const msg = err.response?.data?.message || "Registration failed.";
        setError(msg);
      });
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error && !event) return <div className="container error">{error}</div>;

  return (
    <div className="container">
      <div className="card">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Max Participants:</strong> {event.maxParticipants}</p>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <button className="btn btn-primary" onClick={handleRegister}>
          {user ? "Register for this Event" : "Login to Register"}
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/auth/profile").then(res => setProfile(res.data));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>GSTIN: {profile.gstin}</p>
      <p>Role: {profile.role}</p>
    </div>
  );
}

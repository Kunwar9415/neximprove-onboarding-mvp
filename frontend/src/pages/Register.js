import API from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gstin: "",
    role: "exporter",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})} />
      <input placeholder="GSTIN" onChange={e=>setForm({...form,gstin:e.target.value})} />
      <button>Register</button>
    </form>
  );
}

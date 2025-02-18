import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page :3</h1>
      <Link to={"/dashboard"}>Go to dashboard</Link>
    </div>
  );
}

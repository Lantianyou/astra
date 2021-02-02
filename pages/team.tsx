import Profile from "../components/profile";
import { Chris } from "../constant";

function Team() {
  const { name, title, description } = Chris;
  return (
    <main className="max-w-2xl mx-auto">
      <Profile name={name} title={title} description={description} />
    </main>
  );
}

export default Team;

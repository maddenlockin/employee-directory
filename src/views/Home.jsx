import { useUser } from "../context/UserContext";

export default function Home() {
  const auth = useUser();
  
  return (
    <h1>HOME</h1>
  )
}

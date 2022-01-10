import { useUser } from "../context/UserContext";
import { Redirect } from "react-router-dom";

export default function Home() {
  const auth = useUser();
  auth.user.email 
    ? <Redirect to='/profile' />
    : <Redirect to='/login' />
  return (
    <h1>HOME</h1>
  )
}

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { signInUser, signUpUser } from "../services/users";

export default function Auth({ registerReq = false }) {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  //const location = useLocation();
  //const auth = useAuth();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  //const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = async (email, password) => {
    try{
      if(registerReq) {
        signUpUser(email, password);
        navigate.replace(from.pathname)
      } else {
        const user = await signInUser(email, password);
        await setUser(formState.email)
      }
      navigate('/profile')
    } catch(err) {
      throw err;
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleFormChange}
        />{' '}
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleFormChange}
        />{' '}
        <button type="submit" aria-label="Sign In">
          Sign in
        </button>
      </form>
      {error && <h2>{error}</h2>}
    </>
  );
}

import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/home/Home";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useEffect } from "react";

function App() {
  const disPatch = useAppDispatch();
  useEffect(() => {
    disPatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        disPatch(setUser(user.email!));
        disPatch(setLoading(false));
      } else {
        disPatch(setLoading(false));
      }
    });
  }, [disPatch]);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

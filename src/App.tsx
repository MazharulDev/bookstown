import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

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
      <MainLayout />
    </div>
  );
}

export default App;

import Mobile from "./components/Mobile/Mobile"
import Desktop from "./components/Desktop/Desktop"
import { useEffect, useState } from "react";
import { isMobileTablet } from "./utils";


function App() {
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
      setDesktop(isMobileTablet());
  },[])

  return (
    <>
      {desktop ? <Mobile /> : <Desktop />}
    </>
  );
}

export default App;

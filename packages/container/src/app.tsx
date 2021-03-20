import React, { Suspense } from "react";
import Loading from "./loading";

const HomeApp = React.lazy(() => import("homeApp/HomeApp"));

const App = () => {
  return (
    <div>
      <div>
        <h1>Container</h1>
      </div>
      <div className="promocoes">
        <Suspense fallback={<Loading />}>
            <h3>Home</h3>
           <HomeApp/>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
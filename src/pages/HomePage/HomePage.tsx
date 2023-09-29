import background from "../../assets/fongo.jpeg";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../components/Home/Home"));

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Suspense fallback={<div>Cargando...</div>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default HomePage;

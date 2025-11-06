import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useGlobal } from "../context/GlobalContext";
import Loader from "../components/Loader";

const DefaultLayout = () => {
  const { isLoading } = useGlobal();

  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      {/* se var è true renderizza comp */}
      {isLoading && <Loader />}
    </>
  );
};

export default DefaultLayout;

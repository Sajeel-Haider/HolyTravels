import { Destinations } from "../../components/Main/Destinations";
import { Explore } from "../../components/Main/Explore";
import { Footer } from "../../components/Main/Footer";
import { Header } from "../../components/Main/Header";
import { Nav } from "../../components/Main/Nav";

export const Main = () => {
  return (
    <>
      <Header />
      <Explore />
      <Destinations />
      <Footer />
    </>
  );
};

import { Destinations } from "../../components/Main/Destinations";
import { Explore } from "../../components/Main/Explore";
import { Footer } from "../../components/Main/Footer";
import { Header } from "../../components/Main/Header";
import { Nav } from "../../components/Main/Nav";
import {lahore_fort} from "../../components/Main/lahore_fort";
export const Main = () => {
  return (
    <>
      <Header />
    
      <Explore />
      <lahore_fort/>
      <Destinations />
      <Footer />
    </>
  );
};

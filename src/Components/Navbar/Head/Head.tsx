import Title from "./Title/Title";
import Hamburger from "./Hamburger/Hamburger";
import Subscribe from "./Subscribe/Subscribe";

export default function Head() {
  return (
    <div className="Head">
      <Hamburger />
      <Title />
      <Subscribe />
    </div>
  );
}

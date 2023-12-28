import Info from "../info/Info";
import Intro from "../intro/Intro";
import Quotes from "../quotes/Quotes";
import Visual from "../visual/Visual";
import "./MainWrap.scss";

export default function MainWrap() {
  return (
    <div className="MainWrap">
      <Visual />
      <Intro />
      <Quotes />
      <Info />
    </div>
  );
}
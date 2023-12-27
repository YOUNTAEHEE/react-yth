import Info from "../info/Info";
import Intro from "../intro/Intro";
import SubVisual from "../subVisual/SubVisual";
import Visual from "../visual/Visual";
import "./MainWrap.scss";

export default function MainWrap() {
  return (
    <div className="MainWrap">
      <Visual />
      <Intro />
      <SubVisual />
      <Info />
    </div>
  );
}

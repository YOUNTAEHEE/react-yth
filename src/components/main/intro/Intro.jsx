import "./Intro.scss";
import { useSelector } from "react-redux";

export default function Intro() {
  const memberReducer = useSelector((store) => store.memberReducer);
  const MemberData = Object.values(memberReducer.member)[0];

  return (
    <section className="Intro">
      <h2>Who We Are?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
        cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aperiam ad cumque error molestias ipsa saepe sequi sunt explicabo dicta
        totam.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius?
      </p>
      <article>
        {MemberData.map((data, idx) => {
          if (idx >= 1) return null;
          return (
            <div className="mainIntroPic" key={data + idx}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
                alt={data.name}
              />
            </div>
          );
        })}
      </article>
      <article>
        {MemberData.map((data, idx) => {
          if (idx >= 1) return null;
          return (
            <div className="mainIntroPicBg" key={data + idx}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
                alt={data.name}
              />
            </div>
          );
        })}
      </article>
    </section>
  );
}

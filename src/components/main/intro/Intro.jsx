import { NavLink } from "react-router-dom";
import { useMemberQuery } from "../../../hooks/useMemberQuery";
import "./Intro.scss";

export default function Intro() {
  const { data: MemberData, isSuccess: isMember } = useMemberQuery();
  return (
    <section className="Intro">
      <div className="txtBox">
        <h2>
          Who <strong>We Are?</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aperiam ad cumque error molestias ipsa saepe sequi sunt explicabo
          dicta totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatem, architecto. Nam corrupti numquam repudiandae animi quis
          quod obcaecati esse, ad doloribus qui amet iste similique officia
          nesciunt magni velit voluptatibus! Dolores explicabo laboriosam, ab
          aperiam minima voluptatibus reprehenderit impedit suscipit? Minima,
          dicta exercitationem nobis voluptas laboriosam, obcaecati neque, ab ea
          repellendus excepturi dolorum? Dignissimos sed, inventore obcaecati
          similique voluptas facere.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          architecto adipisci nesciunt natus doloribus minima similique maxime
          nemo aut! Nostrum veritatis natus, provident doloribus asperiores
          ducimus nihil sapiente officiis omnis?
        </p>
        <button>
          <NavLink to="/department">MORE ABOUT COMPANY</NavLink>
        </button>
      </div>
      <div className="memberPicWrap">
        {isMember &&
          MemberData.map((data, idx) => {
            if (idx >= 1) return null;
            return (
              <article key={data + idx}>
                <div className="mainIntroPicBg">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
                    alt={data.name}
                  />
                </div>
              </article>
            );
          })}

        {MemberData?.map((data, idx) => {
          if (idx >= 1) return null;
          return (
            <article key={data + idx}>
              <div className="mainIntroPicBg">
                <img
                  src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
                  alt={data.name}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

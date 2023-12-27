import { useRef } from "react";
import Layout from "../../common/layout/Layout";
import "./Department.scss";
import { useMemberQuery } from "../../../hooks/useMemberQuery";
import { useActiveQuery } from "../../../hooks/useActiveQuery";
export default function Department() {
  const path = useRef(process.env.PUBLIC_URL);
  const { data: Active, isSuccess: isActive } = useActiveQuery();
  const { data: MemberData, isSuccess: isMember } = useMemberQuery();

  return (
    <Layout title={"Department"}>
      <section className="memberBox">
        <article className="con1">
          <div>
            <p>Experience you can trust.</p>
          </div>
          <div className="con1PicBox">
            {isActive &&
              Active.map((data, idx) => {
                return (
                  <div className="con1Pic" key={data + idx}>
                    <img
                      className="con1Img"
                      src={`${path.current}/img/${data.pic}`}
                      alt={data.name}
                    />
                  </div>
                );
              })}
          </div>
        </article>

        <div className="bottomConWrap">
          <div className="con2">
            <p>
              The right tools wielded by the right people to make anything
              possible
            </p>
            <div className="con2PicBox">
              {isMember &&
                MemberData.map((data, idx) => {
                  return (
                    <article key={data + idx}>
                      <div className="con2Pic">
                        <img
                          className="con2Img"
                          src={`${path.current}/img/${data.pic}`}
                          alt={data.name}
                        />
                      </div>
                      <h2>{data.name}</h2>
                      <p>{data.position}</p>
                    </article>
                  );
                })}
            </div>
          </div>

          <div className="departmentBg">
            <div className="departmentContact">
              <p>
                Through the years we helped a lot of companies. Are you ready to
                become our partner?
              </p>
              <button>Get a Free Quote +</button>
            </div>
          </div>

          <div className="departmentLocation">
            <div className="departmentMap">
              <div className="dLPic">
                <img
                  src={`${path.current}/img/departmentMap.jpg`}
                  alt="찾아올 주소"
                />
                <p>175 Varrick Street, 3rd Floor. New York, NY 10014</p>
                <p>Say hi if you're in Manhattan</p>
              </div>
            </div>
            <div className="DLPic2">
              <img
                src={`${path.current}/img/departmentContact.jpg`}
                alt="상담하는 이미지"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

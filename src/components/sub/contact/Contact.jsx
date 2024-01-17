import "./Contact.scss";
import Layout from "../../common/layout/Layout";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useThrottle } from "../../../hooks/useThrottle";
export default function Contact() {
  const form = useRef();
  const resetForm = () => {
    const elArr = form.current.children;
    Array.from(elArr).forEach((el) => {
      if (
        el.name === "user_name" ||
        el.name === "user_email" ||
        el.name === "message"
      )
        el.value = "";
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const [user, email] = form.current.querySelectorAll("input");
    const txtArea = form.current.querySelector("textarea");
    if (!user.value || !email.value || !txtArea.value)
      return alert("이름, 답장받을 이메일 주소, 문의 내용을 모두 입력하세요.");
    emailjs
      .sendForm(
        "service_2tfjx7b",
        "template_4xo8wsk",
        form.current,
        "BxLVnMSOj6pCA57JL"
      )
      .then(
        (result) => {
          alert("문의내용이 성공적으로 전달되었습니다.");
          resetForm();
        },
        (error) => {
          alert(
            "일시적인 장애로 문의 전송에 실패했습니다. 다음의 메일주소로 전송해주세요."
          );
          resetForm();
        }
      );
  };

  const kakao = useRef(window.kakao);
  const [Index, setIndex] = useState(0);
  const [Traffic, setTraffic] = useState(false);
  const [View, setView] = useState(false);

  const marker = useRef(null);
  const mapFrame = useRef(null);
  const viewFrame = useRef(null);
  const mapInstance = useRef(null);
  const mapInfo = useRef([
    {
      title: "삼성역 코엑스",
      latlng: new kakao.current.maps.LatLng(
        37.51100661425726,
        127.06162026853143
      ),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
      imgSize: new kakao.current.maps.Size(232, 99),
      imgPos: { offset: new kakao.current.maps.Point(116, 99) },
    },
    {
      title: "넥슨 본사",
      latlng: new kakao.current.maps.LatLng(
        37.40211707077346,
        127.10344953763003
      ),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
      imgSize: new kakao.current.maps.Size(232, 99),
      imgPos: { offset: new kakao.current.maps.Point(116, 99) },
    },
    {
      title: "서울 시청",
      latlng: new kakao.current.maps.LatLng(37.5662952, 126.9779451),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
      imgSize: new kakao.current.maps.Size(232, 99),
      imgPos: { offset: new kakao.current.maps.Point(116, 99) },
    },
  ]);

  marker.current = new kakao.current.maps.Marker({
    position: mapInfo.current[Index].latlng,
    image: new kakao.current.maps.MarkerImage(
      mapInfo.current[Index].imgSrc,
      mapInfo.current[Index].imgSize,
      mapInfo.current[Index].imgOpt
    ),
  });
  const roadview = useCallback(() => {
    new kakao.current.maps.RoadviewClient().getNearestPanoId(
      mapInfo.current[Index].latlng,
      50,
      (panoId) => {
        new kakao.current.maps.Roadview(viewFrame.current).setPanoId(
          panoId,
          mapInfo.current[Index].latlng
        );
      }
    );
  }, [Index]);
  const setCenter = useCallback(() => {
    mapInstance.current.setCenter(mapInfo.current[Index].latlng);
    //roadview();
  }, [Index]);

  const throttledSetCenter = useThrottle(setCenter);
  useEffect(() => {
    mapFrame.current.innerHTML = "";
    viewFrame.current.innerHTML = "";
    mapInstance.current = new kakao.current.maps.Map(mapFrame.current, {
      center: mapInfo.current[Index].latlng,
      level: 3,
    });
    marker.current.setMap(mapInstance.current);
    setTraffic(false);
    setView(false);
    //지도 타입 컨트롤러 추가
    mapInstance.current.addControl(
      new kakao.current.maps.MapTypeControl(),
      kakao.current.maps.ControlPosition.TOPRIGHT
    );

    //지도 줌 컨트롤러 추가
    mapInstance.current.addControl(
      new kakao.current.maps.ZoomControl(),
      kakao.current.maps.ControlPosition.RIGHT
    );
    //휠에 맵 줌 기능 비활성화
    mapInstance.current.setZoomable(false);
  }, [Index]);

  useEffect(() => {
    window.addEventListener("resize", throttledSetCenter);
    return () => window.removeEventListener("resize", throttledSetCenter);
  }, [throttledSetCenter]);

  useEffect(() => {
    Traffic
      ? mapInstance.current.addOverlayMapTypeId(
          kakao.current.maps.MapTypeId.TRAFFIC
        )
      : mapInstance.current.removeOverlayMapTypeId(
          kakao.current.maps.MapTypeId.TRAFFIC
        );
  }, [Traffic]);
  useEffect(() => {
    View && viewFrame.current.children.length === 0 && roadview();
  }, [View, roadview]);
  return (
    <Layout title={"Contact"}>
      <div className="con1Wrap">
        <div className="con1">
          <div>
            <p>Get in Touch</p>
            <p>Please get in touch if you have any questions about YOUN.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              impedit quis? Eum accusantium laboriosam in voluptates, quo
              laudantium impedit fugit.
            </p>
            <br />
            <strong>Laboriosam, sint!</strong>
            <br />
            <p style={{ fontSize: "1.7rem" }}>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div id="mailSection">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="name" />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="email" />
            <label>Message</label>
            <textarea name="message" placeholder="message" />
            <input className="submitBtn" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <section className="iconBoxs">
        <article>
          <div className="contactIcon">
            <IoMailSharp />
          </div>
          <br />
          <br />
          <p>MESSAGE</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quos!
          </p>
          <br />
          <p>abcdf@naver.com</p>
        </article>
        <article>
          <div className="contactIcon">
            <FaPhoneAlt />
          </div>
          <br /> <br />
          <p>CALL</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quos!
          </p>
          <br />
          <p>123-4567-8901</p>
        </article>
        <article>
          <div className="contactIcon">
            <IoIosHome />
          </div>
          <br /> <br />
          <p>VISIT</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quos!
          </p>
          <br />
          <p>175 Varrick Street, 3rd Floor. New York, NY 10014</p>
        </article>
      </section>
      <div id="mapSection">
        <section className="tab">
          <article
            className={`mapBox ${View ? "" : "on"}`}
            ref={mapFrame}
          ></article>
          <article
            className={`viewBox ${View ? "on" : ""}`}
            ref={viewFrame}
          ></article>
        </section>
        <nav className="controlBox">
          {mapInfo.current.map((el, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`mapBtn ${idx === Index ? "on" : ""}`}
            >
              {el.title}
            </button>
          ))}
          <button onClick={() => setView(!View)}>
            {View ? "map" : "road view"}
          </button>
          <button
            onClick={() => {
              setTraffic(!Traffic);
            }}
          >
            {Traffic ? "Traffic off" : "Traffic ON"}
          </button>
          <button onClick={setCenter}>위치 초기화</button>
        </nav>
      </div>
    </Layout>
  );
}

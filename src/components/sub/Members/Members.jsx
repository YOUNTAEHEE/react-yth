import { useEffect, useRef, useState } from "react";
import Layout from "../../common/layout/Layout";
import "./Members.scss";
import { useHistory } from "react-router-dom";
import { useDebounce } from "../../../hooks/useDebounce";
export default function Members() {
  const refFrame = useRef(null);
  const history = useHistory();
  const initVal = useRef({
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
    edu: "",
    gender: "",
    interest: [],
  });
  const [Val, setVal] = useState(initVal.current);
  const DebouncedVal = useDebounce(Val);
  const [Errs, setErrs] = useState({});

  const handleReset = () => {
    setVal(initVal.current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...Val, [name]: value });
  };

  const handleCheck = (e) => {
    const { name } = e.target;
    const inputs = e.target.parentElement.querySelectorAll("input");
    const checkArr = [];
    inputs.forEach((input) => input.checked && checkArr.push(input.value));
    setVal({ ...Val, [name]: checkArr });
  };

  const check = (value) => {
    const errs = {};
    const num = /[0-9]/;
    const txt = /[a-zA-Z]/;
    const spc = /[!@#$%^&*()[\]_.+]/;
    const [m1, m2] = value.email.split("@");
    const m3 = m2 && m2.split(".");

    if (value.userid.length < 5)
      errs.userid = "아이디는 최소 5글자 이상 입력하세요";
    if (value.comments.length < 10)
      errs.comments = "남기는 말은 최소 10글자 이상 입력하세요";
    if (!value.gender) errs.gender = "성별을 선택하세요";
    if (value.interest.length === 0)
      errs.interest = "관심사를 하나이상 선택하세요.";
    if (!value.edu) errs.edu = "최종학력을 선택하세요.";
    if (value.pwd1 !== value.pwd2 || !value.pwd2)
      errs.pwd2 = "두개의 비밀번호를 같게 입력하세요.";
    if (!m1 || !m2 || !m3[0] || !m3[1])
      errs.email = "올바른 이메일 형식으로 입력하세요";
    if (
      !num.test(value.pwd1) ||
      !txt.test(value.pwd1) ||
      !spc.test(value.pwd1) ||
      value.pwd1.length < 5
    )
      errs.pwd1 =
        "비밀번호는 특수문자, 문자, 숫자를 모두포함해서 5글자 이상 입력하세요.";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(check(Val)).length === 0) {
      alert("회원가입을 축하합니다.");
      history.push("/");
    }
  };

  useEffect(() => {
    setErrs(check(DebouncedVal));
  }, [DebouncedVal]);
  useEffect(() => {
    refFrame.current?.classList.add("on");
  }, []);
  return (
    <Layout title={"Members"}>
      <div className="membersWrap">
        <h2>Join Members</h2>
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="h">회원가입 폼</legend>
              <table>
                <tbody>
                  {/* userid, email */}
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="userid"
                        placeholder="User ID"
                        value={Val.userid}
                        onChange={handleChange}
                      />
                      {Errs.userid && <p>{Errs.userid}</p>}
                    </td>
                    <td>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={Val.email}
                        onChange={handleChange}
                      />
                      {Errs.email && <p>{Errs.email}</p>}
                    </td>
                  </tr>

                  {/* pwd1, pwd2 */}
                  <tr>
                    <td>
                      <input
                        type="password"
                        name="pwd1"
                        placeholder="Password"
                        value={Val.pwd1}
                        onChange={handleChange}
                      />
                      {Errs.pwd1 && <p>{Errs.pwd1}</p>}
                    </td>
                    <td>
                      <input
                        type="password"
                        name="pwd2"
                        placeholder="Re-Password"
                        value={Val.pwd2}
                        onChange={handleChange}
                      />
                      {Errs.pwd2 && <p>{Errs.pwd2}</p>}
                    </td>
                  </tr>

                  {/* edu */}
                  <tr>
                    <td colSpan="2">
                      <select name="edu" onChange={handleChange}>
                        <option value="">Education</option>
                        <option value="elementary-school">초등학교 졸업</option>
                        <option value="middle-school">중학교 졸업</option>
                        <option value="high-school">고등학교 졸업</option>
                        <option value="college">대학교 졸업</option>
                      </select>
                      {Errs.edu && <p>{Errs.edu}</p>}
                    </td>
                  </tr>

                  {/* gender */}
                  <tr>
                    <td colSpan="2">
                      <input
                        type="radio"
                        defaultValue="female"
                        id="female"
                        name="gender"
                        onChange={handleChange}
                      />
                      <label htmlFor="female">Female</label>

                      <input
                        type="radio"
                        defaultValue="male"
                        id="male"
                        name="gender"
                        onChange={handleChange}
                      />
                      <label htmlFor="male">Male</label>
                      {Errs.gender && <p>{Errs.gender}</p>}
                    </td>
                  </tr>

                  {/* interests */}
                  <tr>
                    <td colSpan="2">
                      <input
                        type="checkbox"
                        name="interest"
                        id="sports"
                        defaultValue="sports"
                        onChange={handleCheck}
                      />
                      <label htmlFor="sports">Sports</label>

                      <input
                        type="checkbox"
                        name="interest"
                        id="reading"
                        defaultValue="reading"
                        onChange={handleCheck}
                      />
                      <label htmlFor="reading">Reading</label>

                      <input
                        type="checkbox"
                        name="interest"
                        id="music"
                        defaultValue="music"
                        onChange={handleCheck}
                      />
                      <label htmlFor="music">Music</label>

                      <input
                        type="checkbox"
                        name="interest"
                        id="game"
                        defaultValue="game"
                        onChange={handleCheck}
                      />
                      <label htmlFor="game">Game</label>
                      {Errs.interest && <p>{Errs.interest}</p>}
                    </td>
                  </tr>

                  {/* comments  */}
                  <tr>
                    <td colSpan="2">
                      <textarea
                        name="comments"
                        cols="30"
                        rows="5"
                        placeholder="Leave a comment"
                        value={Val.comments}
                        onChange={handleChange}
                      ></textarea>
                      {Errs.comments && <p>{Errs.comments}</p>}
                    </td>
                  </tr>

                  {/* button set */}
                  <tr className="bottomBtns">
                    <td className="bottomTdBtns" colSpan="2">
                      <input
                        type="reset"
                        value="Cancel"
                        onClick={handleReset}
                      />
                      <input type="submit" value="Submit" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
}
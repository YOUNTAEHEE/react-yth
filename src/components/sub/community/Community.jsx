import { useEffect, useRef, useState } from "react";
import Layout from "../../common/layout/Layout";
import "./Community.scss";

export default function Community() {
  const getLocalData = () => {
    const data = localStorage.getItem("post");
    if (data) return JSON.parse(data);
    else return [];
  };

  const [Post, setPost] = useState(getLocalData());
  const [CurNum, setCurNum] = useState(0);
  const [PageNum, setPageNum] = useState(0);

  const editMode = useRef(false);
  const refEditTit = useRef(null);
  const refEditCon = useRef(null);
  const refTit = useRef(null);
  const refCon = useRef(null);
  const len = useRef(0);
  const pageNum = useRef(0);
  const perNum = useRef(6);

  //취소
  const resetPost = () => {
    refTit.current.value = "";
    refCon.current.value = "";
  };
  //저장
  const createPost = () => {
    if (!refTit.current.value.trim() || !refCon.current.value.trim()) {
      resetPost();
      return alert("제목과 본문을 모두 입력하세요.");
    }
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setPost([
      {
        title: refTit.current.value,
        content: refCon.current.value,
        month: month,
        day: day,
      },
      ...Post,
    ]);
    resetPost();
  };

  //수정모드 변경
  const enableUpdate = (editIndex) => {
    if (editMode.current) return;
    editMode.current = true;
    setPost(
      Post.map((el, idx) => {
        if (editIndex === idx) el.enableUpdate = true;
        return el;
      })
    );
  };
  const updatePost = (updateIndex) => {
    if (!refEditTit.current.value.trim() || !refEditCon.current.value.trim()) {
      return alert("수정할 글의 제목과 본문을 모두 입력하세요.");
    }
    editMode.current = false;
    setPost(
      Post.map((el, idx) => {
        if (updateIndex === idx) {
          el.title = refEditTit.current.value;
          el.content = refEditCon.current.value;
          el.enableUpdate = false;
        }
        return el;
      })
    );
  };
  //삭제
  const deletePost = (delIndex) => {
    if (!window.confirm("정말 해당 게글을 삭제 하시겠습니까?")) return;
    setPost(Post.filter((_, idx) => delIndex !== idx));
  };

  const disableUpdate = (editIndex) => {
    editMode.current = false;
    setPost(
      Post.map((el, idx) => {
        if (editIndex === idx) el.enableUpdate = false;
        return el;
      })
    );
  };

  useEffect(() => {
    Post.map((el) => (el.enableUpdate = false));
    localStorage.setItem("post", JSON.stringify(Post));
    len.current = Post.length;

    pageNum.current =
      len.current % perNum.current === 0
        ? len.current / perNum.current
        : parseInt(len.current / perNum.current) + 1;
    setPageNum(pageNum.current);
  }, [Post]);
  return (
    <Layout title={"Community"}>
      <div className="communityWrap">
        <div className="inputBox">
          <div className="txtBtnsBox">
            <div className="txtBox">
              <input type="text" placeholder="title" ref={refTit} />
              <textarea
                cols="30"
                rows="5"
                placeholder="content"
                ref={refCon}
              ></textarea>
            </div>
            <nav>
              <button onClick={resetPost}>cancle</button>
              <button onClick={createPost}>save</button>
            </nav>
          </div>
          <nav className="pagination">
            {Array(PageNum)
              .fill()
              .map((_, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => idx !== CurNum && setCurNum(idx)}
                    className={idx === CurNum ? "on" : ""}
                  >
                    {idx + 1}
                  </button>
                );
              })}
          </nav>
        </div>

        <div className="showBox">
          {Post.map((el, idx) => {
            if (
              idx >= perNum.current * CurNum &&
              idx < perNum.current * (CurNum + 1)
            ) {
              return (
                <article key={el + idx}>
                  {el.enableUpdate ? (
                    <>
                      <div className="txt">
                        <div>
                          <p>{el.month < 10 ? "0" + el.month : el.month}</p>
                          <p>{el.day}</p>
                        </div>
                        <input
                          type="text"
                          defaultValue={el.title}
                          ref={refEditTit}
                        />
                        <textarea
                          cols="30"
                          rows="4"
                          defaultValue={el.content}
                          ref={refEditCon}
                        ></textarea>
                      </div>
                      <nav>
                        <button onClick={() => disableUpdate(idx)}>
                          cancle
                        </button>
                        <button onClick={() => updatePost(idx)}>update</button>
                      </nav>
                    </>
                  ) : (
                    <>
                      <div className="txt">
                        <div>
                          <p>{el.month < 10 ? "0" + el.month : el.month}</p>
                          <p>{el.day}</p>
                        </div>
                        <h2>{el.title}</h2>
                        <p>{el.content}</p>
                      </div>
                      <nav>
                        <button onClick={() => enableUpdate(idx)}>edit</button>
                        <button onClick={() => deletePost(idx)}>delete</button>
                      </nav>
                    </>
                  )}
                </article>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

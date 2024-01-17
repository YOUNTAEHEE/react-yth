import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "../../common/layout/Layout";
import "./Detail.scss";
import { useYoutubeQueryById } from "../../../hooks/useYoutubeQuery";

export default function Detail() {
  const { id } = useParams();
  const { data: YoutubeData, isSuccess } = useYoutubeQueryById(id);

  return (
    <Layout title={"Detail"}>
      <h2>YOUN Youtube</h2>
      {isSuccess && (
        <div className="videoBox">
          <iframe
            src={`https://www.youtube.com/embed/${YoutubeData?.resourceId.videoId}`}
            title={YoutubeData?.title}
          ></iframe>
        </div>
      )}
      <h3>{YoutubeData?.title}</h3>
      <p>by. {YoutubeData?.videoOwnerChannelTitle}</p>
    </Layout>
  );
}

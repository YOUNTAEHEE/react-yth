const path = process.env.PUBLIC_URL;

export const fetchActive = async () => {
  const data = await fetch(`${path}/DB/departmentCon1.json`);
  const json = await data.json();
  return json;
};

export const fetchMember = async () => {
  const data = await fetch(`${path}/DB/departmentCon2.json`);
  const json = await data.json();
  return json;
};

export const fetchYoutube = async () => {
  const api_key = process.env.REACT_APP_YOUTUBE_API;
  const pid = process.env.REACT_APP_YOUTUBE_LIST;
  const num = 11;
  const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
  const data = await fetch(baseURL);
  const json = await data.json();
  return json;
};
export const fetchFlickr = async (option) => {
  const defaultOpt = { type: "user", id: "199625511@N07" };
  const opt = { ...defaultOpt, ...option };
  const num = 50;
  const flickr_api = process.env.REACT_APP_FLICKR_API;
  const baseURL = `https://www.flickr.com/services/rest/?api_key=${flickr_api}&per_page=${num}&format=json&nojsoncallback=1&method=`;
  const method_interest = "flickr.interestingness.getList";
  const method_user = "flickr.people.getPhotos";
  const method_search = "flickr.photos.search";
  const interestURL = `${baseURL}${method_interest}`;
  const userURL = `${baseURL}${method_user}&user_id=${opt.id}`;
  const searchURL = `${baseURL}${method_search}&tags=${opt.keyword}`;

  let url = "";
  opt.type === "user" && (url = userURL);
  opt.type === "interest" && (url = interestURL);
  opt.type === "search" && (url = searchURL);
  const data = await fetch(url);
  const json = await data.json();
  return json;
};
import Anime from "../asset/anime";

export function useScroll() {
  const scrollTo = (targetPos) => {
    //scrollFrame && new Anime(scrollFrame, { scroll: targetPos });
    window && new Anime(window, { scroll: targetPos });
  };
  const getCurrentScroll = (selfEl, baseLine = 0) => {
    const scroll = window.scrollY - baseLine;
    const modifiedScroll = scroll - selfEl?.offsetTop;
    return modifiedScroll;
  };
  return { scrollTo, getCurrentScroll };
}

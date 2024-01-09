import Anime from "../asset/anime";

export function useScroll(scrollFrame) {
  const scrollTo = (targetPos) => {
    scrollFrame && new Anime(scrollFrame, { scroll: targetPos });
  };
  const getCurrentScroll = (selfEl, baseLine = 0) => {
    const scroll = scrollFrame?.scrollTop - baseLine;
    const modifiedScroll = scroll - selfEl?.offsetTop;
    return modifiedScroll;
  };
  return { scrollTo, getCurrentScroll };
}
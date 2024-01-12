export function useCustomText(type) {
  if (type === "shorten") {
    return (txt, len = 100) => {
      if (txt.length > len) {
        return txt.slice(0, len) + "...";
      } else {
        return txt;
      }
    };
  }
}
export function useSplitText() {
  return (ref, txt, speed = 0, interval = 0) => {
    let tags = "";
    let count = 0;

    for (let letter of txt) {
      tags += `
        <span style='transition-duration:${speed}s;transition-delay:${
        interval * count
      }s; '>${letter === " " ? "&nbsp" : letter}</span>
      `;
      count++;
    }
    ref.innerHTML = tags;
  };
}

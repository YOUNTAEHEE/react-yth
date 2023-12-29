import "./DarkMode.scss";
import { useCookie } from "../../../hooks/useCookie";
import { useGlobalData } from "../../../hooks/useGlobalData";
export default function DarkMode() {
  const { setCookie, isCookie } = useCookie();
  const { Mode, setMode } = useGlobalData();

  return <div className=''>DarkMode</div>;
}

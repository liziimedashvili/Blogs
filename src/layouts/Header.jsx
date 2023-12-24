import HeaderLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#FFFFFF] border-b border-[#E4E3EB]">
      <header className="custom-container flex flex-row py-7 justify-between items-center ">
      <Link to="/">
    <img src={HeaderLogo} alt="Logo" className="w-[150px] h-[24px]" />
  </Link>
        <div>
            <button className="py-[10px] px-[20px] bg-[#5D37F3] border rounded-[8px] text-white">
              შესვლა
            </button>
        </div>
      </header>
    </div>
  );
}

import Header from "@/components/layouts/Header";
import Image from "next/image";
import HeaderCss from "@/components/layouts/Header.module.css";

export default function Home() {
  return (
    <>
      <div className={HeaderCss.hometopbgbanner}>
        <div className="max-w-6xl mx-auto">
          <Header></Header>
        </div>
      </div>
    </>
  );
}

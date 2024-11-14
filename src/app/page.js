import Header from "@/components/layouts/Header";
import Image from "next/image";
import HeaderCss from "@/components/layouts/Header.module.css";
import PropertyList from '@/components/PropertyList';
import FeatureSection from "@/components/FeatureSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <div className={HeaderCss.hometopbgbanner}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <PropertyList />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FeatureSection />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FeaturesGrid />
      </div>
      <div className="mx-auto">
        <ContactForm />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
}

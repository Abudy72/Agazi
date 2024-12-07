
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import LandingPageWrapper from "@/components/LandingPage/LandingPageWrapper";

export default function Home() {
  

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <VerticalDotIndicator /> */}
      <LandingPageWrapper/>

      <Footer />
    </div>
  );
}

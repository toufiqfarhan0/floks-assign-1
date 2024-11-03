import AboutUs from "@/components/AboutUs";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import PageHeader from "@/components/Pageheader";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader />
      <AboutUs />
      <Articles />
      <Footer />
    </div>
  );
}

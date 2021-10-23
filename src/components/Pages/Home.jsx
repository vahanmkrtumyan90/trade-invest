import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Slider from "./../Elements/Slider";
// import Specialization from "./../Elements/Specialization";
import About from "./../Elements/About4";
// import OurValue from "./../Elements/OurValue";
// import OurMission from "./../Elements/OurMission";
import OurServices from "./../Elements/OurServices";
import Callus from "./../Elements/Callus";
import WhyChooseUs from "./../Elements/WhyChooseUs";
// import OurProject from "./../Elements/OurProject";
// import Blogs from "./../Elements/Blogs2";
// import Testimonials from "./../Elements/Testimonials";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Slider />
          <About />
          {/* <Specialization /> */}
          {/* <OurValue />
          <OurMission /> */}
          <OurServices />

          <Callus />
          <WhyChooseUs />
          {/* <OurProject /> */}
          {/* <Blogs /> */}
          {/* <Testimonials /> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;

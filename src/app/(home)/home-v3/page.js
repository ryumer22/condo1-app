import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v3/Header";
import Hero from "@/components/home/home-v3/hero";
import Footer from "@/components/common/default-footer";
import Image from "next/image";
import Partner from "@/components/common/Partner";

import WhyChoose from "@/components/home/home-v3/why-choose";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";

import Cta from "@/components/home/home-v3/Cta";
import InqueryForm from "@/components/home/home-v3/InqueryForm";
import Link from "next/link";

import AboutSection from "@/components/home/home-v2/about";
import SellingBlock from "../../../components/home/home-v9/SellingBlock";
import About from "@/components/home/home-v4/about";
import Agents from "@/components/home/home-v2/Agents";

export const metadata = {
  title: "Condo1 Property Management Built for Owners and Tenants",
};

const Home_V3 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V3 */}
      <section className="home-banner-style3 p0">
        <div className="home-style3">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <Hero />
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-4 d-none d-xl-block">
                <div className="home3-img-box1">
                  <Image
                    width={641}
                    height={650}
                    className="img-1"
                    src="/images/about/about-3.png"
                    alt="about"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="img-2 spin-right"
                    src="/images/about/element-3.png"
                    alt="about"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="img-3 spin-right"
                    src="/images/about/element-3.png"
                    alt="about"
                  />
                  <Image
                    width={276}
                    height={146}
                    className="img-4 default-box-shadow1 bounce-y"
                    src="/images/about/about-1.png"
                    alt="about"
                  />
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V3 */}

      {/* Our Partners */}
      <section className="our-partners bgc-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            {/* End .col-12 */}

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our Partners */}

      {/* About Section (borrowed from home-v2) */}
      <section className="pt80 pb60">
        <div className="container">
          <AboutSection />
        </div>
      </section>

      {/* Why Chose Us */}
      <section>
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <WhyChoose />
          </div>
        </div>
      </section>

      {/*services*/}

      {/* Let’s find the right selling option for you*/}
      <section className="pb90 pb30-md bgc-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title text-white mb-1">What Condo1 Offers</h2>
                <p className="paragraph text-white">
                  Everything You Need, One Team You Can Trust
                </p>
              </div>
            </div>
            <div
              className="col-lg-7 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row">
                <SellingBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services*/}

      {/* About Us */}
      <section className="pt0 pb0">
        <About />
      </section>
      {/* End About Us */}

      {/*People Love Living with Realton */}
      <section className="pb30-md bgc-thm-light">
        <div className="container">
          <div className="row align-items-md-center">
            <div
              className="col-lg-6 mb30-md wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-title">
                <h2 className="title">
                  What Owners & Tenants Say About Condo1
                </h2>
                <p className="paragraph">
                  From stress-free ownership to responsive tenant support, see
                  how Condo1 delivers for both sides.
                </p>
              </div>
              <div className="row">
                <Funfact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-4 offset-xl-2">
              <div
                className="testimonial-slider2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End People Love Living with Realton */}

      <section className="pb90">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">The Condo1 Team</h2>
                <p className="paragraph">
                  Our team of licensed brokers and property professionals is
                  here to make ownership easier and tenants happier
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Inquiry Form */}
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="main-title mb40">
                <h2 className="title">Real Estate Inquiry Form</h2>
                <p className="paragraph fz15">
                  As the complexity of buildings to increase
                </p>
              </div>
              <div className="inquiry-form mb30-md">
                <InqueryForm />
              </div>
            </div>
            {/* End col-6 */}

            <div
              className="col-lg-6 col-xl-6 offset-xl-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="inquiry-form">
                <div className="inquiry-img">
                  <Image
                    width={591}
                    height={778}
                    className="w-100 h-100 cover"
                    src="/images/about/about-4.png"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real Estate Inquiry Form */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V3;

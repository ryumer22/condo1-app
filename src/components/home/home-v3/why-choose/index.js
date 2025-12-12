import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

const WhyChoose = () => {
  return (
    <>
      {/* TEXT + FEATURES — now on the LEFT */}
      <div
        className="col-md-6 col-lg-5"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="main-title2">
          <h2 className="title">Why Owners & Tenants Choose Condo1</h2>
          <p className="paragraph fz15">
            We believe property management should serve everyone involved - not
            just the bottom line.
            <br className="d-none d-lg-block" />
            Our dual-focus approach gives landlords control and gives tenants a
            reason to stay.
          </p>
        </div>

        <div className="why-chose-list">
          <Features />
        </div>
      </div>

      {/* IMAGE — now on the RIGHT */}
      <div className="col-md-6 col-lg-6 offset-lg-1">
        <div className="position-relative mb30-md">
          <Image
            width={591}
            height={685}
            priority
            className="w-100 h-100 cover"
            src="/images/about/why-chose-1.png"
            alt="why choose"
          />

          <Link href="/single-v4/5">
            <div className="iconbox-style5 d-flex align-items-center">
              <span className="icon flaticon-home flex-shrink-0" />
              <div className="iconbox-content flex-shrink-1 ms-2">
                <p className="text mb-0">Total Rent</p>
                <h4 className="title mb-0">4,382 Unit</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

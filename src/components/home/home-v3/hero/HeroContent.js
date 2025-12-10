"use client";

const HeroContent = () => {
  return (
    <div
      className="hero-description mt30 animate-up-2"
      style={{ maxWidth: "350px" }}
    >
      <p>
        Condo1 is a full-service property management company designed for modern
        rental ownership. We combine smart systems, expert service, and
        people-first support to help owners protect their investments and for
        tenants feel at home.
      </p>

      <div className="cta-block mt20">
        <button className="ud-btn btn-dark cta-button">
          Get Started With Condo1 <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;

"use client";

const HeroContent = () => {
  return (
    <div className="hero-description mt30 animate-up-2">
      <p>
        Condo1 is a full-service property management company designed for modern
        rental ownership. We combine smart systems, expert service, and
        people-first support to help owners protect their investments and
        tenants feel at home.
      </p>

      <div className="cta-block mt20">
        <p className="mb20">
          From inspections and tenant screening to rent collection and tribunal
          representation, our team handles the details so you don’t have to.
        </p>

        <button className="ud-btn btn-dark cta-button">
          Get Started With Condo1 <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;

import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import PropertyFilteringBannerTwo from "@/components/listing/grid-view/banner-search-v2/PropertyFilteringBannerTwo";

export const metadata = {
  title: "Property Listings | Condo1",
};

export default function PropertyListingsPage() {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Listing Banner */}
      <PropertyFilteringBannerTwo />

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
}

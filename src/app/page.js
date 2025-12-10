import Home_V3 from "./(home)/home-v3/page";
import Home_V4 from "./(home)/home-v3/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Condo1 Property Management Built for Owners and Tenants",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V3 />
    </Wrapper>
  );
}

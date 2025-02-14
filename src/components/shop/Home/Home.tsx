import BrandFooterRow from "../../common/BrandFooterRow";
import Footer from "../../common/Footer";
import { HorizontalScrollCarousel } from "../../common/HorizontalScrollCarousel";
import JerseyCustomization from "../JerseyCustomization";

const HomeJersey = () => {
  return (
    <div>
      <JerseyCustomization />
      <div className="flex-col px-10 mx-auto items-center">
        <HorizontalScrollCarousel title="Shop Our Retro Range" />
      </div>

      <BrandFooterRow />
      <Footer />
    </div>
  );
};

export default HomeJersey;

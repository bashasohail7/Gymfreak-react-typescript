import { SelectedPage } from "../../types";
import useMediaQuery from "../../hooks/useMediaQuery";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import ActionButton from "../../common/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="md:pb:0 gap-16 bg-gray-20 py-10 md:h-full">
      <motion.div 
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home page text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalled Training Fitness Classes. World Class
              Studios to get the Body Shapes that you dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 "
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              {" "}
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.ContactUs);
              }}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify-items-end
        "
        >
          <img alt="homepage graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="Redbull logo" src={SponsorRedBull} />
              <img alt="Fortune logo" src={SponsorFortune} />
              <img alt="Forbes logo" src={SponsorForbes} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

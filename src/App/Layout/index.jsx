
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -5,
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: "easeInOut",
            },
            y: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
            filter: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          className="w-full"
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Layout;

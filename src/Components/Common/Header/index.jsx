// import { useState } from "react";
// import { UserRound, ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
// import { FaUser } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { title: "صفحه نخست", href: "/", end: true },
//   { title: "دوره ها", href: "/Course" },
//   { title: "اساتید", href: "/teachers" },
//   { title: "اخبار و مقالات", href: "/Article" },
//   { title: "تماس با ما", href: "/contact" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartCount] = useState(1);

//   const getNavLinkClass = ({ isActive }) =>
//     `relative whitespace-nowrap py-3 text-[15px] font-normal transition-colors duration-300 ${
//       isActive ? "text-[#f07800]" : "text-[#777777] hover:text-[#f07800]"
//     }`;

//   return (
//     <header dir="rtl" className="relative z-50 w-full bg-[#fafafa]">
//       <div className="mx-auto flex h-[120px] w-full max-w-[1440px] items-center justify-between px-5 font-['BYekanPlus'] sm:px-8 lg:px-[60px]">
//         <NavLink
//           to="/"
//           aria-label="لوگو - صفحه نخست"
//           className="flex shrink-0 items-center gap-2"
//         >
//           <span className="relative flex h-[38px] w-[38px] shrink-0 items-center rounded-[7px] bg-[#00c8c5]">
//             <span className="absolute right-[5px] z-10 whitespace-nowrap text-[30px] font-black leading-none text-white">
//               لــــ
//             </span>
//           </span>

//           <span className="relative z-10 -mr-[1px] text-[28px] font-black leading-none text-[#171717]">
//             وگو
//           </span>
//         </NavLink>

//         <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.title}
//               to={item.href}
//               end={item.end}
//               className={getNavLinkClass}
//             >
//               {({ isActive }) => (
//                 <>
//                   {item.title}

//                   {isActive && (
//                     <span
//                       className="absolute bottom-0 left-1/2 h-[3px] w-full -translate-x-1/2 rounded-full"
//                       style={{
//                         background:
//                           "linear-gradient(to right, transparent, #f07800 25%, #f07800 75%, transparent)",
//                       }}
//                     />
//                   )}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="hidden shrink-0 items-center gap-3 lg:flex">
//           <NavLink
//             to="/favorites"
//             aria-label="علاقه مندی ها"
//             className="flex h-9 w-8 items-center justify-center text-[#c9c9c9] transition-colors hover:text-[#00bdbb]"
//           >
//             <Heart size={27} strokeWidth={1.7} />
//           </NavLink>

//           <NavLink
//             to="/cart"
//             aria-label="سبد خرید"
//             className="relative flex h-9 w-8 items-center justify-center text-[#bdbdbd] transition-colors hover:text-[#00bdbb]"
//           >
//             <ShoppingBag size={25} strokeWidth={1.7} />

//             {cartCount > 0 && (
//               <span className="absolute -right-0.5 -top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#f5a623] px-1 text-[9px] font-bold text-white">
//                 {cartCount}
//               </span>
//             )}
//           </NavLink>

//           <NavLink
//             to="/account"
//             className="flex h-[36px] items-center gap-2 rounded-full bg-[#00c8c5] px-4 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#00aaa8]"
//           >
//             <span>حساب کاربری</span>
//             <FaUser size={18} className="text-amber-50" />
//           </NavLink>
//         </div>

//         <div className="flex items-center gap-3 lg:hidden">
//           <NavLink to="/search" aria-label="جستجو" className="text-gray-500">
//             <Search size={21} />
//           </NavLink>

//           <NavLink
//             to="/account"
//             aria-label="حساب کاربری"
//             className="text-4xl text-[#00bdbb]"
//           >
//             <UserRound size={22} />
//           </NavLink>

//           <button
//             type="button"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
//             aria-expanded={menuOpen}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:border-[#00c8c5] hover:text-[#00bdbb]"
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
//           <nav className="flex flex-col">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.title}
//                 to={item.href}
//                 end={item.end}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `border-b border-gray-100 px-3 py-4 text-sm transition-colors last:border-b-0 hover:text-[#00bdbb] ${
//                     isActive
//                       ? "font-bold text-[#00bdbb]"
//                       : "font-medium text-gray-600"
//                   }`
//                 }
//               >
//                 {item.title}
//               </NavLink>
//             ))}

//             <div className="mt-3 flex items-center justify-between px-3">
//               <NavLink
//                 to="/cart"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-3 text-sm text-gray-600"
//               >
//                 <ShoppingBag size={19} />
//                 سبد خرید
//                 <span className="text-[#f5a623]">({cartCount})</span>
//               </NavLink>

//               <NavLink
//                 to="/favorites"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-3 text-sm text-gray-600"
//               >
//                 <Heart size={19} />
//                 علاقه مندی ها
//               </NavLink>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }




import { useState } from "react";
import {
  UserRound,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Search,
} from "lucide-react";
import { FaUser } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { title: "صفحه نخست", href: "/", end: true },
  { title: "دوره ها", href: "/Course" },
  { title: "اساتید", href: "/Teachers" },
  { title: "اخبار و مقالات", href: "/Article" },
  { title: "تماس با ما", href: "/contact" },
];

const ease = [0.22, 1, 0.36, 1];

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -7,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    height: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      duration: 0.35,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    height: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

function Logo() {
  return (
    <NavLink
      to="/"
      aria-label="لوگو - صفحه نخست"
      className="flex shrink-0 items-center gap-2"
    >
      <span className="relative flex h-[38px] w-[38px] shrink-0 items-center rounded-[7px] bg-[#00c8c5]">
        <span className="absolute right-[5px] z-10 whitespace-nowrap text-[30px] font-black leading-none text-white">
          لــــ
        </span>
      </span>

      <span className="relative z-10 -mr-[1px] text-[28px] font-black leading-none text-[#171717]">
        وگو
      </span>
    </NavLink>
  );
}

function NavItems({ mobile = false, onNavigate }) {
  return (
    <>
      {navItems.map((item) => (
        <motion.div
          key={item.title}
          variants={mobile ? mobileItemVariants : itemVariants}
          className={mobile ? "w-full" : ""}
        >
          <NavLink
            to={item.href}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              mobile
                ? `relative block border-b border-gray-100 px-3 py-4 text-sm transition-colors last:border-b-0 hover:text-[#00bdbb] ${
                    isActive
                      ? "font-bold text-[#00bdbb]"
                      : "font-medium text-gray-600"
                  }`
                : `relative block whitespace-nowrap py-3 text-[15px] font-normal transition-colors duration-300 ${
                    isActive
                      ? "text-[#f07800]"
                      : "text-[#777777] hover:text-[#f07800]"
                  }`
            }
          >
            {({ isActive }) => (
              <>
                {item.title}

                {!mobile && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-right rounded-full"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #f07800 25%, #f07800 75%, transparent)",
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        </motion.div>
      ))}
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(1);
  const location = useLocation();

  // با تغییر مسیر، منوی موبایل بسته می‌شود.
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      dir="rtl"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-50 w-full  bg-[radial-gradient(ellipse_90%_120%_at_100%_70%,_#e5f7f3_10%,_#f3faff_55%,_#ffffff_100%)]"
    >
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center justify-between px-5 font-['BYekanPlus'] sm:px-8 lg:h-[105px] lg:px-[60px]">
        <motion.div variants={itemVariants}>
          <Logo />
        </motion.div>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          <NavItems />
        </nav>

        {/* ابزارهای دسکتاپ */}
        <motion.div
          variants={itemVariants}
          className="hidden shrink-0 items-center gap-3 lg:flex"
        >
          <NavLink
            to="/favorites"
            aria-label="علاقه‌مندی‌ها"
            className="flex h-9 w-8 items-center justify-center text-[#c9c9c9] transition-colors duration-300 hover:text-[#00bdbb]"
          >
            <Heart size={24} strokeWidth={1.7} />
          </NavLink>

          <NavLink
            to="/cart"
            aria-label="سبد خرید"
            className="relative flex h-9 w-8 items-center justify-center text-[#bdbdbd] transition-colors duration-300 hover:text-[#00bdbb]"
          >
            <ShoppingBag size={23} strokeWidth={1.7} />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#f5a623] px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/account"
            className="flex h-[38px] items-center gap-2 rounded-full bg-[#00c8c5] px-4 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00aaa8] hover:shadow-[0_6px_18px_rgba(0,200,197,0.2)]"
          >
            <span>حساب کاربری</span>
            <FaUser size={16} className="text-amber-50" />
          </NavLink>
        </motion.div>

       
        <div className="flex items-center gap-2 lg:hidden">
          <NavLink
            to="/search"
            aria-label="جست‌وجو"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#00bdbb]"
          >
            <Search size={20} />
          </NavLink>

          <NavLink
            to="/account"
            aria-label="حساب کاربری"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#00bdbb] transition-colors hover:bg-[#00c8c5]/10"
          >
            <UserRound size={22} />
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-all duration-300 hover:border-[#00c8c5] hover:bg-white hover:text-[#00bdbb]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

     
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-navigation"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-[0_20px_35px_rgba(0,0,0,0.07)] lg:hidden"
          >
            <nav className="flex flex-col px-5 py-3">
              <NavItems mobile onNavigate={closeMenu} />

              <motion.div
                variants={mobileItemVariants}
                className="mt-3 flex items-center justify-between gap-3 px-3"
              >
                <NavLink
                  to="/cart"
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-xl py-3 text-sm text-gray-600 transition-colors hover:text-[#00bdbb]"
                >
                  <ShoppingBag size={19} />
                  سبد خرید
                  <span className="text-[#f5a623]">
                    ({cartCount})
                  </span>
                </NavLink>

                <NavLink
                  to="/favorites"
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-xl py-3 text-sm text-gray-600 transition-colors hover:text-[#00bdbb]"
                >
                  <Heart size={19} />
                  علاقه‌مندی‌ها
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

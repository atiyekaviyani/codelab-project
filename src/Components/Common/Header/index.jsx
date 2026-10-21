import { useState } from "react";
import { UserRound, ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { title: "صفحه نخست", href: "/", end: true },
  { title: "دوره ها", href: "/Course" },
  { title: "اساتید", href: "/teachers" },
  { title: "اخبار و مقالات", href: "/Article" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  const getNavLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-3 text-[15px] font-normal transition-colors duration-300 ${
      isActive ? "text-[#f07800]" : "text-[#777777] hover:text-[#f07800]"
    }`;

  return (
    <header dir="rtl" className="relative z-50 w-full bg-[#fafafa]">
      <div className="mx-auto flex h-[120px] w-full max-w-[1440px] items-center justify-between px-5 font-['BYekanPlus'] sm:px-8 lg:px-[60px]">
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

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.href}
              end={item.end}
              className={getNavLinkClass}
            >
              {({ isActive }) => (
                <>
                  {item.title}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 h-[3px] w-full -translate-x-1/2 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #f07800 25%, #f07800 75%, transparent)",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <NavLink
            to="/favorites"
            aria-label="علاقه مندی ها"
            className="flex h-9 w-8 items-center justify-center text-[#c9c9c9] transition-colors hover:text-[#00bdbb]"
          >
            <Heart size={27} strokeWidth={1.7} />
          </NavLink>

          <NavLink
            to="/cart"
            aria-label="سبد خرید"
            className="relative flex h-9 w-8 items-center justify-center text-[#bdbdbd] transition-colors hover:text-[#00bdbb]"
          >
            <ShoppingBag size={25} strokeWidth={1.7} />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#f5a623] px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/account"
            className="flex h-[36px] items-center gap-2 rounded-full bg-[#00c8c5] px-4 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#00aaa8]"
          >
            <span>حساب کاربری</span>
            <FaUser size={18} className="text-amber-50" />
          </NavLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <NavLink to="/search" aria-label="جستجو" className="text-gray-500">
            <Search size={21} />
          </NavLink>

          <NavLink
            to="/account"
            aria-label="حساب کاربری"
            className="text-4xl text-[#00bdbb]"
          >
            <UserRound size={22} />
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:border-[#00c8c5] hover:text-[#00bdbb]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-gray-100 px-3 py-4 text-sm transition-colors last:border-b-0 hover:text-[#00bdbb] ${
                    isActive
                      ? "font-bold text-[#00bdbb]"
                      : "font-medium text-gray-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <div className="mt-3 flex items-center justify-between px-3">
              <NavLink
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-3 text-sm text-gray-600"
              >
                <ShoppingBag size={19} />
                سبد خرید
                <span className="text-[#f5a623]">({cartCount})</span>
              </NavLink>

              <NavLink
                to="/favorites"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-3 text-sm text-gray-600"
              >
                <Heart size={19} />
                علاقه مندی ها
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   Play,
//   Search,
//   UsersRound,
//   Presentation,
//   Sparkles,
//   ArrowLeft,
//   Code2,
// } from "lucide-react";

// const floatAnimation = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const ease = [0.22, 1, 0.36, 1];

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease,
//     },
//   },
// };

// function FloatingStat({
//   icon: Icon,
//   value,
//   label,
//   className = "",
//   delay = 0,
//   color = "teal",
// }) {
//   const colors = {
//     teal: "bg-[#00c9c5]",
//     orange: "bg-[#f39800]",
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.9,
//         delay,
//         ease,
//       }}
//       className={`absolute z-20 flex items-center gap-3
//         rounded-2xl border border-white/80 bg-white/90
//         px-3 py-3 shadow-[0_12px_35px_rgba(20,50,60,0.10)]
//         backdrop-blur-xl sm:px-4 ${className}`}
//     >
//       <span
//         className={`flex h-11 w-11 shrink-0 items-center
//           justify-center rounded-xl text-white shadow-sm
//           ${colors[color]}`}
//       >
//         <Icon size={23} strokeWidth={1.8} />
//       </span>

//       <span className="flex flex-col gap-1 text-right">
//         <span className="whitespace-nowrap text-sm font-extrabold text-[#203338]">
//           {value}
//         </span>
//         <span className="whitespace-nowrap text-[11px] text-[#899799] sm:text-xs">
//           {label}
//         </span>
//       </span>
//     </motion.div>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section
//       dir="rtl"
//       id="home"
//       className="relative isolate overflow-hidden bg-[#f8fbfb]
//         text-[#203338]"
//     >
//       {/* پس‌زمینه تزئینی */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32
//           -top-40 h-[420px] w-[420px] rounded-full
//           bg-[#c9f5ef]/50 blur-[100px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-40
//           left-[-100px] h-[400px] w-[400px] rounded-full
//           bg-[#e3edff]/60 blur-[100px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[8%]
//           top-[18%] hidden grid-cols-5 gap-3 opacity-50
//           sm:grid"
//       >
//         {Array.from({ length: 25 }).map((_, index) => (
//           <span key={index} className="h-1 w-1 rounded-full bg-[#00c9c5]" />
//         ))}
//       </div>

//       <div
//         className="relative mx-auto grid min-h-[560px]
//           max-w-[1440px] grid-cols-1 items-center gap-12
//           px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[620px]
//           lg:grid-cols-2 lg:gap-10 lg:px-[6%] lg:py-16
//           xl:px-[8%]"
//       >
//         {/* بخش متن */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.13,
//               },
//             },
//           }}
//           className="relative z-10 order-1 flex flex-col
//             items-center text-center lg:items-start
//             lg:text-right"
//         >
//           <motion.div
//             variants={fadeUp}
//             className="mb-5 inline-flex items-center gap-2
//               rounded-full border border-[#00c9c5]/20
//               bg-white/80 px-4 py-2.5 text-xs font-bold
//               text-[#009b94] shadow-sm sm:text-sm"
//           >
//             <Sparkles size={15} />
//             مسیر یادگیری تو از اینجا شروع می‌شه
//           </motion.div>

//           <motion.h1
//             variants={fadeUp}
//             className="max-w-[600px] text-[30px] font-black
//               leading-[1.8] tracking-tight text-[#182c32]
//               sm:text-4xl lg:text-[43px] xl:text-[48px]"
//           >
//             مهارت‌های جدید یاد بگیر،
//             <span className="relative mx-2 inline-block text-[#00aaa2]">
//               حرفه‌ای
//               <span
//                 aria-hidden="true"
//                 className="absolute -bottom-1 right-0
//                   h-[5px] w-full rounded-full
//                   bg-[#00c9c5]/25"
//               />
//             </span>
//             رشد کن
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="mt-5 max-w-[480px] text-sm
//               leading-8 text-[#758588] sm:text-base
//               sm:leading-9"
//           >
//             مرجع آموزش زنده و تعاملی برنامه‌نویسی و تکنولوژی؛ با دوره‌های
//             کاربردی، مدرس‌های حرفه‌ای و مسیری روشن برای پیشرفت تو.
//           </motion.p>

//           {/* جست‌وجو */}
//           <motion.form
//             variants={fadeUp}
//             onSubmit={(event) => event.preventDefault()}
//             role="search"
//             className="mt-7 flex h-[60px] w-full
//               max-w-[440px] items-center gap-2
//               rounded-2xl border border-[#e6eeee]
//               bg-white p-2
//               shadow-[0_10px_35px_rgba(20,50,60,0.07)]
//               transition-all duration-300
//               focus-within:border-[#00c9c5]
//               focus-within:shadow-[0_12px_35px_rgba(0,201,197,0.12)]"
//           >
//             <Search size={19} className="mr-2 shrink-0 text-[#a0aeaf]" />

//             <input
//               type="search"
//               placeholder="چه چیزی می‌خوای یاد بگیری؟"
//               aria-label="جست‌وجوی دوره‌های آموزشی"
//               className="min-w-0 flex-1 bg-transparent
//                 px-1 text-right text-xs text-[#35474b]
//                 outline-none placeholder:text-[#a4afb0]
//                 sm:text-sm"
//             />

//             <button
//               type="submit"
//               aria-label="جست‌وجو"
//               className="flex h-11 shrink-0 items-center
//                 justify-center gap-2 rounded-xl
//                 bg-[#00b7ad] px-4 text-xs font-bold
//                 text-white shadow-md shadow-[#00b7ad]/15
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-[#009d95]
//                 focus-visible:outline focus-visible:outline-2
//                 focus-visible:outline-offset-2
//                 focus-visible:outline-[#00b7ad] sm:text-sm"
//             >
//               جست‌وجو
//               <ArrowLeft size={16} />
//             </button>
//           </motion.form>

//           {/* مزیت‌ها */}
//           <motion.div
//             variants={fadeUp}
//             className="mt-7 flex flex-wrap items-center
//               justify-center gap-x-5 gap-y-3
//               text-xs text-[#7c8b8e] sm:gap-x-6
//               lg:justify-start"
//           >
//             <span className="flex items-center gap-2">
//               <span
//                 className="flex h-6 w-6 items-center
//                 justify-center rounded-full bg-[#dff8f3]
//                 text-[#00a99f]"
//               >
//                 <Play size={12} fill="currentColor" />
//               </span>
//               آموزش کاربردی
//             </span>

//             <span className="flex items-center gap-2">
//               <span
//                 className="flex h-6 w-6 items-center
//                 justify-center rounded-full bg-[#fff0df]
//                 text-[#e78300]"
//               >
//                 <GraduationCap size={15} />
//               </span>
//               مدرس‌های متخصص
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* بخش تصویر */}
//         <div
//           className="relative order-2 mx-auto w-full
//           max-w-[500px] lg:max-w-[540px]"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.94, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{
//               duration: 1.1,
//               delay: 0.15,
//               ease,
//             }}
//             className="relative mx-auto aspect-square
//               w-full max-w-[480px]"
//           >
//             {/* هاله پشت تصویر */}
//             <div
//               aria-hidden="true"
//               className="absolute inset-[8%] rounded-[42%]
//                 bg-gradient-to-br from-[#c4f4eb]
//                 via-[#e5f7f3] to-[#e5edff]"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute inset-[13%] rounded-[38%]
//                 border border-white/80"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute left-[16%] top-[17%]
//                 h-14 w-14 rounded-2xl bg-white/60
//                 shadow-sm backdrop-blur-sm"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute bottom-[16%] right-[13%]
//                 h-20 w-20 rounded-full bg-[#00c9c5]/10
//                 blur-xl"
//             />

//             {/* تصویر اصلی */}
//             <motion.img
//               src="/hero section pic.png"
//               alt="فضای آموزشی و یادگیری برنامه‌نویسی"
//               fetchPriority="high"
//               initial={{ opacity: 0, y: 15 }}
//               animate={{
//                 opacity: 1,
//                 y: [0, -7, 0],
//               }}
//               transition={{
//                 opacity: {
//                   duration: 0.8,
//                   delay: 0.25,
//                 },
//                 y: {
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }}
//               className="absolute inset-0 z-[1] h-full
//                 w-full object-contain"
//             />

//             {/* آیکون شناور */}
//             <motion.div
//               animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute right-[8%] top-[12%]
//                 z-10 flex h-14 w-14 items-center
//                 justify-center rounded-2xl border
//                 border-white/80 bg-white/90
//                 text-[#00aaa2]
//                 shadow-[0_12px_30px_rgba(20,50,60,0.10)]"
//             >
//               <Code2 size={28} strokeWidth={1.7} />
//             </motion.div>

//             {/* دکمه معرفی */}
//             <motion.button
//               type="button"
//               aria-label="مشاهده ویدیوی معرفی"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute left-[17%] top-[37%]
//                 z-20 flex h-12 w-12 items-center
//                 justify-center rounded-full
//                 border-4 border-white/80 bg-[#00bcb3]
//                 text-white shadow-lg
//                 shadow-[#00bcb3]/25"
//             >
//               <Play size={19} fill="white" className="mr-0.5" />
//             </motion.button>

//             {/* کارت دانشجوها */}
//             <FloatingStat
//               icon={UsersRound}
//               value="۱۰۰۰+"
//               label="دانشجوی همراه"
//               color="orange"
//               delay={0.5}
//               className="right-[-1%] top-[14%] sm:right-[-3%]"
//             />

//             {/* کارت مدرس‌ها */}
//             <FloatingStat
//               icon={Presentation}
//               value="۵۰+"
//               label="مدرس متخصص"
//               color="teal"
//               delay={0.7}
//               className="bottom-[12%] left-[-1%] sm:left-[-3%]"
//             />

//             {/* تزئینات کوچک */}
//             <motion.span
//               aria-hidden="true"
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 18,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute bottom-[23%] right-[5%]
//                 z-10 text-[#00c9c5]/70"
//             >
//               <Sparkles size={25} />
//             </motion.span>
//           </motion.div>
//         </div>
//       </div>

//       {/* خط انتهایی ظریف */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 bottom-0 h-px
//           bg-gradient-to-l from-transparent
//           via-[#00c9c5]/25 to-transparent"
//       />
//     </section>
//   );
// }




import { motion } from "framer-motion";
import {
  GraduationCap,
  Play,
  Search,
  UsersRound,
  Presentation,
  Sparkles,
  ArrowLeft,
  Code2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const floatingTransition = {
  duration: 4.5,
  repeat: Infinity,
  ease: "easeInOut",
};

function FloatingStat({
  icon: Icon,
  value,
  label,
  className = "",
  delay = 0,
  color = "teal",
}) {
  const colors = {
    teal: "bg-[#00c9c5]",
    orange: "bg-[#f39800]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay,
          ease,
        },
        scale: {
          duration: 0.8,
          delay,
          ease,
        },
        y: {
          duration: 4.2,
          delay: delay + 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
        transition: { duration: 0.25 },
      }}
      className={`absolute z-20 flex items-center gap-3
        rounded-2xl border border-white/80 bg-white/90
        px-3 py-3 shadow-[0_12px_35px_rgba(20,50,60,0.10)]
        backdrop-blur-xl sm:px-4 ${className}`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center
          justify-center rounded-xl text-white shadow-sm
          ${colors[color]}`}
      >
        <Icon size={23} strokeWidth={1.8} />
      </span>

      <span className="flex flex-col gap-1 text-right">
        <span className="whitespace-nowrap text-sm font-extrabold text-[#203338]">
          {value}
        </span>

        <span className="whitespace-nowrap text-[11px] text-[#899799] sm:text-xs">
          {label}
        </span>
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      id="home"
      className="relative isolate overflow-hidden bg-[#f8fbfb] text-[#203338]"
    >
      {/* نور متحرک بالای سمت راست */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -22, 0],
          y: [0, 18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-40
          h-[420px] w-[420px] rounded-full
          bg-[#c9f5ef]/50 blur-[100px]"
      />

      {/* نور متحرک پایین سمت چپ */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 20, 0],
          y: [0, -22, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 left-[-100px]
          h-[400px] w-[400px] rounded-full
          bg-[#e3edff]/60 blur-[100px]"
      />

      {/* نقاط تزئینی */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.3, 0.65, 0.3],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[18%]
          hidden grid-cols-5 gap-3 sm:grid"
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#00c9c5]"
          />
        ))}
      </motion.div>

      <div
        className="relative mx-auto grid min-h-[560px]
          max-w-[1440px] grid-cols-1 items-center gap-12
          px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[620px]
          lg:grid-cols-2 lg:gap-10 lg:px-[6%] lg:py-16
          xl:px-[8%]"
      >
        {/* بخش متن */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
          className="relative z-10 order-1 flex flex-col
            items-center text-center lg:items-start lg:text-right"
        >
          {/* برچسب بالای عنوان */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -3,
              transition: { duration: 0.25 },
            }}
            className="mb-5 inline-flex items-center gap-2
              rounded-full border border-[#00c9c5]/20
              bg-white/80 px-4 py-2.5 text-xs font-bold
              text-[#009b94] shadow-sm sm:text-sm"
          >
            <motion.span
              animate={{
                rotate: [0, 12, -12, 0],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={15} />
            </motion.span>

            مسیر یادگیری تو از اینجا شروع می‌شه
          </motion.div>

          {/* عنوان اصلی */}
          <motion.h1
            variants={fadeUp}
            className="max-w-[600px] text-[30px] font-black
              leading-[1.8] tracking-tight text-[#182c32]
              sm:text-4xl lg:text-[43px] xl:text-[48px]"
          >
            مهارت‌های جدید یاد بگیر،
            <span className="relative mx-2 inline-block text-[#00aaa2]">
              حرفه‌ای

              <motion.span
                aria-hidden="true"
                animate={{
                  scaleX: [0.7, 1, 0.7],
                  opacity: [0.45, 0.85, 0.45],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 right-0
                  h-[5px] w-full origin-right rounded-full
                  bg-[#00c9c5]/25"
              />
            </span>
            رشد کن
          </motion.h1>

          {/* توضیحات */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[480px] text-sm
              leading-8 text-[#758588] sm:text-base sm:leading-9"
          >
            مرجع آموزش زنده و تعاملی برنامه‌نویسی و تکنولوژی؛ با دوره‌های
            کاربردی، مدرس‌های حرفه‌ای و مسیری روشن برای پیشرفت تو.
          </motion.p>

          {/* جست‌وجو */}
          <motion.form
            variants={fadeUp}
            onSubmit={(event) => event.preventDefault()}
            role="search"
            className="mt-7 flex h-[60px] w-full max-w-[440px]
              items-center gap-2 rounded-2xl border border-[#e6eeee]
              bg-white p-2 shadow-[0_10px_35px_rgba(20,50,60,0.07)]
              transition-all duration-300
              focus-within:border-[#00c9c5]
              focus-within:shadow-[0_12px_35px_rgba(0,201,197,0.12)]"
          >
            <Search
              size={19}
              className="mr-2 shrink-0 text-[#a0aeaf]"
            />

            <input
              type="search"
              placeholder="چه چیزی می‌خوای یاد بگیری؟"
              aria-label="جست‌وجوی دوره‌های آموزشی"
              className="min-w-0 flex-1 bg-transparent px-1
                text-right text-xs text-[#35474b] outline-none
                placeholder:text-[#a4afb0] sm:text-sm"
            />

            <motion.button
              type="submit"
              aria-label="جست‌وجو"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 shrink-0 items-center justify-center
                gap-2 rounded-xl bg-[#00b7ad] px-4 text-xs
                font-bold text-white shadow-md shadow-[#00b7ad]/15
                transition-colors duration-300 hover:bg-[#009d95]
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#00b7ad] sm:text-sm"
            >
              جست‌وجو
              <ArrowLeft size={16} />
            </motion.button>
          </motion.form>

          {/* مزیت‌ها */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center
              justify-center gap-x-5 gap-y-3 text-xs
              text-[#7c8b8e] sm:gap-x-6 lg:justify-start"
          >
            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <span
                className="flex h-6 w-6 items-center justify-center
                  rounded-full bg-[#dff8f3] text-[#00a99f]"
              >
                <Play size={12} fill="currentColor" />
              </span>

              آموزش کاربردی
            </motion.span>

            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <span
                className="flex h-6 w-6 items-center justify-center
                  rounded-full bg-[#fff0df] text-[#e78300]"
              >
                <GraduationCap size={15} />
              </span>

              مدرس‌های متخصص
            </motion.span>
          </motion.div>
        </motion.div>

        {/* بخش تصویر */}
        <div
          className="relative order-2 mx-auto w-full
            max-w-[500px] lg:max-w-[540px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease,
            }}
            className="relative mx-auto aspect-square w-full max-w-[480px]"
          >
            {/* هاله متحرک پشت تصویر */}
            <motion.div
              aria-hidden="true"
              animate={{
                rotate: [0, 3, 0, -3, 0],
                scale: [1, 1.025, 1],
                borderRadius: ["42%", "39%", "42%"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[8%]
                bg-gradient-to-br from-[#c4f4eb]
                via-[#e5f7f3] to-[#e5edff]"
            />

            {/* قاب ظریف */}
            <motion.div
              aria-hidden="true"
              animate={{
                rotate: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[13%] rounded-[38%]
                border border-white/80"
            />

            {/* مربع تزئینی شناور */}
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[16%] top-[17%]
                h-14 w-14 rounded-2xl bg-white/60
                shadow-sm backdrop-blur-sm"
            />

            {/* هاله کوچک پایین تصویر */}
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] right-[13%]
                h-20 w-20 rounded-full bg-[#00c9c5]/10 blur-xl"
            />

            {/* تصویر اصلی */}
            <motion.img
              src="/hero section pic.png"
              alt="فضای آموزشی و یادگیری برنامه‌نویسی"
              fetchPriority="high"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.25,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 z-[1] h-full w-full object-contain"
            />

            {/* آیکون شناور کدنویسی */}
            <motion.div
              animate={{
                y: [0, -9, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              className="absolute right-[8%] top-[12%] z-10
                flex h-14 w-14 items-center justify-center
                rounded-2xl border border-white/80 bg-white/90
                text-[#00aaa2]
                shadow-[0_12px_30px_rgba(20,50,60,0.10)]"
            >
              <Code2 size={28} strokeWidth={1.7} />
            </motion.div>

            {/* دکمه معرفی */}
            <motion.button
              type="button"
              aria-label="مشاهده ویدیوی معرفی"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 12px 35px rgba(0,188,179,0.4)",
              }}
              whileTap={{ scale: 0.93 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute left-[17%] top-[37%] z-20
                flex h-12 w-12 items-center justify-center
                rounded-full border-4 border-white/80
                bg-[#00bcb3] text-white shadow-lg
                shadow-[#00bcb3]/25"
            >
              <Play size={19} fill="white" className="mr-0.5" />
            </motion.button>

            {/* کارت دانشجوها */}
            <FloatingStat
              icon={UsersRound}
              value="۱۰۰۰+"
              label="دانشجوی همراه"
              color="orange"
              delay={0.5}
              className="right-[-1%] top-[14%] sm:right-[-3%]"
            />

            {/* کارت مدرس‌ها */}
            <FloatingStat
              icon={Presentation}
              value="۵۰+"
              label="مدرس متخصص"
              color="teal"
              delay={0.7}
              className="bottom-[12%] left-[-1%] sm:left-[-3%]"
            />

            {/* ستاره چرخان */}
            <motion.span
              aria-hidden="true"
              animate={{
                rotate: 360,
                y: [0, -5, 0],
              }}
              transition={{
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-[23%] right-[5%]
                z-10 text-[#00c9c5]/70"
            >
              <Sparkles size={25} />
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* خط انتهایی ظریف */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-x-0 bottom-0 h-px
          bg-gradient-to-l from-transparent
          via-[#00c9c5]/25 to-transparent"
      />
    </section>
  );
}

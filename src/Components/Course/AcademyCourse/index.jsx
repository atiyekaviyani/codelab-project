

// import { Search } from "lucide-react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// // اعتبارسنجی فرم جست‌وجو
// const courseSearchSchema = Yup.object({
//   course: Yup.string()
//     .trim()
//     .required("لطفاً نام دوره موردنظر را وارد کنید.")
//     .max(100, "عبارت جست‌وجو نباید بیشتر از ۱۰۰ کاراکتر باشد."),
// });

// export default function AcademyCourse({ image = "/img course.png", onSearch }) {
//   const handleSubmit = (values) => {
//     const query = values.course.trim();

//     if (!query) return;

//     if (onSearch) {
//       onSearch(query);
//     } else {
//       console.log("جست‌وجوی دوره:", query);
//     }
//   };

//   return (
//     <section
//       dir="rtl"
//       className="
//         min-h-[280px] bg-[#FAFAFA]
//         px-3 pt-[44px] pb-16
//         sm:px-5
//       "
//     >
//       <div
//         className="
//           academy-course-card
//           relative isolate mx-auto
//           h-[200px] w-full max-w-[824px]
//           rounded-[12px]
//           border border-[#E7F0ED]
//           bg-[#F1F9F8]
//           shadow-[0_5px_18px_rgba(24,60,53,0.06)]
//           overflow-visible
//         "
//       >
//         <svg
//           aria-hidden="true"
//           viewBox="0 0 430 300"
//           fill="none"
//           className="
//             pointer-events-none absolute
//             -left-[45px] -top-[30px]
//             z-0 h-[300px] w-[430px]
//             overflow-visible
//           "
//         >
//           <defs>
//             <linearGradient
//               id="academyMintGradient"
//               x1="0"
//               y1="0"
//               x2="390"
//               y2="280"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#A5D8B2" />
//               <stop offset=".52" stopColor="#13C9C2" />
//               <stop offset="1" stopColor="#A5D8B2" />
//             </linearGradient>
//           </defs>

//           <path
//             d="
//               M -28 112
//               C 20 35, 104 17, 155 65
//               C 192 100, 150 153, 130 186
//               C 102 231, 128 271, 193 270
//               C 258 269, 331 247, 380 213
//               C 406 195, 420 175, 439 168
//             "
//             stroke="url(#academyMintGradient)"
//             strokeWidth="3.5"
//             strokeLinecap="round"
//             strokeDasharray="1 9"
//           />

//           <path
//             d="
//               M -20 244
//               C 42 264, 92 285, 156 291
//               C 221 298, 292 287, 350 265
//             "
//             stroke="#D9DEDC"
//             strokeWidth="1.3"
//             strokeLinecap="round"
//             strokeDasharray="2 6"
//           />
//         </svg>

//         <div
//           aria-hidden="true"
//           className="
//             pointer-events-none absolute
//             left-[18px] top-[10px] z-10
//             h-[290px] w-[250px]
//             rotate-[-4deg]
//             rounded-[16px]
//             bg-gradient-to-br
//             from-[#F8E7B2] via-[#E0EFD4] to-[#BCEEE8]
//             shadow-[0_8px_22px_rgba(66,111,95,0.07)]
//           "
//         />

//         <img
//           src={image}
//           alt="دانشجو در حال یادگیری دوره‌های آموزشی"
//           draggable="false"
//           className="
//             pointer-events-none absolute
//             left-[4px] top-[-25px] z-20
//             h-[330px] w-[300px]
//             max-w-none
//             object-contain object-center
//           "
//         />

//         <div
//           className="
//             absolute right-[24px] top-[20px] z-30
//             w-[410px] max-w-[calc(100%-340px)]
//             text-right
//           "
//         >
//           <div className="flex items-center gap-2">
//             <span
//               aria-hidden="true"
//               className="
//                 h-[9px] w-[9px] shrink-0
//                 rounded-full bg-[#00C9C3]
//               "
//             />

//             <h2
//               className="
//                 whitespace-nowrap
//                 text-[22px] leading-[1.5]
//                 font-bold text-[#111111]
//               "
//             >
//               دوره های آموزشی
//             </h2>
//           </div>

//           <p
//             className="
//               mt-[7px]
//               whitespace-nowrap
//               text-[13px] leading-[1.8]
//               font-normal text-[#A6A6A6]
//             "
//           >
//             به روز ترین دوره هایی که میتوانید پیدا کنید
//           </p>

//           <Formik
//             initialValues={{ course: "" }}
//             validationSchema={courseSearchSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form
//                 role="search"
//                 className="
//                   mt-[17px] flex h-[50px] w-full
//                   items-center gap-2
//                   rounded-full
//                   border border-[#E8ECEA]
//                   bg-[#FCFCFC]
//                   py-[6px] pr-[16px] pl-[6px]
//                   shadow-[inset_0_2px_5px_rgba(0,0,0,0.025),0_2px_5px_rgba(0,0,0,0.025)]
//                   transition-shadow duration-200
//                   focus-within:border-[#B5E7E0]
//                   focus-within:shadow-[0_0_0_3px_rgba(19,201,194,0.08)]
//                 "
//               >
//                 <Field
//                   type="search"
//                   name="course"
//                   dir="rtl"
//                   autoComplete="off"
//                   placeholder="چی میخوای یاد بگیری؟..."
//                   aria-label="جست‌وجوی دوره‌های آموزشی"
//                   className="
//                     min-w-0 flex-1
//                     border-0 bg-transparent
//                     text-right text-[12px]
//                     text-[#333333]
//                     outline-none
//                     placeholder:text-[#B5B5B5]
//                     placeholder:opacity-100
//                     focus:outline-none
//                     focus:ring-0
//                   "
//                 />

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   aria-label="جست‌وجوی دوره"
//                   className="
//                     flex h-[36px] w-[36px] shrink-0
//                     items-center justify-center
//                     rounded-full
//                     bg-[#E98300]
//                     text-white
//                     shadow-[0_2px_5px_rgba(233,131,0,0.16)]
//                     transition-all duration-200
//                     hover:bg-[#D97800]
//                     active:scale-95
//                     focus-visible:outline-2
//                     focus-visible:outline-offset-2
//                     focus-visible:outline-[#E98300]
//                     disabled:cursor-not-allowed
//                     disabled:opacity-70
//                   "
//                 >
//                   <Search size={17} strokeWidth={2.2} />
//                 </button>

//                 <ErrorMessage
//                   name="course"
//                   component="span"
//                   className="sr-only"
//                 />
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { motion } from "framer-motion";
// import { Search, ArrowLeft, Sparkles, BookOpen } from "lucide-react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const courseSearchSchema = Yup.object({
//   course: Yup.string()
//     .trim()
//     .required("لطفاً نام دوره موردنظر را وارد کنید.")
//     .max(100, "عبارت جست‌وجو نباید بیشتر از ۱۰۰ کاراکتر باشد."),
// });

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function AcademyCourse({
//   image = "/img course.png",
//   onSearch,
// }) {
//   const handleSubmit = (values) => {
//     const query = values.course.trim();

//     if (!query) return;

//     if (onSearch) {
//       onSearch(query);
//     } else {
//       console.log("جست‌وجوی دوره:", query);
//     }
//   };

//   return (
//     <section
//       dir="rtl"
//       className="relative isolate overflow-hidden bg-[#FAFAFA] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
//     >
//       <motion.div
//         aria-hidden="true"
//         animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="pointer-events-none absolute -right-32 -top-36 h-80 w-80 rounded-full bg-[#C8F5EF]/50 blur-[100px]"
//       />

//       <motion.div
//         aria-hidden="true"
//         animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="pointer-events-none absolute -bottom-40 left-[-80px] h-96 w-96 rounded-full bg-[#E4F0FF]/60 blur-[110px]"
//       />

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}
//         className="relative mx-auto max-w-[1120px]"
//       >
//         <div
//           className="relative isolate overflow-hidden rounded-[24px] border border-white bg-gradient-to-br from-white via-[#F8FCFB] to-[#EAF8F5] shadow-[0_20px_70px_rgba(28,66,59,0.07)] sm:rounded-[32px]"
//         >
//           {/* تزئینات پس‌زمینه */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-0 opacity-60"
//             style={{
//               backgroundImage:
//                 "radial-gradient(#B5DCD5 0.8px, transparent 0.8px)",
//               backgroundSize: "19px 19px",
//               maskImage:
//                 "linear-gradient(to left, transparent 25%, black 100%)",
//             }}
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-[#00BDB4]/10 sm:h-80 sm:w-80"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -left-10 top-20 h-48 w-48 rounded-full border border-[#00BDB4]/10 sm:h-64 sm:w-64"
//           />

//           <div className="relative grid min-h-[360px] grid-cols-1 items-center sm:min-h-[390px] lg:grid-cols-[1fr_0.9fr]">
//             {/* محتوای متنی */}
//             <div className="relative z-20 order-1 px-6 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-12 lg:px-12 lg:py-14">
//               <motion.div
//                 variants={fadeUp}
//                 className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00B9AE]/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#009D95] shadow-sm sm:text-sm"
//               >
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DFF8F3]">
//                   <Sparkles size={14} />
//                 </span>
//                 یک قدم تا یادگیری مهارت جدید
//               </motion.div>

//               <motion.h2
//                 variants={fadeUp}
//                 className="max-w-[540px] text-3xl font-black leading-[1.7] tracking-tight text-[#203338] sm:text-4xl sm:leading-[1.65] lg:text-[42px]"
//               >
//                 مسیر یادگیریت رو
//                 <span className="relative mx-2 inline-block whitespace-nowrap text-[#00A79F]">
//                   هوشمندانه
//                 </span>
//                 شروع کن
//               </motion.h2>

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-3 max-w-[440px] text-sm leading-8 text-[#77898A] sm:mt-4 sm:text-[15px] sm:leading-9"
//               >
//                 از بین دوره‌های کاربردی برنامه‌نویسی و تکنولوژی، دوره مناسب
//                 خودت رو پیدا کن و قدم بعدی پیشرفتت رو بردار.
//               </motion.p>

//               {/* فرم جست‌وجو */}
//               <motion.div variants={fadeUp} className="mt-7 max-w-[490px] sm:mt-8">
//                 <Formik
//                   initialValues={{ course: "" }}
//                   validationSchema={courseSearchSchema}
//                   onSubmit={handleSubmit}
//                 >
//                   {({ isSubmitting, errors, touched }) => (
//                     <Form role="search">
//                       <div
//                         className={`group flex h-[58px] items-center gap-2 rounded-2xl border bg-white p-1.5 pr-4 shadow-[0_8px_30px_rgba(28,66,59,0.06)] transition-all duration-300 focus-within:-translate-y-0.5 focus-within:border-[#00B9AE]/50 focus-within:shadow-[0_12px_35px_rgba(0,185,174,0.12)] ${
//                           errors.course && touched.course
//                             ? "border-red-300"
//                             : "border-[#E7EFED]"
//                         }`}
//                       >
//                         <Search
//                           size={20}
//                           className="shrink-0 text-[#A0B0AF] transition-colors duration-300 group-focus-within:text-[#00A79F]"
//                         />

//                         <Field
//                           type="search"
//                           name="course"
//                           dir="rtl"
//                           autoComplete="off"
//                           placeholder="مثلاً آموزش React، جاوااسکریپت..."
//                           aria-label="جست‌وجوی دوره‌های آموزشی"
//                           className="min-w-0 flex-1 border-0 bg-transparent text-right text-xs text-[#34484A] outline-none placeholder:text-[#A5B1B0] focus:ring-0 sm:text-sm"
//                         />

//                         <motion.button
//                           type="submit"
//                           disabled={isSubmitting}
//                           whileHover={{ scale: 1.04 }}
//                           whileTap={{ scale: 0.96 }}
//                           aria-label="جست‌وجوی دوره"
//                           className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E98300] px-3.5 text-xs font-bold text-white shadow-[0_4px_12px_rgba(233,131,0,0.2)] transition-colors hover:bg-[#D97800] disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-sm"
//                         >
//                           <span className="hidden sm:inline">جست‌وجو</span>
//                           <ArrowLeft size={17} />
//                         </motion.button>
//                       </div>

//                       <ErrorMessage
//                         name="course"
//                         component="p"
//                         className="mt-2 text-xs text-red-500"
//                       />
//                     </Form>
//                   )}
//                 </Formik>
//               </motion.div>

//               <motion.div
//                 variants={fadeUp}
//                 className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs text-[#82918F] sm:gap-x-6"
//               >
//                 <span className="flex items-center gap-2">
//                   <BookOpen size={15} className="text-[#00AAA2]" />
//                   دوره‌های کاربردی
//                 </span>

//                 <span className="flex items-center gap-2">
//                   <Sparkles size={15} className="text-[#E98300]" />
//                   یادگیری هدفمند
//                 </span>
//               </motion.div>
//             </div>

//             {/* تصویر */}
//             <motion.div
//               initial={{ opacity: 0, x: -24, scale: 0.96 }}
//               whileInView={{ opacity: 1, x: 0, scale: 1 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.15,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="relative order-2 mx-auto flex w-full max-w-[420px] items-center justify-center px-8 pt-5 sm:px-12 lg:order-2 lg:h-full lg:max-w-none lg:px-2 lg:pt-0"
//             >
//               {/* هاله پشت تصویر */}
//               <motion.div
//                 aria-hidden="true"
//                 animate={{
//                   scale: [1, 1.04, 1],
//                   rotate: [0, 3, 0],
//                 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#C6F1E8] via-[#DFF5ED] to-[#DCEBFF] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
//               />

//               <div
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 sm:h-[235px] sm:w-[235px] lg:h-[270px] lg:w-[270px]"
//               />

//               <motion.img
//                 src={image}
//                 alt="دانشجو در حال یادگیری دوره‌های آموزشی"
//                 draggable="false"
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative z-10 h-[220px] w-full max-w-[300px] object-contain sm:h-[270px] sm:max-w-[350px] lg:h-[350px] lg:max-w-[400px]"
//               />

//               {/* برچسب شناور */}
//               <motion.div
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute right-5 top-8 z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 shadow-[0_10px_30px_rgba(28,66,59,0.09)] backdrop-blur-xl sm:right-8 lg:right-2 lg:top-[18%]"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E0F8F3] text-[#00A79F]">
//                   <BookOpen size={17} />
//                 </span>

//                 <span className="text-xs font-bold text-[#34484A]">
//                   یادگیری آسان‌تر
//                 </span>
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 7, 0] }}
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-7 left-5 z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 shadow-[0_10px_30px_rgba(28,66,59,0.09)] backdrop-blur-xl sm:bottom-10 sm:left-8 lg:bottom-[18%] lg:left-1"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF0DF] text-[#E98300]">
//                   <Sparkles size={17} />
//                 </span>

//                 <span className="text-xs font-bold text-[#34484A]">
//                   مهارت‌های جدید
//                 </span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  Code2,
  GraduationCap,
  Headphones,
  MonitorSmartphone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  BriefcaseBusiness,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";

const courses = [
  {
    id: 1,
    title: "آموزش جامع React",
    category: "فرانت‌اند",
    badge: "محبوب‌ترین",
    rating: "۴.۹",
    students: "۱۲۰۰+",
    lessons: "۴۸ جلسه",
    duration: "۳۲ ساعت",
    oldPrice: "۲,۴۰۰,۰۰۰",
    price: "۱,۹۰۰,۰۰۰",
    description: "از مفاهیم پایه تا ساخت پروژه‌های واقعی و حرفه‌ای",
    instructor: "تیم آموزشی CodeLab",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    symbol: "⚛",
    theme: "react",
  },
  {
    id: 2,
    title: "آموزش پایتون",
    category: "برنامه‌نویسی",
    badge: "پیشنهاد ویژه",
    rating: "۴.۸",
    students: "۹۵۰+",
    lessons: "۳۶ جلسه",
    duration: "۲۴ ساعت",
    oldPrice: "۱,۸۰۰,۰۰۰",
    price: "۱,۴۰۰,۰۰۰",
    description: "از پایه تا پیاده‌سازی پروژه‌های کاربردی",
    instructor: "تیم آموزشی CodeLab",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    symbol: "Py",
    theme: "python",
  },
  {
    id: 3,
    title: "طراحی رابط کاربری UI/UX",
    category: "طراحی محصول",
    badge: "جدید",
    rating: "۴.۷",
    students: "۷۸۰+",
    lessons: "۲۸ جلسه",
    duration: "۲۸ ساعت",
    oldPrice: "۲,۰۰۰,۰۰۰",
    price: "۱,۶۰۰,۰۰۰",
    description: "طراحی تجربه‌های کاربری جذاب و مدرن",
    instructor: "تیم طراحی CodeLab",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    symbol: "F",
    theme: "figma",
  },
  {
    id: 4,
    title: "طراحی وب با HTML و CSS",
    category: "طراحی وب",
    badge: "مناسب شروع",
    rating: "۴.۹",
    students: "۱۴۰۰+",
    lessons: "۳۰ جلسه",
    duration: "۲۰ ساعت",
    oldPrice: "۱,۵۰۰,۰۰۰",
    price: "۱,۱۰۰,۰۰۰",
    description: "ساخت صفحات واکنش‌گرا از صفر تا اجرا",
    instructor: "تیم آموزشی CodeLab",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85",
    symbol: "</>",
    theme: "html",
  },
  {
    id: 5,
    title: "تحلیل داده با پایتون",
    category: "تحلیل داده",
    badge: "کاربردی",
    rating: "۴.۸",
    students: "۶۲۰+",
    lessons: "۳۲ جلسه",
    duration: "۲۶ ساعت",
    oldPrice: "۲,۲۰۰,۰۰۰",
    price: "۱,۷۰۰,۰۰۰",
    description: "تحلیل داده و ساخت گزارش‌های حرفه‌ای",
    instructor: "تیم آموزشی CodeLab",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    symbol: "DB",
    theme: "data",
  },
];

const decorations = [
  {
    Icon: Code2,
    position: "left-[6%] top-[14%]",
    size: "h-[66px] w-[66px]",
    duration: 5,
    delay: 0,
    rotate: -12,
    color: "text-white",
    background: "bg-gradient-to-br from-[#56e1d5] to-[#00a9a3]",
  },
  {
    Icon: GraduationCap,
    position: "right-[6%] top-[13%]",
    size: "h-[76px] w-[76px]",
    duration: 7,
    delay: 0.6,
    rotate: 8,
    color: "text-[#009f99]",
    background: "bg-white/90",
  },
  {
    Icon: BookOpen,
    position: "left-[9%] bottom-[19%]",
    size: "h-14 w-14",
    duration: 6.5,
    delay: 0.3,
    rotate: 9,
    color: "text-[#00aaa4]",
    background: "bg-white/90",
  },
  {
    Icon: Play,
    position: "right-[8%] bottom-[18%]",
    size: "h-14 w-14",
    duration: 4.5,
    delay: 0.9,
    rotate: -9,
    color: "text-white",
    background: "bg-gradient-to-br from-[#ffc44c] to-[#f28c16]",
  },
];

function FloatingDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      {decorations.map((item, index) => {
        const Icon = item.Icon;

        return (
          <motion.div
            key={item.position}
            className={`absolute ${item.position} ${item.size} z-10 flex items-center justify-center rounded-[20px] border border-white/80 shadow-[0_14px_35px_rgba(0,150,145,0.17)] ${item.color} ${item.background}`}
            animate={{
              y: [0, -13, 0, 9, 0],
              rotate: [
                item.rotate,
                item.rotate + 5,
                item.rotate - 4,
                item.rotate,
              ],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={index === 1 ? 39 : 30} strokeWidth={1.8} />
          </motion.div>
        );
      })}

      <motion.div
        className="absolute left-[17%] top-[22%] h-3 w-3 rounded-full bg-[#5ee0d6]"
        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-[17%] bottom-[23%] h-4 w-4 rounded-full bg-[#f5a044]"
        animate={{ y: [0, 12, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 4.2, repeat: Infinity }}
      />

      <div className="absolute left-[12%] top-[30%] h-24 w-24 rounded-full bg-[#b9f4ee]/50 blur-3xl" />
      <div className="absolute right-[12%] top-[35%] h-28 w-28 rounded-full bg-[#ffdda9]/40 blur-3xl" />

      <div className="absolute left-[13%] bottom-[15%] grid grid-cols-5 gap-2 opacity-50">
        {Array.from({ length: 20 }, (_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#68d5ce]"
          />
        ))}
      </div>

      <div className="absolute right-[15%] top-[22%] grid grid-cols-5 gap-2 opacity-50">
        {Array.from({ length: 20 }, (_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#68d5ce]"
          />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course, active, onCourseClick }) {
  return (
    <article
      className={`flex h-full min-h-[450px] flex-col overflow-hidden rounded-[17px] border bg-white transition-all duration-500 sm:rounded-[20px] ${
        active
          ? "border-white shadow-[0_24px_65px_rgba(0,130,130,0.20)]"
          : "border-[#d8f0ed] shadow-[0_12px_32px_rgba(0,100,100,0.09)]"
      }`}
    >
    
      <div className="relative h-[155px] shrink-0 overflow-hidden sm:h-[175px] lg:h-[185px]">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div
          className={`absolute inset-0 ${
            course.theme === "react"
              ? "bg-gradient-to-br from-[#004f70]/60 via-[#007f9c]/20 to-[#00c9c0]/20"
              : course.theme === "python"
                ? "bg-gradient-to-br from-[#008c7f]/65 via-[#12b6a6]/30 to-[#ffd36a]/20"
                : "bg-gradient-to-br from-[#7048aa]/60 via-[#b05ec7]/25 to-[#45d9d0]/20"
          }`}
        />

        <div
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
            active ? "h-24 w-24 text-6xl" : "h-[70px] w-[70px] text-4xl"
          } rounded-2xl border border-white/30 bg-white/15 font-black text-white shadow-xl backdrop-blur-[2px] transition-all duration-500`}
        >
          {course.symbol}
        </div>

        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-sm sm:text-xs">
          {course.badge === "محبوب‌ترین" && (
            <span className="ml-1">🔥</span>
          )}
          {course.badge}
        </span>

        <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-slate-700 sm:text-xs">
          {course.category}
        </span>
      </div>

     
      <div className="flex flex-1 flex-col p-4 text-right sm:p-5">
        <h3
          className={`mb-2 font-extrabold leading-7 text-[#142d43] ${
            active ? "text-lg sm:text-xl" : "text-base sm:text-lg"
          }`}
        >
          {course.title}
        </h3>

        <p className="mb-4 line-clamp-2 min-h-10 text-xs leading-6 text-slate-500 sm:text-sm">
          {course.description}
        </p>

        <div className="mb-4 flex items-center justify-between gap-2 border-b border-slate-100 pb-4 text-[10px] text-slate-500 sm:text-xs">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Star
              size={14}
              fill="currentColor"
              className="text-amber-400"
            />
            {course.rating}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap">
            <UsersRound size={14} />
            {course.students}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap">
            <BookOpen size={14} />
            {course.lessons}
          </span>

          <span className="hidden items-center gap-1 whitespace-nowrap sm:flex">
            <Clock3 size={14} />
            {course.duration}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="mb-1 truncate text-[10px] text-slate-300 line-through sm:text-xs">
              {course.oldPrice} تومان
            </p>
            <p className="whitespace-nowrap text-sm font-black text-[#00a69f] sm:text-base">
              {course.price}
              <span className="mr-1 text-[10px] font-semibold">تومان</span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => onCourseClick?.(course)}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full font-bold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 ${
              active
                ? "bg-[#f28c16] px-4 py-3 text-xs text-white shadow-[0_7px_18px_rgba(242,140,22,0.24)] hover:bg-[#e77d08] sm:px-5 sm:text-sm"
                : "border border-[#f28c16] bg-white px-3 py-2.5 text-[10px] text-[#ed8a15] hover:bg-orange-50 sm:text-xs"
            }`}
          >
            مشاهده دوره
            <ArrowLeft size={active ? 15 : 13} />
          </button>
        </div>
      </div>
    </article>
  );
}

function FeatureBar() {
  const features = [
    { Icon: Headphones, title: "پشتیبانی ۲۴ ساعته" },
    { Icon: MonitorSmartphone, title: "دسترسی در موبایل" },
    { Icon: BriefcaseBusiness, title: "دوره‌های پروژه‌محور" },
    { Icon: ShieldCheck, title: "مدرک معتبر" },
    { Icon: UsersRound, title: "مدرس‌های متخصص" },
  ];

  return (
    <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 overflow-hidden rounded-xl border border-[#cdeeea] bg-white/75 shadow-[0_8px_28px_rgba(0,130,130,0.08)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
      {features.map(({ Icon, title }, index) => (
        <div
          key={title}
          className={`flex min-h-[76px] flex-col items-center justify-center gap-2 px-2 py-3 ${
            index !== features.length - 1
              ? "border-l border-[#edf7f6]"
              : ""
          }`}
        >
          <Icon size={22} strokeWidth={1.8} className="text-[#00aaa4]" />
          <span className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PopularCoursesSlider({ onCourseClick }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f1fcfb_55%,#faffff_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
    
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-[#c8f8f2]/65 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#d9f9f5]/70 blur-3xl" />
        <div className="absolute right-[30%] top-[32%] h-56 w-56 rounded-full bg-white/80 blur-3xl" />
      </div>

      <FloatingDecorations />

      <div className="relative z-20 mx-auto max-w-[1240px]">
        
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d2f3ef] bg-white/80 px-4 py-2 text-[10px] font-bold text-[#00a69f] shadow-sm sm:text-xs">
            <Sparkles size={13} />
            پرفروش‌ترین دوره‌ها
            <Sparkles size={12} />
          </div>

          <h2 className="text-2xl font-black leading-relaxed tracking-tight text-[#102c43] sm:text-3xl lg:text-4xl">
            دوره‌های آموزشی{" "}
            <span className="text-[#00aaa4]">محبوب</span>
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
            دوره‌های کاربردی و پروژه‌محور برای ساختن آینده‌ای بهتر
          </p>
        </motion.header>

      
        <div className="relative mx-auto max-w-[1120px]">
          <button
            type="button"
            aria-label="دوره قبلی"
            onClick={() => swiper?.slidePrev()}
            className="absolute right-0 top-[43%] z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-[#f28c16] shadow-[0_8px_24px_rgba(0,140,135,0.13)] transition hover:scale-110 hover:bg-[#f28c16] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 md:flex lg:-right-3"
          >
            <ArrowRight size={21} />
          </button>

          <button
            type="button"
            aria-label="دوره بعدی"
            onClick={() => swiper?.slideNext()}
            className="absolute left-0 top-[43%] z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-[#f28c16] shadow-[0_8px_24px_rgba(0,140,135,0.13)] transition hover:scale-110 hover:bg-[#f28c16] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 md:flex lg:-left-3"
          >
            <ArrowLeft size={21} />
          </button>

          <Swiper
            modules={[Autoplay, A11y]}
            onSwiper={setSwiper}
            onSlideChange={(instance) =>
              setActiveIndex(instance.realIndex)
            }
            dir="rtl"
            loop
            centeredSlides
            grabCursor
            watchSlidesProgress
            speed={650}
            slidesPerView={1.08}
            spaceBetween={14}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 1.35,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 22,
              },
            }}
            className="codelab-popular-swiper !overflow-visible !pb-5"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id} className="!h-auto !py-3">
                {({ isActive }) => (
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.91,
                      y: isActive ? -3 : 10,
                      opacity: isActive ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="h-full"
                  >
                    <CourseCard
                      course={course}
                      active={isActive}
                      onCourseClick={onCourseClick}
                    />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

        
          <div className="mt-1 flex items-center justify-center gap-2.5">
            {courses.map((course, index) => (
              <button
                key={course.id}
                type="button"
                aria-label={`نمایش ${course.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => swiper?.slideToLoop(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00aaa4]/20 ${
                  activeIndex === index
                    ? "w-7 bg-[#00aaa4]"
                    : "w-2.5 bg-[#d6f0ed] hover:bg-[#8be0d9]"
                }`}
              />
            ))}
          </div>
        </div>

        <FeatureBar />
      </div>
    </section>
  );
}

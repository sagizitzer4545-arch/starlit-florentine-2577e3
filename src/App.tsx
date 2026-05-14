/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Hammer, 
  ArrowLeft, 
  ShieldCheck, 
  Factory, 
  Warehouse, 
  Drill, 
  Phone, 
  Sofa, 
  Paintbrush, 
  Grid3X3, 
  Ruler,
  CheckCircle2,
  X,
  Plus,
  Star,
  Quote
} from "lucide-react";
import { useState, type ReactNode } from "react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  key?: string | number;
}

function TestimonialCard({ name, role, content, image, rating }: TestimonialProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative group"
    >
      <Quote className="absolute top-8 left-8 w-12 h-12 text-amber-500/10 group-hover:text-amber-500/20 transition-colors" />
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8 relative z-10 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/20"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-black text-slate-900">{name}</h4>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | 'accessibility' | 'accessibility_menu' | null }>({
    isOpen: false,
    type: null
  });

  const [accessibility, setAccessibility] = useState({
    fontScale: 1,
    highContrast: false,
    underlineLinks: false,
    grayscale: false,
    readableFont: false,
  });

  const phoneNumber = "0509158543";

  const getAccessibilityClasses = () => {
    let classes = "";
    if (accessibility.highContrast) classes += " contrast-125 brightness-110";
    if (accessibility.grayscale) classes += " grayscale";
    if (accessibility.underlineLinks) classes += " [font-weight:bold]"; // Enforcing readability
    return classes;
  };

  const getFontSizeClass = () => {
    if (accessibility.fontScale === 1.1) return "text-[1.1rem]";
    if (accessibility.fontScale === 1.2) return "text-[1.2rem]";
    return "";
  };

  return (
    <div 
      className={`min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 ${getAccessibilityClasses()} ${getFontSizeClass()} ${accessibility.readableFont ? 'font-serif' : 'font-sans'}`} 
      dir="rtl"
    >
      {/* Accessibility Button */}
      <button 
        onClick={() => setLegalModal({ isOpen: true, type: 'accessibility_menu' })}
        className="fixed bottom-6 right-6 z-[90] bg-slate-900 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-500 transition-all border-4 border-white group"
        aria-label="תפריט נגישות"
        title="פתיחת תפריט נגישות"
      >
        <ShieldCheck className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-tighter block leading-none">שרון אחזקות</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">הנדימן ופתרונות PVC</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-amber-600 transition-colors ${currentPage === 'home' ? 'text-amber-600' : ''}`}>דף הבית</button>
            <a href="#services" className="hover:text-amber-600 transition-colors" onClick={() => setCurrentPage('home')}>שירותים</a>
            <a href="#pvc" className="hover:text-amber-600 transition-colors" onClick={() => setCurrentPage('home')}>ווילונות PVC</a>
            <button onClick={() => setCurrentPage('about')} className={`hover:text-amber-600 transition-colors ${currentPage === 'about' ? 'text-amber-600' : ''}`}>אודותינו</button>
          </div>
          <button 
            onClick={() => setIsOrderModalOpen(true)}
            className="bg-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-amber-600 transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-amber-100 uppercase tracking-widest"
          >
            <Plus className="w-4 h-4" />
            הזמנת עבודה
          </button>
        </div>
      </nav>

      <main className="pt-28 font-sans">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section className="relative overflow-hidden pt-12 pb-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-black mb-6 border border-amber-100">
                      <ShieldCheck className="w-4 h-4" />
                      שירות מקצועי. אמינות ללא פשרות. שרון אחזקות.
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                      ההנדימן שיעשה לכם <br />
                      <span className="text-amber-500 underline decoration-slate-200 underline-offset-8">סדר בבית</span> <br />
                      ובעסק
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                      משפכטל וצבע ועד להרכבת ררהיטים ותיקון רשתות - אני כאן לכל משימה שתצטרכו בבית או בעסק.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={`tel:${phoneNumber}`} className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
                        <Phone className="w-5 h-5 text-amber-500" />
                        {phoneNumber}
                      </a>
                      <button 
                        onClick={() => setIsOrderModalOpen(true)}
                        className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-50 transition-all"
                      >
                        הזמינו עבודה עכשיו
                      </button>
                    </div>
                  </motion.div>
                  
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <Sofa className="w-10 h-10 text-amber-500 mb-4" />
                        <h3 className="font-bold text-lg">הרכבת רהיטים</h3>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-amber-500 p-6 rounded-3xl shadow-xl text-white">
                        <Grid3X3 className="w-10 h-10 mb-4 text-white" />
                        <h3 className="font-bold text-lg text-white">תיקון רשתות</h3>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white">
                        <Paintbrush className="w-10 h-10 mb-4 text-amber-500" />
                        <h3 className="font-bold text-lg text-white">צבע ושפכטל</h3>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <Factory className="w-10 h-10 text-amber-500 mb-4" />
                        <h3 className="font-bold text-lg">וילונות PVC</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">תיק עבודות</h2>
                    <p className="text-slate-500 text-lg font-medium italic">הכירו את האיכות של שרון אחזקות דרך העיניים</p>
                    <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
                  </div>
                  
                  <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Paintbrush className="w-10 h-10 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">תמונות מעבודות אחרונות יעלו בקרוב</h3>
                    <p className="text-slate-500 font-bold">אנחנו מעדכנים את תיק העבודות שלנו עם הפרויקטים החדשים ביותר.</p>
                  </div>
                </div>
              </section>

              {/* Services List */}
              <section id="services" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16 font-sans">
                    <h2 className="text-4xl font-black mb-4 tracking-tight">השירותים הכלליים שאני מציע</h2>
                    <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
                    <ServiceCard 
                       icon={<Sofa className="w-8 h-8" />}
                       title="הרכבת רהיטים"
                       description="הרכבת כל סוגי הרהיטים (איקאה, רשתות שיווק ועוד) בצורה בטוחה ויציבה."
                    />
                    <ServiceCard 
                       icon={<Grid3X3 className="w-8 h-8" />}
                       title="תיקון והחלפת רשתות"
                       description="תיקון מסגרות, החלפת רשתות קרועות בחדשות איכותיות ועמידות."
                    />
                    <ServiceCard 
                       icon={<Paintbrush className="w-8 h-8" />}
                       title="שפכטל וצבע"
                       description="עבודות צבע נקיות, תיקוני טיח ושפכטל ברמה הגבוהה ביותר."
                    />
                    <ServiceCard 
                       icon={<Ruler className="w-8 h-8" />}
                       title="תלייה והתקנה"
                       description="תליית טלוויזיות, מדפים, תמונות, וילונות וגופי תאורה."
                    />
                    <ServiceCard 
                       icon={<Drill className="w-8 h-8" />}
                       title="תיקונים שונים"
                       description="החלפת ברזים, צילינדרים, מנעולים וכל תקלה קטנה שזקוקה לטיפול."
                    />
                    <ServiceCard 
                       icon={<ShieldCheck className="w-8 h-8" />}
                       title="שירות אישי"
                       description="אצלי תקבלו יחס אישי, מחירים נוחים ועבודה עם חיוך."
                    />
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <span className="text-amber-500 font-black tracking-widest uppercase text-xs">מה הלקוחות אומרים</span>
                    <h2 className="text-4xl font-black mt-2 mb-4 tracking-tight">המלצות מכל הלב</h2>
                    <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "דניאל כהן",
                        role: "לקוח פרטי, תל אביב",
                        content: "שירות מעולה! שרון הגיע בזמן, הרכיב את הארונות במקצועיות והשאיר הכל נקי. מומלץ בחום לכל מי שצריך עבודה איכותית.",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
                        rating: 5
                      },
                      {
                        name: "רחל אברהם",
                        role: "מנהלת לוגיסטיקה, רשת מזון",
                        content: "התקנו וילונות PVC במחסן. שרון נתן פתרון מושלם, עבודה נקייה ומהירה. חסך לנו המון באנרגיה והתקין הכל לפי התקן.",
                        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                        rating: 5
                      },
                      {
                        name: "יוסי לוי",
                        role: "לקוח פרטי, רמת גן",
                        content: "תיקון רשתות בכל הבית. עבודה יסודית, מחיר הוגן ושירות עם חיוך. המקצוענות והאמינות של שרון ניכרת בכל פרט.",
                        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
                        rating: 5
                      }
                    ].map((t, i) => (
                      <TestimonialCard 
                        key={i} 
                        name={t.name}
                        role={t.role}
                        content={t.content}
                        image={t.image}
                        rating={t.rating}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* PVC Specialization Section */}
              <section id="pvc" className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 text-amber-500 font-black mb-4 bg-amber-500/10 w-fit px-4 py-1 rounded-full text-xs tracking-widest uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      מומחיות ב-PVC לעסקים
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                      פתרונות <span className="text-amber-500">PVC</span> <br />
                      לחללים תעשייתיים
                    </h2>
                    <p className="text-slate-400 text-xl mb-10 leading-relaxed">
                      וילונות ה-PVC שלנו מספקים הגנה תרמית מושלמת למחסני מזון וקירור. מעבר נוח לעובדים ולציוד תוך שמירה על תנאי האחסון האופטימליים.
                    </p>
                    <ul className="space-y-4 mb-10 text-lg">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                        מניעת איבוד קור וחיסכון באנרגיה
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                        הגנה מפני אבק, ציפורים ומזיקים
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                        עמידה מלאה בתקני משרד הבריאות
                      </li>
                    </ul>
                    <button 
                      onClick={() => setIsOrderModalOpen(true)}
                      className="bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20"
                    >
                      קבלו ייעוץ והצעת מחיר
                    </button>
                  </div>
                  <div className="lg:w-1/2">
                     <div className="bg-slate-800 rounded-[3rem] aspect-video border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 flex gap-1 h-full w-full p-4 opacity-10">
                          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                            <div key={i} className="flex-1 bg-amber-500 rounded-full"></div>
                          ))}
                        </div>
                        <Warehouse className="w-24 h-24 text-amber-500 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                     </div>
                  </div>
                </div>
              </section>

              {/* Big Contact Banner */}
              <section className="py-24 bg-amber-500 text-slate-900 text-center font-sans">
                <div className="max-w-4xl mx-auto px-4">
                   <h2 className="text-4xl md:text-6xl font-black mb-10 italic tracking-tighter">זקוקים לעזרה בבית או בעסק?</h2>
                   <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <a href={`tel:${phoneNumber}`} className="bg-slate-900 text-white px-12 py-6 rounded-3xl text-3xl font-black hover:scale-105 transition-transform flex items-center gap-4 shadow-2xl tracking-tighter">
                        <Phone className="w-8 h-8 text-amber-500" />
                        {phoneNumber}
                      </a>
                      <button 
                        onClick={() => setIsOrderModalOpen(true)}
                        className="bg-white border-4 border-slate-900 text-slate-900 px-12 py-6 rounded-3xl text-2xl font-black hover:bg-slate-50 transition-colors shadow-lg"
                      >
                        הזמנת עבודה מהירה
                      </button>
                   </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 py-12"
            >
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                  <span className="text-amber-500 font-black tracking-widest uppercase">אודות שרון אחזקות</span>
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                    הסיפור שמאחורי <br />
                    <span className="text-amber-500">המקצוענות</span>
                  </h2>
                  <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                    <p>
                      שרון אחזקות הוקמה מתוך תשוקה אמיתית למקצועיות, שירות ודיוק. אנו מאמינים שכל בית ועסק זקוקים ל"ידיים טובות" שאפשר לסמוך עליהן בעיניים עצומות.
                    </p>
                    <p>
                      עם ניסיון רב שנים בעבודות תחזוקה, התקנות ותיקונים, שרון מוביל את החברה עם דגש על אמינות ללא פשרות, עמידה בלוחות זמנים והקפדה על הפרטים הקטנים ביותר.
                    </p>
                    <p>
                      אנחנו מתמחים בשני עולמות מקבילים: שירותי הנדימן מתקדמים לקהל הפרטי, ופתרונות PVC תעשייתיים מותאמים אישית לעסקים, מחסני מזון ומפעלים.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                      <h4 className="text-4xl font-black text-slate-900">10+</h4>
                      <p className="text-slate-500 font-bold">שנות ניסיון</p>
                    </div>
                    <div>
                      <h4 className="text-4xl font-black text-slate-900">100%</h4>
                      <p className="text-slate-500 font-bold">לקוחות מרוצים</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                      <div className="bg-white rounded-[3rem] shadow-2xl w-full aspect-[1/1] flex flex-col items-center justify-center border-4 border-slate-50 p-12">
                        <div className="w-48 h-48 bg-amber-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-amber-200 mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                          <Hammer className="w-24 h-24 text-white" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-2 italic">שרון</h3>
                          <h4 className="text-2xl font-black text-amber-500 tracking-[0.1em] uppercase">אחזקות</h4>
                          <div className="w-12 h-1 bg-slate-200 mx-auto mt-4 rounded-full"></div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100">
                    <ShieldCheck className="w-12 h-12 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-black mb-4">החזון שלנו</h3>
                    <p className="text-slate-500 font-bold leading-relaxed">להיות הכתובת הראשונה והבטוחה לכל צורך באחזקה ותיקונים בישראל, תוך שמירה על סטנדרט אירופאי של שירות.</p>
                 </div>
                 <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white">
                    <Hammer className="w-12 h-12 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-black mb-4">הערכים שלנו</h3>
                    <p className="text-slate-300 font-bold leading-relaxed">יושרה, שקיפות מלאה מול הלקוח, ומחירים הוגנים. אנחנו לא עוזבים את השטח עד שהלקוח מחייך.</p>
                 </div>
                 <div className="bg-amber-500 p-12 rounded-[2.5rem] text-slate-900">
                    <Warehouse className="w-12 h-12 text-white mb-6" />
                    <h3 className="text-2xl font-black mb-4">מומחיות ב-PVC</h3>
                    <p className="text-slate-900 font-bold leading-relaxed opacity-80">מובילים את השוק בפתרונות הפרדה תרמית לעסקים, מחסני קירור ומפעלי מזון עם חומרים מהשורה הראשונה.</p>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Hammer className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-black text-2xl tracking-tighter">שרון אחזקות</span>
            </div>
            <p className="text-slate-500 font-bold max-w-xs">
              שירותי הנדימן מקצועיים ותוצאות מובטחות לכל עבודה בבית ובעסק.
            </p>
          </div>
          <div className="text-right">
            <h4 className="font-black text-lg mb-6">ניווט מהיר</h4>
            <ul className="space-y-3 text-slate-500 font-bold">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-amber-500 transition-colors cursor-pointer text-right">דף הבית</button></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">שירותים</a></li>
              <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">תיק עבודות</a></li>
              <li><a href="#pvc" className="hover:text-amber-500 transition-colors">וילונות PVC</a></li>
            </ul>
          </div>
          <div className="text-right md:text-left">
            <h4 className="font-black text-lg mb-6">צרו קשר</h4>
            <p className="text-slate-500 font-bold mb-2">טלפון: {phoneNumber}</p>
            <p className="text-slate-500 font-bold">אזור שירות: מרכז והסביבה</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-bold">
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <button onClick={() => setLegalModal({ isOpen: true, type: 'terms' })} className="hover:text-amber-600 transition-colors underline decoration-slate-200">תנאי שימוש</button>
            <button onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })} className="hover:text-amber-600 transition-colors underline decoration-slate-200">מדיניות פרטיות</button>
            <button onClick={() => setLegalModal({ isOpen: true, type: 'accessibility' })} className="hover:text-amber-600 transition-colors underline decoration-slate-200">הצהרת נגישות</button>
          </div>
          <span>© {new Date().getFullYear()} שרון אחזקות. כל הזכויות שמורות.</span>
        </div>
      </footer>

      {/* Legal Modals */}
      <AnimatePresence>
        {legalModal.isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal({ isOpen: false, type: null })}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 flex flex-col max-h-[85vh]"
            >
              <div className="bg-slate-50 p-8 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-2xl font-black">
                  {legalModal.type === 'terms' && "תנאי שימוש"}
                  {legalModal.type === 'privacy' && "מדיניות פרטיות"}
                  {legalModal.type === 'accessibility' && "הצהרת נגישות"}
                  {legalModal.type === 'accessibility_menu' && "תפריט נגישות"}
                </h3>
                <button 
                  onClick={() => setLegalModal({ isOpen: false, type: null })}
                  className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-right leading-relaxed text-slate-600 font-medium">
                {legalModal.type === 'accessibility_menu' && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AccessibilityToggle 
                        active={accessibility.highContrast} 
                        onClick={() => setAccessibility(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                        label="ניגודיות גבוהה"
                      />
                      <AccessibilityToggle 
                        active={accessibility.grayscale} 
                        onClick={() => setAccessibility(prev => ({ ...prev, grayscale: !prev.grayscale }))}
                        label="גווני אפור"
                      />
                      <AccessibilityToggle 
                        active={accessibility.underlineLinks} 
                        onClick={() => setAccessibility(prev => ({ ...prev, underlineLinks: !prev.underlineLinks }))}
                        label="הדגשת קישורים"
                      />
                      <AccessibilityToggle 
                        active={accessibility.readableFont} 
                        onClick={() => setAccessibility(prev => ({ ...prev, readableFont: !prev.readableFont }))}
                        label="גופן קריא"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="font-bold text-slate-900">גודל גופן:</p>
                      <div className="flex gap-4">
                        {[1, 1.1, 1.2].map(size => (
                          <button 
                            key={size}
                            onClick={() => setAccessibility(prev => ({ ...prev, fontScale: size }))}
                            className={`flex-1 py-3 rounded-xl border-2 font-black transition-all ${accessibility.fontScale === size ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-amber-200'}`}
                          >
                            {size === 1 ? "רגיל" : size === 1.1 ? "גדול" : "גדול מאוד"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => setAccessibility({ fontScale: 1, highContrast: false, underlineLinks: false, grayscale: false, readableFont: false })}
                      className="w-full py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-slate-800 transition-all mt-4"
                    >
                      איפוס הגדרות
                    </button>
                  </div>
                )}
                {legalModal.type === 'terms' && (
                  <div className="space-y-4">
                    <p className="font-bold text-slate-900">ברוכים הבאים לאתר שרון אחזקות.</p>
                    <p>1. השימוש באתר ובשירותים המוצעים בו מהווה הסכמה לתנאי שימוש אלו.</p>
                    <p>2. הגבלת אחריות: שרון אחזקות עושה כל מאמץ לספק שירות מקצועי, אך אינה אחראית לכל נזק עקיף או ישיר שייגרם מהשימוש בתוכן האתר.</p>
                    <p>3. זכויות יוצרים: כל המידע, התמונות והתוכן באתר שייך לשרון אחזקות ואין לעשות בו שימוש ללא אישור בכתב.</p>
                    <p>4. המחירים המופיעים באתר (אם קיימים) הינם למתן אינדיקציה בלבד ואינם מחייבים עד למתן הצעת מחיר רשמית.</p>
                    <p>5. סמכות שיפוט: על תנאים אלו יחולו חוקי מדינת ישראל וסמכות השיפוט תהיה לבתי המשפט במחוז המרכז.</p>
                  </div>
                )}
                {legalModal.type === 'privacy' && (
                  <div className="space-y-4">
                    <p className="font-bold text-slate-900">אנו מכבדים את פרטיותכם.</p>
                    <p>1. המידע הנאסף בטפסים (שם, טלפון) משמש אך ורק למתן מענה לפנייתכם ותיאום עבודות.</p>
                    <p>2. אנו מתחייבים לא להעביר את פרטיכם לצד ג' ללא הסכמתכם המפורשת.</p>
                    <p>3. האתר עשוי להשתמש בעוגיות (Cookies) לשיפור חוויית הגלישה.</p>
                    <p>4. אבטחה: האתר מאובטח באמצעים מקובלים להגנה על המידע האישי שלכם.</p>
                    <p>5. זכויות המשתמש: הנכם זכאים לבקש את מחיקת פרטיכם ממאגרינו בכל עת.</p>
                  </div>
                )}
                {legalModal.type === 'accessibility' && (
                  <div className="space-y-4 text-slate-700">
                    <p className="font-bold text-slate-900 text-lg">שרון אחזקות רואה חשיבות רבה במתן שירות שוויוני לכלל הגולשים.</p>
                    <p>אנו פועלים להנגשת האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלויות.</p>
                    <p className="font-bold">פעולות שבוצעו:</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>ניווט פשוט וברור.</li>
                      <li>תמיכה בקוראי מסך.</li>
                      <li>ניגודיות צבעים מותאמת.</li>
                      <li>תמיכה בהגדלת גופנים דרך הדפדפן.</li>
                    </ul>
                    <p className="mt-4">אם נתקלתם בקושי בגלישה או בבעיה בנושא נגישות, אנא צרו איתנו קשר בטלפון {phoneNumber} ונטפל בנושא תוך 60 יום כנדרש בחוק.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Order Work Modal */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="bg-amber-500 p-10 text-slate-900 relative">
                <button 
                  onClick={() => setIsOrderModalOpen(false)}
                  className="absolute top-8 left-8 w-12 h-12 bg-slate-900/10 rounded-full flex items-center justify-center hover:bg-slate-900/20 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Hammer className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tighter">הזמנת עבודה</h3>
                <p className="font-bold opacity-80 text-lg">השאירו פרטים ושרון יחזור אליכם</p>
              </div>
              <form
  name="contact"
  method="POST"
  data-netlify="true"
  className="p-10 space-y-6 text-right"
  onSubmit={(e) => {
    e.preventDefault();
    alert('...');
    setIsOrderModalOpen(false);
  }}>
  <input type="hidden" name="form-name" value="contact" /> 
                <div>
                  <label className="block text-sm font-black text-slate-500 mb-2 mr-2">שם מלא</label>
                 <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all font-bold text-lg" placeholder="הכנס את שמך..." />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-500 mb-2 mr-2">מספר טלפון</label>
                  <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all font-bold text-lg text-left font-mono" placeholder="050-000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-500 mb-2 mr-2">סוג העבודה</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all font-bold text-lg appearance-none cursor-pointer">
                    <option>תיקוני הנדימן כלליים</option>
                    <option>וילונות PVC לעסקים</option>
                    <option>הרכבת רהיטים / מטבחים</option>
                    <option>שפכטל וצבע</option>
                    <option>תיקון רשתות</option>
                    <option>אחר...</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 mr-2 group cursor-pointer select-none">
                  <input type="checkbox" id="spam-consent" className="w-5 h-5 accent-amber-500 rounded cursor-pointer" defaultChecked />
                  <label htmlFor="spam-consent" className="text-sm text-slate-500 font-bold cursor-pointer hover:text-slate-900 transition-colors">
                    אני מאשר קבלת הצעות ועדכונים משרון אחזקות (ניתן להסרה בכל עת)
                  </label>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl text-2xl font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-slate-900/20 group">
                  שלח הזמנה לשרון
                  <CheckCircle2 className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PortfolioCard({ category, title, image }: { category: string; title: string; image: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
           <p className="text-white font-bold text-sm leading-relaxed">{title}</p>
        </div>
        <div className="absolute top-6 right-6 bg-amber-500 text-slate-900 text-[10px] uppercase font-black px-3 py-1.5 rounded-full shadow-lg">
          {category}
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-bold text-xl leading-tight group-hover:text-amber-600 transition-colors">{title}</h3>
        <p className="text-slate-400 text-xs font-bold mt-4 uppercase tracking-[0.2em]">View Project</p>
      </div>
    </motion.div>
  );
}

function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-right group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-amber-500/10 transition-colors" />
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 border border-slate-100 relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 relative z-10">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-bold text-sm relative z-10">
        {description}
      </p>
    </motion.div>
  );
}

function AccessibilityToggle({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all group ${active ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-inner shadow-amber-100' : 'bg-white border-slate-100 text-slate-600 hover:border-amber-200'}`}
    >
      <span className="font-bold">{label}</span>
      <div className={`w-12 h-6 rounded-full relative transition-colors ${active ? 'bg-amber-500' : 'bg-slate-200'}`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'left-1' : 'left-7'}`} />
      </div>
    </button>
  );
}

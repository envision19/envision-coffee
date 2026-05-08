import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

//assets
import Mobilebg from './assets/mobilebg.png';
import Desktopbg from './assets/desktopbg.png';
import aboutus from './assets/about-us.jpg';

//atmosphere
import Atmoshphere1 from './assets/atmoshphere1.jpg';
import Atmosphere2 from './assets/atmosphere2.jpg';
import Atmosphere3 from './assets/atmosphere3.jpg';
import Atmosphere4 from './assets/atmosphere4.jpg';
import Atmosphere5 from './assets/atmosphere5.jpg';


//menu
import  Affogatobg from './assets/affogatobg.png';
import  Espressobg from './assets/espressobg.png';
import  latteY from './assets/lattey.png';
import  CinnaMonRoll from './assets/CinnamonRoll.png';
import  BlueBerryMuffin from './assets/BlueberryMuffin.png';

//Feedback
import  RichardcaetooN from './assets/Richardcaetoon.webp';
import  Gumball from './assets/gumball.webp';
import Darwin from './assets/darwin.webp';

//loc
import Map from './assets/map.png';





const MENU_ITEMS = [
  { 
    id: 1, 
    name: "Affogato", 
    type: "coffee", 
    img:  Affogatobg,
    price: "$6.50",
    splashColor: "bg-brown-500",
    desc: "Vanilla bean gelato drowned in espresso.",
    longDesc: "A true Italian classic where dessert meets caffeine. Our house-made vanilla bean gelato is served with a double shot of our signature dark roast."
  },
  { 
    id: 2, 
    name: "Latte", 
    type: "coffee", 
    img: BlueBerryMuffin , 
    price: "$5.00",
    splashColor: "bg-orange-500",
    desc: "Silky steamed milk over rich espresso.",
    longDesc: "Expertly pulled espresso shots combined with perfectly micro-foamed milk for a smooth, velvety texture."
  },
  { 
    id: 3, 
    name: "Espresso", 
    type: "coffee", 
    img: Espressobg, 
    price: "$3.50",
    splashColor: "bg-yellow-500",
    desc: "Pure, intense coffee essence.",
    longDesc: "A concentrated shot of coffee, showcasing the complex floral and nutty notes of our single-origin beans."
  },
  { 
    id: 4, 
    name: "Blueberry Muffin", 
    type: "pastry", 
    img:  latteY, 
    price: "$4.50",
    splashColor: "bg-blue-500",
    desc: "Fresh berries with a sugar crumble.",
    longDesc: "Baked fresh every morning with hand-picked blueberries and a crunchy streusel topping."
  },
  { 
    id: 5, 
    name: "Cinnamon Roll", 
    type: "pastry", 
    img: CinnaMonRoll, 
    price: "$5.50",
    splashColor: "bg-red-500",
    desc: "Warm spice with cream cheese glaze.",
    longDesc: "Swirled with premium Indonesian cinnamon and topped with a decadent, melting cream cheese frosting."
  }
];

// --- Mock Data ---

const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Feedbacks', href: '#feedback' },
    
  ];

const FEEDBACKS = [
  { 
    id: 1, 
    name: "Julian V.", 
    image:  RichardcaetooN,
    text: "The atmosphere here isn't just about coffee; it's about a standard of living. The Espresso Romano is a masterpiece.", 
    stars: 5 
  },
  { 
    id: 2, 
    name: "Sophia L.", 
    image: Gumball,
    text: "Best Ethiopian Yirgacheffe in the city. The floral notes are incredibly distinct and the service is impeccable.", 
    stars: 5 
  },
  { 
    id: 3, 
    name: "darwiny", 
    image: Darwin,
    text: "A sanctuary for true coffee nerds. Their roasting precision is evident in every single pour. Highly recommend.", 
    stars: 5 
  },
];
const Logo = "https://via.placeholder.com/150x50?text=EV+LOGO";

const SafeIcon = ({ name, size = 16 }) => {
  const icons = {
    Instagram: <Instagram size={size} />,
    Twitter: <Twitter size={size} />,
    Facebook: <Facebook size={size} />,
    Default: <Coffee size={size} />
  };
  return icons[name] || icons.Default;
};



const CoffeeWebsite = () => {
  // 2. ALL state goes here, directly under CoffeeWebsite
  const [submitted, setSubmitted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeedback, setActiveFeedback] = useState(0);

  // 3. YOUR functions go here
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const SafeIcon = ({ name, ...props }) => {
    const LucidIcon = Icons[name] || Icons.HelpCircle;
    return <LucidIcon {...props} />;
  };


  
useEffect(() => {
  const timer = setInterval(() => {
    setActiveFeedback((prev) => (prev + 1) % FEEDBACKS.length);
  }, 5000); // Changes every 5 seconds

  return () => clearInterval(timer); // Cleans up if the user leaves the page
}, []);





  return (

    <div className="bg-[#1A100C] min-h-screen text-[#F7E4DC] font-sans overflow-x-hidden">
      
      {/* --- REFINED NAVBAR --- */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-20 py-6 flex justify-between items-center 
                bg-[#0F0A08]/80 backdrop-blur-md border-b border-white/5 
                transition-all duration-300">
        {/* Logo */}
        <div className="text-3xl font-serif font-bold flex items-center">
          <span className="text-white">E</span><span className="text-[#C09A72]">V</span>
        </div>

        {/* Desktop Links (Centered/Spaced) */}
        <div className="hidden md:flex gap-12 ml-auto md:ml-0">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#F7E4DC]/80 hover:text-[#C09A72] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon - Now hidden on Desktop (md:hidden) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-[#C09A72] opacity-80 hover:opacity-100 transition-all"
        >
          {isMenuOpen ? <SafeIcon name="X" size={32} /> : <SafeIcon name="LayoutGrid" size={32} />}
        </button>

        {/* Desktop Ghost Spacer: This keeps the layout balanced since the button is gone on desktop */}
        <div className="hidden md:block w-10" />

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 right-6 w-48 bg-[#1A100C] border border-[#C09A72]/20 shadow-2xl p-6 rounded-lg z-50 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs uppercase tracking-widest font-bold text-[#C09A72] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/*hero*/}
     

              <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0F0A08]">
          
          {/* 1. IMMERSIVE BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={Desktopbg} 
                alt="Heritage Wood Background" 
                className="w-full h-full object-cover brightness-[0.5] contrast-125"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0F0A08_95%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A08]/60 via-transparent to-[#0F0A08]" />
          </div>

          {/* 2. TYPOGRAPHY & CTA LAYER */}
          <div className="relative z-10 container mx-auto px-6 md:px-20">
            <div className="max-w-4xl">
              
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-[#C09A72] tracking-[0.6em] text-[10px] md:text-xs font-bold uppercase mb-4"
              >
                Est. 1924 | Premium Roast
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="font-serif text-[50px] md:text-[90px] lg:text-[110px] text-[#F7E4DC] uppercase leading-[0.85] tracking-tighter mb-8"
              >
                Discover <br /> 
                Your <span className="text-[#C09A72] italic font-light lowercase">ideal</span> <br /> 
                Brew.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.2 }}
                className="text-[#F7E4DC]/80 max-w-md text-sm md:text-base leading-relaxed mb-12 border-l-2 border-[#C09A72] pl-6"
              >
                Experience the intersection of heritage and flavor. Our beans are 
                <span className="text-[#C09A72]"> ethically sourced </span> and roasted to perfection.
              </motion.p>

              {/* 3. HIGH-END GRADIENT BUTTONS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col md:flex-row gap-6"
              >
                {/* VIEW MENU: Metallic Gold Gradient with Reflection Hover */}
                <a 
                    href="#contacts" 
                    className="group relative px-14 py-5 overflow-hidden rounded-full bg-gradient-to-r from-[#8E6D4B] via-[#C09A72] to-[#D4B483] text-[#1A100C] font-black uppercase text-[11px] tracking-[0.25em] shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(142,109,75,0.4)] hover:-translate-y-1 inline-block text-center"
                  >
                    <span className="relative z-10">RESERVE A TABLE</span>
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out skew-x-12" />
                  </a>

                  {/* SECONDARY: THE EXPERIENCE */}
                  <a 
                    href="#atmosphere" 
                    className="group relative px-14 py-5 overflow-hidden rounded-full border border-[#C09A72]/50 text-[#F7E4DC] font-bold uppercase text-[11px] tracking-[0.25em] transition-all duration-500 hover:border-[#C09A72] inline-block text-center"
                  >
                    <span className="relative z-10 group-hover:text-[#1A100C] transition-colors duration-300">THE EXPERIENCE</span>
                    <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 bg-gradient-to-b from-[#C09A72] to-[#8E6D4B] transition-transform duration-300 ease-out" />
                  </a>
               
              </motion.div>
            </div>
          </div>

          {/* 4. SCROLL INDICATOR */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#C09A72] to-transparent opacity-50" />
          </motion.div>
        </section>

      
     
      {/* --- ABOUT US --- */}

      <section id="about" className="relative py-24 px-6 md:px-20 overflow-hidden bg-[#0F0A08]">
            {/* THE GRADIENT BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, #2A1B16 0%, #0F0A08 100%)`
                }}
              />
              
              {/* OPTIONAL: Subtle Grain Overlay for texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* LEFT SIDE: THE IMAGE BOX */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={aboutus} // Replace with your imported image variable
                    alt="Coffee Heritage" 
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C09A72]">Since 1924</p>
                  </div>
                </div>
                
                {/* Decorative accent behind the image */}
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C09A72]/30" />
              </div>

              {/* RIGHT SIDE: THE TEXT CONTENT */}
              <div className="space-y-8">
                <div>
                  <p className="text-[#C09A72] text-xs uppercase tracking-[0.4em] mb-4 font-semibold">Our Heritage</p>
                  <h2 className="font-serif text-5xl md:text-7xl text-[#F7E4DC] leading-tight">
                    Our Legacy <br /> 
                    <span className="italic font-light opacity-80 text-4xl md:text-6xl text-[#C09A72]">of Grain.</span>
                  </h2>
                </div>

                <div className="w-16 h-1 bg-[#C09A72]"></div>

                <div className="space-y-6 text-lg font-light leading-relaxed text-[#F7E4DC]/70 max-w-lg">
                  <p>
                    From the volcanic soils of Sidamo to your cup, we treat every bean as a masterwork. 
                    Our roastery uses 19th-century methods updated with modern thermal precision.
                  </p>
                  <p>
                    To ensure every sip tells a story of <span className="text-[#F7E4DC] font-normal italic">uncompromising quality.</span>
                  </p>
                </div>

                <button className="group flex items-center gap-4 text-[#C09A72] text-xs uppercase tracking-[0.3em] font-bold pt-4">
                  Read our story
                  <span className="h-[1px] w-8 bg-[#C09A72] group-hover:w-16 transition-all duration-500"></span>
                </button>
              </div>
            </div>
          </section>
             

                  {/* --- OUR INTERIOR SECTION --- */}

                  <section id="atmosphere" className="py-24 px-6 md:px-20 bg-[#0F0A08]">
                    <div className="max-w-7xl mx-auto">
                      <div className="mb-12">
                        <h4 className="text-[#C09A72] text-[10px] uppercase font-black tracking-[0.4em] mb-4">The Atmosphere</h4>
                        <h2 className="text-4xl md:text-6xl font-serif text-[#F7E4DC]">
                          Designed <span className="italic font-light text-[#C09A72]">for</span> Stillness.
                        </h2>
                      </div>

                      {/* MAIN GRID */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
                        
                        {/* TOP LEFT IMAGE */}
                        <div className="md:col-span-7 h-64 md:h-full overflow-hidden rounded-3xl">
                          <img 
                            src={Atmoshphere1} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt="Atmosphere 1"
                          />
                        </div>

                        {/* TOP RIGHT IMAGE */}
                        <div className="md:col-span-5 h-64 md:h-full overflow-hidden rounded-3xl">
                          <img 
                            src={Atmosphere2}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt="Atmosphere 2"
                          />
                        </div>

                        {/* BOTTOM ROW (Three Images) */}
                        <div className="md:col-span-4 h-64 md:h-[300px] overflow-hidden rounded-3xl">
                          <img 
                            src={Atmosphere3}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt="Atmosphere 3"
                          />
                        </div>
                        
                        <div className="md:col-span-4 h-64 md:h-[300px] overflow-hidden rounded-3xl">
                          <img 
                            src={Atmosphere4}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt="Atmosphere 4"
                          />
                        </div>

                        <div className="md:col-span-4 h-64 md:h-[300px] overflow-hidden rounded-3xl">
                          <img 
                            src={Atmosphere5}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt="Atmosphere 5"
                          />
                        </div>

                      </div>
                    </div>
                  </section>
          

      {/* --- MENU BENTO BOX --- */}
      <section id="menu" className="py-24 px-6 md:px-20 bg-[#2A1B16]">
          <h2 className="font-serif text-5xl mb-16 text-center text-[#F7E4DC]">Curated Selection</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                className={`p-6 border border-[#C09A72]/30 rounded-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative group overflow-hidden
                  ${idx === 0 ? 'md:col-span-2' : ''} 
                  ${idx === 4 ? 'md:col-span-2' : ''}
                `}
              >
                {/* Main Flex Container */}
                <div className="flex justify-between items-stretch gap-4 h-full">
                  
                  {/* Left Column: Text Content */}
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C09A72] font-bold">
                        {item.type}
                      </span>
                      <h3 className="font-serif text-2xl mt-2 text-[#F7E4DC] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm opacity-60 mt-2 text-[#F7E4DC] line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* Price remains on the bottom left */}
                    <span className="text-xl font-serif text-[#C09A72] mt-4">
                      {item.price}
                    </span>
                  </div>

                  {/* Right Column: Image + Button Aligned Vertically */}
                  <div className="flex flex-col items-center justify-between shrink-0">
                    <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-24 h-24 md:w-32 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Button sits directly under the image */}
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="mt-4 text-[10px] font-bold uppercase tracking-tighter bg-[#C09A72]/20 text-[#C09A72] px-4 py-2 rounded-full hover:bg-[#C09A72] hover:text-[#2A1B16] transition-all whitespace-nowrap w-full text-center"
                    >
                      View Details
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}

            
          </div>
        </section>
      

      {/* --- INTERACTIVE VOID (MODAL) --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0F0A08] flex items-center justify-center p-6"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 text-[#C09A72] hover:rotate-90 transition-transform duration-300 z-[110]"
            >
              <Icons.X size={40} />
            </button>

            <div className="grid md:grid-cols-2 w-full max-w-7xl items-center gap-12">
              
              {/* Left Side: The Image */}

              <div className="relative flex items-center justify-center">
                  {/* Background Glow - Keep this for the "pop" effect */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full blur-[80px] ${selectedItem.splashColor || 'bg-[#C09A72]/20'}`}
                  />
                  
                  {/* REMOVED: aspect-square, border, and background from here */}
                  <motion.img 
                    // 1. DYNAMIC ID: This allows the "flying" animation to work for all 5 items
                    layoutId={`img-${selectedItem.id}`}
                    
                    // 2. DYNAMIC SOURCE: This pulls the specific image from the item you clicked
                    src={selectedItem.img} 
                    
                    alt={selectedItem.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    
                    // Clean styling for transparent PNGs
                    className="w-full max-w-[450px] h-auto object-contain z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                    />
                </div>
                              

              {/* Right Side: Text Details */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-5xl md:text-7xl text-[#F7E4DC]">{selectedItem.name}</h2>
                <div className="w-16 h-1 bg-[#C09A72]"></div>
                <p className="text-xl text-[#F7E4DC]/80 leading-relaxed font-light">
                  {selectedItem.longDesc}
                </p>

                <div className="flex gap-10 pt-6">
                  <div>
                      <p className="text-[#C09A72] text-[10px] uppercase tracking-widest mb-1">Altitude</p>
                      <p className="text-xl text-[#F7E4DC]">{selectedItem.type === 'coffee' ? '1,900m' : 'Freshly Baked'}</p>
                  </div>
                  <div>
                      <p className="text-[#C09A72] text-[10px] uppercase tracking-widest mb-1">Roast Level</p>
                      <p className="text-xl text-[#F7E4DC]">{selectedItem.type === 'coffee' ? 'Medium-Dark' : 'Signature Recipe'}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* --- NEW SEPARATE LOCATION SECTION --- */}
      <section id="location" className="py-24 px-6 md:px-20 bg-[#1A100C]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl text-[#C09A72]">Our Sanctuary</h2>
            <p className="text-xl opacity-80 leading-relaxed">
              Nestled in the heart of the district, our roastery provides a quiet escape. 
            </p>
            <div className="space-y-4 pt-4">
              <p className="flex items-center gap-4 text-lg">
                <SafeIcon name="MapPin" className="text-[#C09A72]" /> 
                888 Velvet Lane, Roast District
              </p>
            </div>
          </div>

          {/* MAP IMAGE */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-2xl border border-[#C09A72]/20 group">
            <img 
              src= {Map}
              alt="Location Map" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <SafeIcon name="MapPin" size={40} className="text-[#C09A72] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

   
      {/* --- INTERACTIVE FEEDBACK SLIDESHOW WITH PORTRAITS --- */}
      <footer id="contacts" className="bg-[#0F0A08] pt-24 pb-12 px-6 md:px-20 border-t border-[#C09A72]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            
            {/* 1. BRAND & LINKS */}
            <div className="lg:col-span-4 space-y-16">
              <div className="space-y-6">
                <div className="text-5xl font-serif font-bold text-[#C09A72]">EV</div>
                <p className="text-[#F7E4DC]/60 text-sm leading-relaxed max-w-xs">
                  Crafting a standard of living through the art of the perfect pour since 1924.
                </p>
                <div className="flex gap-4">
                  {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="w-10 h-10 rounded-full border border-[#C09A72]/20 flex items-center justify-center text-[#C09A72] hover:bg-[#C09A72] hover:text-[#1A100C] transition-all duration-300"
                    >
                      <SafeIcon name={social} size={16} />
                    </a>
                  ))}
                </div>
              </div> 

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="space-y-6">
                  <h4 className="text-[#C09A72] text-[10px] uppercase font-black tracking-[0.3em]">Explore</h4>
                  <ul className="space-y-4 text-xs text-[#F7E4DC]/50 uppercase tracking-widest">
                    <li><a href="#about" className="hover:text-[#C09A72] transition-colors">Our Story</a></li>
                    <li><a href="#menu" className="hover:text-[#C09A72] transition-colors">Curated Menu</a></li>
                    <li><a href="#location" className="hover:text-[#C09A72] transition-colors">Find Us</a></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[#C09A72] text-[10px] uppercase font-black tracking-[0.3em]">Hours</h4>
                  <ul className="space-y-4 text-[11px] text-[#F7E4DC]/50 font-light">
                    <li><span className="block text-[#F7E4DC]/80 font-medium uppercase tracking-tighter mb-1">Mon — Fri</span> 07:00 - 20:00</li>
                    <li><span className="block text-[#F7E4DC]/80 font-medium uppercase tracking-tighter mb-1">Sat — Sun</span> 08:00 - 22:00</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. RESERVATION FORM */}
            <div className="lg:col-span-8">
              <div className="bg-[#1A100C] rounded-[40px] border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C09A72]/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <h3 className="font-serif text-3xl text-[#F7E4DC] mb-10 uppercase tracking-widest">
                  Table <span className="italic opacity-60 text-2xl lowercase font-light">Reservation</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="relative border-b border-white/10 pb-2 focus-within:border-[#C09A72] transition-all">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#C09A72] font-bold block mb-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="bg-transparent border-none outline-none text-[#F7E4DC] w-full placeholder:opacity-10 text-base" required />
                    </div>
                    <div className="relative border-b border-white/10 pb-2 focus-within:border-[#C09A72] transition-all">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#C09A72] font-bold block mb-2">Email</label>
                      <input type="email" placeholder="example@roastery.com" className="bg-transparent border-none outline-none text-[#F7E4DC] w-full placeholder:opacity-10 text-base" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
                    <div className="relative border-b border-white/10 pb-2 focus-within:border-[#C09A72] transition-all">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#C09A72] font-bold block mb-2">Phone</label>
                      <input 
                        type="tel" 
                        maxLength={11} 
                        onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} 
                        placeholder="09123456789" 
                        className="bg-transparent border-none outline-none text-[#F7E4DC] w-full placeholder:opacity-10 text-base" 
                        required 
                      />
                    </div>
                    <div className="relative border-b border-white/10 pb-2 focus-within:border-[#C09A72] transition-all">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#C09A72] font-bold block mb-2">Guests</label>
                      <input type="number" placeholder="2" className="bg-transparent border-none outline-none text-[#F7E4DC] w-full placeholder:opacity-10 text-base" required />
                    </div>
                    <div className="relative border-b border-white/10 pb-2 focus-within:border-[#C09A72] transition-all">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#C09A72] font-bold block mb-2">Date & Time</label>
                      <input 
                        type="datetime-local" 
                        min={new Date().toISOString().slice(0, 16)} 
                        className="bg-transparent border-none outline-none text-[#F7E4DC] w-full [color-scheme:dark] text-sm cursor-pointer" 
                        required 
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitted} 
                    className={`w-full py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500 shadow-xl ${
                      submitted 
                      ? "bg-green-600/20 text-green-400 border border-green-500/30 cursor-default" 
                      : "bg-[#C09A72] text-[#1A100C] hover:bg-[#F7E4DC] hover:-translate-y-1"
                    }`}
                  >
                    {submitted ? "Reservation Sent" : "Confirm Reservation"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-[#F7E4DC]/20 uppercase tracking-[0.2em]">© 2026 Envision. All Rights Reserved.</p>
            <div className="flex gap-8 text-[10px] text-[#F7E4DC]/20 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-[#C09A72] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#C09A72] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
       
     
    </div>

  );
};

export default CoffeeWebsite;
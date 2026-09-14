import { motion } from "motion/react";
import { ArrowUpRight, Play, Sparkles, Clapperboard, Camera, WandSparkles } from "lucide-react";

const work=[
 {title:"Wedding Stories",tag:"Cinematic Wedding Films",image:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"},
 {title:"Brand Reels",tag:"Commercial & Social",image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=85"},
 {title:"AI Visuals",tag:"AI Video Creation",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85"},
 {title:"Events",tag:"Event Highlights",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85"},
 {title:"Music & Motion",tag:"Creative Reels",image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85"},
 {title:"Forever Moments",tag:"Storytelling",image:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"}
];

const services=[
 ["AI Videos","Turn ideas into scroll-stopping AI visuals.","WandSparkles"],
 ["Weddings","Your biggest moments, crafted like cinema.","Camera"],
 ["Events","Energy, emotion and atmosphere in every frame.","Clapperboard"],
 ["Paid Promotions","Content designed to make brands memorable.","Sparkles"]
];

function Icon({name}:{name:string}){
 const props={size:19,strokeWidth:1.7};
 if(name==="Camera") return <Camera {...props}/>;
 if(name==="Clapperboard") return <Clapperboard {...props}/>;
 if(name==="WandSparkles") return <WandSparkles {...props}/>;
 return <Sparkles {...props}/>;
}

export default function App(){
 return <div className="min-h-screen bg-[#090b0f] text-white">
  <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8">
   <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl">
    <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">K</span>
      kliqshoot
    </a>
    <div className="hidden items-center gap-7 text-xs text-white/65 md:flex">
      <a href="#work" className="hover:text-white">Work</a>
      <a href="#services" className="hover:text-white">Services</a>
      <a href="#about" className="hover:text-white">About</a>
    </div>
    <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105">Let's talk</a>
   </nav>
  </header>

  <main>
   <section className="relative min-h-[760px] overflow-hidden">
    <img className="absolute inset-0 h-full w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2200&q=90" alt="Cinematic production"/>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(60,110,255,.18),transparent_35%),linear-gradient(90deg,#090b0f_5%,rgba(9,11,15,.65),rgba(9,11,15,.15))]"/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f] via-transparent to-[#090b0f]/30"/>
    <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-24 pt-36 md:px-10">
      <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-4xl">
       <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.28em] text-white/60"><span className="h-1.5 w-1.5 rounded-full bg-blue-400"/> AI Videos · Weddings · Events</p>
       <h1 className="font-display text-[58px] font-medium leading-[.91] tracking-[-.055em] sm:text-[78px] md:text-[100px]">
        We make<br/><span className="text-white/45">moments</span><br/>look cinematic.
       </h1>
       <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#work" className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">View our work <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></a>
        <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur-md hover:bg-white/10">Start a project</a>
       </div>
      </motion.div>
    </div>
   </section>

   <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
    <div className="mb-12 flex items-end justify-between gap-6">
      <div><p className="text-xs uppercase tracking-[.25em] text-white/40">What we do</p><h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">Stories that stay.</h2></div>
      <p className="hidden max-w-sm text-sm leading-6 text-white/45 md:block">From AI-generated visuals to real-world celebrations, we turn ordinary footage into unforgettable stories.</p>
    </div>
    <div className="grid gap-3 md:grid-cols-2">
     {services.map(([title,desc,icon],i)=><motion.div whileHover={{y:-5}} key={title} className="group rounded-[28px] border border-white/10 bg-white/[.035] p-7 transition-colors hover:bg-white/[.06]">
       <div className="mb-14 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"><Icon name={icon}/></div>
       <div className="flex items-end justify-between gap-4"><div><p className="mb-2 text-xs text-white/35">0{i+1}</p><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/45">{desc}</p></div><ArrowUpRight className="mb-1 text-white/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
     </motion.div>)}
    </div>
   </section>

   <section id="work" className="mx-auto max-w-7xl px-6 py-12 md:px-10">
    <div className="mb-10 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.25em] text-white/40">Selected work</p><h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">Made to be seen.</h2></div><div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-white/45 md:block">Scroll to explore →</div></div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
     {work.map((item,i)=><motion.article initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.06}} key={item.title} className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[.025]">
       <div className="relative aspect-[4/5] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"/><div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 backdrop-blur-md"><Play size={14} fill="white"/></div><div className="absolute bottom-5 left-5 right-5"><p className="text-xs text-white/55">{item.tag}</p><h3 className="mt-1 font-display text-2xl">{item.title}</h3></div></div>
     </motion.article>)}
    </div>
   </section>

   <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-10">
    <div className="rounded-[36px] border border-white/10 bg-white/[.035] p-8 md:p-14">
      <p className="text-xs uppercase tracking-[.25em] text-white/40">Kliqshoot</p>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
       <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">Your best days deserve more than a camera roll.</h2>
       <p className="text-sm leading-7 text-white/45">We are a visual storytelling studio creating cinematic reels, wedding films, event stories, AI videos and paid promotional content. Fast, creative and built for the way people watch today.</p>
      </div>
    </div>
   </section>

   <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
    <div className="relative overflow-hidden rounded-[38px] bg-white p-8 text-black md:p-16">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/70 blur-3xl"/>
      <div className="relative"><p className="text-xs uppercase tracking-[.25em] text-black/45">Have an idea?</p><h2 className="mt-5 max-w-3xl font-display text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">Let's make something people can't stop watching.</h2><a href="mailto:hello@kliqshoot.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">Contact Kliqshoot <ArrowUpRight size={16}/></a></div>
    </div>
   </section>
  </main>

  <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-10"><span>© 2026 Kliqshoot</span><span>AI Videos · Weddings · Events · Cinematic Reels</span></footer>
 </div>
}
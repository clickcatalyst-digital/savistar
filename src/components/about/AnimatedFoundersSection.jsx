// src/components/about/AnimatedFoundersSection.jsx

'use client'
import { motion } from 'framer-motion'
import Image from "next/image"

export default function AnimatedFoundersSection() {
  return (
    <>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/5 to-[var(--color-accent-DEFAULT)]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--color-accent-DEFAULT)]/5 to-[var(--color-primary-DEFAULT)]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="heading-lg mb-8 bg-gradient-to-r from-gray-900 via-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] bg-clip-text text-transparent">
                The Creative Harmony
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Two visionaries, one shared dream. Where creative intuition meets operational excellence, 
              <span className="font-medium text-gray-900"> extraordinary design is born</span>.
            </motion.p>
          </motion.div>

          {/* Connecting Flow Elements */}
<div className="hidden lg:block absolute inset-0 pointer-events-none">
  <svg className="w-full h-full" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary-DEFAULT)" stopOpacity="0.1" />
        <stop offset="50%" stopColor="transparent" />
        <stop offset="100%" stopColor="var(--color-accent-DEFAULT)" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path d="M200 300 Q600 100 1000 500" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
    <path d="M1000 300 Q600 700 200 500" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
  </svg>
</div>

          {/* Yin Yang Container */}
          <div className="relative max-w-8xl mx-auto">
            {/* Central Yin Yang Symbol */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-16 h-16 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {/* Yin Yang SVG */}
                <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="white" stroke="currentColor" strokeWidth="1"/>
                    <path d="M12 2a10 10 0 0 0 0 20 5 5 0 0 0 0-10 5 5 0 0 1 0-10z" fill="black"/>
                    <circle cx="12" cy="7" r="1.5" fill="white"/>
                    <circle cx="12" cy="17" r="1.5" fill="black"/>
                </svg>
                                    
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] rounded-full blur-2xl opacity-40 -z-10 scale-200"></div>
              </motion.div>
            </motion.div>

            {/* Founders Cards Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
              
              {/* Sachi - Creative Force (Left/Light) */}
              <motion.div 
                className="group order-2 lg:order-1"
                initial={{ opacity: 0, x: -100, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Creative Aura */}
                  <motion.div 
                    className="absolute -inset-8 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/10 via-[var(--color-accent-DEFAULT)]/5 to-transparent rounded-[2rem] blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent-DEFAULT)]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      {/* Profile Section */}
                      <div className="flex items-start space-x-6 mb-8">
                        <motion.div 
                          className="relative flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative">
                            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50">
                              <Image 
                                src="/images/co/sachi.webp"
                                alt="Sachi - Creative Director"
                                width={144}
                                height={144}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            
                            {/* Creative Badge */}
                            <motion.div 
                              className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] rounded-2xl flex items-center justify-center shadow-lg"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </motion.div>
                            
                            {/* Floating particles */}
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[var(--color-primary-DEFAULT)]/40 rounded-full"
                                style={{
                                  top: `${20 + i * 30}%`,
                                  left: `${-20 - i * 10}px`,
                                }}
                                animate={{
                                  y: [-10, 10, -10],
                                  opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                  duration: 2 + i * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.3
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <motion.h3 
                            className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-[var(--color-primary-DEFAULT)] bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Sachi
                          </motion.h3>
                          <motion.p 
                            className="text-[var(--color-primary-DEFAULT)] font-bold text-xl mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            Creative Director
                          </motion.p>
                          <motion.div 
                            className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--color-primary-DEFAULT)]/10 to-[var(--color-accent-DEFAULT)]/10 rounded-full text-sm font-semibold text-[var(--color-primary-DEFAULT)] mb-6"
                            whileHover={{ scale: 1.05, x: 5 }}
                          >
                            ✨ The Visionary
                          </motion.div>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.div 
                        className="space-y-4 text-gray-700 leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <p>Sachi shapes the <span className="font-semibold text-gray-900">design language</span> that connects SAAG and Savistar. At SAAG, she leads creative direction for solid-wood furniture that feels calm at first glance and reveals layered craft up close.</p>
                        <p>At Savistar, she leads concept and client experience from brief to handover, creating <span className="font-semibold text-gray-900">spaces anchored around human scale, light, and circulation</span> with furniture that blends into architecture rather than competing with it.</p>
                        <p className="text-sm italic text-gray-600 mt-2">Focus: proportion, silhouette, finish systems, space storytelling</p>
                      </motion.div>

                      {/* Skills */}
                      <motion.div 
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9, staggerChildren: 0.1 }}
                      >
                        {['Proportion', 'Aesthetics', 'Storytelling', 'Innovation'].map((skill, index) => (
                          <motion.span 
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary-DEFAULT)]/10 to-[var(--color-accent-DEFAULT)]/10 text-[var(--color-primary-DEFAULT)] rounded-xl text-sm font-medium border border-[var(--color-primary-DEFAULT)]/20 hover:border-[var(--color-primary-DEFAULT)]/40 transition-colors cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Haripriya - Execution Force (Right/Dark) */}
              <motion.div 
                className="group order-1 lg:order-2"
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Precision Aura */}
                  <motion.div 
                    className="absolute -inset-8 bg-gradient-to-br from-gray-900/10 via-[var(--color-primary-dark)]/5 to-transparent rounded-[2rem] blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-black rounded-b-[4rem] rounded-tl-3xl rounded-tr-[4rem] p-8 lg:p-10 shadow-2xl overflow-hidden border border-gray-800/30">
                    {/* Decorative Grid Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    
                    {/* Geometric Decorations */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-accent-DEFAULT)]/20 to-transparent rounded-l-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-r-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      {/* Profile Section */}
                      <div className="flex items-start space-x-6 mb-8">
                        <motion.div 
                          className="relative flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative">
                            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/20">
                              <Image 
                                src="/images/co/hari1.webp"
                                alt="Haripriya - Operations Director"
                                width={144}
                                height={144}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            
                            {/* Precision Badge */}
                            <motion.div 
                              className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-[var(--color-accent-DEFAULT)] to-white rounded-2xl flex items-center justify-center shadow-lg"
                              whileHover={{ rotate: -360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                            
                            {/* Precision particles */}
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[var(--color-accent-DEFAULT)]/60 rounded-full"
                                style={{
                                  top: `${15 + i * 20}%`,
                                  right: `${-15 - i * 8}px`,
                                }}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                  duration: 1.5 + i * 0.3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <motion.h3 
                            className="text-3xl lg:text-4xl font-bold mb-3 text-white"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Haripriya
                          </motion.h3>
                          <motion.p 
                            className="text-[var(--color-accent-DEFAULT)] font-bold text-xl mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                          >
                            Operations Director
                          </motion.p>
                          <motion.div 
                            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-[var(--color-accent-DEFAULT)] mb-6 border border-white/20"
                            whileHover={{ scale: 1.05, x: -5 }}
                          >
                            ⚡ The Executor
                          </motion.div>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.div 
                        className="space-y-4 text-gray-300 leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                      >
                        <p>Haripriya transforms design intent into <span className="font-semibold text-white">dependable results</span>. At SAAG, she leads responsible sourcing, kiln drying, and documented quality-control processes for small-batch manufacturing.</p>
                        <p>At Savistar, she owns timelines and delivery with calm precision. Her <span className="font-semibold text-white">low-waste cutting plans and supplier standards</span> keep projects predictable while raising craft standards.</p>
                        <p className="text-sm italic text-gray-400 mt-2">Focus: materials control, joinery, QC systems, supplier standards, timelines</p>
                        </motion.div>

                      {/* Skills */}
                      <motion.div 
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.1, staggerChildren: 0.1 }}
                      >
                        {['Quality Control', 'Systems', 'Reliability', 'Precision'].map((skill, index) => (
                          <motion.span 
                            key={skill}
                            className="px-4 py-2 bg-white/10 text-[var(--color-accent-DEFAULT)] rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20 hover:border-[var(--color-accent-DEFAULT)]/40 transition-colors cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Unity Statement */}
          <motion.div 
            className="text-center mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-r from-gray-900/5 via-[var(--color-primary-DEFAULT)]/5 to-[var(--color-accent-DEFAULT)]/5 rounded-2xl p-8 backdrop-blur-sm border border-white/50"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] bg-clip-text text-transparent">
                Together, We Create Magic
                </h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                    Co-owners of <span className="font-bold">SAAG</span> and <span className="font-bold">Savistar</span>, Sachi and Haripriya unite art and reliability. 
                    Sachi defines the language of proportion and finish. Haripriya builds the systems that preserve it through sourcing, craft, and delivery.
                </p>
                <p>
                    The result is <span className="font-semibold text-gray-900">India-made furniture and turnkey interiors</span> that are 
                    sustainable, repair-friendly, and ready for modern living.
                </p>
                </div>
            </motion.div>
          </motion.div>
        </div>
    </>
    )
}

// export default function AnimatedFoundersSection() {
//   return (
//     <>
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div 
//             className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/5 to-[var(--color-accent-DEFAULT)]/5 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
//           <motion.div 
//             className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--color-accent-DEFAULT)]/5 to-[var(--color-primary-DEFAULT)]/5 rounded-full blur-3xl"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               rotate: [360, 180, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
//         </div>

//         <div className="container-custom relative z-10">
//           {/* Header */}
//           <motion.div 
//             className="text-center mb-24"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="inline-block"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <h2 className="heading-lg mb-8 bg-gradient-to-r from-gray-900 via-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] bg-clip-text text-transparent">
//                 The Creative Harmony
//               </h2>
//             </motion.div>
//             <motion.p 
//               className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Two visionaries, one shared dream. Where creative intuition meets operational excellence, 
//               <span className="font-medium text-gray-900"> extraordinary design is born</span>.
//             </motion.p>
//           </motion.div>

//           {/* Yin Yang Container */}
//           <div className="relative max-w-8xl mx-auto">
//             {/* Central Yin Yang Symbol */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
//               initial={{ scale: 0, rotate: -180 }}
//               whileInView={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
//               viewport={{ once: true }}
//             >
//               <motion.div 
//                 className="relative w-20 h-20 lg:w-24 lg:h-24"
//                 whileHover={{ scale: 1.1, rotate: 360 }}
//                 transition={{ duration: 0.8, type: "spring" }}
//               >
//                 {/* Yin Yang SVG */}
//                 <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 100 100" fill="none">
//                   <circle cx="50" cy="50" r="48" fill="url(#yinyang-gradient)" stroke="white" strokeWidth="4"/>
//                   <path d="M50 2 A48 48 0 0 1 50 50 A24 24 0 0 1 50 98 A48 48 0 0 1 50 50 A24 24 0 0 0 50 2" fill="white"/>
//                   <circle cx="50" cy="26" r="6" fill="black"/>
//                   <circle cx="50" cy="74" r="6" fill="white"/>
//                   <defs>
//                     <linearGradient id="yinyang-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="var(--color-primary-DEFAULT)" />
//                       <stop offset="100%" stopColor="var(--color-accent-DEFAULT)" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
                
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] rounded-full blur-lg opacity-20 -z-10 scale-150"></div>
//               </motion.div>
//             </motion.div>

//             {/* Founders Cards Container */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              
//               {/* Sachi - Creative Force (Left/Light) */}
//               <motion.div 
//                 className="group order-2 lg:order-1"
//                 initial={{ opacity: 0, x: -100, rotate: -10 }}
//                 whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.div 
//                   className="relative"
//                   whileHover={{ scale: 1.02, rotate: 1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 >
//                   {/* Creative Aura */}
//                   <motion.div 
//                     className="absolute -inset-8 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/10 via-[var(--color-accent-DEFAULT)]/5 to-transparent rounded-[2rem] blur-xl"
//                     animate={{
//                       scale: [1, 1.1, 1],
//                       opacity: [0.5, 0.8, 0.5],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
                  
//                   {/* Main Card */}
//                   <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50 overflow-hidden">
//                     {/* Decorative Elements */}
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
//                     <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent-DEFAULT)]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                    
//                     <div className="relative z-10">
//                       {/* Profile Section */}
//                       <div className="flex items-start space-x-6 mb-8">
//                         <motion.div 
//                           className="relative flex-shrink-0"
//                           whileHover={{ scale: 1.05 }}
//                           transition={{ type: "spring", stiffness: 300 }}
//                         >
//                           <div className="relative">
//                             <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50">
//                               <Image 
//                                 src="/images/co/sachi.webp"
//                                 alt="Sachi - Creative Director"
//                                 width={144}
//                                 height={144}
//                                 className="object-cover w-full h-full"
//                               />
//                             </div>
                            
//                             {/* Creative Badge */}
//                             <motion.div 
//                               className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] rounded-2xl flex items-center justify-center shadow-lg"
//                               whileHover={{ rotate: 360 }}
//                               transition={{ duration: 0.6 }}
//                             >
//                               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                               </svg>
//                             </motion.div>
                            
//                             {/* Floating particles */}
//                             {[...Array(3)].map((_, i) => (
//                               <motion.div
//                                 key={i}
//                                 className="absolute w-2 h-2 bg-[var(--color-primary-DEFAULT)]/40 rounded-full"
//                                 style={{
//                                   top: `${20 + i * 30}%`,
//                                   left: `${-20 - i * 10}px`,
//                                 }}
//                                 animate={{
//                                   y: [-10, 10, -10],
//                                   opacity: [0.4, 1, 0.4],
//                                 }}
//                                 transition={{
//                                   duration: 2 + i * 0.5,
//                                   repeat: Infinity,
//                                   ease: "easeInOut",
//                                   delay: i * 0.3
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </motion.div>
                        
//                         <div className="flex-1 min-w-0">
//                           <motion.h3 
//                             className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-[var(--color-primary-DEFAULT)] bg-clip-text text-transparent"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           >
//                             Sachi
//                           </motion.h3>
//                           <motion.p 
//                             className="text-[var(--color-primary-DEFAULT)] font-bold text-xl mb-2"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ delay: 0.5 }}
//                           >
//                             Creative Director
//                           </motion.p>
//                           <motion.div 
//                             className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--color-primary-DEFAULT)]/10 to-[var(--color-accent-DEFAULT)]/10 rounded-full text-sm font-semibold text-[var(--color-primary-DEFAULT)] mb-6"
//                             whileHover={{ scale: 1.05, x: 5 }}
//                           >
//                             ✨ The Visionary
//                           </motion.div>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <motion.div 
//                         className="space-y-4 text-gray-700 leading-relaxed mb-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.7, duration: 0.6 }}
//                       >
//                         <p>Sachi shapes the <span className="font-semibold text-gray-900">design language</span> that connects SAAG and Savistar, focusing on proportion, comfort, and the quiet geometry of daily rituals.</p>
//                         <p>She creates spaces anchored around <span className="font-semibold text-gray-900">human scale, light, and circulation</span> with furniture that blends seamlessly into architecture.</p>
//                       </motion.div>

//                       {/* Skills */}
//                       <motion.div 
//                         className="flex flex-wrap gap-3"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 0.9, staggerChildren: 0.1 }}
//                       >
//                         {['Proportion', 'Aesthetics', 'Storytelling', 'Innovation'].map((skill, index) => (
//                           <motion.span 
//                             key={skill}
//                             className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary-DEFAULT)]/10 to-[var(--color-accent-DEFAULT)]/10 text-[var(--color-primary-DEFAULT)] rounded-xl text-sm font-medium border border-[var(--color-primary-DEFAULT)]/20 hover:border-[var(--color-primary-DEFAULT)]/40 transition-colors cursor-default"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             whileHover={{ scale: 1.05, y: -2 }}
//                             transition={{ delay: index * 0.1 }}
//                           >
//                             {skill}
//                           </motion.span>
//                         ))}
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* Haripriya - Execution Force (Right/Dark) */}
//               <motion.div 
//                 className="group order-1 lg:order-2 lg:translate-y-16"
//                 initial={{ opacity: 0, x: 100, rotate: 10 }}
//                 whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.div 
//                   className="relative"
//                   whileHover={{ scale: 1.02, rotate: -1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 >
//                   {/* Precision Aura */}
//                   <motion.div 
//                     className="absolute -inset-8 bg-gradient-to-br from-gray-900/10 via-[var(--color-primary-dark)]/5 to-transparent rounded-[2rem] blur-xl"
//                     animate={{
//                       scale: [1, 1.05, 1],
//                       opacity: [0.3, 0.6, 0.3],
//                     }}
//                     transition={{
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
                  
//                   {/* Main Card */}
//                   <div className="relative bg-gradient-to-br from-gray-900 via-[var(--color-primary-dark)] to-gray-800 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden">
//                     {/* Decorative Grid Pattern */}
//                     <div className="absolute inset-0 opacity-5">
//                       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                         <defs>
//                           <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
//                             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
//                           </pattern>
//                         </defs>
//                         <rect width="100%" height="100%" fill="url(#grid)" />
//                       </svg>
//                     </div>
                    
//                     {/* Geometric Decorations */}
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-accent-DEFAULT)]/20 to-transparent rounded-l-full -translate-y-16 translate-x-16"></div>
//                     <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-r-full translate-y-12 -translate-x-12"></div>
                    
//                     <div className="relative z-10">
//                       {/* Profile Section */}
//                       <div className="flex items-start space-x-6 mb-8">
//                         <motion.div 
//                           className="relative flex-shrink-0"
//                           whileHover={{ scale: 1.05 }}
//                           transition={{ type: "spring", stiffness: 300 }}
//                         >
//                           <div className="relative">
//                             <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/20">
//                               <Image 
//                                 src="/images/co/hari.png"
//                                 alt="Haripriya - Operations Director"
//                                 width={144}
//                                 height={144}
//                                 className="object-cover w-full h-full"
//                               />
//                             </div>
                            
//                             {/* Precision Badge */}
//                             <motion.div 
//                               className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-[var(--color-accent-DEFAULT)] to-white rounded-2xl flex items-center justify-center shadow-lg"
//                               whileHover={{ rotate: -360 }}
//                               transition={{ duration: 0.6 }}
//                             >
//                               <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//                               </svg>
//                             </motion.div>
                            
//                             {/* Precision particles */}
//                             {[...Array(4)].map((_, i) => (
//                               <motion.div
//                                 key={i}
//                                 className="absolute w-1 h-1 bg-[var(--color-accent-DEFAULT)]/60 rounded-full"
//                                 style={{
//                                   top: `${15 + i * 20}%`,
//                                   right: `${-15 - i * 8}px`,
//                                 }}
//                                 animate={{
//                                   scale: [1, 1.5, 1],
//                                   opacity: [0.6, 1, 0.6],
//                                 }}
//                                 transition={{
//                                   duration: 1.5 + i * 0.3,
//                                   repeat: Infinity,
//                                   ease: "easeInOut",
//                                   delay: i * 0.2
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </motion.div>
                        
//                         <div className="flex-1 min-w-0">
//                           <motion.h3 
//                             className="text-3xl lg:text-4xl font-bold mb-3 text-white"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           >
//                             Haripriya
//                           </motion.h3>
//                           <motion.p 
//                             className="text-[var(--color-accent-DEFAULT)] font-bold text-xl mb-2"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ delay: 0.7 }}
//                           >
//                             Operations Director
//                           </motion.p>
//                           <motion.div 
//                             className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-[var(--color-accent-DEFAULT)] mb-6 border border-white/20"
//                             whileHover={{ scale: 1.05, x: -5 }}
//                           >
//                             ⚡ The Executor
//                           </motion.div>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <motion.div 
//                         className="space-y-4 text-gray-300 leading-relaxed mb-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.9, duration: 0.6 }}
//                       >
//                         <p>Haripriya transforms design intent into <span className="font-semibold text-white">dependable results</span>, leading responsible sourcing and quality-control processes across both brands.</p>
//                         <p>She builds <span className="font-semibold text-white">systems that protect design quality</span> at scale while maintaining craft excellence and precise delivery timelines.</p>
//                       </motion.div>

//                       {/* Skills */}
//                       <motion.div 
//                         className="flex flex-wrap gap-3"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 1.1, staggerChildren: 0.1 }}
//                       >
//                         {['Quality Control', 'Systems', 'Reliability', 'Precision'].map((skill, index) => (
//                           <motion.span 
//                             key={skill}
//                             className="px-4 py-2 bg-white/10 text-[var(--color-accent-DEFAULT)] rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20 hover:border-[var(--color-accent-DEFAULT)]/40 transition-colors cursor-default"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             whileHover={{ scale: 1.05, y: -2 }}
//                             transition={{ delay: index * 0.1 }}
//                           >
//                             {skill}
//                           </motion.span>
//                         ))}
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Unity Statement */}
//           <motion.div 
//             className="text-center mt-24 max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="bg-gradient-to-r from-gray-900/5 via-[var(--color-primary-DEFAULT)]/5 to-[var(--color-accent-DEFAULT)]/5 rounded-2xl p-8 backdrop-blur-sm border border-white/50"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] bg-clip-text text-transparent">
//                 Together, We Create Magic
//               </h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Co-owners of SAAG and Savistar, Sachi and Haripriya unite art and reliability. 
//                 The result is <span className="font-semibold">India-made furniture and turnkey interiors</span> that are 
//                 sustainable, repair-friendly, and ready for modern living.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//     </>
//     )
// }
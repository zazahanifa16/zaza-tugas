import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-white/40 backdrop-blur text-sm font-medium text-pink-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            👋 Halo, aku Zaza Hanifa
          </motion.span>

          {/* Title */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-pink-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Siswi MAN 1 Banda Aceh
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              & Future Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-pink-800 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Aku adalah siswi yang tertarik dengan dunia teknologi, desain, 
            dan pengembangan web. Aku suka belajar hal baru dan membuat karya yang menarik ✨
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button 
              className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white"
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Karya Aku
            </Button>

            <Button 
              variant="outline"
              className="rounded-full px-8 border-pink-500 text-pink-700 hover:bg-pink-100"
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Aku
            </Button>
          </motion.div>

          {/* Social */}
          <motion.div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/zazahanifa16' },
              { icon: Instagram, href: 'https://www.instagram.com/syazahni' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/40 backdrop-blur hover:bg-pink-200 text-pink-700"
                whileHover={{ scale: 1.1 }}
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/40 backdrop-blur animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-pink-700" />
      </motion.button>
    </section>
  );
}
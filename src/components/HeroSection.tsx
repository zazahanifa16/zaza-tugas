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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-white/40 backdrop-blur text-sm font-medium text-pink-700 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Halo, aku Zaza Hanifa
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-pink-900"
          >
            Siswi MAN 1 Banda Aceh
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              &amp; Future Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-pink-800 mb-8 max-w-2xl mx-auto"
          >
            Aku adalah siswi MAN 1 Banda Aceh yang tertarik dengan dunia teknologi,
            desain, dan pengembangan web. Aku suka belajar hal baru dan berbagi
            inspirasi melalui karya-karyaku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Karya Aku
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-pink-500 text-pink-700 hover:bg-pink-100"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Aku
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Youtube, href: '#', label: 'YouTube' },
              { icon: Instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/40 backdrop-blur hover:bg-pink-200 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-pink-700" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/40 backdrop-blur animate-bounce cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-pink-700" />
      </motion.button>
    </section>
  );
}

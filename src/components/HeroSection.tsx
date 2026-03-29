 import { motion } from 'framer-motion';
import { Github, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: 'https://github.com/zazahanifa16', label: 'GitHub' }, 
    { icon: Instagram, href: 'https://www.instagram.com/syazahni', label: 'Instagram' }, 
  ];

  return (
    <footer className="py-8 border-t border-pink-100 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT: FOTO + TEXT */}
          <div className="flex items-center gap-3">
            <motion.img
              src="/profile.jpg" // simpan foto di folder public
              alt="Zaza Hanifa"
              className="w-12 h-12 rounded-full object-cover border-2 border-pink-300 shadow-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/100x100.png?text=Z';
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-pink-500"
            >
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400" />
              <span>by Zaza Hanifa 💗</span>
            </motion.div>
          </div>

          {/* RIGHT: SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-pink-100 transition-colors text-pink-400 hover:text-pink-600"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
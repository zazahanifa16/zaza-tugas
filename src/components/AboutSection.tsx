import { motion } from 'framer-motion';
import { BookOpen, Mic, Heart, Star } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Mic, value: '2+', label: 'Kompetisi' },
    { icon: BookOpen, value: 'IPS & Bahasa', label: 'Bidang Favorit' },
    { icon: Heart, value: '100%', label: 'Semangat' },
    { icon: Star, value: 'Dream Big', label: 'Impian' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block">
            Tentang Aku 💗
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-pink-800 mb-4">
            Kenalan Yuk Sama Aku ✨
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-pink-300 blur-xl opacity-30 group-hover:opacity-50 transition" />
              
              <img
                src="/profile.jpg"
                alt="Zaza Hanifa"
                className="relative w-full aspect-square object-cover rounded-2xl border-4 border-white shadow-xl"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg">
              <p className="font-bold text-lg text-pink-600">Zaza Hanifa</p>
              <p className="text-sm text-pink-500">Siswi MAN 1 Banda Aceh</p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-pink-800">
              Siswi yang Suka Belajar & Berkembang 💖
            </h3>

            <p className="text-pink-700 leading-relaxed">
              Haii! Aku Zaza Hanifa, siswi dari MAN 1 Banda Aceh ✨  
              Aku punya minat besar di bidang IPS dan Bahasa, terutama dalam hal komunikasi dan public speaking.
            </p>

            <p className="text-pink-700 leading-relaxed">
              Aku pernah mengikuti speech competition dan English Olympiad.  
              Buat aku, belajar itu bukan cuma soal nilai, tapi juga pengalaman, keberanian, dan berkembang jadi lebih baik 💕
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/70 backdrop-blur rounded-xl text-center shadow-md hover:scale-105 transition-all"
                >
                  <stat.icon className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                  <p className="font-bold text-lg text-pink-800">{stat.value}</p>
                  <p className="text-sm text-pink-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
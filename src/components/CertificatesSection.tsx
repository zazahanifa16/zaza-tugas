import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Speech Competition Participant',
    issuer: 'MAN 1 Banda Aceh',
    date: '2025',
    credentialId: 'SPEECH-001',
    image: '🎤',
    color: 'from-pink-300/30 to-rose-300/30',
    link: '#',
  },
  {
    title: 'English Olympiad Participant',
    issuer: 'MAN 1 Banda Aceh',
    date: '2025',
    credentialId: 'ENG-OLY-002',
    image: '📚',
    color: 'from-purple-300/30 to-pink-300/30',
    link: '#',
  },
  {
    title: 'Language & Social Studies Enthusiast',
    issuer: 'Self Development',
    date: '2024',
    credentialId: 'SELF-003',
    image: '🌍',
    color: 'from-yellow-300/30 to-pink-300/30',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block">Pencapaian Aku 💗</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-pink-800">
            Pengalaman & Prestasi
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/60 backdrop-blur rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-pink-100">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-pink-500 mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-pink-800 group-hover:text-pink-500 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-pink-600">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-pink-500">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-pink-400 font-mono">
                    ID: {cert.credentialId}
                  </p>
                  
                  <Button variant="outline" size="sm" className="rounded-full mt-2 border-pink-300 text-pink-600 hover:bg-pink-100" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Lihat
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

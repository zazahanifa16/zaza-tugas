import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Speech Competition 🎤',
    description: 'Aku pernah mengikuti lomba speech dan belajar bagaimana berbicara dengan percaya diri di depan banyak orang.',
    tags: ['Public Speaking', 'English', 'Confidence'],
    image: '🎤',
    color: 'from-pink-300/30 to-rose-300/30',
  },
  {
    title: 'English Olympiad 📚',
    description: 'Mengikuti olimpiade bahasa Inggris untuk meningkatkan kemampuan grammar, vocabulary, dan comprehension.',
    tags: ['English', 'Grammar', 'Vocabulary'],
    image: '📚',
    color: 'from-purple-300/30 to-pink-300/30',
  },
  {
    title: 'Belajar IPS 🌍',
    description: 'Aku suka belajar tentang sosial, ekonomi, dan dunia sekitar untuk menambah wawasan.',
    tags: ['IPS', 'Sosial', 'Belajar'],
    image: '🌍',
    color: 'from-yellow-300/30 to-pink-300/30',
  },
  {
    title: 'Content Belajar ✨',
    description: 'Aku suka membuat catatan dan konten belajar sederhana untuk membantu memahami pelajaran.',
    tags: ['Learning', 'Notes', 'Creative'],
    image: '💡',
    color: 'from-pink-300/30 to-purple-300/30',
    isContent: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block">Portfolio Aku 💗</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-pink-800">
            Kegiatan & Pengalaman Aku ✨
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/60 backdrop-blur rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-pink-100">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-5xl">{project.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-600 font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="font-bold text-pink-800 group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-pink-600">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
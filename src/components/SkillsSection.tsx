import { motion } from 'framer-motion';

const skills = [
  { name: 'Public Speaking 🎤', level: 85 },
  { name: 'English Communication 🌍', level: 90 },
  { name: 'Confidence 💖', level: 88 },
  { name: 'Critical Thinking 🧠', level: 80 },
  { name: 'Teamwork 🤝', level: 85 },
  { name: 'Creativity 🎨', level: 87 },
];

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-pink-700">{name}</span>
        <span className="text-sm text-pink-500">{level}%</span>
      </div>
      <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-pink-400 to-pink-600"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block">Tentang Aku 💗</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-pink-800">
            Aku Punya Skill Apa Aja Ya? 🤔
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
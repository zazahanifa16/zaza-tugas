import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-pink-100"
    >
      <div className="text-center">
        
        {/* LOGO / NAMA */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-pink-600 mb-4"
        >
          Zaza Hanifa 💗
        </motion.h1>

        {/* LOADING DOTS */}
        <div className="flex justify-center gap-2">
          {[0,1,2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-pink-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <p className="text-pink-500 mt-4 text-sm">
          Loading yaa... ✨
        </p>

      </div>
    </motion.div>
  );
}
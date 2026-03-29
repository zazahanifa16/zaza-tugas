import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi'),
  email: z.string().trim().email('Email tidak valid'),
  subject: z.string().trim().min(1, 'Subjek harus diisi'),
  message: z.string().trim().min(1, 'Pesan harus diisi'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zazahanifa@email.com',
    href: 'mailto:zazahanifa@email.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) return;

    setIsSubmitting(true);

    try {
      await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      toast({
        title: 'Pesan Terkirim! 💗',
        description: 'Makasih sudah kirim pesan ke aku ya ✨',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Gagal 😢',
        description: 'Coba lagi nanti ya...',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block">
            Kontak Aku 💗
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-pink-800 mb-4">
            Yuk Kenalan Lebih Dekat ✨
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-pink-800">
              Haii 👋
            </h3>
            <p className="text-pink-700">
              Kalau kamu mau kenalan, tanya sesuatu, atau sekadar ngobrol,
              kamu bisa kirim pesan ke aku ya 💕
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur rounded-xl"
                >
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <info.icon className="text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-pink-500">{info.label}</p>
                    <p className="font-medium text-pink-800">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white/60 backdrop-blur rounded-2xl">

              <Input
                name="name"
                placeholder="Nama kamu 💗"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                name="email"
                placeholder="Email kamu ✉️"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                name="subject"
                placeholder="Mau bahas apa? 🤔"
                value={formData.subject}
                onChange={handleChange}
              />

              <Textarea
                name="message"
                placeholder="Tulis pesan kamu di sini ya ✨"
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                className="w-full rounded-full bg-pink-500 hover:bg-pink-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Kirim Pesan 💌
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
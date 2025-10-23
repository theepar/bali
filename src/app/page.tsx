"use client";
import Hero from '../components/Hero';
import Image from 'next/image';
import DestinationCard from '../components/DestinationCard';
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'motion/react';
import { Waves, Sparkles, UtensilsCrossed } from 'lucide-react';

export default function App() {
  const destinations = [
    {
      title: 'Seminyak',
      subtitle: 'Pantai & Matahari Terbenam',
      description: 'Nikmati sunset yang memukau di salah satu pantai tersemarak di Bali. Terkenal dengan bar pantai yang trendi, restoran mewah, dan ombak yang sempurna untuk berselancar. Pengalaman sunset yang tak akan pernah Anda lupakan.',
      imageUrl: 'https://images.unsplash.com/photo-1717501787981-d5f28eb2df5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYxMTk1NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Tanah Lot',
      subtitle: 'Pura & Spiritualitas',
      description: 'Pura ikonik yang berdiri megah di atas batu karang di tengah laut. Salah satu pura paling terkenal di Bali dengan pemandangan sunset yang spektakuler dan nilai spiritual yang tinggi. Sakralitas dan keindahan dalam satu tempat.',
      imageUrl: 'https://images.unsplash.com/photo-1670293797043-2c0788c5a7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTIwODk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Ubud',
      subtitle: 'Hutan & Satwa',
      description: 'Hutan suci yang dihuni oleh ratusan monyet ekor panjang Bali. Tempat wisata unik yang memadukan keindahan alam, arsitektur pura kuno, dan interaksi dengan primata yang ramah. Pengalaman alam yang autentik.',
      imageUrl: 'https://images.unsplash.com/photo-1683618621731-e33f604ffffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdUJCdCUyMG1vbmtleXxlbnwxfHx8fDE3NjEyMDg5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Tegenungan',
      subtitle: 'Air Terjun',
      description: 'Air terjun yang indah dikelilingi oleh hutan tropis yang rimbun. Tempat sempurna untuk berenang di kolam alami sambil menikmati keajaiban alam Bali yang memukau. Kesegaran dan keindahan yang menyatu.',
      imageUrl: 'https://images.unsplash.com/photo-1558699692-65505eece6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2MTIwODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const experiences = [
    {
      title: 'Surfing',
      description: 'Taklukkan ombak terbaik di Bali dengan pemandangan pantai yang menakjubkan',
      imageUrl: 'https://images.unsplash.com/photo-1559934304-23e9010fcdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwdHJvcGljYWwlMjBiZWFjaHxlbnwxfHx8fDE3NjEyMDg5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Waves,
    },
    {
      title: 'Wellness',
      description: 'Temukan kedamaian inner di surga wellness Bali yang terkenal sedunia',
      imageUrl: 'https://images.unsplash.com/photo-1593082809021-a687deabaeab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MTIwODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Sparkles,
    },
    {
      title: 'Culinary',
      description: 'Jelajahi cita rasa autentik masakan Bali yang kaya akan bumbu dan tradisi',
      imageUrl: 'https://images.unsplash.com/photo-1729606559706-6c06d2ef1004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWxpJTIwcmVzb3J0fGVufDF8fHx8MTc2MTIxMDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: UtensilsCrossed,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black">

      <Hero imageUrl="https://images.unsplash.com/photo-1668276490368-409a6002756d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5maW5pdHklMjBwb29sfGVufDF8fHx8MTc2MTIxMDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />

      {/* Destinations Section */}
      <section id="destinations" className="bg-black">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.title}
            {...destination}
            delay={0.2}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="bg-black py-24 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-[#d4af37] mx-auto mb-8"
            />
            <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-6">
              PENGALAMAN UNIK
            </p>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Discover Bali
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                {...experience}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] lg:h-screen overflow-hidden"
          >
            {/* Ganti <img> dengan next/image */}
            <Image
              src="https://images.unsplash.com/photo-1755077005329-13ce030aa794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdHJhZGl0aW9uYWwlMjBkYW5jZXJ8ZW58MXx8fHwxNzYxMjA4OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Budaya Bali"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-black flex items-center justify-center p-8 lg:p-16 xl:p-24"
          >
            <div className="max-w-xl">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-px bg-[#d4af37] mb-8"
              />

              <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-6">
                WARISAN BUDAYA
              </p>

              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                Budaya & Tradisi
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Bali tidak hanya terkenal dengan keindahan alamnya, tetapi juga warisan budaya yang kaya dan tradisi yang masih dijaga hingga kini.
              </p>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Dari tari Kecak yang dramatis di Uluwatu hingga upacara Melasti di pantai, Anda akan merasakan spiritualitas yang mendalam.
              </p>

              <div className="flex flex-wrap gap-4">
                {['Tari Tradisional', 'Seni Lukis', 'Upacara Adat'].map((item) => (
                  <div
                    key={item}
                    className="px-6 py-2 border border-white/20 text-white/70 text-sm tracking-wide hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-32 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-[#d4af37] mx-auto mb-8"
            />

            <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-6">
              HUBUNGI KAMI
            </p>

            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Mulai Petualangan Anda
            </h2>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Biarkan kami membantu Anda merencanakan perjalanan tak terlupakan ke Pulau Dewata
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-black text-xs tracking-[0.3em]">
                  HUBUNGI KAMI
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-4 border border-white/20 hover:border-[#d4af37] transition-colors duration-300"
              >
                <span className="text-white text-xs tracking-[0.3em] group-hover:text-[#d4af37] transition-colors">
                  LIHAT GALERI
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
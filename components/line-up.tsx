'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useState } from 'react'

type Performer = {
  name: string;
  role: string;
  country?: string;
  image: string;
  description: string;
  longDescription?: string;
  affiliations?: string[];
}

export function LineUp() {
  const [selectedPerformer, setSelectedPerformer] = useState<Performer | null>(null)

  const judges: Performer[] = [
    { 
      name: "Likid", 
      role: "JUDGE",
      image: "/likid.webp",
      description: "French Waving specialist and rising force in the Waving community.",
      longDescription: "Killian, also known as Likid, is a French Waving specialist and a prominent member of the Kittridge Waves crew. In recent years, Killian has established himself as a rising force in the Waving community, renowned for his exceptional fluidity and technical mastery.\n\nLikid's dedication extends beyond performance. He has actively shared his passion and expertise with hundreds of students through workshops and private classes, nurturing the next generation of Waving artists. His commitment to both perfecting his craft and passing on his knowledge has made him an invaluable asset to the Waving world.\n\nWith his unique style that blends traditional techniques with innovative movements, Likid continues to push the boundaries of what's possible in Waving. His performances are a testament to the art form's beauty and complexity, inspiring both newcomers and seasoned dancers alike.",
      affiliations: ["Kittridge Waves"]
    },
    { 
      name: "Ooshcon", 
      role: "JUDGE",
      image: "/ooschcoon.webp",
      description: "Embedded in love and devoted to flow.",
      longDescription: "Ooshcon is a Samoan 'decipher of circles', who specializes in free-body methodologies. The core belief 'ina ia sosolo le alofa / so love may flow' is imbued into Ooshcon's evolving practice and way of being.\n\nOoshcon's work is grounded and actualised through the forms and philosophies of Waving Dance culture, Krump Dance culture, Animation Dance, Geometric Dance, Breath-work and Character/Entity-building. Ooshcon embraces these forms with emotional rigour and innovative theatrical practices in pursuit of 'formlessness'.\n\nOoshcon is a trusted facilitator throughout his practice and communities. Through his work Ooshcon strives to symbolically assist others to journey into new personal depths and build on their own 'emotional content'.",
      affiliations: ["@_conjah", "Ayz Fam"]
    },
    { 
      name: "Jon Gifted", 
      role: "JUDGE",
      image: "/jongifted.webp",
      description: "Versatile street dancer specializing in Tutting, Waving, Krump, and Hip Hop.",
      longDescription: "Jon \"Gifted,\" a versatile street dancer from El Paso and raised in Dallas, has gained respect as a freestyle dancer and instructor, specializing in Tutting, Waving, Krump, and Hip Hop. In 2015, he moved to Los Angeles to further his commercial dance career, working with renowned artists like Erykah Badu, Fergie, Will Smith, JoJo, and Snoop Dogg.\n\nJon's impressive performance portfolio includes projects for BET, Disney's Mickey Mouse Club, World of Dance, The Hip Hop Nutcracker, and Louis Vuitton. His talent and dedication have earned him spots in esteemed dance groups such as Rock Solid Crew, Wave Gang, and The Newz Fam.\n\nPassionate about teaching, Jon regularly shares his love for dance at conventions such as Adrenaline Dance Convention, National Dance Honors, and Movement Lifestyle. He continues to inspire dancers globally with his unique blend of freestyle roots and commercial success, as he looks forward to expanding his international teaching reach.\n\nJon \"Gifted\" embodies the spirit of versatility and continuous growth in the dance world, bridging the gap between street dance authenticity and commercial industry success.",
      affiliations: ["Wave Gang", "The Newz Fam", "Rock Solid Crew"]
    },
  ]

  const performers: Performer[] = [
    { 
      name: "Yeliz Pazar", 
      role: "HOST", 
      image: "/yeliz.webp",
      description: "Dancer, Choreographer & Festival Host with roots in Locking, Hip Hop, House Dance, and Waacking.",
      longDescription: "Yeliz Pazar is a multifaceted artist excelling as a Dancer, Choreographer, and Festival Host. Her diverse background in dance cultures such as Locking, Hip Hop, House Dance, and Waacking informs her unique approach to movement and performance.\n\nYeliz's creative process involves developing artistic concepts and methods for dance theater productions and movement formats. Her innovative work led to the co-founding of the collective nutrospektif in 2012, which was appointed Factory Artists at tanzhaus nrw in Düsseldorf, Germany in 2020.\n\nAs a pioneer in the German Waacking scene, Yeliz holds the distinction of being a 1st Generation Waacking dancer in the country. Her passion for the style is evident in her role as the organizer of \"The Waack Off\" Festival, the first international event of its kind in Germany.\n\nYeliz's contributions to the dance community extend beyond organizing. She is an active member of Mānuka-Waacking Flowers, a German Waacking Crew, further solidifying her place in the Waacking world. Her most recent achievement includes choreographing and directing \"Point of no return,\" her first Waacking theater piece in Germany, showcasing her ability to bring Waacking to new artistic heights.",
      affiliations: ["nutrospektif", "Mānuka-Waacking Flowers"]
    },
    { 
      name: "DJ Joseph Wu", 
      role: "DJ",
      image: "/joseph.webp",
      description: "Established resident DJ at global dance circles and battles, known for creating vibrant atmospheres.",
      longDescription: "Joseph, born in Eritrea and currently based in Wuppertal, Germany, has made a name for himself as DJ Joseph Wu in the global dance scene. He has established himself as a resident DJ at numerous dance circles and battles around the world, earning a reputation for his expertise in creating the perfect atmosphere for dancers.\n\nSpecializing in Hip Hop music, Joseph's philosophy centers around creating vibes and atmospheres that elevate the dance experience. His musical background is deeply rooted in various genres, including Hip Hop (with a focus on BOOM BAP), New Jack Swing, Funk, and Neo Soul. He also draws inspiration from iconic record labels such as Motown and Stone Throw, as well as the worldwide Beat Scene.\n\nJoseph's talent has been showcased at numerous prestigious events, including:\n- Summer Dance Forever\n- Juste Debout (Tokyo, Germany, and Bratislava)\n- K.O.D Germany\n- Redbull BC One Austria\n- Funkin Stylez World Final Germany\n- Juste Play Just Dance China\n- The Grind Philippines\n\nWith his extensive experience and deep understanding of dance music, DJ Joseph Wu continues to be a sought-after DJ in the international dance community, known for his ability to connect with dancers through his carefully curated sets.",
      affiliations: ["Summer Dance Forever", "Juste Debout", "Redbull BC One"]
    },
    { 
      name: "Scar", 
      role: "DJ", 
      image: "/scar.webp",
      description: "Upcoming DJ and producer known for infusing fresh energy into his sets.",
      longDescription: "Known in the local scene, Scar is an upcoming DJ and producer making waves with his innovative approach to music. He infuses his sets with fresh energy and an unwavering love for music, creating an electrifying atmosphere for dancers and listeners alike.\n\nScar's philosophy is rooted in the belief that every dancer can transcend their limits when the music allows it. This perspective drives him to carefully craft his sets, always aiming to push the boundaries and inspire dancers to reach new heights in their performances.\n\nAs a rising star in the DJ world, Scar's unique style and dedication to his craft have quickly gained him recognition. His ability to read the crowd and adapt his music accordingly ensures that every set is a unique experience, tailored to elevate the energy of the festival.\n\nWith his fresh take on music and his commitment to the dance community, Scar is poised to become a significant figure in the DJ scene. His presence at the High-kymatic festival promises to bring an exciting new dimension to the musical landscape, and we can't wait to see how he elevates the vibe!"
    },
  ]

  const LineUpSection = ({ title, items }: { title: string, items: Performer[] }) => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-b from-[#1a1a2e] to-[#2a1a28]">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p className="text-[#c3f6fe] text-sm">{item.role}</p>
                  {item.country && (
                    <p className="text-[#c3f6fe] text-sm">{item.country}</p>
                  )}
                  <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                  {item.longDescription && (
                    <button
                      onClick={() => setSelectedPerformer(item)}
                      className="text-[#c3f6fe] text-sm hover:text-white transition-colors mt-2"
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="lineup" className="bg-[#0a0a1e] py-32">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Line Up</h2>
          <p className="text-[#c3f6fe] text-lg">Meet our amazing team</p>
        </motion.div>

        <div className="space-y-24">
          <LineUpSection title="Our Judges" items={judges} />
          <LineUpSection title="Host & DJs" items={performers} />
        </div>

        <AnimatePresence>
          {selectedPerformer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPerformer(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1a1a2e] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setSelectedPerformer(null)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6 sm:items-center">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white">{selectedPerformer.name}</h3>
                      <p className="text-[#c3f6fe]">{selectedPerformer.role}</p>
                      {selectedPerformer.country && (
                        <p className="text-[#c3f6fe] mt-1">{selectedPerformer.country}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-white/80">
                    {selectedPerformer.longDescription?.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {selectedPerformer.affiliations && (
                    <div className="mt-6">
                      <p className="text-[#c3f6fe] font-medium">Representing:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedPerformer.affiliations.map((affiliation) => (
                          <span
                            key={affiliation}
                            className="bg-white/10 px-3 py-1 rounded-full text-sm text-white mb-2"
                          >
                            {affiliation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}


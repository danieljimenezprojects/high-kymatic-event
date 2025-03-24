'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

type ScheduleItem = {
  time: string;
  event: string;
  location?: string;
  locationLink?: string;
}

type ScheduleData = {
  [key: string]: {
    date: string;
    items: ScheduleItem[];
  };
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState('day1')

  const schedule: ScheduleData = {
    day1: {
      date: "Thursday 22nd of May",
      items: [
        { time: "TBA", event: "Warm Up Session", location: "TBA" }
      ]
    },
    day2: {
      date: "Friday 23rd of May",
      items: [
        { time: "11:00-13:00", event: "Workshop", location: "All Star Dance City", locationLink: "https://maps.app.goo.gl/1wrTjqaP2RALX5QK9?g_st=com.google.maps.preview.copy" },
        { time: "13:15-15:15", event: "Workshop", location: "All Star Dance City", locationLink: "https://maps.app.goo.gl/1wrTjqaP2RALX5QK9?g_st=com.google.maps.preview.copy"  },
        { time: "17:00-21:00", event: "Battle", location: "Seagull Space", locationLink: "https://maps.app.goo.gl/TTPiXWg5hJphuxB4A"  },
        { time: "", event: "1vs1 Beginner Waving Category" },
        { time: "", event: "1vs1 Storytelling Category" }
      ]
    },
    day3: {
      date: "Saturday 24th of May",
      items: [
        { time: "14:00-19:00", event: "Main Event - Waving Game", location: "WE", locationLink: "https://www.google.com/maps/place/WE/@40.6258592,22.9581152,16z/data=!3m1!4b1!4m6!3m5!1s0x14a838fc149c9f29:0x2b462f2c3d04a985!8m2!3d40.6258592!4d22.9581152!16s%2Fg%2F11cn94g8zd?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D" }
      ]
    },
    day4: {
      date: "Sunday 25th of May",
      items: [
        { time: "11:00-13:00", event: "Workshop", location: "All Star Dance City", locationLink: "https://maps.app.goo.gl/1wrTjqaP2RALX5QK9?g_st=com.google.maps.preview.copy" },
        { time: "13:15-15:15", event: "Workshop", location: "All Star Dance City", locationLink: "https://maps.app.goo.gl/1wrTjqaP2RALX5QK9?g_st=com.google.maps.preview.copy" },
        { time: "17:30-21:30", event: "Theater Performances + Exhibition Exchange",location: "Sofouli Theater", locationLink: "https://www.google.com/maps/place/Sofouli+Theater/@40.5887317,22.9454926,16z/data=!3m1!4b1!4m6!3m5!1s0x14a83ed10293dcf1:0xe61a67c0f7facf19!8m2!3d40.5887317!4d22.9454926!16s%2Fg%2F11b69cgprw?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D" }
      ]
    }
  }

  const ScheduleItem = ({ item }: { item: ScheduleItem }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-start gap-4 hover:bg-white/10 transition-colors">
        <div className="text-[#fe4a4a] flex-shrink-0 mt-1">
          {item.time ? <Clock className="h-5 w-5" /> : <div className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium">{item.event}</h3>
          {item?.time && <p className="text-[#c3f6fe] text-sm">{item.time}</p>}
          {item?.location && item?.locationLink && (
            <p className={`text-[#c3f6fe] text-sm flex items-center mt-1 underline hover:text-[#fe4a4a]`}>
              <a href={item?.locationLink} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4 mr-1 inline-block align-middle" />
                {item?.location}
              </a>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-[#0a0a1e] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Schedule</h2>
          <p className="text-[#c3f6fe] text-lg">Plan your days at High-kymatic</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-12"> {/* Update 1 */}
            {Object.entries(schedule).map(([day, { date }], index) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-[#fe4a4a] text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {day === 'day1' ? 'Thursday' : 
                 day === 'day2' ? 'Friday' : 
                 day === 'day3' ? 'Saturday' : 'Sunday'} {/* Update 2 */}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{schedule[activeDay].date}</h3>
              <div className="space-y-4">
                {schedule[activeDay].items.map((item, index) => (
                  <ScheduleItem key={index} item={item} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}


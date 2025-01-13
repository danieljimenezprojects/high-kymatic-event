'use client'

import { Mail } from 'lucide-react'

export function OpenCallForm() {
  const handleApplyNow = () => {
    window.location.href = 'mailto:highkymatic@gmail.com?subject=Open Call Application';
  }

  return (
    <button 
      onClick={handleApplyNow}
      className="bg-[#fe4a4a] hover:bg-[#fb7878] text-white px-6 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
    >
      <Mail className="h-5 w-5" />
      Apply Now
    </button>
  )
}


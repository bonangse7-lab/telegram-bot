import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 140, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 140, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Logo with glow effect */}
        <div className="mb-10">
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-48 h-48 bg-orange-500/30 rounded-full blur-xl animate-pulse" />
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260510_015127_778-ExxXA2RsT2HfPIaxRxHjTxtzHl8366.jpg"
              alt="HA RIK KI Logo"
              width={180}
              height={180}
              className="rounded-full relative z-10 ring-4 ring-orange-500/30 shadow-2xl shadow-orange-500/20"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance tracking-tight">
            Welcome
          </h1>
          <p className="text-gray-400 text-lg">
            Connect with us through your preferred channel
          </p>
        </div>

        {/* Buttons with premium glass-morphism styling */}
        <div className="flex flex-col gap-5 max-w-sm mx-auto">
          {/* Telegram Channel - Premium Blue Glass */}
          <Link
            href="https://t.me/harikki_Channel"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
            <div className="relative flex items-center justify-center gap-3 h-16 px-6 bg-gradient-to-r from-[#0088cc] to-[#0099dd] rounded-2xl text-white font-semibold text-lg shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
              <TelegramIcon className="w-6 h-6" />
              <span>Telegram Channel</span>
              <ArrowIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </Link>

          {/* Contact Owner - Premium Orange/Gold Glass */}
          <Link
            href="https://t.me/HARIKKII"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
            <div className="relative flex items-center justify-center gap-3 h-16 px-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white font-semibold text-lg shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
              <UserIcon className="w-6 h-6" />
              <span>Contact Owner</span>
              <ArrowIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </Link>

          {/* Website - Premium Glass Effect */}
          <Link
            href="https://authgo.pro/rikkistore"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200" />
            <div className="relative flex items-center justify-center gap-3 h-16 px-6 bg-[#1a1a2e]/90 backdrop-blur-xl rounded-2xl text-white font-semibold text-lg shadow-2xl border border-white/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-[#1a1a2e] group-active:scale-[0.98]">
              <GlobeIcon className="w-6 h-6" />
              <span>Website</span>
              <ArrowIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </Link>

          {/* Phone Number - Premium Green Glass */}
          <Link
            href="tel:0974215127"
            className="group relative w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
            <div className="relative flex items-center justify-center gap-3 h-16 px-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-semibold text-lg shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
              <PhoneIcon className="w-6 h-6" />
              <span>Phone Number</span>
              <ArrowIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-gray-500 text-sm">
          Choose an option above to get started
        </p>
      </div>
    </main>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

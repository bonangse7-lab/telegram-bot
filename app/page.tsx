import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5_6339156091472977392-7YjVIWbVW8by20daBYtJUjDTEynYuT.MOV"
          type="video/quicktime"
        />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="max-w-2xl w-full text-center">
        {/* Logo/Title */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260510_015127_778-ExxXA2RsT2HfPIaxRxHjTxtzHl8366.jpg"
              alt="HA RIK KI Logo"
              width={180}
              height={180}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Welcome
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with us through your preferred channel
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <Button
            asChild
            size="lg"
            className="w-full h-14 text-base font-medium bg-[#0088cc] hover:bg-[#0077b5] text-white"
          >
            <Link
              href="https://t.me/harikki_Channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="w-5 h-5 mr-3" />
              Telegram Channel
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full h-14 text-base font-medium"
          >
            <Link
              href="https://t.me/HARIKKII"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="w-5 h-5 mr-3" />
              Contact Owner
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full h-14 text-base font-medium"
          >
            <Link
              href="https://authgo.pro/rikkistore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon className="w-5 h-5 mr-3" />
              Website
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full h-14 text-base font-medium bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
          >
            <Link href="tel:0974215127">
              <PhoneIcon className="w-5 h-5 mr-3" />
              Phone Number
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <p className="mt-16 text-muted-foreground text-sm">
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

function MailIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

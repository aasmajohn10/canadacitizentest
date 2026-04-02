// TODO: Replace with Google AdSense code

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-xs text-gray-400 mb-1">Advertisement</p>
      {/* Desktop: 728x90 */}
      <div className="hidden md:flex w-[728px] max-w-full h-[90px] bg-gray-100 border border-dashed border-gray-300 rounded items-center justify-center text-gray-400 text-sm">
        Ad slot — 728×90
      </div>
      {/* Mobile: 320x50 */}
      <div className="flex md:hidden w-[320px] max-w-full h-[50px] bg-gray-100 border border-dashed border-gray-300 rounded items-center justify-center text-gray-400 text-sm">
        Ad slot — 320×50
      </div>
    </div>
  );
}

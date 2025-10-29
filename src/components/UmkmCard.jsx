import { MapPin, Clock } from 'lucide-react'

const formatPrice = (min, max) => {
  return `Rp${(min / 1000).toFixed(0)}K - ${(max / 1000).toFixed(0)}K`
}

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const UmkmCard = ({ umkm }) => {
  return (
    <div className="w-full max-w-sm h-[480px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:scale-105 transition-transform duration-200">
      <div className="h-48 bg-hero bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Konten */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-gray-800 leading-tight flex-1">
              {truncateText(umkm.basicInfo.businessName, 30)}
            </h2>
            <div className="ml-3 text-right">
              <p className="text-lg font-bold text-gray-800">
                {formatPrice(
                  umkm.productsAndServices.priceRange.min,
                  umkm.productsAndServices.priceRange.max
                )}
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
            {truncateText(umkm.basicInfo.shortDescription, 40)}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {umkm.productsAndServices.targetMarket.slice(0, 3).map((market, i) => (
              <span
                key={i}
                className="bg-accent/20 text-accent text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {market}
              </span>
            ))}
            {umkm.productsAndServices.targetMarket.length > 3 && (
              <span className="text-xs text-gray-400">+{umkm.productsAndServices.targetMarket.length - 3} lainnya</span>
            )}
          </div>

          <div className="flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{truncateText(umkm.basicInfo.fullAddress, 30)}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{umkm.operational.operatingHours}</span>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-primary/90 transition">
          Detail
        </button>
      </div>
    </div>
  )
}

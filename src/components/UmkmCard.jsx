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
    <div className="w-full max-w-sm h-auto rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:scale-105 transition-transform duration-200">
      <div
        className="h-48 bg-hero bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="p-6">
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

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
           {truncateText(umkm.basicInfo.shortDescription, 40)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {umkm.productsAndServices.targetMarket.map((market, i) => (
            <span
              key={i}
              className="bg-accent/20 text-accent text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {market}
            </span>
          ))}
        </div>

        <div className="flex flex-col item-center gap-2 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{umkm.basicInfo.fullAddress}</span>
          </div>

          <div className="flex items-center gap-2 mb-6 ">
            <Clock className="w-4 h-4" />
            <span>{umkm.operational.operatingHours}</span>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold text-sm">
          Detail
        </button>
      </div>
    </div>
  )
}
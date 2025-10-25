import { MapPin, Clock } from 'lucide-react'

const formatPrice = (min, max) => {
  return `Rp${(min / 1000).toFixed(0)}K - ${(max / 1000).toFixed(0)}K`
}

export const UmkmCard = ({ umkm }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url('/assets/hero.png')` }} // nanti tinggal di refer ke umkm.documentation.photo
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="p-6">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight flex-1">
            {umkm.basicInfo.businessName}
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
          {umkm.basicInfo.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="bg-gray-100 rounded-full px-3 py-1">
            <span className="text-gray-700 font-medium text-xs">test</span>
          </div>
          <div className="bg-gray-100 rounded-full px-3 py-1">
            <span className="text-gray-700 font-medium text-xs">Test</span>
          </div>
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

import { MapPin, Clock } from 'lucide-react'

const formatPrice = (min, max) => {
  return `Rp${(min / 1000).toFixed(0)}K - ${(max / 1000).toFixed(0)}K`
}

export const UmkmCard = ({ umkm }) => {
  return (
    <div
      className="bg- text-light p-4 rounded-xl hover:scale-105 transition-transform duration-200"
    >
      <h3 className="font-semibold text-lg mb-1">
        {umkm.basicInfo.businessName}
      </h3>
      <p className="text-sm opacity-80">{umkm.basicInfo.shortDescription}</p>
      <p className="mt-2 text-xs">{umkm.basicInfo.fullAddress}</p>
    </div>
  );
};

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

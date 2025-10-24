

export const UmkmCard = ({ umkm }) => {

  return (
    <div
      className="glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-200"
    >
      <h3 className="font-semibold text-lg mb-1">
        {umkm.basicInfo.businessName}
      </h3>
      <p className="text-sm opacity-80">{umkm.basicInfo.shortDescription}</p>
      <p className="mt-2 text-xs">{umkm.basicInfo.fullAddress}</p>
    </div>
  );
};



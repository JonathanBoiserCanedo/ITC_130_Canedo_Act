type Car = {
  vin: string;
  model: string;
  type: string;
  manufacturer: string;
  releasedate: string;
  image?: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64 mx-auto">
      <img
        src={car.image || "/placeholder-car.jpg"} // Provide fallback image
        alt={`${car.model} image`}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{car.model}</h2>
        <p className="text-sm text-gray-600">{car.manufacturer}</p>
        <p className="text-sm text-gray-500">{car.type}</p>
        <p className="text-sm text-gray-400">Released: {car.releasedate}</p>
      </div>
    </div>
  );
}

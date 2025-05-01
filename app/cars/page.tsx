"use client";

import { useEffect, useState } from "react";
import CarCard from "../components/car-card";

type Car = {
  vin: string;
  model: string;
  type: string;
  manufacturer: string;
  releasedate: string;
  image?: string; // Add this if your car has an image field
};

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        console.log("cars data:", data);
        setCars(data.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
    return () => {
      console.log("CarsPage unmounted");
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars?.map((car) => (
          <CarCard key={car.vin} car={car} />
        ))}
      </div>
    </div>
  );
}

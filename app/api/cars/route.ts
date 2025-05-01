export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      code: 200,
      data: [
        {
          vin: "MCL720S1",
          model: "720S",
          type: "Coupe",
          manufacturer: "McLaren",
          releasedate: "2023-04-15",
          image: "https://www.zastavki.com/pictures/originals/2014/Auto___McLaren_Reliable_car_McLaren_P1_2014__067430_.jpg",
        },
        {
          vin: "NISGTR35",
          model: "GT-R R35",
          type: "Sports",
          manufacturer: "Nissan",
          releasedate: "2022-12-01",
          image: "https://files.hodoor.world/main/9dcbdc06-eb29-4e4e-b625-07a39b8425a5.jpg",
        },
        {
          vin: "LAMBAV01",
          model: "Aventador",
          type: "Supercar",
          manufacturer: "Lamborghini",
          releasedate: "2023-03-10",
          image: "https://www.carscoops.com/wp-content/uploads/2022/10/Lamborghini-Aventador-SVJ-a.jpg",
        },
        {
          vin: "HENVENOM",
          model: "Venom F5",
          type: "Hypercar",
          manufacturer: "Hennessey",
          releasedate: "2023-06-05",
          image: "https://doubleapex.co.za/wp-content/uploads/2023/01/Hennessey-Venom-F5-Revolution-Coupe-01.jpeg",
        },
        {
          vin: "BUGCHIRON",
          model: "Chiron",
          type: "Hypercar",
          manufacturer: "Bugatti",
          releasedate: "2023-08-20",
          image: "https://www.thedrive.com/wp-content/uploads/2022/09/08/2022-Bugatti-Chiron-Super-Sport_BI_9-scaled.jpg?auto=webp&optimize=high&quality=70&width=1440",
        },
        {
          vin: "DODHELLC",
          model: "Challenger SRT Hellcat",
          type: "Muscle",
          manufacturer: "Dodge",
          releasedate: "2022-10-25",
          image: "https://cdn.dealeraccelerate.com/rkm/1/8086/542559/1920x1440/2021-dodge-challenger-srt-hellcat-redeye",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Diego Gamboa",
      price: 1000000,
      image: "http://localhost:3000/img/diego1.webp",
      description: "Esta es una lectura para personas que les gusta viajar... ",
    },
    {
      id: 1,
      title: "Articulo1",
      price: 1000000,
      image: "http://localhost:3000/img/diego2.webp",
      description: "Esta es una lectura para personas que les gusta viajar... ",
    },
    {
      id: 2,
      title: "Articulo2",
      price: 1000000,
      image: "http://localhost:3000/img/diego3.webp",
      description: "Esta es una lectura para personas que les gusta viajar... ",
    },
    {
      id: 3,
      title: "Articulo3",
      price: 1000000,
      image: "http://localhost:3000/img/diego4.webp",
      description: "Esta es una lectura para personas que les gusta viajar... ",
    },
    {
      id: 4,
      title: "Articulo4",
      price: 1000000,
      image: "http://localhost:3000/img/diego5.webp",
      description: "Esta es una lectura para personas que les gusta viajar... ",
    },
  ]);
}

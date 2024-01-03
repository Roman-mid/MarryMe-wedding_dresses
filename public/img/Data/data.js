
import {Anriel1, Anriel2, Anriel3, Kruz1, Kruz2, Kruz3, Kordelia1, Kordelia2, Kordelia3, // long
        Antiya1, Antiya2, Antiya3, Raviya1, Raviya2, Raviya3, Raviya4, Raviya5, Sens1, Sens2, Sens3, Sens4, // sand
        Ava1, Ava2, Ava3, Santana1, Santana2, Santana3, Molly1, Molly2, Molly3, // short
        Finella1, Finella2, Finella3, Severin1, Severin2, Severin3, Slein1, Slein2, Slein3 // strait
} from './importsImg';


  const data = [
    {
      "id": 0,
      "imgUrl": [Anriel1, Anriel2, Anriel3],
      "name": " Anriel",
      "type": " long",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 750,
      "category": 1,
      "rating": 6,
    },
    {
      "id": 1,
      "imgUrl": [Kruz1, Kruz2, Kruz3],
      "name": " Kruz",
      "type": " long",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 630,
      "category": 1,
      "rating": 2
    },
    {
      "id": 2,
      "imgUrl": [Kordelia1, Kordelia2, Kordelia3],
      "name": " Kordelia",
      "type": " long",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 720,
      "category": 1,
      "rating": 4
    },

    {
      "id": 3,
      "imgUrl": [Antiya1, Antiya2, Antiya3],
      "name": " Antiya",
      "type": " sand",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 540,
      "category": 2,
      "rating": 3
    },
    {
      "id": 4,
      "imgUrl": [Raviya4, Raviya2, Raviya1, /* Raviya3, Raviya5 */],
      "name": " Reviya",
      "type": " sand",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 480,
      "category": 2,
      "rating": 6
    }, 
    {
      "id": 5,
      "imgUrl": [Sens1, Sens2, Sens3, Sens4],
      "name": " Sens",
      "type": " sand",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 510,
      "category": 2,
      "rating": 5
    },

    {
      "id": 6,
      "imgUrl": [Ava1, Ava2, Ava3],
      "name": " Ava",
      "type": " short",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 535,
      "category": 3,
      "rating": 6
    },
    {
      "id": 7,
      "imgUrl": [Santana1, Santana2, Santana3],
      "name": " Santana",
      "type": " short",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 560,
      "category": 3,
      "rating": 7
    },
    {
      "id": 8,
      "imgUrl": [ Molly1, Molly2, Molly3],
      "name": " Molly",
      "type": " short",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 580,
      "category": 3,
      "rating": 6
    },

    {
      "id": 9,
      "imgUrl": [ Finella1, Finella2, Finella3],
      "name": " Finella",
      "type": " strait",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 630,
      "category": 4,
      "rating": 7
    },
    {
      "id": 10,
      "imgUrl": [Severin1, Severin2, Severin3],
      "name": " Severin",
      "type": " strait",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 615,
      "category": 4,
      "rating": 5
    },
    {
      "id": 11,
      "imgUrl": [Slein1, Slein2, Slein3],
      "name": " Slein",
      "type": " strait",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 675,
      "category": 4,
      "rating": 7
    },
    
  ];

  const dataNew = [
    {
     "id": 0,
     "imgUrl": [
      "img/long/Anriel/Anriel1.jpg",
      "img/long/Anriel/Anriel2.jpg",
      "img/long/Anriel/Anriel3.jpg"
     ],
     "name": "Anriel",
     "type": "long",
     "sizes": ["S", "M", "L", "XL"],
     "price": 750,
     "category": 1,
     "rating": 6,
     "description": "A long wedding gown exudes elegance and sophistication, featuring a flowing silhouette that gracefully drapes over the body. It often showcases intricate detailing, such as delicate lacework, embellishments, or ornate designs, offering a timeless and classic bridal look. The extended length of the gown adds an ethereal touch, creating a sense of grandeur and enchantment, making it a popular choice for formal and traditional weddings."
    },
    {
     "id": 1,
     "imgUrl": [
      "img/long/Kruz/Kruz1.jpg",
      "img/long/Kruz/Kruz2.jpg",
      "img/long/Kruz/Kruz3.jpg"
     ],
     "name": "Kruz",
     "type": "long",
     "sizes": ["S", "M", "L", "XL"],
     "price": 630,
     "category": 1,
     "rating": 2,
     "description": "A long wedding gown exudes elegance and sophistication, featuring a flowing silhouette that gracefully drapes over the body. It often showcases intricate detailing, such as delicate lacework, embellishments, or ornate designs, offering a timeless and classic bridal look. The extended length of the gown adds an ethereal touch, creating a sense of grandeur and enchantment, making it a popular choice for formal and traditional weddings."
    },
    {
     "id": 2,
     "imgUrl": [
      "img/long/Kordelia/Kordelia1.jpg",
      "img/long/Kordelia/Kordelia2.jpg",
      "img/long/Kordelia/Kordelia3.jpg"
     ],
     "name": "Kordelia",
     "type": "long",
     "sizes": ["S", "M", "L", "XL"],
     "price": 720,
     "category": 1,
     "rating": 4,
     "description": "A long wedding gown exudes elegance and sophistication, featuring a flowing silhouette that gracefully drapes over the body. It often showcases intricate detailing, such as delicate lacework, embellishments, or ornate designs, offering a timeless and classic bridal look. The extended length of the gown adds an ethereal touch, creating a sense of grandeur and enchantment, making it a popular choice for formal and traditional weddings."
    },
    {
     "id": 3,
     "imgUrl": [
      "img/sand/Antiya/Antiya1.jpg",
      "img/sand/Antiya/Antiya2.jpg",
      "img/sand/Antiya/Antiya3.jpg"
     ],
     "name": "Antiya",
     "type": "sand",
     "sizes": ["S", "M", "L", "XL"],
     "price": 540,
     "category": 2,
     "rating": 3,
     "description": "A beach wedding dress captures the essence of relaxed beauty, tailored for a seaside celebration. Typically lightweight and airy, it often incorporates flowing fabrics like chiffon or silk, allowing for easy movement and comfort in a beach environment. These dresses often feature simpler designs or bohemian elements, such as ethereal lace details, open backs, or subtle embellishments, evoking a carefree and romantic vibe perfect for a breezy, sun-kissed wedding by the shore."
    },
    {
     "id": 4,
     "imgUrl": [
      "img/sand/Reviya/Reviya4.jpg",
      "img/sand/Reviya/Reviya2.jpg",
      "img/sand/Reviya/Reviya1.jpg"
     ],
     "name": "Reviya",
     "type": "sand",
     "sizes": ["S", "M", "L", "XL"],
     "price": 480,
     "category": 2,
     "rating": 6,
     "description": "A beach wedding dress captures the essence of relaxed beauty, tailored for a seaside celebration. Typically lightweight and airy, it often incorporates flowing fabrics like chiffon or silk, allowing for easy movement and comfort in a beach environment. These dresses often feature simpler designs or bohemian elements, such as ethereal lace details, open backs, or subtle embellishments, evoking a carefree and romantic vibe perfect for a breezy, sun-kissed wedding by the shore."
    },
    {
     "id": 5,
     "imgUrl": [
      "img/sand/Sens/Sens1.jpg",
      "img/sand/Sens/Sens2.jpg",
      "img/sand/Sens/Sens4.jpg"
     ],
     "name": "Sens",
     "type": "sand",
     "sizes": ["S", "M", "L", "XL"],
     "price": 510,
     "category": 2,
     "rating": 5,
     "description": "A beach wedding dress captures the essence of relaxed beauty, tailored for a seaside celebration. Typically lightweight and airy, it often incorporates flowing fabrics like chiffon or silk, allowing for easy movement and comfort in a beach environment. These dresses often feature simpler designs or bohemian elements, such as ethereal lace details, open backs, or subtle embellishments, evoking a carefree and romantic vibe perfect for a breezy, sun-kissed wedding by the shore."
    },
    {
     "id": 6,
     "imgUrl": [
      "img/short/Ava/Ava1.jpg",
      "img/short/Ava/Ava2.jpg",
      "img/short/Ava/Ava3.jpg"
     ],
     "name": "Ava",
     "type": "short",
     "sizes": ["S", "M", "L", "XL"],
     "price": 535,
     "category": 3,
     "rating": 6,
     "description": "A short wedding dress radiates modern charm and sophistication. With its hemline typically above the knee or tea-length, it presents a chic and contemporary style for the bride seeking a non-traditional look. Often showcasing sleek lines, playful details, and unique silhouettes, these dresses offer versatility and comfort, making them perfect for intimate ceremonies, city weddings, or even as a stylish choice for a reception dress."
    },
    {
     "id": 7,
     "imgUrl": [
      "img/short/Santana/Santana1.jpg",
      "img/short/Santana/Santana2.jpg",
      "img/short/Santana/Santana3.jpg"
     ],
     "name": "Santana",
     "type": "short",
     "sizes": ["S", "M", "L", "XL"],
     "price": 560,
     "category": 3,
     "rating": 7,
     "description": "A short wedding dress radiates modern charm and sophistication. With its hemline typically above the knee or tea-length, it presents a chic and contemporary style for the bride seeking a non-traditional look. Often showcasing sleek lines, playful details, and unique silhouettes, these dresses offer versatility and comfort, making them perfect for intimate ceremonies, city weddings, or even as a stylish choice for a reception dress."
    },
    {
     "id": 8,
     "imgUrl": [
      "img/short/Molly/Molly1.jpg",
      "img/short/Molly/Molly2.jpg",
      "img/short/Molly/Molly3.jpg"
     ],
     "name": "Molly",
     "type": "short",
     "sizes": ["S", "M", "L", "XL"],
     "price": 580,
     "category": 3,
     "rating": 6,
     "description": "A short wedding dress radiates modern charm and sophistication. With its hemline typically above the knee or tea-length, it presents a chic and contemporary style for the bride seeking a non-traditional look. Often showcasing sleek lines, playful details, and unique silhouettes, these dresses offer versatility and comfort, making them perfect for intimate ceremonies, city weddings, or even as a stylish choice for a reception dress."
    },
    {
     "id": 9,
     "imgUrl": [
      "img/strait/Finella/Finella1.jpg",
      "img/strait/Finella/Finella2.jpg",
      "img/strait/Finella/Finella3.jpg"
     ],
     "name": "Finella",
     "type": "strait",
     "sizes": ["S", "M", "L", "XL"],
     "price": 630,
     "category": 4,
     "rating": 7,
     "description": "A straight wedding dress embodies simplicity and understated elegance. Characterized by its straight and narrow silhouette that follows the natural curves of the body, this style offers a sleek and modern look. Often made from luxurious fabrics like satin or silk, straight wedding dresses are ideal for brides seeking a sophisticated and timeless aesthetic. With minimal embellishments and clean lines, these dresses exude a refined simplicity, making them a versatile choice for various wedding settings, from casual to formal ceremonies."
    },
    {
     "id": 10,
     "imgUrl": [
      "img/strait/Severin/Severin1.jpg",
      "img/strait/Severin/Severin2.jpg",
      "img/strait/Severin/Severin3.jpg"
     ],
     "name": "Severin",
     "type": "strait",
     "sizes": ["S", "M", "L", "XL"],
     "price": 615,
     "category": 4,
     "rating": 5,
     "description": "A straight wedding dress embodies simplicity and understated elegance. Characterized by its straight and narrow silhouette that follows the natural curves of the body, this style offers a sleek and modern look. Often made from luxurious fabrics like satin or silk, straight wedding dresses are ideal for brides seeking a sophisticated and timeless aesthetic. With minimal embellishments and clean lines, these dresses exude a refined simplicity, making them a versatile choice for various wedding settings, from casual to formal ceremonies."
    },
    {
     "id": 11,
     "imgUrl": [
      "img/strait/Slein/Slein1.jpg",
      "img/strait/Slein/Slein2.jpg",
      "img/strait/Slein/Slein3.jpg"
     ],
     "name": "Slein",
     "type": "strait",
     "sizes": ["S", "M", "L", "XL"],
     "price": 675,
     "category": 4,
     "rating": 8,
     "description": "A straight wedding dress embodies simplicity and understated elegance. Characterized by its straight and narrow silhouette that follows the natural curves of the body, this style offers a sleek and modern look. Often made from luxurious fabrics like satin or silk, straight wedding dresses are ideal for brides seeking a sophisticated and timeless aesthetic. With minimal embellishments and clean lines, these dresses exude a refined simplicity, making them a versatile choice for various wedding settings, from casual to formal ceremonies."
    }
   ]

  const json = JSON.stringify(dataNew);

  console.log(json)

  export default data;
  

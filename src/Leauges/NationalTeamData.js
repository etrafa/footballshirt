const nationalTeamData = [
  {
    id: 1,
    text: "Mexico Home Football Shirt 2021",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20211013102753.png",
    route: "/mexico-tshirt-21/22-home",
  },
  {
    id: 2,
    text: "Brazil Home Football Shirt 2021",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/b/r/brazil-home-football-shirt-2021.jpg",
    route: "/brazil-tshirt-21/22-home",
  },
  {
    id: 3,
    text: "Brazil Away Football Shirt 2021",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/b/r/brazil-away-football-shirt-2021.jpg",
    route: "/brazil-tshirt-21/22-away",
  },
  {
    id: 4,
    text: "Colombia Home Football Shirt 2021",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20211013100036.png",
    route: "/colombia-tshirt-21/22-home",
  },
  {
    id: 5,
    text: "Argentina Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20211013095011.png",
    route: "/argentina-tshirt-21/22-away",
  },
  {
    id: 6,
    text: "Argentina Home Football Shirt 2021",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/a/r/argentina-home-football-shirt-2021.jpg",
    route: "/argentina-tshirt-21/22-home",
  },
  {
    id: 7,
    text: "Germany Home Toni Kroos Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-134535.png",
    route: "/germany-toni-kross-tshirt-20/21-home",
  },
  {
    id: 8,
    text: "Germany Away Toni Kroos Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-134302.png",
    route: "/germany-toni-kross-tshirt-20/21-away",
  },
  {
    id: 9,
    text: "Portugal Home Ronaldo Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-133825.png",
    route: "/portugal-ronaldo-tshirt-20/21-home",
  },
  {
    id: 10,
    text: "Portugal Away Ronaldo Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-133537.png",
    route: "/portugal-ronaldo-tshirt-20/21-away",
  },
  {
    id: 11,
    text: "Netherland Home Depay Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-132814.png",
    route: "/netherland-depay-tshirt-20/21-home",
  },
  {
    id: 12,
    text: "Netherland Away Depay Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-132617.png",
    route: "/netherland-depay-tshirt-20/21-away",
  },
  {
    id: 13,
    text: "Netherland Home de Jong Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-132403.png",
    route: "/netherland-deJong-tshirt-20/21-home",
  },
  {
    id: 14,
    text: "Netherland Away de Jong Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-132138.png",
    route: "/netherland-deJong-tshirt-20/21-away",
  },
  {
    id: 15,
    text: "France Home Mbappé Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-125847.png",
    route: "/france-mbappe-tshirt-20/21-home",
  },
  {
    id: 16,
    text: "France Away Mbappé Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-125653.png",
    route: "/france-mbappe-tshirt-20/21-away",
  },
  {
    id: 17,
    text: "France Home Griezmann Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-125421.png",
    route: "/france-griezmann-tshirt-20/21-home",
  },
  {
    id: 18,
    text: "France Away Griezmann Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-125155.png",
    route: "/france-griezmann-tshirt-20/21-away",
  },
  {
    id: 19,
    text: "France Home Pogba Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-124812.png",
    route: "/france-pogba-tshirt-20/21-home",
  },
  {
    id: 20,
    text: "Croatia Home Modric Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-124030.png",
    route: "/croatia-modric-tshirt-20/21-home",
  },
  {
    id: 21,
    text: "Belgium Home De Bruyne Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-123648.png",
    route: "/belgium-debruyne-tshirt-20/21-home",
  },
  {
    id: 22,
    text: "Belgium Away De Bruyne Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-123429.png",
    route: "/belgium-debruyne-tshirt-20/21-away",
  },
  {
    id: 23,
    text: "England Home Harry Kane Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-114627.png",
    route: "/england-harry-kane-tshirt-20/21-home",
  },
  {
    id: 24,
    text: "England Away Harry Kane Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210622-114335.png",
    route: "/england-harry-kane-tshirt-20/21-away",
  },
  {
    id: 25,
    text: "Italy Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-213414.png",
    route: "/italy-tshirt-20/21-home",
  },
  {
    id: 26,
    text: "Italy Away Football Shirt 21/22",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-213219.png",
    route: "/italy-tshirt-21/22-away",
  },
  {
    id: 27,
    text: "Sweden Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-212748.png",
    route: "/sweden-tshirt-20/21-home",
  },
  {
    id: 28,
    text: "Sweden Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-212359.png",
    route: "/sweden-tshirt-20/21-away",
  },
  {
    id: 29,
    text: "Poland Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-211858.png",
    route: "/poland-tshirt-20/21-home",
  },
  {
    id: 30,
    text: "Portugal Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-211331.png",
    route: "/portugal-tshirt-20/21-home",
  },
  {
    id: 31,
    text: "Portugal Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-210804.png",
    route: "/portugal-tshirt-20/21-away",
  },
  {
    id: 32,
    text: "Germany Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-205818.png",
    route: "/germany-tshirt-20/21-home",
  },
  {
    id: 33,
    text: "Germany Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-205214.png",
    route: "/germany-tshirt-20/21-away",
  },
  {
    id: 34,
    text: "Netherland Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-135721.png",
    route: "/netherland-tshirt-20/21-home",
  },
  {
    id: 35,
    text: "Netherland Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-135520.png",
    route: "/netherland-tshirt-20/21-away",
  },
  {
    id: 36,
    text: "Spain Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-132823.png",
    route: "/spain-tshirt-20/21-home",
  },
  {
    id: 37,
    text: "Spain Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-130913.png",
    route: "/spain-tshirt-20/21-away",
  },
  {
    id: 38,
    text: "France Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-125636.png",
    route: "/france-tshirt-20/21-home",
  },
  {
    id: 39,
    text: "France Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-123300.png",
    route: "/france-tshirt-20/21-away",
  },
  {
    id: 40,
    text: "Croatia Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-122701.png",
    route: "/croatia-tshirt-20/21-home",
  },
  {
    id: 41,
    text: "Croatia Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-122148.png",
    route: "/croatia-tshirt-20/21-away",
  },
  {
    id: 42,
    text: "Belgium Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-121337.png",
    route: "/belgium-tshirt-20/21-home",
  },
  {
    id: 43,
    text: "Belgium Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-121433.png",
    route: "/belgium-tshirt-20/21-away",
  },
  {
    id: 44,
    text: "England Home Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-120405.png",
    route: "/england-tshirt-20/21-home",
  },
  {
    id: 45,
    text: "England Away Football Shirt 20/21",
    image:
      "https://www.hnfootball.ru/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/2/0/20210617-115251.png",
    route: "/england-tshirt-20/21-away",
  },
];

export default nationalTeamData;

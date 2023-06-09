import React from "react";
import CardBlog from "../CardBlog/CardBlog";

const cartoons = [
  {
    series: "Scooby doo",
    descr:
      "В мультсериале рассказывается о четырёх подростках — Фреде Джонсе, Дафне Блейк, Велме Динкли, Норвилле «Шэгги» Роджерсе и говорящем Датском доге по имени Скуби, которые решают загадки с участием якобы сверхъестественных существ. англ. Scooby-Doo!",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/96ab94b5-e9d9-4450-8ef0-b0928f2104a0/300x450",
    id: 1,
  },

  {
    series: "Attack on Titan",
    descr:
      "«Атака титанов» — это мрачная и убедительная история об ужасах войны. Голова Колоссального титана рождает ассоциацию с ядерным грибом. Попытка беженцев из Шиганшины отбить город действительно напоминает самоубийственный Крестьянский крестовый поход (1096 год), с которого и начинается история Крестовых походов.",
    image:
      "https://pm1.narvii.com/6535/c99d749d286219439e150527042d122ff896b868_hq.jpg",
    id: 1,
  },
  {
    series: "Princess mononoke",
    descr:
      "Юный принц Ашитака, убив вепря, навлек на себя смертельное проклятие. Старая знахарка предсказала ему, что только он сам способен изменить свою судьбу. И отважный воин отправился в опасное путешествие. Так он оказался в загадочной стране, где люди под предводительством злой госпожи Эбоши воевали с обитателями леса: духами, демонами и гигантскими существами, каких Ашитака раньше никогда не видел.",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4a1c6df7-96f7-4d39-957c-3fa968ab6ed2/600x900",
    id: 1,
  },
];

const Home = () => {
  return (
    <div className="d-flex">
      {cartoons.map((item) => (
        <CardBlog key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;

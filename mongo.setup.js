db.createUser({
  user: process.env.MONGO_APP_USERNAME,
  pwd: process.env.MONGO_APP_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});

db.movies.insertMany([
  {
    id: 1291143,
    backdrop_path: "/yjf0RWXeZ0FyStOD5e0i0KlnBVE.jpg",
    poster_path: "/vhBQOgig0bXCXIgHHyO8ipG47J9.jpg",
    release_date: "2024-06-04",
    original_title: "How to Rob a Bank",
    overview:
      "In this true-crime documentary, a charismatic rebel in 1990s Seattle pulls off an unprecedented string of bank robberies straight out of the movies.",
    trending_time: ["day"],
  },
  {
    id: 1175156,
    backdrop_path: "/4So4aDgPRkspivwd0WEZu9x1GVH.jpg",
    poster_path: "/w4wRjLvRhQ3RZtY2YPYs1IrJbX1.jpg",
    release_date: "2024-06-04",
    original_title: "Ricchi a tutti i costi",
    overview:
      "When a grandmother falls for a cheeky suitor with dubious intentions, her family devises a secret plan to protect her life — and their inheritance.",
    trending_time: ["day"],
  },
  {
    id: 912649,
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    release_date: "2024-10-23",
    original_title: "Venom: The Last Dance",
    overview:
      "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    trending_time: ["day"],
  },
  {
    id: 1086747,
    backdrop_path: "/oZDRuGHhe5uY8wBqFJcJZT9kdvJ.jpg",
    poster_path: "/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
    release_date: "2024-06-06",
    original_title: "The Watchers",
    overview:
      "When 28-year-old artist Mina finds shelter after getting stranded in an expansive, untouched forest in western Ireland, she unknowingly becomes trapped alongside three strangers that are watched and stalked by mysterious creatures each night.",
    trending_time: ["day"],
  },
  {
    id: 882059,
    backdrop_path: "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
    poster_path: "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
    release_date: "2024-04-24",
    original_title: "Boy Kills World",
    overview:
      "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
    trending_time: ["week"],
  },
  {
    id: 1111873,
    backdrop_path: "/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg",
    poster_path: "/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg",
    release_date: "2024-04-18",
    original_title: "Abigail",
    overview:
      "A group of criminals kidnaps a teenage ballet dancer, the daughter of a notorious gang leader, in order to obtain a ransom of $50 million, but over time, they discover that she is not just an ordinary girl. After the kidnappers begin to diminish, one by one, they discover, to their increasing horror, that they are locked inside with an unusual girl.",
    trending_time: ["week"],
  },
  {
    id: 7451,
    backdrop_path: "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
    poster_path: "/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
    release_date: "2002-08-09",
    original_title: "xXx",
    overview:
      'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
    trending_time: ["week"],
  },
  {
    id: 967847,
    backdrop_path: "/wODqakS0jinTUECNS6n4VomQbew.jpg",
    poster_path: "/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
    release_date: "2024-03-20",
    original_title: "Ghostbusters: Frozen Empire",
    overview:
      "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
    trending_time: ["week"],
  },
  {
    id: 76341,
    backdrop_path: "/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    poster_path: "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    release_date: "2015-05-13",
    original_title: "Mad Max: Fury Road",
    overview:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    trending_time: ["week"],
  },
  {
    id: 1001311,
    backdrop_path: "/xQkotnzv12fm9FF29if1cBLsyU3.jpg",
    poster_path: "/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg",
    release_date: "2024-06-05",
    original_title: "Sous la Seine",
    overview:
      "In the Summer of 2024, Paris is hosting the World Triathlon Championships on the Seine for the first time. Sophia, a brilliant scientist, learns from Mika, a young environmental activist, that a large shark is swimming deep in the river. To avoid a bloodbath at the heart of the city, they have no choice but to join forces with Adil, the Seine river police commander.",
    trending_time: ["day", "week"],
  },
  {
    id: 573435,
    backdrop_path: "/2JmEZtZsGVYvcUeMWze9qb1Ui03.jpg",
    poster_path: "/s63kP4H67DQItzHGP4CzSKfdGgW.jpg",
    release_date: "2024-06-05",
    original_title: "Bad Boys: Ride or Die",
    overview:
      "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    trending_time: ["day", "week"],
  },
  {
    id: 940721,
    backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "2023-11-03",
    original_title: "ゴジラ-1.0",
    overview:
      "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    trending_time: ["day", "week"],
  },
  {
    id: 786892,
    backdrop_path: "/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
    poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    release_date: "2024-05-22",
    original_title: "Furiosa: A Mad Max Saga",
    overview:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    trending_time: ["day", "week"],
  },
  {
    id: 746036,
    backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
    poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
    release_date: "2024-04-24",
    original_title: "The Fall Guy",
    overview:
      "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    trending_time: ["day", "week"],
  },
  {
    id: 929590,
    backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
    poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    release_date: "2024-04-10",
    original_title: "Civil War",
    overview:
      "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    trending_time: ["day", "week"],
  },
  {
    id: 1022789,
    backdrop_path: "/qjoX7hl721FOiyeHsDkeQ6rFVLl.jpg",
    poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-12",
    original_title: "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    trending_time: ["day", "week"],
  },
  {
    id: 437342,
    backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
    poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
    release_date: "2024-04-03",
    original_title: "The First Omen",
    overview:
      "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
    trending_time: ["day", "week"],
  },
  {
    id: 614933,
    backdrop_path: "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
    poster_path: "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
    release_date: "2024-05-23",
    original_title: "Atlas",
    overview:
      "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
    trending_time: ["day", "week"],
  },
  {
    id: 823464,
    backdrop_path: "/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
    poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    release_date: "2024-03-27",
    original_title: "Godzilla x Kong: The New Empire",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    trending_time: ["day", "week"],
  },
  {
    id: 998846,
    backdrop_path: "/a1m4DAmySexNaaGnjEVA2MKNUCo.jpg",
    poster_path: "/xHQEeUT3Ac4fTY72UeNrI75xLtE.jpg",
    release_date: "2024-04-11",
    original_title: "Back to Black",
    overview:
      "The extraordinary story of Amy Winehouse’s early rise to fame from her early days in Camden through the making of her groundbreaking album, Back to Black that catapulted Winehouse to global fame. Told through Amy’s eyes and inspired by her deeply personal lyrics, the film explores and embraces the many layers of the iconic artist and the tumultuous love story at the center of one of the most legendary albums of all time.",
    trending_time: ["day", "week"],
  },
  {
    id: 719221,
    backdrop_path: "/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg",
    poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
    release_date: "2024-05-01",
    original_title: "Tarot",
    overview:
      "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
    trending_time: ["day", "week"],
  },
  {
    id: 653346,
    backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
    poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    release_date: "2024-05-08",
    original_title: "Kingdom of the Planet of the Apes",
    overview:
      "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    trending_time: ["day", "week"],
  },
  {
    id: 937287,
    backdrop_path: "/504GSaoxBA5nLlcMsJfjzLZEKUp.jpg",
    poster_path: "/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
    release_date: "2024-04-18",
    original_title: "Challengers",
    overview:
      'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
    trending_time: ["day", "week"],
  },
  {
    id: 693134,
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    poster_path: "/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
    release_date: "2024-02-27",
    original_title: "Dune: Part Two",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    trending_time: ["day", "week"],
  },
]);

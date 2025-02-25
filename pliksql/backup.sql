/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;     
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `imgUrl` varchar(200) DEFAULT NULL,
  `rating` decimal(3,1) NOT NULL DEFAULT '0.0',
  `description` text NOT NULL,
  `tags` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,88,'Dragon Ball Xenoverse 2',35.66,'/imgs/xeno2.jpg',7.0,'Fabuła kontynuuje fabułę z pierwszego Xenoversa. Po wydarzeniach z jedynki bohater tamtej gry zostaje uznany za wielkiego bohatera, jednak nadal kontynuuje swoją misje ochrony czasu, jednak w tej grze przyjdzie nam grać nową postacią, która dopiero jest na początku swojej działalności jako strażnik czasu.','Bijatyka, RPG, Przygodowa'),(2,50,'Call Of Duty: Black Ops',35.99,'/imgs/bo.jpg',8.5,'Opracowana przez Treyarch gra z bestsellerowej serii strzelanek FPS. Spektakularne segmenty scenografii, interesująca narracja i imponujące efekty wizualne są integralnymi częściami doświadczenia i zabawy w Black Ops.','Akcja, Horror, Strzelanka'),(3,90,'Dark Souls 3',66.85,'/imgs/ds3.jpg',8.0,'Cała seria Dark Souls została stworzona przez japońskie studio FromSoftware Inc. Gra przenosi gracza do mrocznego świata Lothric. Do wyboru jest 12 klas postaci (m.in. Rycerz, Najemnik, Kapłan, Wojownik), z których każda ma nieco inne atrybuty i wyposażenie.','RPG, Przygodowa, Fantastyka'),(4,106,'Elden Ring',249.99,'/imgs/elden.jpg',8.5,'Gra RPG z gatunku dark fantasy, opracowana przez FromSoftware. Jest to pełna wyzwań przygoda stworzona przez twórców Demon Souls we współpracy z autorem serii książek Pieśń Lodu i Ognia - R.R. Martinem. Odkryj sekrety Ziem Pomiędzy i rozpocznij heroiczną misję, aby odkryć swoje przeznaczenie','RPG, Przygodowa, Fantastyka'),(5,67,'Fifa 21',84.00,'/imgs/fifa21.jpg',6.5,'Gra sportowa o piłce nożnej opracowana przez EA Vancouver i wydana przez EA Sports. Gra jest kolejną odsłoną klasycznej serii o piłce nożnej, której historia sięga końca lat dziewięćdziesiątych ubiegłego wieku. W FIFA21 gracz ponownie będzie grał jako ulubiona drużyna, uczestnicząc w meczach z innymi graczami w trybie online dla wielu graczy lub przeciwko komputerowi offline.','Sportowa'),(6,94,'God Of War',80.00,'/imgs/gow.jpg',9.0,'Gra akcji z elementami RPG, opracowana przez Santa Monica Studio. W nowej odsłonie gry, Kratos po zakończeniu swojej brutalnej misji w Grecji, udaje się na daleką Północ, aby ponownie stawić czoła mitologicznym bestiom i potężnym bogom. Tym razem jednak nie będzie podróżował sam.','RPG, Przygodowa, Fantastyka, Akcja'),(7,73,'God Of War Ragnarok',249.99,'/imgs/gowr.jpg',9.5,'Gra akcji, której premiera miała miejsce w roku 2022. Stworzony przez Santa Monica Studio God of War Ragnarök jest drugą częścią sagi rozpoczętej przez God of War (2018). Przedstawia dalsze losy Kratosa oraz jego syna, Atreusa, którzy muszą stawić czoła Ragnarökowi, końcu wszystkiego przepowiedzianemu przez nordycką mitologię.','RPG, Przygodowa, Fantastyka, Akcja'),(8,48,'Call Of Duty Modern Warfare 2',77.00,'/imgs/mw2.jpg',8.5,'Najbardziej oczekiwana gra roku i kontynuacja największego bestsellera FPS wszech czasów, Modern Warfare 2 obejmuje kolejne trzymające w napięciu misje. Oto nowe zagrożenie sprowadza świat na krawędź zagłady.','Akcja, Strzelanka'),(9,88,'Call Of Duty Modern Warfare 3',84.55,'/imgs/mw3.jpg',8.0,'Call of Duty: Modern Warfare 3 to strzelanka FPS, wydana przez Activision i opracowana przez Infinity Ward, Sledgehammer Games i Raven Software. Gra jest trzecią odsłoną serii Modern Warfare, a także bezpośrednią kontynuacją historii przedstawionej w Call of Duty: Modern Warfare 2 z 2009 roku.','Akcja, Strzelanka'),(10,156,'Red Dead Redemption 2',119.99,'/imgs/rdr2.jpg',10.0,'Przygodowa gra akcji wydana na Xbox One i PlayStation 4 w 2018, a od 2019 roku jest również dostępna na PC. Gra jest prequelem Red Dead Redemption wydanym w 2010 roku i koncentruje się na życiu wyjętego spod prawa Arthura Morgana. Wejdź do gry i przeżyj przygodę w naprawdę ogromnym świecie ze zdumiewającą ilością działań, interakcji, piękną grafiką i nie tylko.','Akcja, Strzelanka, Przygodowa'),(11,204,'Dragon Ball Sparking Zero',339.00,'/imgs/spar.jpg',8.5,'Bijatyka w stylu anime, a zarazem nowa część serii Dragon Ball Z: Budokai Tenkaichi. Została stworzona przez Spike Chunsoft Co., Ltd. i wydaje ją Bandai Namco Entertainment. Gra miała premierę 11 października 2024. Podążając śladem sukcesów Dragon Ball Z: Budokai Tenkaichi 1, 2 oraz 3, najnowsza część serii pozwala graczom na wzięcie udziału w intensywnych, pełnych adrenaliny walkach na trójwymiarowych arenach.','Akcja, Bijatyka'),(12,110,'The Witcher 3: Wild Hunt',56.00,'/imgs/w3.jpg',10.0,'Fabularną gra akcji z otwartym światem. Gracz steruje postacią Geralta z Rivii z perspektywy trzeciej osoby. W niektórych fragmentach gry gracz wciela się w postać Ciri. Poza poruszaniem się po lądzie można także pływać zarówno na jak i pod powierzchnią wody.','Fantastyka, RPG, Akcja, Przygodowa'),(13,36,'Hogwarts Legacy',80.00,'/imgs/hog.jpg',7.5,'Wciągająca gra RPG akcji z otwartym światem, której akcja toczy się w świecie z serii o Harrym Potterze. Wyrusz w podróż przez znane i nowe lokalizacje, odkrywając fantastyczne bestie, dostosowując swoją postać i wytwarzając mikstury.','Fantastyka, RPG, Akcja, Przygodowa'),(14,27,'Dragon Ball Z: Kakarot',63.63,'/imgs/kakarot.jpg',8.5,'Gra akcji RPG opracowana przez CyberConnect2 i wydana w styczniu 2020 roku przez Bandai Namco Entertainment. Gra koncentruje się na przygodach Son Goku, czyli Kakarota, i pozwala graczom podążać jego ścieżką w kultowym uniwersum Dragon Ball Z podzielonym na kilka sag znanych z oryginalnej mangi. Głównym celem deweloperów było odtworzenie wszechświata jak najbardziej zbliżonego do twórczości Akiry Toriyamy.','RPG, Akcja, Przygodowa'),(16,140,'Crash Bandicoot 4',134.44,'/imgs/crash.jpg',8.5,'Platformówka 3D studia Toys for Bob stanowiąca kontynuację Crash Bandicoot 3: Warped z 2007 roku. Podczas zabawy w Crash Bandicoot 4: Its About Time gracze eksplorują kolorowe światy, przeskakują przeszkody, unikają pułapek i radzą sobie z wrogami.','Platformowa, Akcja, Przygodowa'),(25,66,'Ghost of Tsushima',339.00,'/imgs/ghost.jpg',9.0,'Osadzona w feudalnej Japonii gra akcji z otwartym światem. Jej głównym bohaterem jest Jin Sakai, samuraj, który ryzykuje wszystko, żeby obronić wyspę Cuszima przed inwazją Mongołów.','Akcja, Przygodowa');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','haslo','admin'),(2,'user','haslo','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
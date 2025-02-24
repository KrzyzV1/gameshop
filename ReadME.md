# Game Shop

Aplikacja umożliwiająca zarządzanie sklepem gier wideo, w tym zarządzanie koszykiem oraz dodawanie, edytowanie i usuwanie gier. Dostęp do poszczególnych funkcjonalności zależy od ról użytkowników (użytkownik lub administrator).

## Funkcjonalności

### 1. Logowanie

Aplikacja obsługuje dwie role użytkowników:

- **Użytkownik (user)**: Może zarządzać koszykiem, dodając i usuwając gry oraz przechodząc do płatności.
- **Administrator (admin)**: Może zarządzać grami, tj. dodawać, edytować oraz usuwać gry.

### 2. Koszyk

Jako **użytkownik** można:

- Dodawać gry do koszyka.
- Usuwać gry z koszyka.
- Opróżniać koszyk.
- Przejść do płatności, aby zakończyć zakupy.

### 3. Płatności

Po zalogowaniu jako użytkownik i dodaniu gier do koszyka, możesz przejść do okna płatności, gdzie możesz zakończyć zakupy.

### 4. Zarządzanie grami (Administrator)

Jako **administrator** można uzyskać dostęp do opcji:

- **Dodawania gier** do sklepu.
- **Edytowania danych gier** (zmiana nazwy, ceny, ilości oraz adresu URL obrazu).
- **Usuwania gier** ze sklepu.

### 5. Filtrowanie i wyszukiwanie

- Możliwość filtrowania gier według tagów (można wybrać parę tagów jednocześnie).
- Wyszukiwanie gier po nazwie
- Po kliknięciu na tytuł lub na miniaturę gry pokazuję się strona, ze szczegółowymi informacjami o produkcie

## Instalacja

Aby uruchomić aplikację lokalnie, wykonaj poniższe kroki:

### 1. Konfiguracja Bazy Danych

- Należy zainstalować docker oraz narzędzie do zarzadzania bazą danych ( w przypadku tego projektu był to MySQL Workbench)
- Z dockerhub pobrać obraz mysql(terminal gameshop): docker pull mysql
- Aktywacja kontenera: docker run --name gameshop-mysql -e MYSQL_ROOT_PASSWORD=ezio -d -p 3306:3306 mysql

- Należy dodać nowe połączenie w MySQL Workbench
- Hasło do bazy: ezio
- Dodać schema i wykonać w niej komendy zawarte w pliku .mysql w folderze gameshop.

### 2. Instalacja Backend (Spring Boot)

- Wymagana jest instalacja maven i dodanie go do PATH
- Otworzyć terminal główny gameshop
- Zainstalować Maven w swoim projekcie używając komendy: mvn clean install
- Uruchomić aplikację Spring Boot przy użyciu: mvn spring-boot:run
- Aplikacja backendowa będzie działać na porcie 8080
- Może być też wymagana instalacja wtyczki lombok z oficjalnej strony project lombok

### 3. Instalacja Frontend (React/TypeScript)

- Należy zainstalowac Node.js
- Uruchomić terminal gameshop/frontend
- Zainstalować potrzebne narzędzia node.js przy użyciu: npm install
- Uruchomić frontend wpisując: npm run dev
- Aplikacja frontendowa będzie dostępna pod adresem http://localhost:3000.

## Endpointy

### 1. Endpointy dla użytkowników

- POST /auth/login: Logowanie użytkownika.

- Przyjmuje dane logowania: { username, password }
- Zwraca token JWT oraz rolę użytkownika.

- GET /games: Pobieranie wszystkich gier ze sklepu.

- POST /cart: Dodawanie gry do koszyka.

- DELETE /cart/{gameId}: Usuwanie gry z koszyka.

- POST /cart/clear: Opróżnianie koszyka.

- POST /checkout: Finalizacja zamówienia i przejście do płatności.

### 2. Endpointy dla administratorów

- POST /games: Dodawanie nowej gry.

- PUT /games/{id}: Edytowanie gry.

- DELETE /games/{id}: Usuwanie gry.

## Technologie

- Backend: Spring Boot, Spring Data JPA, Java
- Frontend: React, TypeScript, Axios
- Autoryzacja: JWT (JSON Web Token)
- Baza danych: MySQL

## Dane logowania do aplikacji:

### 1. Administrator:

- Nazwa użytkownika: admin
- Hasło: haslo

### 2. Użytkownik:

- Nazwa użytkownika: user
- Hasło: haslo

## Autor

- Damian Pasek

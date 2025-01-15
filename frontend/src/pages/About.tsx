import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">O nas</h1>
      <Row className="align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <img
            src="/imgs/gameshop.jpg"
            alt="Gameshop"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>Witaj w Gameshop!</h2>
          <p className="text-justify">
            Gameshop to aplikacja internetowa stworzona dla miłośników gier komputerowych.
            Naszym celem jest zapewnienie szerokiego wyboru gier w atrakcyjnych cenach
            oraz stworzenie miejsca, w którym każdy gracz znajdzie coś dla siebie.
          </p>
          <p className="text-justify">
            Dzięki prostemu i intuicyjnemu interfejsowi możesz szybko przeglądać,
            dodawać do koszyka i kupować gry. Oferujemy zarówno
            najnowsze hity, jak i klasyki, które zapisały się na kartach historii.
          </p>
          <h4>Dlaczego warto wybrać Gameshop?</h4>
          <ul className="text-justify">
            <li>Szeroki wybór gier na każdą platformę.</li>
            <li>Atrakcyjne ceny i częste promocje.</li>
            <li>Bezpieczne płatności i szybka realizacja zamówień.</li>
            <li>Wsparcie klienta zawsze gotowe, by pomóc.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col>
          <h5>Dołącz do naszej społeczności już dziś!</h5>
        </Col>
      </Row>
    </Container>
  );
}

import { useAuth } from "../context/AuthContext";

export function StatusLogowania() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <span className="me-3">
      {isLoggedIn ? `Zalogowany jako: ${userRole || "Brak roli"}` : "Nie jesteś zalogowany"}
    </span>
  );
}

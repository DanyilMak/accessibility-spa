import useDocumentTitle from "../hooks/useDocumentTitle";
import useFocusHeading from "../hooks/useFocusHeading";

export default function Login() {
  useDocumentTitle("Логін");

  const headingRef = useFocusHeading();

  return (
    <main>
      <h1 ref={headingRef} tabIndex="-1">
        Вхід
      </h1>

      <form>
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          type="email"
        />

        <label htmlFor="password">
          Пароль
        </label>

        <input
          id="password"
          type="password"
        />

        <button type="submit">
          Увійти
        </button>
      </form>
    </main>
  );
}
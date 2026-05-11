import useDocumentTitle from "../hooks/useDocumentTitle";
import useFocusHeading from "../hooks/useFocusHeading";

export default function Home() {
  useDocumentTitle("Головна сторінка");

  const headingRef = useFocusHeading();

  return (
    <main>
      <h1 ref={headingRef} tabIndex="-1">
        Головна сторінка
      </h1>

      <p>
        Це демонстрація доступного SPA-застосунку.
      </p>
    </main>
  );
}
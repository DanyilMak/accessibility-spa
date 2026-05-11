import useDocumentTitle from "../hooks/useDocumentTitle";
import useFocusHeading from "../hooks/useFocusHeading";

export default function About() {
  useDocumentTitle("Про нас");

  const headingRef = useFocusHeading();

  return (
    <main>
      <h1 ref={headingRef} tabIndex="-1">
        Про нас
      </h1>

      <p>
        Сторінка інформації про застосунок.
      </p>
    </main>
  );
}
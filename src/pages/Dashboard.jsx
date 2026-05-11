import { useEffect, useState } from "react";

import useDocumentTitle from "../hooks/useDocumentTitle";
import useFocusHeading from "../hooks/useFocusHeading";

import Loader from "../components/Loader";
import Toast from "../components/Toast";

export default function Dashboard() {
  useDocumentTitle("Dashboard");

  const headingRef = useFocusHeading();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setMessage("Дані успішно завантажено");
    }, 2000);
  }, []);

  return (
    <main>
      <h1 ref={headingRef} tabIndex="-1">
        Dashboard
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <p>Контент завантажено.</p>
      )}

      <Toast message={message} />
    </main>
  );
}
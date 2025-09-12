// ./components/Footer.js
import "./header.css";
export default function Footer() {
  return (
    <footer className="p-6 bg text-center">
      <p>Rosvic © {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

// ./components/Footer.js
import "./header.css";
export default function Footer() {
  return (
    <footer className="p-4 bg text-center">
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <AboutContent />

      <div className="mt-20">
        <AboutCards />
      </div>
    </section>
  );
}
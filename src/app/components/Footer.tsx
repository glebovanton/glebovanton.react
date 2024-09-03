export default function Footer() {
  const startYear = 2024;
  const copyrightYears = `${startYear}${new Date().getFullYear() <= startYear ? "" : -new Date().getFullYear()}`

  return (
      <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs"
        >&copy; Copyright: Anton Glebov. {copyrightYears}</small
        >
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with Vue 3
          &amp; Vuex, TypeScript, Tailwind CSS,
          Framer Motion, Github pages.
        </p>
      </footer>
  );
}

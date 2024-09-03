import { skillsData } from '@/app/data';

export default function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            key={`skills-${index}`}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            style={{ opacity: 1, transform: 'none' }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

import React from 'react';
import { experiencesData } from '@/app/data';
import '@/assets/styles/experienceStyles.scss';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My experience</h2>
      <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
        {experiencesData.map((experience, index) => (
          <div key={`experience-${index}`} className="vertical-timeline-element">
            <span
              style={{ background: 'rgba(255, 255, 255, 0.15)', fontSize: '1.5rem' }}
              className="vertical-timeline-element-icon bounce-in"
            >
              {React.createElement(experience.icon)}
            </span>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              className="vertical-timeline-element-content bounce-in"
            >
              <div
                style={{ borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)' }}
                className="vertical-timeline-element-content-arrow"
              />
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p
                className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
              <span className="vertical-timeline-element-date">{experience.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

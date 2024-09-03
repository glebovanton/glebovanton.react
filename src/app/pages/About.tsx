import React from 'react';
import { aboutImagesData } from '@/app/data';
import '@/assets/styles/about.css';

const About = () => {
    return (
        <>
            <section
                className="max-w-[45rem] text-center leading-8 scroll-mt-28"
                style={{ opacity: 1, transform: 'none' }}
            >
                <h2 className="text-3xl font-medium capitalize mb-8 text-center">
                    About me
                </h2>
                <p className="mb-3">
                    My friends taught me to play the guitar when I was 11. Later I played the
                    African djembe. Since then I like to play it whether alone or not. In my
                    free time, I am fond of recording and DJing. Together with my wife, we
                    often go running and cycling. We love to travel. And of course, I can't
                    but mention the time I spend on self-education.
                </p>
            </section>
            <section className="mb-28 sm:mb-40">
                <div className="container mx-auto px-5 lg:px-32 lg:pt-4">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        {aboutImagesData.map((chunk, index) => (
                            <div
                                key={`chunk-${index}`}
                                className="flex w-full md:w-1/2 flex-wrap"
                            >
                                {chunk.map((image, imageIndex) => (
                                    <div key={`image-${imageIndex}`} className={image.class}>
                                        <img
                                            alt={`gallery-${imageIndex}`}
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={image.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

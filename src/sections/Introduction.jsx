import React from 'react';

const Introduction = () => {
  return (
    <section id="home" className="bg-base-200 min-h-[75vh] flex items-center py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
  <p className="text-lg font-medium text-gray-600 mb-2">
    Assalamu Alaikum, I'm
  </p>

  <h1 className="text-5xl font-bold text-primary">
    Minhaz Chowdhury
  </h1>

  <h2 className="text-2xl font-semibold text-secondary mt-2">
    Full Stack Web Developer
  </h2>

  <p className="py-6 text-gray-700 leading-relaxed">
 I build modern, responsive web applications focused on performance and user experience. I enjoy turning ideas into polished, functional solutions and take pride in writing scalable, maintainable code.
</p>

  <a 
    href="/Minhaz_Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="btn btn-primary">Download Resume</button>
  </a>
</div>


          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/RptXfyXj/portfolio.jpg"
              alt="Minhaz Chowdhury"
              className=" rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

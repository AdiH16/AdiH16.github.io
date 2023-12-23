import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-xl p-8 md:p-12 my-12 mx-8 rounded">
            <img className="w-64 h-64 md:w-96 md:h-auto md:rounded-none rounded-full mx-auto" src="your_image_link.jpg" alt="You"/>
            <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Adi Hinović</h1>
                <p className="mt-2 text-gray-600">Description placeholder</p>
                <div className="flex justify-center md:justify-start mt-4">
                    <a href="https://www.linkedin.com/in/adi-hinovi%C4%87-319675203/" className="text-gray-500">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            {/* LinkedIn SVG */}
                        </svg>
                    </a>
                    <a href="https://github.com/AdiH16" className="ml-4 text-gray-500">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            {/* GitHub SVG */}
                        </svg>
                    </a>
                    <a href="link_to_your_twitter" className="ml-4 text-gray-500">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            {/* Twitter SVG */}
                        </svg>
                    </a>
                </div>
                <a href="link_to_your_resume" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Download Resume</a>
            </div>
        </div>
    );
}

export default About;

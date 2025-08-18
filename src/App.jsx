import React, { useState, useEffect } from 'react';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const skills = [
        'Core Java, Java 8, 17 & 21', 'Spring Boot', 'Spring Security', 'Spring Batch', 'Microservices', 'Prompt Engineering',
        'Reactive Programming', 'Confluent Kafka', 'PostgreSQL', 'Docker', 'AWS', 'Google Cloud',
        'Jenkins', 'Tekton', 'React JS', 'JavaScript', 'Junit & Mockito', 'OAUTH 2', 'Terraform',
        'Apollo GraphQL', 'SOLID Principles', 'Design Patterns', 'TDD', 'Virtual Threads'
    ];

    const experiences = [
        {
            company: 'Nuacem AI',
            position: 'Software Engineer',
            period: 'May 2025 – Present',
            project: 'Jabberjet',
            achievements: [
                'Spearheaded end-to-end development of high-performance XMPP-Client-Microservice using reactive stack (Spring WebFlux, Spring Reactive Kafka)',
                'Engineered robust Kafka integration with custom error handlers, fallback mechanisms, and Dead-Letter Topics (DLT)',
                'Boosted system performance by 40% through asynchronous, non-blocking reactive programming paradigms',
                'Utilized Gemini pro to increase the productivity up to 40%',
                'Migrated blocking microservices to non-blocking using Spring WebFlux',
                'Utilized Gemini Pro to increase productivity by 40%'
            ]
        },
        {
            company: 'Tech Mahindra',
            position: 'Software Engineer',
            period: 'Oct 2023 – April 2025',
            project: 'Ford Credit',
            achievements: [
                'Developed UI and backend for encrypted zip file upload, decryption, and download based on private key',
                'Designed complete inbound batch architecture using MIRO and UML diagrams',
                'Migrated from Java 11 to Java 17 and upgraded Spring Boot and Spring Security to latest versions',
                'Implemented SOLID principles, TDD, and design patterns to solve memory leak and OutOfMemory issues',
                'Developed GCP PubSub code for event publishing and subscription',
                'Used Switch based factory design pattern, singleton design pattern, façade design pattern, adapter design pattern, MVC pattern in our application and did hexagonal architecture POC',
                'Developed Spring batch application using parallel flows and tasklet for pushing notification to WebEx'
            ]
        },
        {
            company: 'Wipro Technologies',
            position: 'Software Engineer',
            period: 'Aug 2022 – Oct 2023',
            project: 'Levi WMS',
            achievements: [
                'Modern Java Development: Engineered wholesale microservices using Java 17, leveraging features like Records, Text Blocks, and Switch Expressions to build clean, maintainable, and efficient code.',
                'Implemented dynamic queries using JpaSpecificationExecutor and CriteriaBuilder',
                'Cloud-Native Architecture: Deployed and managed scalable applications on AWS, utilizing ECS for container orchestration, Lambda for server-less functions, S3 for storage, and RDS (PostgreSQL) for data persistence.',
                'Developed concurrent Spring Boot Kafka consumer for real-time order data processing',
                'Containerized microservices using Docker for streamlined development and deployment'
            ]
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Computer Applications',
            institution: 'SDHR Degree College',
            period: '05/2018 – 10/2021',
            percentage: '86.00%'
        },
        {
            degree: 'Intermediate (MPC)',
            institution: 'NRI Junior College',
            period: '06/2016 – 05/2018',
            percentage: '92.30%'
        },
        {
            degree: '10th Class',
            institution: 'Sri Padmavathi EM High School',
            period: '05/2015 – 04/2016',
            percentage: '90.00%'
        }
    ];

    const awards = [
        'Awarded with Raising Star in WIPRO (2022)',
        'Awarded with Digital Warrior in TECH MAHINDRA Q3 (2024)'
    ];

    const strengths = [
        'Time Management',
        'Logical Thinking & Analytical Skills',
        'Patience',
        'Hunger to Learn'
    ];

    const hobbies = [
        'Exercise and workouts',
        'Bike ride on weekends',
        'Watching YouTube about Tech & Finance'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Hanumanth Ramsetty
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors duration-200 hover:text-purple-400 ${
                                        activeSection === item ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-black/40 backdrop-blur-md rounded-b-lg">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-purple-500/20 transition-colors"
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <img
                            src="https://placehold.co/200x200/6366f1/ffffff?text=HR"
                            alt="Hanumanth R"
                            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-2xl"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                        Hanumanth R
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                        Software Engineer
                    </p>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Enthusiastic about new technology with 3.9 years of experience in developing high-performance applications.
                        Passionate about learning and implementing cutting-edge technologies to create innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                        >
                            View Experience
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I am enthusiastic about new technology and curious to learn new things that I want to grow and gain knowledge about new technology.
                                I always prefer to learn practically, and I dig more about certain technology to learn very deep and for understanding far.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                As I am passionate about the developing side, I can stretch myself for learning and developing. I almost give my best even at hard times.
                                I believe that giving up on things probably not a good idea and keep trying for best can lead for better performance.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I spend more time to learn not only in practical way and joyful as well. My strengths include time management, logical thinking, analytical skills, patience, and a hunger to learn.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Strengths</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {strengths.map((strength, index) => (
                                        <div key={index} className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                                            {strength}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Awards</h3>
                                <div className="space-y-3">
                                    {awards.map((award, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-gray-300">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span>{award}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Hobbies</h3>
                                <div className="space-y-3">
                                    {hobbies.map((hobby, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-gray-300">
                                            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                            <span>{hobby}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-purple-400">{exp.position}</h3>
                                        <p className="text-xl text-white">{exp.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.project}
                  </span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                            >
                                <span className="text-sm font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                            Java 8 & 17
                        </div>
                        <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                            Spring Boot
                        </div>
                        <div className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">
                            Microservices
                        </div>
                        <div className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/30">
                            AWS
                        </div>
                        <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                            Google Cloud
                        </div>
                        <div className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                            React JS
                        </div>
                        <div className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/30">
                            Kafka
                        </div>
                        <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
                            Docker
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-4 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-purple-400">{edu.degree}</h3>
                                        <p className="text-xl text-white">{edu.institution}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-right">
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium block mb-2">
                      {edu.period}
                    </span>
                                        <span className="text-lg text-pink-400 font-semibold">{edu.percentage}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-300">rhanumanth.official.2k@gmail.com</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                            <p className="text-gray-300">+91 9121581712</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Location</h3>
                            <p className="text-gray-300">Tirupati, Andhra Pradesh</p>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                        <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                        <p className="text-gray-300 mb-8">
                            I'm always interested in new opportunities and exciting projects.
                            Feel free to reach out if you'd like to connect!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:rhanumanth.official.2k@gmail.com"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Send Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hanumanth-ramsetty-9t8h4u9n0d8e3r/"
                                className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-purple-500/20">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Hanumanth R. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
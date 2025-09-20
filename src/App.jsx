import React, { useState, useEffect, useRef } from 'react';

// --- SVG ICONS AS REACT COMPONENTS ---
const Logo = () => (
    <a href="#hero" aria-label="home" style={{ textDecoration: 'none' }}>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="8" fill="#0ea5e9" fillOpacity="0.1"/>
            <path d="M13 31V12L21 23L29 12V31" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="0.5" y="0.5" width="41" height="41" rx="7.5" stroke="#0ea5e9" strokeOpacity="0.3"/>
        </svg>
    </a>
);

const QuoteIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0ea5e9', opacity: 0.2, position: 'absolute', top: '1rem', left: '1rem' }}>
        <path d="M10 11H6.5C5.12 11 4 12.12 4 13.5V17.5C4 18.88 5.12 20 6.5 20H10V16H7V14H10V11ZM18 11H14.5C13.12 11 12 12.12 12 13.5V17.5C12 18.88 13.12 20 14.5 20H18V16H15V14H18V11Z" fill="currentColor"/>
    </svg>
);

const DigitalMarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0ea5e9' }}>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" /><path d="m15 12-4-9-1 1 2 4-5 2 2 5 4-1 1-2Z" />
    </svg>
);
const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0ea5e9' }}>
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
);
const SeoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0ea5e9' }}>
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
);
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={styles.socialIconLink}>
        {children}
    </a>
);


// --- STYLE OBJECTS (CSS-in-JS) ---
const styles = {
    // Global Styles
    body: {
        backgroundColor: '#020617',
        color: '#e2e8f0',
        fontFamily: "'Inter', sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        lineHeight: 1.6,
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    // Header Styles
    header: {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(2, 6, 23, 0.6)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        zIndex: 100,
        transition: 'top 0.3s, background-color 0.3s, box-shadow 0.3s',
        borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        maxWidth: '1100px',
        margin: '0 auto',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    navItem: { margin: '0 1.5rem' },
    navLink: {
        color: '#e2e8f0',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        position: 'relative',
        paddingBottom: '4px',
    },
    navLinkNumber: {
        color: '#0ea5e9',
        fontSize: '0.9rem',
    },
    // Hero Section
    hero: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
    },
    heroSubtitle: {
        color: '#0ea5e9',
        fontSize: '1.2rem',
        marginBottom: '1rem',
    },
    heroTitle: {
        fontSize: 'clamp(40px, 8vw, 80px)',
        color: '#f8fafc',
        margin: '0',
        fontWeight: 700,
    },
    heroTagline: {
        fontSize: 'clamp(20px, 5vw, 40px)',
        color: '#94a3b8',
        marginTop: '0.5rem',
        fontWeight: 600,
    },
    heroDescription: {
        maxWidth: '540px',
        color: '#94a3b8',
        marginTop: '1.5rem',
    },
    heroButtonContainer: {
        marginTop: '2.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    ctaButton: {
        backgroundColor: '#0ea5e9',
        color: '#f8fafc',
        border: 'none',
        padding: '1rem 1.75rem',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    // Section Styles
    section: {
        padding: '100px 0',
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    },
    sectionVisible: { opacity: 1, transform: 'translateY(0)' },
    sectionTitle: {
        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
        fontWeight: 'bold',
        color: '#f8fafc',
        marginBottom: '3rem',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    },
    sectionTitleLine: {
        content: '""',
        display: 'block',
        width: '100px',
        height: '1px',
        backgroundColor: '#1e293b',
    },
    // About Section
    aboutContent: {
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '50px',
        alignItems: 'flex-start',
    },
    aboutImageContainer: {
        maxWidth: '300px',
        position: 'relative',
        borderRadius: '8px',
        border: '1px solid #1e293b',
        padding: '8px',
    },
    aboutImage: {
        width: '100%',
        borderRadius: '4px',
        position: 'relative',
    },
    skillsContainer: {
        marginTop: '2.5rem',
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1rem',
        listStyle: 'none',
        padding: 0,
    },
    skillItem: {
        color: '#94a3b8',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    // Services Section
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    serviceCard: {
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        border: '1px solid #1e293b',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        backdropFilter: 'blur(5px)',
    },
    serviceIcon: { marginBottom: '1.5rem' },
    serviceTitle: {
        fontSize: '1.5rem',
        color: '#f8fafc',
        marginBottom: '1rem',
    },
    serviceDescription: { color: '#94a3b8' },
    // Portfolio Section
    portfolioGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
    },
    portfolioCard: {
        backgroundColor: '#0f172a',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
    },
    portfolioImageContainer: {
        position: 'relative',
        height: '200px',
    },
    portfolioImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },
    portfolioOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(2, 6, 23, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        opacity: 0,
        transition: 'opacity 0.4s ease',
    },
    portfolioLink: {
        color: '#f8fafc',
        textDecoration: 'none',
        padding: '0.5rem',
        borderRadius: '50%',
        border: '1px solid #f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    portfolioContent: {
        padding: '1.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    portfolioTitle: {
        fontSize: '1.4rem',
        color: '#f8fafc',
        marginBottom: '0.5rem',
    },
    portfolioDescription: {
        color: '#94a3b8',
        marginBottom: '1rem',
        flexGrow: 1,
    },
    portfolioTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    portfolioTag: {
        backgroundColor: '#020617',
        color: '#0ea5e9',
        padding: '0.25rem 0.75rem',
        borderRadius: '15px',
        fontSize: '0.8rem',
    },
    // Testimonials Section
    testimonialsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    testimonialCard: {
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        border: '1px solid #1e293b',
        padding: '2.5rem 2rem 2rem 2rem',
        borderRadius: '8px',
        position: 'relative',
    },
    testimonialQuote: {
        color: '#e2e8f0',
        fontStyle: 'italic',
        marginBottom: '1.5rem',
    },
    testimonialAuthor: {
        fontWeight: 'bold',
        color: '#f8fafc',
    },
    testimonialCompany: {
        fontSize: '0.9rem',
        color: '#0ea5e9',
    },
    // Contact Section
    contactWrapper: {
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
    },
    contactForm: {
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    formInput: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#0f172a',
        border: '1px solid #1e293b',
        borderRadius: '4px',
        color: '#f8fafc',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    // Footer
    footer: {
        textAlign: 'center',
        padding: '2rem 0',
        color: '#94a3b8',
        borderTop: '1px solid #1e293b',
    },
    socialLinks: { marginBottom: '1rem' },
    socialIconLink: {
        color: '#94a3b8',
        margin: '0 1rem',
        transition: 'color 0.3s ease, transform 0.3s ease',
        display: 'inline-block',
    },
    // Hamburger Menu
    hamburger: {
        display: 'none',
        flexDirection: 'column',
        cursor: 'pointer',
        gap: '5px',
        zIndex: 101,
    },
    hamburgerBar: {
        width: '25px',
        height: '2px',
        backgroundColor: '#0ea5e9',
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
    },
};

// --- DUMMY DATA ---
const portfolioItems = [
    { title: 'AI-Powered Ad Campaign', description: 'Generated a 200% increase in lead conversion for a tech client using AI-driven ad creatives and targeting.', tags: ['AI Ads', 'PPC', 'Conversion Optimization'], imageUrl: 'https://placehold.co/600x400/020617/0ea5e9?text=AI+Campaign', liveUrl: '#'},
    { title: 'E-commerce SEO Overhaul', description: 'Boosted organic traffic by 150% in 6 months by optimizing product pages, technical SEO, and building quality backlinks.', tags: ['SEO', 'E-commerce', 'Content Strategy'], imageUrl: 'https://placehold.co/600x400/020617/0ea5e9?text=SEO+Project', liveUrl: '#' },
    { title: 'Social Media Growth Strategy', description: 'Developed and executed a content strategy that grew a lifestyle brand\'s Instagram following from 1k to 50k in a year.', tags: ['Digital Marketing', 'Social Media', 'Brand Building'], imageUrl: 'https://placehold.co/600x400/020617/0ea5e9?text=Social+Media', liveUrl: '#' },
];
const skills = ['Google Ads', 'Meta Ads', 'SEO (On-page & Off-page)', 'Google Analytics', 'Content Strategy', 'Canva & Figma'];
const testimonials = [
    { quote: "Musab's SEO strategy was a game-changer for us. We saw a tangible increase in organic leads within the first quarter. His expertise is undeniable.", author: "CEO", company: "The Next Sealers Waterproofing" },
    { quote: "The AI-powered ad campaigns developed by Muhammad Musab delivered an incredible ROI. His data-driven approach minimized our ad spend while maximizing conversions.", author: "Marketing Director", company: "Noor Resin Industry" },
    { quote: "Working with Musab elevated our brand's online presence significantly. His digital marketing skills helped us connect with a wider audience and grow our community.", author: "Founder", company: "Zeenat Styles Handbags" },
];

// --- HOOK FOR SCROLL ANIMATION ---
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [ref, options]);
    return [ref, isVisible];
};

// --- COMPONENTS ---
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobileView(window.innerWidth <= 768);
        checkMobile();

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
            setScrolled(currentScrollPos > 50);
        };
        
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (menuOpen) setMenuOpen(false);
    };
    
    const headerStyle = {
        ...styles.header,
        backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.6)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(14, 165, 233, 0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
        top: visible ? '0' : '-100px'
    };
    
    const navListStyle = isMobileView ? { ...styles.navList, display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: 'min(75vw, 400px)', height: '100vh', backgroundColor: '#0f172a', justifyContent: 'center', transition: 'right 0.4s ease-in-out', gap: '2rem', fontSize: '1.2rem', boxShadow: '-10px 0px 30px -15px rgba(2, 12, 27, 0.7)' } : styles.navList;

    const navItems = [
        { href: '#about', number: '01.', text: 'About' },
        { href: '#services', number: '02.', text: 'Services' },
        { href: '#portfolio', number: '03.', text: 'Portfolio' },
        { href: '#testimonials', number: '04.', text: 'Reviews' },
        { href: '#contact', number: '05.', text: 'Contact' }
    ];

    return (
        <header style={headerStyle}>
            <nav style={styles.nav}>
                <Logo />
                <div style={{...styles.hamburger, display: isMobileView ? 'flex' : 'none'}} onClick={() => setMenuOpen(!menuOpen)}>
                    <div style={{ ...styles.hamburgerBar, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                    <div style={{ ...styles.hamburgerBar, opacity: menuOpen ? 0 : 1 }}></div>
                    <div style={{ ...styles.hamburgerBar, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
                </div>
                <ul style={navListStyle}>
                    {navItems.map(item => (
                        <li key={item.number} style={styles.navItem}>
                            <a href={item.href} style={styles.navLink} onClick={(e) => smoothScroll(e, item.href.substring(1))} onMouseOver={e => e.currentTarget.style.color = '#0ea5e9'} onMouseOut={e => e.currentTarget.style.color = '#e2e8f0'}>
                                <span style={styles.navLinkNumber}>{item.number}</span>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

const Hero = () => (
    <section id="hero" style={styles.hero}>
        <div style={styles.container}>
            <p style={styles.heroSubtitle}>Hi, my name is</p>
            <h1 style={styles.heroTitle}>Muhammad Musab.</h1>
            <h2 style={styles.heroTagline}>I build results for the web.</h2>
            <p style={styles.heroDescription}>I'm a Digital Marketing Specialist, AI Ad Creator, and SEO expert dedicated to driving growth and maximizing online visibility. I turn data-driven insights into powerful marketing strategies.</p>
            <div style={styles.heroButtonContainer}>
                <a href="#contact"><button style={styles.ctaButton} onMouseOver={e => e.target.style.transform = 'translateY(-3px)'} onMouseOut={e => e.target.style.transform = 'none'}>Get In Touch</button></a>
            </div>
        </div>
    </section>
);

const Section = ({ id, title, children }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section id={id} ref={ref} style={{...styles.section, ...(isVisible && styles.sectionVisible)}}>
            <div style={styles.container}>
                <h2 style={styles.sectionTitle}><span style={styles.sectionTitleLine}></span>{title}<span style={styles.sectionTitleLine}></span></h2>
                {children}
            </div>
        </section>
    );
};

const About = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const aboutContentStyle = isMobile ? {...styles.aboutContent, gridTemplateColumns: '1fr', textAlign: 'center'} : styles.aboutContent;

    return (
        <Section id="about" title="About Me">
            <div style={aboutContentStyle}>
                <div style={{ order: isMobile ? 2 : 1 }}>
                    <p style={{...styles.heroDescription, maxWidth: '100%', textAlign: isMobile ? 'center' : 'left'}}>
                        Hello! I'm Muhammad Musab, a passionate digital marketer with a knack for leveraging technology to achieve outstanding results. My journey in the digital world began with a fascination for how businesses connect with their audiences online. Today, I specialize in creating intelligent, AI-powered advertising campaigns that captivate and convert.
                        <br /><br />
                        My expertise also lies in the intricate world of SEO, combining technical precision with creative strategy to build a robust and sustainable online presence for my clients.
                    </p>
                    <div style={styles.skillsContainer}>
                        <ul style={styles.skillsGrid}>
                            {skills.map((skill, i) => (
                                <li key={i} style={styles.skillItem}>
                                    <span style={{color: '#0ea5e9'}}>▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{...styles.aboutImageContainer, order: isMobile ? 1 : 2, margin: isMobile ? '0 auto 2rem auto' : '0 auto'}}>
                    <img src="https://placehold.co/400x400/0f172a/0ea5e9?text=MM" alt="Muhammad Musab" style={styles.aboutImage} />
                </div>
            </div>
        </Section>
    );
};

const Services = () => (
    <Section id="services" title="What I Do">
        <div style={styles.servicesGrid}>
            <div style={styles.serviceCard} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = '#0ea5e9';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e293b';}}>
                <div style={styles.serviceIcon}><DigitalMarketingIcon /></div>
                <h3 style={styles.serviceTitle}>Digital Marketing</h3>
                <p style={styles.serviceDescription}>Crafting comprehensive digital strategies that encompass everything from social media management to email marketing, ensuring a cohesive and powerful brand message.</p>
            </div>
            <div style={styles.serviceCard} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = '#0ea5e9';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e293b';}}>
                <div style={styles.serviceIcon}><AiIcon /></div>
                <h3 style={styles.serviceTitle}>AI Ad Creation</h3>
                <p style={styles.serviceDescription}>Utilizing cutting-edge AI tools to generate highly effective ad creatives, optimize campaign bidding, and deliver personalized ad experiences that maximize ROI.</p>
            </div>
            <div style={styles.serviceCard} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = '#0ea5e9';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e293b';}}>
                <div style={styles.serviceIcon}><SeoIcon /></div>
                <h3 style={styles.serviceTitle}>SEO Specialist</h3>
                <p style={styles.serviceDescription}>Performing in-depth keyword research, on-page and off-page optimization, and technical SEO audits to climb search rankings and capture organic traffic.</p>
            </div>
        </div>
    </Section>
);

const Portfolio = () => (
    <Section id="portfolio" title="My Work">
        <div style={styles.portfolioGrid}>
            {portfolioItems.map((item, index) => (
                <div key={index} style={styles.portfolioCard} 
                     onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.querySelector('.portfolio-overlay').style.opacity = 1;
                        e.currentTarget.querySelector('.portfolio-image').style.transform = 'scale(1.05)';
                     }} 
                     onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.portfolio-overlay').style.opacity = 0;
                        e.currentTarget.querySelector('.portfolio-image').style.transform = 'scale(1)';
                     }}>
                    <div style={styles.portfolioImageContainer}>
                         <img src={item.imageUrl} alt={item.title} style={styles.portfolioImage} className="portfolio-image"/>
                         <div style={styles.portfolioOverlay} className="portfolio-overlay">
                            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" style={styles.portfolioLink} onMouseOver={e => e.currentTarget.style.backgroundColor = '#0ea5e9'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}><ExternalLinkIcon/></a>
                         </div>
                    </div>
                    <div style={styles.portfolioContent}>
                        <h3 style={styles.portfolioTitle}>{item.title}</h3>
                        <p style={styles.portfolioDescription}>{item.description}</p>
                        <div style={styles.portfolioTags}>
                            {item.tags.map((tag, tagIndex) => (<span key={tagIndex} style={styles.portfolioTag}>{tag}</span>))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Testimonials = () => (
    <Section id="testimonials" title="What My Clients Say">
        <div style={styles.testimonialsGrid}>
            {testimonials.map((item, index) => (
                <div key={index} style={styles.testimonialCard}>
                    <QuoteIcon />
                    <p style={styles.testimonialQuote}>"{item.quote}"</p>
                    <div>
                        <p style={styles.testimonialAuthor}>{item.author}</p>
                        <p style={styles.testimonialCompany}>{item.company}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Contact = () => {
    const handleFocus = (e) => { e.target.style.borderColor = '#0ea5e9'; e.target.style.boxShadow = '0 0 0 2px rgba(14, 165, 233, 0.3)'; };
    const handleBlur = (e) => { e.target.style.borderColor = '#1e293b'; e.target.style.boxShadow = 'none'; };
    return (
        <Section id="contact" title="What's Next?">
            <div style={styles.contactWrapper}>
                <h3 style={{...styles.serviceTitle, fontSize: '2rem', color: '#0ea5e9'}}>Get In Touch</h3>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '1rem auto 0' }}>
                    I'm currently available for freelance opportunities and open to discussing new projects. Whether you have a specific inquiry or just want to connect, feel free to reach out. My inbox is always open, and I'll do my best to get back to you promptly!
                </p>
                <form style={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required style={styles.formInput} onFocus={handleFocus} onBlur={handleBlur} />
                    <input type="email" placeholder="Your Email" required style={styles.formInput} onFocus={handleFocus} onBlur={handleBlur} />
                    <textarea placeholder="Your Message" required style={{...styles.formInput, minHeight: '150px', resize: 'vertical'}} onFocus={handleFocus} onBlur={handleBlur}></textarea>
                    <button type="submit" style={{...styles.ctaButton, alignSelf: 'center'}} onMouseOver={e => e.target.style.transform = 'translateY(-3px)'} onMouseOut={e => e.target.style.transform = 'none'}>Send Message</button>
                </form>
            </div>
        </Section>
    );
};

const Footer = () => (
    <footer style={styles.footer}>
        <div style={styles.socialLinks}>
             <SocialIcon href="https://linkedin.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </SocialIcon>
            <SocialIcon href="https://github.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </SocialIcon>
             <SocialIcon href="https://twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </SocialIcon>
        </div>
        <p>Designed & Built by Muhammad Musab</p>
    </footer>
);


export default function App() {
    useEffect(() => {
        Object.assign(document.body.style, styles.body);
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
}


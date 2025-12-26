
function Contact() {
    const contactInfo = [
        {
            id: 1,
            title: "Call Us",
            content: "+91 9514831525",
            link: "tel:+919514831525",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        },
        {
            id: 2,
            title: "Instagram",
            content: "@jrm__fitness",
            link: "https://www.instagram.com/jrm__fitness/",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        },
        {
            id: 3,
            title: "Visit Us",
            content: "JRM Fitness , Arni Rd, Thuthipattu, Vellore 632002",
            link: "google.com/maps/place/JRM+Fitness+Center,+Arni+Rd,+Thuthipattu,+Tamil+Nadu+632002/data=!4m2!3m1!1s0x3bad3936405f5fdf:0xdef2da4507d22472?utm_source=mstt_1&entry=gps&lucs=47068609&g_ep=CAESCTExLjgzLjMwMRgAIMi8ByoINDcwNjg2MDlCAklO",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            )
        }
    ];

    return (
        <div className="contact-section">
            <h1 className="section-title">Contact Us</h1>
            <div className="contact-single-container">
                <div className="reach-us-card">
                    <h2>Reach Us</h2>
                    <div className="contact-links">
                        {contactInfo.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="link-icon">
                                    {item.icon}
                                </div>
                                <div className="link-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
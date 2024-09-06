import feature_img_proffesional from "../assets/svg/feature_img_professional.svg"
import feature_img_costeffective from "../assets/svg/feature_img_costeffective.svg"
import feature_img_scalable from "../assets/svg/feature_img_scalable.svg"
import feature_img_secure from "../assets/svg/feature_img_secure.svg"
import feature_img_timebound from "../assets/svg/feature_img_timebound.svg"
import feature_img_innovative from "../assets/svg/feature_img_innovative.svg"
import service_img_webdevelopment from "../assets/images/service_img_webdevelopment.png"
import service_img_design from "../assets/images/service_img_design.png"
import service_img_uiux from "../assets/images/service_img_uiux.png"
import service_img_mobiledesign from "../assets/images/service_img_mobiledesign.png"
import service_img_digitalposter from "../assets/images/service_img_digitalposter.png"
import service_img_videography from "../assets/images/service_img_videography.png"
import testimonial_img1 from "../assets/images/testimonial_img1.jpg"
import testimonial_img2 from "../assets/images/testimonial_img2.jpg"
import testimonial_img3 from "../assets/images/testimonial_img3.jpg"
import testimonial_img4 from "../assets/images/testimonial_img4.jpg"
import testimonial_img5 from "../assets/images/testimonial_img5.jpg"

export const features = [
    {
        id: 1,
        title: "Proffesional",
        description:
            "We deliver exceptionally professional services that not only meet but exceed your expectations, ensuring your complete satisfaction.",
        points: [
            "Experienced team of certified developers and designers.",
            "Tailored solutions aligned with industry best practices.",
            "Clear communication and transparent project management.",
            "Rigorous quality assurance and testing processes. Commitment to ethical business practices and confidentiality.",
        ],
        img: feature_img_proffesional,
    },
    {
        id: 2,
        title: "Cost-Effective",
        description:
            "We provide high-quality web solutions that maximize your return on investment, ensuring you get the best value for your budget.",
        points: [
            "Competitive pricing without compromising on quality.",
            "Flexible payment options to suit your financial needs.",
            "Efficient development processes to minimize costs.",
            "Transparent pricing with no hidden fees.",
            "Long-term cost savings through robust, maintainable code.",
        ],
        img: feature_img_costeffective,
    },
    {
        id: 3,
        title: "Scalable",
        description:
            "We build flexible web solutions designed to grow and evolve with your business, ensuring long-term success and adaptability.",
        points: [
            "Modular architecture for easy expansion and modification.",
            "Future-proof design to accommodate increasing user loads.",
            "Easily integrable with new technologies and third-party services.",
            "Customizable features to meet changing business requirements.",
            "Performance optimization to maintain speed as complexity grows.",
        ],
        img: feature_img_scalable,
    },
    {
        id: 4,
        title: "Secure",
        description:
            "We prioritize the protection of your data and systems, implementing robust security measures to safeguard your digital assets.",
        points: [
            "End-to-end encryption for data protection.",
            "Secure user authentication and authorization systems.",
            "Role-based access control for internal systems.",
            "Secure API integration and management.",
        ],
        img: feature_img_secure,
    },
    {
        id: 5,
        title: "Time-Bound",
        description:
            "We deliver high-quality web solutions within agreed timelines, ensuring your project launches on schedule and meets your business objectives.",
        points: [
            "Strict adherence to project deadlines and milestones.",
            "Clear timeline communication and regular progress updates.",
            "Efficient resource allocation to optimize development speed.",
            "Strategic planning to anticipate and prevent delays.",
            "Parallel development workflows to accelerate project completion.",
        ],
        img: feature_img_timebound,
    },
    {
        id: 6,
        title: "Innovative",
        description:
            "We leverage modern technologies and creative problem-solving to deliver forward-thinking web solutions that keep you ahead of the curve.",
        points: [
            "Implementation of the latest web development frameworks and technologies.",
            "Innovative UI/UX design for enhanced user engagement.",
            "Custom-built solutions tailored to unique business challenges.",
            "Use of low-code/no-code platforms for rapid prototyping and development.",
        ],
        img: feature_img_innovative,
    },
]

export const services = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Enhance your online presence with bespoke websites designed to meet your unique needs. At Gurudev, we transform your vision into reality using the latest technology and a user-centric approach.",
        points: ["User-centric design.", "SEO optimization.", "Content management systems.", "Scalable and flexible."],
        img: service_img_webdevelopment,
    },
    {
        id: 2,
        title: "Frontent Development",
        description:
            "Enhance your online presence with bespoke websites designed to meet your unique needs. At Gurudev, we transform your vision into reality using the latest technology and a user-centric approach.",
        points: [
            "Visually appealing and brand-aligned designs.",
            "Intuitive navigation and user interface.",
            "Fully responsive and mobile-friendly websites.",
            "Consistent design across all pages.",
        ],
        img: service_img_design,
    },
    {
        id: 3,
        title: "UI/UX Design (using Figma)",
        description:
            "Craft intuitive and visually appealing user interfaces that enhance user satisfaction and boost engagement across all digital platforms.",
        points: [
            "Empathetic Design.",
            "Well-structured design systems and reusable components.",
            "Incorporate stakeholder and user feedback efficiently.",
            "High-fidelity prototypes that provide a real-world feel.",
        ],
        img: service_img_uiux,
    },
    {
        id: 4,
        title: "Mobile App Development",
        description:
            "Extend your reach with powerful, feature-rich mobile applications for Androids. Gurudev gives you apps that users love and businesses rely on.",
        points: [
            "Native and cross-platform app development.",
            "Regular updates and maintenance support.",
            "Customized development approach.",
            "Robust security measures.",
        ],
        img: service_img_mobiledesign,
    },
    {
        id: 5,
        title: "SaaS Sevices",
        description:
            "Transform your business with scalable, cloud-based software solutions. Gurudev delivers innovative SaaS platforms that streamline operations and drive growth for companies of all sizes.",
        points: [
            "Customizable, industry-specific SaaS solutions.",
            "Seamless integration with existing systems.",
            "Automatic updates and continuous improvement.",
            "Robust data security.",
        ],
        img: service_img_digitalposter,
    },
    {
        id: 6,
        title: "Backend Development",
        description:
            "Gurudev creates efficient and secure backend systems that form the backbone of high-performing digital experiences.",
        points: [
            "Custom API development and integration.",
            "Database design and optimization.",
            "Scalable architecture for high-traffic applications.",
            "Advanced security implementations and data protection.",
        ],
        img: service_img_videography,
    },
]

export const testimonial = [
    {
        id: 1,
        name: "Daniel Rodriguez",
        company: "BrightWave Marketing",
        img: testimonial_img1,
        text:"Devguru's team brought our vision to life with their exceptional UI/UX design services. Using Figma, they created intuitive and visually appealing interfaces that have elevated our user experience. We highly recommend devguru for anyone looking to enhance their digital presence."
    },
    {
        id: 2,
        name: "Sarah Thompson",
        company: "TechNova Solutions",
        img: testimonial_img2,
        text:"Our experience with devguru for app development has been outstanding. They delivered a high-quality, cross-platform app that integrates with various device features. The regular updates ensure that our app remains top-notch. Devguru's expertise and innovative solutions have exceeded our expectations."
    },
    {
        id: 3,
        name: "Emily Johnson",
        company: "CreativePixel Studio",
        img: testimonial_img3,
        text:"Working with DevGuru on our frontend development has been a fantastic experience. Their creative and technical skills brought our vision to life with a beautifully designed and highly responsive user interface.  Their collaborative approach and dedication to understanding our needs made the entire process seamless."
    },
    {
        id: 4,
        name: "Michael Patel",
        company: "DataGenix Analytics",
        img: testimonial_img4,
        text:"Partnering with DevGuru for backend development has transformed our operations. Their expertise in building robust and scalable systems has significantly improved our platform's performance. The team's commitment to security and efficiency, along with their use of advanced technologies, has exceeded our expectations. We're thrilled with the results."
    },
    {
        id: 5,
        name: "James Anderson",
        company: "ProjectPro Inc",
        img: testimonial_img5,
        text:"Working with devguru has been a game-changer for our business. Their expertise in web development transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement. Their attention to detail and commitment to using the latest technology truly sets them apart. We couldn't be happier with the results!"
    }
]
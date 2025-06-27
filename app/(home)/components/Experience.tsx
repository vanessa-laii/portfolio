import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function Experience() {
      const testimonials = [
    {
      action:
        "Improving developer productivity by shipping automated architecture diagrams for host-process relationships for developers, and visualizing GitHub Actions workflows on Dynatrace.",
      name: "SWE Intern",
      designation: "Royal Bank of Canada (RBC)",
      src: "/rbc.jpg",
      skills: "Skills: TypeScript, Python, Opentelemetry, Dynatrace, Backstage",
    },
    {
      action:
        "Managed a team of 2 developers and lead the design and development of the personal iGEM website as well as the competition website. Won silver medal at the iGEM 2024 competition.",
      name: "Web Dev Lead", 
      website: "https://2024.igem.wiki/mcmaster-canada/",
      designation: "McMaster iGEM",
      src: "/iGEM.png",
      skills: "Skills: Typescript, Tailwind CSS, Node.js, Framer motion",
    },
    {
      action:
        "Focused on introducing programming concepts through interactive lessons and hands-on projects to over 500 students in Ontario.",
      name: "Software Engineering Instructor", 
      website: "http://outreach.mcmaster.ca/",
      designation: "McMaster Start Coding",
      src: "/msc.png",
      skills: "Skills: Elm",
    },
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Emily Watson",
    //   designation: "Operations Director at CloudScale",
    //   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
    return (
        <>
            <h1 className="text-2xl lg:text-4xl font-bold text-center mt-36">
                <span className="block underline underline-offset-8 decoration-green-200">Experience</span>
            </h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </>
    )
};



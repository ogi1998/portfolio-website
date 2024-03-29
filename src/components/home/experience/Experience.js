import { motion } from "framer-motion";

import Title from "../../ui/Title";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

const Experience = ({ elRef }) => {
    return (
        <>
            <span ref={elRef} className="pt-5 mob:pt-10 inline-block"></span>
            <motion.div
                className="my-20 flex flex-col mob:my-5"
                transition={{ type: "tween", duration: 1 }}
                initial={{ translateY: 300, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <Title text="EDUCATION & EXPERIENCE" className="mob:hidden" />
                <Title text="EDUCATION" className="hidden mob:block" />
                <div className="flex justify-center gap-20 mob:gap-0 mob:flex-col">
                    <Timeline>
                        <TimelineItem
                            title="Bachelor of Science, Computer Science"
                            time="Oct 2018 - Oct 2023"
                            companyName="Paneuropean university Apeiron | Banja Luka, BiH"
                            companyLink="https://apeiron-uni.eu"
                            description="The Degree is focused to gain core knowledge in computer science. 
                        I majored in Software Engineering and majority of my subjects were related to software engineering."
                            skills={[
                                "Programming",
                                "Databases",
                                "System Design",
                                "Software Design",
                                "System Administration",
                                "Computer Networking",
                            ]}
                        />
                        <TimelineItem
                            title="High School Diploma, Computer Science"
                            time="Sep 2014 - May 2018"
                            companyName="Information Technology Gymnasium | Prnjavor, BiH"
                            companyLink="https://gimnazijaprnjavor.com/"
                            description="The school is focused on Information Technologies and programming.
                        I had additional subjects related to programming, databases, operating systems and computer networks."
                            skills={[
                                "Programming",
                                "Databases",
                                "Computer Networking",
                                "Mathemathics",
                                "General Knowledge",
                            ]}
                        />
                    </Timeline>
                    <Title text="EXPERIENCE" className="hidden mob:block my-5" />
                    <Timeline>
                        <TimelineItem
                            title="Software Developer"
                            time="Feb 2024 - PRESENT"
                            companyName="ElevateBits | Banja Luka, BiH"
                            companyLink="https://elevatebits.com"
                            description="Working on projects for multiple clients as a Frontend Developer mostly working with React."
                            skills={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "Redux",
                                "Tailwind",
                                "Jira",
                                "Git",
                                "BitBucket",
                                "Confluence",
                                "Canban",
                            ]}
                        />
                        <TimelineItem
                            title="Software Developer"
                            time="Aug 2022 - Feb 2024"
                            companyName="Develabs | Banja Luka, BiH"
                            companyLink="https://develabs.com"
                            description="Working in R&D team mainly on developing Jedox Web. Working on Subset Editor, 
                        a main tool for querying and filtering data inside Jedox."
                            skills={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "ExtJS",
                                "SASS",
                                "Java",
                                "PHP",
                                "Aha Develop",
                                "Git",
                                "GitHub",
                                "Scrum",
                            ]}
                        />
                        <TimelineItem
                            title="Web Developer"
                            time="Dec 2019 - Aug 2022"
                            companyName="Paneuropean university Apeiron | Banja Luka, BiH"
                            companyLink="https://apeiron-uni.eu"
                            description="Worked on developing and maintaining main University website. 
                        I was also responsible for maintenance of other services that university uses."
                            skills={[
                                "HTML",
                                "CSS",
                                "WordPress",
                                "UX Research",
                                "UX",
                                "Communication",
                                "Problem Solving",
                            ]}
                        />
                        <TimelineItem
                            title="Software Developer - Internship"
                            time="Nov 2021 - Apr 2022"
                            companyName="Planet Soft"
                            companyLink="https://planetsoft.ba"
                            description="I was a frontend developer intern, working on a Web portal social media application needed for company's internal needs.
                        I worked in a team of 10 people, where each had their field of expertise and daily tasks."
                            skills={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React.js",
                                "Python",
                                "Django",
                                "MySQL",
                                "Git",
                                "GitHub",
                                "Scrum",
                            ]}
                        />
                    </Timeline>
                </div>
            </motion.div>
        </>
    );
};

export default Experience;

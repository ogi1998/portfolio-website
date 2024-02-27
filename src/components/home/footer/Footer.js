import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { theme } from "../../../theme";

const Footer = () => {
    const colors = theme.colors;
    return (
        <div className="bg-dprimary mt-20 text-light p-10 flex flex-col items-center justify-center relative">
            <div className="flex gap-14 text-4xl text-gray my-5">
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://github.com/ogi1998"
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://www.linkedin.com/in/ognjen-vujasinovic-6a38b8196/"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="mailto:ogivuja@gmail.com"
                >
                    <FaEnvelope />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({top: 0})}
                    className="absolute right-0 mr-20"
                >
                    <FaArrowUp />
                </motion.a>
            </div>
            <p className="text-gray text-lg">Copyright <span className="text-secondary">&copy; 2024</span>, Ognjen Vujasinovic. All rights reserved.</p>
        </div>
    );
};
export default Footer;
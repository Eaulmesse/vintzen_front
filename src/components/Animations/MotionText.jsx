// src/components/MotionText.jsx
import { motion } from "framer-motion";
import { Children } from "react";

const MotionText = ({ isParentHovered, textWidth }) => {
    
    const motionText = {
        opacity: isParentHovered ?  1 : 0,
        transition: { duration: 0.4, ease: "easeInOut" },
        width: isParentHovered ? textWidth : 0,
    };

    console.log(textWidth);
    

    return (
        <motion.div
            className="h-1 bg-custom-green rounded-full absolute"
            initial={{ opacity: 0 }}
            animate={motionText}
             
        >
        </motion.div>
    );
};

export default MotionText;

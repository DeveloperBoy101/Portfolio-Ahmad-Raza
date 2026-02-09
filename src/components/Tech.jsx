import React from "react";


const Tech = () => {
  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <motion.div
          className="px-4"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
        >
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-7xl text-gray-600" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <SiNodedotjs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          className="p-4"
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;

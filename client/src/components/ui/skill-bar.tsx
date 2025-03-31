import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export function SkillBar({ name, percentage, color = "primary" }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const barStyle = color === "primary" 
    ? "bg-primary-600 dark:bg-primary-500" 
    : "bg-secondary-500";

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className={color === "primary" ? "text-primary-600 dark:text-primary-400" : "text-secondary-500"}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${barStyle}`}
          initial={{ width: 0 }}
          animate={animated ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimateHeightProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimateHeight({
  children,
  className,
}: AnimateHeightProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string | number>("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={cn(className, "overflow-hidden")}
      style={{ height }}
      animate={{
        height,
        transition: {
          type: "spring",
          duration: 0.2
        },
      }}
      transition={{ duration: 0.1 }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
}

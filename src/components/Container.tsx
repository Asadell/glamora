import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({children, className} : ContainerProps) => {
  return (
    <section className={`min-w-full container ${className ? className : ''}`}>
      {children}
    </section>
  );
}

export default Container;
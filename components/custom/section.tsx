import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  id,
  style,
  ref,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      id={id}
      style={style}
      ref={ref}
      className={cn("scroll-mt-20 py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
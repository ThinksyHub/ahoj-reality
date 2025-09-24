interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
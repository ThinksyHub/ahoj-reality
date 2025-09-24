interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto mb-8"></div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
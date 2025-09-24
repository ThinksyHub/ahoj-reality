interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-golden/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-golden/20">
        <img 
          src={icon} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
const partners = [
  {
    id: 1,
    name: "Prague Development",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Prague+Dev"
  },
  {
    id: 2,
    name: "Czech Construction",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Czech+Const"
  },
  {
    id: 3,
    name: "Moravian Properties",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Moravian+Prop"
  },
  {
    id: 4,
    name: "Bohemian Estates",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Bohemian+Est"
  },
  {
    id: 5,
    name: "Capital Builders",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Capital+Build"
  },
  {
    id: 6,
    name: "Premium Living",
    logo: "https://via.placeholder.com/200x80/E5E7EB/6B7280?text=Premium+Live"
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-medium">Trusted Partnerships</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-gradient-golden">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading developers and construction companies across Czech Republic
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
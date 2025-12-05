import { Zap, Home, Users } from 'lucide-react';

const commitments = [
  {
    icon: Zap,
    title: 'Anti-Waste',
    description:
      'Systematic reduction of food waste through app notifications and repurposing unsold items.',
  },
  {
    icon: Home,
    title: 'Local & Organic',
    description:
      'Commitment to organic, locally sourced ingredients and full supplier traceability.',
  },
  {
    icon: Users,
    title: 'Social Hub',
    description:
      'Our physical spaces are community hubs hosting workshops, events, and local meetings.',
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-center">
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Our Commitment
            </h2>
            <p className="mt-2 text-3xl leading-tight font-display font-bold tracking-tight text-foreground sm:text-4xl">
              The Soul of French Culture, Evolved.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We preserve the core of Parisian baking—the flavor, the craftsmanship—while
              embracing digital transformation to meet modern demand for quality and
              convenience.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-leonie-light rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <commitment.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{commitment.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
import { useABTest } from '@/contexts/ABTestContext';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dupont',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    quote:
      "LEONIE has transformed my morning routine. The bread subscription means I never run out of fresh baguettes, and the quality is exceptional!",
    rating: 5,
  },
  {
    name: 'Thomas Bernard',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote:
      "The post-race recovery packs are perfect. High-protein, delicious, and delivered right to our running club meetup.",
    rating: 5,
  },
  {
    name: 'Claire Martin',
    role: 'HR Manager, TechCorp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote:
      "Our team loves the B2B meal plan. It's healthy, sustainable, and the employer contribution feature makes it affordable for everyone.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { tests } = useABTest();

  // A/B Test 6: Social Proof - Only show if Version B
  if (tests.socialProof === 'A') {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            What Our Community Says
          </h2>
          <p className="mt-2 text-3xl leading-tight font-display font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by Parisians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
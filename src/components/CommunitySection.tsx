import { useState } from 'react';
import { useABTest } from '@/contexts/ABTestContext';
import { Calendar } from 'lucide-react';
import EventModal from './modals/EventModal';

interface Event {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    category: 'Workshop',
    title: 'Artisanal Bread Class',
    description:
      "Learn the secrets of natural sourdough and organic flour from Baker Kamel Saci's team. Perfect for beginners and enthusiasts alike.",
    date: 'December 15, 2025',
    time: '10:00 AM - 1:00 PM',
    location: 'LEONIE Reuilly, 12th Arrondissement',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    category: 'Partnership',
    title: 'Post-Race Recovery Packs',
    description:
      'Integration with local running clubs, offering high-protein snacks and energy juices tailored for athletes.',
    date: 'Every Saturday',
    time: '8:00 AM - 10:00 AM',
    location: 'Bois de Vincennes Meeting Point',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    category: 'Educational',
    title: 'Anti-Waste Cooking Demo',
    description:
      'Rediscover how to eat better without throwing anything away. Recipes shared exclusively on the Léonie+ platform.',
    date: 'December 20, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'LEONIE Bercy, 12th Arrondissement',
  },
];

const CommunitySection = () => {
  const { tests } = useABTest();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // A/B Test 8: Calendar vs Cards layout
  const isCalendarLayout = tests.communityLayout === 'B';

  return (
    <>
      <section id="community" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Meet, Learn, Share
            </h2>
            <p className="mt-2 text-3xl leading-tight font-display font-bold tracking-tight text-foreground sm:text-4xl">
              Our Bakeries: Local and Educational Hubs
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Léonie is more than a bakery; it's a platform for social ties. Check the app
              for a full calendar of workshops, tastings, and community meetings in your
              local Paris store.
            </p>
          </div>

          {isCalendarLayout ? (
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">December 2025 Events</h3>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center gap-4 p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-primary">{event.category}</span>
                      <h4 className="font-semibold text-foreground truncate">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="text-sm text-primary font-medium">RSVP →</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary">{event.category}</span>
                    <h3 className="mt-1 text-xl font-bold text-foreground">{event.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <EventModal
        event={selectedEvent}
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      />
    </>
  );
};

export default CommunitySection;
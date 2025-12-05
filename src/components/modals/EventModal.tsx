import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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

interface EventModalProps {
  event: Event | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventModal = ({ event, open, onOpenChange }: EventModalProps) => {
  if (!event) return null;

  const handleRSVP = () => {
    toast({
      title: 'RSVP Confirmed! 🎉',
      description: `You're registered for "${event.title}". Check your email for details.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <span className="text-sm font-medium text-primary">{event.category}</span>
          <DialogTitle className="text-2xl font-display">{event.title}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-lg mt-4"
        />

        <div className="space-y-3 mt-4">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground">{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-foreground">{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground">{event.location}</span>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleRSVP} className="flex-1">
            RSVP Now
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
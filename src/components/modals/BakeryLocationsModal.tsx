import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MapPin, Clock, Phone } from 'lucide-react';

interface BakeryLocationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const locations = [
  {
    name: 'LEONIE Reuilly',
    address: '12th Arrondissement, Paris',
    hours: '7:00 AM - 8:00 PM',
    phone: '+33 1 23 45 67 89',
    flagship: true,
  },
  {
    name: 'LEONIE Bercy',
    address: '12th Arrondissement, Paris',
    hours: '7:30 AM - 7:30 PM',
    phone: '+33 1 23 45 67 90',
    flagship: false,
  },
  {
    name: 'LEONIE Nation',
    address: '11th Arrondissement, Paris',
    hours: '7:00 AM - 8:00 PM',
    phone: '+33 1 23 45 67 91',
    flagship: false,
  },
  {
    name: 'LEONIE Bastille',
    address: '4th Arrondissement, Paris',
    hours: '6:30 AM - 8:30 PM',
    phone: '+33 1 23 45 67 92',
    flagship: false,
  },
];

const BakeryLocationsModal = ({ open, onOpenChange }: BakeryLocationsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Our Bakery Locations</DialogTitle>
          <DialogDescription>
            Find your nearest LEONIE bakery across Paris. Serving 6 arrondissements with
            fresh artisanal products daily.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                location.flagship
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-muted/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground">{location.name}</h3>
                {location.flagship && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    Flagship
                  </span>
                )}
              </div>

              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BakeryLocationsModal;
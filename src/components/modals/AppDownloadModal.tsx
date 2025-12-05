import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';

interface AppDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppDownloadModal = ({ open, onOpenChange }: AppDownloadModalProps) => {
  const handleDownload = (store: string) => {
    // In a real app, these would link to actual store URLs
    alert(`Redirecting to ${store}... (Demo mode)`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center">
            Download Léonie+ App
          </DialogTitle>
          <DialogDescription className="text-center">
            Get the full LEONIE experience on your mobile device. Order, subscribe, and
            join our community events.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-6">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=200&fit=crop"
            alt="Léonie+ App Preview"
            className="rounded-lg w-full h-40 object-cover"
          />

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => handleDownload('App Store')}
              className="bg-foreground text-background hover:bg-foreground/90 gap-2"
            >
              <Apple className="w-5 h-5" />
              App Store
            </Button>
            <Button
              onClick={() => handleDownload('Google Play')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Play className="w-5 h-5" />
              Google Play
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">
            Free download • No subscription required to browse
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppDownloadModal;
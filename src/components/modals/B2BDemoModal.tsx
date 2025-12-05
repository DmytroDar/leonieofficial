import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface B2BDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const B2BDemoModal = ({ open, onOpenChange }: B2BDemoModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    employees: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Demo Request Sent! 📧',
      description: "Our B2B team will contact you within 24 hours.",
    });
    
    setFormData({ name: '', company: '', email: '', employees: '', message: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Request B2B Demo</DialogTitle>
          <DialogDescription>
            Discover how LEONIE can provide healthy, sustainable meals for your team.
            Fill out the form and our corporate solutions team will reach out.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Claire Martin"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="TechCorp"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="claire@techcorp.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employees">Number of Employees</Label>
            <Input
              id="employees"
              value={formData.employees}
              onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
              placeholder="50-100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your team's needs..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Request Demo
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default B2BDemoModal;
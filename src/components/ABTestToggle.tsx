import { useABTest } from '@/contexts/ABTestContext';
import { Switch } from '@/components/ui/switch';
import { FlaskConical } from 'lucide-react';

const ABTestToggle = () => {
  const { toggleAllTests, isVersionB } = useABTest();

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card border border-border rounded-xl p-4 shadow-lg animate-fade-in">
      <div className="flex items-center gap-3">
        <FlaskConical className="w-5 h-5 text-primary" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">A/B Test Mode</span>
          <span className="text-xs text-muted-foreground">
            {isVersionB ? 'Version B' : 'Version A'}
          </span>
        </div>
        <Switch
          checked={isVersionB}
          onCheckedChange={toggleAllTests}
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default ABTestToggle;
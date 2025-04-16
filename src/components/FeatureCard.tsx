// components/FeatureCard.tsx
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col justify-center space-y-4">
          <Icon className="w-10 h-10 text-black dark:text-white" />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

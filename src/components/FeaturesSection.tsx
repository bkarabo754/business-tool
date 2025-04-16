// components/FeaturesSection.tsx
import { FeatureCard } from './FeatureCard';
import { Paperclip } from 'lucide-react';

const features = [
  {
    icon: Paperclip,
    title: 'Easy Request Submission',
    description:
      'Employees can submit time off requests directly through the platform.',
  },
  {
    icon: Paperclip,
    title: 'Streamlined Approvals',
    description: 'Managers can approve or reject requests with one click.',
  },
  {
    icon: Paperclip,
    title: 'Track Time Off',
    description: 'View detailed records of all time off history in one place.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Key Features
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Everything you need to manage your time off requests, approvals,
              and tracking all in one place.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

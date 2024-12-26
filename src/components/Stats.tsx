import { Users, Globe, MessageSquare } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1M+",
    label: "Users Reached",
  },
  {
    icon: Globe,
    value: "25+",
    label: "African Countries",
  },
  {
    icon: MessageSquare,
    value: "10M+",
    label: "Conversations",
  },
];

export const Stats = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <stat.icon className="h-12 w-12 text-primary mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
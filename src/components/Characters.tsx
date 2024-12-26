import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const characters = [
  {
    name: "Maria Kim",
    role: "Healthcare Advisor",
    description: "Specializing in public health education and community wellness programs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Charlie Pele",
    role: "Tech Educator",
    description: "Guiding youth through digital literacy and technology skills",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Malkia",
    role: "Youth Mentor",
    description: "Empowering teens with leadership skills and personal development",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300",
  },
];

export const Characters = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card
              key={character.name}
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription className="text-primary">{character.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{character.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
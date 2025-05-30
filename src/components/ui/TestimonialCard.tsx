import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './Card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? 'text-warning fill-warning' : 'text-muted-foreground'
                }`}
              />
            ))}
        </div>
        <blockquote className="mb-6 text-muted-foreground">"{testimonial}"</blockquote>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <img
              src={imageSrc}
              alt={name}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement<LucideIcon>;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col items-start gap-3">
        <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent">
          {React.cloneElement(icon, { className: 'h-6 w-6' })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button variant="secondary" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
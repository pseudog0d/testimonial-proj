import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './Card';
import { truncateText } from '../../lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  category,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden h-full">
      <div className="relative overflow-hidden h-56">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          <Link to={link}>{title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4">
          {truncateText(description, 120)}
        </p>
        <Link 
          to={link} 
          className="text-sm font-medium text-accent hover:underline"
        >
          View Case Study
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
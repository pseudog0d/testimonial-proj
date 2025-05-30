import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './Card';
import { truncateText } from '../../lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: {
    name: string;
    imageSrc: string;
  };
  imageSrc: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  category,
  author,
  imageSrc,
  slug,
}: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden h-full">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-accent text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <img
              src={author.imageSrc}
              alt={author.name}
              className="h-5 w-5 rounded-full object-cover mr-1"
            />
            <span>{author.name}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4">
          {truncateText(excerpt, 100)}
        </p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-sm font-medium text-accent hover:underline"
        >
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
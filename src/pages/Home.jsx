import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Database, Palette, Zap, ArrowRight } from 'lucide-react';
import TaskManager from '../components/TaskManager';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Create, complete, and organize your tasks efficiently with local storage persistence.',
      color: 'blue',
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Seamlessly fetch and display data from external APIs with loading states.',
      color: 'green',
    },
    {
      icon: Palette,
      title: 'Dark Mode',
      description: 'Beautiful light and dark themes that adapt to your preferences automatically.',
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance with React and optimized for all screen sizes.',
      color: 'yellow',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <section className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">React Task Manager</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern, responsive application built with React, Vite, and Tailwind CSS. Manage your tasks efficiently with a beautiful interface.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/api-data">
              <Button variant="primary" size="lg">
                Explore API Data
                <ArrowRight size={20} />
              </Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card.Body className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${colorClasses[feature.color]}`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Try It Out
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Start managing your tasks right away with our intuitive interface
            </p>
          </div>
          <TaskManager />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-xl opacity-90">Responsive Design</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">⚡</p>
              <p className="text-xl opacity-90">Lightning Fast</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">♾️</p>
              <p className="text-xl opacity-90">Unlimited Tasks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
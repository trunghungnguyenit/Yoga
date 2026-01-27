'use client';

import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FilterOptions {
  levels: string[];
  goals: string[];
  durations: string[];
  formats: string[];
  tags: string[];
}

interface ProgramFiltersProps {
  filters: FilterOptions;
  activeFilters: Record<string, string[]>;
  onFilterChange: (category: string, value: string) => void;
  onClearAll: () => void;
  isMobile?: boolean;
}

export default function ProgramFilters({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearAll,
  isMobile = false 
}: ProgramFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    levels: true,
    goals: false,
    durations: false,
    formats: false,
    tags: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length;
  };

  const filterSections = [
    { key: 'levels', title: 'Trình độ', options: filters.levels },
    { key: 'goals', title: 'Mục tiêu', options: filters.goals },
    { key: 'durations', title: 'Thời lượng', options: filters.durations },
    { key: 'formats', title: 'Định dạng', options: filters.formats },
    { key: 'tags', title: 'Thẻ', options: filters.tags }
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Active Filters */}
      {getActiveFilterCount() > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Bộ lọc đang áp dụng</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearAll}
              className="text-gray-500 hover:text-gray-700"
            >
              Xóa tất cả
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) =>
              values.map(value => (
                <Badge 
                  key={`${category}-${value}`} 
                  variant="secondary"
                  className="bg-green-100 text-green-700 hover:bg-green-200"
                >
                  {value}
                  <X 
                    size={14} 
                    className="ml-1 cursor-pointer" 
                    onClick={() => onFilterChange(category, value)}
                  />
                </Badge>
              ))
            )}
          </div>
        </div>
      )}

      {/* Filter Sections */}
      {filterSections.map(section => (
        <div key={section.key} className="space-y-3">
          <button
            onClick={() => toggleSection(section.key)}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900">{section.title}</h4>
            <ChevronDown 
              size={16} 
              className={`transform transition-transform ${
                expandedSections[section.key] ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedSections[section.key] && (
            <div className="space-y-2">
              {section.options.map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters[section.key]?.includes(option) || false}
                    onChange={() => onFilterChange(section.key, option)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Filter Button */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Lọc
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-1">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile Filter Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/50">
            <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Bộ lọc</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </Button>
              </div>
              <FilterContent />
              <div className="sticky bottom-0 bg-white pt-4 mt-6 border-t">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Áp dụng bộ lọc
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop Sidebar
  return (
    <div className="w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Bộ lọc</h3>
      <FilterContent />
    </div>
  );
}
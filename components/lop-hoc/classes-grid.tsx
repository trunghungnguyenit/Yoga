import { ZaloCta } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { classes } from './classes-data';

export default function ClassesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{classItem.icon}</div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {classItem.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {classItem.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">📍</span>
                    <div>
                      <span className="font-medium text-gray-900">Địa điểm:</span>
                      <p className="text-gray-600">{classItem.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">⏰</span>
                    <div>
                      <span className="font-medium text-gray-900">Lịch học:</span>
                      <p className="text-gray-600">{classItem.schedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">💰</span>
                    <div>
                      <span className="font-medium text-gray-900">Giá:</span>
                      <p className="text-gray-600">{classItem.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">👤</span>
                    <div>
                      <span className="font-medium text-gray-900">Phù hợp:</span>
                      <p className="text-gray-600">{classItem.suitableFor}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {classItem.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <ZaloCta text={`💬 ${classItem.ctaText}`} fullWidth />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
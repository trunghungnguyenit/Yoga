'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin, Plus } from 'lucide-react';

const groupCalls = [
  {
    day: 'Thứ Hai',
    time: '7:00 AM',
    timezone: 'PST',
    localTime: '22:00',
    localTimezone: 'ICT',
    status: 'upcoming',
    participants: 45,
    maxParticipants: 50,
    topic: 'Tuần 1: Nền tảng & Căn chỉnh'
  },
  {
    day: 'Thứ Tư',
    time: '10:00 AM',
    timezone: 'PST',
    localTime: '01:00',
    localTimezone: 'ICT (+1)',
    status: 'upcoming',
    participants: 38,
    maxParticipants: 50,
    topic: 'Q&A & Thực hành cùng nhau'
  },
  {
    day: 'Thứ Năm',
    time: '7:00 PM',
    timezone: 'PST',
    localTime: '10:00',
    localTimezone: 'ICT (+1)',
    status: 'live',
    participants: 42,
    maxParticipants: 50,
    topic: 'Tuần 2: Xây dựng sức mạnh'
  },
  {
    day: 'Thứ Bảy',
    time: '8:00 AM',
    timezone: 'PST',
    localTime: '23:00',
    localTimezone: 'ICT',
    status: 'recorded',
    participants: 47,
    maxParticipants: 50,
    topic: 'Thực hành cuối tuần'
  }
];

export default function GroupCallsSection() {
  const [selectedTimezone, setSelectedTimezone] = useState('local');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500 text-white';
      case 'upcoming': return 'bg-green-100 text-green-700';
      case 'recorded': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return '🔴 Đang diễn ra';
      case 'upcoming': return '📅 Sắp diễn ra';
      case 'recorded': return '📹 Đã ghi lại';
      default: return 'Không xác định';
    }
  };

  const addToCalendar = (call: any) => {
    // Generate calendar event
    const startDate = new Date();
    const title = `Momentum Flow - ${call.topic}`;
    const details = `Buổi coaching nhóm với Charlie\nChủ đề: ${call.topic}`;
    
    // Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="schedule" className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lịch tập luyện nhóm{' '}
            <span className="text-green-600">hàng tuần</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tham gia buổi Q&A trực tiếp với Charlie và cộng đồng học viên mỗi tuần
          </p>

          {/* Timezone Selector */}
          <div className="inline-flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setSelectedTimezone('pst')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTimezone === 'pst' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              PST (Gốc)
            </button>
            <button
              onClick={() => setSelectedTimezone('local')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTimezone === 'local' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ICT (Việt Nam)
            </button>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {groupCalls.map((call, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge className={getStatusColor(call.status)}>
                  {getStatusText(call.status)}
                </Badge>
                {call.status === 'upcoming' && (
                  <button
                    onClick={() => addToCalendar(call)}
                    className="text-green-600 hover:text-green-700 p-1"
                    title="Thêm vào lịch"
                  >
                    <Plus size={16} />
                  </button>
                )}
              </div>

              {/* Day & Time */}
              <div className="space-y-3 mb-4">
                <h3 className="text-lg font-bold text-gray-900">{call.day}</h3>
                
                <div className="space-y-2">
                  {selectedTimezone === 'pst' ? (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock size={16} />
                      <span className="font-medium">{call.time} {call.timezone}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock size={16} />
                      <span className="font-medium">{call.localTime}:00 {call.localTimezone}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={14} />
                    <span>Zoom Meeting</span>
                  </div>
                </div>
              </div>

              {/* Topic */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 text-sm mb-1">Chủ đề:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{call.topic}</p>
              </div>

              {/* Participants */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={14} />
                  <span>{call.participants}/{call.maxParticipants}</span>
                </div>
                <div className="w-full max-w-20 bg-gray-200 rounded-full h-2 ml-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(call.participants / call.maxParticipants) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              {call.status === 'live' && (
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Tham gia ngay
                </Button>
              )}
              {call.status === 'upcoming' && (
                <Button 
                  variant="outline" 
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  onClick={() => addToCalendar(call)}
                >
                  Thêm vào lịch
                </Button>
              )}
              {call.status === 'recorded' && (
                <Button variant="outline" className="w-full">
                  Xem bản ghi
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Không thể tham gia trực tiếp?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Đừng lo! Tất cả buổi coaching đều được ghi lại và có sẵn trong khu vực thành viên. 
            Bạn có thể xem lại bất kỳ lúc nào.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Xem lịch đầy đủ
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Cài đặt nhắc nhở
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
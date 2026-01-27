'use client';

import { useState } from 'react';
import { Upload, X, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ticketCategories = [
  { value: 'technical', label: 'Sự cố kỹ thuật' },
  { value: 'billing', label: 'Thanh toán' },
  { value: 'account', label: 'Tài khoản' },
  { value: 'course', label: 'Khóa học' },
  { value: 'other', label: 'Khác' }
];

const priorityLevels = [
  { value: 'low', label: 'Thấp', color: 'text-green-600', time: '48-72 giờ' },
  { value: 'medium', label: 'Trung bình', color: 'text-yellow-600', time: '24-48 giờ' },
  { value: 'high', label: 'Cao', color: 'text-red-600', time: '4-24 giờ' }
];

export default function TicketForm() {
  const [formData, setFormData] = useState({
    category: '',
    priority: 'medium',
    subject: '',
    description: '',
    email: '',
    attachments: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files].slice(0, 3) // Max 3 files
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newTicketId = `#${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setTicketId(newTicketId);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const selectedPriority = priorityLevels.find(p => p.value === formData.priority);

  if (isSubmitted) {
    return (
      <section id="ticket-form" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yêu cầu đã được gửi thành công!
            </h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Mã yêu cầu:</strong> <span className="text-green-600 font-mono">{ticketId}</span>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Thời gian phản hồi dự kiến:</strong> {selectedPriority?.time}
              </p>
              <p className="text-gray-700">
                <strong>Email xác nhận:</strong> Đã gửi đến {formData.email}
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi sớm nhất có thể. 
              Bạn có thể theo dõi trạng thái qua email hoặc tài khoản của mình.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    category: '',
                    priority: 'medium',
                    subject: '',
                    description: '',
                    email: '',
                    attachments: []
                  });
                }}
                variant="outline"
              >
                Gửi yêu cầu khác
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Quay về trang chủ
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ticket-form" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Gửi yêu cầu hỗ trợ
                </h2>
                <p className="text-gray-600">
                  Mô tả chi tiết vấn đề của bạn để chúng tôi có thể hỗ trợ tốt nhất
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category & Priority */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Danh mục <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Chọn danh mục</option>
                      {ticketCategories.map(cat => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Mức độ ưu tiên
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {priorityLevels.map(priority => (
                        <option key={priority.value} value={priority.value}>
                          {priority.label} ({priority.time})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Chủ đề <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Tóm tắt ngắn gọn vấn đề của bạn"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Mô tả chi tiết <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Mô tả chi tiết vấn đề, các bước bạn đã thử, và thông tin liên quan khác..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tệp đính kèm (tùy chọn)
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-green-300 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload size={32} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-1">
                        Kéo thả tệp hoặc <span className="text-green-600 font-medium">chọn tệp</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF, DOC (tối đa 3 tệp, mỗi tệp &lt; 10MB)
                      </p>
                    </label>
                  </div>

                  {/* Uploaded Files */}
                  {formData.attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <span className="text-sm text-gray-700 truncate">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Đang gửi...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Gửi yêu cầu
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Response Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={20} className="text-green-600" />
                Thời gian phản hồi
              </h3>
              <div className="space-y-3">
                {priorityLevels.map(priority => (
                  <div key={priority.value} className="flex items-center justify-between">
                    <span className={`font-medium ${priority.color}`}>
                      {priority.label}
                    </span>
                    <span className="text-sm text-gray-600">
                      {priority.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Liên hệ khác
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@charliefollowsyoga.com
                </p>
                <p className="text-gray-700">
                  <strong>Giờ làm việc:</strong> T2-T6, 9:00-18:00 (GMT+7)
                </p>
                <p className="text-gray-700">
                  <strong>Chat trực tiếp:</strong> Có sẵn trong giờ làm việc
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                💡 Mẹo để được hỗ trợ nhanh
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Mô tả chi tiết các bước bạn đã thử</li>
                <li>• Đính kèm ảnh chụp màn hình nếu có</li>
                <li>• Cung cấp thông tin thiết bị/trình duyệt</li>
                <li>• Ghi rõ thời gian xảy ra sự cố</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
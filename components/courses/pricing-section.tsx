import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Cơ bản',
    price: '$49',
    originalPrice: '$99',
    period: 'một lần',
    description: 'Phù hợp cho người mới bắt đầu',
    popular: false,
    features: {
      'Video bài học HD': true,
      'Tài liệu PDF': true,
      'Truy cập cộng đồng': false,
      'Coaching nhóm': false,
      'Chứng chỉ': true,
      'Hỗ trợ email': true,
      'Truy cập trọn đời': true,
      'Cập nhật miễn phí': false,
      'Ứng dụng mobile': true,
      'Xem offline': false
    }
  },
  {
    name: 'Tiêu chuẩn',
    price: '$99',
    originalPrice: '$199',
    period: 'một lần',
    description: 'Lựa chọn phổ biến nhất',
    popular: true,
    features: {
      'Video bài học HD': true,
      'Tài liệu PDF': true,
      'Truy cập cộng đồng': true,
      'Coaching nhóm': '4 buổi',
      'Chứng chỉ': true,
      'Hỗ trợ email': true,
      'Truy cập trọn đời': true,
      'Cập nhật miễn phí': true,
      'Ứng dụng mobile': true,
      'Xem offline': true
    }
  },
  {
    name: 'Premium',
    price: '$199',
    originalPrice: '$399',
    period: 'một lần',
    description: 'Trải nghiệm hoàn chỉnh',
    popular: false,
    features: {
      'Video bài học HD': true,
      'Tài liệu PDF': true,
      'Truy cập cộng đồng': true,
      'Coaching nhóm': 'Không giới hạn',
      'Chứng chỉ': true,
      'Hỗ trợ email': 'Ưu tiên',
      'Truy cập trọn đời': true,
      'Cập nhật miễn phí': true,
      'Ứng dụng mobile': true,
      'Xem offline': true
    }
  }
];

const allFeatures = [
  'Video bài học HD',
  'Tài liệu PDF',
  'Truy cập cộng đồng',
  'Coaching nhóm',
  'Chứng chỉ',
  'Hỗ trợ email',
  'Truy cập trọn đời',
  'Cập nhật miễn phí',
  'Ứng dụng mobile',
  'Xem offline'
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chọn gói phù hợp với{' '}
            <span className="text-green-600">bạn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tất cả gói đều bao gồm khóa học đầy đủ. Chọn mức hỗ trợ phù hợp với nhu cầu của bạn.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span>🔥</span>
            <span>Ưu đãi đặc biệt - Tiết kiệm đến 50%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-green-500 scale-105' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium">
                    <Star size={14} className="mr-1" />
                    Phổ biến nhất
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-gray-400 line-through text-lg">{plan.originalPrice}</div>
                        <div className="text-gray-600 text-sm">{plan.period}</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium text-sm">
                      Tiết kiệm {Math.round((1 - parseInt(plan.price.slice(1)) / parseInt(plan.originalPrice.slice(1))) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {allFeatures.map((feature, idx) => {
                    const planFeature = plan.features[feature];
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        {planFeature === true ? (
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                        ) : planFeature === false ? (
                          <X size={16} className="text-gray-300 flex-shrink-0" />
                        ) : (
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${planFeature === false ? 'text-gray-400' : 'text-gray-700'}`}>
                          {feature}
                          {typeof planFeature === 'string' && planFeature !== 'true' && (
                            <span className="text-green-600 font-medium ml-1">({planFeature})</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-green-600 text-gray-900 hover:text-white border border-gray-200 hover:border-green-600'
                  }`}
                >
                  {plan.popular ? 'Chọn gói này' : 'Bắt đầu ngay'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-green-600">✓</span>
            <span className="font-medium text-gray-900">Đảm bảo hoàn tiền 14 ngày</span>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Không hài lòng? Chúng tôi hoàn tiền 100% trong 14 ngày đầu tiên, không cần lý do.
          </p>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-8">
          <a 
            href="#faq" 
            className="text-green-600 hover:text-green-700 font-medium hover:underline"
          >
            Có câu hỏi? Xem FAQ →
          </a>
        </div>
      </div>
    </section>
  );
}
import { ZaloCta, ContactCard } from '@/components/shared';
import { CONTACT_INFO, ZALO_URL } from '@/lib/constants/yoga-constants';

export default function ContactInfoSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Thông tin liên hệ
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn. Hãy chọn cách liên hệ thuận tiện nhất!
              </p>
            </div>

            {/* Zalo - Primary Contact */}
            <ContactCard
              icon="💬"
              title="Chat Zalo (Khuyến khích)"
              description="Cách tốt nhất để liên hệ và được tư vấn trực tiếp về lớp học phù hợp."
              highlighted={true}
            >
              <ZaloCta text="💬 Chat Zalo ngay" fullWidth />
            </ContactCard>

            {/* Phone */}
            <ContactCard
              icon="📞"
              title="Điện thoại"
              description="Gọi trực tiếp để được tư vấn nhanh chóng"
            >
              <a 
                href={CONTACT_INFO.phoneHref}
                className="text-green-600 hover:text-green-700 font-medium text-lg"
              >
                {CONTACT_INFO.phone}
              </a>
            </ContactCard>

            {/* Address */}
            <ContactCard
              icon="📍"
              title="Địa chỉ"
              description="Đến trực tiếp để tham quan không gian và trải nghiệm"
            >
              <p className="text-gray-800 font-medium">
                {CONTACT_INFO.address.name}<br />
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.country}
              </p>
            </ContactCard>

            {/* Teaching Hours */}
            <ContactCard
              icon="⏰"
              title="Giờ dạy"
              description=""
            >
              <div className="text-gray-600 space-y-1">
                <p>{CONTACT_INFO.hours.weekdays}</p>
                <p>{CONTACT_INFO.hours.weekends}</p>
                <p className="text-green-600 font-medium text-sm mt-2">
                  {CONTACT_INFO.hours.note}
                </p>
              </div>
            </ContactCard>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vị trí Gác Yoga
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chúng tôi nằm tại vị trí thuận tiện, dễ dàng di chuyển trong Bình Định.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">Google Map</p>
                <p className="text-sm">Gác Yoga, Bình Định</p>
                <p className="text-xs mt-2 text-gray-400">
                  Bản đồ sẽ được nhúng tại đây
                </p>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Hướng dẫn đường đi
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Từ trung tâm thành phố: [Hướng dẫn cụ thể]</li>
                <li>• Gần các địa điểm: [Landmark gần đó]</li>
                <li>• Có chỗ đậu xe: [Thông tin parking]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
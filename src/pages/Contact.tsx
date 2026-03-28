import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-20"
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Liên hệ với chúng tôi</h1>
        <p className="text-xl text-gray-500">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại lời nhắn hoặc liên hệ trực tiếp qua các kênh dưới đây.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Điện thoại / Zalo</h3>
                <p className="text-gray-500">0123 456 789</p>
                <p className="text-gray-500">0987 654 321</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-500">contact@paopao.vn</p>
                <p className="text-gray-500">support@paopao.vn</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Địa chỉ</h3>
                <p className="text-gray-500">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
            <img
              src="https://picsum.photos/seed/map/800/600"
              alt="Map"
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Xem trên Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="0123 456 789"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Email (không bắt buộc)</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Lời nhắn</label>
              <textarea
                rows={6}
                placeholder="Bạn cần chúng tôi hỗ trợ gì?"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" />
              Gửi lời nhắn
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

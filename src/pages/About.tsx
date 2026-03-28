import { motion } from 'motion/react';
import { Heart, Users, Award, Store } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Hero */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-6"
            >
              Câu chuyện của <span className="text-primary">PaoPao</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed"
            >
              Từ một cửa hàng nhỏ tại địa phương, chúng tôi đã vươn mình trở thành điểm đến tin cậy cho hàng ngàn gia đình Việt.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/about/800/1000"
              alt="Our Story"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl text-white hidden md:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium opacity-80">Năm kinh nghiệm</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Xây dựng niềm tin từ những điều nhỏ nhất
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Tạp Hóa PaoPao được thành lập với mong muốn mang đến những sản phẩm gia dụng và tiêu dùng chất lượng nhất với mức giá mà bất kỳ ai cũng có thể tiếp cận được.
              </p>
              <p>
                Chúng tôi tin rằng, một ngôi nhà hạnh phúc bắt đầu từ những tiện ích nhỏ nhất. Đó là lý do tại sao mỗi sản phẩm tại PaoPao đều được chúng tôi lựa chọn và kiểm tra vô cùng khắt khe trước khi trao đến tay khách hàng.
              </p>
              <p>
                Với phương châm "Khách hàng là người thân", chúng tôi không chỉ bán sản phẩm, mà còn trao đi sự an tâm và niềm vui trong cuộc sống hàng ngày của bạn.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-900">Tận tâm</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-900">Chất lượng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Khách hàng', value: '50,000+' },
              { label: 'Sản phẩm', value: '2,000+' },
              { label: 'Cửa hàng', value: '05' },
              { label: 'Đánh giá 5 sao', value: '98%' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

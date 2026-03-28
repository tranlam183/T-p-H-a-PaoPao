import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, Home as HomeIcon, Zap, ShoppingBag, Gift } from 'lucide-react';
import { PRODUCTS, CATEGORIES, REVIEWS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  Home: HomeIcon,
  Zap: Zap,
  ShoppingBag: ShoppingBag,
  Gift: Gift,
};

export default function Home() {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20 pb-20"
    >
      {/* Hero Banner */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/shop/1920/1080?blur=4"
            alt="Banner"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-primary px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Chào mừng bạn đến với PaoPao
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tiện ích cho <span className="text-primary">mọi nhà</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Khám phá bộ sưu tập đồ gia dụng, điện tử nhỏ và hàng tiêu dùng chất lượng cao với mức giá cực kỳ ưu đãi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 group"
              >
                Mua sắm ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Chất lượng đảm bảo', desc: '100% sản phẩm chính hãng, kiểm tra kỹ lưỡng trước khi giao.' },
            { icon: Truck, title: 'Giao hàng nhanh', desc: 'Hỗ trợ giao hàng siêu tốc trong khu vực nội thành.' },
            { icon: Clock, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ tư vấn nhiệt tình, sẵn sàng giải đáp mọi thắc mắc.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Danh mục sản phẩm</h2>
            <p className="text-gray-500">Tìm kiếm sản phẩm theo nhu cầu của bạn</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="group bg-white p-8 rounded-3xl border border-gray-100 text-center hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors mx-auto mb-4">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{cat.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sản phẩm bán chạy</h2>
            <p className="text-gray-500">Những sản phẩm được khách hàng tin dùng nhất</p>
          </div>
          <Link to="/products" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về PaoPao?</h2>
            <p className="text-gray-500">Sự hài lòng của khách hàng là động lực lớn nhất của chúng tôi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  {review.image ? (
                    <img src={review.image} alt={review.userName} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                      {review.userName[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900">{review.userName}</h4>
                    <span className="text-xs text-gray-400">Khách hàng thân thiết</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

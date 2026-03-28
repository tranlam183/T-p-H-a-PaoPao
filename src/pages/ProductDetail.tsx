import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { formatCurrency } from '../lib/utils';
import { ShoppingCart, CheckCircle2, Truck, ShieldCheck, ArrowLeft, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
        <Link to="/products" className="text-primary font-bold">Quay lại cửa hàng</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Quay lại cửa hàng
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 cursor-pointer hover:border-primary transition-colors">
                <img src={`https://picsum.photos/seed/${product.id}-${i}/200/200`} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-400">(4.8/5 - 120 đánh giá)</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <p className="text-gray-500 text-lg leading-relaxed">{product.shortBenefit}</p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-primary">{formatCurrency(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>

          {/* Why Buy Section */}
          <div className="bg-gray-50 p-6 rounded-3xl space-y-4">
            <h3 className="font-bold text-gray-900">Tại sao bạn nên mua?</h3>
            <ul className="space-y-3">
              {product.whyBuy.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-grow bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-primary/20">
              <ShoppingCart className="w-6 h-6" />
              Mua Ngay
            </button>
            <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all">
              Thêm vào giỏ
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="w-5 h-5 text-primary" />
              Giao hàng toàn quốc
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Bảo hành 12 tháng
            </div>
          </div>
        </motion.div>
      </div>

      {/* Description Section */}
      <div className="mt-20 pt-20 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Chi tiết sản phẩm</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>{product.description}</p>
            <p>Sản phẩm được Tạp Hóa PaoPao tuyển chọn kỹ lưỡng, đảm bảo chất lượng và độ bền cao nhất cho khách hàng.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

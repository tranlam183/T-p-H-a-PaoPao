import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="font-bold text-xl tracking-tight">
                Tạp Hóa <span className="text-primary">PaoPao</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chuyên cung cấp các sản phẩm gia dụng, điện tử nhỏ và hàng tiêu dùng tiện lợi cho mọi gia đình. Chất lượng hàng đầu, giá cả phải chăng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liên kết nhanh</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Danh mục</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/category/do-gia-dung" className="hover:text-primary transition-colors">Đồ gia dụng</Link></li>
              <li><Link to="/category/do-dien-tu-nho" className="hover:text-primary transition-colors">Đồ điện tử nhỏ</Link></li>
              <li><Link to="/category/hang-tieu-dung" className="hover:text-primary transition-colors">Hàng tiêu dùng</Link></li>
              <li><Link to="/category/combo-tien-loi" className="hover:text-primary transition-colors">Combo tiện lợi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Thông tin liên hệ</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@paopao.vn</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2024 Tạp Hóa PaoPao. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Product, Category, Review } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Đồ gia dụng', icon: 'Home', slug: 'do-gia-dung' },
  { id: '2', name: 'Đồ điện tử nhỏ', icon: 'Zap', slug: 'do-dien-tu-nho' },
  { id: '3', name: 'Hàng tiêu dùng', icon: 'ShoppingBag', slug: 'hang-tieu-dung' },
  { id: '4', name: 'Combo tiện lợi', icon: 'Gift', slug: 'combo-tien-loi' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ấm đun nước siêu tốc 1.8L',
    price: 150000,
    originalPrice: 200000,
    category: 'do-dien-tu-nho',
    image: 'https://picsum.photos/seed/kettle/600/600',
    shortBenefit: 'Đun sôi cực nhanh, tự động ngắt điện an toàn.',
    whyBuy: [
      'Tiết kiệm thời gian đun nấu',
      'Chất liệu inox cao cấp, bền bỉ',
      'Thiết kế hiện đại, sang trọng'
    ],
    description: 'Ấm đun nước siêu tốc dung tích 1.8L với công suất mạnh mẽ, giúp bạn có nước sôi chỉ trong vài phút. Sản phẩm có rơ-le tự ngắt khi nước sôi hoặc khi cạn nước, đảm bảo an toàn tuyệt đối cho người sử dụng.',
    isBestSeller: true,
  },
  {
    id: 'p2',
    name: 'Bộ lau nhà thông minh 360 độ',
    price: 250000,
    category: 'do-gia-dung',
    image: 'https://picsum.photos/seed/mop/600/600',
    shortBenefit: 'Lau sạch mọi ngóc ngách, vắt khô cực nhanh.',
    whyBuy: [
      'Không cần dùng tay vắt nước',
      'Bông lau thấm hút cực tốt',
      'Thân cây bằng inox chắc chắn'
    ],
    description: 'Bộ lau nhà thông minh với thiết kế xoay 360 độ linh hoạt, giúp bạn dễ dàng lau sạch gầm giường, gầm tủ. Thùng vắt bằng nhựa PP cao cấp, bền đẹp và dễ vệ sinh.',
    isBestSeller: true,
  },
  {
    id: 'p3',
    name: 'Nồi cơm điện mini 1.2L',
    price: 350000,
    originalPrice: 450000,
    category: 'do-dien-tu-nho',
    image: 'https://picsum.photos/seed/ricecooker/600/600',
    shortBenefit: 'Cơm chín đều, thơm ngon, phù hợp cho 1-2 người.',
    whyBuy: [
      'Kích thước nhỏ gọn, tiết kiệm không gian',
      'Lòng nồi chống dính cao cấp',
      'Tiết kiệm điện năng'
    ],
    description: 'Nồi cơm điện mini dung tích 1.2L là lựa chọn hoàn hảo cho sinh viên hoặc gia đình nhỏ. Công nghệ nấu 3D giúp hạt cơm chín đều từ mọi phía, giữ trọn hương vị thơm ngon.',
  },
  {
    id: 'p4',
    name: 'Combo 5 chai nước rửa chén 750ml',
    price: 120000,
    originalPrice: 150000,
    category: 'combo-tien-loi',
    image: 'https://picsum.photos/seed/dishsoap/600/600',
    shortBenefit: 'Sạch bóng dầu mỡ, hương chanh thơm mát.',
    whyBuy: [
      'Mua combo tiết kiệm hơn mua lẻ',
      'An toàn cho da tay',
      'Dùng được lâu dài'
    ],
    description: 'Combo 5 chai nước rửa chén chiết xuất từ chanh tươi tự nhiên, giúp đánh bay mọi vết dầu mỡ cứng đầu trên bát đĩa. Công thức dịu nhẹ, không gây hại cho da tay.',
  },
  {
    id: 'p5',
    name: 'Máy sấy tóc công suất lớn 2200W',
    price: 180000,
    category: 'do-dien-tu-nho',
    image: 'https://picsum.photos/seed/hairdryer/600/600',
    shortBenefit: 'Sấy khô nhanh chóng, bảo vệ tóc khỏi hư tổn.',
    whyBuy: [
      'Nhiều chế độ sấy linh hoạt',
      'Thiết kế cầm tay gọn nhẹ',
      'Công suất mạnh mẽ'
    ],
    description: 'Máy sấy tóc với công suất 2200W giúp bạn làm khô tóc chỉ trong tích tắc. Tích hợp chế độ sấy mát giúp bảo vệ tóc khỏi tình trạng khô xơ do nhiệt độ cao.',
  },
  {
    id: 'p6',
    name: 'Khăn lau đa năng (Set 10 cái)',
    price: 45000,
    category: 'hang-tieu-dung',
    image: 'https://picsum.photos/seed/towels/600/600',
    shortBenefit: 'Thấm hút cực tốt, không để lại bụi vải.',
    whyBuy: [
      'Dùng được cho nhiều bề mặt khác nhau',
      'Dễ dàng giặt sạch và tái sử dụng',
      'Giá thành cực rẻ'
    ],
    description: 'Set 10 khăn lau đa năng làm từ sợi microfiber siêu mịn, giúp bạn lau sạch mọi vết bẩn trên bàn ghế, bếp, hay đồ điện tử mà không lo trầy xước.',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Chị Lan',
    rating: 5,
    comment: 'Hàng giao nhanh, đóng gói cẩn thận. Ấm đun nước dùng rất tốt!',
    image: 'https://picsum.photos/seed/review1/200/200',
  },
  {
    id: 'r2',
    userName: 'Anh Tuấn',
    rating: 4,
    comment: 'Nồi cơm điện mini rất xinh, nấu cơm ngon. Shop tư vấn nhiệt tình.',
    image: 'https://picsum.photos/seed/review2/200/200',
  },
  {
    id: 'r3',
    userName: 'Cô Hoa',
    rating: 5,
    comment: 'Combo nước rửa chén giá rẻ hơn siêu thị nhiều. Sẽ ủng hộ shop dài dài.',
  }
];

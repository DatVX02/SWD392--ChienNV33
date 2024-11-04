Cách chạy: 
- File Backend (milkstore-server): 
+ B1: cd .\milkstore-server\
+ B2: npm i 
+ B3: npm start

- File Frontend (BeBe-MilkStore):
+ B1: cd BeBe-MilkStore
+ B2: npm i
+ B3: npm run dev

* Chạy được chương trình tải nodejs. Link tải: https://nodejs.org/en
  
MilkStore.users

[{
  "_id": {
    "$oid": "6673e33b2c4a0fd0b09dc9c7"
  },
  "fullName": "staff1",
  "phone_number": "0234567412",
  "email": "staff1@gmail.com",
  "password": "$2b$10$SyoMkVN8qOJ7g6cgSA96FuMaZhi5ysaBL1XImxcPV5dnpX.XssDlS",
  "role": "Staff",
  "status": true,
  "createdAt": {
    "$date": "2024-06-20T08:07:23.612Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:21:46.394Z"
  },
  "__v": 0,
  "dob": {
    "$date": "2000-12-07T17:00:00.000Z"
  },
  "gender": "Male"
},
{
  "_id": {
    "$oid": "6673e3c82c4a0fd0b09dc9cb"
  },
  "fullName": "admin",
  "phone_number": "0123456789",
  "email": "admin@gmail.com",
  "password": "$2b$10$XSH0E7P.cpRJxLqCi0CcEO/wHxuvZ3ZBAUNNzW.hvRZWfoqm0BAOy",
  "role": "Admin",
  "status": true,
  "createdAt": {
    "$date": "2024-06-20T08:09:44.520Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T08:09:44.520Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6673e41d2c4a0fd0b09dc9cf"
  },
  "fullName": "user1",
  "phone_number": "0123456712",
  "email": "user1@gmail.com",
  "password": "$2b$10$8uIEH2Vn8IFST2UWTxzxme961MeS3h2c4VxxbpHoiPJ1gQcv/zp6u",
  "role": "Customer",
  "status": true,
  "createdAt": {
    "$date": "2024-06-20T08:11:09.688Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T08:11:09.688Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6686f1f4404fa8fa2201003a"
  },
  "fullName": "staff2",
  "phone_number": "0321456987",
  "email": "staff2@gmail.com",
  "password": "$2b$10$dxCOc06J7.JmxpU2SG5fLe.wyNsDxEUdFyJMUgbyIFsV0IaJPesli",
  "role": "Staff",
  "status": true,
  "createdAt": {
    "$date": "2024-07-04T19:03:16.233Z"
  },
  "updatedAt": {
    "$date": "2024-07-04T19:03:16.233Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "668a93c08ce18565ef578dd8"
  },
  "fullName": "user3",
  "phone_number": "0123695489",
  "email": "user3@gmail.com",
  "password": "$2b$10$byH5ZncodVnq6X7FwHAMceLfSgkXioD9KbIi5u4VAZjX9e7AHMCH2",
  "role": "Customer",
  "status": true,
  "createdAt": {
    "$date": "2024-07-07T13:10:24.430Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:10:24.430Z"
  },
  "__v": 0
}]

MilkStore.products

[{
  "_id": {
    "$oid": "6673e5b42c4a0fd0b09dc9e4"
  },
  "name": "NAN Optipro 2",
  "image": "uploads\\1718871476046.png",
  "regular_price": 432000,
  "sale_price": 418000,
  "brand": "Nan Optipro NESTLÉ 2 ",
  "description": "Hàm lượng đạm optipro giúp bé hấp thu tối đa.Lợi khuẩn Probiotic Bifidus BL tăng cường lợi khuẩn giúp đường ruột tiêu hóa tốt hơn.Chất xơ hòa tan FOS hạn chế tình trạng táo bón và tăng khả năng hấp thụ.Giàu DHA, ARA và các loại vitamin, khoáng chất giúp bé phát triển toàn diện thể chất và trí não.- Ưu điểm nổi bật:Vị sữa ngọt thanh dễ uống phù phợp với đối tượng trẻ chuyển từ sữa mẹ sang sữa công thức.Ngừa táo bón, phân mềm.Bổ sung đa dạng các loại dưỡng chất với hàm lượng phù hợp để trẻ phát triển tối ưu.Hỗ trợ tăng cân đều, tuy nhiên không tăng vượt trội.- Đối tượng sử dụng: Sữa Nan Optipro NESTLÉ 2 tốt cho trẻ từ 6 - 12 tháng tuổi.",
  "SKU": 1,
  "reviews": 0,
  "ratingBreakdown": {
    "fiveStar": 0,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  },
  "category": "Sữa bột",
  "available": 12,
  "stock": 12,
  "status": "Coming-Soon",
  "createdAt": {
    "$date": "2024-06-20T08:17:56.049Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T08:17:56.049Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6673e8282c4a0fd0b09dca13"
  },
  "name": "milo",
  "image": "uploads\\1718872104426.png",
  "regular_price": 18000,
  "sale_price": 12000,
  "brand": "Vina",
  "description": "sữa milo",
  "SKU": 11,
  "reviews": 0,
  "ratingBreakdown": {
    "fiveStar": 0,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  },
  "category": "sữa pha sẵn",
  "available": 200,
  "stock": 200,
  "status": "Coming-Soon",
  "createdAt": {
    "$date": "2024-06-20T08:28:24.431Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T08:28:24.431Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6674140f00af5a29211c2b78"
  },
  "name": "Sữa Non ILDONG Hàn Quốc số 2 90gr (New) cho bé hệ miễn dịch khỏe mạnh",
  "image": "uploads\\1718883343414.png",
  "regular_price": 217000,
  "sale_price": 199000,
  "brand": "ILDONG FOODIS    ",
  "description": "Sữa Non ILDONG số 2 dạng thanh 90g cho bé từ 1-9 tuổi là dòng sản phẩm sữa non được sản xuất bởi tập đoàn ILDONG nổi tiếng Hàn Quốc. Thành phần sữa non ILDONG 2 chứa nguồn dưỡng chất quan trọng vô cùng quý giá vì nó có chứa các kháng thể giúp bé có hệ miễn dịch khỏe mạnh, giúp bé phát triển toàn diện.\r\n\r\nThành phần chính của sữa non ILDONG Hàn Quốc số 2\r\n\r\nProtein sữa non cô đặc 25%, Dextrin, Glucose, Lactose, bột hỗn hợp Bifidos, Immuno A, Immuno G, Prebio Plus, Zinc Oxide, Chất bổ sung, Sucrose, aiabic gum, DL-alvatocopherol, tinh bột, axit citric, dầu MCT, vitamin D3, ethyl cellulose, bột chất béo chứa DHA.",
  "SKU": 153,
  "reviews": 0,
  "ratingBreakdown": {
    "fiveStar": 0,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  },
  "category": "Sữa bột công thức",
  "available": 12,
  "stock": 12,
  "status": "Coming-Soon",
  "createdAt": {
    "$date": "2024-06-20T11:35:43.419Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T11:35:43.419Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "668a94938ce18565ef578e10"
  },
  "name": "Hayoon Baby",
  "image": "uploads\\1720358035954.png",
  "regular_price": 560000,
  "sale_price": 256000,
  "brand": "Hayoon",
  "description": "Thành phần cấu tạo:\r\n\r\nSữa bột ít béo, Whey protein khử khoáng, Carbohydrat (Lactose, Dextrose, Maltodextrin), MCT, Acid alpha linolenic, Acid linoleic, Sữa non (IgG), Choline, DHA 10%, EPA 2%, L-Lysine HCl, Beta-glucan, Taurine, L-Carnitin, Myo-Inositol, Lactium, Chất xơ hoà tan (FOS), 2’FL HMO, NEOGOS P70, Enzyme (Protease, Amylase, Cellulase, Lipase, Lactase), Lactobacillus acidophilus (Probiotic), VITAMIN (Vitamin A, Vitamin D3, Vitamin K2 (MK7), Nutra C (Vitamin C), Thiamin, Riboflavin, Niacin, Vitamin B6, Vitamin B12, Acid pantothen- ic, Acid folic, Vitamin E, Biotin), KHOÁNG CHẤT (Tricanxi phosphate, Aquamin F, Phospho phosphate, Magnesi phosphate, Sắt III polymaltose, Kẽm gluconate, Mangan sulfat, Selen, Natri clorid, Natri selenit, Iod, Clorid, Kali iodid, Đồng sulfat). Hương sữa và hương vani tổng hợp dùng trong thực phẩm. Nguyên liệu sữa bột nhập khẩu từ New Zealand\r\n\r\nĐối tượng sử dụng:\r\n\r\nDành cho trẻ từ 0-12 tháng tuổi. TRẺ MỚI SINH KHI SINH MẸ BỊ MẤT SỮA, THIẾU SỮA HOẶC CHẤT LƯỢNG SỮA KHÔNG CAO – TRẺ CÓ HỆ TIÊU HÓA YẾU KÉM\r\n\r\nCông dụng:\r\n\r\nThay thế bữa ăn phụ hoặc bổ sung cho bữa ăn hàng ngày thiếu vi chất dinh dưỡng.\r\n– Giúp phát triển não bộ và thị giác\r\n– Cân bằng hệ vi sinh đường ruột, giảm táo bón\r\n– Tăng cường tiêu hóa, giúp trẻ hấp thu các chất dinh dưỡng",
  "SKU": 1256,
  "reviews": 0,
  "ratingBreakdown": {
    "fiveStar": 0,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  },
  "category": "Sữa công thức",
  "available": 30,
  "stock": 30,
  "status": "Coming-Soon",
  "createdAt": {
    "$date": "2024-07-07T13:13:55.957Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:13:55.957Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "66947b4b2cb34bb20fca5d33"
  },
  "name": "Sữa Similac Total Protection 1 400g ",
  "image": "uploads\\1721006923037.png",
  "regular_price": 150000,
  "sale_price": 120000,
  "brand": " Similac Total Protection",
  "description": "Tên sản phẩm\tSản phẩm dinh dưỡng công thức cho trẻ 0-6 tháng tuổi: Similac Total Protection 1\r\nThương hiệu\tSimilac\r\nXuất xứ thương hiệu\tHoa Kỳ\r\nSản xuất tại\tIreland\r\nTrọng lượng sản phẩm\t400g\r\nNhà sản xuất\tAbbott Ireland, Cootehill.\r\nHướng dẫn sử dụng\t. Sử dụng theo hướng dẫn của nhân viên y tế.\r\n. Khi pha, cần vệ sinh sạch sẽ, pha và bảo quản đúng cách.\r\n. Không tuân thủ các hướng dẫn này có thể sẽ gây ảnh hưởng không tốt cho sức khỏe của bé.\r\n. Các loại sản phẩm dinh dưỡng công thức đều không tuyệt đối vô trùng, do đó khi dùng cho trẻ sinh non hoặc trẻ có vấn đề về miễn dịch cần phải theo sự hướng dẫn và theo dõi của bác sĩ.\r\n. Nước dùng để pha phải được đun sôi 5 phút, để nguội và pha cẩn thận theo bảng hướng dẫn kèm theo.\r\n. Chỉ dùng muỗng có sẵn trong hộp để lường Similac® Total Protection 1.\r\n. Nếu pha hơn một lần dùng thì lượng pha dư phải giữ lạnh ở nhiệt độ 2–4 độ C và dùng trong vòng 24 giờ\r\n. Chỉ cho bé dùng tối đa trong vòng 1 giờ, sau đó phải đổ bỏ phần còn thừa. Không dùng cho trẻ bị bệnh galactosemia.\r\nHướng dẫn bảo quản\t. Bảo quản hộp chưa mở nắp ở nhiệt độ phòng.\r\n. Hộp đã mở nắp nên sử dụng trong vòng 3 tuần.\r\n. Đậy nắp và bảo quản nơi khô mát (không để trong tủ lạnh).\r\n﻿Sữa Similac Total Protection 1 là sản phẩm bổ sung dinh dưỡng hoặc thay thế bữa ăn cho trẻ 0-6 tháng tuổi bị thiếu hoặc mất sữa mẹ. Thuộc thương hiệu uy tín hàng đầu thế giới - Abbott, sản phẩm không chỉ an toàn, mà còn cung cấp đầy đủ dưỡng chất thiết yếu cho sự phát triển của con.\r\n\r\n﻿\r\nThành phần\r\n\r\nSữa không béo, lactose, DẦU THỰC VẬT (^chứa: dầu hướng dương giàu oleic, dầu đậu nành, dầu dừa), đạm whey cô đặc, phức hợp oligosaccharid (5 loại HMO: 2’-fucosyllactose, lacto-N-tetraose, 3-fucosyllactose, 6’-sialyllactose, 3’-sialyllactose), KHOÁNG CHẤT (kali citrat, canxi carbonat, kali hydroxit, magiê clorid, natri clorid, sắt sulfat, kẽm sulfat, đồng sulfat, canxi clorid, tricanxi phosphat, mangan sulfat, kali iodid, natri selenat), đạm whey thủy phân, acid arachidonic (AA), VITAMIN (acid ascorbic, ascorbyl palmitat, RRR-α- tocopheryl acetat◊, niacinamid, canxi d-pantothenat, retinyl palmitat, thiamin hydroclorid, pyridoxin hydroclorid, riboflavin, acid folic, phylloquinon, d-biotin, cholecalciferol, cyanocobalamin), chất nhũ hóa lecithin đậu nành, acid docosahexaenoic (DHA), myo-lnositol, cholin bitartrat, NUCLEOTID (cytidin 5’-monophosphat, dinatri guanosin 5’- monophosphat, dinatri uridin 5’-monophosphat, adenosin 5’-monophosphat), cholin clorid, taurin, L-tryptophan, Bifidobacterium lactis (BB- 12®)†, hỗn hợp tocopherol, L-carnitin, CAROTENOID (lutein, β-caroten)\r\n\r\n◊ Vitamin E tự nhiên\r\n\r\n† BB-12: thương hiệu của Chr. Hansen\r\n\r\n",
  "SKU": 526,
  "reviews": 0,
  "ratingBreakdown": {
    "fiveStar": 0,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  },
  "category": "sữa pha sẵn",
  "available": 50,
  "stock": 50,
  "status": "Coming-Soon",
  "createdAt": {
    "$date": "2024-07-15T01:28:43.043Z"
  },
  "updatedAt": {
    "$date": "2024-07-15T01:28:43.043Z"
  },
  "__v": 0
}]

MilkStore.orders

[{
  "_id": {
    "$oid": "6673e8f62c4a0fd0b09dca6c"
  },
  "userId": {
    "$oid": "6673e41d2c4a0fd0b09dc9cf"
  },
  "items": [
    {
      "productId": {
        "$oid": "6673e5b42c4a0fd0b09dc9e4"
      },
      "quantity": 3,
      "_id": {
        "$oid": "6673e85c2c4a0fd0b09dca1e"
      }
    },
    {
      "productId": {
        "$oid": "6673e8282c4a0fd0b09dca13"
      },
      "quantity": 4,
      "_id": {
        "$oid": "6673e8812c4a0fd0b09dca45"
      }
    }
  ],
  "voucherId": {
    "$oid": "6673e7c62c4a0fd0b09dca0d"
  },
  "total": 684000,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, ưgv3wgv, ưgvw3v, wwev"
  },
  "shippingMethod": "express",
  "paymentMethod": "vnpay",
  "status": "Cancelled",
  "createdAt": {
    "$date": "2024-06-20T08:31:50.151Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:21:18.618Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "667414e900af5a29211c2b9d"
  },
  "items": [
    {
      "productId": {
        "$oid": "6673e5b42c4a0fd0b09dc9e4"
      },
      "quantity": 1,
      "_id": {
        "$oid": "667414e900af5a29211c2b9e"
      }
    }
  ],
  "total": 432000,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, QÂC, cqQAC, wwev"
  },
  "shippingMethod": "standard",
  "paymentMethod": "cod",
  "status": "Processing",
  "createdAt": {
    "$date": "2024-06-20T11:39:21.727Z"
  },
  "updatedAt": {
    "$date": "2024-06-20T11:39:21.727Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6686f02f404fa8fa2200ffbc"
  },
  "items": [
    {
      "productId": {
        "$oid": "6673e8282c4a0fd0b09dca13"
      },
      "quantity": 1,
      "_id": {
        "$oid": "6686f02f404fa8fa2200ffbd"
      }
    }
  ],
  "total": 18000,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, ưgv3wgv, cqQAC, wwev"
  },
  "shippingMethod": "standard",
  "paymentMethod": "cod",
  "status": "Processing",
  "createdAt": {
    "$date": "2024-07-04T18:55:43.747Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:18:10.359Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6686f0e0404fa8fa22010005"
  },
  "items": [
    {
      "productId": {
        "$oid": "6673e5b42c4a0fd0b09dc9e4"
      },
      "quantity": 2,
      "_id": {
        "$oid": "6686f0e0404fa8fa22010006"
      }
    }
  ],
  "total": 864000,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, ưgv3wgv, ưgvw3v, wwev"
  },
  "shippingMethod": "standard",
  "paymentMethod": "vnpay",
  "status": "Shipped",
  "createdAt": {
    "$date": "2024-07-04T18:58:40.266Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:21:13.211Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "668a95aa8ce18565ef578e49"
  },
  "userId": {
    "$oid": "668a93c08ce18565ef578dd8"
  },
  "items": [
    {
      "productId": {
        "$oid": "6674140f00af5a29211c2b78"
      },
      "quantity": 4,
      "_id": {
        "$oid": "668a93d98ce18565ef578de0"
      }
    },
    {
      "productId": {
        "$oid": "668a94938ce18565ef578e10"
      },
      "quantity": 1,
      "_id": {
        "$oid": "668a94a58ce18565ef578e17"
      }
    }
  ],
  "voucherId": {
    "$oid": "668a950d8ce18565ef578e23"
  },
  "total": 714000,
  "shippingInfo": {
    "name": "Mai",
    "phone": "0972609914",
    "address": "12, QÂC, 1223, wwev"
  },
  "shippingMethod": "standard",
  "paymentMethod": "vnpay",
  "status": "Processing",
  "createdAt": {
    "$date": "2024-07-07T13:18:34.268Z"
  },
  "updatedAt": {
    "$date": "2024-07-07T13:20:11.481Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "66947c442cb34bb20fca5d94"
  },
  "userId": {
    "$oid": "668a93c08ce18565ef578dd8"
  },
  "items": [
    {
      "productId": {
        "$oid": "6674140f00af5a29211c2b78"
      },
      "quantity": 3,
      "_id": {
        "$oid": "66947be02cb34bb20fca5d44"
      }
    },
    {
      "productId": {
        "$oid": "66947b4b2cb34bb20fca5d33"
      },
      "quantity": 2,
      "_id": {
        "$oid": "66947bef2cb34bb20fca5d65"
      }
    }
  ],
  "total": 951000,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, Long Thạnh Mỹ, quận 9, wwev"
  },
  "shippingMethod": "standard",
  "paymentMethod": "vnpay",
  "status": "Shipped",
  "createdAt": {
    "$date": "2024-07-15T01:32:52.240Z"
  },
  "updatedAt": {
    "$date": "2024-07-15T01:34:18.549Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "66947c572cb34bb20fca5d9d"
  },
  "userId": {
    "$oid": "668a93c08ce18565ef578dd8"
  },
  "items": [],
  "total": 0,
  "shippingInfo": {
    "name": "Thành Nguyễn",
    "phone": "0972609914",
    "address": "12, Long Thạnh Mỹ, quận 9, wwev"
  },
  "shippingMethod": "express",
  "paymentMethod": "cod",
  "status": "Processing",
  "createdAt": {
    "$date": "2024-07-15T01:33:11.846Z"
  },
  "updatedAt": {
    "$date": "2024-07-15T01:33:11.846Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "66947cd32cb34bb20fca5df6"
  },
  "userId": {
    "$oid": "668a93c08ce18565ef578dd8"
  },
  "items": [
    {
      "productId": {
        "$oid": "6673e8282c4a0fd0b09dca13"
      },
      "quantity": 3,
      "_id": {
        "$oid": "66947cad2cb34bb20fca5de1"
      }
    }
  ],
  "voucherId": {
    "$oid": "66947bb72cb34bb20fca5d3a"
  },
  "total": 37800,
  "shippingInfo": {
    "name": "staff1",
    "phone": "234567412",
    "address": "12, Long Thạnh Mỹ, quận 9, wwev"
  },
  "shippingMethod": "express",
  "paymentMethod": "vnpay",
  "status": "Pending",
  "createdAt": {
    "$date": "2024-07-15T01:35:15.194Z"
  },
  "updatedAt": {
    "$date": "2024-07-15T01:35:15.194Z"
  },
  "__v": 0
}]

MilkStore.vouchers

[{
  "_id": {
    "$oid": "668a95378ce18565ef578e26"
  },
  "voucherCode": "giữa năm",
  "voucherName": "Siêu sale Giữa năm",
  "description": "Giảm giá ",
  "startDay": {
    "$date": "2024-07-05T00:00:00.000Z"
  },
  "endDay": {
    "$date": "2024-07-20T00:00:00.000Z"
  },
  "voucher_discount": 40,
  "__v": 0
},
{
  "_id": {
    "$oid": "668f33a0b9dad170742c7e9b"
  },
  "voucherCode": "Siêu sale tháng 7",
  "voucherName": "Siêu Sale tháng 7",
  "description": "Big Sale Tháng 7 với nhiều Ưu đãi",
  "startDay": {
    "$date": "2024-07-10T00:00:00.000Z"
  },
  "endDay": {
    "$date": "2024-07-19T00:00:00.000Z"
  },
  "voucher_discount": 20,
  "__v": 0
},
{
  "_id": {
    "$oid": "66947bb72cb34bb20fca5d3a"
  },
  "voucherCode": "Sale giữa Năm",
  "voucherName": "tháng 7-8",
  "description": "Sale giữa năm",
  "startDay": {
    "$date": "2024-07-15T00:00:00.000Z"
  },
  "endDay": {
    "$date": "2024-08-02T00:00:00.000Z"
  },
  "voucher_discount": 30,
  "__v": 0
}]



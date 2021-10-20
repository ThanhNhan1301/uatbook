const data = [
    {
        "name": "BÀI TẬP HÓA ĐẠI CƯƠNG",
        "sl1": "80",
        "sl2": "70",
        "g": "32,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "TOÁN CAO CẤP TẬP 1",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "RÈN LUYỆN KỸ NĂNG THỰC HÀNH TIẾNG VIỆT",
        "sl1": "75",
        "sl2": "65",
        "g": "42,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GT VĂN HỌC SO SÁNH",
        "sl1": "26",
        "sl2": "16",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "DẪN LUẬN NGÔN NGỮ HỌC",
        "sl1": "65",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "CƠ SỞ SINH THÁI HỌC",
        "sl1": "46",
        "sl2": "34",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT",
        "sl1": "90",
        "g": "21,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "VIRUT HỌC",
        "sl1": "28",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI CỔ ĐẠI",
        "sl1": "50",
        "sl2": "42",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "TUYẾN ĐIỂM DU LỊCH VIỆT NAM",
        "sl1": "24",
        "g": "120,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "NGỮ PHÁP VIỆT NAM",
        "sl1": "34",
        "sl2": "26",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "VĂN BẢN VÀ LK TIẾNG VIỆT",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "HỆ THỐNG LIÊN KẾT VĂN BẢN TIẾNG VIỆT",
        "sl1": "62",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "PHƯƠNG PHÁP DẠY HỌC TIẾNG VIỆT",
        "sl1": "70",
        "sl2": "37",
        "g": "32,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (1900-1954)",
        "sl1": "12",
        "g": "160,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "NĂNG LỰC GD CON CỦA CHA MẸ HỌC SINH THCS",
        "sl1": "44",
        "sl2": "38",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "BÀI TẬP CƠ SỞ KỸ THUẬT NHIỆT",
        "sl1": "80",
        "sl2": "63",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC - TẬP NĂM\r\nCÔNG NGHỆ VI SINH VÀ MÔI TRƯỜNG",
        "sl1": "54",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP 1",
        "sl1": "26",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (NỬA THẾ KỶ XVIII - HẾT THẾ KỶ XIX)",
        "sl1": "10",
        "g": "240,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TOÀN TẬP",
        "sl1": "8",
        "g": "350,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "TIẾNG VIỆT THỰC HÀNH",
        "sl1": "52",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "GIẢI TÍCH TRÊN ĐA TẠP",
        "sl1": "60",
        "sl2": "41",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP T1",
        "sl2": "19",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "VĂN HỌC PHƯƠNG TÂY",
        "sl1": "60",
        "sl2": "50",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 2",
        "sl1": "80",
        "g": "20,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "BÀI TẬP HÌNH HỌC HOẠ HÌNH",
        "g": "24,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "BÀI TẬP ĐẠI SỐ ĐẠI CƯƠNG",
        "sl1": "68",
        "sl2": "48",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "BÀI TẬP SỐ HỌC",
        "sl1": "80",
        "sl2": "77",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TÔN GIÁO HỌC",
        "sl1": "46",
        "sl2": "38",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "ĐẠI SỐ ĐẠI CƯƠNG",
        "sl1": "108",
        "sl2": "66",
        "g": "28,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TRẮC NGHIỆM VẬT LÝ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "THỐNG KÊ VÀ ỨNG DỤNG",
        "sl1": "72",
        "sl2": "32",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "XÁC SUẤT THỐNG KÊ",
        "sl1": "40",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "CƠ SỞ ĐẠI SỐ TUYẾN TÍNH",
        "sl1": "54",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 2",
        "sl1": "80",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 2",
        "sl1": "80",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "TUYỂN TẬP BÀI TẬP PHÂN TÍCH VI PHÂN",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "BÀI TẬP KỸ THUẬT ĐIỆN TỬ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT AN TOÀN HỆ THỐNG LẠNH",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "THÔNG GIÓ VÀ KỸ THUẬT XỬ LÝ KHÍ THẢI",
        "sl1": "40",
        "sl2": "38",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "DẠY NGHỀ SỬA CHỮA TỦ LẠNH VÀ MÁY ĐIỀU HOÀ DÂN DỤNG",
        "sl1": "46",
        "sl2": "41",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "NỀN VÀ MÓNG",
        "g": "72,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "THIẾT KẾ ĐƯỜNG Ô TÔ (TẬP MỘT)",
        "sl2": "24",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "GIÁO TRÌNH TIẾN HOÁ",
        "sl1": "48",
        "sl2": "38",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "BÀI TẬP VẼ KỸ THUẬT CƠ KHÍ - TẬP 2",
        "sl1": "80",
        "sl2": "56",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "TỪ TRÁI NGHĨA TIẾNG VIỆT (SÁCH CHUYÊN KHẢO)",
        "sl1": "40",
        "sl2": "32",
        "g": "120,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GT THIẾT KẾ HỆ THỐNG ĐIỀU HÒA KHÔNG KHÍ",
        "sl1": "40",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "GIÁO TRÌNH KHÍ CỤ ĐIỆN",
        "sl1": "44",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "HÌNH HỌC HỌA HÌNH T1",
        "sl1": "58",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG\r\n(TẬP HAI: ĐIỆN TỬ DAO ĐỘNG VÀ SÓNG)",
        "sl1": "16",
        "g": "115,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "GT PHƯƠNG PHÁP LUẬN NGHIÊN CỨU KHOA HỌC",
        "sl1": "56",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "HÓA HỌC ĐẠI CƯƠNG",
        "sl1": "50",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP 1\r\nCƠ, NHIỆT, ĐIỆN, DAO ĐỘNG, SÓNG",
        "sl1": "30",
        "g": "47,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "PHONG CÁCH HỌC TIẾNG VIỆT",
        "sl1": "62",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP BA:\r\nCHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "sl1": "65",
        "g": "47,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "LỊCH SỬ VĂN MINH THẾ GIỚI",
        "sl1": "44",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TOÁN CAO CẤP TẬP HAI: GIẢI TÍCH TOÁN HỌC\r\nDÙNG CHO SINH VIÊN CÁC NGÀNH KINH TẾ VÀ QUẢN TRỊ KINH DOANH",
        "sl1": "52",
        "sl2": "35",
        "g": "36,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GIÁO TRÌNH TOÁN HỌC CAO CẤP\r\nDÙNG CHO SINH VIÊN CÁC TRƯỜNG CAO ĐẲNG",
        "sl2": "50",
        "g": "46,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "sl2": "36",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "PHƯƠNG PHÁP TÍNH",
        "sl1": "150",
        "sl2": "145",
        "g": "22,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI CẬN ĐẠI",
        "sl1": "22",
        "g": "150,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GT ĐỊA LÝ KT - XH THẾ GIỚI",
        "sl1": "46",
        "g": "42,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "ĐẠI CƯƠNG NGÔN NGỮ HỌC",
        "sl1": "80",
        "g": "58,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM - TẬP 3",
        "sl1": "36",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "VĂN HỌC NGA TRONG NHÀ TRƯỜNG",
        "sl1": "46",
        "g": "36,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CƠ HỌC TẬP HAI - ĐỘNG LỰC HỌC",
        "sl1": "120",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "QUY HOẠCH DU LỊCH",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GIÁO TRÌNH DU LỊCH VĂN HÓA\r\nNHỮNG VẤN ĐỀ LÝ LUẬN VÀ NGHIỆP VỤ",
        "sl1": "50",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TOÀN TẬP",
        "sl1": "8",
        "g": "350,000 ",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM T2",
        "sl1": "32",
        "g": "95,000 ",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "LỊCH SỬ VĂN HỌC TRUNG QUỐC TẬP 2",
        "sl1": "14",
        "g": "79,000 ",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "NGỮ PHÁP TIẾNG VIỆT TẬP MỘT",
        "sl1": "100",
        "sl2": "71",
        "g": "30,000 ",
        "vt1": "KH",
        "vt2": "XD",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HÊ DẪN ĐỘNG CƠ KHÍ TẬP 2",
        "sl1": "40",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "BT VẬT LÝ ĐẠI CƯƠNG T1: CƠ NHIỆT",
        "sl1": "100",
        "g": "35,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "PHƯƠNG PHÁP LUẬN VÀ PHƯƠNG PHÁP NGHIÊN \r\nCỨU NGÔN NGỮ",
        "sl1": "19",
        "g": "160,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "NGỮ PHÁP TIẾNG VIỆT TẬP 2",
        "sl1": "100",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ CHÍNH TRỊ\r\n(DÙNG TRONG CÁC TRƯỜNG, LỚP TRUNG CẤP KINH TẾ)",
        "sl2": "75",
        "g": "27,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH TẬP HAI\r\n(DÙNG CHO HỌC SINH CÁC TRƯỜNG TRUNG CẤP CHUYÊN NGHIỆP)",
        "sl1": "80",
        "sl2": "160",
        "g": "20,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT",
        "sl1": "90",
        "sl2": "180",
        "g": "21,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TUYỂN TẬP CÁC BÀI TẬP VẬT LÝ ĐẠI CƯƠNG",
        "sl1": "26",
        "g": "100,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TOÁN HỌC CAO CẤP - TẬP BA \r\nCHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "sl1": "50",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HÊ DẪN ĐỘNG CƠ KHÍ TẬP 1",
        "sl1": "40",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "VẼ KỸ THUẬT CƠ KHÍ - T1",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GT KỸ THUẬT LẠNH CĂN BẢN\r\n(DÙNG TRONG CÁC TRƯỜNG ĐÀO TẠO HỆ ĐẠI HỌC KỸ THUẬT ĐIỆN)",
        "sl1": "23",
        "sl2": "15",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 2",
        "sl1": "80",
        "g": "20,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "BỆNH HỌC CƠ SỞ (DÙNG CHO ĐT)",
        "sl1": "48",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "ĐỘNG VẬT HỌC CÓ XƯƠNG SỐNG",
        "sl1": "30",
        "sl2": "21",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "CƠ HỌC TẬP MỘT TĨNH HỌC VÀ ĐỘNG HỌC",
        "sl1": "85",
        "g": "28,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "GT CON NGƯỜI VÀ MÔI TRƯỜNG",
        "sl1": "35",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "VĂN HỌC PHƯƠNG TÂY",
        "sl1": "60",
        "sl2": "51",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HỆ DẪN ĐỘNG CƠ KHÍ TẬP 2",
        "sl1": "40",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "BƠM NHIỆT",
        "sl1": "50",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "CẤU TẠO NGUYÊN TỬ VÀ LIÊN KẾT HÓA HỌC TẬP 2",
        "sl1": "22",
        "g": "105,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "SỨC BỀN VẬT LIỆU TẬP HAI",
        "sl1": "32",
        "sl2": "27",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "ĐỘNG VẬT HỌC KHÔNG XƯƠNG SỐNG",
        "sl1": "24",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "CK",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG\r\n(TẬP BA: QUANG HỌC VÀ VẬT LÝ LƯỢNG TỬ)",
        "sl1": "18",
        "g": "101,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GT VŨ KHÍ BỘ BINH VÀ KT ỨNG DỤNG",
        "sl1": "18",
        "g": "141,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GIÁO TRÌNH ĐƯỜNG LỐI QUÂN SỰ",
        "sl1": "68",
        "g": "41,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO XI MĂNG, BÊ TÔNG, BÊ TÔNG \r\nCỐT THÉP VÀ VỮA XÂY DỰNG",
        "sl1": "44",
        "g": "28,500 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "PHẪU THUẬT TRONG MIỆNG - TẬP 1",
        "sl1": "56",
        "sl2": "41",
        "g": "82,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP 2",
        "sl1": "50",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GIÁO TRÌNH ĐỘNG VẬT HỌC",
        "sl1": "38",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GIÁO TRÌNH ĐỊA HÌNH QUÂN SỰ",
        "sl1": "100",
        "g": "25,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GT ĐIỀU LỆNH QUẢN LÝ BỘ ĐỘI VÀ ĐIỀU LỆNH ĐỘI NGŨ",
        "sl1": "44",
        "g": "60,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TOÁN RỜI RẠC ỨNG DỤNG TRONG TIN HỌC",
        "sl1": "30",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 3",
        "sl1": "26",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC - TẬP HAI\r\nCÔNG NGHỆ SINH HỌC TẾ BÀO",
        "sl1": "56",
        "sl2": "50",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TOÁN HỌC CAO CẤP T1",
        "sl1": "50",
        "g": "46,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "GT PHƯƠNG PHÁP LUẬN NGHIÊN CỨU KHOA HỌC",
        "sl1": "56",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "SỔ TAY CƠ ĐIỆN TỬ",
        "sl1": "24",
        "g": "230,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "SINH LÝ HỌC DINH DƯỠNG Ở THỰC VẬT",
        "sl1": "40",
        "sl2": "32",
        "g": "100,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP HAI: GIẢI TÍCH",
        "sl1": "35",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "TOÁN HỌC CAO CẤP - TẬP HAI GIẢI TÍCH",
        "sl1": "30",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GT XD, BV CHỦ QUYỀN LÃNH THỔ, BIÊN GIỚI QUỐC \r\nGIA VÀ BIỂN ĐẢO VN",
        "sl1": "70",
        "g": "34,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GIÁO TRÌNH HỌC THUYẾT MÁC-LÊNIN, TƯ TƯỞNG\r\nHCM VỀ CHIẾN TRANH VÀ BẢO VỆ TỔ QUỐC",
        "sl1": "90",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "KỸ THUẬT ĐIỆN",
        "sl1": "56",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ KIM LOẠI",
        "sl1": "32",
        "sl2": "24",
        "g": "113,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "HÓA HỌC VÔ CƠ NÂNG CAO TẬP 1 - LÝ THUYẾT ĐẠI \r\nCƯƠNG VỀ HÓA HỌC",
        "sl1": "24",
        "g": "225,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP 1 - CƠ NHIỆT",
        "sl1": "80",
        "sl2": "54",
        "g": "40,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "HÓA SINH HỌC",
        "sl1": "34",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "BT TOÁN CAO CẤP - TẬP 1",
        "sl1": "50",
        "g": "55,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH \r\nNGHỀ NGHIỆP GIÁO VIÊN THPT HẠNG 1",
        "sl1": "26",
        "sl2": "19",
        "g": "160,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "BT HÓA HỌC VÔ CƠ QUYỂN 2",
        "sl1": "16",
        "g": "240,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "BÀI TẬP VẼ KỸ THUẬT CƠ KHÍ - TẬP 1",
        "sl1": "54",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "HÓA HỌC VÔ CƠ CƠ BẢN - TẬP 2",
        "sl1": "40",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "GIÁO DỤC AN NINH - TRẬT TỰ",
        "sl1": "30",
        "sl2": "19",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP BA PHÉP GIẢI TÍCH NHIỀU\r\nBIẾN SỐ",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "GIÁO TRÌNH LÝ THUYẾT MẠCH",
        "sl1": "22",
        "g": "73,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "DUNG SAI VÀ LẮP GHÉP",
        "sl1": "80",
        "sl2": "50",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ - QUYỂN 1",
        "sl1": "32",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT SỬA CHỮA Ô TÔ",
        "sl1": "30",
        "g": "85,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "BT HÓA HỌC VÔ CƠ QUYỂN 2",
        "sl1": "16",
        "g": "240,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "BÀI TẬP HÓA HỌC HỮU CƠ",
        "sl1": "32",
        "sl2": "20",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "BÀI TẬP TOÁN CAO CẤP T2",
        "sl1": "76",
        "sl2": "51",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "PP DẠY HỌC TP VĂN CHƯƠNG TRONG NHÀ TRƯỜNG",
        "sl1": "32",
        "g": "100,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "VẼ KỸ THUẬT XÂY DỰNG",
        "sl1": "40",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "THAM VẤN TRƯỜNG HỌC",
        "sl1": "64",
        "g": "68,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "BÀI TẬP CƠ HỌC TẬP MỘT",
        "sl1": "54",
        "g": "44,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "HÓA HỌC VÔ CƠ NÂNG CAO TẬP BA - CÁC NGUYÊN TỐ\r\nCHUYỂN TIẾP",
        "sl1": "20",
        "g": "220,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13"
    },
    {
        "name": "BT GIÁO DỤC QUỐC PHÒNG AN NINH 10",
        "sl1": "154",
        "g": "10,500 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13"
    },
    {
        "name": "BÀI TẬP GIÁO DỤC QUỐC PHÒNG - AN NINH 12",
        "sl1": "125",
        "g": "11,500 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13"
    },
    {
        "name": "BT GIÁO DỤC QUỐC PHÒNG AN NINH 11",
        "sl1": "160",
        "g": "9,500 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13"
    },
    {
        "name": "CÁNH CỬA NHIỆM MÀU",
        "sl1": "80",
        "sl2": "44",
        "g": "100,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13.1"
    },
    {
        "name": "GIÁO TRÌNH GIẢI PHẪU, SINH LÝ NGƯỜI VÀ ĐỘNG VẬT",
        "sl1": "24",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13.2"
    },
    {
        "name": "ĐỘNG VẬT HỌC KHÔNG XƯƠNG SỐNG",
        "sl1": "26",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13.2"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 1",
        "sl1": "70",
        "g": "26,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C13.2"
    },
    {
        "name": "VẼ KỸ THUẬT CƠ KHÍ - T2",
        "sl1": "48",
        "g": "85,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "EMPOWER B1 PRE-INTERMEDIATE WORK BOOK WITH \r\nONLINE ACCESS",
        "sl1": "90",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "EMPOWER B1+ INTERMEDIATE WORK BOOK WITH \r\nONLINE ACCESS",
        "sl1": "100",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "SINH LÝ HỌC THỰC VẬT",
        "sl1": "26",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.1"
    },
    {
        "name": "SINH LÝ HỌC THỰC VẬT",
        "sl1": "40",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.1"
    },
    {
        "name": "HÓA SINH HỌC",
        "sl1": "34",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.1"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (THẾ KỶ X-NỬA ĐẦU THẾ KỶ XVIII)",
        "g": "200,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.1"
    },
    {
        "name": "SINH LÝ HỌC (DÙNG CHO DT CỬ NHÂN DD)",
        "sl1": "30",
        "g": "85,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.1"
    },
    {
        "name": "HÓA HỌC VÔ CƠ NÂNG CAO",
        "sl1": "22",
        "g": "220,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.2"
    },
    {
        "name": "THAM VẤN TRƯỜNG HỌC",
        "sl1": "64",
        "sl2": "47",
        "g": "68,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.2"
    },
    {
        "name": "GIẢI TÍCH VECTƠ",
        "sl1": "18",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.2"
    },
    {
        "name": "CẨM NANG GOLF - PHIÊN BẢN PAR",
        "sl1": "50",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.3"
    },
    {
        "name": "BÀI TẬP CƠ SỞ LÝ THUYẾT CÁC QUÁ TRÌNH HÓA HỌC",
        "sl1": "110",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.3"
    },
    {
        "name": "TUYẾN ĐIỂM DU LỊCH VIỆT NAM",
        "sl1": "24",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D1.T",
        "vt3": "TH",
        "vt4": "C14.3"
    },
    {
        "name": "GIÁO TRÌNH CHIẾN THUẬT BỘ BINH",
        "sl1": "45",
        "g": "63,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GIÁO TRÌNH CÔNG TÁC ĐẢNG CHÍNH TRỊ TRONG QUÂN\r\nĐỘI NHÂN DÂN VIỆT NAM",
        "sl1": "66",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "GT CÔNG TÁC QUỐC PHÒNG QUÂN SỰ ĐỊA PHƯƠNG",
        "sl1": "60",
        "g": "43,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "KHÔNG TÊN",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "VI KHUẨN Y HỌC",
        "sl1": "20",
        "g": "150,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "DINH DƯỠNG CỘNG ĐỒNG VÀ ATVS THỰC PHẨM",
        "sl1": "26",
        "g": "60,500 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "NHA KHOA CƠ SỞ - TẬP 2",
        "sl1": "30",
        "g": "160,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "NHA KHOA CƠ SỞ - T3: CHUẨN ĐOÁN HÌNH ẢNH",
        "sl1": "34",
        "g": "110,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "PHỤC HÌNH RĂNG CỐ ĐỊNH",
        "sl1": "38",
        "g": "140,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI TẬP 1",
        "sl1": "14",
        "g": "220,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "PT CÁ NHÂN VÀ TÍNH CHUYÊN NGHIỆP TRONG NHA KHOA",
        "sl1": "36",
        "g": "150,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "LÂM SÀNG BỆNH QUANH RĂNG & IMPLANT NHA KHOA T1",
        "sl1": "16",
        "g": "220,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "KÝ SINH TRÙNG THỰC HÀNH",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "LÃO NHA (SÁCH DÙNG CHO SV RĂNG HÀM MẶT)",
        "sl1": "48",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "KHOA HỌC HÀNH VI TRONG RĂNG HÀM MẶT",
        "sl1": "60",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "TỐI ƯU HÓA MÔI TRƯỜNG LÀM VIỆC TRONG RĂNG HÀM MẶT",
        "sl1": "50",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "THỰC HÀNH LÂM SÀNG NHA KHOA TRẺ EM",
        "sl1": "38",
        "g": "140,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "MÔ PHÔI RĂNG HÀM MẶT",
        "sl1": "44",
        "sl2": "46",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI - TẬP 3",
        "sl1": "16",
        "g": "200,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "PHẨU THUẬT MIỆNG GÂY TÊ - NHỔ RĂNG - TẬP 1",
        "sl1": "36",
        "sl2": "29",
        "g": "82,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ - QUYỂN III",
        "sl1": "16",
        "g": "190,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CHỈ SỐ ĐẦU MẶT Ở MỘT SỐ LỨA TUỔI TRẺ EM VIỆT NAM",
        "sl1": "50",
        "g": "100,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "RĂNG TRẺ EM",
        "sl1": "32",
        "g": "180,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CHỮA RĂNG VÀ NỘI NHA - TẬP 1 \r\n(DÙNG CHO SV RĂNG HÀM MẶT)",
        "sl1": "65",
        "g": "1,000,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CHỮA RĂNG VÀ NỘI NHA - TẬP 2 NỘI NHA LÂM SÀNG\r\n(DÙNG CHO SV RĂNG HÀM MẶT)",
        "sl1": "65",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "CHẨN ĐOÁN ĐÁI THÁO ĐƯỜNG & ĐIỀU TRỊ",
        "sl1": "16",
        "g": "160,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "NHA KHOA CƠ SỞ (TẬP 1)\r\nNHA KHOA MÔ PHỎNG THUỐC VÀ VẬT LIỆU NHA KHOA \r\n(DÙNG CHO SV RĂNG HÀM MẶT)",
        "sl1": "40",
        "g": "115,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "SINH HỌC PHÂN TỬ",
        "sl1": "50",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "Y PHÁP HỌC",
        "sl1": "20",
        "g": "123,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "NGHĨA HỌC VIỆT NGỮ",
        "sl1": "42",
        "sl2": "34",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "CÔNG TÁC XH VỚI GĐ, CỘNG ĐỒNG VÀ HT NHÀ TRƯỜNG",
        "sl1": "86",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "RĂNG TRẺ EM (SÁCH DÙNG CHO SV RĂNG HÀM MẶT)",
        "sl1": "26",
        "g": "210,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "SÂU RĂNG VÀ CÁC BIẾN CHỨNG (Dùng cho sinh viên chuyên khoa \r\nvà học viên sau đại học)",
        "sl1": "48",
        "g": "52,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "Y PHÁP HỌC",
        "sl1": "20",
        "sl2": "15",
        "g": "123,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "GIÁO TRÌNH GIẢI PHẪU, SINH LÝ NGƯỜI VÀ ĐỘNG VẬT",
        "sl1": "24",
        "sl2": "15",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "THỰC VẬT DƯỢC",
        "sl1": "40",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "THỰC VẬT DƯỢC",
        "sl1": "40",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "THỰC VẬT DƯỢC",
        "sl1": "40",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "TIẾNG VIỆT 1 TẬP 1",
        "sl1": "54",
        "g": "30,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "BT HÓA HỌC VÔ CƠ QUYỂN 2",
        "sl1": "16",
        "g": "240,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA/TẬP 2",
        "sl1": "16",
        "g": "180,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA/TẬP 2",
        "sl1": "16",
        "g": "180,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA - T1\r\n(DÙNG CHO BÁC SĨ & HV SAU ĐH)",
        "sl1": "18",
        "g": "132,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "CÔNG TÁC XH VỚI HS SỬ DỤNG CHẤT GÂY NGHIỆN",
        "sl1": "60",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "CHỮA RĂNG VÀ NỘI NHA",
        "sl1": "65",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "BỆNH HỌC ĐẠI CƯƠNG (Dùng cho đào tạo bác sĩ và học viên sau đại học)",
        "sl1": "16",
        "sl2": "12",
        "g": "165,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "TRUYỀN MÁU HIỆN ĐẠI ỨNG DỤNG TRONG ĐIỀU TRỊ BỆNH",
        "sl1": "18",
        "g": "250,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI HS NGHIỆN INTERNET",
        "sl1": "66",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI VẤN ĐỀ BẠO LỰC HỌC ĐƯỜNG",
        "sl1": "66",
        "g": "66,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "NHÃN KHOA",
        "sl1": "58",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "CHĂM SÓC SỨC KHỎA TRẺ EM (Dùng cho ĐT cử nhân ngành điều dưỡng)",
        "sl1": "44",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ - QUYỂN III",
        "sl1": "16",
        "g": "190,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C13"
    },
    {
        "name": "ĐC CÔNG TÁC XÃ HỘI TRƯỜNG HỌC",
        "sl1": "80",
        "g": "60,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "CƠ HỌC KỸ THUẬT",
        "sl1": "30",
        "g": "110,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HỆ DẪN ĐỘNG CƠ KHÍ - TẬP 1",
        "sl1": "40",
        "g": "90,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "CÔNG TÁC XH VỚI HS CÓ VẤN ĐỀ SỨC KHỎE TÂM THẦN",
        "sl1": "56",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "EMPOWER B1 PRE-INTERMEDIATE STUDENT'S BOOK WITH \r\nONLINE ACCESS",
        "sl1": "58",
        "g": "250,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "EMPOWER A2 ELEMENTARY STUDENT'S BOOK WITH ONLINE \r\nACCESS",
        "sl1": "58",
        "g": "250,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "EMPOWER A2 WORK BOOK WITH ONLINE ACCESS",
        "sl1": "90",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH \r\nNGHỀ NGHIỆP GIÁO VIÊN TIỂU HỌC HẠNG II",
        "g": "145,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C16"
    },
    {
        "name": "EMPOWER A1 STARTER STUDENT'S BOOK WITH ONLINE ACCESS",
        "sl1": "65",
        "g": "250,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C16"
    },
    {
        "name": "EMPOWER A1 STARTER WORK BOOK WITH ONLINE ACCESS",
        "sl1": "90",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C16"
    },
    {
        "name": "EMPOWER B1+ INTERMEDIATE STUDENT'S BOOK WITH ONLINE \r\nACCESS",
        "sl1": "58",
        "g": "250,000 ",
        "vt1": "NG",
        "vt2": "D1.N",
        "vt3": "TH",
        "vt4": "C16"
    },
    {
        "name": "CHỈNH HÌNH RĂNG MẶT",
        "sl1": "80",
        "sl2": "50",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "PHỤC HÌNH RĂNG THÁO LẮP",
        "sl1": "30",
        "g": "150,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG (DÙNG CHO ĐT DƯỢC SĨ ĐH)",
        "sl1": "20",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "DA LIỄU HỌC",
        "sl1": "50",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "LÃO KHOA Y HỌC CỔ TRUYỀN",
        "sl1": "38",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "KIỂM NGHIỆM THUỐC (DÙNG CHO ĐÀO TẠO DƯỢC SĨ TRUNG CẤP)",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "NHA KHOA CỘNG ĐỘNG - TẬP 1",
        "sl1": "32",
        "sl2": "20",
        "g": "100,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "PHẪU THUẬT TRONG MIỆNG T2",
        "sl1": "56",
        "g": "102,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "BÀO CHẾ VÀ SINH DƯỢC HỌC TẬP 2",
        "sl1": "22",
        "sl2": "11",
        "g": "95,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "PHÁC ĐỒ CHẨN ĐOÁN VÀ ĐIỀU TRỊ CÁC BỆNH CƠ XƯƠNG KHỚP \r\nTHƯỜNG GẶP",
        "sl1": "73",
        "g": "60,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "KỸ NĂNG GIAO TIẾP VÀ THỰC HÀNH TỐT TẠI NHÀ THUỐC",
        "sl1": "36",
        "g": "62,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "BÀI TẬP XÁC SUẤT THỐNG KÊ",
        "sl1": "120",
        "sl2": "84",
        "g": "23,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "GIẢI PHẨU BỆNH",
        "sl1": "68",
        "sl2": "60",
        "g": "34,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "HĐGD NGHỀ P1: NGHỀ THÊU TAY 11",
        "sl1": "70",
        "g": "28,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "sl2": "34",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C1"
    },
    {
        "name": "CƠ SỞ VĂN HÓA VIỆT NAM",
        "sl1": "60",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "VẬT LIỆU XÂY DỰNG",
        "sl1": "60",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "GT. LÝ LUẬN VỀ NHÀ NƯỚC VÀ PHÁP LUẬT",
        "sl1": "32",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C2"
    },
    {
        "name": "HOẠT ĐỘNG GD NGHỀ PT: NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ TRỒNG RỪNG 11",
        "sl1": "140",
        "g": "20,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "GIẢI TÍCH HÀM",
        "sl1": "28",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C3"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO CHUẨN CHỨC DANH NGHỀ NGHIỆP \r\nGIÁO VIÊN THCS HẠNG II ",
        "sl1": "28",
        "g": "145,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "MỘT SỐ PHẢN ỨNG TRONG HÓA HỌC VÔ CƠ",
        "sl1": "26",
        "g": "110,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C4"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ THÊU TAY 11",
        "sl1": "100",
        "g": "32,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "HOẠT ĐỘNG GD NGHỀ PHỔ THÔNG NGHỀ: NUÔI CÁ 11",
        "sl1": "60",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "BT VẬT LÝ ĐẠI CƯƠNG - T3 QUANG HỌC VL LƯỢNG TỬ",
        "sl1": "90",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG T.3 - P.1 QUANG HỌC VẬT LÝ NT",
        "sl1": "80",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "HOẠT ĐỘNG GD NGGHỀ PT: NGHỀ TRỒNG RỪNG 11",
        "sl1": "140",
        "g": "20,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C5"
    },
    {
        "name": "DUNG SAI VÀ LẮP GHÉP",
        "sl1": "80",
        "sl2": "50",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG 2 (Dùng cho các trường đại học khối kỹ thuật công nghiệp)",
        "sl1": "56",
        "g": "60,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG\r\nNGHỀ SỬA CHỮA XE MÁY 11",
        "sl1": "60",
        "g": "40,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ THÊU TAY 11",
        "sl1": "70",
        "g": "28,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ THÊU TAY 11",
        "sl1": "70",
        "g": "28,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C6"
    },
    {
        "name": "TẠM NGƯNG THÙNG"
    },
    {
        "name": "VẤN ĐỀ TỪ TRONG TIẾNG VIỆT",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "KỊCH LEP TÔNXTÔI",
        "g": "54,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "TỪ VỰNG HỌC TIẾNG VIỆT",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "ĐỊA LÝ KINH TẾ - XÃ HỘI CHÂU Á",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "CHUYỆN VUI, CHUYỆN LẠ ĐÓ ĐÂY",
        "g": "31,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "TỪ VỰNG HỌC TIẾNG VIỆT",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "TRIẾT LÝ NHÂN SINH trong tục ngữ, ca dao VIỆT NAM",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "HỆ THỐNG LIÊN KẾT VĂN BẢN TIẾNG VIỆT",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "THI LUẬT THƠ LỤC BÁT TRONG TRUYỆN KIỀU",
        "g": "400,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "VĂN HỌC ẤN ĐỘ",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH VĂN HỌC NGA",
        "g": "67,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "MẤY VẤN ĐỀ VỀ TỪ VỰNG - NGỮ NGHĨA TIẾNG VIỆT HIỆN ĐẠI",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "ĐIỂN HAY TÍCH LẠ TRONG VĂN HỌC NHÀ TRƯỜNG",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "CƠ SỞ VĂN HÓA VIỆT NAM",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (NỬA CUỐI THẾ KỶ XVIII - HẾT THẾ KỶ XIX)",
        "g": "240,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP III",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP I",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (1900-1954)",
        "g": "160,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "NHẬP MÔN NGÔN NGỮ HỌC",
        "g": "84,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "NGỮ NGHĨA HỌC",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH MỸ HỌC CƠ SỞ",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH VĂN HỌC VIỆT NAM (Dành cho sinh viên Học viện Báo chí \r\nvà tuyên truyền)",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP II",
        "g": "95,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "PHONG CÁCH HỌC TIẾNG VIỆT HIỆN ĐẠI",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "LỊCH SỬ VĂN HỌC NGA",
        "g": "130,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TOÀN TẬP",
        "g": "350,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "LỊCH SỬ VĂN MINH THẾ GIỚI",
        "g": "120,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "ĐÁNH GIÁ TÀI NGUYÊN NƯỚC VIỆT NAM",
        "g": "29,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "GIÁO TRÌNH HOẠT ĐỘNG SỐNG VÀ TIẾN HÓA CỦA CÁC HỆ CƠ QUAN\r\nĐỘNG VẬT",
        "g": "95,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "GIÁO TRÌNH LUẬT DÂN SỰ VIỆT NAM TẬP HAI",
        "g": "44,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "CÁCH BIÊN SOẠN VÀ TRẢ LỜI CÂU HỎI TRẮC NGHIỆM MÔN HÓA \r\nHỌC Ở TRƯỜNG PHỔ THÔNG",
        "g": "16,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "400 BÀI TẬP HÓA HỌC TRUNG HỌC CƠ SỞ\r\n(THEO CHƯƠNG TRÌNH VÀ SÁCH GIÁO KHOA MỚI)",
        "g": "20,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP TRẮC NGHIỆM HÓA HỌC 12",
        "g": "31,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI HIỆN ĐẠI",
        "g": "130,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH VĂN HỌC TRUNG ĐẠI VIỆT NAM TẬP 1",
        "g": "46,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "VĂN BẢN VÀ LIÊN KẾT TRONG TIẾNG VIỆT",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH LỊCH SỬ VIỆT NAM TỪ 1945 ĐẾN NAY",
        "g": "200,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH DI TRUYỀN HỌC SINH VẬT NHÂN SƠ VÀ VIRUT",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC TẾ BÀO",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "LỐI SỐNG CÁC NHÓM DÂN CƯ",
        "g": "32,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "HÓA SINH HỌC các chất phân tử lớn trong hệ thống sống",
        "g": "57,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT KINH TẾ (DÀNH CHO SINH VIÊN CÁC \r\nTRƯỜNG ĐẠI HỌC, CAO ĐẲNG KHỐI KINH TẾ)",
        "g": "56,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "GIÁO TRÌNH LUẬT SỞ HỮU TRÍ TUỆ",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "BÀI TẬP KIỂM TOÁN (DÀNH CHO SINH VIÊN CÁC TRƯỜNG ĐẠI\r\nHỌC, CAO ĐẲNG KHỐI KINH TẾ)",
        "g": "36,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "GIÁO TRÌNH TOÁN HỌC CAO CẤP TẬP 2\r\n(DÙNG CHO SINH VIÊN CÁC TRƯỜNG CAO ĐẲNG)",
        "g": "35,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "QUẢN LÝ SẢN XUẤT VÀ TÁC NGHIỆP",
        "g": "36,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "CÔNG NGHỆ VI SINH",
        "g": "26,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.T"
    },
    {
        "name": "LỊCH SỬ VĂN MINH THẾ GIỚI",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "DẪN LUẬN NGÔN NGỮ HỌC",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "VĂN HỌC NHẬT BẢN TỪ KHỞI THỦY ĐẾN 1868",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "GIÁO TRÌNH TỘI PHẠM HỌC",
        "g": "32,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "GIÁO TRÌNH ĐỘNG VẬT HỌC",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC TẬP HAI CÔNG NGHỆ SINH HỌC TẾ BÀO",
        "g": "42,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC TẬP MỘT SINH HỌC PHÂN TỬ VÀ TẾ BÀO - \r\nCƠ SỞ KHOA HỌC CỦA CÔNG NGHỆ SINH HỌC",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "CƠ SỞ CÔNG NGHỆ VI SINH VẬT VÀ ỨNG DỤNG\r\nDÙNG CHO SINH VIÊN CÁC TRƯỜNG ĐẠI HỌC, CAO ĐẲNG CÓ LIÊN \r\nQUAN ĐẾN SINH HỌC, Y HỌC, NÔNG NGHIỆP",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "MARKETING TỚI KHÁCH HÀNG TỔ CHỨC (SÁCH CHUYÊN KHẢO)",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "NGOẠI KHOA THÚ Y",
        "g": "30,500 ",
        "vt1": "KH",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "K.3.N"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC TẬP BỐ\r\nCÔNG NGHỆ DI TRUYỀN",
        "g": "39,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT NHIỆT",
        "g": "26,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH TOÁN - TẬP 6 \r\nĐẠI SỐ 2 GIÁO TRÌNH VÀ 500 BÀI TẬP CÓ LỜI GIẢI",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP 1\r\n(DÙNG CHO SINH VIÊN CÁC TRƯỜNG CAO ĐẲNG)",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "TOÁN CAO CẤP TẬP MỘT ĐẠI SỐ TUYẾN TÍNH\r\n(DÙNG CHO SINH VIÊN CÁC NGÀNH KINH TẾ VÀ QUẢN TRỊ KD)",
        "g": "19,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH VECTƠ",
        "g": "68,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH TOÁN - TẬP 3 \r\nGIẢI TÍCH 3 GIÁO TRÌNH VÀ 500 BÀI TẬP CÓ LỜI GIẢI",
        "g": "76,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "LÝ THUYẾT XÁC SUẤT",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "BÀI TẬP TOÁN CAO CẤP TẬP BA\r\nPHÉP GIẢI TÍCH NHIỀU BIẾN SỐ",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT ĐẠI CƯƠNG",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "PHƯƠNG TRÌNH VI PHÂN\r\nDÙNG CHO SINH VIÊN CÁC TRƯỜNG KỸ THUẬT VÀ CÔNG NGHỆ",
        "g": "53,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIẢI TÍCH VECTƠ",
        "g": "120,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "MỞ ĐẦU VỀ LÝ THUYẾT XÁC SUẤT VÀ CÁC ỨNG DỤNG",
        "g": "27,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH VECTƠ",
        "g": "68,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "CƠ SỞ DỮ LIỆU SUY DIỄN",
        "g": "43,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH TOÁN - TẬP 4\r\nGIẢI TÍCH 4 GIÁO TRÌNH VÀ 500 BÀI TẬP CÓ LỜI GIẢI",
        "g": "71,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH TOÁN - TẬP 5\r\nĐẠI SỐ 1 GIÁO TRÌNH VÀ 600 BÀI TẬP CÓ LỜI GIẢI",
        "g": "125,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP BA CHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP MỘT\r\nĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "g": "37,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "PHƯƠNG PHÁP TÍNH",
        "g": "22,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIẢI TÍCH GIÁO TRÌNH LÝ THUYẾT VÀ BÀI TẬP CÓ HƯỚNG DẪN\r\nTẬP 1",
        "g": "59,000 ",
        "vt1": "KH",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT CẢM BIẾN\r\nDùng cho các trường đào tạo hệ Cao đẳng Nghề và Trung cấp Nghề",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ CNC",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT ĐIỆN\r\nSách dùng cho các trường đào tạo Hệ Trung cấp chuyên nghiệp",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "KỸ THUẬT SƠN ĐỒ GỖ",
        "g": "25,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT LẠNH CĂN BẢN\r\nDùng cho các trường đào tạo Hệ Đại học kỹ thuật điện",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "TUYỂN CHỌN VÀ HƯỚNG DẪN GIẢI BÀI TẬP HÌNH HỌC HỌA HÌNH",
        "g": "28,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "THIẾT KẾ ĐƯỜNG Ô TÔ TẬP HAI",
        "g": "65,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "THIẾT KẾ ĐƯỜNG Ô TÔ TẬP BỐN",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "SỨC BỀN VẬT LIỆU TẬP MỘT",
        "g": "47,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "NGUYÊN LÝ ĐỘNG CƠ ĐỐT TRONG",
        "g": "120,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH VẼ KỸ THUẬT\r\nSÁCH DÙNG CHO CÁC TRƯỜNG ĐÀO TẠO HỆ TRUNG CẤP CHUYÊN NGHIỆP",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "SỔ TAY CƠ ĐIỆN TỬ",
        "g": "230,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HỆ DẪN ĐỘNG CƠ KHÍ TẬP HAI",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH XỬ LÝ ẢNH",
        "g": "50,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "DẠY NGHỀ SỬA CHỮA TỦ LẠNH VÀ MÁY ĐIỀU HOÀ DÂN DỤNG",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT SỬA CHỮA Ô TÔ",
        "g": "85,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "GIÁO TRÌNH ĐIẸN TỬ CÔNG SUẤT",
        "g": "69,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HỆ DẪN ĐỘNG CƠ KHÍ TẬP HAI",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "BÀI TẬP HÌNH HỌC HOẠ HÌNH",
        "g": "40,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "NỀN VÀ MÓNG",
        "g": "72,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.1.N"
    },
    {
        "name": "DẠY NGHỀ SỬA CHỮA TỦ LẠNH VÀ MÁY ĐIỀU HOÀ DÂN DỤNG",
        "g": "70,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP CƠ HỌC KỸ THUẬT",
        "g": "80,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "KỸ THUẬT AN TOÀN VÀ BẢO HỘ LAO ĐỘNG",
        "g": "54,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "TỪ ĐIỂN THANH NIÊN VIỆT NAM (GIẢN YẾU)",
        "g": "500,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT SỬA CHỮA Ô TÔ, MÁY NỔ \r\nDÙNG CHO CÁC TRƯỜNG ĐÀO TẠO HỆ TRUNG CẤP CHUYÊN NGHIỆP",
        "g": "74,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "THIẾT KẾ CHI TIẾT MÁY",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "XE CHUYÊN DỤNG",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "THIẾT BỊ ĐIỀU KHIỂN KHẢ TRÌNH - PLC\r\n(DÙNG CHO SINH VIÊN HỆ CAO ĐẲNG VÀ ĐẠI HỌC)",
        "g": "19,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT ĐIỆN\r\nSách dùng cho các trường đào tạo Hệ Trung cấp chuyên nghiệp",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH VẼ KỸ THUẬT\r\nSÁCH DÙNG CHO CÁC TRƯỜNG ĐÀO TẠO HỆ TRUNG CẤP CHUYÊN NGHIỆP",
        "g": "45,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "TỰ ĐỘNG HÓA SẢN XUẤT",
        "g": "47,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT SỬA CHỮA Ô TÔ, MÁY NỔ",
        "g": "74,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT LẠNH CĂN BẢN\r\nDùng cho các trường đào tạo Hệ Đại học kỹ thuật điện",
        "g": "90,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "CỚ SỞ KỸ THUẬT ĐIỆN TỬ SỐ",
        "g": "68,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "HÓA HỌC HỮU CƠ TẬP 1",
        "g": "220,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "KỸ THUẬT LẠNH (CƠ SỞ VÀ ỨNG DỤNG)",
        "g": "160,000 ",
        "vt1": "KH",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP HAI ĐIỆN DAO ĐỘNG SÓNG\r\nDÙNG CHO CÁC TRƯỜNG ĐẠI HỌC KHỐI KỸ THUẬT CÔNG NGHIỆP",
        "g": "32,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "GIÁO TRÌNH THỐNG KÊ XÃ HỘI HỌC\r\nDÙNG CHO CÁC TRƯỜNG ĐẠI HỌC KHỐI XÃ HỘI VÀ NHÂN VĂN, CÁC TRƯỜNG CAO ĐẲNG",
        "g": "28,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "PHONG CÁCH HỌC TIẾNG VIỆT",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "CẤU TẠO PHÂN TỬ CÁC CHẤT VÔ CƠ\r\n(CHUYÊN ĐỀ BỒI DƯỠNG ĐẠI HỌC VÀ CAO HỌC VỀ HÓA VÔ CƠ LÝ THUYẾT)",
        "g": "85,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "ỨNG DỤNG TIN HỌC TRONG GIẢNG DẠY HÓA HỌC",
        "g": "38,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "HÓA HỌC VÔ CƠ CƠ BẢN - TẬP MỘT\r\nLÝ THUYẾT ĐẠI CƯƠNG VỀ HÓA HỌC",
        "g": "83,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 1",
        "g": "85,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG\r\nTẬP HAI: ĐIỆN, TỪ, DAO ĐỘNG VÀ SÓNG",
        "g": "115,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "CỚ SỞ LÝ THUYẾT CÁC PHẢN ỨNG HÓA HỌC",
        "g": "160,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.1.T"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 2",
        "g": "100,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG\r\nTẬP BA: QUANG HỌC VÀ VẬT LÝ LƯỢNG TỬ",
        "g": "101,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP MỘT: CƠ - NHIỆT",
        "g": "25,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP BA: QUANG HỌC - VẬT LÝ LƯỢNG TỬ",
        "g": "28,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "CƠ SỞ NGÔN NGỮ HỌC VÀ TIẾNG VIỆT",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP CƠ HỌC TẬP HAI ĐỘNG LỰC HỌC",
        "g": "36,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "CƠ HỌC TẬP HAI - ĐỘNG LỰC HỌC",
        "g": "25,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "BÀI TẬP CƠ HỌC TẬP MỘT\r\nTĨNH HỌC VÀ ĐỘNG HỌC",
        "g": "44,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.T"
    },
    {
        "name": "GIẢI THÍCH TỪ NGỮ GIÁO DỤC QUỐC PHÒNG - AN NINH\r\n(Tài liệu tham khảo môn Giáo dục Quốc phòng - An ninh dùng cho các trường Trung học phổ thông, Trung cấp chuyên nghiệp, Cao đẳng và Đại học)",
        "g": "75,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIẢNG VIÊN CHÍNH HẠNG II",
        "g": "195,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP 2\r\nQUANG HỌC - CƠ HỌC LƯỢNG TỬ - VẬT LÝ HẠT NHÂN",
        "g": "44,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP 1\r\nCƠ - NHIỆT - ĐIỆN - DAO ĐỘNG - SÓNG",
        "g": "47,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "LỊCH SỬ VẬT LÝ HỌC",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "PHÂN TÍCH LÝ - HÓA",
        "g": "48,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "THIÊN VĂN VẬT LÝ Astrophysics",
        "g": "55,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "DẪN LUẬN NGÔN NGỮ HỌC",
        "g": "60,000 ",
        "vt1": "KH",
        "vt2": "D4",
        "vt3": "L",
        "vt4": "K.2.N"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 3 CHẨN ĐOÁN HÌNH ẢNH\r\nDÙNG CHO SINH VIÊN RĂNG HÀM MẶT",
        "g": "110,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 1 NHA KHOA MÔ PHỎNG THUỐC VÀ VẬT LIỆU NHA KHOA\r\nDÙNG CHO SINH VIÊN RĂNG HÀM MẶT",
        "g": "115,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "KỸ NĂNG GIAO TIẾP VÀ THỰC HÀNH TỐT TẠI NHÀ THUỐC\r\n(DÙNG CHO ĐÀO TẠO DƯỢC SĨ VÀ HỌC VIÊN SAU ĐẠI HỌC)",
        "g": "62,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "DINH DƯỠNG CỘNG ĐỒNG VÀ AN TOÀN VỆ SINH THỰC PHẨM (DÙNG CHO ĐÀO TẠO CỬ NHÂN Y TẾ CỘNG ĐỒNG)",
        "g": "60,500 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "VI KHUẨN Y HỌC (DÙNG CHO ĐÀO TẠO BÁC SĨ VÀ HỌC VIÊN SAU ĐẠI HỌC)",
        "g": "150,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "GIẢI PHẨU SINH LÝ LIÊN QUAN ĐẾN GÂY MÊ HỒI SỨC (DÙNG CHO ĐÀO TẠO CỬ NHÂN ĐIỀU DƯỠNG GÂY MÊ HỒI SỨC)",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "CÂU HỎI LƯỢNG GIÁ CHĂM SÓC SỨC KHỎE TRẺ EM (DÙNG CHO ĐÀO TẠO HỆ ĐẠI HỌC ĐIỀU DƯỠNG)",
        "g": "85,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "DA LIỄU HỌC (DÙNG CHO ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "HÓA PHÂN TÍCH TẬP 2 (DÙNG CHO ĐÀO TẠO DƯỢC SĨ ĐẠI HỌC)",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "LÝ SINH (DÙNG CHO ĐÀO TẠO CỬ NHÂN ĐIỀU DƯỠNG)",
        "g": "44,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "SINH HỌC PHÂN TỬ (DÙNG CHO ĐÀO TẠO DƯỢC SĨ ĐẠI HỌC)",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "TAI MŨI HỌNG (DÙNG CHO ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "HÓA VÔ CƠ VÀ HỮU CƠ (SÁCH ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "HÓA PHÂN TÍCH TẬP 2 (DÙNG CHO ĐÀO TẠO DƯỢC SĨ ĐẠI HỌC)",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "CHẨN ĐOÁN VÀ ĐIỀU TRỊ CÁC BỆNH NGOẠI KHOA",
        "g": "500,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "TỪ ĐIỂN BÁCH KHOA Britannica",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.N"
    },
    {
        "name": "VỆ SINH PHÒNG BỆNH (DÙNG CHO CÁC TRƯỜNG TRUNG CẤP Y TẾ)",
        "g": "26,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.T"
    },
    {
        "name": "THỰC HÀNH LÂM SÀNG BỆNH LAO KẾT HỢP ĐÁI THÁO ĐƯỜNG (SÁCH CHUYÊN KHẢO)",
        "g": "40,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.T"
    },
    {
        "name": "TOÁN CAO CẤP (DÙNG CHO ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "g": "59,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.T"
    },
    {
        "name": "LÃO KHOA Y HỌC CỔ TRUYỀN (DÙNG CHO ĐÀO TẠO BÁC SĨ VÀ HỌC VIÊN SAU ĐẠI HỌC)",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.1.T"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC HỌC (DÙNG CHO ĐÀO TẠO GIÁO VIÊN, GIẢNG VIÊN GIÁO DỤC QUỐC PHÒNG VÀ AN NINH)",
        "g": "53,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.2.N"
    },
    {
        "name": "GIÁO TRÌNH HỌC THUYẾT MÁC-LÊNIN, TƯ TƯỞNG\r\nHCM VỀ CHIẾN TRANH VÀ BẢO VỆ TỔ QUỐC",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.2.N"
    },
    {
        "name": "GIÁO TRÌNH TÂM LÝ HỌC",
        "g": "62,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.2.N"
    },
    {
        "name": "GIÁO TRÌNH LÝ LUẬN VÀ PHƯƠNG PHÁP DẠY HỌC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH",
        "g": "97,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T2.2.N"
    },
    {
        "name": "ĐIỀU DƯỠNG NGOẠI I",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "UNG THƯ HỌC ĐẠI CƯƠNG",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "HƯỚNG DẪN CHẨN ĐOÁN VÀ GIÁM ĐỊNH BỆNH DA NGHỀ NGHIỆP",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "QUẢN LÝ ĐIỀU DƯỠNG",
        "g": "55,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "PHÁC ĐỒ CHẨN ĐOÁN VÀ ĐIỀU TRỊ CÁC BỆNH CƠ XƯƠNG KHỚP \r\nTHƯỜNG GẶP",
        "g": "60,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI TẬP 2 GIẢI PHẨU NGỰC - BỤNG",
        "g": "210,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI TẬP 1 GIẢI PHẨU HỌC ĐẠI CƯƠNG\r\nCHI TRÊN - CHI DƯỚI - ĐẦU - MẶT - CỔ",
        "g": "220,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "HÓA VÔ CƠ VÀ HỮU CƠ (SÁCH ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "NHÃN KHOA",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "PHỤC HÌNH RĂNG CỐ ĐỊNH",
        "g": "140,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "ĐIỀU DƯỠNG CƠ BẢN II",
        "g": "120,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "THỰC VẬT DƯỢC",
        "g": "85,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.N"
    },
    {
        "name": "DƯỢC LÝ HỌC TẬP 2",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.1.T"
    },
    {
        "name": "SỨC KHỎE SINH SẢN",
        "g": "26,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.T"
    },
    {
        "name": "ĐIỀU DƯỠNG SẢN PHỤ KHOA",
        "g": "51,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.T"
    },
    {
        "name": "ALCALOID NAPHTHYLISOQUINOLIN",
        "g": "44,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.T"
    },
    {
        "name": "GIÁO TRÌNH XÂY DỰNG, BẢO VỆ CHỦ QUYỀN LÃNH THỔ, BIÊN GIỚI QUỐC GIA VÀ BIỂN ĐẢO VIỆT NAM",
        "g": "34,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.T"
    },
    {
        "name": "GIÁO TRÌNH CÔNG TÁC QUỐC PHÒNG, QUÂN SỰ ĐỊA PHƯƠNG",
        "g": "43,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.T"
    },
    {
        "name": "NỘI KHOA - TIM MẠCH",
        "g": "150,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "BỆNH LÝ MẠCH MÁU CƠ BẢN",
        "g": "80,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH TẬP HAI\r\n(DÙNG CHO HỌC SINH CÁC TRƯỜNG TRUNG CẤP CHUYÊN NGHIỆP)",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "GIÁO TRÌNH CÔNG TÁC ĐẢNG, CÔNG TÁC CHÍNH TRỊ TRONG QUÂN ĐỘI NHÂN DÂN VIỆT NAM",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "GIÁO TRÌNH VŨ KHÍ BỘ BINH VÀ KỸ THUẬT SỬ DỤNG",
        "g": "141,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "GIÁO TRÌNH HIỂU BIẾT CHUNG VỀ QUÂN, BINH CHỦNG",
        "g": "54,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "TỪ ĐIỂN BÁCH KHOA Britannica",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "ĐIỀU DƯỠNG CƠ BẢN 1",
        "g": "52,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T3.2.N"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA TẬP 1",
        "g": "152,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "KỸ THUẬT MAY CƠ BẢN",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH CÁC HỆ THỐNG THÔNG TIN VÔ TUYẾN",
        "sl1": "46",
        "sl2": "26",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "ĐẠO LÝ UỐNG NƯỚC NHỚ NGUỒN CƠ SỞ TRIẾT HỌC VÀ GIÁ TRỊ TRONG LỊCH SỬ DÂN TỘC",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D2",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "DUNG SAI VÀ LẮP GHÉP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "VẼ KỸ THUẬT CƠ KHÍ - TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GA, DẦU VÀ CHẤT TẢI LẠNH - BẢNG VÀ ĐỒ THỊ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP HÌNH HỌC HOẠ HÌNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "KỸ THUẬT ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "TÀI LIỆU THAM KHẢO MÔN PHÁP LUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "VẬN HÀNH THIẾT BỊ LÒ HƠI VÀ TUABIN CỦA NHÀ MÁY NHIỆT ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CHI TIẾT MÁY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "NHIỆT ĐỘNG HỌC 2",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "KỸ THUẬT ĐIỆN TỬ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GA, DẦU VÀ CHẤT TẢI LẠNH - BẢNG VÀ ĐỒ THỊ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "TRANG BỊ ĐIỆN - ĐIỆN TỬ MÁY GIA CÔNG KIM LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH TIN HỌC VĂN PHÒNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH ACCESS VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "THỰC HÀNH SỬ DỤNG DREAMWEAVER CHO THIẾT KẾ WEBSITE",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH TIN HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "BÀI TẬP TIN HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH KHAI PHÁ DỮ LIỆU WEB",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH HỆ ĐIỀU HÀNH UNIX - LINUX",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH TRANG BỊ ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH CƠ KHÍ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "VẬT LIỆU XÂY DỰNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "VẼ KỸ THUẬT XÂY DỰNG",
        "g": "70,000 ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "TOÁN RỜI RẠC ỨNG DỤNG TRONG TIN HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH CẤU TRÚC MÁY TÍNH VÀ VI XỬ LÝ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "ỨNG DỤNG EXCEL TRONG GIẢI QUYẾT CÁC BÀI TOÁN KINH TẾ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH TIN HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH HƯỚNG DẪN SỬ DỤNG PHOTOSHOP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH CÀI ĐẶT VÀ ĐIỀU HÀNH MẠNG MÁY TÍNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH HỆ CÁC CHƯƠNG TRÌNH ỨNG DỤNG (WINDOWS, WORD, EXCEL)",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH THIẾT KẾ WEB",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "SỨC BỀN VẬT LIỆU LÝ THUYẾT VÀ BÀI TẬP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH NHIỆT ĐỘNG KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP HÌNH HỌC HOẠ HÌNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "SỨC BỀN VẬT LIỆU LÝ THUYẾT VÀ BÀI TẬP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "NỀN VÀ MÓNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "XE CHUYÊN DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH NHIỆT KỸ THUẬT CÔNG TRÌNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "HÌNH HỌC HỌA HÌNH TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "HÌNH HỌC HỌA HÌNH TẬP MỘT",
        "g": "55,000 ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI GIẢNG BẢNG TÍNH EXCEL",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "KỸ THUẬT AN TOÀN VÀ BẢO HỘ LAO ĐỘNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "KỸ THUẬT GIAO THÔNG - TẬP 1 - NGHIÊN CỨU VÀ ĐIỀU TRA GIAO THÔNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "KỸ THUẬT ĐIỆN TỬ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH THIẾT KẾ HỆ THỐNG ĐIỀU HÒA KHÔNG KHÍ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH ĐIỀU KHIỂN LOGIC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH LÝ THUYẾT ĐIỀU KHIỂN TỰ ĐỘNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH VẬT LIỆU XÂY DỰNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "XỬ LÝ SỐ TÍN HIỆU TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT SIÊU CAO TẦN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP NHIỆT ĐỘNG KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "MÔ PHỎNG SỐ VÀ ĐIỀU KHIỂN CÁC HỆ CƠ HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP HÌNH HỌC HOẠ HÌNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH ĐO LƯỜNG ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "KỸ THUẬT LẮP ĐẶT VÀ VẬN HÀNH TRẠM BIẾN ÁP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "XỬ LÝ SỐ TÍN HIỆU VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "421 MẠCH ĐIỆN - ỨNG DỤNG CỦA ĐỒNG HỒ ĐO ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "SỬA CHỮA ĐIỆN XÍ NGHIỆP - ĐIỆN TỬ CÔNG NGHIỆP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "NGUYÊN LÝ PHẦN CỨNG VÀ KỸ THUẬT GHÉP NỐI MÁY VI TÍNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT LASER",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "CƠ SỞ ĐO LƯỜNG HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "KỸ THUẬT SỐ DÙNG CHO SIN VIÊN HỆ CAO ĐẲNG NGHỀ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "CƠ HỌC KỸ THUẬT TẬP MỘT TĨNH HỌC VÀ ĐỘNG HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "THIẾT BỊ ĐIỀU KHIỂN KHẢ TRÌNH - PLC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "GIÁO TRÌNH AN TOÀN ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "THỰC HÀNH CẮT GỌT KIM LOẠI TRÊN MÁY TIỆN VÀ MÁY PHAY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "THỰC HÀNH ĐỘNG CƠ ĐỐT TRONG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "BÀI TẬP VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO MÁY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ĐIỆN TỬ SỐ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO MÁY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "BÀI TẬP CƠ HỌC ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "TỰ ĐỘNG HÓA HỆ THỐNG LẠNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT LẠNH CĂN BẢN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "MÁY ĐIỆN TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "LÝ THUYẾT TẠO HÌNH BỀ MẶT VÀ ỨNG DỤNG TRONG KỸ THUẬT CƠ KHÍ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "THIẾT BỊ ĐẦU CUỐI THÔNG TIN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO XI MĂNG, BÊ TÔNG, BÊ TÔNG \r\nCỐT THÉP VÀ VỮA XÂY DỰNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "XƠ DỆT TÍNH NĂNG CAO",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "DẠY NGHỀ SỬA CHỮA TỦ LẠNH VÀ MÁY ĐIỀU HOÀ DÂN DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT NHIỆT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "KỸ THUẬT ĐO VÀ PHÂN TÍCH DAO ĐỘNG CƠ HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "GIÁO TRÌNH ĐIỆN TỬ CÔNG SUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "BÀI TẬP CƠ HỌC KỸ THUẬT TẬP HAI - ĐỘNG LỰC HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "TỰ ĐỘNG HÓA SẢN XUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "BÀI TẬP CƠ SỞ KỸ THUẬT MẠCH ĐIỆN & ĐIỆN TỬ - TẬP MỘT - MẠCH ĐIỆN CƠ BẢN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "HƯỚNG DẪN THIẾT KẾ DỤNG CỤ CẮT KIM LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH ĐIỆN KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "SỔ TAY TRA CỨU THYRISTOR, TRANZITO TRƯỜNG, IC, ỨNG DỤNG VÀ KHÁC BIỆT CỦA IC CÙNG LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "BÀI TẬP CƠ SỞ KỸ THUẬT NHIỆT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "BÀI TẬP KỸ THUẬT ĐIỆN TỬ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "BÀI TẬP CƠ SỞ KỸ THUẬT NHIỆT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "BÀI TẬP VẼ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH CƠ SỞ KỸ THUẬT CẮT GỌT KIM LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT THÔNG TIN QUANG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH PHƯƠNG PHÁP XÁC ĐỊNH TUỔI ĐỊA CHẤT BẰNG ĐỒNG VỊ PHÓNG XẠ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "SỬA CHỮA ĐẦU MÁY CD - VCD - DVD",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "THỰC HÀNH SỬA CHỮA MÁY ĐIỆN THOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT SỐ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO XI MĂNG, BÊ TÔNG, BÊ TÔNG \r\nCỐT THÉP VÀ VỮA XÂY DỰNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ THIẾT BỊ ĐIỆN TỬ CÔNG SUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "THÔNG TIN SỐ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO DỤC QUỐC PHÒNG - AN NINH 11",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "VĂN HỌC NHẬT BẢN NHẬT CHIÊU",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG\r\nNGHỀ NẤU ĂN 11",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH CÁC HỆ THỐNG THÔNG TIN VÔ TUYẾN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "SỔ TAY CƠ ĐIỆN TỬ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "THỰC HÀNH NGHỀ ĐIỆN DÂN DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "THỰC HÀNH NGHỀ TIN HỌC VĂN PHÒNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "THỰC HÀNH NGHỀ LÀM VƯỜN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG\r\nNGHỀ TRỒNG RỪNG 11",
        "g": "20,000 ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT AN TOÀN HỆ THỐNG LẠNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH NHIỆT HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "VẬT LIỆU HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "XỬ LÝ SỐ TÍN HIỆU VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "KỸ THUẬT LẮP ĐẶT VÀ VẬN HÀNH TRẠM BIẾN ÁP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "QUẢN LÝ QUY HOẠCH XÂY DỰNG VÀ KẾT CẤU HẠ TẦNG Ở ĐÔ THỊ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT MẠCH ĐIỆN & ĐIỆN TỬ - TẬP MỘT - MẠCH ĐIỆN CƠ BẢN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ KIM LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH XỬ LÝ ẢNH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH KHÍ CỤ ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ KIM LOẠI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "BƠM NHIỆT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "KỸ THUẬT MẠCH ĐIỆN TỬ II DÙNG CHO SINH VIÊN CÁC TRƯỜNG CAO ĐẲNG NGHỀ VÀ TRUNG CẤP NGHỀ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "KỸ THUẬT MẠCH ĐIỆN TỬ I DÙNG CHO SINH VIÊN CÁC TRƯỜNG CAO ĐẲNG NGHỀ VÀ TRUNG CẤP NGHỀ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT MẠCH ĐIỆN & ĐIỆN TỬ - TẬP HAI - MẠCH ĐIỆN CHỨC NĂNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ HỆ DẪN ĐỘNG CƠ KHÍ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "DUNG SAI VÀ LẮP GHÉP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "KỸ THUẬT AN TOÀN VÀ BẢO HỘ LAO ĐỘNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "THIẾT KẾ CHI TIẾT MÁY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "CƠ HỌC ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "MÁY ĐIỆN TẬP HAI",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "CƠ SỞ LÝ THUYẾT TÍNH TOÁN VÀ THIẾT KẾ HỆ THỐNG CUNG CẤP ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "SỬA CHỮA MÁY ĐIỆN VÀ MÁY BIẾN ÁP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "TÍNH TOÁN THIẾT KẾ THIẾT BỊ ĐIỆN TỬ CÔNG SUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO TRÌNH CƠ HỌC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO TRÌNH KỸ THUẬT XUNG - SỐ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ CNC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "THỰC HÀNH SỬA CHỮA TIVI MÀU",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO TRÌNH ĐIỆN TỬ CÔNG SUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "CƠ SỞ KỸ THUẬT NHIỆT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "KỸ THUẬT ĐIỆN TỬ SỐ",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "THIẾT KẾ ĐƯỜNG Ô TÔ CAO TỐC",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO TRÌNH LÝ THUYẾT MẠCH",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "GIÁO TRÌNH NHIỆT ĐỘNG KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO MÁY",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "THIẾT KẾ CUỘN DÂY VÀ BIẾN ÁP TRONG THIẾT BỊ ĐIỆN TỬ CÔNG SUẤT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "NGUYÊN LÝ CẮT",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "CÔNG NGHỆ CHẾ TẠO THIẾT BỊ ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "SỬA CHỮA ĐIỆN DÂN DỤNG VÀ ĐIỆN CÔNG NGHIỆP",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "BÀI TẬP KỸ THUẬT ĐIỆN",
        "vt1": "NG",
        "vt2": "D1",
        "vt3": "L",
        "vt4": "T7.4"
    },
    {
        "name": "GIÁO TRÌNH QUẢN TRỊ CHIẾN LƯỢC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ HỌC VI MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH KẾ TOÁN ĐƠN VỊ HÀNH CHÍNH SỰ NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "BÀI TẬP NGUYÊN LÝ KINH TẾ HỌC VĨ MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH KIỂM TOÁN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT CẠNH TRANH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ QUẢN LÝ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH NGHIỆP VỤ XUẤT NHẬP KHẨU",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH QUẢN TRỊ MARKETING",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "QUẢN LÝ SẢN XUẤT VÀ TÁC NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "MARKETING TỚI KHÁCH HÀNG TỔ CHỨC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH THỐNG KÊ DOANH NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH KẾ TOÁN DOANH NGHIỆP DỊCH VỤ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "BÀI TẬP LÝ THUYẾT XÁC SUẤT VÀ THỐNG KÊ TOÁN HỌC (HƯỚNG DẪN GIẢI VÀ ĐÁP ÁN)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "BÀI TẬP KIỂM TOÁN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH KẾ TOÁN TÀI CHÍNH DOANH NGHIỆP THƯƠNG MẠI",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP KINH TẾ VÀ QUẢN TRỊ DOANH NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "TĂNG CƯỜNG KIỂM SOÁT NHÀ NƯỚC ĐỐI VỚI HOẠT ĐỘNG CHUYỂN GIÁ TRONG DOANH NGHIỆP TRONG ĐIỀU KIỆN HỘI NHẬP KINH TẾ Ở VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ LƯỢNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ VÀ QUẢN TRỊ DOANH NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ LAO ĐỘNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "HƯỚNG DẪN THỰC HÀNH KINH TẾ HỌC VI MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT NGÂN HÀNG VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "KINH TẾ HỌC VI MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH TỘI PHẠM HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH MARKETING CĂN BẢN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT AN SINH XÃ HỘI",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP MÔ HÌNH TOÁN KINH TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT CẠNH TRANH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT SỞ HỮU TRÍ TUỆ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH NGUYÊN LÝ THỐNG KÊ KINH TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH TÂM LÝ HỌC TƯ PHÁP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT TÀI CHÍNH CÔNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LỊCH SỬ NHÀ NƯỚC VÀ PHÁP LUẬT THẾ GIỚI",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT ĐẦU TƯ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "NẠN NHÂN CỦA TỘI PHẠM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT HÀNH CHÍNH VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH PHÂN TÍCH VÀ QUẢN LÝ DỰ ÁN ĐẦU TƯ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT HÌNH SỰ VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH HÀNH CHÍNH NHÀ NƯỚC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT HIẾN PHÁP VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT CẠNH TRANH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "LUẬT KINH TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT CHỨNG KHOÁN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT DÂN SỰ VIỆT NAM - TẬP MỘT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH LUẬT DÂN SỰ VIỆT NAM TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH TÂM LÝ HỌC TƯ PHÁP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "PHÂN TÍCH HOẠT ĐỘNG KINH TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH LÝ THUYẾT THỐNG KÊ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH PHÁP LUẬT KINH TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "HÀNH VI NGƯỜI TIÊU DÙNG VIỆT NAM ĐỐI VỚI HÀNG NỘI, HÀNG NGOẠI TRONG THỜI ĐẠI TOÀN CẦU HÓA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "THỰC HÀNH LÂM SÀNG NHA KHOA TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "LÃO NHA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO TRÌNH MARKETING CĂN BẢN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP KINH TẾ HỌC VI MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP LÝ THUYẾT XÁC SUẤT VÀ THỐNG KÊ TOÁN HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "THỰC HÀNH VÀ ỨNG DỤNG TIN HỌC TRONG Y SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "ĐIỀU DƯỠNG NGOẠI 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "SINH HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "ĐIỀU TRỊ GÃY XƯƠNG Ở TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "ĐIỀU DƯỠNG NỘI NGOẠI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "CHẨN ĐOÁN ĐÁI THÁO ĐƯỜNG VÀ ĐIỀU TRỊ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "KHOA HỌC HÀNH VI TRONG RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "PHÒNG, CHỐNG HIV/AIDS",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "500 CÂU HỎI TRẮC NGHIỆM KINH TẾ HỌC VI MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "500 CÂU HỎI TRẮC NGHIỆM KINH TẾ HỌC VĨ MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "KINH TẾ HỌC VI MÔ",
        "g": "22,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH LUẬT TỐ TỤNG HÀNH CHÍNH VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA - TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA - TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "Y PHÁP HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "NHÃN KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "QUẢN LÝ VÀ TỔ CHỨC Y TẾ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "TAI MŨI HỌNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "TIN HỌC VÀ ỨNG DỤNG TRONG Y - SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "VỆ SINH PHÒNG BỆNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "LÝ THUYẾT THIẾT BỊ HÌNH ẢNH Y TẾ TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "LÝ THUYẾT THIẾT BỊ HÌNH ẢNH Y TẾ TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "KIỂM NGHIỆM THUỐC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "DINH DƯỠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "SỨC KHỎE SINH SẢN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "LÝ THUYẾT THIẾT BỊ HÌNH ẢNH Y TẾ TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "GIẢI PHẨU BỆNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "GIÁO TRÌNH DƯỢC LÝ II",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "ĐIỀU DƯỠNG CƠ BẢN 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "ĐIỀU DƯỠNG CƠ BẢN II",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T2.3"
    },
    {
        "name": "ĐIỀU DƯỠNG SẢN PHỤ KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "SINH LÝ BỆNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "ĐIỀU DƯỠNG NỘI NGOẠI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP I NHA KHOA MÔ PHỎNG THUỐC VÀ VẬT LIỆU NHA KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "PHẨU THUẬT TRONG MIỆNG TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "PHẨU THUẬT TRONG MIỆNG TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "CÂU HỎI LƯỢNG GIÁ CHĂM SÓC SỨC KHỎE TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "LÃO KHOA Y HỌC CỔ TRUYỀN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "DƯỢC LÝ HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "VÔ SINH DO VÒI TỬ CUNG - PHÚC MẠC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIÁO TRÌNH ĐIỀU DƯỠNG CƠ SỞ II (DÙNG CHO CAO ĐẲNG ĐIỀU DƯỠNG CHÍNH QUY)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "MÁY LY TÂM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "NHA KHOA CỘNG ĐỒNG - TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "VI KHUẨN Y HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "ĐIỀU DƯỠNG NGOẠI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP XÁC SUẤT THỐNG KÊ (DÙNG CHO ĐÀO TẠO BÁC SĨ ĐA KHOA)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "KHOA HỌC HÀNH VI TRONG RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÂU HỎI TỰ LƯỢNG GIÁ ĐIỀU DƯỠNG NHI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "TOÁN CAO CẤP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ĐIỀU DƯỠNG NGOẠI 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 1 NHA KHOA MÔ PHỎNG THUỐC VÀ VẬT LIỆU NHA KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 2 NHA KHOA HÌNH THÁI VÀ NHA KHOA CHỨC NĂNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 3 CHẨN ĐOÁN HÌNH ẢNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "KÝ SINH TRÙNG THỰC HÀNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "DA LIỄU HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "HÓA PHÂN TÍCH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "PHỤC HỒI CHỨC NĂNG DỰA VÀO CỘNG ĐỒNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NỘI KHOA - TIM MẠCH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ALCALOID NAPHTHYLISOQUINOLIN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "THỰC HÀNH LÂM SÀNG BỆNH LAO KẾT HỢP ĐÁI THÁO ĐƯỜNG (SÁCH CHUYÊN KHẢO)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "HƯỚNG DẪN CHẨN ĐOÁN VÀ GIÁM ĐỊNH BỆNH DA NGHỀ NGHIỆP (SÁCH CHUYÊN KHẢO)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "VÔ SINH DO VÒI TỬ CUNG - PHÚC MẠC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "QUẢN LÝ ĐIỀU DƯỠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ĐIỀU DƯỠNG TẬP 2 CÁC BỆNH NỘI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "DA LIỄU HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "MIỄN DỊCH HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "BỆNH HỌC CƠ SỞ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "DINH DƯỠNG CỘNG ĐỒNG VÀ AN TOÀN VỆ SINH THỰC PHẨM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "KỸ NĂNG GIAO TIẾP VÀ GIÁO DỤC SỨC KHỎE",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "PHẪU THUẬT MẠCH MÁU NGUYÊN TẮC VÀ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "DƯỢC LÝ HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "BỆNH LÝ VÀ PHẪU THUẬT HÀM MẶT - TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "BỆNH LÝ VÀ PHẪU THUẬT HÀM MẶT - TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CHẨN ĐOÁN VÀ ĐIỀU TRỊ CÁC BỆNH NGOẠI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "KIỂM NGHIỆM THUỐC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "BỆNH LÝ MẠCH MÁU CƠ BẢN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "CHÁY KỸ NĂNG PHÒNG VÀ THOÁT NẠN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "SÁCH GIÁO TRÌNH Y HỌC 2016-2017",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "CẨM NANG GOLF - PHIÊN BẢN PAR",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "KHOA HỌC HÀNH VI TRONG RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "LÃO NHA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "MÔ PHÔI RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "TỐI ƯU HÓA MÔI TRƯỜNG LÀM VIỆC TRONG RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "HÓA VÔ CƠ VÀ HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "MÁY LY TÂM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "DƯỢC LÝ HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "PHỤC HÌNH RĂNG CỐ ĐỊNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "PHÁT TRIỂN CÁ NHÂN VÀ TÍNH CHUYÊN NGHIỆP TRONG NHA KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "TỐI ƯU HÓA MÔI TRƯỜNG LÀM VIỆC TRONG RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "PHẪU THUẬT MẠCH MÁU NGUYÊN TẮC VÀ KỸ THUẬT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "BỆNH HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CHĂM SÓC SỨC KHỎA TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "KÝ SINH TRÙNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "KIỂM NGHIỆM THUỐC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "RĂNG TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIẢI PHẨU NGƯỜI TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "SỨC KHỎE SINH SẢN",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIẢI PHẪU NGƯỞI TẬP 3",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CHỮA RĂNG VÀ NỘI NHA - TẬP 2 NỘI NHA LÂM SÀNG\r\n(DÙNG CHO SV RĂNG HÀM MẶT)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CHỮA RĂNG VÀ NỘI NHA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "PHÁT TRIỂN CÁ NHÂN VÀ TÍNH CHUYÊN NGHIỆP TRONG NHA KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "Y PHÁP HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CHĂM SÓC SỨC KHỎA TRẺ EM",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "PHẪU THUẬT MIỆNG TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "MÔ PHÔI RĂNG HÀM MẶT",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA - TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CẤP CỨU NGOẠI KHOA - TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "DA LIỄU HỌC",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "NHA KHOA CƠ SỞ TẬP 3 CHẨN ĐOÁN HÌNH ẢNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "SINH HỌC PHÂN TỬ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CHỮA RĂNG NỘI NHA - TẬP 1",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HÓA VÔ CƠ VÀ HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HÓA PHÂN TÍCH TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "BỆNH HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "PHỤC HÌNH RĂNG CỐ ĐỊNH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HÓA DƯỢC 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIẢI PHẪU NGƯỞI TẬP 2",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 1",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 3",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HÓA DƯỢC 2",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH XÂY DỰNG MẶT ĐƯỜNG Ô TÔ TẬP II",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HÓA HỌC HỮU CƠ 2",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "CẤU TẠO NGUYÊN TỬ VÀ LIÊN KẾT HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HÓA HỌC HỮU CƠ TẬP 1",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "GIÁO TRÌNH HÓA HỌC ĐẠI CƯƠNG - TẬP MỘT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG - TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG CÁC NGUYÊN LÝ VÀ ỨNG DỤNG - TẬP BA",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "DANH PHÁP HỢP CHẤT HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "MỘT SỐ PHẢN ỨNG TRONG HÓA HỌC VÔ CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CƠ SỞ LÝ THUYẾT CÁC PHẢN ỨNG HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "ỨNG DỤNG TIN HỌC TRONG GIẢNG DẠY HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ QUYỂN II LÝ THUYẾT ĐẠI CƯƠNG VỀ HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "HÓA HỌC HỮU CƠ TẬP 2",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC HỮU CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP TRẮC NGHIỆM HÓA HỌC 12",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "400 BÀI TẬP HÓA HỌC TRUNG HỌC CƠ SỞ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "PHƯƠNG PHÁP DẠY HỌC HÓA HỌC Ở TRƯỜNG PHỔ THÔNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CÁCH BIÊN SOẠN VÀ TRẢ LỜI CÂU HỎI TRẮC NGHIỆM MÔN HÓA HỌC Ở TRƯỜNG PHỔ THÔNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP CƠ SỞ LÝ THUYẾT CÁC QUÁ TRÌNH HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "BÀI TẬP TRẮC NGHIỆM HÓA HỌC 10",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CƠ SỞ LÝ THUYẾT HÓA HỌC II",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "HÓA HỌC VÔ CƠ CƠ BẢN TẬP BA CÁC NGUYÊN TỐ CHUYỂN TIẾP",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "HÓA HỌC VÔ CƠ CƠ BẢN TẬP MỘT LÝ THUYẾT ĐẠI CƯƠNG VỀ HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "CẤU TẠO PHÂN TỬ CÁC CHẤT VÔ CƠ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ QUYỂN III HÓA HỌC CÁC NGUYÊN TỐ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC VÔ CƠ QUYỂN I - LÝ THUYẾT ĐẠI CƯƠNG VỀ HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "HÓA HỌC VÔ CƠ NÂNG CAO TẬP BA - CÁC NGUYÊN TỐ\r\nCHUYỂN TIẾP",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "HÓA HỌC VÔ CƠ NÂNG CAO TẬP MỘT - LÝ THUYẾT ĐẠI CƯƠNG VỀ HÓA HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIẢI BÀI TẬP VÀ BÀI TOÁN CƠ SỞ VẬT LÝ TẬP BA",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "CƠ SỞ VẬT LÝ TẬP BA NHIỆT HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "GIẢI BÀI TẬP VÀ BÀI TOÁN CƠ SỞ VẬT LÝ TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "GIẢI BÀI TẬP VÀ BÀI TOÁN CƠ SỞ VẬT LÝ TẬP MỘT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "ĐIỆN TỬ HỌC NHIỆT ĐỘNG HỌC 2",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "ĐIỆN TỬ HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.2"
    },
    {
        "name": "TUYỂN TẬP CÁC BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP MỘT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG tập 2",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "TUYỂN TẬP CÁC BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG 1",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "PHÂN TÍCH LÝ - HÓA",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VẬT LÝ ĐIỆN TỬ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "TRẮC NGHIỆM VẬT LÝ DÙNG CHO ÔN THI TỐT NGHIỆP THPT VÀ TUYỂN SINH ĐẠI HỌC - CAO ĐẲNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "TUYỂN TẬP ĐỀ THI TUYỂN SINH THPT CHUYÊN VẬT LÝ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP THIÊN VĂN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "LỊCH SỬ VẬT LÝ HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VẬN CHUYỂN HẠT TẢI ĐIỆN TRONG VẬT LÝ CHẤT BÁN DẪN HỆ THẤP CHIẾU",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP MỘT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP 1",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP VẬT LÝ ĐẠI CƯƠNG TẬP 3",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG III.I",
        "sl2": "1",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP MỘT - CƠ NHIỆT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "VẬT LÝ ĐẠI CƯƠNG TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CƠ HỌC TẬP MỘT TĨNH HỌC VÀ ĐỘNG HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP CƠ HỌC TẬP HAI ĐỘNG LỰC HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "BÀI TẬP CƠ HỌC TẬP MỘT TĨNH HỌC VÀ ĐỘNG HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CƠ HỌC TẬP MỘT TĨNH HỌC VÀ ĐỘNG HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN TIỂU HỌC HẠNG III",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THƯỜNG XUYÊN CÁN BỘ QUẢN LÝ TRƯỜNG TIỂU HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN MẦM NON HẠNG II",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CẨM NANG GIÁO DỤC GIỚI TÍNH I'MA GIRL",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CẨM NANG GIÁO DỤC GIỚI TÍNH I'MA BOY",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "CẨM NANG GIÁO DỤC GIỚI TÍNH BÀI HỌC VỀ AN TOÀN CHO TRẺ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "ĐỊA LÝ DU LỊCH CƠ SỞ LÝ LUẬN VÀ THỰC TIỄN PHÁT TRIỂN Ở VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "DẠY HỌC CÔNG NGHỆ 10",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIÁO TRÌNH CÔNG NGHỆ XỬ LÝ CHẤT THẢI RẮN NGUY HẠI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "PHÂN LOẠI HỌC THỰC VẬT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "SINH SẢN VẬT NUÔI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC PHÁT TRIỂN CƠ THỂ NGƯỜI (GIAI ĐOẠN PHÔI, THAI VÀ TRẺ EM)",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "CÔNG NGHỆ SẢN XUẤT ENZYM, PROTEIN VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIÁO TRÌNH KINH TẾ MÔI TRƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "LỐI SỐNG CÁC NHÓM DÂN CƯ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "CƠ SỞ CÔNG NGHỆ VI SINH VẬT VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BỆNH KÝ SINH TRÙNG TRUYỀN LÂY GIỮA NGƯỜI VÀ ĐỘNG VẬT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH DƯỢC LÝ HỌC THÚ Y",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÔNG NGHỆ SẢN XUẤT AXIT AMIN VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "CÂU HỎI VÀ BÀI TẬP TRẮC NGHIỆM SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "SẢN XUẤT GIỐNG VẬT NUÔI THỦY SẢN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "SINH THÁI HỌC CÁC HỆ CỬA SÔNG VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "HƯỚNG DẪN GIẢI BÀI TẬP TỰ LUẬN MÔN SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NGOẠI KHOA THÚ Y",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "KHOÁNG SÉT TRONG ĐẤT VÀ KHẢ NĂNG ỨNG DỤNG TRONG LĨNH VỰC MÔI TRƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH VI SINH VẬT HỌC CÔNG NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "EMPOWER A1 STARTER STUDENT'S BOOK WITH ONLINE ACCESS",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "SÁCH VÀ CUỘC SỐNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "SÁCH ĐÃ THAY ĐỔI TÔI NHƯ THẾ ĐẤY",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI HỌC SINH CÓ VẤN ĐỀ SỨC KHỎE TÂM THẦN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "ĐỘNG VẬT HỌC CÓ XƯƠNG SỐNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T2.4"
    },
    {
        "name": "HÓA SINH HỌC các chất phân tử lớn trong hệ thống sống",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T2.4"
    },
    {
        "name": "MÔI TRƯỜNG VÀ PHÁT TRIỂN BỀN VỮNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T2.4"
    },
    {
        "name": "HÓA SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "SINH LÝ HỌC DINH DƯỠNG Ở THỰC VẬT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC TẬP BỐN CÔNG NGHỆ DI TRUYỀN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CÔNG NGHỆ SINH HỌC TẬP HAI",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC TẾ BÀO",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO TRÌNH GIẢI PHẪU, SINH LÝ NGƯỜI VÀ ĐỘNG VẬT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC PHÂN TỬ TẾ BÀO VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "ĐÁNH GIÁ TÀI NGUYÊN NƯỚC VIỆT NAM",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO DỤC ỨNG PHÓ VỚI BIẾN ĐỔI KHÍ HẬU",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CÔNG NGHỆ XỬ LÝ NƯỚC THẢI BẰNG BIỆN PHÁP SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CƠ SỞ SINH THÁI HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO TRÌNH ĐỘNG VẬT HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC ĐẤT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "TIN HỌC TRONG CÔNG NGHỆ SINH HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CƠ SỞ SINH LÝ CÁ VÀ NHỮNG ỨNG DỤNG VÀO THỰC TẾ SẢN XUẤT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH CƠ SỞ KỸ THUẬT MÔI TRƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH ĐỘNG LỰC HỌC MÔI TRƯỜNG LỚP BIÊN KHÍ QUYỂN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "ĐO VÀ KIỂM TRA MÔI TRƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH TIẾN HÓA",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIAO TIẾP SINH HỌC Ở ĐỘNG VẬT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH TIẾN HÓA",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH SINH HỌC PHÂN TỬ TẾ BÀO VÀ ỨNG DỤNG ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH SINH THÁI HỌC ĐỘNG VẬT CÓ XƯƠNG SỐNG Ở CẠN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "ĐẠI CƯƠNG CÔNG TÁC XÃ HỘI TRƯỜNG HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI VẤN ĐỀ BẠO LỰC HỌC ĐƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI HỌC SINH NGHIỆN INTERNET",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI HỌC SINH SỬ DỤNG CHẤT GÂY NGHIỆN",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CÔNG TÁC XÃ HỘI VỚI GIA ĐÌNH, CỘNG ĐỒNG VÀ HỆ THỐNG NHÀ TRƯỜNG",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "THAM VẤN TRƯỜNG HỌC",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "RÈN LUYỆN KỸ NĂNG THỰC HÀNH TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "SINH HỌC Dịch theo sách xuất bản lần thứ tám CAMPBELL REECE",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI HIỆN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ SỬA CHỮA XE MÁY 11",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ TIN HỌC VĂN PHÒNG 11",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.1"
    },
    {
        "name": "VĂN HỌC NHẬT BẢN NHẬT CHIÊU",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "TIẾNG VIỆT THỰC HÀNH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CƠ SỞ VĂN HÓA VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CƠ SỞ NGÔN NGỮ HỌC VÀ TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "PHƯƠNG PHÁP DẠY HỌC TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "NHỮNG MẨU TRUYỆN LỊCH SỬ THẾ GIỚI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "NGỮ PHÁP TIẾNG VIỆT TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "VĂN HÓA BẮC MỸ TRONG TOÀN CẦU HÓA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "VĂN HÓA CHÂU ÂU - LỊCH SỬ THÀNH TỰU HỆ GIÁ TRỊ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "PHONG CÁCH HỌC TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "CHUYỆN VUI, CHUYỆN LẠ ĐÓ ĐÂY",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "NGỮ PHÁP TIẾNG VIỆT TẬP HAI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "VĂN HỌC NGA TRONG NHÀ TRƯỜNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "LỊCH SỬ VĂN MINH THẾ GIỚI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "ĐẠI CƯƠNG NGÔN NGỮ HỌC TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "TIỂU THUYẾT TRUNG QUỐC THỜI KỲ CẢI CÁCH MỞ CỬA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.1"
    },
    {
        "name": "PHƯƠNG PHÁP LUẬN VÀ PHƯƠNG PHÁP NGHIÊN \r\nCỨU NGÔN NGỮ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "VĂN HÓA BẮC MỸ TRONG TOÀN CẦU HÓA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "TỪ VỰNG HỌC TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "TRUYỆN ĐỒNG THOẠI TRONG VĂN HỌC VIỆT NAM HIỆN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "VĂN HÓA CHÂU ÂU - LỊCH SỬ THÀNH TỰU HỆ GIÁ TRỊ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI HIỆN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH VĂN HỌC VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "TỪ TRÁI NGHĨA TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI CẬN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "LỊCH SỬ THẾ GIỚI CỔ ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "CÁC PHƯƠNG PHÁP NGHIÊN CỨU NGÔN NGỮ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH ĐỊA LÝ - KINH TẾ XÃ HỘI THẾ GIỚI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "NGỮ NGHĨA HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "PHƯƠNG PHÁP DẠY HỌC TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "PHƯƠNG PHÁP DẠY HỌC TÁC PHẨM VĂN CHƯƠNG TRONG NHÀ TRƯỜNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "NGỮ PHÁP TIẾNG VIỆT TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "DẠY HỌC Ở ĐẠI HỌC: TIẾP CẬN KHOA HỌC GIÁO DỤC VÀ TÂM LÝ HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "MẤY VẤN ĐỀ VỀ TỪ VỰNG - NGỮ NGHĨA TIẾNG VIỆT HIỆN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "ĐẠO LÝ UỐNG NƯỚC NHỚ NGUỒN CƠ SỞ TRIẾT HỌC VÀ GIÁ TRỊ TRONG LỊCH SỬ DÂN TỘC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "TẠO ĐỘNG LỰC LÀM VIỆC CHO NGƯỜI LAO ĐỘNG TRONG TỔ CHỨC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.1"
    },
    {
        "name": "GIÁO TRÌNH MỸ HỌC CƠ SỞ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "QUY HOẠCH DU LỊCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "VỀ CON NGƯỜI CÁ NHÂN TRONG VĂN HỌC CỔ VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "HỆ THỐNG LIÊN KẾT VĂN BẢN TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO TRÌNH DU LỊCH VĂN HÓA\r\nNHỮNG VẤN ĐỀ LÝ LUẬN VÀ NGHIỆP VỤ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.1"
    },
    {
        "name": "GIÁO DỤC MỸ THUẬT PHỔ THÔNG - GIAI ĐOẠN GIÁO DỤC CƠ BẢN (BẬC TIỂU HỌC VÀ TRUNG HỌC CƠ SỞ)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁO DỤC NGHỆ THUẬT TẠO HÌNH GIAI ĐOẠN GIÁO DỤC DINH DƯỠNG NGHỀ NGHIỆP",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "BẢO TÀNG, DI TÍCH - NƠI KHƠI NGUỒN CẢM HỨNG DẠY VÀ HỌC LỊCH SỬ CHO HỌC SINH PHỔ THÔNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VĂN BẢN VÀ LIÊN KẾT TRONG TIẾNG VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "GIÁ TRỊ ĐẠO ĐỨC TRUYỀN THỐNG CỦA DÂN TỘC VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "PHONG CÁCH HỌC TIẾNG VIỆT HIỆN ĐẠI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "ĐIỂN HAY TÍCH LẠ TRONG VĂN HỌC NHÀ TRƯỜNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "VĂN HỌC ẤN ĐỘ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "CÁC PHƯƠNG PHÁP NGHIÊN CỨU NGÔN NGỮ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.2"
    },
    {
        "name": "ĐỔI MỚI ĐÁNH GIÁ HỌC SINH TIỂU HỌC - LÝ LUẬN VÀ THỰC TIỄN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TÔN TRUNG SƠN VỚI VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH VĂN HỌC NGA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "NHỮNG VẤN ĐỀ CƠ BẢN CỦA XÃ HỘI HỌC TỔ CHỨC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH VĂN BẢN HÁN VĂN VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH PHƯƠNG PHÁP LUẬN NGHIÊN CỨU KHOA HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TUYẾN ĐIỂM DU LỊCH VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "ĐỊA LÝ KINH TẾ - XÃ HỘI CHÂU Á",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "TRUYỀN NHIỆT - TRUYỀN ẨM VỚI TIỆN NGHI TRANG PHỤC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH DU LỊCH VĂN HÓA - NHỮNG VẤN ĐỀ LÝ LUẬN VÀ NGHIỆP VỤ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH CÁC THỂ LOẠI BÁO CHÍ CHÍNH LUẬN - NGHỆ THUẬT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "GIÁO TRÌNH ĐỊA LÝ KINH TẾ - XÃ HỘI VIỆT NAM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "PHƯƠNG PHÁP NGHIÊN CỨU VÀ TIẾP NHẬN VĂN CHƯƠNG NƯỚC NGOÀI TRONG NHÀ TRƯỜNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP I",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "LỊCH SỬ VĂN MINH THẾ GIỚI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TOÀN TẬP",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "ĐẠI CƯƠNG LỊCH SỬ VIỆT NAM TẬP II",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "THI LUẬT THƠ LỤC BÁT TRONG TRUYỆN KIỀU",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "LỊCH SỬ VĂN HỌC NGA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "LỊCH SỬ VĂN HỌC TRUNG QUỐC TẬP 2",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.2"
    },
    {
        "name": "KỊCH LEP TÔNXTÔI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "GIÁO TRÌNH ĐỊA - KINH TẾ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.2"
    },
    {
        "name": "KỸ THUẬT MAY CƠ BẢN (SÁCH CHUYÊN KHẢO)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH LÝ LUẬN VÀ PHƯƠNG PHÁP DẠY HỌC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH TẬP HAI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH HIỂU BIẾT CHUNG VỀ QUÂN, BINH CHỦNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH CHIẾN THUẬT BỘ BINH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH ĐỊA HÌNH QUÂN SỰ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH HỌC THUYẾT MÁC - LÊNIN, TƯ TƯỞNG HỒ CHÍ MINH VỀ CHIẾN TRANH, QUÂN ĐỘI VÀ BẢO VỆ TỔ QUỐC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO DỤC AN NINH TRẬT TỰ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIẢI TÍCH TRÊN ĐA TẠP",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "XÁC SUẤT THỐNG KÊ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "PHƯƠNG PHÁP GIẢI BÀI TẬP LÔGIC HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "LÝ THUYẾT ĐỒ THỊ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIÁO TRÌNH TOÁN HỌC CAO CẤP - TẬP 2",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ĐẠI SỐ 1 TẬP 5 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "ĐẠI SỐ 2 TẬP 6 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIẢI TÍCH 3 TẬP 3 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "GIẢI TÍCH 4 TẬP 4 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.3"
    },
    {
        "name": "NGHỀ TIN HỌC ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "NGHỀ THÊU RUA",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIÁO TRÌNH TÂM LÝ HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIẢI TÍCH HÀM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH VECTƠ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "GIẢI TÍCH VECTƠ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "THỐNG KÊ VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "ĐẠI SỐ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "MỞ ĐẦU VỀ LÝ THUYẾT XÁC SUẤT VÀ CÁC ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP SỐ HỌC (DÙNG CHO CÁC TRƯỜNG CAO ĐẲNG SƯ PHẠM VÀ ĐẠI HỌC SƯ PHẠM)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH HÀM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP TOÁN CAO CẤP TẬP HAI\r\nPHÉP TÍNH GIẢI TÍCH MỘT BIẾN SỐ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "PHƯƠNG PHÁP TÍNH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "BÀI TẬP XÁC SUẤT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.3"
    },
    {
        "name": "VĂN HỌC VIỆT NAM (THẾ KỶ X-NỬA ĐẦU THẾ KỶ XVIII)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "LANGUAGE AND CULTURE",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "PHƯƠNG TRÌNH VI PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "GIÁO TRÌNH TIẾNG ANH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "NEWS LISTENING INTERMEDIATE",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "ĐỔI MỚI QUÁ TRÌNH DẠY HỌC MÔN TOÁN THÔNG QUA CÁC CHUYÊN ĐỀ DẠY HỌC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "ĐỒ THỊ VÀ CÁC THUẬT TOÁN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP MỘT ĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "GIÁO TRÌNH TOÁN HỌC CAO CẤP TẬP 1",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP BA CHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "GIÁO TRÌNH GIẢI TÍCH TOÁN HỌC - TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP MỘT\r\nĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP BA:\r\nCHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.3"
    },
    {
        "name": "KỸ THUẬT MAY CƠ BẢN (SÁCH CHUYÊN KHẢO)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "523 THÀNH NGỮ SO SÁNH NGANG BẰNG ANH - VIỆT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "TUYỂN TẬP BÀI TẬP PHƯƠNG TRÌNH VI PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "LƯỢNG GIÁC - TẬP MỘT - ĐẲNG THỨC VÀ PHƯƠNG TRÌNH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "CƠ SỞ ĐẠI SỐ TUYẾN TÍNH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.3"
    },
    {
        "name": "TIẾNG ANH CƠ SỞ - TẬP 1",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T7.3"
    },
    {
        "name": "TIẾNG ANH CƠ SỞ - TẬP 2",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T7.3"
    },
    {
        "name": "BÀI TẬP TOÁN CAO CẤP TẬP HAI PHÉP TÍNH GIẢI TÍCH MỘT BIẾN SỐ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "BÀI TẬP ĐẠI SỐ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP MỘT\r\nĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "BÀI TẬP TOÁN HỌC CAO CẤP TẬP BA:\r\nCHUỖI VÀ PHƯƠNG TRÌNH VI PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "ĐẠI SỐ 2 TẬP 6 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIẢI TÍCH 4 TẬP 4 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "GIẢI TÍCH 3 TẬP 3 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "ĐẠI SỐ 1 TẬP 5 JM MONIER",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T3.4"
    },
    {
        "name": "CÁC BÀI TOÁN CHỌN LỌC PHƯƠNG TRÌNH, BẤT PHƯƠNG TRÌNH MŨ VÀ LOGARIT, TÍCH PHÂN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "HÀM SỐ BIẾN SỐ PHỨC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "DẠY HỌC HIỆU QUẢ MÔN GIẢI TÍCH TRONG TRƯỜNG PHỔ THÔNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH GIẢI TÍCH TOÁN HỌC - TẬP HAI",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "BỒI DƯỠNG VÀ PHÁT TRIỂN NĂNG LỰC TƯ DUY CHO HỌC SINH TIỂU HỌC TRONG DẠY HỌC GIẢI TOÁN",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH GIẢI TÍCH II",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIÁO TRÌNH GIẢI TÍCH TOÁN HỌC - TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "GIẢI TÍCH TOÁN HỌC - TẬP 2",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T4.4"
    },
    {
        "name": "CƠ SỞ PHƯƠNG TRÌNH VI PHÂN VÀ LÝ THUYẾT ỔN ĐỊNH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "TOÁN HỌC CAO CẤP TẬP MỘT ĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "BÀI TẬP ĐẠI SỐ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH HÀM",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "BÀI TẬP SỐ HỌC (DÙNG CHO CÁC TRƯỜNG CAO ĐẲNG SƯ PHẠM VÀ ĐẠI HỌC SƯ PHẠM)",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "BÀI TẬP TOÁN CAO CẤP TẬP BA\r\nPHÉP GIẢI TÍCH NHIỀU BIẾN SỐ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "ĐẠI SỐ ĐẠI CƯƠNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "LÝ THUYẾT XÁC SUẤT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "MỞ ĐẦU VỀ LÝ THUYẾT XÁC SUẤT VÀ CÁC ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "THỐNG KÊ VÀ ỨNG DỤNG",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T5.4"
    },
    {
        "name": "CÁC BÀI TOÁN CHỌN LỌC LƯỢNG GIÁC VÀ HÌNH GIẢI TÍCH",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "LƯỢNG GIÁC TẬP HAI - CỰC TRỊ VÀ CÁC BÀI TOÁN TRONG TAM GIÁC",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "L",
        "vt4": "T6.4"
    },
    {
        "name": "GIÁO DỤC QUỐC PHÒNG AN NINH TẬP MỘT",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ CẮT MAY 11",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN TIỂU HỌC HẠNG III",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "TLBDNL CHO CBGV LÀM CT TƯ VẤN TÂM LÍ TRONG TRƯỜNG PT",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "TL BD THEO TC CHỨC DANH NN GV CHÍNH HẠNG II",
        "sl1": "20",
        "sl2": "19",
        "g": "195,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "TL BD THEO TC CHỨC DANH NN GV CHÍNH HẠNG I",
        "sl1": "24",
        "g": "170,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C7"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ ĐIỆN DÂN DỤNG 11",
        "g": "26,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "TL BD THEO TC CHỨC DANH NN GV CAO CẤP HẠNG I",
        "sl1": "24",
        "g": "170 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C8"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ THÊU TAY 11",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ LÀM VƯỜN 11",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN TIỂU HỌC HẠNG II",
        "sl1": "26",
        "g": "145,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "VẼ KỸ THUẬT CƠ KHÍ - T1",
        "sl1": "48",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "DUNG SAI VÀ LẮP GHÉP",
        "sl1": "80",
        "sl2": "50",
        "g": "45,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "SƯ PHẠM Y HỌC THỰC HÀNH",
        "sl1": "18",
        "g": "175,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C9"
    },
    {
        "name": "GIÁO DỤC QUỐC PHÒNG - AN NINH 12",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "NGUYÊN LÝ ĐỘNG CƠ ĐỐT TRONG",
        "sl1": "24",
        "g": "170,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN THCS HẠNG II",
        "sl1": "28",
        "g": "145,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "TOÁN HỌC CAO CẤP - TẬP MỘT ĐẠI SỐ VÀ HÌNH HỌC GIẢI TÍCH",
        "sl1": "40",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "HĐGD NGHỀ PT: NGHỀ THÊU TAY 11",
        "sl1": "70",
        "g": "28,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C10"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ NUÔI CÁ 11",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ TRỒNG RỪNG 11",
        "g": "20,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ SỬA XE MÁY 11",
        "sl1": "60",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "HĐGD NGHỀ PT NGHỀ THÊU TAY 11",
        "sl1": "100",
        "g": "32,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "HĐGD NGHỀ PT NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "42,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C11"
    },
    {
        "name": "HOẠT ĐỘNG GD NGHỀ PT: NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ SỬA XE MÁY 11",
        "sl1": "60",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN THCS HẠNG 2",
        "sl1": "28",
        "g": "145,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C12"
    },
    {
        "name": "HĐGD NGHỀ PT NGHỀ LÀM VƯỜN 11",
        "sl1": "80",
        "g": "36,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ NUÔI CÁ 11",
        "sl1": "60",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ SỬA CHỮA XE MÁY 11",
        "sl1": "60",
        "g": "35,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "HOẠT ĐỘNG GD NGHỀ PHỔ THÔNG NGHỀ: NUÔI CÁ 11",
        "sl1": "60",
        "g": "31,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "HOẠT ĐỘNG GD NGHỀ PT: NGHỀ CẮT MAY 11",
        "sl1": "80",
        "g": "38,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C14"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ LÀM VƯỜN 11",
        "g": "40,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "TÀI LIỆU BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH NGHỀ NGHIỆP GIÁO VIÊN MẦM NON HẠNG II",
        "sl1": "36",
        "g": "105,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "TL BD THEO TC CHỨC DANH NN GV CHÍNH HẠNG II",
        "sl1": "20",
        "g": "195,000 ",
        "vt1": "NG",
        "vt2": "D3",
        "vt3": "TH",
        "vt4": "C15"
    },
    {
        "name": "GIÁO TRÌNH KẾ TOÁN TÀI CHÍNH HÀNH CHÍNH SỰ NGHIỆP",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "BÀI TẬP NGUYÊN LÝ KINH TẾ HỌC VĨ MÔ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "GIÁO TRÌNH GIÁO DỤC QUỐC PHÒNG - AN NINH",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "CÂU HỎI TỰ LƯỢNG GIÁ ĐIỀU DƯỠNG NHI KHOA",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "BÀI TẬP GIẢI TÍCH HÀM",
        "sl1": "56",
        "sl2": "48",
        "g": "54,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.2"
    },
    {
        "name": "HỎI - ĐÁP NHỮNG VẤN ĐỀ TÂM LÝ",
        "sl1": "72",
        "g": "20,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.2"
    },
    {
        "name": "GIẢI BÀI TẬP VÀ BÀI TOÁN CƠ SỞ VẬT LÝ - TẬP 3",
        "sl1": "42",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.3"
    },
    {
        "name": "CHẨN ĐOÁN VÀ ĐIỀU TRỊ CÁC BỆNH NGOẠI KHOA",
        "sl1": "8",
        "g": "500,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.4"
    },
    {
        "name": "GT GIÁO DỤC QUỐC PHÒNG - AN NINH - TẬP 1 (DÙNG CHO HỌC SINH CÁC TRƯỜNG TCCN)",
        "sl1": "70",
        "g": "26,000 ",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.4"
    },
    {
        "name": "ĐIỆN DÂN DỤNG (BỊCH)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.4"
    },
    {
        "name": "NGHỀ THÚ Y (BỊCH)",
        "vt1": "NG",
        "vt2": "D4.O",
        "vt3": "TH",
        "vt4": "T1.4"
    },
    {
        "name": "DANH PHÁP HỢP CHẤT HỮU CƠ",
        "g": "50,000 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "TAI MŨI HỌNG",
        "sl1": "46",
        "g": "65,000 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.1"
    },
    {
        "name": "BÀI TẬP HÓA HỌC HỮU CƠ",
        "sl1": "45",
        "g": "75,000 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.2"
    },
    {
        "name": "GIÁO TRÌNH DƯỢC LÝ HỌC THÚ Y",
        "g": "39,500 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.2"
    },
    {
        "name": "HOẠT ĐỘNG GIÁO DỤC NGHỀ PHỔ THÔNG NGHỀ NUÔI CÁ 11",
        "g": "13,000 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.4"
    },
    {
        "name": "ENZYM HỌC",
        "sl1": "26",
        "g": "84,000 ",
        "vt1": "NG",
        "vt2": "D4.B",
        "vt3": "TH",
        "vt4": "T1.4"
    }
]

export default data
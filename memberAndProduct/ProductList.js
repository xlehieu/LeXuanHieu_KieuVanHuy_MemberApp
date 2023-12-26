import { useState } from "react";
const ProductList = () => {
    const [topOfProduct, setTopOfProduct] = useState([
        {
            id: 1,
            productName: 'Hàu Sữa Thái Bình Dương',
            donVi: '100g',
            price: 3000,
            productImage: require('../assets/hau.jpg'),
            isLike: false,
            soluong :0
        },
        {
            id: 2,
            productName: 'CẢI NGỌT 300G ORGANIC',
            donVi: 'Sản phẩm',
            price: 20000,
            productImage: require('../assets/caingot.jpg'),
            isLike: false,
            soluong :0
        },
        {
            id: 3,
            productName: 'Cánh gà CP',
            donVi: 'Sản phẩm',
            price: 102000,
            productImage: require('../assets/image/canhga.jpg'),
            isLike: false,
            soluong :0
        },
        {
            id:4,
            productName: 'Cá trứng 400G MT',
            donVi: 'Khay',
            price: 65000,
            productImage: require('../assets/image/catrung.jpg'),
            isLike: false,
            soluong :0
        },
        {
            id: 5,
            productName: 'Nước xả vải Downy 4L đam mê',
            donVi: 'Sản phẩm',
            price: 310000,
            productImage: require('../assets/image/downy.jpg'),
            isLike: false,
            soluong :0
        },
        {
            id: 6,
            productName: 'Hộp 10 nước uống đông trùng hạ thảo IAF 100ML',
            donVi: 'Sản phẩm',
            price: 93000,
            productImage: require('../assets/image/nuocuong.jpg'),
            isLike: false,
            soluong :0
        },
    ]);
    return topOfProduct;
}

export { ProductList };
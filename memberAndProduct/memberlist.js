import { useState } from "react";
const MemberList = () => {
    const [memberlist] = useState([
        {
            phoneNumber: '0971631903',
            password: '12345678',
            name: 'Lê Xuân Hiếu',
            score: 300,
            voucher:3,
            avatar:null,
        },
        {
            phoneNumber: '0355055556',
            password: '12345678',
            name: 'Lê Xuân Hiếu',
            score:4000,
            voucher:2,
            avatar:null
        },
        {
            phoneNumber:1,
            password:'Q',
            name:'Lê Xuân Hiếu',
            score:1000,
            voucher:1,
            avatar:require('../assets/image/avatar.jpg')
        }
    ]);
    return memberlist;
};
export { MemberList };

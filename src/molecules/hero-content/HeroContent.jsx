import React from "react";

import "./HeroContent.css";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1>Biz bilan kelajakni yarating, sizni izlayapmiz.</h1>
      <p>
        Biz faxrlanadigan mahsulotlarni yaratamiz. Bu qiyin va shuning uchun ham
        qiziq. Biz har doim qiyinchiliklarni yaxshi ko'radigan, ulardan
        kutilganidan ham ko'proq narsani qilishga harakat qiladigan va boshqalar
        haqida o'ylaydigan mutaxassislarni qabul qilamiz: foydalanuvchilardan
        tortib hamkasblargacha.
      </p>
      <button className="primary-btn">Vakansiyalarni ko'rish</button>
    </div>
  );
};

export default HeroContent;

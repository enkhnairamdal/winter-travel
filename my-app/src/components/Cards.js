import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Эдгээр гайхалтай газруудыг үзээрэй!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/winter-4.png"
              text="Амазоны ширэнгэн ойд гүн нуугдсан хүрхрээг судлаарай"
              label="Нууц"
              path="/services"
            />

            <CardItem
              src="images/winter-3.png"
              text="Бали арлуудаар хувийн хөлөг онгоцоор аялах"
              label="Адал явдал"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/winter-1.webp"
              text="Атлантын далайд шинэ газруудыг судлахаар хөвж эхлээрэй"
              label="Нууц"
              path="/services"
            />
            <CardItem
              src="images/winter-2.jpg"
              text="Хималайн уулс дээр хөл бөмбөг тоглох туршлага"
              label="Адал явдал"
              path="/products"
            />

            <CardItem
              src="images/winter-5.jpg"
              text="Сахарагийн цөлөөр удирдамжтай тэмээний аялалд явна уу"
              label="Адреналин"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import './css/carousel.css';

const Carousel = () => {
    return (
    <div class="carousel-wrapper">
  <span id="item-1"></span>
  <span id="item-2"></span>
  <span id="item-3"></span>
  <div class="carousel-item item-1">
  <p className = "genres">Жанр: мультфильм, фэнтези, боевик, комедия, приключения, семейный.</p>
  <p className = "description d-block w-100">Давным-давно в волшебной стране Кумандре бок о бок с людьми жили драконы — создатели и хранители воды. 
    Мирной жизни пришел конец, когда появились друуны. Порождения тьмы обращали людей и драконов 
    в каменные изваяния, и только магия драконихи Сису смогла прогнать злых созданий и расколдовать людей, 
    но на драконов не подействовала. Кумандра раскололась на государства Сердца, Клыка, Когтя, Хребта и Хвоста, 
    а волшебный драконий камень хранился в стране Сердца, которой правил отец Райи. 
    Он мечтал объединить земли, но из-за человеческой жадности и зависти артефакт раскололся. Правитель 
    каждой страны заполучил по осколку, а друуны снова стали властвовать безраздельно.</p>
    <a class="arrow arrow-prev" href="#item-3"></a>
    <a class="arrow arrow-next" href="#item-2"></a>
  </div>
  
  <div class="carousel-item item-2">
    <p>Страна США</p>
    <p>Дата выхода: 3 марта 2021</p>
    <p>Возрастное ограничение: 6+</p>
    <a class="arrow arrow-prev" href="#item-1"></a>
    <a class="arrow arrow-next" href="#item-3"></a>
  </div>
  
  <div class="carousel-item item-3">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
    <a class="arrow arrow-prev" href="#item-2"></a>
    <a class="arrow arrow-next" href="#item-1"></a>
  </div>
</div>
    )
};

export default Carousel;
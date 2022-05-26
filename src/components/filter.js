import React from 'react';

const Filter = () => {
    return (
        <div className = "filter">
            <div className = "filterItem">
                <p>Жанры:</p>
                <select>
                    <option>Все</option>
                    <option>Аниме</option>
                    <option>Биографисческий</option>
                    <option>Боевик</option>
                    <option>Военный</option>
                    <option>Детектив</option>
                    <option>Документальный</option>
                    <option>Драма</option>
                    <option>Исторический</option>
                    <option>Комедия</option>
                    <option>Короткометражный</option>
                    <option>Мелодрама</option>
                    <option>Мультфильм</option>
                    <option>Мюзикл</option>
                    <option>Научный</option>
                    <option>Приключения</option>
                    <option>Семейный</option>
                    <option>Триллер</option>
                    <option>Ужасы</option>
                    <option>Фантастика</option>
                    <option>Фэнтези</option>
                </select>
            </div>
            <div className = "filterItem">
                <p>Страны:</p>
                <select>
                    <option>Все</option>
                    <option>Россия</option>
                    <option>США</option>
                    <option>СССР</option>
                    <option>Италия</option>
                    <option>Франция</option>
                    <option>Япония</option>
                    <option>Великобритания</option>
                    <option>Испания</option>
                    <option>Германия</option>
                </select>
            </div>
            <div className = "filterItem">
                <p>Годы:</p>
                <select>
                    <option>Все</option>
                    <option>2020-2021</option>
                    <option>2010-2019</option>
                    <option>2000-2009</option>
                    <option>1990-1999</option>
                    <option>1980-1989</option>
                    <option>1970-1979</option>
                    <option>1960-1969</option>
                    <option>1950-1959</option>
                    <option>1940-1949</option>
                    <option>1930-1939</option>
                    <option>1920-1929</option>
                </select>
            </div>
            <div className = "filterItem">
                <p>Качество:</p>
                <select>
                    <option>Все</option>
                    <option>1080p</option>
                    <option>720p</option>
                </select>
            </div>
            <div className = "filterItem">
                <p>Сортировка по:</p>
                <select>
                    <option>Дате выхода (по убыванию)</option>
                    <option>Дате выхода</option>
                    <option>Названию</option>
                    <option>Рейтингу</option>
                    <option>Количеству скачиваний</option>
                </select>
            </div>
        </div>
    )
};

export default Filter;
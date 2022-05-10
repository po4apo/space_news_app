import React from "react";

export function AboutPage() {
    return (
        <>
            <h2 className="home-block-heading"><span>О проекте</span></h2>
            <strong>Проект:</strong>
            <p>Приложение для чтения новостей о космических полетах, представляет собой Single Page App, которое получает данные с <a href={"https://api.spaceflightnewsapi.net/v3/documentation"}>Spaceflight News API

            </a>
            </p>
            <strong>Разработал:</strong><p>студент группы Ивт-94 Сухов Илья</p>

        </>
    )
}
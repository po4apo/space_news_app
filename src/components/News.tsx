import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {api} from "../services/api";


interface IArticleCardProps {
    id: number,
    title: string,
    imageUrl: string,
    publishedAt: string,
    isLast: boolean
}

interface Article {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    publishedAt: string,
}

interface INewsPage {
    limit: number
}

export function NewsCard({id, title, imageUrl, publishedAt, isLast}: IArticleCardProps) {
    var lastFlag = '';
    if (isLast) {
        lastFlag = "last"
    }
    return (
        <figure className={lastFlag}>

            <Link to={"/news/" + id} className="thumb"><img src={imageUrl} alt="Alt text"/></Link>

            <figcaption>
                <strong>{title}</strong>
                <em>{publishedAt}</em>
                <Link to={"/news/" + id} className="opener"></Link>
            </figcaption>
        </figure>
    )
}

export function NewsCards({limit}: INewsPage) {

    const [articles, setArticles] = useState<Article[]>([])

    async function getArticles() {
        try {

            const {data} = await api.get('articles', {params: {_limit: limit}})
            console.log("🚀 ~ file: App.tsx ~ getArticles ~ data", data)


            setArticles(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <>
            <div className="one-fourth-thumbs clearfix">
                {articles.map((article, index) => {
                    var isLast: boolean = false
                    if ((index + 1) % 4 === 0) {
                        isLast = true
                    }
                    return (
                        <NewsCard
                            id={article.id}
                            title={article.title}
                            publishedAt={article.publishedAt}
                            imageUrl={article.imageUrl}
                            key={article.id}
                            isLast={isLast}
                        />
                    )
                })}

            </div>

        </>
    )
}

export function NewsPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [title, setTitle] = useState('')



    async function getArticles() {
        try {

            const {data} = await api.get('articles')
            console.log("🚀 ~ file: App.tsx ~ getArticles ~ data", data)


            setArticles(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getArticlesByTitleAndSummary(title: string) {
        try {
            const { data } = await api.get('articles', {
                params: {
                    title_contains: title,
                    summary_contains: title
                }
            })

            setArticles(data)
        } catch(error) {
            console.log(error)
        }
    }

    async function getArticlesSortByTime() {
        try {
            const { data } = await api.get('articles', {
                params: {
                    _sort: 'publishedAt'
                }
            })

            setArticles(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <>

            <input

                color='white'
                placeholder='Поиск'
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        getArticlesByTitleAndSummary(title)
                    }
                }}
            />
            <input
                type={"button"}
                value={"Сортировать по дате"}
                onClick={() => {getArticlesSortByTime()}}

            />

            <div className="one-fourth-thumbs clearfix">
                {articles.map((article, index) => {
                    var isLast: boolean = false
                    if ((index + 1) % 4 === 0) {
                        isLast = true
                    }
                    return (
                        <NewsCard
                            id={article.id}
                            title={article.title}
                            publishedAt={article.publishedAt}
                            imageUrl={article.imageUrl}
                            key={article.id}
                            isLast={isLast}
                        />
                    )
                })}

            </div>

        </>
    )
}







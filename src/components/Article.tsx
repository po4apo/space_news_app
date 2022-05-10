import React from "react";
import {useParams} from "react-router-dom";
import {api} from "../services/api";
import {NotFoundPage} from "./NotFound";
import {NewsCards} from "./News";

interface Article {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    publishedAt: string,
    summary:string
    newsSite: string
}

export function ArticlePage(){

    var initalArticle = {
        id : 0,
        title: '',
        url:'',
        imageUrl:'',
        publishedAt : '',
        summary: '',
        newsSite: ''
    }

    let {id} = useParams()





    const [article, setArticle] = React.useState<Article>(initalArticle);

    React.useEffect(() => {
        api.get('articles/' + id).then((response) => {
            setArticle(response.data);
        });
    }, []);






    if (article.id === 0) {
        return(<NotFoundPage />)
    }

    return(<>
        <h2 className="home-block-heading"><span>{article.title}</span></h2>
        <p><span>New Site:{article.newsSite}</span></p>
        <p><span>{article.summary}</span></p>
        <h2 className="home-block-heading">Похожие статьи</h2>
        <NewsCards limit={4} />
    </>)

}
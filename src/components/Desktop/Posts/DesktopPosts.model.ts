export interface PostBodyProps {
    Title : string,
    Thumbnail : string, 
    Image: string
}

export interface PostFooterProps {
    votes: number,
    comments: number
}

export interface PostHeaderProps {
    Subreddit: string, 
    awardsCount: number
}

export type postsStateType = Array<{
    data: {
        ups: number
        subreddit: string
        title: string
        thumbnail: string
        url: string
        all_awardings: string
        num_comments: number
    }
}>
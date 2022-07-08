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
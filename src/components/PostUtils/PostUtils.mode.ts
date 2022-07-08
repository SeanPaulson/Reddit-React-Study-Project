export interface AuthorProps {
    Subreddit: string,
}

export interface AwardsProps {
    count: number,
    className?: string
}

export interface CommentsProps extends AwardsProps {

}

export interface VotesProps extends AwardsProps {
    color?: string
}
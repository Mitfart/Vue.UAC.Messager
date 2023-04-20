class Post {
    constructor(
        author,
        date,
        likes_count,
        comments_count,
        flags_count,
        views_count,
        title,
        text,
        tags,
        media,
        comments
    ) {
        this.author = author;
        this.date = date;
        this.likes_count = likes_count;
        this.flags_count = flags_count;
        this.views_count = views_count;
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.media = media;
        this.comments = comments;
    }
}
export default Post
export  const getYoutubeEmbedUrl = (url: string) => {
    try {
        const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : "";
    } catch {
        return "";
    }
};

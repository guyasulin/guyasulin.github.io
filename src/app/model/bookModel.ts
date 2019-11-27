class ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

class VolumeInfo {
    imageLinks: ImageLinks;
    previewLink: string;
    title: string;
    subtitle: string;
    publishedDate:string;
    publisher:string;
    authors:string
}

export class BookModel {
    id: string;
    volumeInfo: VolumeInfo;
}
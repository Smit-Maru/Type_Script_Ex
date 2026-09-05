function TitleMetadata(title:string){
  return function (constructor:Function){
    console.log(`Title of Book : ${title}`);
  }
}

function AuthorMetadata(author:string){
  return function (constructor:Function){
    console.log(`Author name is : ${author}`);
  }
}

@AuthorMetadata('Smit Maru')
@TitleMetadata('The Great Gatsby')
class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book = new Book('', '');
console.log(book.title);
console.log(book.author);
interface Readable{
  read() : string
}

interface Writable extends Readable {
  write(s:string):void
}

class Book implements Writable{
  private data:string = "";

  read(): string {
    return this.data;
  }

  write(s: string): void {
    this.data+=s;
  }
}

const book = new Book();

book.write("Hello ");
book.write("World!");

console.log(book.read());

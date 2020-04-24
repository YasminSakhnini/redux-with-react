import { Map } from 'immutable';

//let book = { title: "Boys shouls be boys" };
let book = Map({ title: "Boys shouls be boys" });

//This is a problem with the immutable library
// because we can not git the title by book.title
// but we use book.get("title")
//and to get back a plain js object we need to use toJS()
console.log('book', book.toJS());


function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log('book', book.toJS());

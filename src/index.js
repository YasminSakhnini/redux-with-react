import { produce } from 'immer';

let book = { title: "Boys shouls be boys" };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);
console.log('book', book);

console.log('updated', updated);

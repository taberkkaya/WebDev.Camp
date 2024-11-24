console.log([]);
console.log(new Array());

// const arr1 = new Array();

// const str1 = new String();

// console.log(str1);

function Comment(title, body, username) {
  this.title = title;
  this.body = body;
  this.username = username;
  this.createdAt = Date.now();
  // this.display = function () {
  //   return this.title;
  // };
  console.log(this);
}

Comment.prototype.display = function () {
  return this.title;
};

Comment.prototype.getUsername = function () {
  return this.username;
};

const c1 = new Comment("Not bad", "I like", "taberkkaya");
const c2 = new Comment("Perfect", "I love", "taberkkaya2");

Array.prototype.getNumber = function () {
  return this.length;
};

const arr = ["item1", "item2"];
console.log(arr.getNumber());

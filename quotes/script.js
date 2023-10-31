const button_next_quote = document.querySelector("#button_next_quote");
const p_quote = document.querySelector("#p_quote");
const p_author = document.querySelector("#p_author");
const p_quote_id = document.querySelector("#p_quote_id");

let next_quote_id = 1;

button_next_quote.addEventListener("click", async function () {
  const res = await fetch("https://dummyjson.com/quotes/" + next_quote_id);
  const obj = await res.json();

  p_quote_id.innerText = obj.id;
  p_author.innerText = obj.author;
  p_quote.innerText = obj.quote;

  next_quote_id++;
  if (next_quote_id == 101) {
    next_quote_id = 1;
  }
});

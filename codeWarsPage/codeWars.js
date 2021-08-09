// creating a variable to link main tag with js
const main = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
// creating an array to get the slugs from it - slug is the keyword that used to search about the challenge
const challenges = [
  "sum-mixed-array",
  "return-negative",
  "generate-range-of-integers",
  "count-the-number-of-cubes-with-paint-on",
  "quarter-of-the-year",
];
// fetching about the data that exists at array from the api
challenges.forEach((reach) => {
  fetch(`https://www.codewars.com/api/v1/code-challenges/${reach}`)
    //this method is used to check that if the link is valid or not.
    .then((check) => {
      if (check.status != 200) {
        console.log(
          `There is a problem with the link, the status number is: ${check.status}`
        );
      } else {
        return check.json();
      }
    })
    // this method is used to render the data from api to our page
    .then((data) => {
      // creating a main box that the data are rendered in
      const box = document.createElement("div");
      box.setAttribute("class", "content");
      // creating the first key and assign it to variable called name, have a class = "name"
      const name = document.createElement("h1");
      name.setAttribute("class", "name");
      name.textContent = "Challenge Name: " + data.name;
      // creating the second key and assign it to variable called Category, have a class = "Category"
      const Category = document.createElement("h5");
      Category.setAttribute("class", "category");
      Category.textContent = data.category;
      Category.innerHTML = `Challenge Category: ` + data.category;

      // creating the third key and assign it to variable called Kata, have a class = "kata"
      const Kata = document.createElement("h5");
      Kata.setAttribute("class", "kata");
      Kata.textContent = data.rank.name;
      Kata.innerHTML = `Kata number: ` + data.rank.name;

      // creating the fourth key and assign it to variable called link, have a class = "link"
      // create varaible called url, which take the url from api and save it on
      const url = data.url;
      const link = document.createElement("a");
      link.setAttribute("class", "link");
      link.innerHTML = `Challenge link: <b><a href = "${url}" >Click Here</a></b>`;
      console.log(url);

      // appending childes to its fathers
      // father.appendChild(child)
      main.appendChild(container);
      container.appendChild(box);
      box.appendChild(name);
      box.appendChild(Category);
      box.appendChild(Kata);
      box.appendChild(link);
    });
});

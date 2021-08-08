const main = document.getElementById("root");
const challenges = [
  "sum-mixed-array",
  "return-negative",
  "generate-range-of-integers",
  "count-the-number-of-cubes-with-paint-on",
  "quarter-of-the-year",
];
challenges.forEach((reach) => {
  fetch(`https://www.codewars.com/api/v1/code-challenges/${reach}`)
    .then((check) => {
      if (check.status != 200) {
        console.log(
          `There is a problem with the link, the status number is: ${check.status}`
        );
      } else {
        return check.json();
      }
    })
    .then((data) => {
      const box = document.createElement("div");
      box.setAttribute("class", "content");

      const Url = document.createElement("a");
      const linkText = document.createElement("p");
      linkText.textContent = "Press to move to the challenge !";

      const Name = data.name;
      const Category = data.category;
      const Kata = data.rank.name;
      const link = data.url;

      Url.setAttribute("href", `${link}`);

      box.appendChild(Name);
      box.appendChild(Category);
      box.appendChild(Kata);
      Url.appendChild(linkText);
      box.appendChild(Url);

      console.log(data);
    });
});

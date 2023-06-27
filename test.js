import axios from "axios";

axios
  .get("https://coderbyte.com/api/challenges/json/json-cleaning")
  .then((response) => {
    const cleanedObject = cleanObject(response.data);
    console.log(JSON.stringify(cleanedObject));
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

function cleanObject(obj) {
  for (let key in obj) {
    console.log(key);
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === "N/A" || obj[key] === "-" || obj[key] === "") {
        delete obj[key];
      } else if (Array.isArray(obj[key])) {
        obj[key] = obj[key].filter(
          (item) => item !== "N/A" && item !== "-" && item !== ""
        );
      } else if (typeof obj[key] === "object") {
        obj[key] = cleanObject(obj[key]);
      }
    }
  }
  return obj;
}

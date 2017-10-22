require('dotenv').config()

const token = process.env.LEARNCO_GITHUB_API_TOKEN
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
const app = "I don't do much.";

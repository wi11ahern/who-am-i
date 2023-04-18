# williamahern.com
## Overview

This project is a personal React app to learn more about a variety of technologies such as `React`, `Redux`, `Tailwind CSS`, `Vite`, `HTML+CSS`, `Docker`, and `TypeScript`!

## Hosting
On a quest to containerize and host the application myself using AWS, I created [williamahern-com-infrastructure](https://github.com/wi11ahern/williamahern-com-infrastructure), which uses Terraform to provision all required app infrastructure. This approach _was_ successful, however, the design is a bit too extreme and costly for a simple app like this.

To reduce complexity and cost, the app is currently deployed and hosted on [Netlify](https://www.netlify.com/)!

## Run Locally
Clone the project.

```bash
  git clone https://github.com/wi11ahern/williamahern-com.git
```

Go to the project directory.

```bash
  cd williamahern-com
```

Install dependencies.

```bash
  npm install
```

Start the server.

```bash
  npm run dev 
```


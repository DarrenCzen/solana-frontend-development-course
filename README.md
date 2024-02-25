# A Solana Frontend Development Course by Helius

Hey there! This repository was
Hey Baylor Bears! This repository was designed by [Nathan Galindo](https://twitter.com/_zebedee_) on behalf of [Helius](https://www.helius.dev/). It is a course that is made up of a series of projects to help you get started developing frontend applications on [Solana](https://solana.com/). Why Solana? Because Solana is a third-generation protocol with incredibly high throughput and astonishingly low transaction fees, making it an ideal blockchain for builders to hack out the next generation of the internet!

<img width="1165" alt="Screenshot 2024-01-04 at 9 24 40 AM" src="https://github.com/masterzorgon/solana-frontend-development-course/assets/155211932/c841b9be-3e26-4a3a-bf92-856812a3d27e">

# Video Series

This application is paired with a video series what walks you through each project! [Click this link](https://www.youtube.com/watch?v=8azRe9PRLg0&list=PLMZny7wGLM6w4t7pMGATxFTjjMduTsEiF) to follow along.

![image](https://github.com/masterzorgon/solana-frontend-development-course/assets/155211932/5f3bd590-c19d-4d1f-954e-6bb0aa4fd767)

# Tech Stack

This course focuses on front-end development, and challenges you to build small applications using industry standard front-end technologies as well as some web3 frameworks to interact with the [Solana JSON RPC API](https://docs.solana.com/developing/clients/jsonrpc-api?gclid=Cj0KCQjwxIOXBhCrARIsAL1QFCZyftNFV4i4Sygxkr6LdPazw2sLMPyhQbVqFID-yy8QSqf81dxJHUoaAk2ZEALw_wcB). Listed below are the main frameworks and tools you will be working with:

-   [Next.js](https://nextjs.org/docs)
-   [TypeScript](https://www.typescriptlang.org/docs/)
-   [Tailwind CSS](https://tailwindcss.com/docs/installation)
-   [solana/web3.js](https://solana-labs.github.io/solana-web3.js/)
-   [solana/spl-token](https://solana-labs.github.io/solana-program-library/token/js/index.html)
-   [solana/wallet-adapter-react](https://solana-labs.github.io/wallet-adapter/)

The frameworks and tools used to build out these projects were carefully selected because they are the tools real companies are using in the blockchain industry to build out production applications. Even though they may be new to you, becoming familiar with them will greatly benefit your hireability as a software engineer (both within, and beyond the blockchain industry)!

# Getting Started

Navigate to a folder in your local environment and copy/paste the following commands into your terminal:

```
  git clone git@github.com:masterzorgon/solana-frontend-development-course.git
  cd solana-frontend-development-course
  nvm install 20
  nvm use 20
  yarn
  yarn dev
```

At this point, the repository should be installed to your computer and hosted on your browser at http://localhost:3000.

# Workflow

For each project, there is a card which contains a brief description of the project, as well as two buttons: "preview" and "starter".

-   The "preview" button, when clicked, will direct you to a finished version of the project. This is for your reference as you build the project on your own.
-   The "starter" button, when clicked, will take you to a blank page. The pages labeled "starter.jsx" within your repository are blank files that you will use to build out your own version of the given project.

# Credits

If you find these learning materials helpful, you can help me out in the following ways:

-   By giving this repository a star 🌟
-   By giving me a follow on X: [@_zebedee_](https://twitter.com/_zebedee_)
-   By learning more about Helius via our website: [helius.dev](https://www.helius.dev/)

# Troubleshooting

## Issue 1: Error installing AVM

If you encounter the following error while installing AVM:

```
error: linker `cc` not found
  |
  = note: No such file or directory (os error 2)

error: could not compile `futures-core` (build script) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
error: could not compile `serde` (build script) due to 1 previous error
error: could not compile `futures-task` (build script) due to 1 previous error
error: could not compile `futures-util` (build script) due to 1 previous error
error: could not compile `proc-macro2` (build script) due to 1 previous error
error: could not compile `libc` (build script) due to 1 previous error
error: could not compile `libc` (build script) due to 1 previous error
error: could not compile `httparse` (build script) due to 1 previous error
error: failed to compile `avm v0.29.0 (https://github.com/project-serum/anchor#6716c13b)`, intermediate artifacts can be found at `/tmp/cargo-installto85IH`.
To reuse those artifacts with a future compilation, set the environment variable `CARGO_TARGET_DIR` to that path.
```

You can fix this issue by running the following commands:

```bash
sudo apt-get update
sudo apt-get install build-essential
```

## Issue 2: React/NextJS Hot Reload not working on WSL2

You can fix this issue by running the following commands:  
Set WSL version to 1 as version 2 does not work with Hot Reload.

Open CMD Prompt (Not WSL)

```bash
wsl --set-version Ubuntu-22.04 1
wsl -l -v
```

To revert back to version 2

```bash
wsl --set-version Ubuntu-22.04 2
```

## Issue 3: Setting Solana CLI to Devnet instead of

You can configure the testnet by running the following commands:

```bash
solana config set --url https://api.devnet.solana.com
solana config get
```

To revert back to mainnet

```bash
solana config set --url https://api.mainnet-beta.solana.com
```

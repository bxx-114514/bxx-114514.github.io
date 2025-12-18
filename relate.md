# How to relate posts

## By Email or send to [comment board](https://bxx-114514.github.io/comments.html)

- Send post to tzhong072@gmail.com or bxx-114514@outlook.com.
- Send to [comment board](https://bxx-114514.github.io/comments.html). You **must had image hosting services** if you need add some pictures.

## Commit PR (Pull request)

### Required conditions

- Familiar with using Git, VS Code, Node.js, NPM, Yarn, PNPM, etc and be installed.
- Familiar with using GitHub.
- Familiar with using Markdown markup and other markup languages.
- ~~If you’re particularly familiar with front-end development, that would be even better.~~

### Commit steps

#### I. Fork my repo

> [!caution]
> **You must have GitHub Account for yourself!**

Click [Fork](https://github.com/bxx-114514/bxx-114514.github.io/fork) or into [repo](https://github.com/bxx-114514/bxx-114514.github.com) then click [Fork] buttom to fork my repo in your account.

Only fork source code branch `main` is enough. Just wait a minute.

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/01.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/02.png)

#### II. Clone forked repo into local for create posts

1. Open your working directory and attention **cannot include Chinese, Japanese, Korean, Emoji, etc non-halfspace English text and halfspace/fullspace spaces!**
   1. Error example `X:\ab cd\我的项目\`, correct example `X:\abcd-1234\my-project\`.
2. Right-click blank area and click [Show more options] - [Open Git Bash here] (for Windows 11) or click [Open Git Bash here] directly (for Windows 10 and below) on menu.
   1. You can also input `cmd` for open Command Prompt in folder.
3. Use `git clone` command to clone into local and needed command at below.
4. Just wait a minute.

``` sh
git clone https://github.com/your-username/bxx-114514.github.io
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/03.png)

> [!caution]
> You must replace `your-username` to your username!

> [!tip]
> - You can also add any name behind git link to clone into folder you need.
> - For example, `git clone https://github.com/your-username/bxx-114514.github.io example` is clone into `example` folder under working directory.
> - `git clone https://github.com/your-username/bxx-114514.github.io example/abc` is clone into `abc` folder under `example` folder in working directory.

#### III. Perform the change operation

Into working directory and right-click blank area, click [Show more options] - [Open with Code] (for Windows 11) or click [Open with Code] directly (for Windows 10 and below) on menu.

> [!caution]
> For safety, you need open Terminal in VS Code to install needed PNPM Components. That you can preview on local. 

<!-- You cannot preview on local until open Terminal in VS Code to install needed PNPM Components. -->

``` sh
pnpm i
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/04.png)

Create `*.md` extension documents in corresponding subdirectory for `src/posts` and proceed with writing.

You must create Front-matter for markup title, date, categories, tags, etc infomations in Markdown documents.

``` YAML
---
title: The title of post # Fill in according to actual circumstances
date: 2025-12-12 # Creation date for this document
category: The category of post # Fill in according to actual circumstances
tag: The tag of post # Fill in according to actual circumstances
# author: bxx-114514 # Fill in according to actual circumstances
# copyright: Copyright © 2025 bxx-114514 # Fill in according to actual circumstances
# If you need to enter multiple categories or tags, you can use any of the following syntax options:
# category: [category 1, category 2, category 3]
# tag: [tag 1, tag 2, tag 3]
# category:
  # - category 1
  # - category 2
  # - category 3
# tag:
  # - tag 1
  # - tag 2
  # - tag 3
---
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/05.png)

For Markdown markup, you can see [here](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

#### IV. Preview locally

Open Terminal in VS Code and execute this command:

``` sh
pnpm docs:dev
```

After completion, open the `localhost` link on Terminal with your browser for preview.

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/06.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/07.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/08.png)

If there are no issues, close the page and return to Terminal in VS Code. For stop preview, press `Ctrl-C` on Terminal.

#### V. Commit it and sync change

After completion for writing, save it and into [Source Control] at left, use English to write commit infomation, then click [Commit] and [Sync changes].

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/09.png)

> [!tip]
> You can also click [Commit and sync] at more options for right of [Commit] bottom.

#### VI. Create PR (Pull request)

Into GitHub website and find your forked `your-username/bxx-114514.github.io` repo.  
Select [Contribute] - [Open pull request] and write content of PR (Pull request).

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/10.png)

Please note the title is required and the content is optional. After writing, select [Create pull request] to commit it.

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/11.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/12.png)

I will **examination** commit contents after reserving. **If it doesn’t have issues, I will merge it.**

## By the way

### Instructions for inserting pictures

- Because Markdown format cannot embed picture directly, so you need **have image hosting services for yourself** or **convert to Base64 code** to add any pictures.
- For lite pictures, you can add it with Base64 code. It will increase Markdown documents size if the picture’s size is too large.
- For large pictures, you must using image hosting services. You can use image hosting for your self, or [Fork](https://github.com/bxx-114514/image-hosting/fork) my image hosting repo to add any pictures with under [method](#commit-pr-pull-request).

### The instruction for [my image hosting](https://github.com/bxx-114514/image-hosting)

- **Image formats**: `*.webp`, `*.jpg`, `*.png`. Recommend `*.webp` lossy format and the quality is 80~90%.
- **File name and path**: `images/yymmdd/xx.webp` or `images/yymmdd-xx/xx.webp`.
  - `images` is fixed folder for images.
  - `yymmdd` is date. For example, January 1st, 2025 is `250101`. If you had multi posts on the day, than you add `-xx` at end. For example, the pictures for 2nd post at January 1st, 2025 and so on.
  - `xx.webp` is file name by number. For example, `01.webp` is the 1st picture in folder. The file extension must same with original file.
  - **Complete examples**:
    - **The first image of January 1, 2025**: `images/250101/01.webp`.
    - **January 1, 2025 First image of the second post**: `images/250101-2/01.webp`.
- **Link formats**:
  - `https://raw.githubusercontent.com/your-username/image-hosting/refs/heads/main/images/yymmdd/xx.webp`
  - `your-username` is your GitHub username. 
  - `image-hosting` is GitHub repo name. 
  - `refs/heads` is fixed format and do not edit it.
  - `main` is branch.
  - `image/yymmdd/xx.webp` introduction can see under [method](#the-instruction-for-my-image-hosting).

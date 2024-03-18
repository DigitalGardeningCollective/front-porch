# Front Porch v1 (a fork of [Quartz](https://quartz.jzhao.xyz/))

## Prerequisites

> "Quartz requires **at least [Node](https://nodejs.org/) v18.14** and `npm` v9.3.1 to function correctly. Ensure you have this installed on your machine before continuing"

## Instructions

### Step 1 - Fork the Front Porch Repo and use the following format for its name:


[github-username].github.io

For me, that was joshwingreene.github.io.

I recommend that you keep the "Copy the main branch only" option checked.

### Step 2 - Clone your fork to your machine

I recommend that you place it in your Obsidian vault.

For reference, I have a folder called "My Digital Garden" and I have the following two sub-folders inside of it:
- Publisher
- Workbench

I cloned my forked repo into the "Publisher" folder.

### Step 3 - Use the terminal in order to navigate to your front porch folder and then run `npm install` in order to install all of the necessary packages. The dependencies of Front Porch v1.0.0 is consistent with the dependencies that Quartz v4.2.3 relies on.

### Step 4 Disclaimer -  I am not a lawyer, and the information provided is not legal advice. Please consult a qualified legal professional for legal advice specific to your situation.

### Step 4 - Navigate to the LICENSE.txt file and add a line to the top of the file under "MIT"

Copyright (c) [year] [your name]

ex. Copyright (c) 2024 Jane Doe

### Step 5 - Navigate to the quartz.config.ts file and update lines 17 to 59 accordingly

### Step 6 - Update the images in the static folder

### Step 7 - Follow the following steps from Quartz to host your front porch on github

> 1. Head to “Settings” tab of your forked repository and in the sidebar, click “Pages”. Under “Source”, select “GitHub Actions”.

> 2. Commit these changes by doing `npx quartz sync`. This should deploy your site to <github-username>.github.io/<repository-name>.

Whenever you want to update your site, you just need to run `npx quartz sync` after saving your changes.

Reference: [Hosting](https://quartz.jzhao.xyz/hosting#github-pages)
- The deploy.yml file was added for you.

### Step 8 - Add a custom domain

Follow the steps that Quartz provides:

[Custom Domains](https://quartz.jzhao.xyz/hosting#custom-domain)

### Step 9 - Enjoy!

---

## Documentation - Authoring Content

[Authoring Content](https://quartz.jzhao.xyz/authoring-content)

Front Porch supports all of the frontmatter fields that Quartz uses.

Here are the frontmatter fields that are unique to Front Porch:

| Frontmatter Field | Property Type | Description | 
| ----------------- | ------------- | ----------- | 
| growth-stage      | Text          | Specifies the growth stage of the piece (possible values - seedling, budding, evergreen, statue)(case-insensitive) |
| contributions-enabled | Checkbox  | Specifies whether you are fine with people submitting contributions to this piece (ex. additional arguments) |
| total-contributions | Number      | The total number of contributions that you have approved and merged into your piece. The contributions-enabled field must be turned on. |
| contributors | List      | The contributors that have gotten one of their contributions for this piece approved. The contributions-enabled field must be turned on. |
| contributor-links | List      | A list of links that direct readers to the website or github profile of each contributor. The order of the links should be consistent with the contributor list. The contributions-enabled field must be turned on. |
| cover-image | Text      | The name and file extension of the image that you want to show up as the cover image for the piece. The image needs to be added to the "item-cover" folder in the "static" folder. |
| cover-image-alt-text | Text      | The alternative text that should be used for the image in the event that a screen reader is being used. The cover-image field needs to be set. |
| team | List      | The people that were on the team (including you). |
| tech | List      | The technology that was used for the project. |
| tools | List      | The tools that were used for the project. |
| duration | Text      | The duration of the project. |
| role | List      | The roles that you had while working on the project. |
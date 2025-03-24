# React Portfolio Template

Welcome to the **React Portfolio Template**! This repository is a template to help you quickly set up and customize your personal website or portfolio. Use this template as a base for showcasing your projects, skills, and experience.

## Getting Started

To get started, you’ll need to follow a few steps to set up and deploy this template on your own. This guide will walk you through the setup process, necessary prerequisites, and instructions for deploying to Netlify.

### Prerequisites

Before you begin, make sure you have the following:
- **A Netlify account**: [Sign up here](https://www.netlify.com/) if you don’t have one.
- **Basic HTML, CSS, and JavaScript knowledge**: This template uses a standard React setup (with [Vite](https://vite.dev/)). Deep knowledge of React is not critical, but it will be helpful to have some basic understanding of HTML, CSS, and JavaScript.

### Installation

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository page to create a copy under your GitHub account.
  
2. **Clone Your Forked Repository (optional)**
   - Clone the forked repository to your local machine to make edits:
     ```bash
     git clone https://github.com/YOUR-USERNAME/portfolio-vanilla-template.git
     ```

3. **Navigate to the Project Directory (optional)**
   - Enter the directory to access project files:
     ```bash
     cd portfolio-vanilla-template
     ```

4. **Customize Your Portfolio**
   - Open the HTML, CSS, and JavaScript files in the project to personalize your portfolio.
   - Update the content, links, and any other information specific to your profile.
  
### Project Structure

Here’s a quick overview of the project structure:


- **`src/`**: Contains all Typescript-React and CSS code for the application.
- **`public/`**: Contains all **static** files (images, svgs... etc.) that do not need to be altered.
- **`src/assets/`**: Folder containing images and other media assets that are used at **runtime** and may need..... chat help here
- **`src/App.tsx`**: (VERY IMPORTANT) Entrypoint to the application, used to render each component.
- **`index.css`**: Contains all the styling for the template. Customize it to change the look and feel.

### Deployment

Once your portfolio is set up locally, you can deploy it to Netlify.

1. **Login to Netlify**
   - Go to [Netlify](https://www.netlify.com/) and log in to your account.

2. **Create a New Site**
   - Select “Add new site” from the dashboard and choose “Import an existing project.”
   - Select “GitHub” as your deployment method and connect your GitHub account if prompted.

3. **Select Your Repository**
   - Choose your forked repository `portfolio-vanilla-template` from your GitHub account.

4. **Configure Build Settings**
   - Since this is a static site, you won’t need a build command or any advanced configuration.
   - Click “Deploy Site” to start the deployment process.

5. **Publish and Access Your Portfolio**
   - Once the deployment is complete, you’ll get a Netlify domain (e.g., `portfolio-vanilla-template.netlify.app`).
   - **However**, I'd suggest adding a `Site Name` (i.e. `firstname-lastname`) that will be displayed instead of `portfolio-vanilla-template`.

### Making Updates

To update your portfolio in the future:
1. Make changes in your local repository.
2. Commit and push changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Netlify will automatically redeploy your site when it detects changes to your `main` branch of the repository.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## License
This project is open source and available under the [MIT License](LICENSE).

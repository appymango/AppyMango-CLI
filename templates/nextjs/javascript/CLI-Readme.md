# Appy Mango CLI

Appy Mango CLI provides an easier way to configure your project built with,

- Next Js
- React Js
- React Native

This CLI helps to create common config files which would be necessary to setup manually otherwise. CLI supports Javascript and Typescript.

Additionally, this CLI also offers to simplify component creation with required files inside and ready to use.

### Usage

Copy the following script into your Dev Dependencies in `package.json` file

```bash
"mango": "appymango/AppyMango-CLI"
```

Install the dev Dependency you just added with,

```bash
yarn
```

or

```bash
npm install
```

Now you have the CLI installed on your project and ready to use.

#### Creating Default Project configs

When you run the following script, you will enter the intuitive wizard, simply choose the required options for your project and thats it ! All the default configs will be added to your project. Additionally, follow the Additional Instructions step below to complete the config setup.

```bash
yarn mango -c
```

#### Creating Folder Component

When you run the following script, you will enter the intuitive wizard, simply choose the required options for your project and thats it ! Your new folder component is created

```bash
yarn mango
```

or

```bash
yarn mango -f <Folder Name>
```

### Additional Setup

Run the following commands after the config files have been created,

```bash
npx husky install
```

Copy the scripts from `scripts.json` and paste it into your `package.json`

© 2022 Appy Mango

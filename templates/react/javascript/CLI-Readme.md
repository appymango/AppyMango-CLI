![image](https://drive.google.com/uc?export=view&id=1bTRl5OtbeZJU2PqA5s0ZweLs6MmiuGbB)

# Appy Mango CLI

Appy Mango CLI provides an easier way to configure your project built with,

- Next Js
- React Js
- React Native

This CLI helps to create common config files which would be necessary to setup manually otherwise. this CLI supports Javascript and Typescript.

Additionally, this CLI also offers to simplify component creation with required files inside and ready to use.

### Usage

Install the CLI into your project dev dependency.

```bash
yarn add -D @appymango/cli
```

Now you have the CLI installed on your project and ready to use.

#### Creating Default Project configs

When you run the following script, you will enter the intuitive wizard, simply choose the required options for your project and thats it ! All the default configs will be added to your project. Additionally, follow the `Additional Instructions` step below to complete the config setup.

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

##### Step One

Run the following commands after the config files have been created,

```bash
npx husky install
```

##### Step Two

Copy the scripts from `scripts.json` and paste it into your `package.json`

##### Step Three

Delete the files if exists - `.prettierrc.js`, `.eslintrc.js`

_Powered by [Appy Mango](https://appymango.com)_ (Your next Digital Journey.. starts with us)
© 2022 Appy Mango

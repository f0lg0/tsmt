# T.S.M.T.

Typed Software Modelling Tool

Make diagrams by writing code

## DISCLAIMER

This tool isn't perfect and it's in beta. I don't have a lot of time to spend on this project so I have decided to release as it is right now. I am really open to PRs so feel free to add features, fix bugs, fork the repo etc.

## What is this?

It's a tool to draw diagrams (similar to UML) by writing code. It reads a special pseudo-code and visually renders classes; no more drag and drop pain!

I wanted a nice tool to write diagrams by writing "code" but I couldn't find many, I know there's PlantUML but I didn't like it so I have decided to build my own.

IT STILL NEEDS A LOT OF FEATURES, for example Refs between entities or a feature to export your work.

## HOW TO (please read)

Since this tool isn't polished at all you MUST follow the correct syntax otherwise it won't render your code:

**INDENTATION SHOULD BE DONE USING 4 SPACES or TABs**

Example:

```
class User {
    id: string;
    username: string;
    password: string;
}

```

## Run

`npm install .`

`npm run electron:serve`

## TODO

-   [ ] Load files
-   [ ] Save files
-   [ ] Better "compiler"
-   [ ] Add refs

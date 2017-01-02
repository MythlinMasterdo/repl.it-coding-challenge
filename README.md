# repl.it-coding-challenger

## Development

### Installing Dependencies

From within consoleUI folder:

```sh
npm install
```


### Setting Up Dev Mode

From within consoleUI folder:

```sh
npm start
```


### List
```
$ todo list
[X] 001: A Prompt with a cursor that can move around, insert, backspace, etc...
[X] 002: A printed history of all the previous prompts and outputs
[ ] 003: Use up/down keys to cycle through history

```

To complete the third task I would like to use the onKeyDown listener in React and
create a handler that will search through our printed history to see if our current input
is a historical item and has already been stored in history. If our input is a already
stored item then we need to check the index of the current input inside of the history state array
and then depending on ArrowDown or ArrowUp we will need to cycle by 2 indices either up or down to
move the current input value to what the user desires. In order to keep track of what is currently in our
input we will update the state called value, and by setting state we force a re-render of the virtual DOM which
will assist in our toggling of up/down by keeping track of where we are. Once we have this logic in place we
need to to be able to initiate the input so that the user can immediately press enter and re submit that code
rather than making them add a space or another character for the code to execute. I believe I can do this by returning
the saved result of that input so that we do not have to re process the code and then we can bypass the logic of
making the input recognize updates without user input. 

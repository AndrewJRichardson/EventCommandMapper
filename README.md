An extension I made a few years back to solve an annoyance I had with VS Code. While I still use it I haven't updated it since then. This was my first VS Code extension and was written in a couple of hours so expect rough code.

# Event / Command Mapper

This extension allows commands to be bound to vscode events via settings.

## Usage
Example:
The following opens the debug view when starting a debugging session and toggles the sidebar visibility when the debug session is terminated
```
    "eventCommandMapper.eventMaps": [
        {"event":"vscode.debug.onDidTerminateDebugSession", "command":"workbench.action.toggleSidebarVisibility"},
        {"event":"vscode.debug.onDidStartDebugSession", "command":"workbench.view.debug"}
    ],
```

Once a new mapping has added you will need to reload VSCode which can be done via the reload window command

The easiest way to find vscode events is via [VSCode API](https://code.visualstudio.com/api/references/vscode-api)

The easiest way to find commands is by using the keyboard shortcuts UI within VSCode, if the command isn't shown under the keybinding then right click the keybind > copy command ID 
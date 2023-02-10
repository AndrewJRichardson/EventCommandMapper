// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
class eventCommand
{
	public event: string;
	public command: string;

	constructor(event:string, command:string)
	{
		this.event = event;
		this.command = command;
	}
}
export function activate(context: vscode.ExtensionContext) {

	var eventMaps = vscode.workspace.getConfiguration("eventCommandMapper").get("eventMaps") as Array<eventCommand>
	
	for(var i = 0; i < eventMaps.length; i++)
	{
		const event = eventMaps[i].event;
		const action = eventMaps[i].command;
		const evalCall = event + "(() => { vscode.commands.executeCommand('" + action + "');});"; 
		eval(evalCall);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {
}


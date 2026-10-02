import * as path from 'path';
import * as vscode from 'vscode';

const TERMINAL_NAME = 'Shell Runner';

let terminal: vscode.Terminal | undefined;

// POSIX single quoting: nothing inside is expanded by bash.
function quote(value: string): string {
	return `'${value.replace(/'/g, `'\\''`)}'`;
}

async function runShell(uri?: vscode.Uri): Promise<void> {
	const target = uri ?? vscode.window.activeTextEditor?.document.uri;
	if (!target) {
		vscode.window.showErrorMessage('No shell script is open.');
		return;
	}

	if (target.scheme !== 'file') {
		vscode.window.showErrorMessage('Save the script to disk before running it.');
		return;
	}

	const filePath = target.fsPath;
	if (path.extname(filePath) !== '.sh') {
		vscode.window.showErrorMessage('This file is not a shell script.');
		return;
	}

	const document = vscode.workspace.textDocuments.find(
		(doc) => doc.uri.toString() === target.toString()
	);
	if (document?.isDirty && !(await document.save())) {
		vscode.window.showErrorMessage('The script could not be saved.');
		return;
	}

	terminal?.dispose();
	terminal = vscode.window.createTerminal({
		name: TERMINAL_NAME,
		shellPath: 'bash',
		cwd: path.dirname(filePath),
	});
	terminal.show();
	terminal.sendText(`bash ${quote(filePath)}`);
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('shell-runner.runShell', runShell),
		vscode.window.onDidCloseTerminal((closed) => {
			if (closed === terminal) {
				terminal = undefined;
			}
		})
	);
}

export function deactivate() {}

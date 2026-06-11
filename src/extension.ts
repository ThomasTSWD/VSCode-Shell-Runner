import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('shell-runner.runShell', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No file is open.');
			return;
		}

		const filePath = editor.document.uri.fsPath;
		if (!filePath.endsWith('.sh')) {
			vscode.window.showErrorMessage('This file is not a shell script.');
			return;
		}

		const escapedPath = filePath.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
		const terminal = vscode.window.createTerminal();
		terminal.show();
		terminal.sendText(`bash "${escapedPath}"`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

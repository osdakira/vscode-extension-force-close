import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('forceclosewindow.forceCloseActiveEditor', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const lastRow = editor.document.lineCount - 1;
		const lastCol = editor.document.lineAt(lastRow).range.end.character;
		const range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(lastRow, lastCol));
		editor.edit(builder => { builder.delete(range); });

		vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('hey.googleTextSelect', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            const query = encodeURIComponent(selectedText);
            const url = `https://www.google.com/search?q=${query}`;

            vscode.env.openExternal(vscode.Uri.parse(url));
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

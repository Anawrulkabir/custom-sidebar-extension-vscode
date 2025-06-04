import * as vscode from 'vscode';

let clickCount = 0;

export function activate(context: vscode.ExtensionContext) {
    console.log('Button extension is now active!');

    // Hello command
    const helloCommand = vscode.commands.registerCommand('myButton.hello', () => {
        clickCount++;
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            
            if (text) {
                vscode.window.showInformationMessage(
                    `Hello! You selected: "${text}" (Clicked ${clickCount} times)`
                );
            } else {
                vscode.window.showInformationMessage(
                    `Hello World! Button clicked ${clickCount} times`
                );
            }
        } else {
            vscode.window.showInformationMessage('Hello! No editor is open.');
        }
    });

    // Count lines command
    const countCommand = vscode.commands.registerCommand('myButton.count', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const document = editor.document;
            const lineCount = document.lineCount;
            const selection = editor.selection;
            
            if (!selection.isEmpty) {
                const selectedLines = selection.end.line - selection.start.line + 1;
                vscode.window.showInformationMessage(
                    `Selected: ${selectedLines} lines, Total: ${lineCount} lines`
                );
            } else {
                vscode.window.showInformationMessage(`Total lines: ${lineCount}`);
            }
        } else {
            vscode.window.showWarningMessage('No active editor to count lines');
        }
    });

    // Create status bar items
    const statusBarHello = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right, 
        100
    );
    statusBarHello.text = '$(heart) Hello';
    statusBarHello.tooltip = 'Click to say hello';
    statusBarHello.command = 'myButton.hello';
    statusBarHello.show();

    const statusBarCount = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right, 
        99
    );
    statusBarCount.text = '$(list-ordered) Count';
    statusBarCount.tooltip = 'Count lines in current file';
    statusBarCount.command = 'myButton.count';
    statusBarCount.show();

    // Register all disposables
    context.subscriptions.push(
        helloCommand,
        countCommand,
        statusBarHello,
        statusBarCount
    );

    // Show welcome message
    vscode.window.showInformationMessage(
        'Button Extension loaded! Look for buttons in editor title and status bar.'
    );
}

export function deactivate() {
    console.log('Button extension deactivated');
}
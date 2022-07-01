# forceclosewindow README

## Features

Avoid prompts when closing a new unsaved file (= Untitled File).

If the editor is empty, the prompt will not appear, so for UntitledFile, clear the editor before closing.

## Install Extension

It is not yet available on MarketPlace, so please download and install it.

```sh
curl -LO https://raw.githubusercontent.com/osdakira/vscode-extension-force-close/main/forceclosewindow/forceclosewindow-1.0.0.vsix
code --install-extension forceclosewindow-1.0.0.vsix
```

## Extension Settings

* `forceclosewindow.forceCloseActiveEditor.`: close active editor without prompt.

Define and use keyboard shortcuts.

```json
    {
        "key": "cmd+w",
        "command": "forceclosewindow.forceCloseActiveEditor",
        "when": "editorTextFocus"
    }
```

## Release Notes

### 1.0.0

Initial release.

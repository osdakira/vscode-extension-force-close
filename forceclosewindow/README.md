# forceclosewindow README

## Features

Avoid prompts when closing a new unsaved file (= Untitled File).

If the editor is empty, the prompt will not appear, so for UntitledFile, clear the editor before closing.

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

# forceclosewindow README

## Features

This extension closes newly created files without prompting.

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

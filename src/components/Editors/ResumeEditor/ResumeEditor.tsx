"use client";

import { useEditor, EditorContent, Extension } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { Placeholder, UndoRedo } from "@tiptap/extensions";
import styles from "./ResumeEditor.module.css";

// Allow exactly one paragraph, so the content stays on a single line
const OneLineDocument = Document.extend({ content: "paragraph" });

// Stop Enter from creating a new line
const DisableEnter = Extension.create({
  name: "disableEnter",
  addKeyboardShortcuts() {
    return { Enter: () => true };
  },
});

const ResumeEditor = () => {
  // Plain text only: no marks or other nodes, so the content is never HTML
  const editor = useEditor({
    extensions: [
      OneLineDocument,
      Paragraph,
      Text,
      UndoRedo,
      DisableEnter,
      Placeholder.configure({ placeholder: "https://..." }),
    ],
    content: "",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: { class: styles.singleLine, "aria-label": "Resume link" },
    },
  });

  if (!editor) return null;

  const logData = () => {
    console.log(editor.getText().trim());
  };

  return (
    <>
      <label>Edit Resume extarnal url</label>
      <EditorContent editor={editor} />
      <button type="button" onClick={logData}>
        Log data
      </button>
    </>
  );
};

export default ResumeEditor;

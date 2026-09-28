"use client";

import {
  useEditor,
  useEditorState,
  EditorContent,
  type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MdUndo, MdRedo, MdLink } from "react-icons/md";
import styles from "./PortfolioEditor.module.css";

const MenuBar = ({ editor }: { editor: Editor }) => {
  // Tiptap v3 doesn't re-render on every transaction, so subscribe to the state the toolbar needs
  const state = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor.isActive("bold"),
      isItalic: editor.isActive("italic"),
      isCode: editor.isActive("code"),
      isLink: editor.isActive("link"),
      canUndo: editor.can().chain().undo().run(),
      canRedo: editor.can().chain().redo().run(),
    }),
  });

  const buttons = [
    {
      label: "B",
      active: state.isBold,
      run: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "I",
      active: state.isItalic,
      run: () => editor.chain().focus().toggleItalic().run(),
    },
  ];

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // Cancelled
    if (url === null) return;

    // Empty input removes the link
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url, class: "repository-link" })
      .run();
  };

  return (
    <div className={styles.menuBar}>
      {buttons.map(({ label, active, run }) => (
        <button
          key={label}
          type="button"
          onClick={run}
          className={active ? styles.active : undefined}
        >
          {label}
        </button>
      ))}
      <button
        type="button"
        onClick={setLink}
        className={state.isLink ? styles.active : undefined}
        aria-label="Link"
        title="Link"
      >
        <MdLink />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!state.canUndo}
        aria-label="Undo"
        title="Undo"
      >
        <MdUndo />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!state.canRedo}
        aria-label="Redo"
        title="Redo"
      >
        <MdRedo />
      </button>
    </div>
  );
};

const PortfolioEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: { class: styles.content },
    },
  });

  if (!editor) return null;

  const logData = () => {
    console.log(editor.getHTML());
  };

  return (
    <>
      <div className={styles.editor}>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <button type="button" onClick={logData}>
        Log data
      </button>
    </>
  );
};

export default PortfolioEditor;

"use client";

import {
  useEditor,
  useEditorState,
  EditorContent,
  Mark,
  type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MdUndo, MdRedo, MdLink } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import styles from "./AboutEditor.module.css";
import { TextStyle, FontSize, LineHeight } from "@tiptap/extension-text-style";

const FONT_SIZES = [
  "12px",
  "14px",
  "16px",
  "18px",
  "24px",
  "32px",
  "64px",
  "96px",
  "128px",
];
const FONT_WEIGHTS = [
  { label: "100 Thin", value: "100" },
  { label: "200 Extra Light", value: "200" },
  { label: "300 Light", value: "300" },
  { label: "400 Regular", value: "400" },
  { label: "500 Medium", value: "500" },
  { label: "600 Semibold", value: "600" },
  { label: "700 Bold", value: "700" },
  { label: "800 Extra Bold", value: "800" },
  { label: "900 Black", value: "900" },
];

const LINE_HEIGHTS = ["0.5", "1", "1.15", "1.5", "1.75", "2"];

const TextStyleWithWeight = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontWeight: {
        default: null,
        parseHTML: (element) => element.style.fontWeight || null,
        renderHTML: (attributes) =>
          attributes.fontWeight
            ? { style: `font-weight: ${attributes.fontWeight}` }
            : {},
      },
    };
  },
});

const Glitch = Mark.create({
  name: "glitch",
  addAttributes() {
    return {
      text: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-glitch") ?? "",
        renderHTML: (attributes) => ({ "data-glitch": attributes.text }),
      },
    };
  },
  parseHTML() {
    return [{ tag: "span.glitch" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["span", { ...HTMLAttributes, class: "glitch" }, 0];
  },
});

const MenuBar = ({ editor }: { editor: Editor }) => {
  const state = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor.isActive("bold"),
      isItalic: editor.isActive("italic"),
      isCode: editor.isActive("code"),
      isLink: editor.isActive("link"),
      isGlitch: editor.isActive("glitch"),
      canUndo: editor.can().chain().undo().run(),
      canRedo: editor.can().chain().redo().run(),
      fontSize: editor.getAttributes("textStyle").fontSize ?? "",
      fontWeight: editor.getAttributes("textStyle").fontWeight ?? "",
      lineHeight:
        editor.getAttributes("paragraph").lineHeight ??
        editor.getAttributes("heading").lineHeight ??
        "",
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

    if (url === null) return;

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

  const toggleGlitch = () => {
    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, " ");
    editor.chain().focus().toggleMark("glitch", { text }).run();
  };

  return (
    <div className={styles.menuBar}>
      <select
        value={state.fontSize}
        onChange={(e) => {
          const size = e.target.value;
          if (size) {
            editor.chain().focus().setFontSize(size).run();
          } else {
            editor.chain().focus().unsetFontSize().run();
          }
        }}
        aria-label="Font size"
        title="Font size"
      >
        <option value="">Default</option>
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <select
        value={state.fontWeight}
        onChange={(e) => {
          editor
            .chain()
            .focus()
            .setMark("textStyle", { fontWeight: e.target.value || null })
            .removeEmptyTextStyle()
            .run();
        }}
        aria-label="Font weight"
        title="Font weight"
      >
        <option value="">Default</option>
        {FONT_WEIGHTS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select
        value={state.lineHeight}
        onChange={(e) => {
          const lineHeight = e.target.value || null;
          editor
            .chain()
            .focus()
            .updateAttributes("paragraph", { lineHeight })
            .updateAttributes("heading", { lineHeight })
            .run();
        }}
        aria-label="Line height"
        title="Line height"
      >
        <option value="">Default</option>
        {LINE_HEIGHTS.map((lh) => (
          <option key={lh} value={lh}>
            {lh}
          </option>
        ))}
      </select>

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
        onClick={toggleGlitch}
        className={state.isGlitch ? styles.active : undefined}
        aria-label="Glitch effect"
        title="Glitch effect"
      >
        <BsLightningChargeFill />
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

const AboutEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyleWithWeight,
      FontSize,
      LineHeight.configure({ types: ["paragraph", "heading"] }),
      Glitch,
    ],
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

export default AboutEditor;

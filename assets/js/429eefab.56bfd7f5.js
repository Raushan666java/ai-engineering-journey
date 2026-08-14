"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94759],{

/***/ 26770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_12_file_handling_md_429_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-12-file-handling-md-429.json
const site_docs_courses_c_programming_12_file_handling_md_429_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/12-file-handling","title":"Chapter 12: File Handling","description":"Previous The Preprocessor","source":"@site/docs/courses/c-programming/12-file-handling.md","sourceDirName":"courses/c-programming","slug":"/c-programming/12-file-handling","permalink":"/ai-engineering-journey/c-programming/12-file-handling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-file-handling","slug":"/c-programming/12-file-handling","title":"Chapter 12: File Handling","sidebar_label":"Chapter 12: File Handling","sidebar_position":12},"sidebar":"course-c-programming","previous":{"title":"Chapter 11: Dynamic Memory Allocation","permalink":"/ai-engineering-journey/c-programming/11-dma"},"next":{"title":"Chapter 13: The Preprocessor","permalink":"/ai-engineering-journey/c-programming/13-preprocessor"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/12-file-handling.md


const frontMatter = {
	id: '12-file-handling',
	slug: '/c-programming/12-file-handling',
	title: 'Chapter 12: File Handling',
	sidebar_label: 'Chapter 12: File Handling',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: File Handling';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "The Big Analogy: File Operations = Library Books",
  "id": "the-big-analogy-file-operations--library-books",
  "level": 2
}, {
  "value": "12.1 File Pointer (FILE*)",
  "id": "121-file-pointer-file",
  "level": 2
}, {
  "value": "Prototype",
  "id": "prototype",
  "level": 3
}, {
  "value": "What is FILE*?",
  "id": "what-is-file",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Steps to Use a File",
  "id": "steps-to-use-a-file",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "12.2 Opening Files → fopen Modes",
  "id": "122-opening-files--fopen-modes",
  "level": 2
}, {
  "value": "Prototype",
  "id": "prototype-1",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "fopen Modes → Complete Reference Table",
  "id": "fopen-modes--complete-reference-table",
  "level": 3
}, {
  "value": "Critical Detail: Text vs Binary on Windows",
  "id": "critical-detail-text-vs-binary-on-windows",
  "level": 3
}, {
  "value": "Steps to Open a File",
  "id": "steps-to-open-a-file",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Code Example → All Modes Demonstrated",
  "id": "code-example--all-modes-demonstrated",
  "level": 3
}, {
  "value": "Dry Run Trace → fopen(&quot;data.txt&quot;, &quot;r+&quot;)",
  "id": "dry-run-trace--fopendatatxt-r",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "12.3 Closing a File → fclose",
  "id": "123-closing-a-file--fclose",
  "level": 2
}, {
  "value": "Prototype",
  "id": "prototype-2",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "What Happens Inside fclose",
  "id": "what-happens-inside-fclose",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-1",
  "level": 3
}, {
  "value": "Dry Run Trace",
  "id": "dry-run-trace-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "12.4 Reading from Files",
  "id": "124-reading-from-files",
  "level": 2
}, {
  "value": "12.4.1 Character Reading → fgetc",
  "id": "1241-character-reading--fgetc",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-3",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Why Return int?",
  "id": "why-return-int",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-2",
  "level": 3
}, {
  "value": "Dry Run Trace → fgetc Loop on &quot;ABC&quot;",
  "id": "dry-run-trace--fgetc-loop-on-abc",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "12.4.2 Line Reading → fgets",
  "id": "1242-line-reading--fgets",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-4",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Key Behaviors",
  "id": "key-behaviors",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-3",
  "level": 3
}, {
  "value": "Dry Run Trace → fgets with buffer size 8",
  "id": "dry-run-trace--fgets-with-buffer-size-8",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "12.4.3 Formatted Reading → fscanf",
  "id": "1243-formatted-reading--fscanf",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-5",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-4",
  "level": 3
}, {
  "value": "Dry Run Trace → fscanf Malformed Input",
  "id": "dry-run-trace--fscanf-malformed-input",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "12.4.4 Binary Reading → fread",
  "id": "1244-binary-reading--fread",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-6",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-4",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-5",
  "level": 3
}, {
  "value": "Dry Run Trace → fread with sizeof(Employee) = 40",
  "id": "dry-run-trace--fread-with-sizeofemployee--40",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-6",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "Read Functions Comparison Table",
  "id": "read-functions-comparison-table",
  "level": 3
}, {
  "value": "Read Functions → Complexity Comparison",
  "id": "read-functions--complexity-comparison",
  "level": 3
}, {
  "value": "12.5 Writing to Files",
  "id": "125-writing-to-files",
  "level": 2
}, {
  "value": "12.5.1 Character Writing → fputc",
  "id": "1251-character-writing--fputc",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-7",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-6",
  "level": 3
}, {
  "value": "Dry Run Trace → fputc Writing &quot;Hi\\n&quot;",
  "id": "dry-run-trace--fputc-writing-hin",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-7",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "12.5.2 String Writing → fputs",
  "id": "1252-string-writing--fputs",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-8",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-6",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-8",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-7",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-8",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 3
}, {
  "value": "12.5.3 Formatted Writing → fprintf",
  "id": "1253-formatted-writing--fprintf",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-9",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "Format Specifier Quick Ref",
  "id": "format-specifier-quick-ref",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-7",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-9",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-8",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-9",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-9",
  "level": 3
}, {
  "value": "12.5.4 Binary Writing → fwrite",
  "id": "1254-binary-writing--fwrite",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-10",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "Important: Endianness and Portability",
  "id": "important-endianness-and-portability",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-8",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-10",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-9",
  "level": 3
}, {
  "value": "Dry Run Trace → fwrite Array of 3 Integers",
  "id": "dry-run-trace--fwrite-array-of-3-integers",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-10",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-10",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-10",
  "level": 3
}, {
  "value": "Write Functions Comparison Table",
  "id": "write-functions-comparison-table",
  "level": 3
}, {
  "value": "Write Functions → Complexity Comparison",
  "id": "write-functions--complexity-comparison",
  "level": 3
}, {
  "value": "12.6 EOF Detection → feof",
  "id": "126-eof-detection--feof",
  "level": 2
}, {
  "value": "Prototype",
  "id": "prototype-11",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-11",
  "level": 3
}, {
  "value": "Critical: feof is NOT a Lookahead",
  "id": "critical-feof-is-not-a-lookahead",
  "level": 3
}, {
  "value": "Correct Pattern: Check Return Value",
  "id": "correct-pattern-check-return-value",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-9",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-11",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-10",
  "level": 3
}, {
  "value": "Dry Run Trace → Correct feof Usage",
  "id": "dry-run-trace--correct-feof-usage",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-11",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-11",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-11",
  "level": 3
}, {
  "value": "12.7 Error Handling → ferror, perror, clearerr",
  "id": "127-error-handling--ferror-perror-clearerr",
  "level": 2
}, {
  "value": "Prototypes",
  "id": "prototypes",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-12",
  "level": 3
}, {
  "value": "Error Handling Flow",
  "id": "error-handling-flow",
  "level": 3
}, {
  "value": "Code Example → Comprehensive Error Handling",
  "id": "code-example--comprehensive-error-handling",
  "level": 3
}, {
  "value": "Dry Run Trace → File Opens But Read Fails (e.g., USB removed)",
  "id": "dry-run-trace--file-opens-but-read-fails-eg-usb-removed",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-12",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-12",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-12",
  "level": 3
}, {
  "value": "12.8 File Positioning",
  "id": "128-file-positioning",
  "level": 2
}, {
  "value": "12.8.1 fseek and ftell",
  "id": "1281-fseek-and-ftell",
  "level": 3
}, {
  "value": "Prototypes",
  "id": "prototypes-1",
  "level": 3
}, {
  "value": "whence Constants",
  "id": "whence-constants",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-13",
  "level": 3
}, {
  "value": "Common Idiom: Get File Size",
  "id": "common-idiom-get-file-size",
  "level": 3
}, {
  "value": "Steps for Random Access",
  "id": "steps-for-random-access",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-12",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-11",
  "level": 3
}, {
  "value": "Dry Run Trace → fseek/ftell on 200-byte File",
  "id": "dry-run-trace--fseekftell-on-200-byte-file",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-13",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-13",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-13",
  "level": 3
}, {
  "value": "12.8.2 rewind",
  "id": "1282-rewind",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-12",
  "level": 3
}, {
  "value": "Key Difference from fseek(fp, 0, SEEK_SET)",
  "id": "key-difference-from-fseekfp-0-seek_set",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-12",
  "level": 3
}, {
  "value": "12.8.3 fgetpos and fsetpos (Large File Support)",
  "id": "1283-fgetpos-and-fsetpos-large-file-support",
  "level": 3
}, {
  "value": "Prototypes",
  "id": "prototypes-2",
  "level": 3
}, {
  "value": "Why Use fgetpos/fsetpos Instead of ftell/fseek?",
  "id": "why-use-fgetposfsetpos-instead-of-ftellfseek",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-13",
  "level": 3
}, {
  "value": "Complexity Analysis → All Positioning Functions",
  "id": "complexity-analysis--all-positioning-functions",
  "level": 3
}, {
  "value": "Positioning Functions Comparison Table",
  "id": "positioning-functions-comparison-table",
  "level": 3
}, {
  "value": "12.9 Text vs Binary Files",
  "id": "129-text-vs-binary-files",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-14",
  "level": 3
}, {
  "value": "Key Differences",
  "id": "key-differences",
  "level": 3
}, {
  "value": "Text vs Binary → Comparison Table",
  "id": "text-vs-binary--comparison-table",
  "level": 3
}, {
  "value": "Code Example → Demonstrating Text vs Binary on Windows",
  "id": "code-example--demonstrating-text-vs-binary-on-windows",
  "level": 3
}, {
  "value": "12.10 Sequential vs Random Access",
  "id": "1210-sequential-vs-random-access",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-15",
  "level": 3
}, {
  "value": "Sequential Access",
  "id": "sequential-access",
  "level": 3
}, {
  "value": "Random Access",
  "id": "random-access",
  "level": 3
}, {
  "value": "Sequential vs Random Access → Comparison Table",
  "id": "sequential-vs-random-access--comparison-table",
  "level": 3
}, {
  "value": "Performance Comparison",
  "id": "performance-comparison",
  "level": 3
}, {
  "value": "Code Example → Sequential vs Random Performance Demo",
  "id": "code-example--sequential-vs-random-performance-demo",
  "level": 3
}, {
  "value": "12.11 Temporary Files",
  "id": "1211-temporary-files",
  "level": 2
}, {
  "value": "12.11.1 tmpfile",
  "id": "12111-tmpfile",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-13",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-16",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-10",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-14",
  "level": 3
}, {
  "value": "12.11.2 tmpnam (Deprecated/Security Warning)",
  "id": "12112-tmpnam-deprecatedsecurity-warning",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype-14",
  "level": 3
}, {
  "value": "Safer Alternative: mkstemp (POSIX)",
  "id": "safer-alternative-mkstemp-posix",
  "level": 3
}, {
  "value": "Temporary Files Comparison",
  "id": "temporary-files-comparison",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-14",
  "level": 3
}, {
  "value": "12.12 File Buffering",
  "id": "1212-file-buffering",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-17",
  "level": 3
}, {
  "value": "Stream Buffering Modes",
  "id": "stream-buffering-modes",
  "level": 3
}, {
  "value": "Default Buffering Behavior",
  "id": "default-buffering-behavior",
  "level": 3
}, {
  "value": "Prototypes",
  "id": "prototypes-3",
  "level": 3
}, {
  "value": "Steps for Custom Buffering",
  "id": "steps-for-custom-buffering",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-15",
  "level": 3
}, {
  "value": "Dry Run Trace → Default Buffered Write (BUFSIZ=4096)",
  "id": "dry-run-trace--default-buffered-write-bufsiz4096",
  "level": 3
}, {
  "value": "Buffer Size Trade-off",
  "id": "buffer-size-trade-off",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-15",
  "level": 3
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-14",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-14",
  "level": 3
}, {
  "value": "Stream Buffering → Mode Comparison Table",
  "id": "stream-buffering--mode-comparison-table",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference → Common File Operations",
  "id": "quick-reference--common-file-operations",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: What happens when you read past EOF?",
  "id": "q1-what-happens-when-you-read-past-eof",
  "level": 3
}, {
  "value": "Q2: What is the difference between fgets and fscanf?",
  "id": "q2-what-is-the-difference-between-fgets-and-fscanf",
  "level": 3
}, {
  "value": "Q3: Why does fgetc return int instead of char?",
  "id": "q3-why-does-fgetc-return-int-instead-of-char",
  "level": 3
}, {
  "value": "Q4: What happens in binary mode vs text mode on Windows?",
  "id": "q4-what-happens-in-binary-mode-vs-text-mode-on-windows",
  "level": 3
}, {
  "value": "Q5: What are the limitations of fseek and ftell?",
  "id": "q5-what-are-the-limitations-of-fseek-and-ftell",
  "level": 3
}, {
  "value": "Q6: Should I use feof in loop conditions?",
  "id": "q6-should-i-use-feof-in-loop-conditions",
  "level": 3
}, {
  "value": "Q7: What is the difference between r+ and w+?",
  "id": "q7-what-is-the-difference-between-r-and-w",
  "level": 3
}, {
  "value": "Q8: How do you handle binary data portably?",
  "id": "q8-how-do-you-handle-binary-data-portably",
  "level": 3
}, {
  "value": "Q9: What is the safest way to read a string with fscanf?",
  "id": "q9-what-is-the-safest-way-to-read-a-string-with-fscanf",
  "level": 3
}, {
  "value": "Q10: What does fflush(stdin) do?",
  "id": "q10-what-does-fflushstdin-do",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Web Server Logging",
  "id": "1-web-server-logging",
  "level": 3
}, {
  "value": "2. Configuration File Parser",
  "id": "2-configuration-file-parser",
  "level": 3
}, {
  "value": "3. Binary Database Engine (Simple Record Manager)",
  "id": "3-binary-database-engine-simple-record-manager",
  "level": 3
}, {
  "value": "4. File Copy Utility",
  "id": "4-file-copy-utility",
  "level": 3
}, {
  "value": "5. Checksum/Hashing a File Line-by-Line",
  "id": "5-checksumhashing-a-file-line-by-line",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Multiple Choice",
  "id": "multiple-choice",
  "level": 3
}, {
  "value": "True or False",
  "id": "true-or-false",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Core Concepts",
  "id": "core-concepts",
  "level": 3
}, {
  "value": "Reading",
  "id": "reading",
  "level": 3
}, {
  "value": "Writing",
  "id": "writing",
  "level": 3
}, {
  "value": "Positioning",
  "id": "positioning",
  "level": 3
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 3
}, {
  "value": "Buffering",
  "id": "buffering",
  "level": 3
}, {
  "value": "Key Rules",
  "id": "key-rules",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-12-file-handling",
        children: "Chapter 12: File Handling"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/11-dma",
          children: "Dynamic Memory Allocation"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/13-preprocessor",
          children: "The Preprocessor"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open and close files with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read and write formatted data with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fprintf"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read and write lines with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fputs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform binary I/O with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fread"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fwrite"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigate files with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rewind"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle file I/O errors properly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand text vs binary mode, buffering, and temporary files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/12-file-handling/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/12-file-handling/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/12-file-handling/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/12-file-handling/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/12-file-handling/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/12-file-handling/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-big-analogy-file-operations--library-books",
      children: "The Big Analogy: File Operations = Library Books"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file"
      }), " as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library book"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"file.txt\", \"r\")"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check out a book to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "read"
            }), " it"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"file.txt\", \"w\")"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Buy a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "new notebook"
            }), " (erase everything first)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"file.txt\", \"a\")"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Open a journal to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "add"
            }), " pages at the end"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILE *fp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Your ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "library card"
            }), " → the handle to the book"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one word"
            }), " at your current spot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc('A', fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Write ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one word"
            }), " at your current spot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, n, SEEK_SET)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Flip to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "page n"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ftell(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "what page number"
            }), " you are on"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Go back to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "page 1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Return"
            }), " the book to the library"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "feof(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check if you have ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "read the last page"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ferror(fp)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check if the book has a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "torn page"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setvbuf"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Decide whether to use a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "bookmark stack"
            }), " (buffer) or read one page at a time"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you open a file, the OS gives you a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file descriptor"
      }), " (an integer handle). C wraps this in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FILE"
      }), " struct that holds: the file position indicator, buffer state, error/EOF flags, and the actual OS handle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-file-pointer-file",
      children: "12.1 File Pointer (FILE*)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "FILE *fopen(const char *restrict filename, const char *restrict mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-file",
      children: "What is FILE*?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FILE"
      }), " is an opaque structure defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdio.h>"
      }), ". You never need to look inside it; you just use pointers to it. Every file operation takes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FILE*"
      }), " as its first or second argument."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internally, FILE holds:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File position indicator (a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), " offset from the start)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pointer to the buffer (if buffered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer size and current fill level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EOF flag and error flag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The underlying OS file descriptor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FILE*"
      }), " pointer is like your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library card + bookmark"
      }), ". You hand it to the librarian (", (0,jsx_runtime.jsx)(_components.code, {
        children: "fopen"
      }), ") and get back a card that remembers which book, what page you are on, and whether you have had any trouble reading it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-use-a-file",
      children: "Steps to Use a File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declare"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE*"
        }), " pointer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE *fp;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open"
        }), " the file with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp = fopen(\"data.txt\", \"r\");"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check"
        }), " if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NULL"
        }), " (the file might not exist)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read or write"
        }), " using file I/O functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Close"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose(fp)"
        }), " → this flushes buffers and frees the handle"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE fp AS FILE POINTER\nCALL fopen WITH filename AND mode\nSTORE RESULT IN fp\nIF fp EQUALS NULL THEN\n    PRINT error message\n    RETURN failure\nEND IF\nPERFORM file operations using fp\nCALL fclose WITH fp\nRETURN success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"example.txt\", \"r\");\n    if (fp == NULL) {\n        perror(\"fopen failed\");\n        return 1;\n    }\n    printf(\"File opened successfully!\\n\");\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace",
      children: "Dry Run Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "example.txt"
      }), " exists:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fp Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILE *fp;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uninitialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"example.txt\", \"r\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns address of FILE struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File opened, position = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (fp == NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "still valid until closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File closed, buffers flushed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["O(1) ", (0,jsx_runtime.jsx)(_components.em, {
              children: "amortized"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call overhead dominates; path resolution is O(path length) but treated as O(1) for typical use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush buffer (O(buffer size)) + release handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(FILE) ≈ 500 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds buffer, flags, file descriptor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opaque pointer hides OS details; same interface across platforms; supports buffering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must manually manage lifetime; NULL if file cannot be opened; not thread-safe by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All file I/O in C; the only way to access files via standard library"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File does not exist (r mode)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            }), " returns NULL"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path too long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns NULL, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno"
            }), " set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ENAMETOOLONG"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns NULL, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errno"
            }), " set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EACCES"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (crash likely)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid mode string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-opening-files--fopen-modes",
      children: "12.2 Opening Files → fopen Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-1",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "FILE *fopen(const char *restrict filename, const char *restrict mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Opening a file with different modes is like checking out a library book under different ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "access rules"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "r"
        }), " = \"I only want to read this book\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "w"
        }), " = \"Give me a fresh notebook (throw away the old one)\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "a"
        }), " = \"I want to add entries at the back of a journal\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "r+"
        }), " = \"I need to read AND fix some pages\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "w+"
        }), " = \"Fresh notebook that I might also read later\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "a+"
        }), " = \"I want to read the whole journal and add at the end\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " suffix = \"Treat it as a photo album (don't translate newlines)\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fopen-modes--complete-reference-table",
      children: "fopen Modes → Complete Reference Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Append"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Create?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Truncate?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position Start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"r\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File must exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"w\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates new or overwrites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"a\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes always go to end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"r+\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File must exist; read & write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"w+\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates new or overwrites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"a+\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read anywhere, write only at end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"rb\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary, must exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"wb\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary, creates or overwrites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"ab\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"r+b\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary read/write, must exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"w+b\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary read/write, create/truncate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"a+b\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary read + append"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "critical-detail-text-vs-binary-on-windows",
      children: "Critical Detail: Text vs Binary on Windows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On Windows, text mode (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"r\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"w\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"a\""
      }), ", etc.) translates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " (LF) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " (CRLF) on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "read"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ctrl+Z"
        }), " (0x1A) signals EOF in text mode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary mode (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"rb\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"wb\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"ab\""
      }), ") performs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no translation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Linux/macOS, text and binary modes are identical → no translation occurs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-open-a-file",
      children: "Steps to Open a File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the filename and mode string"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen(filename, mode)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immediately"
        }), " check if return is NULL"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Close with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION openFile(name, mode)\n    fp = fopen(name, mode)\n    IF fp == NULL THEN\n        PRINT \"Failed to open\" + name\n        RETURN NULL\n    END IF\n    RETURN fp\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example--all-modes-demonstrated",
      children: "Code Example → All Modes Demonstrated"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp;\n\n    /* \"w\" → write mode, creates or truncates */\n    fp = fopen(\"test_w.txt\", \"w\");\n    if (fp) { fprintf(fp, \"Write mode\\n\"); fclose(fp); }\n\n    /* \"a\" → append mode, writes at end */\n    fp = fopen(\"test_a.txt\", \"a\");\n    if (fp) { fprintf(fp, \"Appended line\\n\"); fclose(fp); }\n\n    /* \"r\" → read mode, file must exist */\n    fp = fopen(\"nonexistent.txt\", \"r\");\n    if (fp == NULL) {\n        perror(\"r mode failed (expected)\");\n    }\n\n    /* \"r+\" → read and write, no truncate */\n    fp = fopen(\"test_rplus.txt\", \"w+\");\n    if (fp) {\n        fprintf(fp, \"Hello \");\n        rewind(fp);\n        char buf[64];\n        fgets(buf, sizeof(buf), fp);\n        printf(\"Read back: %s\", buf);\n        fclose(fp);\n    }\n\n    /* \"wb\" → binary write */\n    fp = fopen(\"test.bin\", \"wb\");\n    if (fp) {\n        int data = 12345;\n        fwrite(&data, sizeof(int), 1, fp);\n        fclose(fp);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fopendatatxt-r",
      children: "Dry Run Trace → fopen(\"data.txt\", \"r+\")"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File on Disk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"data.txt\", \"r+\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data.txt exists, 100 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILE* handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fp == NULL?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "invalidated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(path_length) in kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory traversal + permission check + inode lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~500 bytes (FILE struct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed overhead per open file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (open) + 1 for buffer alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavyweight operation; cache FILE* when reusing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-1",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich mode support; text/binary distinction; cross-platform API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL checks required; no Unicode path support in C standard; Windows text mode surprises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All file opening needs; prefer binary mode for non-text data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"\", \"r\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL (empty filename)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"/nonexistent/deep/file.txt\", \"w\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL if intermediate directory missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"readonly.txt\", \"w\")"
            }), " on read-only file"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL, errno = EACCES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fopen with 500 open files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL, errno = EMFILE (too many open files)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"existing.txt\", \"r+\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works; position at 0, no truncation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Binary mode on Linux with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"rb\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Identical to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"r\""
            }), " (no translation needed)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-closing-a-file--fclose",
      children: "12.3 Closing a File → fclose"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-2",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fclose(FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns 0 on success, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " on error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Closing a file is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "returning a library book"
      }), ". If you don't return it, the library runs out of books (resource leak). The librarian also makes sure all your notes (buffered data) are properly saved before you leave."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-happens-inside-fclose",
      children: "What Happens Inside fclose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flushes"
        }), " any unwritten buffered data to disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discards"
        }), " any unread buffered data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Closes"
        }), " the underlying OS file descriptor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frees"
        }), " the FILE struct memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sets"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp"
        }), " to an invalid state (dangling pointer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all pending writes are done (fclose does this automatically)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose(fp)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do NOT"
        }), " use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp"
        }), " after fclose → it is a dangling pointer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION closeFile(fp)\n    IF fp == NULL THEN\n        RETURN EOF       // safety: cannot close NULL\n    END IF\n    flush buffer to disk\n    free buffer memory\n    close OS file descriptor\n    free FILE struct\n    RETURN 0\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-1",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    if (fp == NULL) {\n        perror(\"fopen\");\n        return 1;\n    }\n\n    fprintf(fp, \"Important data\");\n    if (fclose(fp) == EOF) {\n        perror(\"fclose failed\");\n        return 1;\n    }\n    /* fp is now a dangling pointer → do not use it */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-1",
      children: "Dry Run Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk file"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "test.txt created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"Hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty (buffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\" in buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "invalidated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\" written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flushed, freed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose (buffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must flush buffer to disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose (unbuffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just release handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose with error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF; may lose data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-2",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures data integrity; frees resources; portable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silent data loss if error ignored (check return!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always close files; always check return value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (crash on most implementations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose on read-only file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 (no flush needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose on already closed file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["File open with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["fclose also ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "deletes"
            }), " the temp file automatically"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk full during fclose flush"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF; data not fully written"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-reading-from-files",
      children: "12.4 Reading from Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1241-character-reading--fgetc",
      children: "12.4.1 Character Reading → fgetc"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-3",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fgetc(FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns the next character as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char"
      }), " cast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " on error/end-of-file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reading a file character by character is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reading a scroll one letter at a time"
      }), ", rolling it forward as you go. You can only see one character at your current position, and after reading it, the scroll advances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-return-int",
      children: "Why Return int?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fgetc"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char"
      }), ") so it can represent all 256 possible byte values (0–255) PLUS the special value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " (typically -1). If it returned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), ", you could never distinguish EOF from the byte 0xFF."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-1",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int c = fgetc(fp);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c == EOF"
        }), " → if so, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof(fp)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ferror(fp)"
        }), " to determine why"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c"
        }), " holds the character read"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until EOF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SET fp = fopen(\"file.txt\", \"r\")\nIF fp == NULL THEN error END IF\n\nWHILE (c = fgetc(fp)) != EOF DO\n    process character c\nEND WHILE\n\nIF feof(fp) THEN\n    PRINT \"End of file reached normally\"\nEND IF\n\nfclose(fp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-2",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"alphabet.txt\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    for (char ch = 'A'; ch <= 'Z'; ch++)\n        fputc(ch, fp);\n    fclose(fp);\n\n    /* Now read it back */\n    fp = fopen(\"alphabet.txt\", \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    int c;\n    int count = 0;\n    while ((c = fgetc(fp)) != EOF) {\n        printf(\"byte %2d: '%c' (0x%02X)\\n\", count++, c, c);\n    }\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "byte  0: 'A' (0x41)\nbyte  1: 'B' (0x42)\nbyte  2: 'C' (0x43)\n...\nbyte 25: 'Z' (0x5A)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fgetc-loop-on-abc",
      children: "Dry Run Trace → fgetc Loop on \"ABC\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume file contains \"ABC\\n\" (4 bytes). Initial position = 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c = fgetc(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Continues?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reads byte 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'A' (65)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reads byte 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'B' (66)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reads byte 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'C' (67)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reads byte 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'\\n' (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reads byte 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF (-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (unchanged)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → loop exits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time per call"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["O(1) ", (0,jsx_runtime.jsx)(_components.em, {
              children: "amortized"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually just reads from buffer; actual disk read only when buffer empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(FILE) + BUFSIZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer allocated per open file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-3",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple; safe for binary data; can distinguish all 256 bytes from EOF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for large files (one byte per function call); function call overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text parsing where you need per-character logic; copying files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read past EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF repeatedly (does not error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read error"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns EOF; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ferror(fp)"
            }), " returns non-zero"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary file with byte 0xFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0xFF correctly (int 255), NOT EOF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First call returns EOF immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL fp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1242-line-reading--fgets",
      children: "12.4.2 Line Reading → fgets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-4",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *fgets(char *restrict s, int size, FILE *restrict fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " on success, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NULL"
      }), " on EOF or error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reading a line with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fgets"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tearing off a receipt"
      }), " from a machine: you get everything up to the newline (the tear point), but no more than the paper width (buffer size). If the receipt is too long, you only get the first ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size-1"
      }), " characters → the rest stays in the machine for the next read."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-behaviors",
      children: "Key Behaviors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reads up to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size - 1"
        }), " characters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stops at newline (which is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "included"
        }), " in the buffer)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always null-terminates the buffer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Returns NULL on EOF or error (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "ferror"
        }), " to distinguish)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-2",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare a char buffer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char line[256];"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets(line, sizeof(line), fp);"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if return is NULL (EOF/error)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process the line (note: newline is included)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optionally strip trailing newline: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "line[strcspn(line, \"\\n\")] = '\\0';"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE buffer[BUFFER_SIZE]\nWHILE fgets(buffer, BUFFER_SIZE, fp) != NULL DO\n    remove trailing newline if present\n    process line\nEND WHILE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-3",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    /* Create a test file */\n    FILE *fp = fopen(\"lines.txt\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    fprintf(fp, \"Line 1: Hello\\n\");\n    fprintf(fp, \"Line 2: World\\n\");\n    fprintf(fp, \"Line 3: C Programming\\n\");\n    fclose(fp);\n\n    /* Read it back with fgets */\n    fp = fopen(\"lines.txt\", \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    char line[256];\n    int line_num = 1;\n    while (fgets(line, sizeof(line), fp)) {\n        size_t len = strlen(line);\n        /* Strip trailing newline for clean display */\n        line[strcspn(line, \"\\n\")] = '\\0';\n        printf(\"Line %d (%zu chars): \\\"%s\\\"\\n\",\n               line_num++, len, line);\n    }\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Line 1 (15 chars): \"Line 1: Hello\"\nLine 2 (15 chars): \"Line 2: World\"\nLine 3 (21 chars): \"Line 3: C Programming\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fgets-with-buffer-size-8",
      children: "Dry Run Trace → fgets with buffer size 8"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File contains: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Hello World!\\nNext Line\\n\""
      }), " (21 bytes)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Hello W\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer filled, no newline yet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"orld!\\n\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newline encountered, included"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Next Li\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer filled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"ne\\n\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final line with newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(unchanged)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF → returns NULL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time per call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = bytes read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan for newline, copy to buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads full buffer without finding newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size) per buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-provided buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-4",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (bounds-checked); includes newline; null-terminated; prevents overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial line if buffer too small; newline stripping is manual; slow for binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading text files line by line; configuration files; log parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line longer than buffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns first ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size-1"
            }), " chars; remainder on next call"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty line (\"\\n\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns \"\\n\\0\" (2 bytes in buffer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOF with no data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary file with null bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fgets stops at null byte (it reads, but treats as string end)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File with no trailing newline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads last line (no \\n but null-terminated)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1243-formatted-reading--fscanf",
      children: "12.4.3 Formatted Reading → fscanf"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-5",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fscanf(FILE *restrict fp, const char *restrict format, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns number of input items successfully matched and assigned, or EOF on input failure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fscanf"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "customs declaration form"
      }), ": you tell the officer (format string) what types of data you expect (\"a number, then a word, then a float\"), and the officer extracts those items from the stream. If the data doesn't match the expected format, you get fewer items than expected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-3",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf(fp, format, &var1, &var2, ...)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the return value → compare against expected number of items"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If return < expected, check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ferror"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WHILE (items = fscanf(fp, \"%d %s %f\", &id, name, &gpa)) == 3 DO\n    process record (id, name, gpa)\nEND WHILE\nIF feof(fp) THEN\n    PRINT \"All records read successfully\"\nELSE\n    PRINT \"Format mismatch or read error\"\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-4",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"data.csv\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    fprintf(fp, \"101,Alice,3.8\\n\");\n    fprintf(fp, \"102,Bob,3.5\\n\");\n    fprintf(fp, \"103,Carol,3.9\\n\");\n    fclose(fp);\n\n    /* Now read with fscanf using comma delimiter */\n    fp = fopen(\"data.csv\", \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    int id; char name[50]; float gpa;\n    int records = 0;\n\n    /* Note: commas in format match literal commas in file */\n    while (fscanf(fp, \"%d,%49[^,],%f\", &id, name, &gpa) == 3) {\n        printf(\"Record %d: %d, %s, %.2f\\n\", ++records, id, name, gpa);\n    }\n\n    if (feof(fp))\n        printf(\"\\nTotal: %d records read successfully\\n\", records);\n    else if (ferror(fp))\n        perror(\"Read error\");\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Record 1: 101, Alice, 3.80\nRecord 2: 102, Bob, 3.50\nRecord 3: 103, Carol, 3.90\n\nTotal: 3 records read successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fscanf-malformed-input",
      children: "Dry Run Trace → fscanf Malformed Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"101 Alice 3.8\\n102 Bob BAD\\n103 Carol 3.9\\n\""
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d %s %f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=101, name=\"Alice\", gpa=3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After \"3.8\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d %s %f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=102, name=\"Bob\", gpa=→ (BAD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuck at \"BAD\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d %s %f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails → \"BAD\" doesn't match %d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuck at \"BAD\" forever"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fscanf"
      }), " consumes no input on match failure, leading to infinite loop. Always check return value and break on unexpected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time per call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(input_length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format parsing + character classification + conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per field"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%s"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%[^,]"
            }), " scans until delimiter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (plus outputs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format string stored in read-only memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-5",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful parsing; type-safe (sort of); automatic whitespace skipping (for most specifiers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery from mismatched input is hard; no validation by default; whitespace subtleties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Known-format text files; simple CSV/whitespace data; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " for untrusted input"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format mismatch mid-record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns count of matches so far; stream position at failure point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leading whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most specifiers (except %c, %[, %n) skip whitespace automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric overflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Undefined behavior (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), " with INT_MAX+1 → UB)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%s overflow (no width)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Buffer overflow → CRITICAL: always use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%Ns"
            }), " with width"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOF mid-record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF if no items matched, or count of partially matched items"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1244-binary-reading--fread",
      children: "12.4.4 Binary Reading → fread"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-6",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "size_t fread(void *restrict ptr, size_t element_size, size_t count, FILE *restrict fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns the number of complete elements successfully read (may be less than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), " on error or EOF)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reading binary data is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "photocopying pages"
      }), " from a book: you specify the number of pages (", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), ") and the page size (", (0,jsx_runtime.jsx)(_components.code, {
        children: "element_size"
      }), "), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fread"
      }), " copies the exact raw bytes into your memory. No translation, no formatting → just raw bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-4",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocate a buffer large enough: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buffer_size = element_size * count"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fread(buffer, element_size, count, fp)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check return value: if < count, check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ferror"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process raw data in buffer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE buffer[ELEMENT_SIZE * MAX_COUNT]\nbytesRead = fread(buffer, ELEMENT_SIZE, MAX_COUNT, fp)\nIF bytesRead < MAX_COUNT THEN\n    IF feof(fp) THEN\n        PRINT \"End of file after \" + bytesRead + \" elements\"\n    ELSE\n        PRINT \"Read error occurred\"\n    END IF\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-5",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[32];\n    double salary;\n} Employee;\n\nint main(void)\n{\n    /* Write binary data */\n    Employee emps[] = {\n        {1, \"Alice\",  75000.0},\n        {2, \"Bob\",    82000.0},\n        {3, \"Carol\",  91000.0},\n        {4, \"Dave\",   68000.0}\n    };\n\n    FILE *fp = fopen(\"employees.bin\", \"wb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    fwrite(emps, sizeof(Employee), 4, fp);\n    fclose(fp);\n\n    /* Read binary data */\n    fp = fopen(\"employees.bin\", \"rb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    Employee e;\n    int count = 0;\n    while (fread(&e, sizeof(Employee), 1, fp) == 1) {\n        printf(\"Emp %d: %s ($%.0f)\\n\", e.id, e.name, e.salary);\n        count++;\n    }\n    printf(\"Read %d employees\\n\", count);\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emp 1: Alice ($75000)\nEmp 2: Bob ($82000)\nEmp 3: Carol ($91000)\nEmp 4: Dave ($68000)\nRead 4 employees\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fread-with-sizeofemployee--40",
      children: "Dry Run Trace → fread with sizeof(Employee) = 40"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees.bin"
      }), " (160 bytes = 4 × 40)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "element_size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (EOF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (buffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(total_bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memcpy from internal buffer to user buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (unbuffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(total_bytes) + syscall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each fread may trigger disk I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(element_size * count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-provided buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-6",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw binary access; fast bulk read; no formatting overhead; ideal for struct persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent (endianness, padding); no data validation; binary files not human-readable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database files, image data, serialized objects, performance-critical I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read partial element at EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 (even if 1 byte available but element_size > 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "element_size = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 (reads nothing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File smaller than requested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns number of complete elements, feof set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Struct with padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding bytes written/read; may differ between compilers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-functions-comparison-table",
      children: "Read Functions Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stops At"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Includes Delimiter?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer Safe?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every call"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (byte or EOF)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Char-by-char parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newline or size-1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char*"
            }), " or NULL"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (newline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (width limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-oriented text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whitespace/format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Items matched or EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only with width specifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured text parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of file or count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Items read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (size×count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data, structs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-functions--complexity-comparison",
      children: "Read Functions → Complexity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per call, O(n) for n chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple byte fetch from buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) per line, O(n) total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans for newline, copies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per format string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + output vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format parsing overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for n bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk memcpy, minimal overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-writing-to-files",
      children: "12.5 Writing to Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1251-character-writing--fputc",
      children: "12.5.1 Character Writing → fputc"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-7",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fputc(int c, FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writes the character ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " (converted to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char"
      }), ") to the file. Returns the character written on success, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " on error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writing a character with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fputc"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stamping one letter at a time"
      }), " onto a page. Each stamp advances the position by one letter. If the stamp pad is dry (buffer full), the stamp mechanism must re-ink (flush to disk) before continuing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-5",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Get your character (from a variable, literal, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgetc"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fputc(ch, fp);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check if return is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EOF"
        }), " (write failed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WHILE more characters to write DO\n    result = fputc(nextChar, fp)\n    IF result == EOF THEN\n        PRINT \"Write failed\"\n        BREAK\n    END IF\nEND WHILE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-6",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <ctype.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"upper.txt\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    for (char ch = 'a'; ch <= 'z'; ch++) {\n        if (fputc(toupper(ch), fp) == EOF) {\n            perror(\"fputc failed\");\n            fclose(fp);\n            return 1;\n        }\n        /* add space between letters */\n        if (fputc(' ', fp) == EOF) {\n            perror(\"fputc failed\");\n            fclose(fp);\n            return 1;\n        }\n    }\n    fputc('\\n', fp);\n    fclose(fp);\n\n    /* Display result */\n    fp = fopen(\"upper.txt\", \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    int c;\n    while ((c = fgetc(fp)) != EOF) putchar(c);\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fputc-writing-hin",
      children: "Dry Run Trace → fputc Writing \"Hi\\n\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File initially empty. Buffer size = 512 (typical default). All writes are buffered initially."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fputc('H', fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'H'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'H' (72)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: \"H\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty (buffered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fputc('i', fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'i'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'i' (105)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: \"Hi\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fputc('\\n', fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'\\n'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'\\n' (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: \"Hi\\n\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose(fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flushed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk: \"Hi\\n\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time per call"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["O(1) ", (0,jsx_runtime.jsx)(_components.em, {
              children: "amortized"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually just writes to buffer; flush only when buffer full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 per write (typically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data batched; syscall per buffer-full"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-7",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, predictable; safe for byte-level output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for bulk data; function call overhead per character"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text generation char-by-char; implementing custom text transforms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to read-only file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF, ferror set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF, errno = ENOSPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fputc(EOF, fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UB (EOF = -1, cast to unsigned char → 0xFF, written as byte)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL fp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbuffered stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate syscall; performance penalty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1252-string-writing--fputs",
      children: "12.5.2 String Writing → fputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-8",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fputs(const char *restrict s, FILE *restrict fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writes the string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " to the file. Does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " append a newline. Returns non-negative on success, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " on error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fputs"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pasting a pre-written paragraph"
      }), " into a document. The paragraph goes exactly as-is → no extra line break, no formatting. You get exactly what you put in."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-6",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare a null-terminated string"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fputs(str, fp)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " explicitly if you want a newline"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-8",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION writeLines(fp, linesArray, count)\n    FOR i = 0 TO count-1 DO\n        IF fputs(linesArray[i], fp) == EOF THEN\n            error\n        END IF\n        fputs(\"\\n\", fp)    // explicit newline\n    END FOR\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-7",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"shopping.txt\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    const char *items[] = {\"Apples\", \"Bananas\", \"Milk\", \"Bread\", \"Eggs\"};\n    int count = sizeof(items) / sizeof(items[0]);\n\n    for (int i = 0; i < count; i++) {\n        if (fputs(items[i], fp) == EOF) {\n            perror(\"fputs failed\");\n            fclose(fp);\n            return 1;\n        }\n        if (fputs(\"\\n\", fp) == EOF) {  /* explicit newline */\n            perror(\"fputs failed\");\n            fclose(fp);\n            return 1;\n        }\n    }\n    fclose(fp);\n\n    /* Verify */\n    fp = fopen(\"shopping.txt\", \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n    char line[128];\n    while (fgets(line, sizeof(line), fp))\n        printf(\"%s\", line);\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Apples\nBananas\nMilk\nBread\nEggs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(strlen(s))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy entire string to buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(strlen(s)) (string) + buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String stored in caller's memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-8",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple string output; no formatting overhead; fast for pre-formatted text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No newline appended; no formatting support; not type-safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing pre-formatted or static strings; log messages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Empty string ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes nothing, returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["String with embedded ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\0"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Writes only up to first ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to read-only file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EOF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1253-formatted-writing--fprintf",
      children: "12.5.3 Formatted Writing → fprintf"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-9",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fprintf(FILE *restrict fp, const char *restrict format, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the number of characters written on success, or a negative value on error."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fprintf"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mail-merge printer"
      }), ": you design a template (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Employee: %s (ID: %d)\""
      }), ") and feed it data values. The printer fills in the blanks and produces the formatted output. It handles all the alignment, padding, and type conversion for you."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format-specifier-quick-ref",
      children: "Format Specifier Quick Ref"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%d\", 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%05d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int (zero-padded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%05d\", 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00042"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%-10s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string (left-align)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%-10s\", \"Hi\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Hi        "
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%.2f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double (precision)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%.2f\", 3.14159)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hex int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%x\", 255)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ff"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%p\", ptr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x7ffee4b0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-7",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a format string with conversion specifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide matching arguments"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fprintf(fp, format, arg1, arg2, ...)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check return (optional, but wise)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-9",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION writeReport(fp, employees[], n)\n    fprintf(fp, \"%-20s %5s\\n\", \"Name\", \"Salary\")\n    fprintf(fp, \"%-20s %5s\\n\", \"----\", \"------\")\n    FOR i = 0 TO n-1 DO\n        fprintf(fp, \"%-20s $%7.2f\\n\", employees[i].name, employees[i].salary)\n    END FOR\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-8",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[32];\n    double score;\n} Student;\n\nint main(void)\n{\n    Student students[] = {\n        {101, \"Alice\",   92.5},\n        {102, \"Bob\",     85.0},\n        {103, \"Carol\",   97.3},\n        {104, \"David\",   78.8}\n    };\n    int n = sizeof(students) / sizeof(students[0]);\n\n    FILE *fp = fopen(\"report.txt\", \"w\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    /* Header */\n    fprintf(fp, \"%-6s %-12s %6s  %s\\n\", \"ID\", \"Name\", \"Score\", \"Grade\");\n    fprintf(fp, \"%s\\n\", \"------------------------------\");\n\n    for (int i = 0; i < n; i++) {\n        char grade = students[i].score >= 90 ? 'A' :\n                     students[i].score >= 80 ? 'B' :\n                     students[i].score >= 70 ? 'C' : 'F';\n        int written = fprintf(fp, \"%-6d %-12s %5.1f  %c\\n\",\n            students[i].id, students[i].name,\n            students[i].score, grade);\n        if (written < 0) {\n            perror(\"fprintf failed\");\n            fclose(fp);\n            return 1;\n        }\n    }\n\n    fclose(fp);\n    printf(\"Report written to report.txt (%d records)\\n\", n);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Report written to report.txt (4 records)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents of report.txt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ID     Name          Score  Grade\n------------------------------\n101    Alice         92.5  A\n102    Bob           85.0  B\n103    Carol         97.3  A\n104    David         78.8  C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(format_length + total_output)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format parsing + number-to-string conversion + buffering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion (integers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log₁₀(value))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer-to-ASCII requires division per digit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion (floats)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(precision × log₁₀(value))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float-to-string involves repeated multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(format_length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format string stored in read-only memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-9",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich formatting; type-safe conversions; alignment/padding; locale-aware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format string must match arguments; runtime cost of parsing format; buffer overflow risk with %s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text reports, log files, CSV generation, any structured text output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-9",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fprintf(fp, \"%s\", NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (crash on most systems)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format string with wrong types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Undefined behavior (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large output (>2GB)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return may overflow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (C89/C99 limitation)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File write error mid-output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns negative; partial output may have been written"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1254-binary-writing--fwrite",
      children: "12.5.4 Binary Writing → fwrite"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-10",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "size_t fwrite(const void *restrict ptr, size_t element_size, size_t count, FILE *restrict fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), " elements, each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "element_size"
      }), " bytes, from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ptr"
      }), " to the file. Returns the number of complete elements written (should equal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), " on success)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fwrite"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pouring a mold"
      }), " of your data structure directly onto the page. Every byte of the struct → including padding holes → is cast exactly as it exists in memory. What you see in memory is what you get on disk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "important-endianness-and-portability",
      children: "Important: Endianness and Portability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary files written with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fwrite"
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not portable"
      }), " across platforms with different:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endianness"
        }), " (x86 is little-endian; network data is big-endian)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Struct padding"
        }), " (different alignment rules between compilers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sizeof types"
        }), " (int may be 2, 4, or 8 bytes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For portable binary data, use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fixed-width types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int32_t"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uint64_t"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdint.h>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Byte-by-byte serialization with explicit endian conversion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A serialization library (Protocol Buffers, MessagePack, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-8",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare data in memory"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fwrite(ptr, element_size, count, fp)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check return value == count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-10",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION saveArray(fp, array, elementSize, count)\n    written = fwrite(array, elementSize, count, fp)\n    IF written != count THEN\n        PRINT \"Write error: only \" + written + \" of \" + count + \" elements written\"\n    END IF\n    RETURN written\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-9",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdint.h>   /* for fixed-width types */\n\ntypedef struct {\n    uint32_t magic;    /* 4 bytes → fixed size */\n    uint16_t version;  /* 2 bytes */\n    uint8_t  flags;    /* 1 byte */\n    char     reserved; /* 1 byte padding */\n    double   data[4];  /* 32 bytes */\n} Header;\n\nint main(void)\n{\n    Header h = {\n        .magic   = 0xAE1234EF,\n        .version = 1,\n        .flags   = 0x07,\n        .reserved = 0,\n        .data    = {1.0, 2.0, 3.0, 4.0}\n    };\n\n    FILE *fp = fopen(\"header.bin\", \"wb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    size_t written = fwrite(&h, sizeof(Header), 1, fp);\n    if (written != 1) {\n        perror(\"fwrite failed\");\n        fclose(fp);\n        return 1;\n    }\n    printf(\"Header written: %zu bytes\\n\", sizeof(Header));\n    fclose(fp);\n\n    /* Read it back */\n    fp = fopen(\"header.bin\", \"rb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    Header h2;\n    if (fread(&h2, sizeof(Header), 1, fp) == 1) {\n        printf(\"Magic:   0x%08X\\n\", h2.magic);\n        printf(\"Version: %u\\n\", h2.version);\n        printf(\"Flags:   0x%02X\\n\", h2.flags);\n        for (int i = 0; i < 4; i++)\n            printf(\"data[%d] = %.1f\\n\", i, h2.data[i]);\n    }\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Header written: 40 bytes\nMagic:   0xAE1234EF\nVersion: 1\nFlags:   0x07\ndata[0] = 1.0\ndata[1] = 2.0\ndata[2] = 3.0\ndata[3] = 4.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fwrite-array-of-3-integers",
      children: "Dry Run Trace → fwrite Array of 3 Integers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Memory: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{0x0000002A, 0xFFFFFF9C, 0x00000010}"
      }), " (little-endian)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "element_size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Bytes Written"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fwrite(arr, 4, 3, fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2A 00 00 00 9C FF FF FF 10 00 00 00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-10",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(total_bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straight memcpy to buffer; linear in data size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(total_bytes) (caller's buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data must be in memory before writing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best case throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-5 GB/s (on modern HW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure memory bandwidth; no conversion overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-10",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest output method; direct memory dump; perfect for struct persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not human-readable; endianness issues; struct padding differences; fragile format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical output; intermediate data files; snapshots/cache files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-10",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "element_size = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 (nothing written)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk full during write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns less than count; ferror set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write NULL ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Writing struct with pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers written as addresses → meaningless when reloaded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "write-functions-comparison-table",
      children: "Write Functions Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adds Newline?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type Safe?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formatting?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (int)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte-by-byte output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (char*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-formatted strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (\\n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (match format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full printf-style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reports, logs, CSV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (void*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data, structs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "write-functions--complexity-comparison",
      children: "Write Functions → Complexity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syscalls (typical)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 (buffered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(strlen(s))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + string storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 (buffered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(output_length + format_length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(format_length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 (buffered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(element_size × count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(element_size × count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 (buffered)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-eof-detection--feof",
      children: "12.6 EOF Detection → feof"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-11",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int feof(FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns non-zero if the end-of-file indicator for the stream is set, 0 otherwise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-11",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "feof"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"LAST PAGE\" stamp"
      }), " in a library book. The stamp is applied only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "after"
      }), " you have tried to read past the last page, not when you land on it. In other words, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feof"
      }), " tells you that a previous read operation has already failed because it hit EOF."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "critical-feof-is-not-a-lookahead",
      children: "Critical: feof is NOT a Lookahead"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WRONG → don't do this */\nFILE *fp = fopen(\"file.txt\", \"r\");\nwhile (!feof(fp)) {           /* <--- BUG */\n    fgets(buf, sizeof(buf), fp);\n    printf(\"%s\", buf);         /* Prints last line TWICE */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this is wrong:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feof(fp)"
        }), " is 0 (EOF not set) → enters loop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fgets"
        }), " reads the last line successfully, advances position to EOF"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feof(fp)"
        }), " is still 0 (EOF flag not set until a read ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fails"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fgets"
        }), " attempts to read → fails (returns NULL), sets EOF flag"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But we already printed the stale buffer!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "correct-pattern-check-return-value",
      children: "Correct Pattern: Check Return Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* CORRECT */\nFILE *fp = fopen(\"file.txt\", \"r\");\nchar buf[256];\nwhile (fgets(buf, sizeof(buf), fp)) {  /* Check return value, not feof */\n    printf(\"%s\", buf);\n}\n/* After loop, check why it terminated */\nif (feof(fp)) {\n    /* Normal: reached end of file */\n} else if (ferror(fp)) {\n    /* Error occurred during read */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-9",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " as a loop condition"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the return value of the read function instead"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After the loop, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " to determine ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "why"
        }), " the read stopped"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-11",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Correct EOF checking\nWHILE fgets(buffer, size, fp) != NULL DO\n    process line\nEND WHILE\n\n// Now diagnose why loop ended\nIF feof(fp) THEN\n    PRINT \"Normal EOF\"\nELIF ferror(fp) THEN\n    PRINT \"I/O error occurred\"\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-10",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"numbers.txt\", \"w\");\n    for (int i = 1; i <= 5; i++)\n        fprintf(fp, \"%d\\n\", i);\n    fclose(fp);\n\n    fp = fopen(\"numbers.txt\", \"r\");\n    int num;\n    int count = 0;\n\n    while (fscanf(fp, \"%d\", &num) == 1) {\n        printf(\"Read: %d\\n\", num);\n        count++;\n    }\n\n    if (feof(fp))\n        printf(\"EOF reached after %d numbers\\n\", count);\n    else if (ferror(fp))\n        perror(\"Read error\");\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read: 1\nRead: 2\nRead: 3\nRead: 4\nRead: 5\nEOF reached after 5 numbers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--correct-feof-usage",
      children: "Dry Run Trace → Correct feof Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"10\\n20\\n30\\n\""
      }), " (9 bytes)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fscanf Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "num"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "feof(fp)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ferror(fp)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"Read: 10\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"Read: 20\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"Read: 30\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF (-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"EOF reached after 3\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-11",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple flag check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single bit in FILE struct"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-11",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguishes EOF from error; simple to use (correctly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commonly misused as loop condition; only meaningful AFTER a failed read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-loop diagnosis of why reading stopped"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-11",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feof on empty file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 initially (no read attempted yet); returns 1 after first read attempt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feof after clearerr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 (flag cleared)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feof after fseek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On some implementations, EOF flag is cleared; on others, it persists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feof with error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 if only error flag set (not EOF)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-error-handling--ferror-perror-clearerr",
      children: "12.7 Error Handling → ferror, perror, clearerr"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototypes",
      children: "Prototypes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int ferror(FILE *fp);       /* non-zero if error indicator is set */\nvoid clearerr(FILE *fp);    /* clears both EOF and error indicators */\nvoid perror(const char *s); /* prints \"s: system error message\" to stderr */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-12",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ferror"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"DAMAGED\" sticker"
      }), " on a library book → once a page is torn, the sticker stays until a librarian (clearerr) removes it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "perror"
      }), " is like the librarian ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "explaining"
      }), " exactly what went wrong: \"The book has a torn page\" (errno message)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-flow",
      children: "Error Handling Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                     ┌─────────┐\n                     │ fopen   │\n                     └────┬────┘\n                          │\n               ┌──────────┴──────────┐\n               │ fp == NULL?          │\n               ┌──────────┐           │\n               │   YES    │           │ NO\n               │ perror   │           │\n               │ return   │           │\n               └──────────┘           │\n                          ┌───────────┴───────────┐\n                          │   Read/Write ops      │\n                          └───────────┬───────────┘\n                                      │\n                        ┌─────────────┴────────────┐\n                        │ Check return values     │\n                        └─────────────┬────────────┘\n                                      │\n                  ┌───────────────────┴────────────────┐\n                  │ Return == expected?                │\n                  ┌───────────┐              ┌─────────┴─────┐\n                  │    YES    │              │ NO            │\n                  │ continue  │              │ feof/ferror?  │\n                  └───────────┘              │ perror if err │\n                                             │ clearerr      │\n                                             └───────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example--comprehensive-error-handling",
      children: "Code Example → Comprehensive Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"config.txt\", \"r\");\n    if (fp == NULL) {\n        /* Method 1: perror → simple, includes your prefix */\n        perror(\"fopen\");\n\n        /* Method 2: strerror + errno → more control */\n        fprintf(stderr, \"Failed to open: %s (errno=%d)\\n\",\n                strerror(errno), errno);\n\n        /* Method 3: Custom message */\n        printf(\"Error code %d\\n\", errno);\n        return 1;\n    }\n\n    char buf[256];\n    if (fgets(buf, sizeof(buf), fp) == NULL) {\n        if (feof(fp)) {\n            printf(\"File is empty (normal)\\n\");\n        } else if (ferror(fp)) {\n            perror(\"Read error\");\n            clearerr(fp);  /* Reset error indicator */\n            /* Optionally retry or abort */\n        }\n    }\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--file-opens-but-read-fails-eg-usb-removed",
      children: "Dry Run Trace → File Opens But Read Fails (e.g., USB removed)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ferror()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "errno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fopen(\"config.txt\", \"r\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILE*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fgets(buf, 256, fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (EIO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feof(fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not EOF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ferror(fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error confirmed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "perror(\"Read\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"Read: Input/output error\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clearerr(fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flags cleared, can retry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-12",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ferror"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple flag check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple flag check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clearerr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clears flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "perror"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(strlen(msg) + errno_msg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints to stderr"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-12",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear error diagnosis; errno gives specific system error; perror is convenient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno can be overwritten by subsequent calls; not thread-safe by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check ferror after every I/O operation; use perror immediately after failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-12",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ferror after failed fopen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined (fp is NULL; cannot dereference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errno after success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno is not cleared by successful operations → always check return first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "perror with custom message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"custom: actual error\\n\" to stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clearerr on closed file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ferror returns non-zero as long as ANY error flag is set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-file-positioning",
      children: "12.8 File Positioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1281-fseek-and-ftell",
      children: "12.8.1 fseek and ftell"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototypes-1",
      children: "Prototypes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fseek(FILE *fp, long offset, int whence);\nlong ftell(FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fseek"
      }), " sets the file position indicator to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "offset"
      }), " bytes from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whence"
      }), ".\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "ftell"
      }), " returns the current file position indicator value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "whence-constants",
      children: "whence Constants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SEEK_SET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From the beginning of the file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SEEK_CUR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From the current position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SEEK_END"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From the end of the file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-13",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fseek"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flipping to a specific page"
      }), " in a book:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SEEK_SET"
        }), " = \"Go to page 50\" (from the start)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SEEK_CUR"
        }), " = \"Skip ahead 5 pages from where I am\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SEEK_END"
        }), " = \"Go to 3 pages before the end\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ftell"
      }), " is looking at the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "page number"
      }), " to see where you are."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-idiom-get-file-size",
      children: "Common Idiom: Get File Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "fseek(fp, 0L, SEEK_END);\nlong size = ftell(fp);\nrewind(fp);  /* or fseek(fp, 0L, SEEK_SET) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the standard portable way to determine a file's size in C."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-random-access",
      children: "Steps for Random Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek(fp, offset, whence)"
        }), " to move to desired position"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check return value (0 = success, -1 = error)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read or write at the new position"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell(fp)"
        }), " to confirm position if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-12",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION readRecord(fp, recordNumber, recordSize)\n    offset = recordNumber * recordSize\n    IF fseek(fp, offset, SEEK_SET) != 0 THEN\n        PRINT \"Seek failed\"\n        RETURN NULL\n    END IF\n    fread(buffer, recordSize, 1, fp)\n    RETURN buffer\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-11",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[32];\n    double balance;\n} Record;\n\nint main(void)\n{\n    /* Create a binary file with 5 records */\n    Record recs[] = {\n        {1, \"Alice\", 1000.0}, {2, \"Bob\", 2500.0},\n        {3, \"Carol\", 3800.0}, {4, \"Dave\", 1500.0},\n        {5, \"Eve\",   5000.0}\n    };\n\n    FILE *fp = fopen(\"records.bin\", \"wb\");\n    fwrite(recs, sizeof(Record), 5, fp);\n    fclose(fp);\n\n    /* Open and use random access */\n    fp = fopen(\"records.bin\", \"rb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    /* Get file size */\n    fseek(fp, 0L, SEEK_END);\n    long file_size = ftell(fp);\n    printf(\"File size: %ld bytes (%zu per record, %ld records)\\n\",\n           file_size, sizeof(Record), file_size / sizeof(Record));\n\n    /* Read record 3 (0-indexed: index 2) */\n    Record r;\n    fseek(fp, 2L * sizeof(Record), SEEK_SET);\n    fread(&r, sizeof(Record), 1, fp);\n    printf(\"\\nRecord 3: %d, %s, $%.2f\\n\", r.id, r.name, r.balance);\n\n    /* Read last record using SEEK_END */\n    fseek(fp, -(long)sizeof(Record), SEEK_END);\n    fread(&r, sizeof(Record), 1, fp);\n    printf(\"Last record: %d, %s, $%.2f\\n\", r.id, r.name, r.balance);\n\n    /* Show current position */\n    long pos = ftell(fp);\n    printf(\"Current position: %ld (end of file = %ld)\\n\", pos, file_size);\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "File size: 200 bytes (40 per record, 5 records)\n\nRecord 3: 3, Carol, $3800.00\nLast record: 5, Eve, $5000.00\nCurrent position: 200 (end of file = 200)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--fseekftell-on-200-byte-file",
      children: "Dry Run Trace → fseek/ftell on 200-byte File"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "whence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ftell Returns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek(fp, 0, SEEK_SET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEEK_SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek(fp, 80, SEEK_SET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEEK_SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fread(&r, 40, 1, fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek(fp, -40, SEEK_END)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEEK_END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftell(fp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-13",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek (buffered stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just adjusts the buffer position indicator; may flush if switching read→write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek (unbuffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single lseek system call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cached position (adjusted for buffer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek beyond EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On POSIX, allows creating a sparse file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-13",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables random access; file size idiom; both absolute and relative positioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), " limit on large files (>2GB on 32-bit); not all streams support seeking (pipes, stdin)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary record access; file size determination; jumping to specific data regions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-13",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, 0, SEEK_END)"
            }), " on pipe"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1 (pipes are not seekable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative offset with SEEK_SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior on some systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek on text stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset only valid from SEEK_SET (previous ftell value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek with fflush between read/write"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required when switching between read and write on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "r+"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "w+"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seeking past EOF then writing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Creates a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "sparse file"
            }), " (holes read as zeroes)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1282-rewind",
      children: "12.8.2 rewind"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-12",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void rewind(FILE *fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fseek(fp, 0L, SEEK_SET)"
      }), " but also clears the error and EOF indicators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-difference-from-fseekfp-0-seek_set",
      children: "Key Difference from fseek(fp, 0, SEEK_SET)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind(fp)"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, 0, SEEK_SET)"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets to 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets to 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not cleared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOF flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not cleared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 on success, -1 on error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-12",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    fprintf(fp, \"Line 1\\nLine 2\\nLine 3\\n\");\n    fclose(fp);\n\n    fp = fopen(\"test.txt\", \"r\");\n    char buf[64];\n\n    fgets(buf, sizeof(buf), fp);\n    printf(\"First read: %s\", buf);           /* Line 1 */\n\n    rewind(fp);  /* go back to beginning */\n\n    fgets(buf, sizeof(buf), fp);\n    printf(\"After rewind: %s\", buf);         /* Line 1 again */\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "First read: Line 1\nAfter rewind: Line 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1283-fgetpos-and-fsetpos-large-file-support",
      children: "12.8.3 fgetpos and fsetpos (Large File Support)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototypes-2",
      children: "Prototypes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fgetpos(FILE *restrict fp, fpos_t *restrict pos);\nint fsetpos(FILE *fp, const fpos_t *pos);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "fpos_t"
      }), " is an opaque type that can represent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any"
      }), " position in the file, even beyond ", (0,jsx_runtime.jsx)(_components.code, {
        children: "long"
      }), "'s range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-use-fgetposfsetpos-instead-of-ftellfseek",
      children: "Why Use fgetpos/fsetpos Instead of ftell/fseek?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation of ftell/fseek"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution with fgetpos/fsetpos"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), " is 32-bit on many platforms → max 2GB file"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fpos_t"
            }), " can be 64-bit or larger"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftell return value cannot distinguish error from position -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fgetpos returns 0/-1, stores position in fpos_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not all implementations support SEEK_END properly on binary streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works reliably on all standard-conforming implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-13",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"large.bin\", \"wb\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    /* Write 100 zeros */\n    long long big_data[100] = {0};\n    fwrite(big_data, sizeof(long long), 100, fp);\n\n    /* Save position */\n    fpos_t pos;\n    if (fgetpos(fp, &pos) != 0) {\n        perror(\"fgetpos failed\");\n        fclose(fp);\n        return 1;\n    }\n    printf(\"Position saved\\n\");\n\n    /* Write more */\n    fwrite(big_data, sizeof(long long), 50, fp);\n    fclose(fp);\n\n    /* Reopen and restore position */\n    fp = fopen(\"large.bin\", \"rb\");\n    if (fsetpos(fp, &pos) != 0) {\n        perror(\"fsetpos failed\");\n        fclose(fp);\n        return 1;\n    }\n\n    /* We are now at position after the first 100 long longs */\n    printf(\"Position restored, reading...\\n\");\n    long long val;\n    fread(&val, sizeof(long long), 1, fp);\n    printf(\"Value: %lld\\n\", val);\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Position saved\nPosition restored, reading...\nValue: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--all-positioning-functions",
      children: "Complexity Analysis → All Positioning Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fseek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May flush buffer (O(buffer_size))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cached value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rewind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Also clears flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fgetpos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof(fpos_t)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores opaque position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fsetpos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores from fpos_t"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positioning-functions-comparison-table",
      children: "Positioning Functions Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sets Position?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gets Position?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clears Flags?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Large File?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (long)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ftell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long/-1L"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (long)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (long)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetpos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/-1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (fpos_t)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fsetpos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (fpos_t)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-text-vs-binary-files",
      children: "12.9 Text vs Binary Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-14",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text file"
        }), " = A handwritten letter. You can read it, it has lines and paragraphs, and it uses special characters (newlines) to separate sections. On Windows, the mailroom converts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " (your line break) to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " (the standard \"end of line\" for letters)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary file"
        }), " = A computer's raw memory dump. Every byte is pristine and untranslated. There are no \"lines\" → just a sequence of bytes that some program knows how to interpret."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-differences",
      children: "Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newline translation (Win)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\\n"
            }), " ↔ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\r\\n"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOF marker (Win)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+Z (0x1A) treated as EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1A is just a byte"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops at EOF marker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads all bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write behavior"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\\n"
            }), " expanded to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\r\\n"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes exactly what's in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seeking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (positions may not match byte offsets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positions = byte offsets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code, text data, config files, HTML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Images, executables, serialized structs, compressed data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text-vs-binary--comparison-table",
      children: "Text vs Binary → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extension convention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".txt, .csv, .json, .xml, .html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".bin, .dat, .exe, .jpg, .mp3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newline handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOF sentinel (Windows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1A (Ctrl+Z) treated as EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No sentinel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unusual (string terminator)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (notepad/editor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (hex editor needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (text is universal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (endianness, padding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (formatting characters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (raw bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (conversion, scanning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (bulk copy)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example--demonstrating-text-vs-binary-on-windows",
      children: "Code Example → Demonstrating Text vs Binary on Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    /* Write 10 bytes: 0x0A (LF) surrounded by A's */\n    unsigned char data[] = { 'A', 'A', 'A', 'A', 0x0A, 'B', 'B', 'B', 'B', '\\n' };\n    int n = sizeof(data);\n\n    /* Write in binary mode */\n    FILE *fb = fopen(\"test_binary.bin\", \"wb\");\n    fwrite(data, 1, n, fb);\n    fclose(fb);\n\n    /* Write same data in text mode */\n    FILE *ft = fopen(\"test_text.txt\", \"w\");\n    fwrite(data, 1, n, ft);\n    fclose(ft);\n\n    /* Compare sizes */\n    fb = fopen(\"test_binary.bin\", \"rb\");\n    fseek(fb, 0, SEEK_END);\n    long bin_size = ftell(fb);\n    fclose(fb);\n\n    ft = fopen(\"test_text.txt\", \"rb\");\n    fseek(ft, 0, SEEK_END);\n    long txt_size = ftell(ft);\n    fclose(ft);\n\n    printf(\"Binary size: %ld bytes (no translation)\\n\", bin_size);\n    printf(\"Text size:   %ld bytes (LF→CRLF if Windows)\\n\", txt_size);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output on Windows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Binary size: 10 bytes (no translation)\nText size:   11 bytes (LF→CRLF if Windows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output on Linux/macOS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Binary size: 10 bytes (no translation)\nText size:   10 bytes (no translation on Linux)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1210-sequential-vs-random-access",
      children: "12.10 Sequential vs Random Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-15",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential access"
        }), " = Reading a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "scroll"
        }), ". You unroll forward, read, unroll more. You cannot skip ahead easily. To re-read something, you must roll the entire scroll back to the start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random access"
        }), " = Reading a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "book with an index"
        }), ". You can flip directly to any chapter, read a specific page, then jump to another section."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequential-access",
      children: "Sequential Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File is read/written from beginning to end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Position moves forward monotonically (for reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No seeking; simple read/write loops"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Works on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all"
        }), " stream types (files, pipes, sockets, stdin)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Sequential read → works on any stream */\nchar buf[256];\nwhile (fgets(buf, sizeof(buf), stdin)) {\n    process(buf);\n}\n\n/* Sequential write */\nfor (int i = 0; i < 100; i++)\n    fprintf(fp, \"Record %d\\n\", i);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "random-access",
      children: "Random Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can jump to any byte position instantly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "rewind"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only works on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "seekable"
        }), " streams (files, not pipes/sockets/stdin)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables: databases, indexed files, in-place updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Random access to records */\nint record_num = 42;\nfseek(fp, record_num * sizeof(Record), SEEK_SET);\nfread(&rec, sizeof(Record), 1, fp);\n\n/* In-place update */\nfseek(fp, pos, SEEK_SET);\nfprintf(fp, \"UPDATED\");  /* Overwrite specific bytes */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequential-vs-random-access--comparison-table",
      children: "Sequential vs Random Access → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear from start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary positions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fgetc, fgets, fscanf, fread, fputc, fputs, fprintf, fwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fseek, ftell, rewind, fgetpos, fsetpos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (exploits buffering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (cache misses, seeks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log processing, text files, streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, indexed records, binary formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipe/socket support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (not seekable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdin support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires position management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering benefit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (prefetching)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (random access patterns)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-comparison",
      children: "Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequential (10⁶ records)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random (10⁶ records)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2s (SSD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2-5s (SSD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (sequential prefetch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (TLB/cache misses)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full buffer used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer invalidated frequently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk seek overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (contiguous reads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant (HDD especially)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example--sequential-vs-random-performance-demo",
      children: "Code Example → Sequential vs Random Performance Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <time.h>\n\n#define RECORDS 100000\n#define QUERIES 10000\n\ntypedef struct { int id; double value; } Item;\n\nint main(void)\n{\n    Item *data = malloc(RECORDS * sizeof(Item));\n    for (int i = 0; i < RECORDS; i++) {\n        data[i].id = i;\n        data[i].value = (double)i * 1.5;\n    }\n\n    FILE *fp = fopen(\"data.bin\", \"wb\");\n    fwrite(data, sizeof(Item), RECORDS, fp);\n    fclose(fp);\n    free(data);\n\n    /* Sequential read */\n    fp = fopen(\"data.bin\", \"rb\");\n    clock_t start = clock();\n    Item item;\n    while (fread(&item, sizeof(Item), 1, fp) == 1) {\n        /* just reading */\n    }\n    clock_t end = clock();\n    double seq_time = (double)(end - start) / CLOCKS_PER_SEC;\n    fclose(fp);\n\n    /* Random read (QUERIES random records) */\n    fp = fopen(\"data.bin\", \"rb\");\n    srand(42);\n    start = clock();\n    for (int i = 0; i < QUERIES; i++) {\n        int idx = rand() % RECORDS;\n        fseek(fp, idx * sizeof(Item), SEEK_SET);\n        fread(&item, sizeof(Item), 1, fp);\n    }\n    end = clock();\n    double rand_time = (double)(end - start) / CLOCKS_PER_SEC;\n    fclose(fp);\n\n    printf(\"Sequential: %d records in %.4fs\\n\", RECORDS, seq_time);\n    printf(\"Random:     %d queries in %.4fs (%.1f micros/query)\\n\",\n           QUERIES, rand_time, rand_time / QUERIES * 1e6);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical SSD):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sequential: 100000 records in 0.0032s\nRandom:     10000 queries in 0.0085s (0.9 micros/query)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1211-temporary-files",
      children: "12.11 Temporary Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12111-tmpfile",
      children: "12.11.1 tmpfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-13",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "FILE *tmpfile(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Creates a temporary file opened in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"wb+\""
      }), " mode (binary read/write). The file is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatically deleted"
      }), " when closed or when the program terminates normally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-16",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "tmpfile"
      }), " is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scratch paper"
      }), ": you jot down intermediate calculations, use them, then throw the paper away. The trash bin empties itself automatically when you leave the room."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-10",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FILE *fp = tmpfile();"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for NULL (allocation failure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read/write as needed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Either ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose(fp)"
        }), " or let program exit clean it up"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-14",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    FILE *fp = tmpfile();\n    if (fp == NULL) {\n        perror(\"tmpfile failed\");\n        return 1;\n    }\n\n    /* Write intermediate data */\n    int primes[] = {2, 3, 5, 7, 11, 13, 17, 19};\n    fwrite(primes, sizeof(int), 8, fp);\n\n    /* Read back */\n    rewind(fp);\n    int val;\n    printf(\"Primes from temp file: \");\n    while (fread(&val, sizeof(int), 1, fp) == 1)\n        printf(\"%d \", val);\n    printf(\"\\n\");\n\n    /* File is auto-deleted on close */\n    fclose(fp);\n    /* Alternatively, could let program exit */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Primes from temp file: 2 3 5 7 11 13 17 19\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12112-tmpnam-deprecatedsecurity-warning",
      children: "12.11.2 tmpnam (Deprecated/Security Warning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype-14",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *tmpnam(char *s);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generates a unique filename. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " There is a race condition between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tmpnam"
      }), " returning the name and your program opening the file → another process could create a file with that name first (TOCTOU vulnerability)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safer-alternative-mkstemp-posix",
      children: "Safer Alternative: mkstemp (POSIX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* POSIX only → not in C standard */\nchar template[] = \"/tmp/myapp_XXXXXX\";\nint fd = mkstemp(template);\nif (fd == -1) { perror(\"mkstemp\"); return 1; }\nFILE *fp = fdopen(fd, \"w+\");\n/* ... use file ... */\nfclose(fp);\nremove(template);  /* manual cleanup needed */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "temporary-files-comparison",
      children: "Temporary Files Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auto-delete"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Named?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (temp name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-lived scratch data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpnam()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNSAFE (TOCTOU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Avoid"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mkstemp()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (template)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on precautions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you need a named temp file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-14",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tmpfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) path creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates file in system temp directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tmpnam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) name generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does NOT create file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1212-file-buffering",
      children: "12.12 File Buffering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-17",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Buffering is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "using a tray"
      }), " to carry multiple dishes at once instead of walking each dish individually from the kitchen to the table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully buffered"
        }), ": Fill a large tray (buffer), serve a full tray at once. Best for file I/O."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Line buffered"
        }), ": Fill the tray until a full course (line) is ready, then serve. Used for interactive output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unbuffered"
        }), ": Carry each dish individually. Slow but immediate. Used for error messages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stream-buffering-modes",
      children: "Stream Buffering Modes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "setvbuf Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Buffer Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fully buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IOFBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write only when buffer is full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096 or 8192 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IOLBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write when newline encountered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout (interactive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbuffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IONBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No buffering; immediate I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-buffering-behavior",
      children: "Default Buffering Behavior"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stdin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stdout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line buffered (if terminal), fully buffered (if pipe/file)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stderr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbuffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error messages must appear immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for disk I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototypes-3",
      children: "Prototypes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int setvbuf(FILE *restrict fp, char *restrict buf, int mode, size_t size);\nvoid setbuf(FILE *restrict fp, char *restrict buf);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "setbuf(fp, buf)"
      }), " is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setvbuf(fp, buf, buf ? _IOFBF : _IONBF, BUFSIZ)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-custom-buffering",
      children: "Steps for Custom Buffering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide on buffer mode and size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally allocate a buffer (or let setvbuf allocate internally)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setvbuf(fp, buf, mode, size)"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "after fopen but before any I/O"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you provided ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buf"
        }), ", it must remain valid until fclose"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-15",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    /* Default buffered write */\n    FILE *fp = fopen(\"normal.txt\", \"w\");\n    fprintf(fp, \"This is buffered\\n\");\n    printf(\"Before fclose: data may not be on disk yet\\n\");\n    fclose(fp);\n\n    /* Unbuffered write → every write goes to disk immediately */\n    fp = fopen(\"unbuffered.txt\", \"w\");\n    setvbuf(fp, NULL, _IONBF, 0);  /* no buffering */\n    fprintf(fp, \"This is written immediately\\n\");\n    printf(\"Data is already on disk\\n\");\n    fclose(fp);\n\n    /* Custom buffer */\n    fp = fopen(\"custom_buf.txt\", \"w\");\n    char mybuf[8192];\n    setvbuf(fp, mybuf, _IOFBF, sizeof(mybuf));\n    fprintf(fp, \"Using custom 8K buffer\\n\");\n    fclose(fp);\n    /* mybuf can be reused after fclose */\n\n    /* Line buffered */\n    fp = fopen(\"line_buf.txt\", \"w\");\n    setvbuf(fp, NULL, _IOLBF, 256);\n    fprintf(fp, \"First line\\n\");  /* flushed here */\n    fprintf(fp, \"Second line\\n\"); /* flushed here */\n    fprintf(fp, \"No newline yet\"); /* still buffered! */\n    fclose(fp);                    /* flushes remaining */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace--default-buffered-write-bufsiz4096",
      children: "Dry Run Trace → Default Buffered Write (BUFSIZ=4096)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File: 100 bytes of output."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Write Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position in Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fprintf 20 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: [20 bytes]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fprintf 30 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: [50 bytes]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fprintf 40 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer: [90 bytes]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fclose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flushed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk: [100 bytes]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With unbuffered (", (0,jsx_runtime.jsx)(_components.code, {
        children: "_IONBF"
      }), "), each write would go to disk immediately → 3 syscalls instead of 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer-size-trade-off",
      children: "Buffer Size Trade-off"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Cost (1000 small writes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 (unbuffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 syscalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stderr, real-time logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40 syscalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-buffered interactive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4096 (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3 syscalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General file I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65536 (64 KB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 syscall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk file transfer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-15",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time per small write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syscalls for 1000 writes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbuffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(syscall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every write = system call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000/lines_per_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush on newline or full buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fully buffered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush only when buffer full"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table-14",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatic performance improvement; configurable per-stream; custom buffer support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data loss risk on crash (buffered data not on disk); manual flush sometimes needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default buffered for files; unbuffered for stderr; line buffered for interactive stdout"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-14",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setvbuf after first I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined; may be ignored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buf=NULL with _IOFBF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setvbuf allocates internal buffer (size may be rounded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer too small (< 2 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some implementations require minimum size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fflush then crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in buffer is lost (use unbuffered or fflush frequently)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setbuf(fp, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes stream unbuffered"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stream-buffering--mode-comparison-table",
      children: "Stream Buffering → Mode Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_IOFBF"
            }), " (Full)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_IOLBF"
            }), " (Line)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_IONBF"
            }), " (None)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When data is written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer full, fflush, or fclose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newline, buffer full, fflush, or fclose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every write immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per buffer-full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per line (typical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data safety (crash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (data in buffer lost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (up to 1 line lost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (immediate write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout (terminal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setvbuf constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IOFBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IOLBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_IONBF"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input/Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Return"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILE *"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opening files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closing files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text/Bin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Char-by-char read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text/Bin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Char-by-char write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line (string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-oriented read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parsed read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary bulk read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary bulk write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset + whence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ftell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset to start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetpos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save position (large)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fsetpos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fpos_t*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "feof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ferror"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clearerr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "perror"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print error message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "w+b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILE *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temp auto-delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old/new name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rename file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fflush"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force buffer flush"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setvbuf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode + size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set buffering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setbuf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set/remove buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--common-file-operations",
      children: "Quick Reference → Common File Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for reading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILE *fp = fopen(\"file.txt\", \"r\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for writing (truncate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fp = fopen(\"file.txt\", \"w\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for appending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fp = fopen(\"file.txt\", \"a\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for read+write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fp = fopen(\"file.txt\", \"r+\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open binary for writing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fp = fopen(\"file.bin\", \"wb\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check if open succeeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (fp == NULL) { perror(\"fopen\"); return 1; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Close file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read one character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int c = fgetc(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write one character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc('A', fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read a line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets(buf, sizeof(buf), fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write a string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs(\"hello\\n\", fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"Count: %d\\n\", n);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf(fp, \"%d\", &n);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read binary struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fread(&s, sizeof(s), 1, fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write binary struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite(&s, sizeof(s), 1, fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get file size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, 0, SEEK_END); long sz = ftell(fp); rewind(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek to position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, offset, SEEK_SET);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek forward from current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, n, SEEK_CUR);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek backward from end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek(fp, -n, SEEK_END);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get current position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long pos = ftell(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reset to beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flush buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fflush(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test for end of file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (feof(fp)) ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test for error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (ferror(fp)) ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "perror(\"context\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear error/EOF flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clearerr(fp);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create temp file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILE *tmp = tmpfile();"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remove(\"file.txt\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rename file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rename(\"old.txt\", \"new.txt\");"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set buffering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setvbuf(fp, NULL, _IONBF, 0);"
            }), " (unbuffered)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File I/O Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            }), " to read key=value lines"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"host=localhost\\nport=8080\\n\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(stderr, ...)"
            }), " for real-time output"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(log_fp, \"[%s] %s\\n\", timestamp, msg);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSV data export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf(fp, \"%d,%s,%f\\n\", ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exchange between programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Struct persistence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), " for records"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database files, game saves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image processing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Binary ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), " to load raw pixel data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PPM, BMP loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File copy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            }), " loop"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cp command implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialization"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            }), " entire struct (with care)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore application state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database indexing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fseek"
            }), " to record offset"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct-access record retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary sort"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile()"
            }), " for intermediate merge"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sorting algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock files"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(\"lock\", \"w\")"
            }), " with exclusive create"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-mapped fallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), " large file into malloc'd buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When mmap not available"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-happens-when-you-read-past-eof",
      children: "Q1: What happens when you read past EOF?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once EOF is reached, every subsequent read function returns its failure indicator (EOF for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fgetc"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "fscanf"
      }), ", NULL for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fgets"
      }), ", 0 for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fread"
      }), "). The EOF flag stays set until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clearerr"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rewind"
      }), ". The file position indicator does NOT advance past the end."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "FILE *fp = fopen(\"empty.txt\", \"r\");  /* empty file */\nint c = fgetc(fp);  /* returns EOF */\nprintf(\"feof: %d\\n\", feof(fp));  /* 1 (non-zero) */\nc = fgetc(fp);       /* returns EOF again */\nclearerr(fp);        /* clear EOF flag */\nprintf(\"feof: %d\\n\", feof(fp));  /* 0 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-difference-between-fgets-and-fscanf",
      children: "Q2: What is the difference between fgets and fscanf?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fgets"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fscanf"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw characters until newline or size-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted tokens according to format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes newline in buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips leading whitespace (most specifiers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns char* (string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts to specified types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (whole line or NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (partial match leaves stream in unknown state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (size parameter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (unless width given for %s)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-why-does-fgetc-return-int-instead-of-char",
      children: "Q3: Why does fgetc return int instead of char?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To distinguish EOF (-1, typically) from the 256 possible byte values (0–255). If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fgetc"
      }), " returned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char"
      }), ", it could never signal EOF. If it returned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), ", byte 0xFF (255) would be indistinguishable from -1 (EOF) on platforms where char is signed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WRONG → loses ability to distinguish EOF from 0xFF */\nchar c;\nwhile ((c = fgetc(fp)) != EOF) { /* never true if byte == 0xFF */ }\n\n/* CORRECT */\nint c;\nwhile ((c = fgetc(fp)) != EOF) { /* works for all 256 byte values */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-happens-in-binary-mode-vs-text-mode-on-windows",
      children: "Q4: What happens in binary mode vs text mode on Windows?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text mode"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " (LF, 0x0A) written → translated to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " (CRLF, 0x0D 0x0A). On read, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), ". Also, byte 0x1A (Ctrl+Z) is treated as EOF on read."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary mode"
        }), ": No translation. All bytes read/written verbatim."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux/macOS"
        }), ": No difference between text and binary modes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Windows text mode → file size grows */\nFILE *fp = fopen(\"text.txt\", \"w\");\nfputc('\\n', fp);  /* writes 2 bytes: 0x0D 0x0A */\nfclose(fp);\n\n/* Windows binary mode → file size exact */\nfp = fopen(\"binary.bin\", \"wb\");\nfputc('\\n', fp);  /* writes 1 byte: 0x0A */\nfclose(fp);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-the-limitations-of-fseek-and-ftell",
      children: "Q5: What are the limitations of fseek and ftell?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "32-bit long"
        }), ": On 32-bit systems, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), " is 4 bytes → max file size of 2GB. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgetpos"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "fsetpos"
        }), " for larger files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text streams"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell"
        }), " returns values that may not correspond to byte offsets due to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " translation. Only valid for seeking with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek(fp, offset, SEEK_SET)"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "offset"
        }), " came from a previous ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-seekable streams"
        }), ": Pipes, sockets, and stdin are not seekable → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), " returns -1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Binary streams with trailing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\\r\\n"
          }), " on Windows"]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell"
        }), " may give positions that don't match byte offsets for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-should-i-use-feof-in-loop-conditions",
      children: "Q6: Should I use feof in loop conditions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No."
      }), " Always check the return value of the read function instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WRONG */\nwhile (!feof(fp)) {\n    fgets(buf, sizeof(buf), fp);\n    printf(\"%s\", buf);  /* prints last line twice! */\n}\n\n/* CORRECT */\nwhile (fgets(buf, sizeof(buf), fp)) {\n    printf(\"%s\", buf);\n}\n/* Now use feof/ferror to diagnose WHY loop ended */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-difference-between-r-and-w",
      children: "Q7: What is the difference between r+ and w+?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File exists?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File missing?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"r+\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves existing content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"w+\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens (truncates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroys existing content"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-handle-binary-data-portably",
      children: "Q8: How do you handle binary data portably?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use fixed-width types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int32_t"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uint64_t"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdint.h>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialize byte-by-byte with explicit endian conversion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid writing structs directly (padding differs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a well-defined format (protocol buffers, JSON, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Portable binary write of int32_t (little-endian) */\nvoid write_int32(FILE *fp, int32_t val) {\n    unsigned char buf[4];\n    buf[0] =  val & 0xFF;\n    buf[1] = (val >> 8) & 0xFF;\n    buf[2] = (val >> 16) & 0xFF;\n    buf[3] = (val >> 24) & 0xFF;\n    fwrite(buf, 1, 4, fp);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-safest-way-to-read-a-string-with-fscanf",
      children: "Q9: What is the safest way to read a string with fscanf?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always specify a maximum width to prevent buffer overflow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char name[32];\nfscanf(fp, \"%31s\", name);  /* width = buffer size - 1 */\n/* OR use the more robust approach: */\nfgets(name, sizeof(name), fp);\nname[strcspn(name, \"\\n\")] = '\\0';  /* strip newline */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-does-fflushstdin-do",
      children: "Q10: What does fflush(stdin) do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By the C standard, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fflush"
      }), " is defined only for output streams. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fflush(stdin)"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), " per the C standard, though some implementations (Microsoft) define it as discarding unread input. For portable code, do NOT use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fflush(stdin)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-web-server-logging",
      children: "1. Web Server Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <time.h>\n\nvoid log_request(const char *client_ip, const char *method,\n                 const char *path, int status)\n{\n    FILE *log = fopen(\"/var/log/server.log\", \"a\");\n    if (log == NULL) {\n        perror(\"Cannot open log\");\n        return;\n    }\n\n    time_t now = time(NULL);\n    struct tm *tm = localtime(&now);\n\n    /* Apache Common Log Format */\n    fprintf(log, \"%s - - [%02d/%s/%04d:%02d:%02d:%02d +0000] \"\n                 \"\\\"%s %s HTTP/1.1\\\" %d %d\\n\",\n            client_ip,\n            tm->tm_mday, month_names[tm->tm_mon], tm->tm_year + 1900,\n            tm->tm_hour, tm->tm_min, tm->tm_sec,\n            method, path, status, 0);\n\n    fclose(log);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-configuration-file-parser",
      children: "2. Configuration File Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char host[256];\n    int port;\n    char db_name[128];\n    int max_connections;\n} Config;\n\nint load_config(const char *filename, Config *cfg)\n{\n    FILE *fp = fopen(filename, \"r\");\n    if (fp == NULL) return -1;\n\n    /* Set defaults */\n    cfg->port = 3306;\n    cfg->max_connections = 100;\n\n    char line[512];\n    while (fgets(line, sizeof(line), fp)) {\n        /* Remove trailing newline */\n        line[strcspn(line, \"\\n\")] = '\\0';\n\n        char key[128], value[384];\n        if (sscanf(line, \"%127[^=]=%383s\", key, value) == 2) {\n            if (strcmp(key, \"host\") == 0)\n                strncpy(cfg->host, value, sizeof(cfg->host) - 1);\n            else if (strcmp(key, \"port\") == 0)\n                cfg->port = atoi(value);\n            else if (strcmp(key, \"db_name\") == 0)\n                strncpy(cfg->db_name, value, sizeof(cfg->db_name) - 1);\n            else if (strcmp(key, \"max_connections\") == 0)\n                cfg->max_connections = atoi(value);\n        }\n    }\n    fclose(fp);\n    return 0;\n}\n\nint main(void)\n{\n    Config cfg;\n    if (load_config(\"server.conf\", &cfg) == 0) {\n        printf(\"Host: %s\\nPort: %d\\nDB: %s\\nMax conn: %d\\n\",\n               cfg.host, cfg.port, cfg.db_name, cfg.max_connections);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-binary-database-engine-simple-record-manager",
      children: "3. Binary Database Engine (Simple Record Manager)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n#include <stdint.h>\n\n#define MAX_NAME 48\n#define MAX_RECORDS 10000\n\ntypedef struct {\n    uint32_t id;\n    char name[MAX_NAME];\n    double balance;\n    uint8_t active;  /* 1 = active, 0 = deleted */\n    uint8_t _pad[7]; /* explicit padding for portability */\n} Record;\n\nint db_add(FILE *fp, const char *name, double balance) {\n    static uint32_t next_id = 1;\n\n    fseek(fp, 0L, SEEK_END);  /* append at end */\n    Record r = {\n        .id = next_id++,\n        .balance = balance,\n        .active = 1\n    };\n    strncpy(r.name, name, MAX_NAME - 1);\n\n    return fwrite(&r, sizeof(Record), 1, fp) == 1 ? 0 : -1;\n}\n\nRecord* db_find_by_id(FILE *fp, uint32_t id) {\n    static Record r;\n\n    fseek(fp, 0L, SEEK_END);\n    long file_size = ftell(fp);\n    int num_records = file_size / sizeof(Record);\n\n    /* Binary search on sorted ID (assumes sorted) */\n    int lo = 0, hi = num_records - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        fseek(fp, mid * sizeof(Record), SEEK_SET);\n        fread(&r, sizeof(Record), 1, fp);\n\n        if (r.id == id && r.active) return &r;\n        if (r.id < id) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return NULL;\n}\n\nint db_list_all(FILE *fp) {\n    Record r;\n    rewind(fp);\n    int count = 0;\n\n    while (fread(&r, sizeof(Record), 1, fp) == 1) {\n        if (r.active) {\n            printf(\"%6u  %-20s  $%10.2f\\n\",\n                   r.id, r.name, r.balance);\n            count++;\n        }\n    }\n    return count;\n}\n\nint db_delete(FILE *fp, uint32_t id) {\n    Record r;\n    rewind(fp);\n\n    while (fread(&r, sizeof(Record), 1, fp) == 1) {\n        if (r.id == id && r.active) {\n            /* \"Soft delete\" by marking inactive */\n            r.active = 0;\n            fseek(fp, - (long)sizeof(Record), SEEK_CUR);\n            fwrite(&r, sizeof(Record), 1, fp);\n            return 0;  /* deleted */\n        }\n    }\n    return -1;  /* not found */\n}\n\nint main(void)\n{\n    FILE *fp = fopen(\"database.bin\", \"r+b\");\n    if (fp == NULL) {\n        fp = fopen(\"database.bin\", \"w+b\");\n        if (fp == NULL) { perror(\"fopen\"); return 1; }\n    }\n\n    db_add(fp, \"Alice Johnson\", 45200.00);\n    db_add(fp, \"Bob Smith\", 33800.00);\n    db_add(fp, \"Carol Williams\", 72100.00);\n\n    printf(\"All records:\\n\");\n    db_list_all(fp);\n\n    printf(\"\\nFinding ID 2:\\n\");\n    Record *r = db_find_by_id(fp, 2);\n    if (r) printf(\"Found: %s, $%.2f\\n\", r->name, r->balance);\n\n    printf(\"\\nDeleting ID 1...\\n\");\n    db_delete(fp, 1);\n\n    printf(\"\\nAfter deletion:\\n\");\n    db_list_all(fp);\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "All records:\n     1  Alice Johnson        $45200.00\n     2  Bob Smith            $33800.00\n     3  Carol Williams       $72100.00\n\nFinding ID 2:\nFound: Bob Smith, $33800.00\n\nDeleting ID 1...\n\nAfter deletion:\n     2  Bob Smith            $33800.00\n     3  Carol Williams       $72100.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-file-copy-utility",
      children: "4. File Copy Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint copy_file(const char *src, const char *dst)\n{\n    FILE *in = fopen(src, \"rb\");\n    if (in == NULL) { perror(src); return -1; }\n\n    FILE *out = fopen(dst, \"wb\");\n    if (out == NULL) {\n        perror(dst);\n        fclose(in);\n        return -1;\n    }\n\n    char buf[8192];\n    size_t n;\n    while ((n = fread(buf, 1, sizeof(buf), in)) > 0) {\n        if (fwrite(buf, 1, n, out) != n) {\n            perror(\"fwrite\");\n            fclose(in); fclose(out);\n            return -1;\n        }\n    }\n\n    int ok = 1;\n    if (ferror(in)) { perror(\"fread\"); ok = 0; }\n    if (fclose(in) == EOF) { perror(\"fclose in\"); ok = 0; }\n    if (fclose(out) == EOF) { perror(\"fclose out\"); ok = 0; }\n    return ok ? 0 : -1;\n}\n\nint main(int argc, char *argv[])\n{\n    if (argc != 3) {\n        fprintf(stderr, \"Usage: %s <source> <dest>\\n\", argv[0]);\n        return 1;\n    }\n    return copy_file(argv[1], argv[2]) == 0 ? 0 : 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-checksumhashing-a-file-line-by-line",
      children: "5. Checksum/Hashing a File Line-by-Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nunsigned long djb2_hash(const unsigned char *str) {\n    unsigned long hash = 5381;\n    int c;\n    while ((c = *str++))\n        hash = ((hash << 5) + hash) + c;\n    return hash;\n}\n\nint main(int argc, char *argv[])\n{\n    if (argc != 2) {\n        fprintf(stderr, \"Usage: %s <file>\\n\", argv[0]);\n        return 1;\n    }\n\n    FILE *fp = fopen(argv[1], \"r\");\n    if (fp == NULL) { perror(\"fopen\"); return 1; }\n\n    char line[4096];\n    int line_num = 1;\n\n    while (fgets(line, sizeof(line), fp)) {\n        line[strcspn(line, \"\\n\")] = '\\0';  /* strip newline */\n        unsigned long h = djb2_hash((unsigned char*)line);\n        printf(\"%6d: 0x%08lX  %s\\n\", line_num++, h, line);\n    }\n\n    if (ferror(fp))\n        perror(\"Read error\");\n\n    fclose(fp);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-choice",
      children: "Multiple Choice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen"
        }), " return when it cannot open a file?\nA) EOF\nB) 0\nC) NULL\nD) -1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `fopen` returns `NULL` when it cannot open the file. Always check this before using the pointer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following correctly reads a line of text safely?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gets(buf);"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scanf(\"%s\", buf);"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets(buf, sizeof(buf), fp);"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf(fp, \"%s\", buf);"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `fgets(buf, sizeof(buf), fp)` reads at most `sizeof(buf)-1` characters and always null-terminates. The others risk buffer overflow."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek(fp, 0, SEEK_END)"
        }), " followed by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftell(fp)"
        }), " return?\nA) 0\nB) The number of remaining bytes\nC) The total file size in bytes\nD) EOF"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** This is the standard idiom for getting the file size in bytes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgetc"
        }), " signal end-of-file?\nA) Returns 0\nB) Returns NULL\nC) Returns EOF\nD) Returns -2"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `fgetc` returns `EOF` (typically -1) on end-of-file or error. Use `feof`/`ferror` to distinguish."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which mode opens a file for reading and writing without truncating it?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"w+\""
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"r+\""
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"a+\""
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"rw\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `\"r+\"` opens for reading and writing without truncation. File must exist."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgetc"
        }), " return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " rather than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), "?\nA) Historical accident\nB) To support Unicode\nC) To distinguish EOF (typically -1) from all valid byte values (0–255)\nD) To improve performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** If `fgetc` returned `char`, byte 0xFF (255) would be indistinguishable from EOF on platforms with signed `char`. Using `int` provides all 256 byte values plus a distinct EOF sentinel."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the return value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fread(buf, 100, 5, fp)"
        }), " if only 3 complete elements are available?\nA) 300\nB) 3\nC) 0\nD) EOF"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `fread` returns the number of **complete elements** read, not bytes. It returns 3 (fewer than requested 5)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which stream is unbuffered by default?\nA) stdin\nB) stdout\nC) stderr\nD) All file streams"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `stderr` is unbuffered by default so error messages appear immediately."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof(fp)"
        }), " return immediately after a successful ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fread"
        }), " that reads the last byte of the file?\nA) 0\nB) 1\nC) -1\nD) Implementation-defined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `feof(fp)` returns 0. The EOF flag is set only **after** a read operation fails because it reached the end. A successful read of the last byte does not set the flag."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the correct way to handle mixing reads and writes on a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"r+\""
        }), " stream?\nA) No special handling needed\nB) Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fflush"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), " between read and write operations\nC) Close and reopen the file\nD) Use different file pointers for reading and writing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** When switching between read and write on a `\"r+\"` or `\"w+\"` stream, you must call `fflush`, `fseek`, `rewind`, or `fsetpos` between the two operations."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "true-or-false",
      children: "True or False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "fscanf(fp, \"%s\", buf)"
          }), " is always safe to use."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** Without a width specifier, `%s` can overflow the buffer. Always use `\"%Ns\"` where N is one less than the buffer size."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Binary mode and text mode behave identically on Linux."
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True.** On POSIX systems (Linux, macOS), there is no distinction between text and binary modes."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "fflush(stdin)"
          }), " is portable C and works on all implementations."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** `fflush` is only defined for output streams by the C standard. `fflush(stdin)` is undefined behavior, though some platforms support it as an extension."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "tmpfile()"
          }), " creates a file that is automatically deleted when closed."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True.** The file is also deleted on normal program termination."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can call ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fseek"
          }), " on a pipe or socket."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** Pipes, sockets, and stdin (if redirected from a pipe) are not seekable. `fseek` returns -1 to indicate failure."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FILE*"
        }), " is the opaque handle for all file operations in C. It holds the file position, buffer, and error/EOF flags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fopen"
        }), " opens a file in a specified mode. Always check for NULL return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fclose"
        }), " closes a file, flushing buffers. Always close files to avoid resource leaks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access modes"
        }), " control read/write/append permissions and text/binary behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reading",
      children: "Reading"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character-by-character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns int to distinguish EOF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-oriented text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (bounds-checked), includes newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted/parsed input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery from mismatch is hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary bulk data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, no translation, struct-friendly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "writing",
      children: "Writing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for bulk, simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does NOT add newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles type conversion, alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, struct-friendly, not portable directly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positioning",
      children: "Positioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fseek/ftell"
        }), ": Standard random access, limited to 2GB on 32-bit systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rewind"
        }), ": Go to beginning + clear flags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fgetpos/fsetpos"
        }), ": Large file support with opaque fpos_t type"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "feof"
        }), ": Check after failed read to see if EOF was the cause"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ferror"
        }), ": Check after failed I/O to see if an error occurred"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "perror"
        }), ": Print human-readable error message (uses errno)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "clearerr"
        }), ": Reset EOF and error flags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffering",
      children: "Buffering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully buffered (_IOFBF)"
        }), ": Default for disk files. Best performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Line buffered (_IOLBF)"
        }), ": Default for stdout (terminal). Flush on newline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unbuffered (_IONBF)"
        }), ": Default for stderr. Immediate output."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-rules",
      children: "Key Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen"
        }), " return value for NULL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " as a loop condition → check the read function's return value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always close files with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fclose"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use binary mode (", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"rb\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"wb\""
        }), ") for non-text data, especially on Windows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf"
        }), " for robust line parsing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Specify maximum width with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%s"
        }), " to prevent buffer overflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fflush"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), " when switching between read and write on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r+"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "w+"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stderr"
        }), " is unbuffered → use it for error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fgetc"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), " → store in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " variable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Binary data written with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fwrite"
        }), " may not be portable across platforms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"r\""
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"r+\""
        }), " modes?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgetc"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), ". What happens if you store the result in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), " variable?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while (!feof(fp)) { ... }"
        }), " considered incorrect for reading files?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf"
        }), " for reading strings?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setvbuf"
        }), " to change a stream's buffering mode?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between sequential and random file access. Which functions support each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why are binary files not directly portable between different systems?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b"
        }), " modifier in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"rb\""
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"wb\""
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tmpfile()"
        }), " differ from creating a temporary file with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tmpnam()"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), " on a stream connected to stdin?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word Count"
          }), ": Write a program that reads a text file and counts the number of characters, words, and lines. Accept the filename as a command-line argument."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Student Grade Report"
          }), ": Write a program that reads a CSV file containing student names and scores, computes the average, and writes a formatted report to a new file. Format: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"Name,Score\\n\""
          }), " on input, formatted table with grade letter on output."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary Integer Store"
          }), ": Write a program that stores an array of 1000 random integers to a binary file, then reads them back and verifies each value."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Log File Analyzer"
          }), ": Write a program that reads a log file (one timestamped entry per line) and counts entries by hour. The log format is: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[2024-01-15 14:30:45] Message text"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Config File Reader"
          }), ": Write a program that reads a simple configuration file with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "key = value"
          }), " format (one per line, lines starting with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#"
          }), " are comments) and prints all key-value pairs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File Splitter"
          }), ": Write a program that splits a large binary file into multiple smaller files of a specified maximum size. The output files should be named ", (0,jsx_runtime.jsx)(_components.code, {
            children: "original.001"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "original.002"
          }), ", etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Record Editor"
          }), ": Write a program that opens a binary file of fixed-size records, allows the user to view record N, edit fields, and save changes in-place using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fseek"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Simple Database"
          }), ": Implement a contact management database using a binary file. Each contact has a name, phone number, and email address (fixed-size strings). Provide a menu with options to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add a new contact (append to file)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "List all contacts (sequential read)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search by name (sequential or indexed scan)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Delete by name (mark as deleted with a flag, or rewrite the file)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update a contact by name"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External Merge Sort"
          }), ": Implement an external merge sort algorithm for a file too large to fit in memory:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read chunks that fit in memory, sort each chunk, write to temporary files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge the sorted temporary files into one sorted output file"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile()"
            }), " for intermediate storage"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Measure performance for different chunk sizes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File Integrity Checker"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a program that computes a hash (e.g., DJB2, FNV-1a) of a file's contents"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Store the hash in a separate ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".hash"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify the file against its stored hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle both text and binary files correctly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Serialization Format"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Design a simple binary serialization format that handles: integers (int32), strings (length-prefixed), floats (IEEE 754), and arrays"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write serialize/deserialize functions using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure the format is portable across little-endian and big-endian systems by writing bytes in network byte order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File Difference Tool (Simple diff)"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Read two text files line by line using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare them and report lines that differ"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Show context (2 lines before and after each difference)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle files of different lengths"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);
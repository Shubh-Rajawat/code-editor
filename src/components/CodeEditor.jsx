import  Editor  from '@monaco-editor/react'
import React, { useRef, useState } from 'react'


const files = {
    'script.js':{
        name : 'script.js',
        language : "javascript",
        defaultValue : "// You can code in JavaScript"
    },
    'script.py':{
        name : 'script.py',
        language : "python",
        defaultValue : "# You can code in Python"
    },
}

const CodeEditor = () => {
    const [output, setOutput] = useState('');
    const [code, setCode] = useState();
    const [fileName , setFileName] = useState('script.js');
    const file = files[fileName]
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
      editorRef.current = editor;
      console.log("Monaco",monaco)
    }
  
    function getValue() {
      setCode(editorRef.current.getValue());
      console.log("COde ->>>", editorRef.current.getValue())
    }

    const runCode = async() => {
        try {
          const result = eval(code);
          console.log("result ->> ", result)
          setOutput(result);
        } catch (error) {
          setOutput(`Error: ${error.message}`);
        }
      };

  return (
    <div>
        <div className="select-files">
            <button onClick={()=>{
                setFileName('script.js')
            }} >
                script.js
            </button>
            <button onClick={()=>{
                setFileName('script.py')
            }} >
                script.py
            </button>
            <button onClick={runCode}>Run</button>
        </div>
        <Editor 
        height="500px"
        width="100%"
        theme='vs-dark'
        defaultLanguage={file.language}
        path={file.name}
        defaultValue={file.defaultValue}
        onMount={handleEditorDidMount}
        onChange={getValue}
        />

    <iframe
      title="Code Output"
      style={{ width: '100%', height: '300px' }}
      srcDoc={output}
    />
    </div>
  )
}

export default CodeEditor;
import { Editor } from '@monaco-editor/react';
import React from 'react'
import { useState } from 'react'

const CodeEditor = ( { onChange, language, code, theme } ) => {
    const [ value, setValue ] = useState( code || '' );

    const handleEditorChange = ( value ) => {
        setValue( value );
        onChange( "code", value );
    };
    return (
        <div className='overlay rounded-md overflow-hidden w-full h-full shadow-4xl' >
            <Editor
                height="85vh"
                width={ `100%` }
                language={ language || 'javascript' }
                value={ value }
                theme={ theme }
                defaultValue='// You can code here'
                onChange={ handleEditorChange }
            />
        </div>
    )
}

export default CodeEditor
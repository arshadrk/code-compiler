  ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
     
    editor.setTheme("ace/theme/dawn");
    editor.getSession().setMode("ace/mode/python");
    editor.$blockScrolling = Infinity;
     editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
   
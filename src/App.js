import './App.css';
import React from 'react';
import { marked } from "marked";

marked.use({
  gfm: true,
  breaks: true
});

const placeholder = `# h1
## h2

inline code: \`<div></div>\`

\`\`\`
// code block:

function example () {
  return \'Hello World!\';
}
\`\`\`

**bold text**

[link text](https://www.freecodecamp.org)

> Block Quote

- list element 1.
- list element 2.

![petah](https://i.gyazo.com/6bfe4c10bc6ebaab3447944b5576bcb3.png)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      output: marked.parse(placeholder)
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      output: marked.parse(event.target.value)
    })
  }

  render() {
    return (
      <div id="wrapper">
        <header id="title">Markdown Previewer</header>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}>

        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.output }}>
        </div>


      </div>
    );
  }
}

export default App;

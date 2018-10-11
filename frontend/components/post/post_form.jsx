import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[caption]', this.state.caption);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.postPosts(formData);
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} width='300px' /> : null;

    return (
      <form onSubmit={this.handleSubmit} >
        <h2>This is post form</h2>

        <label>Caption:
          <input type="text"
            value={this.state.caption}
            onChange={this.handleInput('caption')}
          />
        </label>

        <input type="file"
          onChange={this.handleFile}
        />

        <div>
          {preview}
        </div>

        <button> Submit Post</button >
      </form >
    );
  }

}

export default PostForm;
import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      location: '',
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
    formData.append('post[location]', this.state.location);
    formData.append('post[author_id]', this.props.authorId);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    this.props.postPosts(formData).then(console.log("You posted it!"))
      .then(() => (
        this.setState({
          caption: '',
          location: '',
          photoFile: null,
          photoUrl: null
        })
      ))
      .then(() => {
        this.props.history.push('/');
      }
      );
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} width='300px' /> : null;

    return (
      <div className='post-form'>
        <form onSubmit={this.handleSubmit} >
          <h2>Share a photo</h2>

          <div className='post-form-file-header'>
            {/* <div className='post-form-file-caption-container'> */}
            <input type="text"
              placeholder='Write a caption...'
              onChange={this.handleInput('caption')}
            />
            {/* </div> */}

            {/* <div className='post-form-file-caption-container'> */}
            <input type="text"
              placeholder='Add a location...'
              onChange={this.handleInput('location')}
            />
            {/* </div> */}
          </div>


          <div className='post-form-file-upload-container'>
            <input type="file"
              onChange={this.handleFile}
              class='file-input-button'
            />
          </div>

          <div className='post-form-preview'>
            {preview}
          </div>

          <div className='post-form-file-submit-button'>
            <button> Submit Post</button >
          </div>

          <div class='sign-in-error'>
            {this.renderErrors()}
          </div>

        </form >
      </div >
    );

  }

}

export default PostForm;
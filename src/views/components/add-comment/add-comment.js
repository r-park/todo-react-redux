import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './add-comment.css';
import Img from 'react-image';
import Button from '../button';
import Textarea from 'react-textarea-autosize';

export class AddComment extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showHideSideSubmit: 'hidden'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShowHideSubmit = this.toggleShowHideSubmit.bind(this);
  }

  render() {
    
    return (
      <div className='add-comment'>
        <form onSubmit={this.handleSubmit} noValidate>
          { this.renderHeader() }
          { this.renderBody() }
          { this.renderSubmit() }
        </form>
      </div>
    );
  }

  renderBody() {
    return ( <Textarea
      className='textarea-body'
      name='body'
      value={this.state['body']}
      placeholder={'זה המקום לכתוב משהו. האם יש מישהו שאתה חושב שממלא המשימה צריך לדבר איתו? האם יש משהו שכדאי שממלא המשימה יידע?'}
      ref={e => this['bodyInput'] = e}
      onChange={this.handleChange}
      onFocus={() => this.toggleShowHideSubmit(true) }
      onBlur={() => this.toggleShowHideSubmit(false) }
      />)
  }

  toggleShowHideSubmit(isShow) {
    const isShowCss = (isShow || this.state.body)? 'shown' : 'hidden';
    this.setState({showHideSideSubmit: isShowCss});
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.body || this.state.body.length <= 1) {
      return;
    }
    this.props.createComment({
      taskId: this.props.task.id,
      body: this.state.body,
      creator: this.props.auth,
      created: new Date()
    });
    
    this.setState({body: ''});
  }

  renderHeader() {
    const { auth } = this.props;
    if (!auth) return;
    const avatar = auth.photoURL ? <Img className='avatar' src={auth.photoURL} alt={auth.displayName}/> : '';
    return (
      <span>{ avatar } { auth.displayName }</span>
    );
  }

  renderSubmit() {
    return (
      <input className={`button button-small button-add-comment ${this.state.showHideSideSubmit}` }
      type="submit" value="הוסף הערה" />);
  }

}

AddComment.propTypes = {
  task: PropTypes.object.isRequired,
  createComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


export default AddComment;

import alt from '../alt';
import MessageActions from '../actions/MessageActions'

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.userInput = '';
    this.messages = [];
  }

  onDownloadSuccess(messages) {
    this.messages = messages;
  }

  onUpdateUserInput(userInput) {
    this.userInput = userInput;
  }

  onSendSuccess(msg) {
    this.messages.push(msg);
  }
}

export default alt.createStore(MessageStore, 'MessageStore');
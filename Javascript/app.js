

class Channel extends React.Component {
    onClick() {
        console.log(this.props.name)
    }
    render(){
        return (
        <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component {
    render () {

        return (
            <ul>
                {
                    this.props.channels.map((channel, index) => {
                        return(
                            <Channel name={channel.name} key={index}/>
                        )
                    })
                }
            </ul>
        )
    }
}

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeChannelForm(e) {
        this.setState({
            channelName: e.target.value
        });
    }
    onSubmitChannelForm(e) {
        let {channelName} = this.state;
        console.log(channelName);
        this.setState({
            channelName: ''
        });
        this.props.addChannel(channelName);

        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmitChannelForm.bind(this)}>
                <input 
                type='text' onChange={this.onChangeChannelForm.bind(this)}
                value={this.state.channelName}
                />

            </form>
        )
    }
}

class ChannelSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                {name: 'Hardware Support'},
                {name: 'Software Support'}
            ]
        };
    }

    addChannel(name) {
        let { channels } = this.state;
        channels.push({name: name});
        console.log(channels);
        this.setState({
            channels: channels
        });
    }

    render () {
        return (
            <div>
                <ChannelList channels={this.state.channels} />
                <ChannelForm addChannel={this.addChannel.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection />, document.getElementById('app'));
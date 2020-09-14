import React from 'react';

export const ModeContext = React.createContext();

export class ModeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
            toggleMode: () => {
                this.setState(state => ({
                    enabled: !state.enabled
                }));
            }
        }
    }
    render() {
        return <ModeContext.Provider value={this.state}>
            {this.props.children}
        </ModeContext.Provider>
    }
}

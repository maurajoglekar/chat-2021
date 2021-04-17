import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledLogin = styled.div`

.App-header {
    background-color: #FFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  input{
      width: 250px;
      height: 24px;
      margin-top: 15px;
      padding: 0 30px;
  }

  button {
    width: 315px;
    height: 30px;
    margin-top: 15px;
    background-color: #FF3008;
    color: #FFF;
    padding: 0 30px;
}
`;

export const propTypes = {
    history: PropTypes.object.isRequired
};

function Login({ history }) {

    const gotoChat = obj => { history.push(`chat`) };
    return (
        <StyledLogin>
            <div className="App-header">
                <form id="login-form" onSubmit={(obj) => gotoChat(obj)}>
                    <div>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="Type your username..."
                            ref={() => null}
                        />
                    </div>
                    <button type="submit" onClick={() => null}>
                        Join the DoorDash Chat!
                    </button>
                </form>
            </div>
        </StyledLogin>
    );
}

Login.propTypes = propTypes;
export default withRouter(Login);
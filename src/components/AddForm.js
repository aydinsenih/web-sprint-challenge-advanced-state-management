import React from "react";
import { connect } from "react-redux";
import { addSmurf, setErrorText } from "../actions";

const initialform = { name: "", description: "", nickname: "", position: "" };

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            form: initialform,
        };
    }

    handleChange = (e) => {
        this.setState({
            form: { ...this.state.form, [e.target.name]: e.target.value },
        });
    };

    handleClick = (e) => {
        e.preventDefault();
        if (
            this.state.form.name &&
            this.state.form.nickname &&
            this.state.form.position
        ) {
            this.props.addSmurf(this.state.form);
        } else {
            this.props.setErrorText("validation failed");
        }
        this.setState({ form: initialform });
    };
    render() {
        return (
            <section>
                <h2>Add Smurf</h2>
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            value={this.state.form.name}
                            name="name"
                            id="name"
                        />
                        <label htmlFor="position">Position:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            value={this.state.form.position}
                            name="position"
                            id="position"
                        />
                        <label htmlFor="nickname">Nickname:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            value={this.state.form.nickname}
                            name="nickname"
                            id="nickname"
                        />
                        <label htmlFor="description">Description:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            value={this.state.form.description}
                            name="description"
                            id="description"
                        />
                    </div>
                    {this.props.error ? (
                        <div
                            data-testid="errorAlert"
                            className="alert alert-danger"
                            role="alert"
                        >
                            Error:{this.props.error}
                        </div>
                    ) : (
                        <></>
                    )}
                    <button>Submit Smurf</button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { addSmurf, setErrorText })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.

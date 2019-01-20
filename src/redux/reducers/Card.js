const initialState = {
	company: "",
	cardNumber: "",
	date: "",
	name: ""
};

const Card = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATECARDCOMPANY":
			return Object.assign({}, state, { company: action.text });
		case "UPDATECARDNUMBER":
			return Object.assign({}, state, { cardNumber: action.text });
		case "UPDATECARDDATE":
			return Object.assign({}, state, { date: action.text });
		case "UPDATECARDNAME":
			return Object.assign({}, state, { name: action.text });
		default:
			return state;
	}
};
export default Card;

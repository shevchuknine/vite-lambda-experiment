import React, {useEffect, useState} from 'react';
import Terms from "./Terms.jsx";
import loadData from "./loadData.js";

const TermsWrapper = () => {
	const [termsData, setTermsData] = useState();

	useEffect(() => {
		loadData().then(setTermsData);
	}, []);

	return (
		<Terms data={termsData} />
	);
};

export default TermsWrapper;

import React, { Component } from 'react';
import Profile from '../component/CirculmVitae/Profile';
import InfoProfileList from '../component/CirculmVitae/InfoProfileList';
import CarrerList from '../component/CirculmVitae/CarrerList';

const INFOS = [
	{
		info: 'Address',
		particular: 'LAc2; Tunis'
	},
	{
		info: 'Phone',
		particular: '+216 92 455 453'
	},
	{
		info: 'E-mail',
		particular: 'ousemakotti@gmail.com'
	},
	{
		info: 'Date of birth',
		particular: '1991-06-19'
	},
	{
		info: 'Linkedin',
		particular: 'www.google.com'
	}
];

const SKILLS = [
	{
		info: 'C/C++',
		particular: '',
		percent: '40'
	},
	{
		info: 'JAVA',
		particular: '',
		percent: '60'
	},
	{
		info: 'J2EE',
		particular: '',
		percent: '55'
	},
	{
		info: 'HTML5',
		particular: '',
		percent: '70'
	},
	{
		info: 'CSS3',
		particular: '',
		percent: '60'
	},
	{
		info: 'JAVASCRIPT',
		particular: '',
		percent: '80'
	},
	{
		info: 'PHP5',
		particular: '',
		percent: '45'
	},
	{
		info: 'SQL',
		particular: '',
		percent: '50'
	},
	{
		info: 'Symfony',
		particular: '',
		percent: '40'
	},
	{
		info: 'LDA',
		particular: '',
		percent: '45'
	}
];

const CARRERS = [
	{
		periode: '2017-10',
		title: 'Contestant',
		company: 'IEEEXtreme, Tunisia',
		about: '24-Hour Programing Competition'
	},
	{
		periode: '2017-12',
		title: 'Trainer',
		company: 'Hour of Code, Tunisia',
		about: 'Training sessions to primary school student'
	},
	{
		periode: '2018-01. 2018-04',
		title: 'Trainer',
		company: 'TUNIROBOTS',
		about: 'Training sessions to 7-17 aged students in microcontroller programming'
	},
	{
		periode: '2017-10',
		title: 'Contestant',
		company: 'IEEEXtreme, Tunisia',
		about: '24-Hour Programing Competition'
	},
	{
		periode: '2017-12',
		title: 'Trainer',
		company: 'Hour of Code, Tunisia',
		about: 'Training sessions to primary school student'
	},
	{
		periode: '2018-01. 2018-04',
		title: 'Trainer',
		company: 'TUNIROBOTS',
		about: 'Training sessions to 7-17 aged students in microcontroller programming'
	},
	{
		periode: '2017-10',
		title: 'Contestant',
		company: 'IEEEXtreme, Tunisia',
		about: '24-Hour Programing Competition'
	},
	{
		periode: '2017-12',
		title: 'Trainer',
		company: 'Hour of Code, Tunisia',
		about: 'Training sessions to primary school student'
	},
	{
		periode: '2018-01. 2018-04',
		title: 'Trainer',
		company: 'TUNIROBOTS',
		about: 'Training sessions to 7-17 aged students in microcontroller programming'
	}
];
const EDUCATION = [
	{
		periode: '2011-09. 2016-06',
		title: 'Carthage Byrsa High School',
		company: '',
		about: 'Graduated with honors'
	},
	{
		periode: '2016-09. 2021-06',
		title: 'Natonal Institute of Applied Sciences and Technology (INSAT) ',
		company: '',
		about: 'Software engineering field'
	}
];

class CheckpointReact5 extends Component {
	render() {
		return (
			<div className="columnContainer">
				<div className="minBox">
					<Profile
						image={require('../static/profil2.jpg')}
						fullName={'Kotti Oussema'}
						stage={'Software engineering student'}
					/>
					<InfoProfileList title={'Personal info'} data={INFOS} />
					<InfoProfileList title={'Skills'} data={SKILLS} />
				</div>
				<div
					className="maxBox"
					style={{
						paddingLeft: 5,
						paddingRight: 5
					}}
				>
					<p>
						On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
						distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem
						Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une
						distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français
						standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du
						Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers
						de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont
						apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter
						de petits clins d'oeil, voire des phrases embarassantes).
					</p>
					<CarrerList data={CARRERS} mode="Experience" />
					<CarrerList data={EDUCATION} mode="Education" />
				</div>
			</div>
		);
	}
}

export default CheckpointReact5;

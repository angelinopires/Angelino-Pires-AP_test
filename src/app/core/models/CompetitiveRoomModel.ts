import { Url } from 'url';

export class CompetitiveRoomModel {
	title: string;
	cta: {
		title: string;
		link: Url;
	};
	image: Url;
	matches: number;
	win: number;
	lose: number;
}
